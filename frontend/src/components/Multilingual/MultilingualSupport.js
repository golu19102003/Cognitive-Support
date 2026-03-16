import React, { useState, useEffect, createContext, useContext } from 'react';
import { Globe, Volume2, Download, Upload, Check, AlertCircle } from 'lucide-react';

// Create context for multilingual support
const MultilingualContext = createContext();

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    logout: 'Logout',
    
    // Accessibility
    accessibility: 'Accessibility',
    textToSpeech: 'Text to Speech',
    highContrast: 'High Contrast',
    largeText: 'Large Text',
    dyslexiaFont: 'Dyslexia Font',
    
    // Cognitive Conditions
    learningDisabilities: 'Learning Disabilities',
    adhd: 'ADHD',
    autism: 'Autism Spectrum',
    memoryDisorders: 'Memory Disorders',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    save: 'Save',
    cancel: 'Cancel',
    submit: 'Submit',
    
    // Chatbot
    chatbot: 'Chatbot',
    typeMessage: 'Type your message...',
    send: 'Send',
    
    // Focus Mode
    focusMode: 'Focus Mode',
    startSession: 'Start Session',
    pause: 'Pause',
    resume: 'Resume',
    reset: 'Reset',
    
    // Eye Tracking
    eyeTracking: 'Eye Tracking',
    calibrate: 'Calibrate',
    enable: 'Enable',
    disable: 'Disable',
    
    // Welcome
    welcome: 'Welcome to PriHub',
    welcomeMessage: 'Your comprehensive cognitive support platform',
  },
  hi: {
    // Navigation
    home: 'होम',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    
    // Accessibility
    accessibility: 'अभिगम्यता',
    textToSpeech: 'टेक्स्ट टू स्पीच',
    highContrast: 'उच्च कंट्रास्ट',
    largeText: 'बड़ा टेक्स्ट',
    dyslexiaFont: 'डिस्लेक्सिया फ़ॉन्ट',
    
    // Cognitive Conditions
    learningDisabilities: 'शिक्षण अक्षमता',
    adhd: 'एडीएचडी',
    autism: 'ऑटिज्म स्पेक्ट्रम',
    memoryDisorders: 'स्मृति विकार',
    
    // Common
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफलता',
    save: 'सहेजें',
    cancel: 'रद्द करें',
    submit: 'जमा करें',
    
    // Chatbot
    chatbot: 'चैटबॉट',
    typeMessage: 'अपना संदेश टाइप करें...',
    send: 'भेजें',
    
    // Focus Mode
    focusMode: 'फोकस मोड',
    startSession: 'सत्र शुरू करें',
    pause: 'रोकें',
    resume: 'फिर से शुरू करें',
    reset: 'रीसेट करें',
    
    // Eye Tracking
    eyeTracking: 'आई ट्रैकिंग',
    calibrate: 'कैलिब्रेट',
    enable: 'सक्षम करें',
    disable: 'अक्षम करें',
    
    // Welcome
    welcome: 'प्राइहब में आपका स्वागत है',
    welcomeMessage: 'आपका व्यापक संज्ञानात्मक समर्थन प्लेटफ़ॉर्म',
  },
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca de',
    contact: 'Contacto',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    
    // Accessibility
    accessibility: 'Accesibilidad',
    textToSpeech: 'Texto a voz',
    highContrast: 'Alto contraste',
    largeText: 'Texto grande',
    dyslexiaFont: 'Fuente dislexia',
    
    // Cognitive Conditions
    learningDisabilities: 'Discapacidades de aprendizaje',
    adhd: 'TDAH',
    autism: 'Espectro autista',
    memoryDisorders: 'Trastornos de memoria',
    
    // Common
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    save: 'Guardar',
    cancel: 'Cancelar',
    submit: 'Enviar',
    
    // Chatbot
    chatbot: 'Chatbot',
    typeMessage: 'Escribe tu mensaje...',
    send: 'Enviar',
    
    // Focus Mode
    focusMode: 'Modo enfoque',
    startSession: 'Iniciar sesión',
    pause: 'Pausar',
    resume: 'Reanudar',
    reset: 'Reiniciar',
    
    // Eye Tracking
    eyeTracking: 'Seguimiento ocular',
    calibrate: 'Calibrar',
    enable: 'Habilitar',
    disable: 'Deshabilitar',
    
    // Welcome
    welcome: 'Bienvenido a PriHub',
    welcomeMessage: 'Tu plataforma integral de apoyo cognitivo',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    contact: 'Contact',
    login: 'Connexion',
    logout: 'Déconnexion',
    
    // Accessibility
    accessibility: 'Accessibilité',
    textToSpeech: 'Texte vers parole',
    highContrast: 'Contraste élevé',
    largeText: 'Grand texte',
    dyslexiaFont: 'Police dyslexie',
    
    // Cognitive Conditions
    learningDisabilities: 'Troubles d apprentissage',
    adhd: 'TDAH',
    autism: 'Spectre autistique',
    memoryDisorders: 'Troubles de la mémoire',
    
    // Common
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    save: 'Enregistrer',
    cancel: 'Annuler',
    submit: 'Soumettre',
    
    // Chatbot
    chatbot: 'Chatbot',
    typeMessage: 'Tapez votre message...',
    send: 'Envoyer',
    
    // Focus Mode
    focusMode: 'Mode concentration',
    startSession: 'Démarrer la session',
    pause: 'Pause',
    resume: 'Reprendre',
    reset: 'Réinitialiser',
    
    // Eye Tracking
    eyeTracking: 'Suivi oculaire',
    calibrate: 'Calibrer',
    enable: 'Activer',
    disable: 'Désactiver',
    
    // Welcome
    welcome: 'Bienvenue sur PriHub',
    welcomeMessage: 'Votre plateforme complète de soutien cognitif',
  },
  'zh-CN': {
    // Navigation
    home: '首页',
    about: '关于',
    contact: '联系',
    login: '登录',
    logout: '登出',
    
    // Accessibility
    accessibility: '无障碍',
    textToSpeech: '文字转语音',
    highContrast: '高对比度',
    largeText: '大字体',
    dyslexiaFont: '阅读障碍字体',
    
    // Cognitive Conditions
    learningDisabilities: '学习障碍',
    adhd: '多动症',
    autism: '自闭症谱系',
    memoryDisorders: '记忆障碍',
    
    // Common
    loading: '加载中...',
    error: '错误',
    success: '成功',
    save: '保存',
    cancel: '取消',
    submit: '提交',
    
    // Chatbot
    chatbot: '聊天机器人',
    typeMessage: '输入您的消息...',
    send: '发送',
    
    // Focus Mode
    focusMode: '专注模式',
    startSession: '开始会话',
    pause: '暂停',
    resume: '恢复',
    reset: '重置',
    
    // Eye Tracking
    eyeTracking: '眼球追踪',
    calibrate: '校准',
    enable: '启用',
    disable: '禁用',
    
    // Welcome
    welcome: '欢迎来到PriHub',
    welcomeMessage: '您的综合认知支持平台',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'حول',
    contact: 'اتصال',
    login: 'تسجيل الدخول',
    logout: 'تسجيل الخروج',
    
    // Accessibility
    accessibility: 'إمكانية الوصول',
    textToSpeech: 'نص إلى كلام',
    highContrast: 'تباين عالي',
    largeText: 'نص كبير',
    dyslexiaFont: 'خط عسر القراءة',
    
    // Cognitive Conditions
    learningDisabilities: 'صعوبات التعلم',
    adhd: 'اضطراب نقص الانتباه',
    autism: 'طيف التوحد',
    memoryDisorders: 'اضطرابات الذاكرة',
    
    // Common
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجاح',
    save: 'حفظ',
    cancel: 'إلغاء',
    submit: 'إرسال',
    
    // Chatbot
    chatbot: 'روبوت الدردشة',
    typeMessage: 'اكتب رسالتك...',
    send: 'إرسال',
    
    // Focus Mode
    focusMode: 'وضع التركيز',
    startSession: 'بدء الجلسة',
    pause: 'إيقاف مؤقت',
    resume: 'استئناف',
    reset: 'إعادة تعيين',
    
    // Eye Tracking
    eyeTracking: 'تتبع العين',
    calibrate: 'معايرة',
    enable: 'تمكين',
    disable: 'تعطيل',
    
    // Welcome
    welcome: 'مرحباً بك في PriHub',
    welcomeMessage: 'منصتك الشاملة لدعم الإدراك',
  },
};

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
];

const MultilingualProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
    
    // Check if language is RTL
    const rtlLanguages = ['ar'];
    setIsRTL(rtlLanguages.includes(savedLanguage));
    
    // Set document direction
    document.documentElement.dir = rtlLanguages.includes(savedLanguage) ? 'rtl' : 'ltr';
  }, []);

  const translate = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  const changeLanguage = async (languageCode) => {
    setIsLoading(true);
    
    try {
      // Simulate loading translation files
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setCurrentLanguage(languageCode);
      localStorage.setItem('language', languageCode);
      
      // Update text direction
      const rtlLanguages = ['ar'];
      setIsRTL(rtlLanguages.includes(languageCode));
      document.documentElement.dir = rtlLanguages.includes(languageCode) ? 'rtl' : 'ltr';
      
      // Update HTML lang attribute
      document.documentElement.lang = languageCode;
      
      // Trigger TTS language change
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSpeechLanguage = () => {
    const speechLangMap = {
      'en': 'en-US',
      'hi': 'hi-IN',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'zh-CN': 'zh-CN',
      'ar': 'ar-SA'
    };
    return speechLangMap[currentLanguage] || 'en-US';
  };

  const value = {
    currentLanguage,
    translate,
    changeLanguage,
    isLoading,
    isRTL,
    languages,
    getSpeechLanguage,
  };

  return (
    <MultilingualContext.Provider value={value}>
      {children}
    </MultilingualContext.Provider>
  );
};

const useTranslation = () => {
  const context = useContext(MultilingualContext);
  if (!context) {
    throw new Error('useTranslation must be used within a MultilingualProvider');
  }
  return context;
};

// Language Selector Component
const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, isLoading, languages } = useTranslation();

  return (
    <div className="relative">
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        disabled={isLoading}
        className={`appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.nativeName}
          </option>
        ))}
      </select>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

// Translation Hook Component
const TranslationDisplay = () => {
  const { translate, currentLanguage, languages, changeLanguage, isLoading } = useTranslation();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for theme preference
  useEffect(() => {
    const theme = localStorage.getItem('theme') || localStorage.getItem('darkMode') || localStorage.getItem('isDarkMode');
    setIsDarkMode(theme === 'dark' || theme === 'true');
  }, []);

  const downloadTranslation = (languageCode) => {
    setDownloadStatus('downloading');
    
    // Simulate download
    setTimeout(() => {
      const translationData = translations[languageCode];
      const blob = new Blob([JSON.stringify(translationData, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `translation-${languageCode}.json`;
      a.click();
      URL.revokeObjectURL(url);
      
      setDownloadStatus('completed');
      setTimeout(() => setDownloadStatus(''), 2000);
    }, 1000);
  };

  const uploadTranslation = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const translationData = JSON.parse(e.target.result);
        // Here you would validate and merge the translation
        console.log('Translation uploaded:', translationData);
        setDownloadStatus('uploaded');
        setTimeout(() => setDownloadStatus(''), 2000);
      } catch (error) {
        console.error('Error parsing translation file:', error);
        setDownloadStatus('error');
        setTimeout(() => setDownloadStatus(''), 2000);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Multilingual Support
        </h3>
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-blue-500" />
          <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {languages.find(l => l.code === currentLanguage)?.nativeName}
          </span>
        </div>
      </div>

      {/* Current Language Display */}
      <div className={`p-4 rounded-lg mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {translate('welcome')}
            </h4>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translate('welcomeMessage')}
            </p>
          </div>
          <div className="text-3xl">
            {languages.find(l => l.code === currentLanguage)?.flag}
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="mb-6">
        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Select Language
        </label>
        <LanguageSelector />
      </div>

      {/* Quick Translations */}
      <div className="mb-6">
        <h4 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Quick Translations
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              Home
            </div>
            <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {translate('home')}
            </div>
          </div>
          <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              Accessibility
            </div>
            <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {translate('accessibility')}
            </div>
          </div>
          <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              Chatbot
            </div>
            <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {translate('chatbot')}
            </div>
          </div>
          <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              Focus Mode
            </div>
            <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {translate('focusMode')}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Options */}
      <div className="mb-6">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`flex items-center space-x-2 text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
        >
          <span>Advanced Options</span>
          <span>{showAdvanced ? '▼' : '▶'}</span>
        </button>
        
        {showAdvanced && (
          <div className="mt-4 space-y-4">
            {/* Download Translations */}
            <div className="flex items-center justify-between">
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Download Translation File
              </span>
              <button
                onClick={() => downloadTranslation(currentLanguage)}
                className="flex items-center space-x-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
            
            {/* Upload Translations */}
            <div className="flex items-center justify-between">
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Upload Custom Translation
              </span>
              <label className="flex items-center space-x-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors cursor-pointer">
                <Upload className="h-4 w-4" />
                <span>Upload</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={uploadTranslation}
                  className="hidden"
                />
              </label>
            </div>
            
            {/* Status Messages */}
            {downloadStatus && (
              <div className={`flex items-center space-x-2 text-sm ${
                downloadStatus === 'downloading' ? 'text-blue-500' :
                downloadStatus === 'completed' || downloadStatus === 'uploaded' ? 'text-green-500' :
                'text-red-500'
              }`}>
                {downloadStatus === 'downloading' && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>}
                {downloadStatus === 'completed' && <Check className="h-4 w-4" />}
                {downloadStatus === 'uploaded' && <Check className="h-4 w-4" />}
                {downloadStatus === 'error' && <AlertCircle className="h-4 w-4" />}
                <span>
                  {downloadStatus === 'downloading' ? 'Downloading...' :
                   downloadStatus === 'completed' ? 'Download completed!' :
                   downloadStatus === 'uploaded' ? 'Upload successful!' :
                   'Upload failed'}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Supported Languages */}
      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <h4 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Supported Languages
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center space-x-2 p-2 rounded-lg text-left transition-colors ${
                currentLanguage === lang.code
                  ? 'bg-blue-500 text-white'
                  : isDarkMode
                  ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{lang.flag}</span>
              <div>
                <div className="text-sm font-medium">{lang.nativeName}</div>
                <div className="text-xs opacity-75">{lang.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export {
  MultilingualProvider,
  useTranslation,
  TranslationDisplay as default,
  LanguageSelector,
  translations,
  languages,
};
