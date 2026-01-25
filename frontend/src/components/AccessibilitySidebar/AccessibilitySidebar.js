import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Type, Pill, Volume2, Square, MessageSquare, FileText } from 'lucide-react';
import MedicationReminder from '../MedicationReminder/MedicationReminder';

const AccessibilitySidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDyslexiaFont, setIsDyslexiaFont] = useState(false);
  const [isSimplifiedText, setIsSimplifiedText] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [medicationReminder, setMedicationReminder] = useState(null);
  const [showMedicationModal, setShowMedicationModal] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const speechRef = useRef(null);

  // Theme toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      showNotification('🌙 Dark mode enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      showNotification('☀️ Light mode enabled');
    }
  };

  // Dyslexia font toggle
  const toggleDyslexiaFont = () => {
    const newState = !isDyslexiaFont;
    setIsDyslexiaFont(newState);
    
    if (newState) {
      document.body.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
      localStorage.setItem('dyslexiaFont', 'enabled');
      showNotification('♿ Dyslexia-friendly font enabled');
    } else {
      document.body.style.fontFamily = '';
      localStorage.setItem('dyslexiaFont', 'disabled');
      showNotification('📝 Standard font enabled');
    }
  };

  // Simplified text toggle
  const toggleSimplifiedText = () => {
    const newState = !isSimplifiedText;
    setIsSimplifiedText(newState);
    
    if (newState) {
      document.body.classList.add('simplified-text');
      localStorage.setItem('simplifiedText', 'enabled');
      showNotification('📝 Simplified text enabled');
    } else {
      document.body.classList.remove('simplified-text');
      localStorage.setItem('simplifiedText', 'disabled');
      showNotification('📄 Normal text enabled');
    }
  };

  // Get current translator language
  const getCurrentTranslatorLanguage = () => {
    // Try to get from Google Translate cookie first
    const googtransCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('googtrans='));
    if (googtransCookie) {
      const langValue = googtransCookie.split('=')[1];
      if (langValue && langValue.includes('/')) {
        const langCode = langValue.split('/')[2];
        if (langCode && langCode !== 'en') {
          return langCode;
        }
      }
    }
    
    // Try to get from localStorage
    const savedLang = localStorage.getItem('googtrans');
    if (savedLang && savedLang.includes('/')) {
      const langCode = savedLang.split('/')[2];
      if (langCode && langCode !== 'en') {
        return langCode;
      }
    }
    
    // Try to get from document language
    const docLang = document.documentElement.lang;
    if (docLang && docLang !== 'en') {
      return docLang;
    }
    
    return 'en'; // Default to English
  };

  // Text to speech
  const startTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      const selectedText = window.getSelection().toString();
      const textToRead = selectedText || document.body.innerText;
      
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      
      // Get current translator language
      const currentLang = getCurrentTranslatorLanguage();
      
      speechRef.current = new SpeechSynthesisUtterance(textToRead);
      speechRef.current.rate = 0.9;
      speechRef.current.pitch = 1;
      
      // Set the language for speech synthesis
      const languageMap = {
        'en': 'en-US',
        'hi': 'hi-IN',
        'mr': 'mr-IN',
        'ta': 'ta-IN',
        'te': 'te-IN',
        'kn': 'kn-IN',
        'gu': 'gu-IN',
        'fr': 'fr-FR',
        'ru': 'ru-RU',
        'de': 'de-DE',
        'es': 'es-ES',
        'zh-CN': 'zh-CN',
        'zh-cn': 'zh-CN',
        'sa': 'hi-IN' // Use Hindi for Sanskrit as Sanskrit TTS may not be available
      };
      
      const speechLang = languageMap[currentLang] || 'en-US';
      speechRef.current.lang = speechLang;
      
      // Try to find a voice for the selected language
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang.startsWith(speechLang.split('-')[0]));
      if (voice) {
        speechRef.current.voice = voice;
      }
      
      speechRef.current.onend = () => {
        setIsReading(false);
        speechRef.current = null;
      };
      
      window.speechSynthesis.speak(speechRef.current);
      setIsReading(true);
      
      // Show notification with language info
      const languageNames = {
        'en': 'English',
        'hi': 'हिंदी',
        'mr': 'मराठी',
        'ta': 'தமிழ்',
        'te': 'తెలుగు',
        'kn': 'ಕನ್ನಡ',
        'gu': 'ગુજરાતી',
        'fr': 'Français',
        'ru': 'Русский',
        'de': 'Deutsch',
        'es': 'Español',
        'zh-CN': '中文',
        'zh-cn': '中文',
        'sa': 'संस्कृत'
      };
      
      const langName = languageNames[currentLang] || 'English';
      showNotification(`🔊 Reading in ${langName}`);
    } else {
      showNotification('❌ Text-to-speech not supported in this browser');
    }
  };

  const stopTextToSpeech = () => {
    if (speechRef.current) {
      window.speechSynthesis.cancel();
      speechRef.current = null;
      setIsReading(false);
      showNotification('⏹️ Stopped reading');
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

  // Load saved settings
  useEffect(() => {
    const savedDyslexiaFont = localStorage.getItem('dyslexiaFont');
    const savedSimplifiedText = localStorage.getItem('simplifiedText');
    const savedMedicationReminder = localStorage.getItem('medicationReminder');
    
    if (savedDyslexiaFont === 'enabled') {
      setIsDyslexiaFont(true);
      document.body.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
    }
    
    if (savedSimplifiedText === 'enabled') {
      setIsSimplifiedText(true);
      document.body.classList.add('simplified-text');
    }
    
    if (savedMedicationReminder) {
      setMedicationReminder(JSON.parse(savedMedicationReminder));
    }
  }, []);

  return (
    <>
      {/* Accessibility Sidebar */}
      <div className="accessibility-sidebar fixed left-2 top-[45%] -translate-y-1/2 z-[9998] bg-white rounded-2xl p-3 shadow-2xl border border-gray-200" style={{ position: 'fixed', zIndex: 9998, left: '8px', top: '45%', transform: 'translateY(-50%)', visibility: 'visible', opacity: 1 }}>
        <div className="flex flex-col space-y-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Dyslexia Font Toggle */}
          <button
            onClick={toggleDyslexiaFont}
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title={isDyslexiaFont ? 'Disable Dyslexia Font' : 'Enable Dyslexia Font'}
          >
            <Type className="w-5 h-5" />
          </button>

          {/* Simplify Text Toggle */}
          <button
            onClick={toggleSimplifiedText}
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title={isSimplifiedText ? 'Disable Simplified Text' : 'Enable Simplified Text'}
          >
            <FileText className="w-5 h-5" />
          </button>

          {/* Medication Reminder */}
          <button
            onClick={handleSetMedicationReminder}
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title="Set Medication Reminder"
          >
            <Pill className="w-5 h-5" />
          </button>

          {/* Text to Speech */}
          {!isReading ? (
            <button
              onClick={startTextToSpeech}
              className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
              title="Read Page Aloud"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={stopTextToSpeech}
              className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg animate-pulse"
              title="Stop Reading"
            >
              <Square className="w-5 h-5" />
            </button>
          )}

          {/* Help/Chat */}
          <button
            className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title="Help & Support"
          >
            <MessageSquare className="w-5 h-5" />
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

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.55s ease-out;
        }
        
        /* Simplified text styles for better clarity */
        .simplified-text {
          line-height: 1.8 !important;
          font-size: 16px !important;
          letter-spacing: 0.5px !important;
          word-spacing: 2px !important;
        }
        
        .simplified-text p {
          margin-bottom: 1.5em !important;
        }
        
        .simplified-text h1, 
        .simplified-text h2, 
        .simplified-text h3, 
        .simplified-text h4, 
        .simplified-text h5, 
        .simplified-text h6 {
          margin-bottom: 1em !important;
          margin-top: 1.5em !important;
          font-weight: 600 !important;
        }
        
        .simplified-text li {
          margin-bottom: 0.8em !important;
          line-height: 1.6 !important;
        }
        
        /* Dyslexia-friendly font styles */
        .dyslexia-font {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
          font-size: 18px !important;
          line-height: 1.8 !important;
          letter-spacing: 0.1em !important;
          word-spacing: 0.3em !important;
          text-align: left !important;
          color: #000000 !important;
          background-color: #FFFFCC !important;
        }
        
        .dyslexia-font * {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
        }
        
        .dyslexia-font h1, 
        .dyslexia-font h2, 
        .dyslexia-font h3, 
        .dyslexia-font h4, 
        .dyslexia-font h5, 
        .dyslexia-font h6 {
          font-weight: bold !important;
          font-size: 1.3em !important;
          margin-bottom: 1em !important;
          margin-top: 1.5em !important;
          text-decoration: underline !important;
          text-underline-offset: 4px !important;
        }
        
        .dyslexia-font p {
          margin-bottom: 1.2em !important;
          text-indent: 2em !important;
        }
        
        .dyslexia-font a {
          color: #0000FF !important;
          text-decoration: underline !important;
          font-weight: bold !important;
        }
        
        .dyslexia-font a:hover {
          background-color: #FFFF99 !important;
          color: #FF0000 !important;
        }
        
        .dyslexia-font li {
          margin-bottom: 0.8em !important;
          list-style-position: outside !important;
          margin-left: 2em !important;
        }
        
        .dyslexia-font ul, 
        .dyslexia-font ol {
          margin-bottom: 1.2em !important;
        }
        
        .dyslexia-font blockquote {
          border-left: 4px solid #000000 !important;
          padding-left: 1.5em !important;
          margin: 1.5em 0 !important;
          font-style: italic !important;
          background-color: #FFFFF0 !important;
        }
        
        .dyslexia-font code {
          font-family: 'Courier New', monospace !important;
          background-color: #E0E0E0 !important;
          padding: 2px 4px !important;
          border-radius: 3px !important;
        }
        
        .dyslexia-font pre {
          font-family: 'Courier New', monospace !important;
          background-color: #E0E0E0 !important;
          padding: 1em !important;
          border-radius: 5px !important;
          overflow-x: auto !important;
          white-space: pre-wrap !important;
        }
        
        .dyslexia-font table {
          border-collapse: collapse !important;
          margin: 1.5em 0 !important;
          width: 100% !important;
        }
        
        .dyslexia-font th, 
        .dyslexia-font td {
          border: 2px solid #000000 !important;
          padding: 8px !important;
          text-align: left !important;
        }
        
        .dyslexia-font th {
          background-color: #DDDDDD !important;
          font-weight: bold !important;
        }
        
        .dyslexia-font input, 
        .dyslexia-font textarea, 
        .dyslexia-font select {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
          font-size: 16px !important;
          border: 2px solid #000000 !important;
          padding: 8px !important;
          background-color: #FFFFFF !important;
        }
        
        .dyslexia-font button {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
          font-size: 16px !important;
          font-weight: bold !important;
          padding: 10px 15px !important;
          border: 2px solid #000000 !important;
          background-color: #DDDDDD !important;
          cursor: pointer !important;
        }
        
        .dyslexia-font button:hover {
          background-color: #BBBBBB !important;
        }
        
        .dark {
          background-color: #1a1a1a !important;
          color: #ffffff !important;
        }
        
        .dark .bg-white {
          background-color: #2a2a2a !important;
          color: #ffffff !important;
        }
        
        .dark .bg-gray-50 {
          background-color: #1a1a1a !important;
        }
        
        .dark .text-gray-700 {
          color: #e0e0e0 !important;
        }
        
        .dark .text-gray-600 {
          color: #b0b0b0 !important;
        }
        
        .dark .border-gray-200 {
          border-color: #404040 !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilitySidebar;
