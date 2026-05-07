import React, { useState, useEffect } from 'react';
import { 
  Play, Youtube, BookOpen, Award, Clock, Star,
  ExternalLink, Monitor, Headphones, Code, Globe,
  ChevronRight, CheckCircle, Video, Users
} from 'lucide-react';

const VideoTutorials = () => {
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

  const tutorialCategories = [
    { id: 'accessibility', name: 'Accessibility', icon: Users, color: 'from-blue-500 to-blue-600' },
    { id: 'development', name: 'Development', icon: Code, color: 'from-green-500 to-green-600' },
  ];

  const videoResources = [
    {
      category: 'tools',
      name: 'Google Accessibility',
      url: 'https://support.google.com/accessibility',
      description: 'Google\'s accessibility features and tools for their products',
      features: ['Screen Reader Support', 'Keyboard Navigation', 'Voice Control', 'High Contrast'],
      type: 'Tech Company',
      rating: 4.8,
      icon: Monitor
    },
    {
      category: 'tools',
      name: 'Microsoft Accessibility',
      url: 'https://www.microsoft.com/en-us/accessibility',
      description: 'Microsoft accessibility features for Windows and Office',
      features: ['Windows Accessibility', 'Office Tools', 'Xbox Accessibility', 'Learning Resources'],
      type: 'Tech Company',
      rating: 4.7,
      icon: Monitor
    },
    {
      category: 'tools',
      name: 'Apple Support (Accessibility)',
      url: 'https://www.apple.com/accessibility',
      description: 'Apple\'s accessibility features for iOS and macOS',
      features: ['VoiceOver', 'Zoom', 'Siri', 'Switch Control'],
      type: 'Tech Company',
      rating: 4.9,
      icon: Monitor
    },
    {
      category: 'standards',
      name: 'W3C Web Accessibility',
      url: 'https://www.w3.org/WAI/tutorials',
      description: 'W3C Web Accessibility Initiative tutorials and guidelines',
      features: ['WCAG Guidelines', 'ARIA Authoring', 'Testing Tools', 'Best Practices'],
      type: 'Standards',
      rating: 4.9,
      icon: BookOpen
    },
    {
      category: 'learning',
      name: 'Deque University',
      url: 'https://dequeuniversity.com',
      description: 'Professional accessibility training and certification',
      features: ['Expert Instructors', 'Industry Certifications', 'Hands-on Projects', 'Community Support'],
      type: 'Training Platform',
      rating: 4.8,
      icon: Award
    },
    {
      category: 'learning',
      name: 'WebAIM',
      url: 'https://webaim.org',
      description: 'Web accessibility resources and evaluation tools',
      features: ['WAVE Tool', 'Training Courses', 'Guidelines', 'Consulting Services'],
      type: 'Resource Hub',
      rating: 4.7,
      icon: BookOpen
    },
    {
      category: 'learning',
      name: 'Udemy Accessibility',
      url: 'https://www.udemy.com/topic/web-accessibility',
      description: 'Online courses on web accessibility and inclusive design',
      features: ['Video Courses', 'Hands-on Projects', 'Certificates', 'Lifetime Access'],
      type: 'Learning Platform',
      rating: 4.6,
      icon: BookOpen
    },
    {
      category: 'learning',
      name: 'Coursera Accessibility',
      url: 'https://www.coursera.org/search?query=web+accessibility',
      description: 'University-level accessibility courses and specializations',
      features: ['University Courses', 'Specializations', 'Certificates', 'Flexible Learning'],
      type: 'Learning Platform',
      rating: 4.8,
      icon: Award
    },
    {
      category: 'learning',
      name: 'edX Accessibility',
      url: 'https://www.edx.org/search?q=accessibility',
      description: 'Free and paid accessibility courses from top institutions',
      features: ['Free Courses', 'Verified Certificates', 'University Partners', 'Self-Paced'],
      type: 'Learning Platform',
      rating: 4.7,
      icon: BookOpen
    },
    {
      category: 'learning',
      name: 'LinkedIn Learning',
      url: 'https://www.linkedin.com/learning/topics/accessibility',
      description: 'Professional accessibility courses and skill development',
      features: ['Professional Courses', 'Skill Assessments', 'Certificates', 'Expert Instructors'],
      type: 'Learning Platform',
      rating: 4.6,
      icon: Award
    },
    {
      category: 'learning',
      name: 'Skillshare Accessibility',
      url: 'https://www.skillshare.com/en/browse/accessibility',
      description: 'Creative accessibility courses and tutorials',
      features: ['Video Classes', 'Project Files', 'Community', 'Skill Building'],
      type: 'Creative Platform',
      rating: 4.5,
      icon: Video
    },
    {
      category: 'youtube',
      name: 'FreeCodeCamp',
      url: 'https://www.youtube.com/@freecodecamp',
      description: 'Free coding tutorials with accessibility considerations',
      features: ['Free Tutorials', 'Coding Challenges', 'Community', 'Certifications'],
      type: 'YouTube Channel',
      rating: 4.8,
      icon: Video
    },
    {
      category: 'youtube',
      name: 'Traversy Media',
      url: 'https://www.youtube.com/@TraversyMedia',
      description: 'Web development tutorials with accessibility focus',
      features: ['HD Tutorials', 'Course Series', 'Beginner Friendly', 'Professional Quality'],
      type: 'YouTube Channel',
      rating: 4.7,
      icon: Video
    },
    {
      category: 'youtube',
      name: 'Academind',
      url: 'https://www.youtube.com/@academind',
      description: 'Modern web development and design tutorials',
      features: ['HD Tutorials', 'Course Series', 'Industry Trends', 'Expert Instruction'],
      type: 'YouTube Channel',
      rating: 4.9,
      icon: Video
    },
    {
      category: 'youtube',
      name: 'Code With Harry',
      url: 'https://www.youtube.com/@CodeWithHarry',
      description: 'Full-stack web development with accessibility focus',
      features: ['Project-Based', 'Best Practices', 'Modern Tools', 'Comprehensive Coverage'],
      type: 'YouTube Channel',
      rating: 4.8,
      icon: Video
    },
    {
      category: 'youtube',
      name: 'Programming with Mosh',
      url: 'https://www.youtube.com/@programmingwithmosh',
      description: 'Professional programming tutorials and courses',
      features: ['HD Tutorials', 'Course Series', 'Expert Instruction', 'Career Development'],
      type: 'YouTube Channel',
      rating: 4.9,
      icon: Video
    },
    {
      category: 'learning',
      name: 'Pluralsight',
      url: 'https://www.pluralsight.com/browse/software-development/web-accessibility',
      description: 'Professional web accessibility courses and training',
      features: ['Expert Instructors', 'Hands-on Projects', 'Certificates', 'Skill Assessments'],
      type: 'Learning Platform',
      rating: 4.7,
      icon: BookOpen
    },
    {
      category: 'learning',
      name: 'Egghead',
      url: 'https://egghead.io',
      description: 'Modern web development with accessibility focus',
      features: ['Interactive Courses', 'Expert Instructors', 'Project-Based', 'Career Path Guidance'],
      type: 'Learning Platform',
      rating: 4.8,
      icon: BookOpen
    },
    {
      category: 'learning',
      name: 'Frontend Masters',
      url: 'https://frontendmasters.com',
      description: 'Advanced frontend development with accessibility',
      features: ['Expert Curated', 'Interactive Learning', 'Community Support', 'Career Focus'],
      type: 'Learning Platform',
      rating: 4.6,
      icon: BookOpen
    },
    {
      category: 'learning',
      name: 'Codecademy',
      url: 'https://www.codecademy.com',
      description: 'Interactive coding lessons with accessibility awareness',
      features: ['Interactive Learning', 'Free Courses', 'Paid Programs', 'Career Paths'],
      type: 'Learning Platform',
      rating: 4.7,
      icon: Code
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? videoResources 
    : videoResources.filter(resource => resource.category === selectedCategory);

  const handleBookSession = (platformName) => {
    setSelectedPlatform(platformName);
    setBookingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, platform: selectedPlatform });
    alert(`Learning session request submitted for ${selectedPlatform}! We'll contact you soon.`);
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
              <Play className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">Video Tutorials</h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Learn accessibility, development, and design through comprehensive video tutorials from expert instructors
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Youtube className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">20+ Platforms</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Self-Paced Learning</span>
              </div>
            </div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Learning
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
            All Tutorials
          </button>
          {tutorialCategories.map(category => {
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

        {/* Video Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: isDarkMode ? '1rem' : undefined }}>
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            const categoryColor = tutorialCategories.find(c => c.id === resource.category)?.color || 'from-purple-500 to-purple-600';
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
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
                      <span>Watch Tutorials</span>
                    </a>
                    <button
                      onClick={() => handleBookSession(resource.name)}
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-green-700 to-emerald-700 text-white hover:from-green-800 hover:to-emerald-800 shadow-lg' 
                          : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg'
                      }`}
                    >
                      <BookOpen className="h-4 w-4" />
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

        {/* Learning Path Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Recommended Learning Paths
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Structured learning paths to master accessibility and inclusive design
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-700'
              }`}>
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Beginner Path</div>
                <div className="text-sm mb-2">Start with accessibility basics</div>
                <div className="text-xs">6-8 weeks • 3 platforms</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-50 text-green-700'
              }`}>
                <Code className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Developer Path</div>
                <div className="text-sm mb-2">Focus on implementation</div>
                <div className="text-xs">10-12 weeks • 5 platforms</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-700'
              }`}>
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold mb-2">Expert Path</div>
                <div className="text-sm mb-2">Advanced concepts and certification</div>
                <div className="text-xs">16-20 weeks • 8 platforms</div>
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
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Book Learning Session
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
                      What topics would you like to learn? (Optional)
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
                      placeholder="Briefly describe what you'd like to learn..."
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
                        <span className="font-semibold text-red-600">Urgent Learning Request</span>
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
                  Submit Learning Request
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

export default VideoTutorials;
