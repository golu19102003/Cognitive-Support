import React, { useState, useEffect } from 'react';
import { 
  Users, Globe, Heart, MessageCircle, Star, Award,
  ExternalLink, CheckCircle, ChevronRight, Shield,
  Calendar, Activity, Video, HelpCircle
} from 'lucide-react';

const CommunitySupportNetwork = () => {
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
    { id: 'social', name: 'Social Platforms', icon: Globe, color: 'from-blue-500 to-blue-600' },
    { id: 'health', name: 'Health Communities', icon: Heart, color: 'from-green-500 to-green-600' },
    { id: 'support', name: 'Support Groups', icon: Users, color: 'from-purple-500 to-purple-600' },
    { id: 'professional', name: 'Professional', icon: Award, color: 'from-orange-500 to-orange-600' }
  ];

  const supportResources = [
    {
      category: 'social',
      name: 'Meetup',
      url: 'https://www.meetup.com',
      description: 'Find local groups and events for community connection',
      features: ['Local Groups', 'In-Person Events', 'Community Building', 'Interest-Based'],
      type: 'Community Platform',
      rating: 4.7,
      icon: Calendar
    },
    {
      category: 'health',
      name: 'Inspire',
      url: 'https://www.inspire.com',
      description: 'Health condition-specific support communities',
      features: ['Health Support', 'Patient Stories', 'Expert Moderation', 'Privacy Protection'],
      type: 'Health Community',
      rating: 4.8,
      icon: Heart
    },
    {
      category: 'support',
      name: 'Supportiv',
      url: 'https://www.supportiv.com',
      description: 'Real-time anonymous support groups for various challenges',
      features: ['Anonymous Support', 'Real-time Chat', 'Topic-Based Rooms', 'Moderated Groups'],
      type: 'Support Platform',
      rating: 4.6,
      icon: MessageCircle
    },
    {
      category: 'social',
      name: 'Facebook Groups',
      url: 'https://www.facebook.com/groups',
      description: 'Connect with communities through Facebook groups',
      features: ['Community Groups', 'Discussion Forums', 'Event Planning', 'Member Interaction'],
      type: 'Social Platform',
      rating: 4.5,
      icon: Users
    },
    {
      category: 'social',
      name: 'Reddit',
      url: 'https://www.reddit.com',
      description: 'Online communities for discussion and support',
      features: ['Subreddit Communities', 'Discussion Threads', 'Upvoting System', 'Moderation'],
      type: 'Social Platform',
      rating: 4.6,
      icon: MessageCircle
    },
    {
      category: 'professional',
      name: 'Discord',
      url: 'https://www.discord.com',
      description: 'Voice, video, and text communication platform',
      features: ['Voice Chat', 'Video Calls', 'Text Channels', 'Community Servers'],
      type: 'Communication Platform',
      rating: 4.7,
      icon: Video
    },
    {
      category: 'professional',
      name: 'Slack',
      url: 'https://www.slack.com',
      description: 'Business communication and collaboration platform',
      features: ['Team Communication', 'File Sharing', 'Integration', 'Workspace Organization'],
      type: 'Business Platform',
      rating: 4.6,
      icon: MessageCircle
    },
    {
      category: 'health',
      name: 'HealthUnlocked',
      url: 'https://www.healthunlocked.com',
      description: 'Social network for health with patient support communities',
      features: ['Health Communities', 'Patient Support', 'Expert Advice', 'Health Tracking'],
      type: 'Health Social Network',
      rating: 4.5,
      icon: Activity
    },
    {
      category: 'health',
      name: 'CaringBridge',
      url: 'https://www.caringbridge.org',
      description: 'Free personal health journal for patients and caregivers',
      features: ['Health Journal', 'Patient Updates', 'Caregiver Support', 'Privacy Protection'],
      type: 'Health Platform',
      rating: 4.8,
      icon: Heart
    },
    {
      category: 'health',
      name: 'PatientsLikeMe',
      url: 'https://www.patientslikeme.com',
      description: 'Patient network and real-time health data sharing',
      features: ['Patient Network', 'Health Data', 'Treatment Reviews', 'Community Support'],
      type: 'Patient Network',
      rating: 4.6,
      icon: Users
    },
    {
      category: 'support',
      name: '7 Cups',
      url: 'https://www.7cups.com',
      description: 'Free emotional support and counseling from trained listeners',
      features: ['24/7 Support', 'Trained Listeners', 'Anonymous Chat', 'Free Service'],
      type: 'Emotional Support',
      rating: 4.7,
      icon: HelpCircle
    },
    {
      category: 'health',
      name: 'DailyStrength',
      url: 'https://www.dailystrength.org',
      description: 'Online support groups for various health conditions',
      features: ['Support Groups', 'Health Forums', 'Personal Stories', 'Wellness Tools'],
      type: 'Health Support',
      rating: 4.4,
      icon: Heart
    },
    {
      category: 'health',
      name: 'SmartPatients',
      url: 'https://www.smartpatients.com',
      description: 'Online community for patients and caregivers',
      features: ['Patient Community', 'Medical Discussions', 'Expert Participation', 'Research Updates'],
      type: 'Patient Community',
      rating: 4.6,
      icon: Users
    },
    {
      category: 'health',
      name: 'HealingWell',
      url: 'https://www.healingwell.com',
      description: 'Health forums and support for various conditions',
      features: ['Health Support', 'Disease Forums', 'Patient Stories', 'Wellness Resources'],
      type: 'Health Community',
      rating: 4.5,
      icon: Activity
    },
    {
      category: 'health',
      name: 'MyHealthTeams',
      url: 'https://www.myhealthteams.com',
      description: 'Social network for chronic condition support',
      features: ['Chronic Condition Support', 'Community Connection', 'Health Resources', 'Peer Support'],
      type: 'Health Network',
      rating: 4.6,
      icon: Heart
    },
    {
      category: 'support',
      name: 'SupportGroups.com',
      url: 'https://www.supportgroups.com',
      description: 'Online support groups for various life challenges',
      features: ['Support Groups', 'Anonymous Posting', 'Moderation', 'Community Help'],
      type: 'Support Platform',
      rating: 4.4,
      icon: Users
    },
    {
      category: 'health',
      name: 'WeConnectRecovery',
      url: 'https://www.weconnectrecovery.com',
      description: 'Peer support network for mental health recovery',
      features: ['Recovery Support', 'Peer Connection', 'Mental Health', 'Community Resources'],
      type: 'Recovery Network',
      rating: 4.7,
      icon: Shield
    },
    {
      category: 'support',
      name: 'Mental Health Forum',
      url: 'https://www.mentalhealthforum.net',
      description: 'Discussion forum for mental health issues',
      features: ['Mental Health', 'Support Discussions', 'Recovery Support', 'Professional Input'],
      type: 'Mental Health Forum',
      rating: 4.6,
      icon: HelpCircle
    },
    {
      category: 'support',
      name: 'Rethink Mental Illness',
      url: 'https://www.rethink.org',
      description: 'UK mental health charity support services',
      features: ['Mental Health Support', 'Recovery Services', 'Carer Support', 'Helpline'],
      type: 'Mental Health Charity',
      rating: 4.7,
      icon: Shield
    },
    {
      category: 'support',
      name: 'SANE',
      url: 'https://www.sane.org',
      description: 'Mental health support and information services',
      features: ['Support Forums', 'Helpline', 'Information Resources', 'Campaigns'],
      type: 'Mental Health Charity',
      rating: 4.6,
      icon: Heart
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
    alert(`Support network session request submitted for ${selectedPlatform}! We'll contact you soon.`);
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
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">Community Support Network</h1>
            </div>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Connect with supportive communities, find peer support, and build meaningful connections
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">20+ Communities</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Peer Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Safe Spaces</span>
              </div>
            </div>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Community
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
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg transform scale-105'
                : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Networks
          </button>
          {supportCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg transform scale-105'
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
            const categoryColor = supportCategories.find(c => c.id === resource.category)?.color || 'from-teal-500 to-teal-600';
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
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:${isDarkMode ? 'text-teal-400' : 'text-teal-600'} transition-colors duration-300`}>
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
                          ? 'bg-gradient-to-r from-teal-700 to-cyan-700 text-white hover:from-teal-800 hover:to-cyan-800 shadow-lg' 
                          : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700 shadow-lg'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Join Network</span>
                    </a>
                    <button
                      onClick={() => handleBookSession(resource.name)}
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800 shadow-lg' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                      }`}
                    >
                      <Users className="h-4 w-4" />
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

        {/* Community Guidelines Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Community Guidelines
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Building safe and supportive online communities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-700'
              }`}>
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Stay Safe</div>
                <div className="text-sm mb-2">Protect your privacy</div>
                <div className="text-xs">Anonymous posting, personal info protection</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-50 text-green-700'
              }`}>
                <Heart className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Be Supportive</div>
                <div className="text-sm mb-2">Empathetic interactions</div>
                <div className="text-xs">Kind communication, active listening</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-700'
              }`}>
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Build Connections</div>
                <div className="text-sm mb-2">Meaningful relationships</div>
                <div className="text-xs">Shared experiences, mutual support</div>
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
                  <div className={`w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center`}>
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Join Support Network
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
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
                          ? 'bg-gray-800 border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
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
                        <span className="font-semibold text-red-600">Urgent Support Request</span>
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
                  className="flex-1 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
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

export default CommunitySupportNetwork;
