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

const Resources = () => {
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

  const categories = [
    { id: 'support', name: 'Support', icon: Headphones, color: 'red' },
    { id: 'community', name: 'Community', icon: Users, color: 'green' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: '#EA580C' },
    { id: 'training', name: 'Training', icon: Target, color: 'purple' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Therapy Sessions',
      description: 'Access comprehensive online therapy programs including cognitive therapy, mental wellness programs, and guided therapy sessions.',
      category: 'support',
      icon: Calendar,
      color: 'from-pink-700 to-pink-800',
      features: ['Cognitive therapy', 'Mental wellness', 'Guided sessions', 'Professional help', 'Flexible scheduling'],
      rating: 4.7,
      downloads: '7.4K',
      action: 'Book Session'
    },
    {
      id: 2,
      title: 'Video Tutorials',
      description: 'Comprehensive visual tutorials explaining how to use screen reader tools, reminders, AI chatbot, and accessibility settings effectively with examples.',
      category: 'training',
      icon: Play,
      color: 'from-indigo-600 to-indigo-700',
      features: ['Video guides', 'Screen reader tutorials', 'AI assistant demos', 'Accessibility settings', 'Interactive learning'],
      rating: 4.9,
      downloads: '15.3K',
      action: 'Watch Videos',
      badge: 'Featured'
    },
    {
      id: 3,
      title: 'Support Groups',
      description: 'Join supportive peer communities for ADHD, autism, dementia, and other conditions to share valuable experiences and receive support.',
      category: 'community',
      icon: MessageSquare,
      color: 'from-cyan-700 to-cyan-800',
      features: ['Peer support', 'Condition specific', 'Experience sharing', 'Emotional help', 'Community connection'],
      rating: 4.8,
      downloads: '10.1K',
      action: 'Join Group'
    },
    {
      id: 4,
      title: 'Gamification Cognitive Training',
      description: 'Neuroplasticity-based cognitive training using gamified exercises to strengthen neural pathways enhance mental performance adaptive challenges.',
      category: 'training',
      icon: Target,
      color: 'from-purple-600 to-purple-700',
      features: ['Memory games', 'Focus training', 'Cognitive exercises', 'Progress tracking', 'Adaptive challenges'],
      rating: 4.8,
      downloads: '11.2K',
      action: 'Start Training',
      badge: 'Featured'
    },
    {
      id: 5,
      title: 'One-to-One Counselling',
      description: 'Users can easily search therapists and specialists by condition and PIN code to book personalized secure online counselling sessions.',
      category: 'support',
      icon: Phone,
      color: 'from-teal-700 to-teal-800',
      features: ['Therapist search', 'PIN code filter', 'Secure sessions', 'Personalized counseling', 'Professional help'],
      rating: 4.9,
      downloads: '6.7K',
      action: 'Find a Counselor'
    },
    {
      id: 6,
      title: 'Educational Support',
      description: 'Comprehensive learning resources, personalized study assistance, and simplified educational content for people with cognitive challenges.',
      category: 'education',
      icon: GraduationCap,
      color: 'from-yellow-700 to-yellow-800',
      features: ['Study assistance', 'Simplified content', 'Learning resources', 'Cognitive support', 'Personalized learning'],
      rating: 4.6,
      downloads: '8.9K',
      action: 'Explore Resources'
    },
    {
      id: 7,
      title: 'Academic Collaboration Network',
      description: 'Partnership with schools, colleges, and training centers promoting inclusive learning environments through adaptive technologies and support.',
      category: 'education',
      icon: School,
      color: 'from-teal-700 to-teal-800',
      features: ['Inclusive learning', 'School partnerships', 'Training programs', 'Educational support', 'Resource sharing'],
      rating: 4.7,
      downloads: '4.8K',
      action: 'Learn More'
    },
    {
      id: 8,
      title: 'NGO Partnerships',
      description: 'Collaboration with dedicated NGOs working in disability support to provide verified resources, awareness programs, and assistance.',
      category: 'community',
      icon: Heart,
      color: 'from-red-700 to-red-800',
      features: ['Verified resources', 'Awareness programs', 'Disability support', 'NGO network'],
      rating: 4.8,
      downloads: '5.3K',
      action: 'View Partners'
    },
    {
      id: 9,
      title: 'Community Forum',
      description: 'A supportive discussion space where users, caregivers, and experts can share valuable experiences, helpful advice, and resources.',
      category: 'community',
      icon: Users2,
      color: 'from-lime-700 to-lime-800',
      features: ['Discussion space', 'Expert advice', 'Experience sharing', 'Community support', 'Active participation'],
      rating: 4.6,
      downloads: '7.2K',
      action: 'Join Forum'
    },
    {
      id: 10,
      title: '24/7 Support Center',
      description: 'Direct immediate assistance from the dedicated PriHub support team for technical help or accessibility issues and questions with guidance.',
      category: 'support',
      icon: Headphones,
      color: 'from-purple-800 to-purple-900',
      features: ['Technical help', 'Accessibility support', 'Direct assistance', 'Expert team', '24/7 availability', 'Quick response'],
      rating: 4.9,
      downloads: '9.1K',
      action: 'Get Support',
      badge: '24/7'
    },
    {
      id: 11,
      title: 'Community Support Network',
      description: 'Dedicated supportive community for users with cognitive and visual impairments to share valuable experiences and build meaningful connections.',
      category: 'community',
      icon: Users,
      color: 'from-violet-700 to-violet-800',
      features: ['Peer support', 'Expert moderators', 'Resource sharing', 'Live discussions', 'Community guidelines'],
      rating: 4.9,
      downloads: '16.4K',
      action: 'Join Network',
      badge: 'Active'
    },
    {
      id: 12,
      title: 'Digital Inclusion Platform',
      description: 'Platform-wide comprehensive digital inclusion features ensuring equal access for users with disabilities through adaptive technologies.',
      category: 'community',
      icon: Globe,
      color: 'from-blue-800 to-blue-900',
      features: ['Universal access', 'Inclusive features', 'Equal opportunity', 'Digital rights'],
      rating: 4.8,
      downloads: '15.6K',
      action: 'Join Platform',
      badge: 'Featured'
    },
      ];

  const downloads = [
    {
      title: 'Mobile App (iOS)',
      description: 'Download PriHub mobile app for iOS devices',
      icon: Smartphone,
      platform: 'iOS',
      size: '45.2 MB',
      version: '2.1.0',
      rating: 4.7
    },
    {
      title: 'Mobile App (Android)',
      description: 'Download PriHub mobile app for Android devices',
      icon: Smartphone,
      platform: 'Android',
      size: '42.8 MB',
      version: '2.1.0',
      rating: 4.6
    },
    {
      title: 'Desktop Application',
      description: 'Download PriHub desktop application for Windows/Mac/Linux',
      icon: Monitor,
      platform: 'Desktop',
      size: '128.5 MB',
      version: '1.8.2',
      rating: 4.8
    }
  ];

  const quickLinks = [
    {
      title: 'System Requirements',
      description: 'Minimum system requirements for optimal performance',
      icon: Monitor,
      link: '#requirements'
    },
    {
      title: 'Security Features',
      description: 'Overview of security measures and data protection',
      icon: Shield,
      link: '#security'
    },
    {
      title: 'Integration Guide',
      description: 'How to integrate PriHub with your existing systems',
      icon: Code,
      link: '#integration'
    },
    {
      title: 'Privacy Policy',
      description: 'Our commitment to privacy and data protection',
      icon: Lock,
      link: '#privacy'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = (resource.title && resource.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (resource.description && resource.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeSection === 'all' || resource.category === activeSection;
    return matchesSearch && matchesCategory;
  });

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
        
        {/* Resources-Themed Elements */}
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
                  <BookOpen className="h-8 w-8 text-white transform transition-all duration-300 group-hover:scale-105" />
                </div>
                {/* Additional hover effect ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                {/* Floating animation when not dragging */}
                <div className={`absolute inset-0 rounded-full ${isDragging ? '' : 'animate-bounce'}`} style={{ animationDuration: '3s' }}></div>
              </div>
              <h1 className="text-4xl font-bold">
                <span style={{ color: '#16808D' }}>Resources</span>
                <span className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : ''
                }`} style={{ color: isDarkMode ? '#ffffff' : '#000000' }}> Cognitive Support</span>
              </h1>
            </div>
          </div>
          <p className={`text-xl max-w-3xl mx-auto italic transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive cognitive accessibility resources including assistive technologies, educational materials, therapeutic tools, and community support. We provide innovative solutions and expert guidance for individuals and families seeking inclusive learning environments and independence worldwide always guaranteed.
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
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-[#16808D] text-white' : 'bg-gray-50 border-[#16808D] text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#16808D] text-base`}
                />
              </div>
            </div>
          </div>

          {/* Second Row: Categories */}
          <div className="grid grid-cols-5 gap-4">
            {/* All Resources Category */}
            <div 
              onClick={() => setActiveSection('all')}
              className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer h-full ${
                activeSection === 'all' ? 'ring-2 ring-[#16808D]' : ''
              } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <BookOpen className="h-8 w-8 mr-2" style={{ color: '#16808D' }} />
              <h2 className={`text-base font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>All Resources</h2>
            </div>
            
            {/* Other Categories */}
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
                <BookOpen className="h-16 w-16 text-[#16808D] mx-auto mb-4 animate-bounce" style={{ color: '#16808D' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#16808D] to-purple-600 bg-clip-text text-transparent">
                  <span style={{ color: '#16808D' }}>All Resources</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Comprehensive accessibility resources featuring guides, tools, support services, community networks, and educational materials. We deliver innovative solutions and expert guidance for individuals and families seeking inclusive learning environments and independent living.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Step-by-Step Guides
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Accessibility Tools
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                    Expert Support
                  </div>
                </div>
              </div>
            </div>
          )}

          
          
          {activeSection === 'support' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Headphones className="h-16 w-16 text-red-600 mx-auto mb-4 animate-bounce" style={{ color: 'red' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  <span style={{ color: 'red' }}>Professional Support</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Dedicated support services including one-to-one counselling, therapy sessions, and expert assistance for cognitive and accessibility challenges. We provide compassionate care, professional guidance, and personalized support plans for all users worldwide anytime anywhere guaranteed.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                    Expert Counselling
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-orange-900/50 text-orange-300 border border-orange-700' : 'bg-orange-100 text-orange-700 border border-orange-200'}`}>
                    Therapy Sessions
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'community' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Users className="h-16 w-16 text-green-600 mx-auto mb-4 animate-bounce" style={{ color: 'green' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  <span style={{ color: 'green' }}>Community Networks</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Supportive community networks for sharing experiences, building connections, and accessing peer support. We foster inclusive environments where users with cognitive challenges can connect, learn, and grow together safely and securely with confidence always guaranteed success.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Peer Support
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-teal-900/50 text-teal-300 border border-teal-700' : 'bg-teal-100 text-teal-700 border border-teal-200'}`}>
                    Expert Forums
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Group Activities
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'education' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <GraduationCap className="h-16 w-16 text-orange-600 mx-auto mb-4 animate-bounce" style={{ color: '#EA580C' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  <span style={{ color: '#EA580C' }}>Educational Resources</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Comprehensive educational materials and learning resources for cognitive accessibility and inclusive design. We offer innovative training programs, strategic academic partnerships, and specialized content for students and educators worldwide always available instantly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-orange-900/50 text-orange-300 border border-orange-700' : 'bg-orange-100 text-orange-700 border border-orange-200'}`}>
                    Training Programs
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'}`}>
                    Academic Partnerships
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Learning Materials
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'training' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Target className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" style={{ color: 'purple' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  <span style={{ color: 'purple' }}>Interactive Training</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Engaging interactive training programs and cognitive exercises designed to enhance mental performance, memory, focus, and overall cognitive abilities. We provide gamified learning experiences, adaptive challenges, and progress tracking for optimal skill development.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Cognitive Training
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}`}>
                    Video Learning
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-violet-900/50 text-violet-300 border border-violet-700' : 'bg-violet-100 text-violet-700 border border-violet-200'}`}>
                    Skill Building
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Accessibility Grid Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Accessibility Hub</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive accessibility tools and resources designed to support users with diverse needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Screen Reader Integration */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-teal-200 dark:border-teal-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-600 rounded-lg mr-3">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Screen Reader Integration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visual support</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Complete compatibility with JAWS, NVDA, and VoiceOver for seamless navigation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.9</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">18.7K</span>
              </div>
              <a href="https://www.freedomscientific.com/products/software/jaws" target="_blank" rel="noopener noreferrer" className="w-full mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium inline-block text-center">
                Setup Guide
              </a>
            </div>

            {/* Visual Accessibility Suite */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-amber-600 rounded-lg mr-3">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Visual Accessibility Suite</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visual enhancements</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Advanced visual impairment tools with high contrast modes and color blindness support.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.8</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">14.2K</span>
              </div>
              <a href="https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows" target="_blank" rel="noopener noreferrer" className="w-full mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium inline-block text-center">
                Configure Tools
              </a>
            </div>

            {/* Accessibility Testing Tools */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-600 rounded-lg mr-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Accessibility Testing Tools</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Compliance testing</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Professional WCAG compliance testing and cognitive load assessment tools.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.6</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">7.8K</span>
              </div>
              <a href="https://wave.webaim.org" target="_blank" rel="noopener noreferrer" className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium inline-block text-center">
                Run Tests
              </a>
            </div>

            {/* Accessibility Compliance Suite */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-600 rounded-lg mr-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Accessibility Compliance Suite</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Standards compliance</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Complete ADA, Section 508, and international accessibility standards compliance.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.5</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">6.9K</span>
              </div>
              <a href="https://www.ada.gov/resources/web-guidance" target="_blank" rel="noopener noreferrer" className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block text-center">
                Check Compliance
              </a>
            </div>

            {/* Cognitive Accessibility Resources */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-rose-200 dark:border-rose-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-rose-600 rounded-lg mr-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Cognitive Accessibility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cognitive support</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Specialized resources for cognitive accessibility including memory aids and focus tools.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.8</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">10.7K</span>
              </div>
              <a href="https://www.understood.org" target="_blank" rel="noopener noreferrer" className="w-full mt-4 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-medium inline-block text-center">
                Access Resources
              </a>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                onMouseEnter={() => setHoveredCard(resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                style={{
                  transform: hoveredCard === resource.id ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {/* Card Header */}
                <div className={`p-6 bg-gradient-to-r ${resource.color} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Icon className="h-8 w-8" />
                      </div>
                      {resource.badge && (
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">
                          {resource.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-3">{resource.description}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {resource.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                      {resource.features.length > 3 && (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          +{resource.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {resource.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4 text-blue-500" />
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {resource.downloads}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => {
                      const routes = {
                        'Therapy Sessions': '/resources/therapy-sessions',
                        'Video Tutorials': '/resources/video-tutorials',
                        'Support Groups': '/resources/support-groups',
                        'Gamification Cognitive Training': '/resources/gamification-training',
                        'One-to-One Counselling': '/resources/one-to-one-counselling',
                        'Educational Support': '/resources/educational-support',
                        'Academic Collaboration Network': '/resources/academic-collaboration',
                        'NGO Partnerships': '/resources/ngo-partnerships',
                        'Community Forum': '/resources/community-forum',
                        '24/7 Support Center': '/resources/support-center-247',
                        'Community Support Network': '/resources/community-support-network',
                        'Digital Inclusion Platform': '/resources/digital-inclusion-platform'
                      };
                      navigate(routes[resource.title] || '/resources');
                    }}
                    className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-gradient-to-r ${resource.color} text-white hover:shadow-lg transform hover:scale-105`}
                  >
                    {resource.action}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Downloads Section */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((download, index) => {
              const Icon = download.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {download.title}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {download.platform}
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {download.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {download.size}
                      </span>
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        v{download.version}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {download.rating}
                      </span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.link}
                  className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-500 transition-colors`}>
                        {link.title}
                      </h3>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {link.description}
                      </p>
                    </div>
                    <ChevronRight className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-500 transition-colors`} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
