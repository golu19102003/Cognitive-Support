import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, DollarSign, MessageSquare, LogIn, Info, Menu, X, MapPin, Phone, Mail, Globe, BarChart3, FileText, BookOpen, Target, Eye, Languages, Brain, Zap, ChevronRight, AtSign, Send } from 'lucide-react';
import ScrollArrows from '../ScrollArrows/ScrollArrows';
import Translate from '../Translate/Translate.js';
import Chatbot from '../Chatbot/Chatbot.js';
import Notifications from '../Notifications/Notifications';
import AccessibilitySidebar from '../AccessibilitySidebar/AccessibilitySidebar';
import RightAccessibilitySidebar from '../AccessibilitySidebar/RightAccessibilitySidebar';
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
    { path: '/conditions', label: 'Conditions', icon: Brain },
    { path: '/resources', label: 'Resources', icon: BookOpen },
    { path: '/advanced-features', label: 'Services', icon: Zap },
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
              {navigationItems.slice(0, 4).map((item) => {
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
              
              {navigationItems.slice(4).map((item) => {
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

      <footer className={`mt-auto transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-[#1a3a52] text-white' 
          : 'bg-gradient-to-r from-[#1b4256] to-[#277890] text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {/* Column 1: Brand & About */}
            <div className="flex flex-col h-full">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/image.png" 
                  alt="Support System Logo" 
                  className="w-10 h-10 rounded-lg object-contain"
                />
                <div>
                  <h3 className={`text-xl font-bold leading-tight mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-white'
                  }`}>Support System</h3>
                  <h4 className={`text-sm font-medium leading-tight transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : ''
                  }`} style={{color: isDarkMode ? '#d1d5db' : '#4db5c5'}}>For Cognitive Disabilities</h4>
                </div>
              </Link>
              <p className="text-white/90 mb-2 max-w-[16rem] text-sm text-justify">
                We make life easier for people with cognitive disabilities through smart AI tools and flexible designs that adapt to your thinking. Everyone deserves digital spaces that work perfectly for them.
              </p>
                            <div className="flex space-x-4">
                <a href="https://facebook.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#4db5c5] hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#4db5c5] hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#4db5c5] hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#4db5c5] hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#4db5c5] hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://github.com/residentialhub" target="_blank" rel="noopener noreferrer" className="text-[#4db5c5] hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col h-full ml-20">
              <h3 className={`text-base font-bold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-white'
              }`} style={{color: isDarkMode ? '#ffffff' : '#ffffff'}}>Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link to="/" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Home
                </Link>
                <Link to="/about" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  About Us
                </Link>
                <Link to="/conditions" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Conditions
                </Link>
                <Link to="/resources" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Resources
                </Link>
                <Link to="/advanced-features" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Features
                </Link>
                <Link to="/contact" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <ChevronRight className="h-3 w-3 mr-1" />
                  Contact
                </Link>
              </div>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col h-full ml-16">
              <h3 className={`text-base font-bold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-white'
              }`} style={{color: isDarkMode ? '#ffffff' : '#ffffff'}}>Services</h3>
              <div className="space-y-2 text-sm">
                <Link to="/advanced-features" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <Brain className="h-3 w-3 mr-2" />
                  AI Assistant
                </Link>
                <Link to="/gamification/focus-mode" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <Target className="h-3 w-3 mr-2" />
                  Focus Mode
                </Link>
                <Link to="/eye-tracking" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <Eye className="h-3 w-3 mr-2" />
                  Eye Tracking
                </Link>
                <Link to="/multilingual" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <Languages className="h-3 w-3 mr-2" />
                  Multilingual
                </Link>
                <Link to="/text-to-speech" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <MessageSquare className="h-3 w-3 mr-2" />
                  Text to Speech
                </Link>
                <Link to="/voice-assistant" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <Phone className="h-3 w-3 mr-2" />
                  Voice Assistant
                </Link>
              </div>
            </div>

            {/* Column 4: Support */}
            <div className="flex flex-col h-full ml-16">
              <h3 className={`text-base font-bold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-white'
              }`} style={{color: isDarkMode ? '#ffffff' : '#ffffff'}}>Support</h3>
              <div className="space-y-2 text-sm">
                <Link to="/help" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <Info className="h-3 w-3 mr-2" />
                  Help Center
                </Link>
                <Link to="/signin" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <LogIn className="h-3 w-3 mr-2" />
                  Sign In
                </Link>
                <Link to="/signup" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <Users className="h-3 w-3 mr-2" />
                  Register
                </Link>
                <Link to="/privacy" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <FileText className="h-3 w-3 mr-2" />
                  Privacy Policy
                </Link>
                <Link to="/terms" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <BookOpen className="h-3 w-3 mr-2" />
                  Terms of Service
                </Link>
                <Link to="/contact" className={`flex items-center transition-colors text-white/80 hover:text-white hover:translate-x-1 transform duration-200`} onClick={() => window.scrollTo(0, 0)}>
                  <MessageSquare className="h-3 w-3 mr-2" />
                  Feedback
                </Link>
              </div>
            </div>

            {/* Column 5: Contact & Tech */}
            <div className="flex flex-col h-full ml-12">
              <h3 className={`text-base font-bold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-white'
              }`} style={{color: isDarkMode ? '#ffffff' : '#ffffff'}}>Contacts</h3>
              <div className="space-y-3 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-white/90 hover:text-white transition-colors" />
                    <span className="text-white/80">Jaipur, Rajasthan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-3 w-3 text-white/90 hover:text-white transition-colors" />
                    <span className="text-white/80">+91 9680211602</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-3 w-3 text-white/90 hover:text-white transition-colors" />
                    <span className="text-white/80">support@gmail.com</span>
                  </div>
                                  </div>
                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-white/70 mb-2 flex items-center whitespace-nowrap">
                    <Send className="h-4 w-4 mr-2" />
                    Subscribe to Newsletter
                  </h5>
                  <div className="flex space-x-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded text-white/80 placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40"
                    />
                    <button className="px-4 py-2 text-sm bg-[#4db5c5] hover:bg-[#142C52] text-white rounded transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
                              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-white/70 text-center md:text-left mb-3 md:mb-0">
                <p>&copy; 2026 Support System. All rights reserved. | Version 2.0 | Last Updated: April 2026</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Privacy</Link>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Terms</Link>
                <Link to="/help" className="text-white/70 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Support</Link>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                <span className="text-white/50">|</span>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Sitemap</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">RSS Feed</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <Translate />
      
      <Chatbot />
      
      <ScrollArrows />
      
      <AccessibilitySidebar />
      <RightAccessibilitySidebar />
    </div>
    </NotificationsProvider>
  );
};

export default MainLayout;
