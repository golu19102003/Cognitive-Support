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
    { id: 'guides', name: 'Guides', icon: FileText, color: '#6D28D9' },
    { id: 'tools', name: 'Tools', icon: Wrench, color: 'purple' },
    { id: 'support', name: 'Support', icon: Headphones, color: 'red' },
    { id: 'community', name: 'Community', icon: Users, color: 'green' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: '#EA580C' }
  ];

  const resources = [
    {
      id: 1,
      title: 'User Guide',
      description: 'Complete step-by-step guide explaining how to use PriHub features like accessibility tools, chatbot assistance, reminders, and community support.',
      category: 'guides',
      icon: BookOpen,
      color: 'from-blue-800 to-blue-900',
      features: ['Step-by-step tutorials', 'Visual guides', 'Accessibility features', 'Community support', 'Expert assistance'],
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
      color: 'from-emerald-700 to-emerald-800',
      features: ['Common questions', 'Quick answers', 'Troubleshooting', 'Platform usage', 'Expert guidance'],
      rating: 4.6,
      downloads: '8.2K',
      action: 'View FAQ'
    },
    {
      id: 4,
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
      id: 3,
      title: 'Video Tutorials',
      description: 'Comprehensive visual tutorials explaining how to use screen reader tools, reminders, AI chatbot, and accessibility settings effectively with examples.',
      category: 'guides',
      icon: Play,
      color: 'from-orange-700 to-orange-800',
      features: ['Video guides', 'Screen reader tutorials', 'AI assistant demos', 'Accessibility settings', 'Interactive learning'],
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
      color: 'from-rose-600 to-rose-700',
      features: ['Memory games', 'Focus training', 'Cognitive exercises', 'Progress tracking', 'Adaptive challenges'],
      rating: 4.8,
      downloads: '11.2K',
      action: 'Start Training'
    },
    {
      id: 6,
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
      id: 7,
      title: 'AI Smart Assistant',
      description: 'An AI-powered intelligent chatbot that helps users navigate the platform, answer questions, and provide personalized accessibility guidance.',
      category: 'tools',
      icon: Bot,
      color: 'from-indigo-700 to-indigo-800',
      features: ['24/7 availability', 'Personalized guidance', 'Accessibility help', 'Platform navigation', 'Smart assistance'],
      rating: 4.7,
      downloads: '9.8K',
      action: 'Try AI Assistant',
      badge: 'New'
    },
    {
      id: 8,
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
      id: 9,
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
      id: 11,
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
      id: 10,
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
      id: 12,
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
      id: 13,
      title: 'Support Center',
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
      id: 14,
      title: 'Accessibility Tools Hub',
      description: 'Collection comprehensive accessible tools like text-to-speech, speech-to-text, high-contrast mode, dyslexia fonts, and advanced screen readers.',
      category: 'tools',
      icon: Wrench,
      color: 'from-pink-800 to-pink-900',
      features: ['Text-to-speech', 'Speech-to-text', 'High contrast', 'Screen readers', 'Customizable settings'],
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
      color: 'from-zinc-700 to-zinc-800',
      features: ['Developer docs', 'API integration', 'Technical guides', 'Code examples', 'Implementation support'],
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
      color: 'from-teal-500 to-teal-600',
      features: ['Comprehensive support', 'Visual impairments', 'Braille integration', 'Audio descriptions', 'Visual accessibility', 'Navigation shortcuts', 'Screen reader setup'],
      rating: 4.9,
      downloads: '18.7K',
      action: 'Setup Guide',
      badge: 'Essential'
    },
    {
      id: 17,
      title: 'Visual Accessibility Suite',
      description: 'Comprehensive advanced visual impairment tools including high contrast modes, magnification, and color blindness support features adaptive settings.',
      category: 'tools',
      icon: Monitor,
      color: 'from-amber-700 to-amber-800',
      features: ['High contrast', 'Screen magnifier', 'Color blind mode', 'Font adjustment', 'Visual enhancements'],
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
      color: 'from-blue-900 to-blue-950',
      features: ['Simplified interface', 'Step-by-step help', 'Cognitive shortcuts', 'Memory aids', 'Smart navigation'],
      rating: 4.7,
      downloads: '11.5K',
      action: 'Start Assistant',
      badge: 'AI Powered'
    },
    {
      id: 19,
      title: 'Accessibility Testing Tools',
      description: 'Professional comprehensive accessibility testing suite for WCAG compliance validation and detailed cognitive load assessment with automated checks.',
      category: 'tools',
      icon: Shield,
      color: 'from-lime-700 to-lime-800',
      features: ['WCAG testing', 'Cognitive load analysis', 'Accessibility audit', 'Compliance reports', 'Automated checks'],
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
      color: 'from-stone-700 to-stone-800',
      features: ['Design principles', 'Best practices', 'Implementation guide', 'Case studies', 'Design patterns'],
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
      color: 'from-violet-700 to-violet-800',
      features: ['Peer support', 'Expert moderators', 'Resource sharing', 'Live discussions', 'Community guidelines'],
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
      color: 'from-red-700 to-red-800',
      features: ['Professional training', 'Hands-on workshops', 'Best practices', 'Accessibility standards', 'Certification programs'],
      rating: 4.7,
      downloads: '8.1K',
      action: 'Enroll Now'
    },
    {
      id: 29,
      title: 'Accessibility Research Hub',
      description: 'Latest cutting-edge research and developments in cognitive and visual accessibility technologies and proven best practices for inclusive design.',
      category: 'education',
      icon: FileText,
      color: 'from-blue-800 to-blue-900',
      features: ['Research papers', 'Case studies', 'Technology trends', 'Best practices'],
      rating: 4.6,
      downloads: '7.4K',
      action: 'Explore Research'
    },
    {
      id: 23,
      title: 'Assistive Technology Hub',
      description: 'Centralized comprehensive hub for assistive technologies, device compatibility testing, and detailed integration guides with expert support.',
      category: 'tools',
      icon: Wrench,
      color: 'from-cyan-500 to-cyan-600',
      features: ['Device compatibility', 'Integration guides', 'Setup tutorials', 'Troubleshooting', 'Technical support'],
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
      color: 'from-rose-500 to-rose-600',
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
      color: 'from-yellow-500 to-yellow-600',
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
      color: 'from-green-700 to-green-800',
      features: ['ADA compliance', 'Section 508', 'International standards', 'Audit reports'],
      rating: 4.5,
      downloads: '6.9K',
      action: 'Check Compliance'
    },
    {
      id: 27,
      title: 'Inclusive Communication Tools',
      description: 'Adaptive intelligent communication tools designed for users with cognitive and visual impairments including simplified accessible messaging.',
      category: 'tools',
      icon: MessageSquare,
      color: 'from-purple-700 to-purple-800',
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
      color: 'from-blue-800 to-blue-900',
      features: ['Universal access', 'Inclusive features', 'Equal opportunity', 'Digital rights'],
      rating: 4.8,
      downloads: '15.6K',
      action: 'Join Platform',
      badge: 'Featured'
    },
    {
      id: 30,
      title: 'Community Engagement Tools',
      description: 'Interactive adaptive tools designed to increase meaningful engagement and active participation for users with cognitive challenges support.',
      category: 'community',
      icon: Heart,
      color: 'from-rose-700 to-rose-800',
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
          <div className="grid grid-cols-6 gap-4">
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

          {activeSection === 'guides' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <FileText className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" style={{ color: '#6D28D9' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  <span style={{ color: '#6D28D9' }}>Comprehensive Guides</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Detailed step-by-step guides and comprehensive documentation for navigating accessibility features, using assistive technologies, and implementing inclusive design practices. We provide comprehensive instructions with detailed visual examples and expert recommendations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    User Manuals
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Video Tutorials
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    FAQ Resources
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'tools' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Wrench className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" style={{ color: 'purple' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  <span style={{ color: 'purple' }}>Accessibility Tools</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Advanced assistive technology tools and cutting-edge software solutions designed to enhance accessibility for users with cognitive and visual impairments. We offer powerful screen readers, text-to-speech, magnification tools, and advanced cognitive navigation aids for everyone.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Screen Readers
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-pink-900/50 text-pink-300 border border-pink-700' : 'bg-pink-100 text-pink-700 border border-pink-200'}`}>
                    Text-to-Speech
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Cognitive Aids
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
                    onClick={() => resource.title === 'User Guide' ? navigate('/resources/user-guide') : null}
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
