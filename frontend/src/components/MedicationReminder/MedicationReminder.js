import React, { useState } from 'react';
import { X, Pill, Calendar, Clock, Bell } from 'lucide-react';

const MedicationReminder = ({ isOpen, onClose, onSetReminder }) => {
  const [frequency, setFrequency] = useState('daily');
  const [medicationName, setMedicationName] = useState('');
  const [time, setTime] = useState('');

  const handleSetReminder = () => {
    if (!medicationName || !time) {
      alert('Please fill in all fields');
      return;
    }

    const reminderData = {
      medicationName,
      frequency,
      time,
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
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ background: 'linear-gradient(to right, #142C52, #16808D)' }}>
              <Pill className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: '#16808D' }}>Medication Reminder</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Frequency Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3" style={{ color: '#16808D' }}>Reminder Frequency</label>
          <div className="grid grid-cols-3 gap-3">
            {['daily', 'weekly', 'custom'].map((freq) => (
              <button
                key={freq}
                onClick={() => setFrequency(freq)}
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                  frequency === freq
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-black hover:border-gray-600 text-gray-600'
                }`}
                style={{
                  borderColor: frequency === freq ? '#142C52' : '#000000',
                  backgroundColor: frequency === freq ? '#CCE7EC' : undefined,
                  color: frequency === freq ? '#16808D' : undefined
                }}
              >
                <Calendar className="w-5 h-5 mb-2" />
                <span className="text-sm font-medium capitalize">{freq}</span>
              </button>
            ))}
          </div>
        </div>

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

        {/* Time Input */}
        <div className="mb-8">
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
