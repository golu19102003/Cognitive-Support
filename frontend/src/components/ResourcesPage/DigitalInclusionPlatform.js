import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Users, Monitor, Star, Award,
  ExternalLink, CheckCircle, ChevronRight, Eye,
  Keyboard, Headphones, Zap, Target
} from 'lucide-react';

const DigitalInclusionPlatform = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookingModal, setBookingModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: 'video',
    concern: '',
    emergency: false
  });

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setIsDarkMode(theme === 'dark');
    };

    checkTheme();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(checkTheme);

    return () => mediaQuery.removeListener(checkTheme);
  }, []);

  const inclusionCategories = [
    { id: 'standards', name: 'Standards', icon: Shield, color: 'from-blue-500 to-blue-600' },
    { id: 'tools', name: 'Tools', icon: Monitor, color: 'from-green-500 to-green-600' },
    { id: 'companies', name: 'Companies', icon: Users, color: 'from-purple-500 to-purple-600' },
    { id: 'assistive', name: 'Assistive Tech', icon: Zap, color: 'from-orange-500 to-orange-600' }
  ];

  const inclusionResources = [
    {
      category: 'standards',
      name: 'W3C Web Accessibility',
      url: 'https://www.w3.org/WAI/',
      description: 'Web Accessibility Initiative - standards and guidelines',
      features: ['WCAG Guidelines', 'ARIA Standards', 'Accessibility Testing', 'Best Practices'],
      type: 'Standards Organization',
      rating: 4.9,
      icon: Globe
    },
    {
      category: 'tools',
      name: 'Accessibility.com',
      url: 'https://www.accessibility.com',
      description: 'Digital accessibility platform and resources',
      features: ['Accessibility Testing', 'Compliance Tools', 'Expert Consulting', 'Training Programs'],
      type: 'Accessibility Platform',
      rating: 4.7,
      icon: Monitor
    },
    {
      category: 'standards',
      name: 'Section 508',
      url: 'https://www.section508.gov',
      description: 'US federal accessibility standards for technology',
      features: ['Federal Standards', 'Compliance Requirements', 'Testing Tools', 'Procurement Guidelines'],
      type: 'Government Standards',
      rating: 4.8,
      icon: Shield
    },
    {
      category: 'standards',
      name: 'ADA.gov',
      url: 'https://www.ada.gov',
      description: 'Americans with Disabilities Act information and resources',
      features: ['Legal Requirements', 'Compliance Guidelines', 'Technical Assistance', 'Enforcement'],
      type: 'Legal Standards',
      rating: 4.8,
      icon: Target
    },
    {
      category: 'companies',
      name: 'Microsoft Accessibility',
      url: 'https://www.microsoft.com/accessibility',
      description: 'Microsoft accessibility features and inclusive design',
      features: ['Windows Accessibility', 'Office 365 Tools', 'Xbox Accessibility', 'AI Solutions'],
      type: 'Tech Company',
      rating: 4.9,
      icon: Monitor
    },
    {
      category: 'companies',
      name: 'Apple Accessibility',
      url: 'https://www.apple.com/accessibility',
      description: 'Apple accessibility features across all devices',
      features: ['iOS Accessibility', 'macOS Features', 'VoiceOver', 'Switch Control'],
      type: 'Tech Company',
      rating: 4.9,
      icon: Monitor
    },
    {
      category: 'companies',
      name: 'Google Accessibility',
      url: 'https://www.google.com/accessibility',
      description: 'Google accessibility features and inclusive products',
      features: ['Android Accessibility', 'Chrome Extensions', 'Voice Navigation', 'AI Tools'],
      type: 'Tech Company',
      rating: 4.8,
      icon: Monitor
    },
    {
      category: 'tools',
      name: 'WebAIM',
      url: 'https://webaim.org',
      description: 'Web accessibility resources and training',
      features: ['Accessibility Testing', 'WAVE Tool', 'Training Courses', 'Consulting Services'],
      type: 'Accessibility Organization',
      rating: 4.8,
      icon: Eye
    },
    {
      category: 'tools',
      name: 'Deque',
      url: 'https://deque.com',
      description: 'Digital accessibility software and services',
      features: ['Testing Tools', 'Compliance Software', 'Training Programs', 'Consulting Services'],
      type: 'Accessibility Company',
      rating: 4.7,
      icon: Monitor
    },
    {
      category: 'tools',
      name: 'Level Access',
      url: 'https://www.levelaccess.com',
      description: 'Digital accessibility compliance platform',
      features: ['Compliance Platform', 'Testing Tools', 'Reporting', 'Enterprise Solutions'],
      type: 'Accessibility Platform',
      rating: 4.6,
      icon: Shield
    },
    {
      category: 'tools',
      name: 'TPGi',
      url: 'https://www.tpgi.com',
      description: 'Digital accessibility consulting and testing',
      features: ['Accessibility Testing', 'Consulting Services', 'Training', 'Compliance Solutions'],
      type: 'Accessibility Consulting',
      rating: 4.7,
      icon: Users
    },
    {
      category: 'tools',
      name: 'Siteimprove',
      url: 'https://www.siteimprove.com',
      description: 'Website optimization and accessibility tools',
      features: ['Accessibility Testing', 'SEO Tools', 'Content Optimization', 'Analytics'],
      type: 'Web Platform',
      rating: 4.5,
      icon: Monitor
    },
    {
      category: 'tools',
      name: 'UsableNet',
      url: 'https://www.usable.net',
      description: 'Accessibility testing and compliance solutions',
      features: ['Accessibility Testing', 'Compliance Tools', 'Mobile Testing', 'Enterprise Solutions'],
      type: 'Accessibility Platform',
      rating: 4.6,
      icon: Eye
    },
    {
      category: 'tools',
      name: 'A11y Project',
      url: 'https://www.a11yproject.com',
      description: 'Community-driven accessibility resources',
      features: ['Accessibility Guides', 'Best Practices', 'Code Examples', 'Community Resources'],
      type: 'Community Project',
      rating: 4.8,
      icon: Globe
    },
    {
      category: 'tools',
      name: 'Interactive Accessibility',
      url: 'https://www.interactiveaccessibility.com',
      description: 'Accessibility consulting and training services',
      features: ['Consulting Services', 'Training Programs', 'Testing Tools', 'Compliance Solutions'],
      type: 'Accessibility Consulting',
      rating: 4.6,
      icon: Users
    },
    {
      category: 'companies',
      name: 'IBM Able',
      url: 'https://www.ibm.com/able',
      description: 'IBM accessibility solutions and inclusive design',
      features: ['Enterprise Solutions', 'AI Accessibility', 'Consulting Services', 'Training Programs'],
      type: 'Tech Company',
      rating: 4.7,
      icon: Monitor
    },
    {
      category: 'assistive',
      name: 'OrCam',
      url: 'https://www.orcam.com',
      description: 'AI-powered assistive technology for visual impairment',
      features: ['Visual Assistance', 'Reading Devices', 'AI Technology', 'Portable Solutions'],
      type: 'Assistive Technology',
      rating: 4.8,
      icon: Eye
    },
    {
      category: 'assistive',
      name: 'Freedom Scientific',
      url: 'https://www.freedomscientific.com',
      description: 'Assistive technology for vision impairment',
      features: ['Screen Readers', 'Magnification', 'Braille Displays', 'Low Vision Solutions'],
      type: 'Assistive Technology',
      rating: 4.7,
      icon: Monitor
    },
    {
      category: 'assistive',
      name: 'HumanWare',
      url: 'https://www.humanware.com',
      description: 'Assistive technology for blindness and low vision',
      features: ['Braille Displays', 'Digital Players', 'Magnification', 'Reading Solutions'],
      type: 'Assistive Technology',
      rating: 4.6,
      icon: Monitor
    },
    {
      category: 'assistive',
      name: 'BOIA',
      url: 'https://www.boia.org',
      description: 'Bureau of Internet Accessibility certification',
      features: ['Accessibility Certification', 'Testing Services', 'Compliance Verification', 'Professional Services'],
      type: 'Certification Organization',
      rating: 4.5,
      icon: Shield
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? inclusionResources 
    : inclusionResources.filter(resource => resource.category === selectedCategory);

  const handleBookSession = (platformName) => {
    setSelectedPlatform(platformName);
    setBookingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, platform: selectedPlatform });
    alert(`Digital inclusion session request submitted for ${selectedPlatform}! We'll contact you soon.`);
    setBookingModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      sessionType: 'video',
      concern: '',
      emergency: false
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">Digital Inclusion Platform</h1>
            </div>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Comprehensive resources for digital accessibility, inclusive design, and assistive technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">20+ Platforms</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Eye className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Accessibility Tools</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Inclusive Design</span>
              </div>
            </div>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Resources
            </button>
          </div>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg transform scale-105'
                : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Resources
          </button>
          {inclusionCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Inclusion Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: isDarkMode ? '1rem' : undefined }}>
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            const categoryColor = inclusionCategories.find(c => c.id === resource.category)?.color || 'from-cyan-500 to-cyan-600';
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}
              >
                {/* Card Header with Gradient Border */}
                <div className={`h-2 bg-gradient-to-r ${categoryColor}`}></div>
                
                {/* Card Content */}
                <div className="p-4 sm:p-6 lg:p-8" style={{ background: isDarkMode ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' : undefined }}>
                  {/* Icon and Rating */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${categoryColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex flex-col items-end">
                      <div className={`flex flex-col items-end ${
                        isDarkMode ? 'bg-yellow-900/50' : 'bg-yellow-50'
                      } px-3 py-1 rounded-full`}>
                        <Star className={`h-4 w-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'} fill-current`} />
                        <span className={`text-sm font-bold ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                          {resource.rating}
                        </span>
                      </div>
                      <span className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} transition-colors duration-300`}>
                    {resource.name}
                  </h3>
                  
                  {/* Description */}
                  <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {resource.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {resource.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'} flex items-center justify-center mr-3 flex-shrink-0`}>
                          <CheckCircle className={`h-3 w-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                        </div>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-cyan-700 to-blue-700 text-white hover:from-cyan-800 hover:to-blue-800 shadow-lg' 
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 shadow-lg'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Explore Platform</span>
                    </a>
                    <button
                      onClick={() => handleBookSession(resource.name)}
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800 shadow-lg' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                      }`}
                    >
                      <Shield className="h-4 w-4" />
                      <span>Get Support</span>
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-${isDarkMode ? 'white/10' : 'white/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Accessibility Principles Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Digital Accessibility Principles
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Core principles for creating inclusive digital experiences
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-700'
              }`}>
                <Eye className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Perceivable</div>
                <div className="text-sm mb-2">Information must be presentable</div>
                <div className="text-xs">Alt text, captions, contrast</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-50 text-green-700'
              }`}>
                <Keyboard className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Operable</div>
                <div className="text-sm mb-2">Interface must be usable</div>
                <div className="text-xs">Keyboard navigation, timing</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-700'
              }`}>
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Understandable</div>
                <div className="text-sm mb-2">Content must be clear</div>
                <div className="text-xs">Simple language, instructions</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-50 text-orange-700'
              }`}>
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Robust</div>
                <div className="text-sm mb-2">Compatible with assistive tech</div>
                <div className="text-xs">Screen readers, voice control</div>
              </div>
            </div>
          </div>
        </div>

      {/* Booking Modal */}
      {bookingModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setBookingModal(false)}
        >
          <div 
            className={`w-full max-w-2xl rounded-3xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-2xl max-h-[85vh] flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`px-8 py-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center`}>
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Get Digital Inclusion Support
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Platform: {selectedPlatform}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setBookingModal(false)}
                  className={`p-3 rounded-xl transition-all ${
                    isDarkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <ChevronRight className="h-5 w-5 rotate-180" />
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <form onSubmit={handleFormSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Session Type *
                      </label>
                      <select
                        name="sessionType"
                        value={formData.sessionType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                        }`}
                      >
                        <option value="video">Video Call</option>
                        <option value="phone">Phone Call</option>
                        <option value="chat">Text Chat</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Scheduling Section */}
                <div>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Schedule Your Session
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                        }`}
                      >
                        <option value="">Select a time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Additional Information
                  </h4>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      What accessibility support do you need? (Optional)
                    </label>
                    <textarea
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                      }`}
                      placeholder="Briefly describe your accessibility needs..."
                    />
                  </div>

                  <div className="mt-6 p-4 rounded-xl border ${
                    isDarkMode 
                      ? 'bg-red-900/20 border-red-800/50' 
                      : 'bg-red-50 border-red-200'
                  }">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="emergency"
                        id="emergency"
                        checked={formData.emergency}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500 mt-0.5"
                      />
                      <label htmlFor="emergency" className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="font-semibold text-red-600">Urgent Accessibility Request</span>
                        <br />
                        <span className="text-xs">Check this if you need immediate assistance</span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer - Fixed */}
            <div className={`px-8 py-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setBookingModal(false)}
                  className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all ${
                    isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="flex-1 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Accessibility Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default DigitalInclusionPlatform;
