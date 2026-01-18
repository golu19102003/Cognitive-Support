import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Translate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isTranslateLoaded, setIsTranslateLoaded] = useState(false);
  const [hoverLanguage, setHoverLanguage] = useState("");
  const languageMenuRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', nativeName: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', nativeName: 'मराठी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'zh-cn', name: 'Chinese (Simplified)', nativeName: '中文', flag: '🇨🇳' },
    { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृत', flag: '🇮🇳' },
  ];

  useEffect(() => {
    const existingElement = document.getElementById('google_translate_element');
    if (existingElement) {
      existingElement.remove();
    }

    const googleTranslateElement = document.createElement('div');
    googleTranslateElement.id = 'google_translate_element';
    googleTranslateElement.style.display = 'none';
    document.body.appendChild(googleTranslateElement);

    window.googleTranslateElementInit = function() {
      try {
        if (window.google?.translate) {
          const savedLang = localStorage.getItem('googtrans') || '/en/en';
          
          console.log('Initializing Google Translate with saved language:', savedLang);
          
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,hi,mr,ta,te,kn,gu,fr,ru,de,es,zh-CN,sa',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            },
            'google_translate_element'
          );

          setTimeout(() => {
            const googleTranslateCombo = document.querySelector('.goog-te-combo');
            if (googleTranslateCombo) {
              console.log('Google Translate combo found, available languages:');
              for (let i = 0; i < googleTranslateCombo.options.length; i++) {
                console.log(`Option ${i}: ${googleTranslateCombo.options[i].value} - ${googleTranslateCombo.options[i].text}`);
              }
            }
            
            if (savedLang) {
              const langCode = savedLang.split('/').pop() || 'en';
              console.log('Setting current language to:', langCode);
              
              const normalizedLangCode = langCode === 'zh-CN' ? 'zh-cn' : langCode;
              setCurrentLanguage(normalizedLangCode);
              document.cookie = `googtrans=${savedLang};path=/;domain=${window.location.hostname}`;
              document.documentElement.lang = normalizedLangCode;
              
              if (googleTranslateCombo) {
                for (let i = 0; i < googleTranslateCombo.options.length; i++) {
                  const option = googleTranslateCombo.options[i];
                  if (option.value === langCode || option.value === normalizedLangCode) {
                    console.log('Found matching language option:', option.value);
                    googleTranslateCombo.value = option.value;
                    googleTranslateCombo.dispatchEvent(new Event('change'));
                    break;
                  }
                }
              }
            }
          }, 1000);
          
          setIsTranslateLoaded(true);
        }
      } catch (error) {
        console.error('Error initializing Google Translate:', error);
        setIsTranslateLoaded(true);
      }
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => {
        console.error('Failed to load Google Translate script');
        setIsTranslateLoaded(true);
      };
      document.body.appendChild(script);
    }

    const handleClickOutside = (event) => {
      if (isOpen && languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (langCode) => {
    if (currentLanguage === langCode) {
      setIsOpen(false);
      return;
    }
    
    console.log('Changing language to:', langCode); // Debug log
    
    const newLang = langCode === 'en' ? '' : `/${langCode}`;
    const googtransValue = `/en${newLang}`;
    
    localStorage.setItem('googtrans', googtransValue);
    document.cookie = `googtrans=${googtransValue};path=/;domain=${window.location.hostname}`;
    
    document.documentElement.lang = langCode;
    
    setCurrentLanguage(langCode);
    setIsOpen(false);
    
    setTimeout(() => {
      const googleTranslateCombo = document.querySelector('.goog-te-combo');
      if (googleTranslateCombo) {
        console.log('Attempting to set Google Translate combo to:', langCode);
        for (let i = 0; i < googleTranslateCombo.options.length; i++) {
          const option = googleTranslateCombo.options[i];
          if (option.value === langCode || 
              option.value === `zh-CN` && langCode === 'zh-cn' ||
              option.value === `zh-cn` && langCode === 'zh-cn') {
            console.log('Found matching option:', option.value, option.text);
            googleTranslateCombo.value = option.value;
            googleTranslateCombo.dispatchEvent(new Event('change'));
            break;
          }
        }
      }
    }, 500);
    
    console.log('Reloading page for translation:', googtransValue); // Debug log
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const getFlagEmoji = (langCode) => {
    const flagMap = {
      en: "🇺🇸",
      hi: "🇮🇳",
      mr: "🇮🇳",
      kn: "🇮🇳",
      te: "🇮🇳",
      fr: "🇫🇷",
      ru: "🇷🇺",
      de: "🇩🇪",
      es: "🇪🇸",
      'zh-cn': "🇨🇳",
      gu: "🇮🇳",
      ta: "🇮🇳",
      sa: "🇮🇳",
    };
    
    return flagMap[langCode] || "🌐";
  };

  const getLanguageFullName = (langCode) => {
    const language = languages.find(lang => lang.code === langCode);
    return language ? language.nativeName : "Unknown";
  };

  return (
    <>
      <div id="google_translate_element" style={{ position: 'absolute', top: '-9999px', left: '-9999px', width: '1px', height: '1px' }}></div>
      
      <div className="fixed bottom-2 left-6 z-50 language-selector-container">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              ref={languageMenuRef}
              className="bg-white rounded-2xl shadow-2xl mb-4 p-2 border border-gray-100"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="max-h-64 sm:max-h-80 overflow-y-auto rounded-xl p-1">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    className={`block w-full text-left px-4 py-3 rounded-xl transition-all flex items-center space-x-3 cursor-pointer ${
                      currentLanguage === lang.code ? "text-[#1B9AAA] bg-[#CCE7EC] shadow-md" : "hover:bg-gray-50 hover:text-[#1B9AAA] hover:shadow-md"
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setHoverLanguage(lang.code)}
                    onMouseLeave={() => setHoverLanguage("")}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium" style={{
                      color: currentLanguage === lang.code ? '#1B9AAA' : '#020509'
                    }}>{lang.nativeName}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          onClick={toggleDrawer}
          className="relative group overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isTranslateLoaded ? { y: [10, 0] } : { opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="relative z-10 bg-white text-gray-600 rounded-full shadow-lg flex flex-col items-center justify-center focus:outline-none text-[#147783] hover:bg-[#1B9AAA] hover:text-white transition-all cursor-pointer font-semibold font-sans"
            animate={{ 
              boxShadow: isOpen 
                ? "0 10px 25px -5px rgba(27, 154, 170, 0.5)" 
                : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}
            whileHover={{ 
              boxShadow: "0 20px 25px -5px rgba(27, 154, 170, 0.4)"
            }}
            style={{
              width: isOpen ? "4rem" : "3.5rem",
              height: isOpen ? "4rem" : "3.5rem",
            }}
          >
            <span className="text-2xl mb-1">{getFlagEmoji(currentLanguage)}</span>
            <span className="text-xs font-semibold">{currentLanguage.toUpperCase()}</span>
          </motion.div>
        </motion.button>
        
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 left-full ml-3"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-md py-1 px-3 text-sm whitespace-nowrap">
                <span className="text-gray-600">{getLanguageFullName(currentLanguage)}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Translate;
