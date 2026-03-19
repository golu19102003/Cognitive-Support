import React, { useState, useEffect } from 'react';
import { 
  BookOpen, HelpCircle, Play, Bot, Target, Users, Calendar, 
  MessageSquare, GraduationCap, Heart, School, Users2, Headphones,
  Wrench, Code, Download, Smartphone, Monitor, Shield, Lock,
  ChevronRight, Star, Clock, Award, Zap, Search, Filter,
  ExternalLink, Video, FileText, Globe, User, Phone,
  Mail, MapPin, CheckCircle, ArrowRight, TrendingUp, Eye, Brain
} from 'lucide-react';

const Resources = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState('guides');
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
    { id: 'guides', name: 'Guides', icon: BookOpen, color: '#16808D' },
    { id: 'tools', name: 'Tools', icon: Wrench, color: 'purple' },
    { id: 'support', name: 'Support', icon: Headphones, color: 'red' },
    { id: 'community', name: 'Community', icon: Users, color: 'green' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'orange' }
  ];

  const resources = [
    {
      id: 1,
      title: 'User Guide',
      description: 'Complete step-by-step guide explaining how to use PriHub features like accessibility tools, chatbot assistance, reminders, and community support.',
      category: 'guides',
      icon: BookOpen,
      color: 'blue',
      features: ['Step-by-step tutorials', 'Visual guides', 'Accessibility features', 'Community support'],
      rating: 4.8,
      downloads: '12.5K',
      action: 'Read More',
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'FAQ',
      description: 'Frequently asked questions related to accessibility features, therapy support, AI tools, and platform usage with comprehensive detailed answers.',
      category: 'guides',
      icon: HelpCircle,
      color: 'green',
      features: ['Common questions', 'Quick answers', 'Troubleshooting', 'Platform usage'],
      rating: 4.6,
      downloads: '8.2K',
      action: 'View FAQ'
    },
    {
      id: 3,
      title: 'Video Tutorials',
      description: 'Comprehensive visual tutorials explaining how to use screen reader tools, reminders, AI chatbot, and accessibility settings effectively with examples.',
      category: 'guides',
      icon: Play,
      color: 'purple',
      features: ['Video guides', 'Screen reader tutorials', 'AI assistant demos', 'Accessibility settings'],
      rating: 4.9,
      downloads: '15.3K',
      action: 'Watch Videos',
      badge: 'Featured'
    },
    {
      id: 5,
      title: 'Gamification Cognitive Training',
      description: 'Neuroplasticity-based cognitive training using gamified exercises to strengthen neural pathways enhance mental performance adaptive challenges.',
      category: 'tools',
      icon: Target,
      color: 'orange',
      features: ['Memory games', 'Focus training', 'Cognitive exercises', 'Progress tracking'],
      rating: 4.8,
      downloads: '11.2K',
      action: 'Start Training'
    },
    {
      id: 6,
      title: 'One-to-One Counselling',
      description: 'Users can easily search therapists and specialists by condition and PIN code to book personalized secure online counselling sessions.',
      category: 'support',
      icon: Users,
      color: 'teal',
      features: ['Therapist search', 'PIN code based', 'Online sessions', 'Personalized care'],
      rating: 4.9,
      downloads: '6.7K',
      action: 'Find a Counselor'
    },
    {
      id: 4,
      title: 'AI Smart Assistant',
      description: 'An AI-powered intelligent chatbot that helps users navigate the platform, answer questions, and provide personalized accessibility guidance.',
      category: 'tools',
      icon: Bot,
      color: 'indigo',
      features: ['24/7 availability', 'Personalized guidance', 'Accessibility help', 'Platform navigation'],
      rating: 4.7,
      downloads: '9.8K',
      action: 'Try AI Assistant',
      badge: 'New'
    },
    {
      id: 7,
      title: 'Therapy Sessions',
      description: 'Access comprehensive online therapy programs including cognitive therapy, mental wellness programs, and guided therapy sessions.',
      category: 'support',
      icon: Calendar,
      color: 'pink',
      features: ['Cognitive therapy', 'Mental wellness', 'Guided sessions', 'Professional help'],
      rating: 4.7,
      downloads: '7.4K',
      action: 'Book Session'
    },
    {
      id: 8,
      title: 'Support Groups',
      description: 'Join supportive peer communities for ADHD, autism, dementia, and other conditions to share valuable experiences and receive support.',
      category: 'community',
      icon: MessageSquare,
      color: 'cyan',
      features: ['Peer support', 'Condition specific', 'Experience sharing', 'Emotional help'],
      rating: 4.8,
      downloads: '10.1K',
      action: 'Join Group'
    },
    {
      id: 9,
      title: 'Educational Support',
      description: 'Learning resources, study assistance, and simplified educational content for people with cognitive challenges.',
      category: 'education',
      icon: GraduationCap,
      color: 'amber',
      features: ['Study assistance', 'Simplified content', 'Learning resources', 'Cognitive support'],
      rating: 4.6,
      downloads: '8.9K',
      action: 'Explore Resources'
    },
    {
      id: 10,
      title: 'NGO Partnerships',
      description: 'Collaboration with NGOs working in disability support to provide verified resources, awareness programs, and assistance.',
      category: 'community',
      icon: Heart,
      color: 'red',
      features: ['Verified resources', 'Awareness programs', 'Disability support', 'NGO network'],
      rating: 4.8,
      downloads: '5.3K',
      action: 'View Partners'
    },
    {
      id: 11,
      title: 'Educational Institution Partnerships',
      description: 'Partnership with schools, colleges, and training centers promoting inclusive learning environments.',
      category: 'education',
      icon: School,
      color: 'blue',
      features: ['Inclusive learning', 'School partnerships', 'Training programs', 'Educational support'],
      rating: 4.7,
      downloads: '4.8K',
      action: 'Learn More'
    },
    {
      id: 12,
      title: 'Community Forum',
      description: 'A discussion space where users, caregivers, and experts can share experiences, advice, and resources.',
      category: 'community',
      icon: Users2,
      color: 'green',
      features: ['Discussion space', 'Expert advice', 'Experience sharing', 'Community support'],
      rating: 4.6,
      downloads: '7.2K',
      action: 'Join Forum'
    },
    {
      id: 13,
      title: 'Support Center',
      description: 'Direct immediate assistance from the dedicated PriHub support team for technical help or accessibility issues and questions with guidance.',
      category: 'support',
      icon: Headphones,
      color: 'purple',
      features: ['Technical help', 'Accessibility support', 'Direct assistance', 'Expert team'],
      rating: 4.9,
      downloads: '9.1K',
      action: 'Get Support',
      badge: '24/7'
    },
    {
      id: 14,
      title: 'Accessibility Tools Hub',
      description: 'Collection comprehensive tools like text-to-speech, speech-to-text, high-contrast mode, dyslexia fonts, and advanced screen readers.',
      category: 'tools',
      icon: Wrench,
      color: 'indigo',
      features: ['Text-to-speech', 'Speech-to-text', 'High contrast', 'Screen readers'],
      rating: 4.8,
      downloads: '13.7K',
      action: 'Explore Tools',
      badge: 'Essential'
    },
    {
      id: 15,
      title: 'API Documentation',
      description: 'Comprehensive technical documentation with practical guides and detailed code examples for integrating PriHub accessibility services.',
      category: 'tools',
      icon: Code,
      color: 'gray',
      features: ['Developer docs', 'API integration', 'Technical guides', 'Code examples'],
      rating: 4.5,
      downloads: '3.2K',
      action: 'View Docs'
    },
    {
      id: 16,
      title: 'Screen Reader Integration',
      description: 'Complete comprehensive screen reader compatibility guide with JAWS, NVDA, and VoiceOver for seamless navigation experience.',
      category: 'tools',
      icon: Eye,
      color: 'teal',
      features: ['JAWS support', 'NVDA compatibility', 'VoiceOver integration', 'Navigation shortcuts'],
      rating: 4.9,
      downloads: '18.7K',
      action: 'Setup Guide',
      badge: 'Essential'
    },
    {
      id: 17,
      title: 'Visual Accessibility Suite',
      description: 'Comprehensive advanced visual impairment tools including high contrast modes, magnification, and color blindness support features.',
      category: 'tools',
      icon: Monitor,
      color: 'purple',
      features: ['High contrast', 'Screen magnifier', 'Color blind mode', 'Font adjustment'],
      rating: 4.8,
      downloads: '14.2K',
      action: 'Configure Tools'
    },
    {
      id: 18,
      title: 'Cognitive Navigation Assistant',
      description: 'AI-powered intelligent navigation assistant that simplifies complex interfaces and provides personalized step-by-step guidance.',
      category: 'tools',
      icon: Brain,
      color: 'indigo',
      features: ['Simplified interface', 'Step-by-step help', 'Cognitive shortcuts', 'Memory aids'],
      rating: 4.7,
      downloads: '11.5K',
      action: 'Start Assistant',
      badge: 'AI Powered'
    },
    {
      id: 19,
      title: 'Accessibility Testing Tools',
      description: 'Professional comprehensive accessibility testing suite for WCAG compliance validation and detailed cognitive load assessment with automated reporting.',
      category: 'tools',
      icon: Shield,
      color: 'green',
      features: ['WCAG testing', 'Cognitive load analysis', 'Accessibility audit', 'Compliance reports'],
      rating: 4.6,
      downloads: '7.8K',
      action: 'Run Tests'
    },
    {
      id: 20,
      title: 'Inclusive Design Guidelines',
      description: 'Comprehensive design principles and proven best practices for creating accessible digital experiences with practical implementation examples.',
      category: 'guides',
      icon: BookOpen,
      color: 'blue',
      features: ['Design principles', 'Best practices', 'Implementation guide', 'Case studies'],
      rating: 4.8,
      downloads: '9.3K',
      action: 'View Guidelines'
    },
    {
      id: 21,
      title: 'Community Support Network',
      description: 'Dedicated supportive community for users with cognitive and visual impairments to share valuable experiences and build meaningful connections.',
      category: 'community',
      icon: Users,
      color: 'orange',
      features: ['Peer support', 'Expert moderators', 'Resource sharing', 'Live discussions'],
      rating: 4.9,
      downloads: '16.4K',
      action: 'Join Network',
      badge: 'Active'
    },
    {
      id: 22,
      title: 'Accessibility Training Programs',
      description: 'Professional comprehensive training programs for developers and designers on modern accessibility best practices with hands-on workshops.',
      category: 'education',
      icon: GraduationCap,
      color: 'red',
      features: ['Developer training', 'Design workshops', 'Certification courses', 'Live sessions'],
      rating: 4.7,
      downloads: '8.1K',
      action: 'Enroll Now'
    },
    {
      id: 23,
      title: 'Assistive Technology Hub',
      description: 'Centralized comprehensive hub for assistive technologies, device compatibility testing, and detailed integration guides with expert support.',
      category: 'tools',
      icon: Wrench,
      color: 'cyan',
      features: ['Device compatibility', 'Integration guides', 'Setup tutorials', 'Troubleshooting'],
      rating: 4.6,
      downloads: '12.3K',
      action: 'Explore Hub'
    },
    {
      id: 24,
      title: 'Cognitive Accessibility Resources',
      description: 'Specialized comprehensive resources for cognitive accessibility including advanced memory aids, attention tools, and focus enhancement techniques.',
      category: 'education',
      icon: Target,
      color: 'pink',
      features: ['Memory aids', 'Attention tools', 'Focus techniques', 'Cognitive strategies'],
      rating: 4.8,
      downloads: '10.7K',
      action: 'Access Resources'
    },
    {
      id: 25,
      title: 'Visual Impairment Support',
      description: 'Comprehensive specialized support resources for visual impairments including advanced braille integration and rich audio descriptions.',
      category: 'support',
      icon: Eye,
      color: 'amber',
      features: ['Braille support', 'Audio descriptions', 'Visual aids', 'Navigation help'],
      rating: 4.9,
      downloads: '13.8K',
      action: 'Get Support',
      badge: '24/7'
    },
    {
      id: 26,
      title: 'Accessibility Compliance Suite',
      description: 'Complete comprehensive compliance tools for ADA, Section 508, and international accessibility standards with automated testing and detailed.',
      category: 'tools',
      icon: Shield,
      color: 'emerald',
      features: ['ADA compliance', 'Section 508', 'International standards', 'Audit reports'],
      rating: 4.5,
      downloads: '6.9K',
      action: 'Check Compliance'
    },
    {
      id: 27,
      title: 'Inclusive Communication Tools',
      description: 'Communication tools designed for users with cognitive and visual impairments including simplified messaging.',
      category: 'tools',
      icon: MessageSquare,
      color: 'violet',
      features: ['Simplified messaging', 'Voice commands', 'Visual indicators', 'Communication aids'],
      rating: 4.7,
      downloads: '11.1K',
      action: 'Try Tools'
    },
    {
      id: 28,
      title: 'Digital Inclusion Platform',
      description: 'Platform-wide comprehensive digital inclusion features ensuring equal access for users with disabilities through adaptive technologies.',
      category: 'community',
      icon: Globe,
      color: 'teal',
      features: ['Universal access', 'Inclusive features', 'Equal opportunity', 'Digital rights'],
      rating: 4.8,
      downloads: '15.6K',
      action: 'Join Platform',
      badge: 'Featured'
    },
    {
      id: 29,
      title: 'Accessibility Research Hub',
      description: 'Latest cutting-edge research and developments in cognitive and visual accessibility technologies and best practices for inclusive design.',
      category: 'education',
      icon: FileText,
      color: 'blue',
      features: ['Research papers', 'Case studies', 'Technology trends', 'Best practices'],
      rating: 4.6,
      downloads: '7.4K',
      action: 'Explore Research'
    },
    {
      id: 30,
      title: 'Community Engagement Tools',
      description: 'Interactive adaptive tools designed to increase meaningful engagement and active participation for users with cognitive challenges.',
      category: 'community',
      icon: Heart,
      color: 'rose',
      features: ['Engagement analytics', 'Participation tools', 'Community building', 'Social features'],
      rating: 4.7,
      downloads: '9.8K',
      action: 'Engage Now'
    }
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
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeSection === 'all' || resource.category === activeSection;
    return matchesSearch && matchesCategory;
  });

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600',
      orange: 'from-orange-500 to-orange-600',
      teal: 'from-teal-500 to-teal-600',
      pink: 'from-pink-500 to-pink-600',
      cyan: 'from-cyan-500 to-cyan-600',
      amber: 'from-amber-500 to-amber-600',
      red: 'from-red-500 to-red-600',
      gray: 'from-gray-500 to-gray-600',
      emerald: 'from-emerald-500 to-emerald-600',
      violet: 'from-violet-500 to-violet-600',
      rose: 'from-rose-500 to-rose-600'
    };
    return colors[color] || colors.blue;
  };

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
                  <BookOpen className="h-10 w-10 text-white transform transition-all duration-300 group-hover:scale-105" />
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
            Comprehensive cognitive accessibility resources including assistive technologies, educational materials, therapeutic tools, and community support. We provide innovative solutions and expert guidance for individuals and families seeking inclusive learning environments and independence.
          </p>
        </div>

        {/* Categories and Search Bar */}
        <div className="mb-8">
          {/* First Row: Search + All Resources */}
          <div className="flex items-center gap-4 mb-4">
            {/* Search Bar */}
            <div className={`flex-1 p-3.5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full`}>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4.5 w-4.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-base`}
                />
              </div>
            </div>

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
          </div>

          {/* Second Row: 5 Categories */}
          <div className="grid grid-cols-5 gap-4 mb-12">
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
                <div className={`p-6 bg-gradient-to-r ${getColorClasses(resource.color)} text-white relative overflow-hidden`}>
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
                  <button className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-gradient-to-r ${getColorClasses(resource.color)} text-white hover:shadow-lg transform hover:scale-105`}>
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
