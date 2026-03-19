import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Search, Zap, Brain, Eye, Mic, Keyboard, Mouse, Monitor, Headphones, Globe, Calendar, Clock, Bell, Bookmark, Share2, Download, Upload, Filter, SortAsc, Grid, List, ChevronDown, X, BookOpen, FileText, Image, Video, Music, Map, Compass, Navigation, Palette, Brush, Eraser, Scissors, Copy, Clipboard, Save, RefreshCw, RotateCcw, ZoomIn, ZoomOut, Maximize, Minimize, Move, Pin, Lock, Unlock, EyeOff, Volume1, VolumeX, Wifi, WifiOff, Battery, BatteryLow, BatteryFull, Cpu, HardDrive, Usb, Bluetooth, Smartphone, Tablet, Laptop, Tv, Radio, Speaker, Camera, CameraOff, VideoOff, Phone, PhoneOff, Mail, MailOpen, Send, MessageCircle, MessageSquare, User, Users, UserPlus, UserMinus, UserCheck, UserX, Crown, Shield, Award, Medal, Trophy, Star, Heart, ThumbsUp, ThumbsDown, AlertCircle, AlertTriangle, Info, HelpCircle, CheckCircle, XCircle, Loader, MoreVertical, MoreHorizontal, Menu, Home, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, ChevronUp, SkipBack, SkipForward, Rewind, FastForward, Play, Pause, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Target, Type, Hand, Link, Pill, Languages, Moon, Sun, Contrast } from 'lucide-react';
import MedicationReminder from '../MedicationReminder/MedicationReminder';

const RightAccessibilitySidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showReadsAloudModal, setShowReadsAloudModal] = useState(false);
  const [showAdvancedSearchModal, setShowAdvancedSearchModal] = useState(false);
  const [searchCategory, setSearchCategory] = useState('all');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [readingSpeed, setReadingSpeed] = useState(1);
  const [medicationReminder, setMedicationReminder] = useState(null);
  const [showMedicationModal, setShowMedicationModal] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [readingVoice, setReadingVoice] = useState('default');
  const [highlightText, setHighlightText] = useState(true);
  const [autoScroll, setAutoScroll] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [simplifyText, setSimplifyText] = useState(false);
  const speechRef = useRef(null);

  // Load theme preference
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   localStorage.getItem('isDarkMode');
      const hasDarkClass = document.documentElement.classList.contains('dark');
      const isDark = theme === 'dark' || theme === 'true' || hasDarkClass;
      setIsDarkMode(isDark);
    };
    checkTheme();
    window.addEventListener('storage', checkTheme);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    const interval = setInterval(checkTheme, 500);
    return () => {
      window.removeEventListener('storage', checkTheme);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // Load saved language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Load dyslexia font and high contrast settings
  useEffect(() => {
    // Load dyslexia font setting
    const savedDyslexiaFont = localStorage.getItem('dyslexiaFont');
    if (savedDyslexiaFont === 'enabled') {
      setDyslexiaFont(true);
      document.body.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
    }

    // Load high contrast setting
    const savedHighContrast = localStorage.getItem('highContrast');
    if (savedHighContrast === 'enabled') {
      setHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }

    // Load simplify text setting
    const savedSimplifyText = localStorage.getItem('simplifyText');
    if (savedSimplifyText === 'enabled') {
      setSimplifyText(true);
      document.documentElement.classList.add('simplify-text');
    }
  }, []);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
    { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
    { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴' },
    { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
    { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'he', name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱' },
    { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'tl', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭' }
  ];

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('selectedLanguage', langCode);
    document.documentElement.lang = langCode;
    showNotification(`🌐 Language changed to ${languages.find(l => l.code === langCode)?.nativeName}`);
    setShowLanguageModal(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    showNotification(isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode');
  };

  const toggleDyslexiaFont = () => {
    setDyslexiaFont(!dyslexiaFont);
    if (!dyslexiaFont) {
      document.body.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
      localStorage.setItem('dyslexiaFont', 'enabled');
      showNotification('📖 Dyslexia font enabled');
    } else {
      document.body.style.fontFamily = '';
      localStorage.setItem('dyslexiaFont', 'disabled');
      showNotification('📖 Dyslexia font disabled');
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add('high-contrast');
      localStorage.setItem('highContrast', 'enabled');
      showNotification('🔆 High contrast enabled');
    } else {
      document.documentElement.classList.remove('high-contrast');
      localStorage.setItem('highContrast', 'disabled');
      showNotification('🔆 High contrast disabled');
    }
  };

  const toggleSimplifyText = () => {
    setSimplifyText(!simplifyText);
    if (!simplifyText) {
      document.documentElement.classList.add('simplify-text');
      localStorage.setItem('simplifyText', 'enabled');
      showNotification('📝 Simplify text enabled');
    } else {
      document.documentElement.classList.remove('simplify-text');
      localStorage.setItem('simplifyText', 'disabled');
      showNotification('📝 Simplify text disabled');
    }
  };

  const startReading = () => {
    setIsReading(true);
    const text = document.body.innerText;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = readingSpeed;
      utterance.pitch = 1;
      utterance.volume = 1;
      speechRef.current = utterance;
      speechSynthesis.speak(utterance);
    }
  };

  const stopReading = () => {
    setIsReading(false);
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  // Medication reminder
  const handleSetMedicationReminder = () => {
    setShowMedicationModal(true);
  };

  const handleMedicationReminderSet = (reminderData) => {
    setMedicationReminder(reminderData);
    showNotification(`💊 Medication reminder set for ${reminderData.medicationName} at ${reminderData.time}`);
  };

  const handleCloseMedicationModal = () => {
    setShowMedicationModal(false);
  };

  // Check for medication reminders
  useEffect(() => {
    const checkMedicationReminder = () => {
      const saved = localStorage.getItem('medicationReminder');
      if (saved) {
        const reminder = JSON.parse(saved);
        const now = new Date();
        const currentHours = now.getHours();
        const currentMinutes = now.getMinutes();
        
        if (currentHours === reminder.hours && currentMinutes === reminder.minutes) {
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Medication Reminder', {
              body: 'Time to take your medication!',
              icon: '/pill-icon.png'
            });
          }
          showNotification('💊 Medication reminder: Time to take your medication!');
        }
      }
    };

    const interval = setInterval(checkMedicationReminder, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Show notification
  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  const searchCategories = [
    { id: 'all', label: 'All Content', icon: Grid },
    { id: 'text', label: 'Text Only', icon: FileText },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'audio', label: 'Audio', icon: Music },
    { id: 'documents', label: 'Documents', icon: BookOpen },
    { id: 'links', label: 'Links', icon: Link },
    { id: 'buttons', label: 'Buttons', icon: Mouse },
    { id: 'forms', label: 'Forms', icon: Square },
    { id: 'tables', label: 'Tables', icon: Grid },
    { id: 'headings', label: 'Headings', icon: Type },
    { id: 'lists', label: 'Lists', icon: List },
  ];

  return (
    <>
      {/* Right Sidebar */}
      <div className="accessibility-sidebar fixed right-2 top-[45%] -translate-y-1/2 z-[9998] bg-white rounded-2xl p-3 shadow-2xl border border-gray-200" style={{ position: 'fixed', zIndex: 9998, right: '8px', top: '45%', transform: 'translateY(-50%)', visibility: 'visible', opacity: 1 }}>
        <div className="flex flex-col space-y-2">
          {/* Reads Page Aloud */}
          <button
            onClick={() => setShowReadsAloudModal(true)}
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title="Reads Page Aloud"
          >
            {isReading ? <Volume2 className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
          </button>

          {/* Advanced Search */}
          <button
            onClick={() => setShowAdvancedSearchModal(true)}
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title="Advanced Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Language Selection */}
          <button
            onClick={() => setShowLanguageModal(true)}
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title="Change Language"
          >
            <Languages className="w-5 h-5" />
          </button>

          {/* Medication Reminder */}
          <button
            onClick={handleSetMedicationReminder}
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title="Set Medication Reminder"
          >
            <Pill className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white px-6 py-3 rounded-lg shadow-lg z-[9998] animate-slide-in-right" style={{ position: 'fixed', zIndex: 9998 }}>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Medication Reminder Modal */}
      <MedicationReminder
        isOpen={showMedicationModal}
        onClose={handleCloseMedicationModal}
        onSetReminder={handleMedicationReminderSet}
      />

      {/* Reads Page Aloud Modal */}
      {showReadsAloudModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={() => setShowReadsAloudModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="relative -mt-8 -mx-8 mb-8">
              <div className="absolute inset-0 rounded-t-2xl" style={{ background: 'linear-gradient(to right, #142C52, #16808D)', zIndex: 0 }} />
              <div className="relative z-10 flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ background: 'linear-gradient(to right, #142C52, #16808D)' }}>
                    <Volume2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Reads Page Aloud</h2>
                </div>
                <button 
                  onClick={() => setShowReadsAloudModal(false)}
                  className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20" 
                  style={{ backgroundColor: 'transparent' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <div className="space-y-6">
                {/* Voice Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Voice Selection</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'default', name: 'Default Voice', desc: 'System default voice' },
                      { id: 'female', name: 'Female Voice', desc: 'Natural female voice' },
                      { id: 'male', name: 'Male Voice', desc: 'Natural male voice' },
                    ].map((voice) => (
                      <label key={voice.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="voice"
                          value={voice.id}
                          checked={readingVoice === voice.id}
                          onChange={(e) => setReadingVoice(e.target.value)}
                          className="mr-3 text-[#16808D] focus:ring-[#16808D]"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{voice.name}</div>
                          <div className="text-sm text-gray-500">{voice.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reading Speed */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Reading Speed</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Slow</span>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={readingSpeed}
                      onChange={(e) => setReadingSpeed(parseFloat(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#16808D]"
                    />
                    <span className="text-sm text-gray-600">Fast</span>
                    <span className="text-sm font-medium text-gray-900 ml-2">{readingSpeed}x</span>
                  </div>
                </div>

                {/* Text Options */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Text Options</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">Highlight Text</div>
                        <div className="text-sm text-gray-500">Highlight text being read</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={highlightText}
                        onChange={(e) => setHighlightText(e.target.checked)}
                        className="w-5 h-5 text-[#16808D] rounded focus:ring-[#16808D]"
                      />
                    </label>

                    <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">Auto Scroll</div>
                        <div className="text-sm text-gray-500">Auto-scroll to follow reading</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={autoScroll}
                        onChange={(e) => setAutoScroll(e.target.checked)}
                        className="w-5 h-5 text-[#16808D] rounded focus:ring-[#16808D]"
                      />
                    </label>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={isReading ? stopReading : startReading}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                      isReading 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] text-white'
                    }`}
                  >
                    {isReading ? 'Stop Reading' : 'Start Reading'}
                  </button>
                  <button
                    onClick={() => setShowReadsAloudModal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>

                {/* Instructions */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">How to Use:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Select your preferred voice type</li>
                    <li>• Adjust reading speed using the slider</li>
                    <li>• Enable text highlighting for better tracking</li>
                    <li>• Click "Start Reading" to begin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Advanced Search Modal */}
      {showAdvancedSearchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={() => setShowAdvancedSearchModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="relative -mt-8 -mx-8 mb-8">
              <div className="absolute inset-0 rounded-t-2xl" style={{ background: 'linear-gradient(to right, #142C52, #16808D)', zIndex: 0 }} />
              <div className="relative z-10 flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ background: 'linear-gradient(to right, #142C52, #16808D)' }}>
                    <Search className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Advanced Search</h2>
                </div>
                <button 
                  onClick={() => setShowAdvancedSearchModal(false)}
                  className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20" 
                  style={{ backgroundColor: 'transparent' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <div className="space-y-6">
              {/* Search Input */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Query</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your search query..."
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Category</h3>
                <div className="relative">
                  <button
                    onClick={() => setShowSearchDropdown(!showSearchDropdown)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent text-left flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      {(() => {
                        const category = searchCategories.find(cat => cat.id === searchCategory);
                        const Icon = category ? category.icon : Grid;
                        return <Icon className="w-5 h-5 text-gray-500" />;
                      })()}
                      <span>{searchCategories.find(cat => cat.id === searchCategory)?.label || 'All Content'}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showSearchDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showSearchDropdown && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {searchCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <button
                            key={category.id}
                            onClick={() => {
                              setSearchCategory(category.id);
                              setShowSearchDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            <Icon className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-900">{category.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Search Filters */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Filters</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Date</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent">
                      <option value="">Any Date</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                      <option value="year">This Year</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort Results</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent">
                      <option value="relevance">Most Relevant</option>
                      <option value="recent">Most Recent</option>
                      <option value="popular">Most Popular</option>
                      <option value="alphabetical">Alphabetical</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Options */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Options</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div>
                      <div className="font-medium text-gray-900">Exact Match</div>
                      <div className="text-sm text-gray-500">Search for exact phrase</div>
                    </div>
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#16808D] rounded focus:ring-[#16808D]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div>
                      <div className="font-medium text-gray-900">Include Synonyms</div>
                      <div className="text-sm text-gray-500">Search for related terms</div>
                    </div>
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#16808D] rounded focus:ring-[#16808D]"
                    />
                  </label>
                </div>
              </div>

              {/* Search Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 py-3 px-6 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] text-white rounded-lg font-medium transition-all">
                  Search
                </button>
                <button
                  onClick={() => setShowAdvancedSearchModal(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>

              {/* Search Tips */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Search Tips:</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Use specific keywords for better results</li>
                  <li>• Combine multiple terms with AND/OR</li>
                  <li>• Use quotes for exact phrases</li>
                  <li>• Try different categories for broader search</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={() => setShowLanguageModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300" onClick={(e) => e.stopPropagation()}>
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
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Multilingual Support</h2>
                </div>
                <button 
                  onClick={() => setShowLanguageModal(false)}
                  className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20" 
                  style={{ backgroundColor: 'transparent' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <div className="space-y-6">
                {/* Current Language Display */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Globe className="w-4 h-4" />
                    </div>
                    Current Language
                  </h3>
                  
                  <div className="bg-gradient-to-r from-[#16808D] to-blue-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm opacity-90 mb-1">Currently Selected</p>
                        <p className="text-2xl font-bold flex items-center">
                          {languages.find(l => l.code === currentLanguage)?.flag} {languages.find(l => l.code === currentLanguage)?.nativeName}
                        </p>
                        <p className="text-sm opacity-75 mt-1">{languages.find(l => l.code === currentLanguage)?.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-90">Welcome to PriHub</p>
                        <p className="text-lg font-medium">Your comprehensive cognitive support platform</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Translations */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Languages className="w-4 h-4" />
                    </div>
                    Quick Translations
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { key: 'home', label: 'Home', translation: 'Home' },
                      { key: 'accessibility', label: 'Accessibility', translation: 'Accessibility' },
                      { key: 'chatbot', label: 'Chatbot', translation: 'Chatbot' },
                      { key: 'focus', label: 'Focus Mode', translation: 'Focus Mode' }
                    ].map((item) => (
                      <div key={item.key} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                        <p className="text-base font-medium text-gray-900 group-hover:text-[#16808D] transition-colors">
                          {item.translation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supported Languages */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Globe className="w-4 h-4" />
                    </div>
                    Supported Languages
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-60 overflow-y-auto">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className={`flex items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg cursor-pointer group ${
                          currentLanguage === language.code
                            ? 'bg-gradient-to-r from-[#16808D] to-blue-600 text-white shadow-lg'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                        }`}
                      >
                        <span className="text-3xl mr-4">{language.flag}</span>
                        <div className="text-left flex-1">
                          <p className="font-medium text-lg">{language.nativeName}</p>
                          <p className={`text-sm ${currentLanguage === language.code ? 'opacity-90' : 'opacity-75'}`}>
                            {language.name}
                          </p>
                        </div>
                        {currentLanguage === language.code && (
                          <div className="ml-3">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                              <div className="w-3 h-3 bg-[#16808D] rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setShowLanguageModal(false)}
                    className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowLanguageModal(false)}
                    className="px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg hover:from-[#16808D] hover:to-[#142C52] transition-all duration-300 transform hover:scale-105"
                  >
                    Confirm Selection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightAccessibilitySidebar;
