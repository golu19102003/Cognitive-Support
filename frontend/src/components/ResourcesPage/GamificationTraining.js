import React, { useState, useEffect } from 'react';
import { 
  Brain, Zap, Target, Award, Trophy, Star,
  ExternalLink, Gamepad2, BarChart, Clock,
  ChevronRight, CheckCircle, Activity, Shield
} from 'lucide-react';

const GamificationTraining = () => {
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

  const trainingCategories = [
    { id: 'brain-training', name: 'Brain Training', icon: Brain, color: 'from-purple-500 to-purple-600' },
    { id: 'cognitive', name: 'Cognitive Enhancement', icon: Target, color: 'from-blue-500 to-blue-600' },
    { id: 'educational', name: 'Educational Games', icon: Award, color: 'from-green-500 to-green-600' },
    { id: 'professional', name: 'Professional Training', icon: Shield, color: 'from-orange-500 to-orange-600' }
  ];

  const trainingResources = [
    {
      category: 'brain-training',
      name: 'Lumosity',
      url: 'https://www.lumosity.com',
      description: 'Scientific brain training games to improve cognitive functions',
      features: ['Memory Games', 'Problem Solving', 'Attention Training', 'Flexibility Exercises'],
      type: 'Brain Training Platform',
      rating: 4.6,
      icon: Brain
    },
    {
      category: 'cognitive',
      name: 'Elevate',
      url: 'https://www.elevateapp.com',
      description: 'Personalized brain training to improve focus, memory, and communication',
      features: ['Math Skills', 'Writing Skills', 'Speaking Skills', 'Memory Training'],
      type: 'Cognitive Training',
      rating: 4.7,
      icon: Target
    },
    {
      category: 'brain-training',
      name: 'Peak',
      url: 'https://www.peak.net',
      description: 'Fun and challenging brain games developed by neuroscientists',
      features: ['Problem Games', 'Memory Challenges', 'Language Skills', 'Mental Agility'],
      type: 'Brain Training',
      rating: 4.5,
      icon: Gamepad2
    },
    {
      category: 'cognitive',
      name: 'CogniFit',
      url: 'https://www.cognifit.com',
      description: 'Clinical brain training and cognitive assessment tools',
      features: ['Cognitive Assessment', 'Personalized Training', 'Progress Tracking', 'Clinical Validation'],
      type: 'Clinical Training',
      rating: 4.8,
      icon: Shield
    },
    {
      category: 'brain-training',
      name: 'BrainHQ',
      url: 'https://www.brainhq.com',
      description: 'Science-based brain exercises to improve memory and thinking',
      features: ['Memory Exercises', 'Brain Speed', 'Attention Skills', 'People Skills'],
      type: 'Brain Training',
      rating: 4.6,
      icon: Brain
    },
    {
      category: 'cognitive',
      name: 'NeuroNation',
      url: 'https://www.neuronation.com',
      description: 'Scientific brain training with personalized exercises',
      features: ['Personalized Training', 'Progress Tracking', 'Scientific Backing', 'Fun Exercises'],
      type: 'Brain Training',
      rating: 4.5,
      icon: Activity
    },
    {
      category: 'educational',
      name: 'Memorado',
      url: 'https://www.memorado.com',
      description: 'Fun brain training games to boost memory and concentration',
      features: ['Memory Games', 'Logic Puzzles', 'Concentration Training', 'Fun Challenges'],
      type: 'Educational Games',
      rating: 4.4,
      icon: Gamepad2
    },
    {
      category: 'educational',
      name: 'Fit Brains',
      url: 'https://www.fitbrains.com',
      description: 'Brain training games developed by neuroscientists',
      features: ['Brain Games', 'Cognitive Skills', 'Fun Challenges', 'Scientific Approach'],
      type: 'Educational Platform',
      rating: 4.3,
      icon: Award
    },
    {
      category: 'cognitive',
      name: 'HappyNeuron Pro',
      url: 'https://www.happyneuronpro.com',
      description: 'Professional brain training for cognitive rehabilitation',
      features: ['Rehabilitation', 'Professional Tools', 'Progress Tracking', 'Therapeutic Games'],
      type: 'Professional Training',
      rating: 4.7,
      icon: Shield
    },
    {
      category: 'educational',
      name: 'MentalUP',
      url: 'https://www.mentalup.co',
      description: 'Scientific brain training games for children and adults',
      features: ['Child Development', 'Adult Training', 'Scientific Games', 'Progress Reports'],
      type: 'Educational Platform',
      rating: 4.5,
      icon: Brain
    },
    {
      category: 'professional',
      name: 'Cogmed',
      url: 'https://www.cogmed.com',
      description: 'Evidence-based working memory training program',
      features: ['Working Memory', 'Attention Training', 'Scientific Backing', 'Professional Support'],
      type: 'Professional Training',
      rating: 4.6,
      icon: Shield
    },
    {
      category: 'cognitive',
      name: 'BrainScale',
      url: 'https://www.brainscale.net',
      description: 'Adaptive brain training with personalized difficulty',
      features: ['Adaptive Training', 'Personalized Difficulty', 'Progress Tracking', 'Cognitive Skills'],
      type: 'Brain Training',
      rating: 4.4,
      icon: BarChart
    },
    {
      category: 'cognitive',
      name: 'MyBrainSolutions',
      url: 'https://www.mybrainsolutions.com',
      description: 'Personalized brain training for stress and performance',
      features: ['Stress Management', 'Performance Training', 'Personalized Programs', 'Progress Tracking'],
      type: 'Cognitive Training',
      rating: 4.5,
      icon: Activity
    },
    {
      category: 'educational',
      name: 'PlayAttention',
      url: 'https://www.playattention.com',
      description: 'Attention training system for ADHD and focus improvement',
      features: ['ADHD Training', 'Focus Improvement', 'Attention System', 'Educational Support'],
      type: 'Educational Tool',
      rating: 4.6,
      icon: Target
    },
    {
      category: 'cognitive',
      name: 'BrainWellness Spa',
      url: 'https://www.brainwellnessspa.com',
      description: 'Holistic brain training and mental wellness programs',
      features: ['Holistic Approach', 'Mental Wellness', 'Brain Training', 'Stress Reduction'],
      type: 'Wellness Platform',
      rating: 4.4,
      icon: Brain
    },
    {
      category: 'professional',
      name: 'NeuroTracker',
      url: 'https://www.neurotracker.net',
      description: 'Advanced cognitive training for performance enhancement',
      features: ['Performance Enhancement', 'Cognitive Training', 'Athletic Performance', 'Professional Use'],
      type: 'Professional Training',
      rating: 4.7,
      icon: Trophy
    },
    {
      category: 'cognitive',
      name: 'BrainMetrix',
      url: 'https://www.brainmetrix.com',
      description: 'Free brain training games and cognitive exercises',
      features: ['Free Training', 'Brain Games', 'Cognitive Exercises', 'Memory Training'],
      type: 'Free Platform',
      rating: 4.3,
      icon: Gamepad2
    },
    {
      category: 'professional',
      name: 'LearningRx',
      url: 'https://www.learningrx.com',
      description: 'Personalized brain training and cognitive skills development',
      features: ['Personalized Training', 'Cognitive Skills', 'One-on-One', 'Professional Programs'],
      type: 'Professional Training',
      rating: 4.5,
      icon: Shield
    },
    {
      category: 'cognitive',
      name: 'Cognitive Training Data',
      url: 'https://www.cognitivetrainingdata.org',
      description: 'Research and data on cognitive training effectiveness',
      features: ['Research Data', 'Training Effectiveness', 'Scientific Studies', 'Evidence-Based'],
      type: 'Research Platform',
      rating: 4.6,
      icon: BarChart
    },
    {
      category: 'professional',
      name: 'Scientific Brain Training Pro',
      url: 'https://www.scientificbraintrainingpro.com',
      description: 'Professional-grade cognitive training and assessment tools',
      features: ['Professional Tools', 'Cognitive Assessment', 'Training Programs', 'Scientific Validation'],
      type: 'Professional Platform',
      rating: 4.7,
      icon: Shield
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? trainingResources 
    : trainingResources.filter(resource => resource.category === selectedCategory);

  const handleBookSession = (platformName) => {
    setSelectedPlatform(platformName);
    setBookingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, platform: selectedPlatform });
    alert(`Training session request submitted for ${selectedPlatform}! We'll contact you soon.`);
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Gamepad2 className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">Gamification Cognitive Training</h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Enhance cognitive abilities through engaging, scientifically-designed brain training games and exercises
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Brain className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">20+ Platforms</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Scientific Backing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Trophy className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Achievement System</span>
              </div>
            </div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Training
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
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Training
          </button>
          {trainingCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                    : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Training Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: isDarkMode ? '1rem' : undefined }}>
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            const categoryColor = trainingCategories.find(c => c.id === resource.category)?.color || 'from-purple-500 to-purple-600';
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
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:${isDarkMode ? 'text-purple-400' : 'text-purple-600'} transition-colors duration-300`}>
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
                          ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800 shadow-lg' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Start Training</span>
                    </a>
                    <button
                      onClick={() => handleBookSession(resource.name)}
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-green-700 to-emerald-700 text-white hover:from-green-800 hover:to-emerald-800 shadow-lg' 
                          : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg'
                      }`}
                    >
                      <Target className="h-4 w-4" />
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

        {/* Training Benefits Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Cognitive Training Benefits
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Scientifically-proven benefits of regular cognitive training
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-700'
              }`}>
                <Brain className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Memory Improvement</div>
                <div className="text-sm">Enhanced recall and retention</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-50 text-green-700'
              }`}>
                <Target className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Better Focus</div>
                <div className="text-sm">Improved attention and concentration</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-700'
              }`}>
                <Zap className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Faster Processing</div>
                <div className="text-sm">Quick thinking and problem solving</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-50 text-orange-700'
              }`}>
                <Trophy className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Achievement</div>
                <div className="text-sm">Track progress and earn rewards</div>
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
                  <div className={`w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center`}>
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Book Training Session
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
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
                      What training goals do you have? (Optional)
                    </label>
                    <textarea
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                      }`}
                      placeholder="Briefly describe your cognitive training goals..."
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
                        <span className="font-semibold text-red-600">Urgent Training Request</span>
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
                  className="flex-1 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Training Request
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

export default GamificationTraining;
