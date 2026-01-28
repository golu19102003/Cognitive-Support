import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, DollarSign, MessageSquare, LogIn, Info, Menu, X, MapPin, Phone, Mail, Globe, BarChart3, FileText, BookOpen } from 'lucide-react';
import ScrollArrows from '../ScrollArrows/ScrollArrows';
import Translate from '../Translate/Translate.js';
import Chatbot from '../Chatbot/Chatbot.js';
import Notifications from '../Notifications/Notifications';
import AccessibilitySidebar from '../AccessibilitySidebar/AccessibilitySidebar';
import { NotificationsProvider } from '../../contexts/NotificationsContext';

const MainLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  // Check for theme preference
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   localStorage.getItem('isDarkMode');
      const newIsDarkMode = theme === 'dark' || theme === 'true';
      
      if (newIsDarkMode !== isDarkMode) {
        setIsDarkMode(newIsDarkMode);
        console.log('Theme changed:', newIsDarkMode ? 'dark' : 'light');
      }
    };

    checkTheme();
    
    // Listen for theme changes
    window.addEventListener('storage', checkTheme);
    window.addEventListener('themechange', checkTheme);
    window.addEventListener('darkModeChange', checkTheme);
    
    // Also check for DOM changes (when accessibility sidebar changes theme)
    const observer = new MutationObserver(() => {
      checkTheme();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });
    
    // Poll every 500ms as backup
    const interval = setInterval(checkTheme, 500);
    
    return () => {
      window.removeEventListener('storage', checkTheme);
      window.removeEventListener('themechange', checkTheme);
      window.removeEventListener('darkModeChange', checkTheme);
      observer.disconnect();
      clearInterval(interval);
    };
  }, [isDarkMode]);


  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/conditions', label: 'Conditions', icon: FileText },
    { path: '/resources', label: 'Resources', icon: BookOpen },
    { path: '/contact', label: 'Contact', icon: MessageSquare },
    { path: '/signin', label: 'Sign In', icon: LogIn },
  ];


  const isActiveLink = (path) => location.pathname === path;

  return (
    <NotificationsProvider>
      <div className="min-h-screen bg-gray-50">
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/75' 
          : 'bg-white/75'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
                <img 
                  src={isDarkMode ? "/Longs_logo1.png" : "/Longs_logo.png"} 
                  alt="Support System Logo" 
                  className={`mr-2 transition-all duration-300 object-contain ${
                    isDarkMode ? 'h-16' : 'h-10'
                  } w-auto`}
                  style={{ 
                    maxHeight: isDarkMode ? '64px' : '40px', 
                    width: 'auto',
                    minHeight: isDarkMode ? '64px' : '40px'
                  }}
                />
                <div className="flex flex-col">
                  <span className={`text-xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : ''
                  }`} style={{color: isDarkMode ? '#ffffff' : '#16808D'}}>Support System</span>
                  <span className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : ''
                  }`} style={{color: isDarkMode ? '#d1d5db' : '#374151'}}>For Cognitive Disabilities</span>
                </div>
              </div>

            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {navigationItems.slice(0, 5).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActiveLink(item.path)
                        ? 'text-[#147783] underline decoration-2 underline-offset-8'
                        : isDarkMode ? 'text-white hover:text-[#147783]' : 'text-gray-700 hover:text-[#147783]'
                    }`}
                    style={{
                      color: isActiveLink(item.path) ? '#147783' : (isDarkMode ? '#ffffff' : '#374151')
                    }}
                    onMouseEnter={(e) => {
                      if (!isActiveLink(item.path)) {
                        e.currentTarget.style.backgroundColor = '#CCE7EC';
                        e.currentTarget.style.color = '#147783';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActiveLink(item.path)) {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = isDarkMode ? '#ffffff' : '#374151';
                      }
                    }}
                    onClick={() => {
                      document.querySelectorAll('a[href^="/"]').forEach(link => {
                        link.style.backgroundColor = '';
                        link.style.color = '';
                      });
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {navigationItems.slice(5).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActiveLink(item.path)
                        ? 'text-[#147783] underline decoration-2 underline-offset-8'
                        : isDarkMode ? 'text-white hover:text-[#147783]' : 'text-gray-700 hover:text-[#147783]'
                    }`}
                    style={{
                      color: isActiveLink(item.path) ? '#147783' : (isDarkMode ? '#ffffff' : '#374151')
                    }}
                    onMouseEnter={(e) => {
                      if (!isActiveLink(item.path)) {
                        e.currentTarget.style.backgroundColor = '#CCE7EC';
                        e.currentTarget.style.color = '#147783';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActiveLink(item.path)) {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = isDarkMode ? '#ffffff' : '#374151';
                      }
                    }}
                    onClick={() => {
                      document.querySelectorAll('a[href^="/"]').forEach(link => {
                        link.style.backgroundColor = '';
                        link.style.color = '';
                      });
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              <Notifications />
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4C97A8B9AAA]"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent border-t border-gray-200">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActiveLink(item.path)
                        ? 'text-[#147783] underline decoration-2 underline-offset-8'
                        : 'text-gray-700 hover:text-[#147783]'
                    }`}
                    style={{
                      color: isActiveLink(item.path) ? '#147783' : undefined
                    }}
                    onMouseEnter={(e) => {
                      if (!isActiveLink(item.path)) {
                        e.currentTarget.style.backgroundColor = '#CCE7EC';
                        e.currentTarget.style.color = '#147783';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActiveLink(item.path)) {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = isDarkMode ? '#ffffff' : '#374151';
                      }
                    }}
                    onClick={() => {
                      document.querySelectorAll('a[href^="/"]').forEach(link => {
                        link.style.backgroundColor = '';
                        link.style.color = '';
                      });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isAuthPage ? 'pt-8' : 'pt-24'} pb-8`}>
        {children}
      </main>

      <footer className="bg-white text-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img 
                  src={isDarkMode ? "/image.png" : "/Short_logo.png"} 
                  alt="Support System Logo" 
                  className="h-6 w-auto mr-3 transition-all duration-300"
                />
                <div>
                  <h3 className={`text-lg font-bold leading-tight mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : ''
                  }`} style={{color: isDarkMode ? '#ffffff' : '#16808D'}}>Support System</h3>
                  <h4 className={`text-xs font-medium leading-tight transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : ''
                  }`} style={{color: isDarkMode ? '#d1d5db' : '#020509'}}>For Cognitive Disabilities</h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Smart Support Management System powered by Cognitive Disabilities platform.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#147783] hover:text-[#147783] transition-colors">
                  <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#147783] hover:text-[#147783] transition-colors">
                  <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#147783] hover:text-[#147783] transition-colors">
                  <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#147783] hover:text-[#147783] transition-colors">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#147783] hover:text-[#147783] transition-colors">
                  <img src="/youtube.png" alt="YouTube" className="w-5 h-5" />
                </a>
                <a href="https://github.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#147783] hover:text-[#147783] transition-colors">
                  <img src="/github.png" alt="GitHub" className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : ''
              }`} style={{color: isDarkMode ? '#ffffff' : '#01181F'}}>Quick Links</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <Link to="/" className={`block transition-colors ${isDarkMode ? 'text-gray-400 hover:text-[#4C97A8]' : 'text-gray-600 hover:text-[#4C97A8]'}`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
                  <Link to="/about" className={`block transition-colors ${isDarkMode ? 'text-gray-400 hover:text-[#4C97A8]' : 'text-gray-600 hover:text-[#4C97A8]'}`} onClick={() => window.scrollTo(0, 0)}>About</Link>
                  <Link to="/dashboard" className={`block transition-colors ${isDarkMode ? 'text-gray-400 hover:text-[#4C97A8]' : 'text-gray-600 hover:text-[#4C97A8]'}`} onClick={() => window.scrollTo(0, 0)}>Dashboard</Link>
                  <Link to="/conditions" className={`block transition-colors ${isDarkMode ? 'text-gray-400 hover:text-[#4C97A8]' : 'text-gray-600 hover:text-[#4C97A8]'}`} onClick={() => window.scrollTo(0, 0)}>Conditions</Link>
                </div>
                <div className="space-y-2">
                  <Link to="/resources" className={`block transition-colors ${isDarkMode ? 'text-gray-400 hover:text-[#4C97A8]' : 'text-gray-600 hover:text-[#4C97A8]'}`} onClick={() => window.scrollTo(0, 0)}>Resources</Link>
                  <Link to="/contact" className={`block transition-colors ${isDarkMode ? 'text-gray-400 hover:text-[#4C97A8]' : 'text-gray-600 hover:text-[#4C97A8]'}`} onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                  <Link to="/signin" className={`block transition-colors ${isDarkMode ? 'text-gray-400 hover:text-[#4C97A8]' : 'text-gray-600 hover:text-[#4C97A8]'}`} onClick={() => window.scrollTo(0, 0)}>Sign In</Link>
                </div>
              </div>
            </div>

            {/* Extra space between Quick Links and Contact Info */}
            <div className="hidden md:block"></div>

            <div className="flex flex-col h-full">
              <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : ''
              }`} style={{color: isDarkMode ? '#ffffff' : '#01181F'}}>Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#147783]" />
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#147783]" />
                  <span>+91 9680211602</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#147783]" />
                  <span>info@supportsystem.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-[#147783]" />
                  <span>www.supportsystem.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : ''
              }`} style={{color: isDarkMode ? '#ffffff' : '#01181F'}}>Our Partners</h3>
              <p className="text-gray-600 text-sm">
                Partnering and Collaborating with an innovative community-tech platform to deliver smart, integrated, and real-world management solutions for modern societies.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-600">
                <p>&copy; 2026 Support System. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/confidentiality" className="text-sm text-gray-600 hover:text-[#4C97A8] transition-colors" onClick={() => window.scrollTo(0, 0)}>Privacy & Policy</Link>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-[#4C97A8] transition-colors" onClick={() => window.scrollTo(0, 0)}>Terms of Service</Link>
                <Link to="/help" className="text-sm text-gray-600 hover:text-[#4C97A8] transition-colors" onClick={() => window.scrollTo(0, 0)}>Support</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <Translate />
      
      <Chatbot />
      
      <ScrollArrows />
      
      <AccessibilitySidebar />
    </div>
    </NotificationsProvider>
  );
};

export default MainLayout;
