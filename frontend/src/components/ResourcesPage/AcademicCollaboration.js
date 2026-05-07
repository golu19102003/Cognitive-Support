import React, { useState, useEffect } from 'react';
import { 
  Globe, Users, BookOpen, Award, GraduationCap, Star,
  ExternalLink, Building, Search, Target, CheckCircle,
  ChevronRight, Brain, FileText, Network
} from 'lucide-react';

const AcademicCollaboration = () => {
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

  const collaborationCategories = [
    { id: 'organizations', name: 'Organizations', icon: Globe, color: 'from-blue-500 to-blue-600' },
    { id: 'research', name: 'Research Networks', icon: Search, color: 'from-green-500 to-green-600' },
    { id: 'publishers', name: 'Publishers', icon: BookOpen, color: 'from-purple-500 to-purple-600' },
    { id: 'databases', name: 'Databases', icon: FileText, color: 'from-orange-500 to-orange-600' }
  ];

  const collaborationResources = [
    {
      category: 'organizations',
      name: 'UNESCO',
      url: 'https://www.unesco.org',
      description: 'United Nations Educational, Scientific and Cultural Organization',
      features: ['Global Education', 'Cultural Heritage', 'Scientific Cooperation', 'Development Goals'],
      type: 'International Organization',
      rating: 4.9,
      icon: Globe
    },
    {
      category: 'organizations',
      name: 'UNICEF Education',
      url: 'https://www.unicef.org/education',
      description: 'United Nations Children\'s Fund education programs',
      features: ['Child Education', 'Quality Learning', 'Inclusive Education', 'Global Programs'],
      type: 'UN Agency',
      rating: 4.8,
      icon: Users
    },
    {
      category: 'organizations',
      name: 'COL',
      url: 'https://www.col.org',
      description: 'Commonwealth of Learning for distance education',
      features: ['Distance Learning', 'Open Education', 'Capacity Building', 'Technology Enhanced Learning'],
      type: 'Educational Organization',
      rating: 4.7,
      icon: BookOpen
    },
    {
      category: 'organizations',
      name: 'EDUCAUSE',
      url: 'https://www.educause.edu',
      description: 'Higher education IT association and resources',
      features: ['Higher Ed IT', 'Digital Transformation', 'Professional Development', 'Research'],
      type: 'Professional Association',
      rating: 4.6,
      icon: Target
    },
    {
      category: 'organizations',
      name: 'OECD Education',
      url: 'https://www.oecd.org/education',
      description: 'Organisation for Economic Co-operation and Development',
      features: ['Education Policy', 'International Assessment', 'Research Data', 'Country Comparisons'],
      type: 'International Organization',
      rating: 4.8,
      icon: Globe
    },
    {
      category: 'organizations',
      name: 'World Bank Education',
      url: 'https://www.worldbank.org/en/topic/education',
      description: 'World Bank education sector and development programs',
      features: ['Education Development', 'Research', 'Policy Support', 'Funding Programs'],
      type: 'International Bank',
      rating: 4.7,
      icon: Target
    },
    {
      category: 'organizations',
      name: 'British Council Education',
      url: 'https://www.britishcouncil.org/education',
      description: 'UK international cultural and educational opportunities',
      features: ['International Education', 'English Learning', 'Cultural Exchange', 'Exams & Qualifications'],
      type: 'Cultural Organization',
      rating: 4.6,
      icon: Users
    },
    {
      category: 'databases',
      name: 'ERIC',
      url: 'https://www.eric.ed.gov',
      description: 'Education Resources Information Center database',
      features: ['Education Research', 'Journal Articles', 'Reports', 'Conference Papers'],
      type: 'Research Database',
      rating: 4.8,
      icon: FileText
    },
    {
      category: 'research',
      name: 'ResearchGate',
      url: 'https://www.researchgate.net',
      description: 'Professional network for scientists and researchers',
      features: ['Research Sharing', 'Collaboration', 'Q&A', 'Publication Tracking'],
      type: 'Research Network',
      rating: 4.7,
      icon: Network
    },
    {
      category: 'research',
      name: 'Academia.edu',
      url: 'https://www.academia.edu',
      description: 'Platform for academics to share research papers',
      features: ['Paper Sharing', 'Analytics', 'Collaboration', 'Research Discovery'],
      type: 'Academic Platform',
      rating: 4.6,
      icon: Research
    },
    {
      category: 'publishers',
      name: 'Springer',
      url: 'https://www.springer.com',
      description: 'Scientific publisher of books and journals',
      features: ['Scientific Publishing', 'Journals', 'Books', 'Open Access'],
      type: 'Academic Publisher',
      rating: 4.8,
      icon: BookOpen
    },
    {
      category: 'publishers',
      name: 'Elsevier',
      url: 'https://www.elsevier.com',
      description: 'Information analytics company specializing in science and health',
      features: ['Scientific Publishing', 'Analytics', 'Research Tools', 'Clinical Solutions'],
      type: 'Publishing Company',
      rating: 4.7,
      icon: BookOpen
    },
    {
      category: 'databases',
      name: 'IEEE Xplore',
      url: 'https://ieeexplore.ieee.org',
      description: 'Digital library providing access to technical literature',
      features: ['Technical Literature', 'Conference Papers', 'Standards', 'Journals'],
      type: 'Technical Database',
      rating: 4.9,
      icon: FileText
    },
    {
      category: 'databases',
      name: 'ACM Digital Library',
      url: 'https://dl.acm.org',
      description: 'Association for Computing Machinery digital library',
      features: ['Computer Science', 'Conference Proceedings', 'Journals', 'Special Interest Groups'],
      type: 'CS Database',
      rating: 4.8,
      icon: Brain
    },
    {
      category: 'publishers',
      name: 'Taylor & Francis',
      url: 'https://www.tandfonline.com',
      description: 'Academic publisher of journals and books',
      features: ['Academic Journals', 'Books', 'Open Access', 'Subject Areas'],
      type: 'Academic Publisher',
      rating: 4.6,
      icon: BookOpen
    },
    {
      category: 'databases',
      name: 'JSTOR',
      url: 'https://www.jstor.org',
      description: 'Digital library of academic journals, books, and primary sources',
      features: ['Academic Journals', 'Books', 'Primary Sources', 'Archives'],
      type: 'Digital Library',
      rating: 4.7,
      icon: FileText
    },
    {
      category: 'databases',
      name: 'Google Scholar',
      url: 'https://scholar.google.com',
      description: 'Search engine for scholarly literature',
      features: ['Literature Search', 'Citation Tracking', 'Author Profiles', 'Library Links'],
      type: 'Search Engine',
      rating: 4.8,
      icon: Research
    },
    {
      category: 'publishers',
      name: 'Nature',
      url: 'https://www.nature.com',
      description: 'International weekly journal of science',
      features: ['Scientific Journal', 'Research Articles', 'News & Views', 'Career Advice'],
      type: 'Scientific Journal',
      rating: 4.9,
      icon: BookOpen
    },
    {
      category: 'publishers',
      name: 'ScienceDirect',
      url: 'https://www.sciencedirect.com',
      description: 'Elsevier\'s platform for scientific and medical research',
      features: ['Scientific Articles', 'Journals', 'Books', 'Open Access'],
      type: 'Research Platform',
      rating: 4.7,
      icon: Research
    },
    {
      category: 'publishers',
      name: 'Frontiers',
      url: 'https://www.frontiersin.org',
      description: 'Open-access publisher of scientific journals',
      features: ['Open Access', 'Peer Review', 'Research Articles', 'Collaborative Publishing'],
      type: 'Open Access Publisher',
      rating: 4.6,
      icon: BookOpen
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? collaborationResources 
    : collaborationResources.filter(resource => resource.category === selectedCategory);

  const handleBookSession = (platformName) => {
    setSelectedPlatform(platformName);
    setBookingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, platform: selectedPlatform });
    alert(`Collaboration session request submitted for ${selectedPlatform}! We'll contact you soon.`);
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
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">Academic Collaboration Network</h1>
            </div>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Connect with global academic institutions, research networks, and scholarly resources
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">20+ Networks</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Research className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Research Access</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Scholarly Resources</span>
              </div>
            </div>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Network
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
                ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg transform scale-105'
                : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Networks
          </button>
          {collaborationCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Collaboration Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: isDarkMode ? '1rem' : undefined }}>
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            const categoryColor = collaborationCategories.find(c => c.id === resource.category)?.color || 'from-teal-500 to-teal-600';
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
                          ? 'bg-gradient-to-r from-teal-700 to-blue-700 text-white hover:from-teal-800 hover:to-blue-800 shadow-lg' 
                          : 'bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:from-teal-700 hover:to-blue-700 shadow-lg'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Explore Network</span>
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
                      <span>Join Network</span>
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-${isDarkMode ? 'white/10' : 'white/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Research Opportunities Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Research Collaboration Opportunities
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Connect with researchers and institutions for collaborative projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-700'
              }`}>
                <Research className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Joint Research</div>
                <div className="text-sm mb-2">Collaborative research projects</div>
                <div className="text-xs">ResearchGate, Academia.edu</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-50 text-green-700'
              }`}>
                <BookOpen className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Publication Support</div>
                <div className="text-sm mb-2">Journal publishing assistance</div>
                <div className="text-xs">Springer, Elsevier, Nature</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-700'
              }`}>
                <Globe className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Global Programs</div>
                <div className="text-sm mb-2">International collaborations</div>
                <div className="text-xs">UNESCO, World Bank, OECD</div>
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
                  <div className={`w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center`}>
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Join Academic Network
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
                      What collaboration interests you? (Optional)
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
                      placeholder="Briefly describe your collaboration interests..."
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
                        <span className="font-semibold text-red-600">Urgent Collaboration Request</span>
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
                  className="flex-1 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Collaboration Request
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

export default AcademicCollaboration;
