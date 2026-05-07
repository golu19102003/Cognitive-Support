import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, HelpCircle, Play, Bot, Target, Users, Calendar, 
  MessageSquare, GraduationCap, Heart, School, Users2, Headphones,
  Wrench, Code, Download, Smartphone, Monitor, Shield, Lock,
  ChevronRight, Star, Clock, Award, Zap, Search, Filter,
  ExternalLink, Video, FileText, Globe, User, Phone,
  Mail, MapPin, CheckCircle, ArrowRight, TrendingUp, Eye, Brain
} from 'lucide-react';

const AdvancedFeatures = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState('all');
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Check for theme preference
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   localStorage.getItem('isDarkMode');
      setIsDarkMode(theme === 'dark' || theme === 'true');
    };
    checkTheme();
    window.addEventListener('storage', checkTheme);
    window.addEventListener('themechange', checkTheme);
    window.addEventListener('darkModeChange', checkTheme);
    const interval = setInterval(checkTheme, 500);
    return () => {
      window.removeEventListener('storage', checkTheme);
      window.removeEventListener('themechange', checkTheme);
      window.removeEventListener('darkModeChange', checkTheme);
      clearInterval(interval);
    };
  }, []);

  // Drag handlers for movable icon
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - iconPosition.x,
      y: e.clientY - iconPosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setIconPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const resources = [
    {
      id: 1,
      title: 'User Guide',
      description: 'Complete step-by-step guide explaining how to use PriHub features like accessibility tools, chatbot assistance, reminders, and community support.',
      category: 'guides',
      icon: BookOpen,
      color: 'from-blue-800 to-blue-900',
      features: ['Step-by-step tutorials', 'Visual guides', 'Accessibility features', 'Community support', 'Expert assistance'],
      rating: 4.8,
      downloads: '12.5K',
      action: 'Read More',
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'AI Smart Assistant',
      description: 'An AI-powered intelligent chatbot that helps users navigate the platform, answer questions, and provide personalized accessibility guidance.',
      category: 'ai',
      icon: Bot,
      color: 'from-indigo-700 to-indigo-800',
      features: ['24/7 availability', 'Personalized guidance', 'Accessibility help', 'Platform navigation', 'Smart assistance'],
      rating: 4.7,
      downloads: '9.8K',
      action: 'Try AI Assistant',
      badge: 'New'
    },
    {
      id: 3,
      title: 'API Documentation',
      description: 'Comprehensive technical documentation with practical guides and detailed code examples for integrating PriHub accessibility services.',
      category: 'guides',
      icon: Code,
      color: 'from-zinc-700 to-zinc-800',
      features: ['Developer docs', 'API integration', 'Technical guides', 'Code examples', 'Implementation support'],
      rating: 4.5,
      downloads: '3.2K',
      action: 'View Docs'
    },
    {
      id: 4,
      title: 'Inclusive Design Guidelines',
      description: 'Comprehensive design principles and proven best practices for creating accessible digital experiences with practical implementation examples.',
      category: 'guides',
      icon: BookOpen,
      color: 'from-stone-700 to-stone-800',
      features: ['Design principles', 'Best practices', 'Implementation guide', 'Case studies', 'Design patterns'],
      rating: 4.8,
      downloads: '9.3K',
      action: 'View Guidelines'
    },
    {
      id: 5,
      title: 'Community Engagement Tools',
      description: 'Interactive adaptive tools designed to increase meaningful engagement and active participation for users with cognitive challenges support.',
      category: 'support',
      icon: Heart,
      color: 'from-rose-700 to-rose-800',
      features: ['Engagement analytics', 'Participation tools', 'Community building', 'Social features'],
      rating: 4.7,
      downloads: '9.8K',
      action: 'Engage Now'
    },
    ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-gray-600 to-gray-700' },
    { id: 'guides', name: 'Guides', icon: BookOpen, color: 'from-blue-600 to-blue-700' },
    { id: 'tools', name: 'Tools', icon: Wrench, color: 'from-green-600 to-green-700' },
    { id: 'support', name: 'Support', icon: Users, color: 'from-purple-600 to-purple-700' },
    { id: 'ai', name: 'AI Services', icon: Bot, color: 'from-indigo-600 to-indigo-700' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeSection === 'all' || resource.category === activeSection;
    
    return matchesSearch && matchesCategory;
  });

  const renderResourceCard = (resource) => {
    const Icon = resource.icon;
    
    return (
      <div
        key={resource.id}
        className={`relative group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 ${
          hoveredCard === resource.id ? 'transform -translate-y-2' : ''
        }`}
        onMouseEnter={() => setHoveredCard(resource.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-5`}></div>
        
        {/* Popular Badge */}
        {resource.badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              {resource.badge}
            </span>
          </div>
        )}

        {/* Card Content */}
        <div className="relative p-8">
          {/* Icon Section */}
          <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
            <Icon className="h-8 w-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {resource.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {resource.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {resource.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
            {resource.features.length > 3 && (
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                +{resource.features.length - 3} more
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-4 w-4 ${star <= resource.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{resource.rating}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                <Download className="h-4 w-4" />
                <span className="text-sm">{resource.downloads}</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => {
              switch(resource.title) {
                case 'User Guide':
                  navigate('/resources/user-guide');
                  break;
                case 'AI Smart Assistant':
                  navigate('/advanced-features/ai-smart-assistant');
                  break;
                case 'API Documentation':
                  navigate('/advanced-features/api-documentation');
                  break;
                case 'Inclusive Design Guidelines':
                  navigate('/advanced-features/inclusive-design-guidelines');
                  break;
                case 'Community Engagement Tools':
                  navigate('/advanced-features/community-engagement-tools');
                  break;
                default:
                  break;
              }
            }}
            className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-gradient-to-r ${resource.color} text-white hover:shadow-lg transform hover:scale-105`}
          >
            {resource.action}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs with Complex Animation */}
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-30 animate-pulse ${isDarkMode ? 'bg-blue-600' : 'bg-blue-400'} shadow-2xl`}>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20"></div>
        </div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-30 animate-pulse delay-1000 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-400'} shadow-2xl`}>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 delay-1000"></div>
        </div>
        
        {/* Additional Floating Elements */}
        <div className={`absolute top-1/2 left-1/4 w-48 h-48 rounded-full opacity-20 animate-bounce ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-400'} shadow-xl`}></div>
        <div className={`absolute top-1/3 right-1/4 w-36 h-36 rounded-full opacity-25 animate-pulse delay-500 ${isDarkMode ? 'bg-cyan-600' : 'bg-cyan-400'} shadow-lg`}></div>
        
        {/* Moving Gradient Orbs */}
        <div className="absolute top-10 left-1/2 w-64 h-64 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}>
          <div className={`w-full h-full rounded-full bg-gradient-to-r ${isDarkMode ? 'from-blue-600 to-purple-600' : 'from-blue-400 to-purple-400'} shadow-2xl`}></div>
        </div>
        <div className="absolute bottom-10 left-1/3 w-56 h-56 rounded-full opacity-20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${isDarkMode ? 'from-purple-600 to-indigo-600' : 'from-purple-400 to-indigo-400'} shadow-2xl`}></div>
        </div>
        
        {/* Particle Effects */}
        <div className="absolute top-20 right-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-indigo-400 rounded-full opacity-40 animate-pulse delay-700"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-70 animate-ping"></div>
        
        {/* Advanced Features-Themed Elements */}
        <div className="absolute top-32 right-20 w-8 h-8 border-2 border-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 border-2 border-purple-400 rounded-lg opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-indigo-400 rounded opacity-50 animate-bounce delay-500"></div>
        
        {/* Wave Effects */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <div className={`h-full bg-gradient-to-t ${isDarkMode ? 'from-blue-600 to-transparent' : 'from-blue-400 to-transparent'} animate-pulse`}></div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-24 opacity-10">
          <div className={`h-full bg-gradient-to-b ${isDarkMode ? 'from-purple-600 to-transparent' : 'from-purple-400 to-transparent'} animate-pulse delay-500`}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div 
                className="relative group"
                style={{
                  position: 'relative',
                  transform: `translate(${iconPosition.x}px, ${iconPosition.y}px)`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
                <div 
                  className="relative bg-gradient-to-r from-[#142C52] to-[#16808D] p-3 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 cursor-move select-none"
                  onMouseDown={handleMouseDown}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  <Brain className="h-8 w-8 text-white transform transition-all duration-300 group-hover:scale-105" />
                </div>
                {/* Additional hover effect ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                {/* Floating animation when not dragging */}
                <div className={`absolute inset-0 rounded-full ${isDragging ? '' : 'animate-bounce'}`} style={{ animationDuration: '3s' }}></div>
              </div>
              <h1 className="text-4xl font-bold">
                <span style={{ color: '#16808D' }}>Advanced Services</span>
                <span className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : ''
                }`} style={{ color: isDarkMode ? '#ffffff' : '#000000' }}> Cognitive Support</span>
              </h1>
            </div>
          </div>
          <p className={`text-xl max-w-3xl mx-auto italic transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Cutting-edge advanced services including AI-powered tools, neural interfaces, and next-generation accessibility technologies. We provide innovative solutions and expert guidance for individuals seeking the most advanced cognitive support and independence technologies available.
          </p>
        </div>

        {/* Search Bar and Categories */}
        <div className="mb-8">
          {/* First Row: Search Bar */}
          <div className="flex justify-center mb-6">
            <div className={`w-full max-w-2xl p-3.5 rounded-xl shadow-lg`}>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4.5 w-4.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search advanced services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-[#16808D] text-white' : 'bg-gray-50 border-[#16808D] text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#16808D] text-base`}
                />
              </div>
            </div>
          </div>

          {/* Second Row: Categories */}
          <div className="grid grid-cols-5 gap-4">
            {/* Categories */}
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.id}
                    onClick={() => setActiveSection(category.id)}
                    className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer h-full ${
                      activeSection === category.id ? 'ring-2' : ''
                    } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                    style={activeSection === category.id ? { '--tw-ring-color': category.color } : {}}
                  >
                    <Icon className="h-8 w-8 mr-2" style={{ color: category.color }} />
                    <h2 className={`text-base font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{category.name}</h2>
                  </div>
                );
              })}
          </div>

        </div>

        {/* Category Description Content */}
        <div className="mb-12">
          {activeSection === 'all' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#16808D]/10 to-purple-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Brain className="h-16 w-16 text-[#16808D] mx-auto mb-4 animate-bounce" style={{ color: '#16808D' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#16808D] to-purple-600 bg-clip-text text-transparent">
                  <span style={{ color: '#16808D' }}>All Advanced Services</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Comprehensive advanced accessibility services featuring AI-powered tools, neural interfaces, cutting-edge control systems, and next-generation enhancements. We deliver innovative solutions and expert guidance for individuals seeking the most advanced cognitive support technologies.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    AI-Powered Tools
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Neural Interfaces
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                    Advanced Control
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'guides' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" style={{ color: '#6D28D9' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  <span style={{ color: '#6D28D9' }}>Advanced Guides</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Comprehensive step-by-step guides for advanced features including neural interface setup, AI configuration, and cutting-edge accessibility technologies. We provide detailed instructions with expert recommendations for advanced users.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    User Manuals
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Advanced Tutorials
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Expert Resources
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'tools' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-purple-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Wrench className="h-16 w-16 text-green-600 mx-auto mb-4 animate-bounce" style={{ color: 'purple' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                  <span style={{ color: 'purple' }}>Advanced Tools</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Cutting-edge accessibility tools featuring AI-powered assistance, neural interfaces, and advanced control systems. We provide innovative solutions for users seeking the most sophisticated cognitive support technologies available.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    AI Tools
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Neural Interfaces
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Control Systems
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'support' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-green-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Users className="h-16 w-16 text-red-600 mx-auto mb-4 animate-bounce" style={{ color: 'red' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                  <span style={{ color: 'red' }}>Advanced Support</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Expert support services for advanced features including personalized assistance, technical guidance, and community resources. We provide comprehensive help for users utilizing cutting-edge accessibility technologies.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                    Expert Help
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Technical Support
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Community Resources
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'ai' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Bot className="h-16 w-16 text-indigo-600 mx-auto mb-4 animate-bounce" style={{ color: 'indigo' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  <span style={{ color: 'indigo' }}>AI Services</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Intelligent AI-powered services providing personalized assistance, smart navigation, and contextual support for enhanced accessibility. We deliver cutting-edge artificial intelligence solutions for optimal user experience and cognitive support.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}`}>
                    Smart Assistance
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    24/7 Availability
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Personalized Guidance
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map(resource => renderResourceCard(resource))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No advanced services found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFeatures;
