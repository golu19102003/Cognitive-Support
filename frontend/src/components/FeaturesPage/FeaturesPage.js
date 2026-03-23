import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Languages, Brain, Award, Zap, Volume2, Settings, Globe, CheckCircle, AlertCircle } from 'lucide-react';

const FeaturesPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for theme preference
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   localStorage.getItem('isDarkMode');
      setIsDarkMode(theme === 'dark' || theme === 'true');
    };

    checkTheme();
    
    // Listen for theme changes
    window.addEventListener('storage', checkTheme);
    window.addEventListener('themechange', checkTheme);
    window.addEventListener('darkModeChange', checkTheme);
    
    // Poll every 500ms as backup
    const interval = setInterval(checkTheme, 500);
    
    return () => {
      window.removeEventListener('storage', checkTheme);
      window.removeEventListener('themechange', checkTheme);
      window.removeEventListener('darkModeChange', checkTheme);
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: '6 languages with RTL support and text-to-speech integration. Breaking language barriers globally.',
      link: '/multilingual',
      color: 'from-amber-500 to-orange-600',
      status: 'active',
      details: ['English, Hindi, Spanish, French, Chinese, Arabic', 'RTL Layout Support', 'Dynamic Translation', 'TTS Integration']
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800', text: 'Active', icon: CheckCircle },
      beta: { color: 'bg-blue-100 text-blue-800', text: 'Beta', icon: AlertCircle },
      coming: { color: 'bg-gray-100 text-gray-800', text: 'Coming Soon', icon: AlertCircle }
    };
    
    const config = statusConfig[status] || statusConfig.coming;
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.text}
      </span>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 animate-pulse ${isDarkMode ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 animate-pulse delay-1000 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-400'}`}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#142C52] to-[#16808D] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Brain className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Advanced Accessibility Features</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Cutting-edge technologies designed to empower users with cognitive disabilities through innovative solutions
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8">
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      {getStatusBadge(feature.status)}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Content */}
                    <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    
                    <p className={`text-gray-600 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>

                    {/* Details */}
                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={feature.link}
                      className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r ${feature.color} hover:opacity-90 transition-opacity duration-300 group-hover:shadow-lg`}
                    >
                      Try Feature
                      <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className={`inline-flex p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <Languages className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Advanced Accessibility Features
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Focus Mode and Eye Tracking available in Accessibility Sidebar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Transform Your Experience?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Try our advanced features and discover a new level of accessibility and support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/multilingual"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Languages className="h-5 w-5 mr-2" />
                Change Language
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
