import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageCircle, Globe, Shield, Heart, Star,
  ExternalLink, CheckCircle, ChevronRight, Headphones,
  Clock, Users, HelpCircle, Activity
} from 'lucide-react';

const SupportCenter247 = () => {
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

  const supportCategories = [
    { id: 'crisis', name: 'Crisis Support', icon: Shield, color: 'from-red-500 to-red-600' },
    { id: 'helpline', name: 'Helplines', icon: Phone, color: 'from-blue-500 to-blue-600' },
    { id: 'international', name: 'International', icon: Globe, color: 'from-green-500 to-green-600' },
    { id: 'resources', name: 'Resources', icon: Heart, color: 'from-purple-500 to-purple-600' }
  ];

  const supportResources = [
    {
      category: 'crisis',
      name: '988 Suicide & Crisis Lifeline',
      url: 'https://988lifeline.org',
      description: '24/7 suicide prevention and crisis support in the US',
      features: ['24/7 Support', 'Crisis Intervention', 'Suicide Prevention', 'Free Service'],
      type: 'Crisis Helpline',
      rating: 4.9,
      icon: Phone
    },
    {
      category: 'helpline',
      name: 'Aasra Info',
      url: 'https://www.aasra.info',
      description: '24/7 suicide prevention helpline in India',
      features: ['24/7 Helpline', 'Crisis Support', 'Confidential', 'Free Service'],
      type: 'Crisis Helpline',
      rating: 4.8,
      icon: Headphones
    },
    {
      category: 'helpline',
      name: 'Samaritans',
      url: 'https://www.samaritans.org',
      description: 'Emotional support helpline across multiple countries',
      features: ['Emotional Support', '24/7 Availability', 'Confidential', 'Non-judgmental'],
      type: 'Emotional Support',
      rating: 4.7,
      icon: Heart
    },
    {
      category: 'helpline',
      name: 'Vandrevala Foundation',
      url: 'https://www.vandrevalafoundation.com',
      description: 'Mental health support and crisis helpline in India',
      features: ['Mental Health', 'Crisis Support', 'Professional Help', 'Free Service'],
      type: 'Mental Health Helpline',
      rating: 4.8,
      icon: Shield
    },
    {
      category: 'helpline',
      name: 'iCall Helpline',
      url: 'https://www.icallhelpline.org',
      description: 'Psychosocial helpline by TISS in India',
      features: ['Psychosocial Support', 'Professional Counseling', 'Free Service', 'Confidential'],
      type: 'Counseling Helpline',
      rating: 4.6,
      icon: Headphones
    },
    {
      category: 'helpline',
      name: 'Kiran Helpline',
      url: 'https://www.kiranhelpline.org',
      description: 'Mental health rehabilitation helpline in India',
      features: ['Rehabilitation Support', 'Mental Health', '24/7 Service', 'Professional Help'],
      type: 'Rehabilitation Helpline',
      rating: 4.5,
      icon: Activity
    },
    {
      category: 'helpline',
      name: 'Childline India',
      url: 'https://www.childlineindia.org.in',
      description: '24-hour emergency phone service for children',
      features: ['Child Protection', 'Emergency Response', '24/7 Service', 'Free Helpline'],
      type: 'Child Protection',
      rating: 4.9,
      icon: Shield
    },
    {
      category: 'international',
      name: 'IFRC',
      url: 'https://www.ifrc.org',
      description: 'International Federation of Red Cross and Red Crescent',
      features: ['Global Support', 'Emergency Response', 'Humanitarian Aid', 'Disaster Relief'],
      type: 'Humanitarian Organization',
      rating: 4.8,
      icon: Globe
    },
    {
      category: 'international',
      name: 'Red Cross',
      url: 'https://www.redcross.org',
      description: 'American Red Cross disaster and emergency support',
      features: ['Disaster Relief', 'Emergency Support', 'Health Services', 'Blood Donation'],
      type: 'Emergency Organization',
      rating: 4.7,
      icon: Heart
    },
    {
      category: 'helpline',
      name: 'Befrienders',
      url: 'https://www.befrienders.org',
      description: 'Global network of emotional support helplines',
      features: ['Global Network', 'Emotional Support', 'Volunteer-based', 'Confidential'],
      type: 'Support Network',
      rating: 4.6,
      icon: Users
    },
    {
      category: 'international',
      name: 'Lifeline Australia',
      url: 'https://www.lifeline.org.au',
      description: '24/7 crisis support and suicide prevention in Australia',
      features: ['Crisis Support', 'Suicide Prevention', '24/7 Service', 'Confidential'],
      type: 'Crisis Helpline',
      rating: 4.8,
      icon: Phone
    },
    {
      category: 'crisis',
      name: 'Crisis Text Line',
      url: 'https://www.crisistextline.org',
      description: '24/7 crisis support via text messaging',
      features: ['Text Support', '24/7 Availability', 'Crisis Intervention', 'Free Service'],
      type: 'Text Crisis Support',
      rating: 4.7,
      icon: MessageCircle
    },
    {
      category: 'resources',
      name: 'NIMH',
      url: 'https://www.nimh.nih.gov',
      description: 'National Institute of Mental Health resources and information',
      features: ['Mental Health Info', 'Research Updates', 'Treatment Options', 'Professional Resources'],
      type: 'Health Institute',
      rating: 4.8,
      icon: HelpCircle
    },
    {
      category: 'international',
      name: 'WHO Mental Health',
      url: 'https://www.who.int/health-topics/mental-health',
      description: 'World Health Organization mental health resources',
      features: ['Global Health', 'Mental Health Info', 'Policy Guidelines', 'Research Data'],
      type: 'Health Organization',
      rating: 4.9,
      icon: Globe
    },
    {
      category: 'resources',
      name: 'NHS Mental Health',
      url: 'https://www.nhs.uk/mental-health',
      description: 'UK National Health Service mental health support',
      features: ['Healthcare Support', 'Treatment Options', 'Professional Help', 'Emergency Care'],
      type: 'Healthcare Service',
      rating: 4.7,
      icon: Heart
    },
    {
      category: 'resources',
      name: 'Healthline',
      url: 'https://www.healthline.com',
      description: 'Health information and medical advice',
      features: ['Health Information', 'Medical Advice', 'Symptom Checker', 'Expert Articles'],
      type: 'Health Information',
      rating: 4.6,
      icon: Activity
    },
    {
      category: 'resources',
      name: 'Mayo Clinic',
      url: 'https://www.mayoclinic.org',
      description: 'Medical information and expert health advice',
      features: ['Medical Expertise', 'Health Information', 'Treatment Options', 'Research Updates'],
      type: 'Medical Institution',
      rating: 4.8,
      icon: Shield
    },
    {
      category: 'resources',
      name: 'WebMD',
      url: 'https://www.webmd.com',
      description: 'Health information and symptom checker',
      features: ['Health Information', 'Symptom Checker', 'Drug Information', 'Expert Articles'],
      type: 'Health Portal',
      rating: 4.5,
      icon: HelpCircle
    },
    {
      category: 'resources',
      name: 'HelpGuide',
      url: 'https://www.helpguide.org',
      description: 'Mental health and wellness resources',
      features: ['Mental Health', 'Wellness Resources', 'Self-Help Tools', 'Expert Articles'],
      type: 'Mental Health Resource',
      rating: 4.7,
      icon: Heart
    },
    {
      category: 'resources',
      name: 'MHA National',
      url: 'https://www.mhanational.org',
      description: 'Mental Health America resources and support',
      features: ['Mental Health Support', 'Screening Tools', 'Advocacy', 'Community Resources'],
      type: 'Mental Health Organization',
      rating: 4.6,
      icon: Users
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? supportResources 
    : supportResources.filter(resource => resource.category === selectedCategory);

  const handleBookSession = (platformName) => {
    setSelectedPlatform(platformName);
    setBookingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, platform: selectedPlatform });
    alert(`Support session request submitted for ${selectedPlatform}! We'll contact you soon.`);
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
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Phone className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">24/7 Support Center</h1>
            </div>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Round-the-clock mental health support, crisis intervention, and emergency assistance
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Crisis Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Professional Help</span>
              </div>
            </div>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Help Now
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
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg transform scale-105'
                : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Support
          </button>
          {supportCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg transform scale-105'
                    : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Support Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: isDarkMode ? '1rem' : undefined }}>
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            const categoryColor = supportCategories.find(c => c.id === resource.category)?.color || 'from-red-500 to-red-600';
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
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors duration-300`}>
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
                          ? 'bg-gradient-to-r from-red-700 to-orange-700 text-white hover:from-red-800 hover:to-orange-800 shadow-lg' 
                          : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 shadow-lg'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Get Support</span>
                    </a>
                    <button
                      onClick={() => handleBookSession(resource.name)}
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800 shadow-lg' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                      }`}
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-${isDarkMode ? 'white/10' : 'white/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Emergency Contacts Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Emergency Contacts
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Immediate help for life-threatening situations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="tel:911"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-red-900/50 text-red-300 hover:bg-red-900/70' : 'bg-red-50 text-red-700 hover:bg-red-100'
                }`}
              >
                <Phone className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">Emergency Services</div>
                <div className="text-sm">Call 911</div>
              </a>
              <a
                href="tel:988"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-900/70' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                <Headphones className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">Crisis Lifeline</div>
                <div className="text-sm">Call or Text 988</div>
              </a>
              <a
                href="tel:18602662345"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-green-900/50 text-green-300 hover:bg-green-900/70' : 'bg-green-50 text-green-700 hover:bg-green-100'
                }`}
              >
                <Heart className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">Vandrevala Foundation</div>
                <div className="text-sm">1860-266-2345</div>
              </a>
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
                  <div className={`w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center`}>
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Get Support Now
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
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
                      What support do you need? (Optional)
                    </label>
                    <textarea
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      }`}
                      placeholder="Briefly describe what support you need..."
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
                        <span className="font-semibold text-red-600">Crisis Situation</span>
                        <br />
                        <span className="text-xs">Check this if you need immediate help</span>
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
                  className="flex-1 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Support Request
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

export default SupportCenter247;
