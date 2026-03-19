import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { 

  ArrowLeft, BookOpen, Brain, Users, MessageSquare, Calendar, Shield, 

  Activity, Heart, Target, Zap, ChevronRight, FileText, Calculator, PenTool, 

  Eye, Clock, AlertTriangle, Stethoscope, Pill, Wrench, Search, X, Star,

  Download, ArrowRight as ChevronRightIcon

} from 'lucide-react';



const AllFeatures = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const [isFocused, setIsFocused] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

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

    

    // Listen for theme changes

    window.addEventListener('storage', checkTheme);

    window.addEventListener('themechange', checkTheme);

    window.addEventListener('darkModeChange', checkTheme);

    

    // Poll every 500ms as backup

    const interval = setInterval(checkTheme, 500);

    

    return () => {

      window.removeEventListener('storage', checkTheme);

      window.removeEventListener('themechange', checkTheme);

      window.removeEventListener('darkModeChange', checkTheme);

      clearInterval(interval);

    };

  }, []);



  // Debounce search term

  useEffect(() => {

    const timer = setTimeout(() => {

      setDebouncedSearchTerm(searchTerm);

    }, 300);



    return () => clearTimeout(timer);

  }, [searchTerm]);



  const clearSearch = () => {

    setSearchTerm('');

    setDebouncedSearchTerm('');

  };



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



  // Categories for navigation

  const categories = [

    { id: 'all', name: 'All Cognitive Conditions', icon: Users, color: '#16808D' },

    { id: 'learning', name: 'Learning', icon: BookOpen, color: '#8B5CF6' },

    { id: 'neurological', name: 'Neurological', icon: Target, color: '#6366F1' },

    { id: 'developmental', name: 'Developmental', icon: Activity, color: 'green' },

    { id: 'cognitive', name: 'Cognitive', icon: Clock, color: 'orange' },

    { id: 'emotional', name: 'Mental Health', icon: Heart, color: '#F43F5E' }

  ];



  // Helper functions - must be defined before use

  const getCategory = (title) => {

    if (title.includes('Learning') || title.includes('Speech') || title.includes('Specific')) return 'learning';

    if (title.includes('Brain') || title.includes('Neurocognitive') || title.includes('Memory') || title.includes('Intellectual')) return 'neurological';

    if (title.includes('Developmental') || title.includes('ADHD') || title.includes('Autism')) return 'developmental';

    if (title.includes('Dementia') || title.includes('Executive') || title.includes('Traumatic')) return 'cognitive';

    if (title.includes('Anxiety') || title.includes('Emotional') || title.includes('Social Communication')) return 'emotional';

    if (title.includes('Epilepsy') || title.includes('Cerebral')) return 'neurological';

    return 'all';

  };



  


  const getFeaturesList = (title) => {

    const features = {

      'Learning Disabilities': ['Reading support', 'Writing tools', 'Math assistance', 'Processing aids'],

      'ADHD': ['Focus tools', 'Hyperactivity management', 'Impulse control', 'Behavioral therapy'],

      'Autism Spectrum': ['Social communication', 'Behavior support', 'Sensory processing', 'Personalized care'],

      'Epilepsy & Cerebral Palsy': ['Medical management', 'Safety protocols', 'Motor support', 'Accessibility tools'],

      'Memory Disorders': ['Memory aids', 'Cognitive therapy', 'Caregiver support', 'Medical treatment'],

      'Developmental Disorders': ['Early intervention', 'Specialized education', 'Therapeutic support', 'Language development'],

      'Dementia': ['Cognitive support', 'Memory care', 'Daily assistance', 'Medical management'],

      'Neurocognitive disorders': ['Cognitive rehabilitation', 'Medical treatment', 'Long-term care', 'Memory support'],

      'Traumatic Brain Injury': ['Emergency care', 'Rehabilitation', 'Cognitive therapy', 'Long-term support'],

      'Intellectual Disability': ['Simplified interfaces', 'Specialized tools', 'Educational support', 'Independence training'],

      'Speech & Language Disorders': ['Text-to-speech', 'Communication tools', 'Language therapy', 'Social integration'],

      'Specific Learning Disorders': ['Dyslexia support', 'Math assistance', 'Writing tools', 'Personalized learning'],

      'Executive Functioning Disorders': ['Planning tools', 'Time management', 'Task organization', 'Decision support'],

      'Anxiety & Emotional Disorders': ['Emotional support', 'Stress management', 'Mental wellness', 'Chatbot guidance']

    };

    return features[title] || ['Comprehensive support', 'Professional care', 'Accessibility tools', 'Educational resources'];

  };



  const getBadge = (title) => {

    const badges = {

      'ADHD': 'Common',

      'Autism Spectrum': 'Featured',

      'Memory Disorders': 'Important',

      'Dementia': 'Critical',

      'Learning Disabilities': 'Essential'

    };

    return badges[title] || null;

  };



  // Original features data

  const allFeatures = [

    {

      featureIcon: BookOpen,

      featureTitle: "Learning Disabilities",

      featureDescription: "Learning disabilities affect reading, writing, math, and information processing. These neurological conditions impact academic performance and daily functioning, requiring specialized educational support and accommodations to help individuals succeed in school and life.",

      featureColor: "#16808D",

      featureLink: "/conditions/learning-disabilities"

    },

    {

      featureIcon: Target,

      featureTitle: "ADHD",

      featureDescription: "ADHD is a neurodevelopmental disorder affecting focus, hyperactivity, and impulse control. It impacts academic performance, social relationships, and daily functioning throughout life, requiring behavioral therapy, medication, and coping strategies for successful management.",

      featureColor: "#22C55E",

      featureLink: "/conditions/adhd"

    },

    {

      featureIcon: Brain,

      featureTitle: "Memory Disorders",

      featureDescription: "Memory disorders impair recall and cognitive function, including Alzheimer's, dementia, and amnesia. These conditions affect daily living, independence, and quality of life, requiring medical treatment, cognitive therapy, and caregiver support for optimal management.",

      featureColor: "#142C52",

      featureLink: "/conditions/memory-disorders"

    },

    {

      featureIcon: Clock,

      featureTitle: "Dementia",

      featureDescription: "Dementia causes progressive brain deterioration, severely impairing memory, thinking, and daily functioning. This condition affects reasoning, concentration, and independence, requiring comprehensive care, cognitive support, and medical management to maintain quality of life.",

      featureColor: "#DC2626",

      featureLink: "/conditions/dementia"

    },

    {

      featureIcon: Users,

      featureTitle: "Autism Spectrum",

      featureDescription: "Autism Spectrum Disorder affects social communication, behavior, and sensory processing. Individuals experience unique challenges with social interaction, communication patterns, and repetitive behaviors, requiring personalized support and understanding to thrive in their environment.",

      featureColor: "#1B9AAA",

      featureLink: "/conditions/autism"

    },

    {

      featureIcon: Activity,

      featureTitle: "Epilepsy & Cerebral Palsy",

      featureDescription: "Epilepsy requires medical management and safety protocols. Cerebral Palsy affects motor and cognitive functioning, needing specialized support tools and accessibility features.",

      featureColor: "#7C3AED",

      featureLink: "/conditions/epilepsy-cerebral-palsy"

    },

    {

      featureIcon: AlertTriangle,

      featureTitle: "Neurocognitive disorders",

      featureDescription: "Neurocognitive disorders cause progressive brain function decline, affecting memory, attention, and language. Conditions like Alzheimer's, stroke, and epilepsy range from mild to severe, impacting independence and requiring medical treatment, cognitive rehabilitation, and long-term care.",

      featureColor: "#4C97A8",

      featureLink: "/conditions/neurocognitive-disorders"

    },

    {

      featureIcon: MessageSquare,

      featureTitle: "Speech & Language Disorders",

      featureDescription: "Includes apraxia, stuttering, and expressive/receptive language difficulties. Supports PriHub's text-to-speech, chatbot guidance, and communication tools for effective assistance and social integration.",

      featureColor: "#F97316",

      featureLink: "/conditions/speech-language-disorders"

    },

    {

      featureIcon: Activity,

      featureTitle: "Developmental Disorders",

      featureDescription: "Developmental Disorders impact brain development, affecting language, social skills, and learning abilities. These lifelong conditions require early intervention, specialized education, and therapeutic support to maximize potential and improve daily functioning throughout life.",

      featureColor: "#059669",

      featureLink: "/conditions/developmental-disorders"

    },

    {

      featureIcon: Wrench,

      featureTitle: "Traumatic Brain Injury",

      featureDescription: "Traumatic brain injury results from head trauma causing nerve damage. Common causes include falls, accidents, sports injuries, and combat wounds. TBI affects cognitive, physical, and emotional functioning, requiring emergency care, rehabilitation, and long-term support.",

      featureColor: "#178740",

      featureLink: "/conditions/traumatic-brain-injury"

    },

    {

      featureIcon: Brain,

      featureTitle: "Intellectual Disability",

      featureDescription: "Lifelong neurodevelopmental condition affecting reasoning, learning, and problem-solving. Requires simplified interfaces, specialized support tools, and comprehensive educational accommodations for optimal development and independence.",

      featureColor: "#DB2777",

      featureLink: "/conditions/intellectual-disability"

    },

    {

      featureIcon: FileText,

      featureTitle: "Specific Learning Disorders",

      featureDescription: "Dyslexia, Dyscalculia, Dysgraphia. Tailors educational resources, assistive technologies, and personalized teaching strategies for specific learning challenges and academic success.",

      featureColor: "#9333EA",

      featureLink: "/conditions/specific-learning-disorders"

    },

    {

      featureIcon: Target,

      featureTitle: "Executive Functioning Disorders",

      featureDescription: "Difficulty with planning, organizing, time management, and decision-making. Integrates with PriHub reminders, notes, and task management tools for improved daily functioning and independence.",

      featureColor: "#4F46E5",

      featureLink: "/conditions/executive-functioning-disorders"

    },

    {

      featureIcon: Users,

      featureTitle: "Social Communication Disorder",

      featureDescription: "Affects pragmatic language use and social interaction skills. Complementary to autism spectrum; provides social support features and communication strategies for better integration.",

      featureColor: "#0891B2",

      featureLink: "/conditions/social-communication-disorder"

    },

    {

      featureIcon: Heart,

      featureTitle: "Anxiety & Emotional Disorders",

      featureDescription: "Anxiety, depression, or stress significantly impact memory, attention, and learning. Supports PriHub's chatbot guidance, emotional support, and mental wellness resources for comprehensive care.",

      featureColor: "#BE123C",

      featureLink: "/conditions/anxiety-emotional-disorders"

    }

  ];



  // Enhanced features data with additional properties for grid layout

  const enhancedFeatures = allFeatures.map((feature, index) => ({

    id: index + 1,

    title: feature.featureTitle,

    description: feature.featureDescription,

    category: getCategory(feature.featureTitle),

    icon: feature.featureIcon,

    color: feature.featureColor,

    features: getFeaturesList(feature.featureTitle),

    rating: 4.5 + Math.random() * 0.5,

    downloads: Math.floor(Math.random() * 10 + 5) + 'K',

    action: 'Learn More',

    link: feature.featureLink,

    badge: getBadge(feature.featureTitle)

  }));



  // Filter features

  const filteredFeatures = enhancedFeatures.filter(feature => {

    const matchesSearch = feature.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||

                         feature.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase());

    const matchesCategory = activeSection === 'all' || feature.category === activeSection;

    return matchesSearch && matchesCategory;

  });



  const getColorClasses = (color) => {
    const colors = {
      '#16808D': 'from-[#16808D] to-[#0F766E]',  // Learning Disabilities - Unique teal
      '#22C55E': 'from-[#22C55E] to-[#16A34A]',  // ADHD
      '#1B9AAA': 'from-[#1B9AAA] to-[#0E7490]',  // Autism Spectrum - Unique cyan
      '#7C3AED': 'from-[#7C3AED] to-[#6D28D9]',  // Epilepsy & Cerebral Palsy - Unique purple
      '#142C52': 'from-[#142C52] to-[#1E293B]',  // Memory Disorders - Unique dark indigo
      '#059669': 'from-[#059669] to-[#047857]',  // Developmental Disorders
      '#DC2626': 'from-[#DC2626] to-[#B91C1C]',  // Dementia - Unique dark red
      '#4C97A8': 'from-[#4C97A8] to-[#0F766E]',  // Neurocognitive Disorders - Unique teal (different from Learning)
      '#178740': 'from-[#178740] to-[#14532D]',  // Traumatic Brain Injury - Unique dark green
      '#DB2777': 'from-[#DB2777] to-[#BE185D]',  // Intellectual Disability - Unique dark pink
      '#F97316': 'from-[#F97316] to-[#C2410C]',  // Speech & Language Disorders - Unique dark orange
      '#9333EA': 'from-[#9333EA] to-[#7E22CE]',  // Specific Learning Disorders - Unique dark violet
      '#4F46E5': 'from-[#4F46E5] to-[#4338CA]',  // Executive Functioning Disorders - Unique dark indigo
      '#BE123C': 'from-[#BE123C] to-[#9F1239]',  // Anxiety & Emotional Disorders - Unique dark rose
      '#0891B2': 'from-[#0891B2] to-[#0C4A6E]',  // Social Communication Disorder - Unique dark cyan
      
      // Resource Grids - Unique Colors for Each
      '#FF6B35': 'from-[#FF6B35] to-[#F4531A]',  // User Guide - Unique coral orange
      '#4ECDC4': 'from-[#4ECDC4] to-[#3BA99C]',  // FAQ - Unique turquoise
      '#9B59B6': 'from-[#9B59B6] to-[#8E44AD]',  // Video Tutorials - Unique purple
      '#3498DB': 'from-[#3498DB] to-[#2980B9]',  // Digital Inclusion Platform - Unique sky blue
      '#E74C3C': 'from-[#E74C3C] to-[#C0392B]',  // AI Smart Assistant - Unique bright red
      '#2ECC71': 'from-[#2ECC71] to-[#27AE60]',  // Gamification & Cognitive Training - Unique emerald
      '#F39C12': 'from-[#F39C12] to-[#E67E22]',  // One-to-One Counselling - Unique amber
      '#1ABC9C': 'from-[#1ABC9C] to-[#16A085]',  // Therapy Sessions - Unique teal green
      '#E67E22': 'from-[#E67E22] to-[#D35400]',  // Support Groups - Unique carrot orange
      '#34495E': 'from-[#34495E] to-[#2C3E50]',  // Educational Support - Unique dark slate
      '#16A085': 'from-[#16A085] to-[#138D75]',  // NGO Partnerships - Unique sea green
      '#27AE60': 'from-[#27AE60] to-[#229954]',  // Educational Institution Partnerships - Unique forest green
      '#8E44AD': 'from-[#8E44AD] to-[#7D3C98]',  // Community Forum - Unique medium purple
      '#C0392B': 'from-[#C0392B] to-[#A93226]',  // Inclusive Communication Tools - Unique dark red
      '#D35400': 'from-[#D35400] to-[#BA4A00]',  // Support Center - Unique pumpkin orange
      '#2980B9': 'from-[#2980B9] to-[#21618C]',  // Visual Impairment Support - Unique ocean blue
      '#21618C': 'from-[#21618C] to-[#1B4F72]',  // Accessibility Compliance Suite - Unique navy blue
      '#5DADE2': 'from-[#5DADE2] to-[#3498DB]',  // Accessibility Tools Hub - Unique light sky blue
      '#AF7AC5': 'from-[#AF7AC5] to-[#9B59B6]',  // API Documentation - Unique lavender
      '#48C9B0': 'from-[#48C9B0] to-[#16A085]',  // Screen Reader Integration - Unique mint
      '#F8C471': 'from-[#F8C471] to-[#F39C12]',  // Visual Accessibility Suite - Unique peach
      '#82E0AA': 'from-[#82E0AA] to-[#58D68D]',  // Cognitive Navigation Assistant - Unique light green
      '#F1948A': 'from-[#F1948A] to-[#EC7063]',  // Accessibility Testing Tools - Unique salmon
      '#BB8FCE': 'from-[#BB8FCE] to-[#A569BD]',  // Inclusive Design Guidelines - Unique light purple
      '#85C1E2': 'from-[#85C1E2] to-[#5DADE2]',  // Community Support Network - Unique baby blue
      '#A9DFBF': 'from-[#A9DFBF] to-[#7DCEA0]',  // Accessibility Training Programs - Unique sage green
      '#FAD7A0': 'from-[#FAD7A0] to-[#F8C471]',  // Assistive Technology Hub - Unique light peach
      '#D5A6BD': 'from-[#D5A6BD] to-[#C39BD3]',  // Cognitive Accessibility Resources - Unique rose pink
      '#AED6F1': 'from-[#AED6F1] to-[#85C1E2]',  // Accessibility Research Hub - Unique powder blue
      '#ABEBC6': 'from-[#ABEBC6] to-[#82E0AA]',  // Community Engagement Tools - Unique pale green
    };

    return colors[color] || 'from-[#16808D] to-[#0F766E]';
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

        

        {/* Features-Themed Elements */}

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

                  <Brain className="h-10 w-10 text-white transform transition-all duration-300 group-hover:scale-105" />

                </div>

                {/* Additional hover effect ring */}

                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>

                {/* Floating animation when not dragging */}

                <div className={`absolute inset-0 rounded-full ${isDragging ? '' : 'animate-bounce'}`} style={{ animationDuration: '3s' }}></div>

              </div>

              <h1 className="text-4xl font-bold">

                <span style={{ color: '#16808D' }}>Cognitive Support</span>

                <span className={`transition-colors duration-300 ${

                  isDarkMode ? 'text-white' : ''

                }`} style={{ color: isDarkMode ? '#ffffff' : '#000000' }}> Conditions</span>

              </h1>

            </div>

          </div>

          <p className={`text-xl max-w-3xl mx-auto italic transition-colors duration-300 ${

            isDarkMode ? 'text-gray-300' : 'text-gray-600'

          }`}>

            Cognitive support systems for learning disabilities, developmental disorders, memory impairments, and accessibility challenges. We provide innovative solutions, expert guidance, and resources to empower individuals and families with equal access and independence opportunities.

          </p>

        </div>



        {/* Categories and Search Bar */}

        <div className="mb-8">

          {/* First Row: Search + All Features */}

          <div className="flex items-center gap-4 mb-4">

            {/* Search Bar */}

            <div className={`flex-1 p-3.5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full`}>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4.5 w-4.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search cognitive conditions, learning disabilities, and support features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-base`}
                />
              </div>
            </div>

            {/* All Features Category */}

            <div 

              onClick={() => setActiveSection('all')}

              className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer h-full ${

                activeSection === 'all' ? 'ring-2 ring-[#16808D]' : ''

              } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}

            >

              <Brain className="h-8 w-8 mr-2" style={{ color: '#16808D' }} />

              <h2 className={`text-base font-bold transition-colors duration-300 ${

                isDarkMode ? 'text-white' : 'text-gray-900'

              }`}>All Cognitive Conditions</h2>

            </div>

          </div>



          {/* Second Row: 5 Categories */}

          <div className="grid grid-cols-5 gap-4 mb-12">

            {categories.slice(1).map((category) => {

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



        {/* Category Mission Content */}

        <div className="mb-12">

          {activeSection === 'all' && (

            <div className="text-center py-12 relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-r from-[#16808D]/10 to-purple-500/10 animate-pulse"></div>

              <div className="relative z-10">

                <Brain className="h-16 w-16 text-[#16808D] mx-auto mb-4 animate-bounce" />

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#16808D] to-purple-600 bg-clip-text text-transparent">

                  <span style={{ color: '#16808D' }}>All Cognitive Disabilities</span>

                </h2>

                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">

                  Empowering individuals with cognitive challenges through innovative technology, personalized support systems, and compassionate care. We believe in creating accessible solutions that enable independence, foster growth, and build a more inclusive world for everyone.

                </p>

                <div className="flex flex-wrap justify-center gap-4">

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>

                    Inclusive Society

                  </div>

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-red-100 text-red-700 border border-red-200'}`}>

                    Comprehensive Support

                  </div>

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>

                    Essential Resources

                  </div>

                </div>

              </div>

            </div>

          )}


          

          {activeSection === 'learning' && (

            <div className="text-center py-12 relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>

              <div className="relative z-10">

                <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" />

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">

                  <span style={{ color: '#8B5CF6' }}>Learning Disabilities</span>

                </h2>

                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">

                  Learning disabilities affect individuals process information, read, write, and solve mathematical problems. We provide specialized educational support, adaptive technologies, and personalized learning strategies to help individuals overcome challenges and achieve academic success.

                </p>

                <div className="flex flex-wrap justify-center gap-4">

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>

                    Educational Support

                  </div>

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>

                    Adaptive Technologies

                  </div>

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>

                    Personalized Learning

                  </div>

                </div>

              </div>

            </div>

          )}


          

          {activeSection === 'neurological' && (

            <div className="text-center py-12 relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 animate-pulse"></div>

              <div className="relative z-10">

                <Target className="h-16 w-16 text-indigo-600 mx-auto mb-4 animate-bounce" />

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">

                  <span style={{ color: '#6366F1' }}>Neurological Conditions</span>

                </h2>

                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">

                  Neurological conditions affect brain function, memory, and cognitive processes. We offer comprehensive medical management, cognitive rehabilitation, and support for conditions like epilepsy, memory disorders, and traumatic brain injuries with compassionate care.

                </p>

                <div className="flex flex-wrap justify-center gap-4">

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}`}>

                    Medical Management

                  </div>

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>

                    Cognitive Rehabilitation

                  </div>

                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>

                    Compassionate Care

                  </div>

                </div>

              </div>

            </div>

          )}


          {activeSection === 'developmental' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Activity className="h-16 w-16 text-green-600 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  <span style={{ color: '#10B981' }}>Developmental Disorders</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Developmental disorders significantly impact brain development, affecting language, social skills, and learning abilities. We provide comprehensive early intervention services, specialized education programs, and therapeutic support for conditions like ADHD and autism spectrum disorders.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Early Intervention
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Specialized Education
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Therapeutic Support
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeSection === 'cognitive' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Clock className="h-16 w-16 text-orange-600 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  <span style={{ color: '#F97316' }}>Cognitive Conditions</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Cognitive conditions profoundly affect thinking, memory, and executive functioning. We specialize in supporting individuals with dementia, executive functioning disorders, and other cognitive impairments through comprehensive personalized care and dedicated support for families.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-orange-900/50 text-orange-300 border border-orange-700' : 'bg-orange-100 text-orange-700 border border-orange-200'}`}>
                    Cognitive Therapy
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Daily Living Assistance
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Family Support
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeSection === 'emotional' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Heart className="h-16 w-16 text-rose-600 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  <span style={{ color: '#F43F5E' }}>Mental Health</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Mental health conditions significantly impact emotional well-being, cognitive function, and daily living. We provide comprehensive compassionate support for anxiety, depression, stress, and related challenges through professional expert care and easily accessible resources.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-rose-900/50 text-rose-300 border border-rose-700' : 'bg-rose-100 text-rose-700 border border-rose-200'}`}>
                    Emotional Support
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Stress Management
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Mental Wellness
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>



        {/* Features Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {filteredFeatures.map((feature) => {

            const Icon = feature.icon;

            return (

              <div

                key={feature.id}

                onMouseEnter={() => setHoveredCard(feature.id)}

                onMouseLeave={() => setHoveredCard(null)}

                className={`relative group ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}

                style={{

                  transform: hoveredCard === feature.id ? 'translateY(-8px)' : 'translateY(0)',

                }}

              >

                {/* Card Header */}

                <div className={`p-6 bg-gradient-to-r ${getColorClasses(feature.color)} text-white relative overflow-hidden`}>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>

                  <div className="relative z-10">

                    <div className="flex items-center justify-between mb-4">

                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">

                        <Icon className="h-8 w-8" />

                      </div>

                      {feature.badge && (

                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">

                          {feature.badge}

                        </span>

                      )}

                    </div>

                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>

                    <p className="text-white/90 text-sm line-clamp-3">{feature.description}</p>

                  </div>

                </div>



                {/* Card Body */}

                <div className="p-6">

                  {/* Features */}

                  <div className="mb-4">

                    <div className="flex flex-wrap gap-2">

                      {feature.features.slice(0, 3).map((featureItem, index) => (

                        <span

                          key={index}

                          className={`px-3 py-1 rounded-full text-xs font-medium ${

                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'

                          }`}

                        >

                          {featureItem}

                        </span>

                      ))}

                      {feature.features.length > 3 && (

                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>

                          +{feature.features.length - 3} more

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

                          {feature.rating.toFixed(1)}

                        </span>

                      </div>

                      <div className="flex items-center gap-1">

                        <Download className="h-4 w-4 text-blue-500" />

                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                          {feature.downloads}

                        </span>

                      </div>

                    </div>

                  </div>



                  {/* Action Button */}

                  <Link to={feature.link}>

                    <button className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-gradient-to-r ${getColorClasses(feature.color)} text-white hover:shadow-lg transform hover:scale-105`}>

                      {feature.action}

                      <ChevronRightIcon className="h-4 w-4" />

                    </button>

                  </Link>

                </div>



                {/* Hover Effect Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              </div>

            );

          })}

        </div>



        {/* Inspirational Quotes Section */}
        <div className="mb-12">
          {/* Quote for All Cognitive Disabilities */}
          {activeSection === 'all' && (
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-teal-600 pl-6 py-4">
                "Understanding cognitive diversity is not about fixing what's broken—it's about celebrating the unique ways different minds perceive, process, and contribute to our world."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Every cognitive journey is unique, and within these differences lie extraordinary strengths, innovative perspectives, and untapped potential that enrich our collective human experience.
              </p>
            </div>
          )}

          {/* Quote for Learning Disabilities */}
          {activeSection === 'learning' && (
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-purple-600 pl-6 py-4">
                "Learning differently is not a disability—it's a different ability. Every mind has its own unique way of understanding, processing, and creating knowledge that deserves to be nurtured and celebrated."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                With the right support, tools, and understanding, individuals with learning differences can unlock their full potential and transform challenges into unique strengths.
              </p>
            </div>
          )}

          {/* Quote for Neurological Conditions */}
          {activeSection === 'neurological' && (
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-indigo-600 pl-6 py-4">
                "The brain's remarkable ability to adapt and heal reminds us that neurological challenges are not endpoints, but journeys of resilience, recovery, and rediscovery of inner strength."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Through advanced medical care, therapeutic interventions, and unwavering support, individuals with neurological conditions can find new pathways to healing and meaningful living.
              </p>
            </div>
          )}

          {/* Quote for Developmental Disorders */}
          {activeSection === 'developmental' && (
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-green-600 pl-6 py-4">
                "Every developmental journey unfolds at its own perfect pace. What may seem like a delay is often the foundation for unique strengths, creative thinking, and extraordinary perspectives that shape our world in beautiful ways."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Early support and understanding create pathways for growth, allowing individuals with developmental differences to blossom and share their remarkable gifts with the world.
              </p>
            </div>
          )}

          {/* Quote for Cognitive Conditions */}
          {activeSection === 'cognitive' && (
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-orange-600 pl-6 py-4">
                "Memory and cognition are not lost, but sometimes hidden in different pathways. With patience, support, and innovative approaches, we can help rediscover the treasures that remain within every mind."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Cognitive challenges remind us that thinking comes in many forms, and with compassionate support, every individual can continue to grow, learn, and contribute meaningfully.
              </p>
            </div>
          )}

          {/* Quote for Mental Health */}
          {activeSection === 'emotional' && (
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-rose-600 pl-6 py-4">
                "Mental health is not about being happy all the time—it's about having the courage to face life's challenges, the strength to seek help when needed, and the wisdom to know that healing is always possible."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Every emotional journey is valid, and with proper support, understanding, and self-compassion, individuals can find balance, resilience, and renewed hope for the future.
              </p>
            </div>
          )}
        </div>



        {/* Back Button */}

        <div className="text-center">

          <Link to="/">

            <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${

              isDarkMode 

                ? 'bg-gray-800 text-white hover:bg-gray-700' 

                : 'bg-white text-gray-900 hover:bg-gray-50'

            } shadow-lg hover:shadow-xl`}>

              <ArrowLeft className="h-5 w-5" />

              Back to Home

            </button>

          </Link>

        </div>

      </div>

    </div>

  );

};



export default AllFeatures;

