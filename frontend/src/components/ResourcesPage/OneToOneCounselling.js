import React, { useState, useEffect } from 'react';
import { 
  Users, Phone, Video, MessageCircle, Calendar, Clock,
  Star, ExternalLink, Heart, Shield, Award, CheckCircle,
  ChevronRight, Headphones, Globe, User
} from 'lucide-react';

const OneToOneCounselling = () => {
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

  const counsellingCategories = [
    { id: 'indian', name: 'Indian Platforms', icon: Globe, color: 'from-orange-500 to-orange-600' },
    { id: 'international', name: 'International', icon: Users, color: 'from-blue-500 to-blue-600' },
    { id: 'video', name: 'Video Sessions', icon: Video, color: 'from-green-500 to-green-600' },
    { id: 'chat', name: 'Chat Support', icon: MessageCircle, color: 'from-purple-500 to-purple-600' }
  ];

  const counsellingResources = [
    {
      category: 'indian',
      name: 'Practo Counselling Psychology',
      url: 'https://www.practo.com/counselling-psychology',
      description: 'Online counselling psychology services with verified professionals',
      features: ['Verified Psychologists', 'Video Consultations', 'Instant Booking', 'Prescription Support'],
      type: 'Healthcare Platform',
      rating: 4.6,
      icon: Video
    },
    {
      category: 'indian',
      name: 'Lybrate Psychologist',
      url: 'https://www.lybrate.com/psychologist',
      description: 'Connect with experienced psychologists for online counselling',
      features: ['Expert Psychologists', 'Chat Consultation', 'Medical Records', 'Follow-up Care'],
      type: 'Healthcare Platform',
      rating: 4.5,
      icon: MessageCircle
    },
    {
      category: 'indian',
      name: 'DocPrime',
      url: 'https://www.docprime.com',
      description: 'Online doctor consultations including mental health specialists',
      features: ['Online Doctors', 'Instant Consultation', 'Health Records', 'Affordable Care'],
      type: 'Healthcare Platform',
      rating: 4.4,
      icon: Phone
    },
    {
      category: 'indian',
      name: 'Tata Health',
      url: 'https://www.tatahealth.com',
      description: 'Comprehensive healthcare platform with mental health services',
      features: ['Video Consultation', 'Specialist Doctors', 'Health Packages', '24/7 Support'],
      type: 'Healthcare Platform',
      rating: 4.7,
      icon: Video
    },
    {
      category: 'indian',
      name: 'MFine',
      url: 'https://www.mfine.co',
      description: 'AI-powered healthcare platform with mental health specialists',
      features: ['AI Diagnosis', 'Specialist Consultation', 'Instant Care', 'Health Monitoring'],
      type: 'Healthcare Platform',
      rating: 4.5,
      icon: Phone
    },
    {
      category: 'indian',
      name: '1mg Doctor Consultation',
      url: 'https://www.1mg.com/online-doctor-consultation',
      description: 'Online doctor consultations with mental health specialists',
      features: ['Online Doctors', 'Lab Tests', 'Medicines', 'Health Records'],
      type: 'Healthcare Platform',
      rating: 4.6,
      icon: Video
    },
    {
      category: 'indian',
      name: 'Apollo 247',
      url: 'https://www.apollo247.com',
      description: 'Apollo Hospitals digital healthcare platform',
      features: ['Apollo Doctors', 'Video Consultation', 'Pharmacy', 'Lab Tests'],
      type: 'Healthcare Platform',
      rating: 4.8,
      icon: Video
    },
    {
      category: 'international',
      name: 'BetterHelp',
      url: 'https://www.betterhelp.com',
      description: 'World\'s largest online counselling platform',
      features: ['Licensed Therapists', 'Unlimited Sessions', 'Multiple Communication', 'Affordable Plans'],
      type: 'Online Therapy',
      rating: 4.8,
      icon: Users
    },
    {
      category: 'international',
      name: 'Talkspace',
      url: 'https://www.talkspace.com',
      description: 'Professional therapy and counselling services',
      features: ['Licensed Therapists', 'Text Therapy', 'Video Sessions', 'Psychiatry Services'],
      type: 'Online Therapy',
      rating: 4.7,
      icon: MessageCircle
    },
    {
      category: 'international',
      name: 'Doctor On Demand',
      url: 'https://www.doctorondemand.com',
      description: 'Video consultations with medical and mental health professionals',
      features: ['Video Visits', 'Urgent Care', 'Therapy', 'Psychiatry'],
      type: 'Telehealth',
      rating: 4.6,
      icon: Video
    },
    {
      category: 'international',
      name: 'Amwell',
      url: 'https://www.amwell.com',
      description: 'Comprehensive telehealth services including mental health',
      features: ['Video Visits', 'Board-Certified Doctors', 'Insurance Accepted', 'Prescription Services'],
      type: 'Telehealth',
      rating: 4.4,
      icon: Video
    },
    {
      category: 'international',
      name: 'Zocdoc',
      url: 'https://www.zocdoc.com',
      description: 'Find and book appointments with doctors and therapists',
      features: ['Appointment Booking', 'Reviews', 'Insurance Check', 'Video Visits'],
      type: 'Healthcare Booking',
      rating: 4.6,
      icon: Calendar
    },
    {
      category: 'indian',
      name: 'Cure.fit Mind',
      url: 'https://www.cure.fit/mind',
      description: 'Mental wellness and counselling services',
      features: ['Mental Wellness', 'Meditation', 'Therapy Sessions', 'Expert Guidance'],
      type: 'Wellness Platform',
      rating: 4.5,
      icon: Heart
    },
    {
      category: 'indian',
      name: 'Manastha',
      url: 'https://www.manastha.com',
      description: 'Mental health platform with counselling services',
      features: ['Online Counselling', 'Psychologists', 'Anonymous Support', 'Affordable Plans'],
      type: 'Mental Health Platform',
      rating: 4.4,
      icon: Users
    },
    {
      category: 'indian',
      name: 'Therapize India',
      url: 'https://www.therapizeindia.com',
      description: 'Online therapy and counselling platform for Indians',
      features: ['Indian Therapists', 'Cultural Understanding', 'Affordable Therapy', 'Multiple Languages'],
      type: 'Therapy Platform',
      rating: 4.6,
      icon: Heart
    },
    {
      category: 'indian',
      name: 'Vandrevala Foundation',
      url: 'https://www.vandrevalafoundation.com',
      description: 'Mental health support and counselling services',
      features: ['Free Helpline', 'Counselling Services', 'Crisis Support', 'Professional Help'],
      type: 'Mental Health Foundation',
      rating: 4.7,
      icon: Phone
    },
    {
      category: 'international',
      name: '7 Cups',
      url: 'https://www.7cups.com',
      description: 'Free emotional support and counselling from trained listeners',
      features: ['24/7 Support', 'Free Listeners', 'Anonymous Chat', 'Trained Volunteers'],
      type: 'Emotional Support',
      rating: 4.6,
      icon: Headphones
    },
    {
      category: 'international',
      name: 'Cerebral',
      url: 'https://www.cerebral.com',
      description: 'Online mental health care and medication management',
      features: ['Medication Management', 'Therapy', 'Care Coordination', 'Insurance Accepted'],
      rating: 4.5,
      icon: Users
    },
    {
      category: 'international',
      name: 'MDLive',
      url: 'https://www.mdlive.com',
      description: 'Virtual healthcare including mental health services',
      features: ['Virtual Visits', 'Mental Health', 'Prescriptions', '24/7 Access'],
      rating: 4.4,
      icon: Video
    },
    {
      category: 'international',
      name: 'Headspace',
      url: 'https://www.headspace.com',
      description: 'Meditation and mindfulness with therapy options',
      features: ['Meditation', 'Mindfulness', 'Coaching', 'Therapy Integration'],
      rating: 4.8,
      icon: Heart
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? counsellingResources 
    : counsellingResources.filter(resource => resource.category === selectedCategory);

  const handleBookSession = (platformName) => {
    setSelectedPlatform(platformName);
    setBookingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, platform: selectedPlatform });
    alert(`Counselling session request submitted for ${selectedPlatform}! We'll contact you soon.`);
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">One-to-One Counselling</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Connect with licensed counsellors and mental health professionals for personalized support
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <User className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">20+ Platforms</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Licensed Professionals</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">24/7 Availability</span>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Session
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
                ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg transform scale-105'
                : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Counselling
          </button>
          {counsellingCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg transform scale-105'
                    : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Counselling Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: isDarkMode ? '1rem' : undefined }}>
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            const categoryColor = counsellingCategories.find(c => c.id === resource.category)?.color || 'from-blue-500 to-blue-600';
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
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>
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
                          ? 'bg-gradient-to-r from-blue-700 to-green-700 text-white hover:from-blue-800 hover:to-green-800 shadow-lg' 
                          : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 shadow-lg'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Visit Platform</span>
                    </a>
                    <button
                      onClick={() => handleBookSession(resource.name)}
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800 shadow-lg' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                      }`}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Session</span>
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-${isDarkMode ? 'white/10' : 'white/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Emergency Support Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Emergency Mental Health Support
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              If you're in crisis or need immediate help, these resources are available 24/7
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="tel:988"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-red-900/50 text-red-300 hover:bg-red-900/70' : 'bg-red-50 text-red-700 hover:bg-red-100'
                }`}
              >
                <Phone className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">988 Suicide & Crisis Lifeline</div>
                <div className="text-sm">Call or Text 988</div>
              </a>
              <a
                href="https://www.vandrevalafoundation.com/helpline"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-900/70' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                <Headphones className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">Vandrevala Foundation</div>
                <div className="text-sm">1860-266-2345</div>
              </a>
              <a
                href="https://www.aasra.info"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-green-900/50 text-green-300 hover:bg-green-900/70' : 'bg-green-50 text-green-700 hover:bg-green-100'
                }`}
              >
                <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">Aasra Helpline</div>
                <div className="text-sm">91-22-27546669</div>
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
                  <div className={`w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center`}>
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Book Counselling Session
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
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
                      What brings you to counselling? (Optional)
                    </label>
                    <textarea
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                      placeholder="Briefly describe what you'd like to work on..."
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
                  className="flex-1 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Counselling Request
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

export default OneToOneCounselling;
