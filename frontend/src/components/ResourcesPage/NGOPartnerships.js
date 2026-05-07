import React, { useState, useEffect } from 'react';
import { 
  Heart, Globe, Users, Shield, Award, Star,
  ExternalLink, Target, CheckCircle, ChevronRight,
  Heart as HandHeart, TreePine, Baby, School
} from 'lucide-react';

const NGOPartnerships = () => {
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

  const ngoCategories = [
    { id: 'disability', name: 'Disability Support', icon: Shield, color: 'from-blue-500 to-blue-600' },
    { id: 'education', name: 'Education', icon: School, color: 'from-green-500 to-green-600' },
    { id: 'health', name: 'Healthcare', icon: Heart, color: 'from-red-500 to-red-600' },
    { id: 'social', name: 'Social Welfare', icon: Users, color: 'from-purple-500 to-purple-600' }
  ];

  const ngoResources = [
    {
      category: 'disability',
      name: 'NCPEDP',
      url: 'https://www.ncpedp.org',
      description: 'National Centre for Promotion of Employment for Disabled People',
      features: ['Disability Rights', 'Employment Support', 'Policy Advocacy', 'Accessibility'],
      type: 'Dis Rights Organization',
      rating: 4.8,
      icon: Shield
    },
    {
      category: 'disability',
      name: 'Enable India',
      url: 'https://www.enableindia.org',
      description: 'Empowering persons with disabilities through employment',
      features: ['Job Training', 'Placement Services', 'Skill Development', 'Corporate Partnerships'],
      type: 'Employment NGO',
      rating: 4.7,
      icon: Target
    },
    {
      category: 'social',
      name: 'ActionAid India',
      url: 'https://www.actionaidindia.org',
      description: 'Fighting poverty and social injustice',
      features: ['Poverty Alleviation', 'Women\'s Rights', 'Education', 'Healthcare'],
      type: 'Social Justice NGO',
      rating: 4.6,
      icon: Heart
    },
    {
      category: 'health',
      name: 'Sightsavers India',
      url: 'https://www.sightsaversindia.org',
      description: 'Preventing avoidable blindness and promoting eye health',
      features: ['Eye Health', 'Blindness Prevention', 'Vision Screening', 'Health Camps'],
      type: 'Healthcare NGO',
      rating: 4.8,
      icon: Heart
    },
    {
      category: 'social',
      name: 'HelpAge India',
      url: 'https://www.helpageindia.org',
      description: 'Working for the welfare of elderly people',
      features: ['Elder Care', 'Health Services', 'Income Support', 'Advocacy'],
      type: 'Senior Care NGO',
      rating: 4.7,
      icon: Users
    },
    {
      category: 'social',
      name: 'GiveIndia',
      url: 'https://www.giveindia.org',
      description: 'Online donation platform for verified NGOs',
      features: ['Online Donations', 'NGO Verification', 'Transparency', 'Impact Tracking'],
      type: 'Donation Platform',
      rating: 4.9,
      icon: HandHeart
    },
    {
      category: 'education',
      name: 'CRY',
      url: 'https://www.cry.org',
      description: 'Child Rights and You - protecting child rights',
      features: ['Child Rights', 'Education', 'Healthcare', 'Protection'],
      type: 'Child Rights NGO',
      rating: 4.8,
      icon: Baby
    },
    {
      category: 'education',
      name: 'Pratham',
      url: 'https://www.pratham.org',
      description: 'Improving quality of education in India',
      features: ['Education Quality', 'Literacy Programs', 'Learning Assessment', 'Teacher Training'],
      type: 'Education NGO',
      rating: 4.7,
      icon: School
    },
    {
      category: 'social',
      name: 'Smile Foundation',
      url: 'https://www.smilefoundationindia.org',
      description: 'Empowering underprivileged children and youth',
      features: ['Education', 'Healthcare', 'Livelihood', 'Women Empowerment'],
      type: 'Development NGO',
      rating: 4.6,
      icon: Heart
    },
    {
      category: 'education',
      name: 'Akshaya Patra',
      url: 'https://www.akshayapatra.org',
      description: 'Mid-day meal program for school children',
      features: ['School Meals', 'Nutrition', 'Education Support', 'Kitchen Infrastructure'],
      type: 'Food Security NGO',
      rating: 4.9,
      icon: Heart
    },
    {
      category: 'social',
      name: 'Vandrevala Foundation',
      url: 'https://www.vandrevalafoundation.com',
      description: 'Mental health support and awareness',
      features: ['Mental Health', 'Crisis Support', 'Awareness Programs', 'Helpline'],
      type: 'Mental Health NGO',
      rating: 4.7,
      icon: Shield
    },
    {
      category: 'social',
      name: 'AIF',
      url: 'https://www.aif.org',
      description: 'American India Foundation - building bridges between US and India',
      features: ['Education', 'Livelihood', 'Public Health', 'Disaster Relief'],
      type: 'Development Foundation',
      rating: 4.6,
      icon: Globe
    },
    {
      category: 'social',
      name: 'Oxfam India',
      url: 'https://www.oxfamindia.org',
      description: 'Fighting inequality and injustice',
      features: ['Inequality', 'Gender Justice', 'Humanitarian Response', 'Economic Justice'],
      type: 'Social Justice NGO',
      rating: 4.5,
      icon: Heart
    },
    {
      category: 'social',
      name: 'CARE India',
      url: 'https://www.careindia.org',
      description: 'Fighting poverty and empowering women and girls',
      features: ['Women Empowerment', 'Education', 'Healthcare', 'Disaster Response'],
      type: 'Development NGO',
      rating: 4.6,
      icon: Users
    },
    {
      category: 'social',
      name: 'Childline India',
      url: 'https://www.childlineindia.org.in',
      description: '24-hour emergency phone service for children',
      features: ['Child Protection', 'Emergency Response', 'Counseling', 'Rescue Services'],
      type: 'Child Protection NGO',
      rating: 4.8,
      icon: Baby
    },
    {
      category: 'social',
      name: 'SOS Children\'s Villages',
      url: 'https://www.soschildrensvillages.in',
      description: 'Family-based care for orphaned and abandoned children',
      features: ['Family Care', 'Education', 'Healthcare', 'Child Development'],
      type: 'Child Welfare NGO',
      rating: 4.7,
      icon: Heart
    },
    {
      category: 'social',
      name: 'Billion Acts',
      url: 'https://www.billionacts.org',
      description: 'Global platform for social change initiatives',
      features: ['Social Change', 'Community Service', 'Volunteer Opportunities', 'Impact Tracking'],
      type: 'Social Platform',
      rating: 4.4,
      icon: Target
    },
    {
      category: 'social',
      name: 'GlobalGiving',
      url: 'https://www.globalgiving.org',
      description: 'Online fundraising platform for NGOs worldwide',
      features: ['Fundraising', 'NGO Support', 'Corporate Partnerships', 'Disaster Relief'],
      type: 'Fundraising Platform',
      rating: 4.8,
      icon: HandHeart
    },
    {
      category: 'health',
      name: 'Charity: Water',
      url: 'https://www.charitywater.org',
      description: 'Bringing clean and safe drinking water to people',
      features: ['Clean Water', 'Water Projects', 'Sanitation', 'Hygiene Education'],
      type: 'Water Charity',
      rating: 4.9,
      icon: Heart
    },
    {
      category: 'health',
      name: 'Doctors Without Borders',
      url: 'https://www.doctorswithoutborders.org',
      description: 'Medical humanitarian assistance in crisis zones',
      features: ['Emergency Medical Care', 'Crisis Response', 'Vaccination', 'Healthcare Access'],
      type: 'Medical NGO',
      rating: 4.8,
      icon: Shield
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? ngoResources 
    : ngoResources.filter(resource => resource.category === selectedCategory);

  const handleBookSession = (platformName) => {
    setSelectedPlatform(platformName);
    setBookingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, platform: selectedPlatform });
    alert(`Partnership session request submitted for ${selectedPlatform}! We'll contact you soon.`);
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <HandHeart className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">NGO Partnerships</h1>
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Connect with trusted NGOs and non-profit organizations for social impact and community development
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">20+ Partners</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Verified NGOs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Social Impact</span>
              </div>
            </div>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Partner with Us
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
                ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg transform scale-105'
                : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All NGOs
          </button>
          {ngoCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg transform scale-105'
                    : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* NGO Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: isDarkMode ? '1rem' : undefined }}>
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            const categoryColor = ngoCategories.find(c => c.id === resource.category)?.color || 'from-green-500 to-green-600';
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
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:${isDarkMode ? 'text-green-400' : 'text-green-600'} transition-colors duration-300`}>
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
                          ? 'bg-gradient-to-r from-green-700 to-teal-700 text-white hover:from-green-800 hover:to-teal-800 shadow-lg' 
                          : 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 shadow-lg'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Learn More</span>
                    </a>
                    <button
                      onClick={() => handleBookSession(resource.name)}
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800 shadow-lg' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                      }`}
                    >
                      <HandHeart className="h-4 w-4" />
                      <span>Partner</span>
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-${isDarkMode ? 'white/10' : 'white/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Partnership Opportunities Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Partnership Opportunities
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Collaborate with NGOs for meaningful social impact
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-700'
              }`}>
                <Target className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Corporate Partnerships</div>
                <div className="text-sm mb-2">CSR collaborations</div>
                <div className="text-xs">Employee volunteering, funding</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-50 text-green-700'
              }`}>
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Volunteer Programs</div>
                <div className="text-sm mb-2">Community engagement</div>
                <div className="text-xs">Skill-based volunteering, mentoring</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-700'
              }`}>
                <Heart className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Fundraising Support</div>
                <div className="text-sm mb-2">Resource mobilization</div>
                <div className="text-xs">Campaigns, events, donations</div>
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
                  <div className={`w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center`}>
                    <HandHeart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Partner with NGO
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Organization: {selectedPlatform}
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20'
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
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20'
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
                      How would you like to contribute? (Optional)
                    </label>
                    <textarea
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20'
                      }`}
                      placeholder="Briefly describe how you'd like to contribute..."
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
                        <span className="font-semibold text-red-600">Urgent Partnership Request</span>
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
                  className="flex-1 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Partnership Request
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

export default NGOPartnerships;
