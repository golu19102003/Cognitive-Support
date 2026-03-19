import React, { useState, useEffect } from 'react';
import { Brain, Eye, Mic, Hand, Keyboard, Mouse, Monitor, Palette, Shield, Move, Target, Zap, Volume2, Settings, ChevronRight, Check, AlertCircle, Clock, Star, ArrowRight, Play, Pause, RotateCw, Search, Filter, Download, Globe, User, Phone, Mail, MapPin, BookOpen, Users, Calendar, Award, TrendingUp, Headphones, Wrench, Code, Smartphone, Lock, HelpCircle, GraduationCap, School } from 'lucide-react';

const AdvancedFeatures = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState('features');
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [expandedFeature, setExpandedFeature] = useState(null);

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

  const categories = [
    { id: 'all', name: 'All Features', icon: Zap, color: '#16808D' },
    { id: 'ai-powered', name: 'AI-Powered', icon: Brain, color: 'purple' },
    { id: 'accessibility', name: 'Accessibility', icon: Eye, color: 'green' },
    { id: 'control', name: 'Control Methods', icon: Hand, color: 'orange' },
    { id: 'enhancement', name: 'Enhancements', icon: Settings, color: 'red' },
  ];

  const features = [
    // AI-Powered Features
    {
      id: 'smart-assistant',
      category: 'ai-powered',
      title: 'Smart Assistant',
      description: 'AI-powered personal assistant for cognitive support and guidance',
      icon: Brain,
      status: 'active',
      color: 'emerald',
      details: 'Advanced AI assistant that provides contextual help, reminders, and cognitive support tailored to individual needs.',
      benefits: ['24/7 Availability', 'Contextual Help', 'Personalized Support', 'Voice Interaction'],
      requirements: ['Internet Connection', 'Microphone (Optional)'],
      compatibility: ['Desktop', 'Mobile', 'Tablet'],
      rating: 4.9,
      users: '15.2K',
      badge: 'Popular'
    },
    {
      id: 'eye-tracking',
      category: 'ai-powered',
      title: 'Eye Tracking',
      description: 'Control interface using eye movements and gaze detection',
      icon: Eye,
      status: 'beta',
      color: 'cyan',
      details: 'Revolutionary eye tracking technology that allows users to control the interface using only their eye movements.',
      benefits: ['Hands-Free Control', 'Precision Navigation', 'Fatigue Reduction', 'Accessibility Enhancement'],
      requirements: ['Webcam', 'Calibration Process', 'Well-Lit Environment'],
      compatibility: ['Desktop', 'Laptop'],
      rating: 4.7,
      users: '8.5K',
      badge: 'Beta'
    },
    {
      id: 'voice-control',
      category: 'ai-powered',
      title: 'Voice Control',
      description: 'Navigate and control using voice commands and dictation',
      icon: Mic,
      status: 'coming-soon',
      color: 'indigo',
      details: 'Advanced voice recognition system that enables complete control of the interface through natural language commands.',
      benefits: ['Natural Interaction', 'Hands-Free Operation', 'Multi-Language Support', 'Custom Commands'],
      requirements: ['Microphone', 'Internet Connection', 'Quiet Environment'],
      compatibility: ['Desktop', 'Mobile', 'Tablet'],
      rating: 4.6,
      users: '12.1K',
      badge: 'Coming Soon'
    },
    {
      id: 'gesture-control',
      category: 'ai-powered',
      title: 'Gesture Control',
      description: 'Control interface using hand gestures and movements',
      icon: Hand,
      status: 'research',
      color: 'purple',
      details: 'Cutting-edge gesture recognition technology for intuitive control through hand movements and body gestures.',
      benefits: ['Intuitive Control', 'Contactless Interaction', 'Customizable Gestures', 'Multi-Gesture Support'],
      requirements: ['Camera', 'Good Lighting', 'Calibration'],
      compatibility: ['Desktop', 'Laptop'],
      rating: 4.5,
      users: '3.2K',
      badge: 'Research'
    },
    
    // Accessibility Features
    {
      id: 'keyboard-navigation',
      category: 'accessibility',
      title: 'Keyboard Navigation',
      description: 'Enhanced keyboard shortcuts and navigation patterns',
      icon: Keyboard,
      status: 'active',
      color: 'blue',
      details: 'Comprehensive keyboard navigation system with customizable shortcuts and efficient navigation patterns.',
      benefits: ['Fast Navigation', 'Customizable Shortcuts', 'Full Accessibility', 'Productivity Boost'],
      requirements: ['Standard Keyboard'],
      compatibility: ['Desktop', 'Laptop'],
      rating: 4.8,
      users: '18.7K',
      badge: 'Essential'
    },
    {
      id: 'mouse-enhancements',
      category: 'accessibility',
      title: 'Mouse Enhancements',
      description: 'Custom mouse behaviors and accessibility options',
      icon: Mouse,
      status: 'active',
      color: 'teal',
      details: 'Advanced mouse customization options including cursor enhancement, click assistance, and movement optimization.',
      benefits: ['Enhanced Visibility', 'Click Assistance', 'Movement Control', 'Customizable Settings'],
      requirements: ['Mouse or Trackpad'],
      compatibility: ['Desktop', 'Laptop'],
      rating: 4.7,
      users: '14.3K',
      badge: 'Popular'
    },
    {
      id: 'screen-magnifier',
      category: 'accessibility',
      title: 'Screen Magnifier',
      description: 'Magnify screen content for better visibility',
      icon: Monitor,
      status: 'beta',
      color: 'orange',
      details: 'Powerful screen magnification tool with multiple zoom levels and intelligent content tracking.',
      benefits: ['Variable Zoom', 'Content Tracking', 'High Clarity', 'Smooth Scrolling'],
      requirements: ['Graphics Acceleration'],
      compatibility: ['Desktop', 'Laptop', 'Tablet'],
      rating: 4.6,
      users: '6.8K',
      badge: 'Beta'
    },
    {
      id: 'color-blind-mode',
      category: 'accessibility',
      title: 'Color Blind Mode',
      description: 'Optimized color schemes for color blindness',
      icon: Palette,
      status: 'active',
      color: 'pink',
      details: 'Multiple color-blind friendly color schemes with real-time preview and customization options.',
      benefits: ['Multiple Color Schemes', 'Real-time Preview', 'Customizable Filters', 'Accessibility Compliance'],
      requirements: ['None'],
      compatibility: ['All Devices'],
      rating: 4.8,
      users: '11.2K',
      badge: 'Essential'
    },
    
    // Enhancement Features
    {
      id: 'epilepsy-safe',
      category: 'enhancement',
      title: 'Epilepsy Safe',
      description: 'Remove flashing elements and reduce seizure triggers',
      icon: Shield,
      status: 'active',
      color: 'red',
      details: 'Comprehensive epilepsy-safe mode that eliminates flashing elements and reduces potential seizure triggers.',
      benefits: ['Seizure Prevention', 'Reduced Flashing', 'Safe Animations', 'Medical Compliance'],
      requirements: ['None'],
      compatibility: ['All Devices'],
      rating: 4.9,
      users: '7.1K',
      badge: 'Essential'
    },
    {
      id: 'motion-reduction',
      category: 'enhancement',
      title: 'Motion Reduction',
      description: 'Reduce animations and motion effects',
      icon: Move,
      status: 'active',
      color: 'violet',
      details: 'Motion reduction mode that minimizes animations and transitions for users with motion sensitivity.',
      benefits: ['Reduced Motion', 'Better Performance', 'Less Distraction', 'Accessibility Enhancement'],
      requirements: ['None'],
      compatibility: ['All Devices'],
      rating: 4.7,
      users: '9.4K',
      badge: 'Popular'
    },
    {
      id: 'high-visibility',
      category: 'enhancement',
      title: 'High Visibility',
      description: 'Enhanced visibility mode with improved contrast',
      icon: Eye,
      status: 'active',
      color: 'rose',
      details: 'High visibility mode with enhanced contrast, larger text, and improved visual clarity.',
      benefits: ['Enhanced Contrast', 'Larger Text', 'Better Readability', 'Visual Clarity'],
      requirements: ['None'],
      compatibility: ['All Devices'],
      rating: 4.8,
      users: '13.6K',
      badge: 'Popular'
    },
    {
      id: 'focus-assist',
      category: 'enhancement',
      title: 'Focus Assist',
      description: 'Reduce distractions and improve concentration',
      icon: Target,
      status: 'beta',
      color: 'amber',
      details: 'Advanced focus assistance tool that helps users concentrate by reducing distractions and highlighting important content.',
      benefits: ['Distraction Reduction', 'Content Highlighting', 'Better Focus', 'Productivity Enhancement'],
      requirements: ['None'],
      compatibility: ['All Devices'],
      rating: 4.5,
      users: '4.9K',
      badge: 'Beta'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'beta': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'coming-soon': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'research': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'beta': return 'Beta';
      case 'coming-soon': return 'Coming Soon';
      case 'research': return 'Research';
      default: return 'Unknown';
    }
  };

  const getStatusGradient = (status) => {
    switch (status) {
      case 'active': return 'from-green-500 to-green-600';
      case 'beta': return 'from-yellow-500 to-yellow-600';
      case 'coming-soon': return 'from-blue-500 to-blue-600';
      case 'research': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getButtonGradient = (status) => {
    switch (status) {
      case 'active': return 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700';
      case 'beta': return 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700';
      case 'coming-soon': return 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700';
      case 'research': return 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700';
    }
  };

  const getColorGradient = (color) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600',
      cyan: 'from-cyan-500 to-cyan-600',
      indigo: 'from-indigo-500 to-indigo-600',
      purple: 'from-purple-500 to-purple-600',
      blue: 'from-blue-500 to-blue-600',
      teal: 'from-teal-500 to-teal-600',
      orange: 'from-orange-500 to-orange-600',
      pink: 'from-pink-500 to-pink-600',
      red: 'from-red-500 to-red-600',
      violet: 'from-violet-500 to-violet-600',
      rose: 'from-rose-500 to-rose-600',
      amber: 'from-amber-500 to-amber-600'
    };
    return colors[color] || colors.blue;
  };

  const getButtonColorGradient = (color) => {
    const colors = {
      emerald: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      cyan: 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      indigo: 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      purple: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      blue: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      teal: 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      orange: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      pink: 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      red: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      violet: 'bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700',
      rose: 'bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700',
      amber: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
    };
    return colors[color] || colors.blue;
  };

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  const searchFilteredFeatures = filteredFeatures.filter(feature =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-bounce delay-1000"></div>
      </div>

      {/* Hero Section Content */}
      <div className="mb-12">
        <div className="text-center py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#16808D]/10 to-purple-500/10 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-16 w-16 text-[#16808D] mr-4 animate-bounce" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#16808D] to-purple-600 bg-clip-text text-transparent">
                <span>
                  <span style={{ color: '#16808D' }}>Advanced</span>{' '}
                  <span style={{ color: 'black' }}>Features</span>
                </span>
              </h2>
            </div>
            <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
              Discover cutting-edge accessibility technologies and AI-powered features designed to transform your digital experience. From smart assistants and eye tracking to voice control and gesture recognition, we're pioneering the future of inclusive technology that adapts to your unique needs and empowers you to interact with digital content in revolutionary ways.
            </p>
          </div>
        </div>
      </div>

      {/* Categories and Search Bar */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className={`p-3.5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-4`}>
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4.5 w-4.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-base`}
              />
            </div>
          </div>

          {/* Categories Row */}
          <div className="grid grid-cols-5 gap-3 mb-12">
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center cursor-pointer h-full ${
                      selectedCategory === category.id ? 'ring-2' : ''
                    } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                    style={selectedCategory === category.id ? { '--tw-ring-color': category.color } : {}}
                  >
                    <Icon className="h-8 w-8 mr-2" style={{ color: category.color }} />
                    <span className={`text-base font-bold transition-colors duration-300 whitespace-nowrap ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{category.name}</span>
                  </div>
                );
              })}
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {searchFilteredFeatures.map((feature) => {
            const Icon = feature.icon;
            const isExpanded = expandedFeature === feature.id;
            
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                style={{
                  transform: hoveredCard === feature.id ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {/* Card Header */}
                <div className={`p-6 bg-gradient-to-r ${getColorGradient(feature.color)} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">
                          {getStatusText(feature.status)}
                        </span>
                        {feature.badge && (
                          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">
                            {feature.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-3">{feature.description}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                        {feature.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-500 mr-1" />
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                        {feature.users}
                      </span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {feature.benefits.slice(0, 3).map((benefit, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode 
                              ? 'bg-gray-700 text-gray-300 border border-gray-600'
                              : 'bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpandedFeature(isExpanded ? null : feature.id)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center text-white ${getButtonColorGradient(feature.color)}`}
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                      {/* Details */}
                      <div>
                        <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Overview</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature.details}
                        </p>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Requirements</h4>
                        <div className="flex flex-wrap gap-2">
                          {feature.requirements.map((req, index) => (
                            <span key={index} className={`px-2 py-1 rounded text-xs ${
                              isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                            }`}>
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Compatibility */}
                      <div>
                        <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Compatible With</h4>
                        <div className="flex flex-wrap gap-2">
                          {feature.compatibility.map((device, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                              {device}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Enable Button */}
                      <div className="pt-4">
                        <button
                          className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 text-white ${getButtonColorGradient(feature.color)}`}
                        >
                          {feature.status === 'active' && 'Enable Feature'}
                          {feature.status === 'beta' && 'Try Beta'}
                          {feature.status === 'coming-soon' && 'Coming Soon'}
                          {feature.status === 'research' && 'In Research'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Future Technologies Section */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-purple-50 to-blue-50'} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Future Technologies
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              We're constantly researching and developing cutting-edge technologies to push the boundaries of accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`bg-white rounded-xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-700' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Brain-Computer Interface
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Direct neural control of digital interfaces using brain signals
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-purple-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Expected: 2026
                  </span>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                  Research
                </span>
              </div>
            </div>

            <div className={`bg-white rounded-xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-700' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Advanced Eye Tracking
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                Next-generation eye tracking with millisecond precision
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Expected: 2025
                  </span>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  Beta
                </span>
              </div>
            </div>

            <div className={`bg-white rounded-xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-700' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Neural Voice Assistant
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                AI assistant that understands cognitive patterns and adapts
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-green-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Expected: 2025
                  </span>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Beta
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#142C52] to-[#16808D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our beta program and get early access to cutting-edge accessibility features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#142C52] rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Join Beta Program
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#142C52] transition-all flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures;
