import React, { useState } from 'react';
import { X, Pill, Calendar, Clock, Bell, Plus, Trash2, ChevronDown } from 'lucide-react';

const MedicationReminder = ({ isOpen, onClose, onSetReminder }) => {
  const [frequency, setFrequency] = useState('daily');
  const [medicationName, setMedicationName] = useState('');
  const [time, setTime] = useState('');
  const [showAdvancedCustom, setShowAdvancedCustom] = useState(false);
  const [customDays, setCustomDays] = useState([]);
  const [customTimes, setCustomTimes] = useState(['']);
  const [dose, setDose] = useState('');
  const [notes, setNotes] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customFrequency, setCustomFrequency] = useState('Every Day'); // Custom frequency selection

  const handleSetReminder = () => {
    if (!medicationName) {
      alert('Please enter medication name');
      return;
    }

    // Validation for custom frequency
    if (frequency === 'custom') {
      if (customFrequency === 'Custom Days' && customDays.length === 0) {
        alert('Please select at least one day for Custom Days frequency');
        return;
      }
      if (customTimes.every(t => !t)) {
        alert('Please add at least one time for custom frequency');
        return;
      }
    } else if (!time) {
      alert('Please select a time');
      return;
    }

    const reminderData = {
      medicationName,
      frequency,
      time: frequency === 'custom' ? customTimes.filter(t => t) : time,
      customDays: frequency === 'custom' && customFrequency === 'Custom Days' ? customDays : undefined,
      customFrequency: frequency === 'custom' ? customFrequency : undefined,
      dose,
      notes,
      startDate,
      endDate,
      timestamp: new Date().toISOString()
    };

    // Save to localStorage
    const existingReminders = JSON.parse(localStorage.getItem('medicationReminders') || '[]');
    existingReminders.push(reminderData);
    localStorage.setItem('medicationReminders', JSON.stringify(existingReminders));

    // Schedule the reminder
    scheduleReminder(reminderData);

    onSetReminder(reminderData);
    onClose();
  };

  // Helper functions for custom options
  const toggleDay = (day) => {
    setCustomDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const addCustomTime = () => {
    setCustomTimes(prev => [...prev, '']);
  };

  const removeCustomTime = (index) => {
    setCustomTimes(prev => prev.filter((_, i) => i !== index));
  };

  const updateCustomTime = (index, value) => {
    setCustomTimes(prev => prev.map((t, i) => i === index ? value : t));
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const scheduleReminder = (reminderData) => {
    const [hours, minutes] = reminderData.time.split(':');
    const now = new Date();
    const reminderTime = new Date();
    reminderTime.setHours(parseInt(hours));
    reminderTime.setMinutes(parseInt(minutes));
    reminderTime.setSeconds(0);

    // If the time has passed today, schedule for tomorrow
    if (reminderTime <= now) {
      reminderTime.setDate(reminderTime.getDate() + 1);
    }

    const timeUntilReminder = reminderTime - now;

    setTimeout(() => {
      showMedicationNotification(reminderData);
      
      // Schedule recurring reminders based on frequency
      if (reminderData.frequency === 'daily') {
        setInterval(() => {
          showMedicationNotification(reminderData);
        }, 24 * 60 * 60 * 1000); // Every 24 hours
      } else if (reminderData.frequency === 'weekly') {
        setInterval(() => {
          showMedicationNotification(reminderData);
        }, 7 * 24 * 60 * 60 * 1000); // Every 7 days
      }
    }, timeUntilReminder);
  };

  const showMedicationNotification = (reminderData) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Medication Reminder', {
        body: `Time to take ${reminderData.medicationName}`,
        icon: '/pill-icon.png',
        requireInteraction: true
      });
    } else {
      alert(`Medication Reminder: Time to take ${reminderData.medicationName}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300" onClick={(e) => e.stopPropagation()}>
        {/* Header with Full-Width Navigation Bar at Top */}
        <div className="relative -mt-8 -mx-8 mb-8">
          {/* Navigation Bar Background - Full Width at Top */}
          <div 
            className="absolute inset-0 rounded-t-2xl"
            style={{ 
              background: 'linear-gradient(to right, #142C52, #16808D)',
              zIndex: 0
            }}
          />
          
          {/* Header Content */}
          <div className="relative z-10 flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ background: 'linear-gradient(to right, #142C52, #16808D)' }}>
                <Pill className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Medication Reminder</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Frequency Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3" style={{ color: '#16808D' }}>Reminder Frequency</label>
          <div className="grid grid-cols-3 gap-3">
            {['daily', 'weekly', 'custom'].map((freq) => (
              <button
                key={freq}
                onClick={() => {
                  setFrequency(freq);
                  if (freq === 'custom') {
                    setShowAdvancedCustom(true);
                  } else {
                    setShowAdvancedCustom(false);
                  }
                }}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                  frequency === freq
                    ? 'border-black text-blue-600'
                    : 'border-black hover:border-gray-600 text-gray-600'
                }`}
                style={{
                  borderColor: '#000000',
                  backgroundColor: frequency === freq ? '#CCE7EC' : undefined,
                  color: frequency === freq ? '#16808D' : undefined
                }}
              >
                <Calendar className="w-5 h-5 mb-2" />
                <span className="text-sm font-medium capitalize">{freq}</span>
                {freq === 'custom' && (
                  <ChevronDown className={`w-4 h-4 mt-1 transition-transform ${showAdvancedCustom ? 'rotate-180' : ''}`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Custom Options */}
        {frequency === 'custom' && showAdvancedCustom && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold mb-4 text-gray-700">Custom Schedule Options</h3>
            
            {/* Frequency Dropdown List */}
            <div className="mb-4">
              <label className="block text-xs font-medium mb-2" style={{ color: '#16808D' }}>Select Frequency</label>
              <select
                value={customFrequency}
                onChange={(e) => setCustomFrequency(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                style={{ 
                  caretColor: '#CCE7EC',
                  borderColor: '#CCE7EC'
                }}
              >
                <option value="Every Day">Every Day</option>
                <option value="Every 2 Days">Every 2 Days</option>
                <option value="Every 3 Days">Every 3 Days</option>
                <option value="Every Week">Every Week</option>
                <option value="Every 2 Weeks">Every 2 Weeks</option>
                <option value="Every Month">Every Month</option>
                <option value="Custom Days">Custom Days</option>
              </select>
            </div>

            {/* Days Selection - Only show when Custom Days is selected */}
            {customFrequency === 'Custom Days' && (
              <div className="mb-4">
                <label className="block text-xs font-medium mb-2" style={{ color: '#16808D' }}>Select Days</label>
                <div className="grid grid-cols-4 gap-2">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`px-2 py-1 text-xs rounded border transition-all ${
                        customDays.includes(day)
                          ? 'text-white border-black'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                      }`}
                      style={{
                        backgroundColor: customDays.includes(day) ? '#CCE7EC' : undefined,
                        color: customDays.includes(day) ? '#16808D' : undefined
                      }}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Multiple Times */}
            <div className="mb-4">
              <label className="block text-xs font-medium mb-2" style={{ color: '#16808D' }}>Reminder Times</label>
              {customTimes.map((customTime, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="time"
                    value={customTime}
                    onChange={(e) => updateCustomTime(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                  />
                  {customTimes.length > 1 && (
                    <button
                      onClick={() => removeCustomTime(index)}
                      className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addCustomTime}
                className="flex items-center space-x-1 text-sm font-medium transition-colors"
                style={{ color: '#16808D' }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#142C52';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#16808D';
                }}
              >
                <Plus className="w-4 h-4" />
                <span>Add Time</span>
              </button>
            </div>
          </div>
        )}

        {/* Medication Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" style={{ color: '#16808D' }}>Medication Name</label>
          <input
            type="text"
            value={medicationName}
            onChange={(e) => setMedicationName(e.target.value)}
            placeholder="Enter medication name"
            className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            style={{ caretColor: '#CCE7EC' }}
          />
        </div>

        {/* Time Input - Hide for custom since it's handled in advanced section */}
        {frequency !== 'custom' && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" style={{ color: '#16808D' }}>Time</label>
            <div className="relative">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                style={{ caretColor: '#CCE7EC' }}
              />
              <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Additional Options */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" style={{ color: '#16808D' }}>Dose (Optional)</label>
          <input
            type="text"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            placeholder="e.g., 1 tablet, 5ml, 2 capsules"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            style={{ caretColor: '#CCE7EC' }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" style={{ color: '#16808D' }}>Notes (Optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g., Take with food, avoid dairy, etc."
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
            style={{ caretColor: '#CCE7EC' }}
          />
        </div>

        {/* Date Range */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2" style={{ color: '#16808D' }}>Treatment Duration (Optional)</label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Set Reminder Button */}
        <button
          onClick={handleSetReminder}
          className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          style={{
            background: 'linear-gradient(to right, #142C52, #16808D)',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(to right, #16808D, #142C52)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(to right, #142C52, #16808D)';
          }}
        >
          <Bell className="w-5 h-5" />
          <span>Set Reminder</span>
        </button>
      </div>
    </div>
  );
};

export default MedicationReminder;
