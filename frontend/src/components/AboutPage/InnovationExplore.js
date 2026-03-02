import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, Award, TrendingUp, Target, Zap, Globe, Shield, Star, ChevronRight, Clock, MapPin, ExternalLink, Rocket, Brain, Cpu, Lightbulb, BarChart, Filter, Search, ChevronDown, ChevronUp, Palette, ArrowUpDown, MessageCircle, X, FileText, Tag } from 'lucide-react';

const InnovationExplore = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  
  // Advanced Timeline States
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('chronological');
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setIsDarkMode(theme === 'dark');
    };

    checkTheme();
    window.addEventListener('storage', checkTheme);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkTheme);

    return () => {
      window.removeEventListener('storage', checkTheme);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkTheme);
    };
  }, []);

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Advanced Timeline Helper Functions
  const getFilteredMilestones = () => {
    let filtered = milestones;
    
    // Filter by category
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(item => item.category === selectedFilter);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.detail.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by date range
    if (dateRange.start) {
      filtered = filtered.filter(item => item.date >= dateRange.start);
    }
    if (dateRange.end) {
      filtered = filtered.filter(item => item.date <= dateRange.end);
    }
    
    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(item => selectedColors.includes(item.color));
    }
    
    // Sort
    switch (sortBy) {
      case 'reverse-chronological':
        filtered = [...filtered].reverse();
        break;
      case 'alphabetical':
        filtered = filtered.sort((a, b) => a.event.localeCompare(b.event));
        break;
      case 'progress':
        filtered = filtered.sort((a, b) => b.progress - a.progress);
        break;
      default:
        // chronological - already in order
        break;
    }
    
    return filtered;
  };

  const handleShareViaGmail = (item) => {
    const subject = `🚀 Exciting Milestone: ${item.event}`;
    const body = `Hi there!\n\nI wanted to share this incredible milestone from our PriHub journey:\n\n📅 ${item.month}\n🎯 ${item.event}\n\n📝 Details:\n${item.detail}\n\n📊 Impact: ${item.impact}\n🏷️ Category: ${item.category}\n✅ Progress: ${item.progress}%\n\nThis represents our commitment to supporting cognitive disabilities through innovative technology.\n\nBest regards\n[Your Name]\n\n---\n🌐 PriHub - Support for Cognitive Disabilities\n♿ Accessibility First • 🤖 AI-Powered • 🌍 Global Impact`;
    
    // Open Gmail in new tab with pre-composed email
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleViewDetails = (item) => {
    setSelectedAchievement(item);
  };

  // Advanced Timeline Milestones Data
  const milestones = [
    { 
      date: "2022-03-15", 
      event: "Advanced AI Integration", 
      detail: "Deployed sophisticated AI algorithms with 85% accuracy for personalized cognitive support, revolutionizing user experience",
      side: "left",
      color: "red",
      icon: "🤖",
      impact: "High",
      category: "technology",
      progress: 90,
      month: "Q1 2022"
    },
    { 
      date: "2022-06-20", 
      event: "Global Platform Launch", 
      detail: "Expanded to 50+ countries with multilingual support and cultural adaptation, breaking geographical barriers",
      side: "right", 
      color: "green",
      icon: "🌍",
      impact: "High",
      category: "expansion",
      progress: 95,
      month: "Q2 2022"
    },
    { 
      date: "2022-09-10", 
      event: "Mobile App Release", 
      detail: "Launched iOS and Android apps with offline capabilities reaching 100K+ downloads in first month",
      side: "left",
      color: "blue",
      icon: "📱",
      impact: "Medium",
      category: "development",
      progress: 85,
      month: "Q3 2022"
    },
    { 
      date: "2022-12-05", 
      event: "Research Partnership", 
      detail: "Collaboration with 10 leading cognitive research institutions worldwide, advancing evidence-based practices",
      side: "right",
      color: "yellow",
      icon: "🎓",
      impact: "High",
      category: "research",
      progress: 92,
      month: "Q4 2022"
    },
    { 
      date: "2023-03-25", 
      event: "AI Model Upgrade", 
      detail: "Next-generation AI models achieving 92% accuracy in cognitive pattern recognition and prediction",
      side: "left",
      color: "orange",
      icon: "🧠",
      impact: "High",
      category: "technology",
      progress: 88,
      month: "Q1 2023"
    },
    { 
      date: "2023-06-15", 
      event: "Accessibility Certification", 
      detail: "Achieved WCAG 2.1 AAA compliance certification across all platforms, setting industry standards",
      side: "right",
      color: "purple",
      icon: "♿",
      impact: "High",
      category: "development",
      progress: 95,
      month: "Q2 2023"
    },
    { 
      date: "2023-09-30", 
      event: "Innovation Award", 
      detail: "Received international recognition for breakthrough cognitive accessibility technology at Global Tech Summit",
      side: "left",
      color: "pink",
      icon: "🏆",
      impact: "Medium",
      category: "research",
      progress: 80,
      month: "Q3 2023"
    },
    { 
      date: "2023-12-20", 
      event: "Enterprise Solutions", 
      detail: "Launched enterprise-grade cognitive support solutions for Fortune 500 companies and organizations",
      side: "right",
      color: "indigo",
      icon: "🏢",
      impact: "High",
      category: "development",
      progress: 87,
      month: "Q4 2023"
    },
    { 
      date: "2024-03-10", 
      event: "Neural Interface Research", 
      detail: "Began pioneering research in brain-computer interface integration for advanced cognitive support",
      side: "left",
      color: "teal",
      icon: "🧬",
      impact: "Medium",
      category: "research",
      progress: 75,
      month: "Q1 2024"
    },
    { 
      date: "2024-06-05", 
      event: "Real-time Adaptation", 
      detail: "Implemented real-time cognitive state adaptation with sub-second response times, enhancing user experience",
      side: "right",
      color: "gray",
      icon: "⚡",
      impact: "High",
      category: "technology",
      progress: 93,
      month: "Q2 2024"
    },
    { 
      date: "2024-09-15", 
      event: "Predictive Analytics", 
      detail: "Launched predictive cognitive support system with 95% accuracy, anticipating user needs proactively",
      side: "left",
      color: "cyan",
      icon: "📊",
      impact: "High",
      category: "development",
      progress: 90,
      month: "Q3 2024"
    },
    { 
      date: "2024-12-01", 
      event: "Global Expansion", 
      detail: "Reached 1M+ active users across 100+ countries worldwide, becoming market leader in cognitive support",
      side: "right",
      color: "emerald",
      icon: "🚀",
      impact: "High",
      category: "expansion",
      progress: 96,
      month: "Q4 2024"
    },
    { 
      date: "2025-03-20", 
      event: "Quantum Computing Integration", 
      detail: "Integrated quantum computing algorithms for complex cognitive pattern analysis, industry first",
      side: "left",
      color: "rose",
      icon: "⚛️",
      impact: "Medium",
      category: "research",
      progress: 70,
      month: "Q1 2025"
    },
    { 
      date: "2025-06-10", 
      event: "Multimodal Learning", 
      detail: "Deployed advanced multimodal learning combining visual, auditory, and kinesthetic approaches",
      side: "right",
      color: "amber",
      icon: "🎯",
      impact: "High",
      category: "development",
      progress: 85,
      month: "Q2 2025"
    },
    { 
      date: "2025-09-25", 
      event: "AI Personalization Breakthrough", 
      detail: "Achieved 99% accuracy in hyper-personalized cognitive support recommendations, setting new benchmarks",
      side: "left",
      color: "lime",
      icon: "🎖️",
      impact: "High",
      category: "technology",
      progress: 98,
      month: "Q3 2025"
    },
    { 
      date: "2025-12-15", 
      event: "Healthcare Integration", 
      detail: "Integrated with major healthcare systems for comprehensive cognitive care and medical support",
      side: "right",
      color: "red",
      icon: "🏥",
      impact: "High",
      category: "development",
      progress: 88,
      month: "Q4 2025"
    },
    { 
      date: "2026-03-01", 
      event: "Autonomous Support System", 
      detail: "Launched fully autonomous cognitive support system with self-learning capabilities and emotional intelligence",
      side: "left",
      color: "green",
      icon: "🌟",
      impact: "High",
      category: "technology",
      progress: 92,
      month: "Q1 2026"
    }
  ];

  const technologies = [
    { name: "TensorFlow", level: 95, category: "AI Framework", icon: "🧠", description: "Advanced machine learning for cognitive analysis" },
    { name: "React Native", level: 90, category: "Mobile", icon: "📱", description: "Cross-platform mobile development" },
    { name: "Python", level: 88, category: "Backend", icon: "🐍", description: "AI and data processing backend" },
    { name: "Firebase", level: 92, category: "Database", icon: "🔥", description: "Real-time data and authentication" },
    { name: "Node.js", level: 85, category: "Server", icon: "🟢", description: "Scalable server infrastructure" },
    { name: "Docker", level: 80, category: "DevOps", icon: "🐳", description: "Containerized deployment" },
    { name: "AWS", level: 87, category: "Cloud", icon: "☁️", description: "Cloud infrastructure and scaling" },
    { name: "GraphQL", level: 82, category: "API", icon: "🔗", description: "Efficient data querying" }
  ];

  const metrics = [
    { label: "AI Accuracy", value: "95%", icon: "🎯", trend: "+12%" },
    { label: "User Satisfaction", value: "4.9/5", icon: "⭐", trend: "+8%" },
    { label: "Response Time", value: "<1s", icon: "⚡", trend: "+25%" },
    { label: "Global Reach", value: "50+", icon: "🌍", trend: "+40%" },
    { label: "Research Papers", value: "25+", icon: "📚", trend: "+60%" },
    { label: "Patents Filed", value: "8", icon: "💡", trend: "+100%" },
    { label: "API Calls", value: "1M+", icon: "📊", trend: "+200%" },
    { label: "Uptime", value: "99.9%", icon: "🔄", trend: "+5%" }
  ];

  const achievements = [
    {
      id: 1,
      title: "Advanced AI Integration",
      description: "Leveraging cutting-edge technology and evidence-based practices, we developed innovative solutions that adapt to individual needs. Our commitment to continuous improvement and research ensures we remain at the forefront of cognitive support services.",
      date: "January 2022",
      impact: "Technology Breakthrough",
      icon: "🤖",
      color: "indigo"
    },
    {
      id: 2,
      title: "Global Platform Launch",
      description: "Expanded services globally with multilingual support and cultural adaptation, making cognitive support accessible to diverse communities worldwide.",
      date: "June 2022",
      impact: "Global Expansion",
      icon: "🌍",
      color: "blue"
    },
    {
      id: 3,
      title: "Research Partnership",
      description: "Established strategic collaboration with leading cognitive research institutions to advance evidence-based practices and innovation.",
      date: "October 2022",
      impact: "Academic Excellence",
      icon: "🎓",
      color: "purple"
    },
    {
      id: 4,
      title: "Innovation Award",
      description: "Received international recognition for innovation in cognitive accessibility, validating our approach and impact on the community.",
      date: "December 2023",
      impact: "Industry Recognition",
      icon: "🏆",
      color: "indigo"
    }
  ];

  const handleBackToStory = () => {
    window.location.href = '/about#story';
  };

  const innovations = [
    {
      title: "Personalized AI Assistant",
      description: "AI-powered assistant that adapts to individual cognitive needs and learning patterns",
      status: "Active",
      users: "5,000+",
      accuracy: "95%"
    },
    {
      title: "Cognitive Analytics",
      description: "Advanced analytics platform for tracking cognitive progress and support effectiveness",
      status: "Active",
      users: "3,000+",
      accuracy: "92%"
    },
    {
      title: "Adaptive Interface",
      description: "Dynamic interface that adjusts based on user cognitive load and preferences",
      status: "Beta",
      users: "1,000+",
      accuracy: "88%"
    },
    {
      title: "Predictive Support",
      description: "Predictive system that anticipates cognitive support needs before they arise",
      status: "Development",
      users: "500+",
      accuracy: "85%"
    }
  ];

  const researchAreas = [
    {
      area: "Cognitive Pattern Recognition",
      description: "Advanced algorithms for understanding individual cognitive patterns",
      progress: 85,
      team: "12 researchers"
    },
    {
      area: "Neural Interface Integration",
      description: "Exploring brain-computer interface for cognitive support",
      progress: 60,
      team: "8 researchers"
    },
    {
      area: "Multimodal Learning",
      description: "Combining visual, auditory, and kinesthetic learning approaches",
      progress: 75,
      team: "10 researchers"
    },
    {
      area: "Real-time Adaptation",
      description: "Systems that adapt in real-time to cognitive state changes",
      progress: 70,
      team: "15 researchers"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-4xl font-bold mb-4">Innovation & Growth (2022-2026)</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Five years of exponential growth and groundbreaking innovations in cognitive support technology
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'achievements', 'technologies', 'metrics', 'innovations', 'research'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Rocket className="w-6 h-6 mr-3 text-indigo-600" />
                Innovation Overview
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Section Header with Blue Gradient Shadow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl blur-xl"></div>
                    <h3 className="relative text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center mr-2">
                        <Lightbulb className="w-4 h-4 text-white" />
                      </div>
                      Cutting-Edge Technology
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-black dark:text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg mb-4">
                      Leveraging cutting-edge technology and evidence-based practices, we developed innovative solutions that adapt to individual needs. Our commitment to continuous improvement and ensures we remain at the forefront of cognitive support services. This technological revolution began when our research team identified critical gaps in existing cognitive support systems and recognized the transformative potential of artificial intelligence and machine learning in addressing these challenges.
                    </p>
                    <p className="text-black dark:text-gray-300 leading-relaxed border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/10 rounded-r-lg">
                      The innovation phase has been marked by breakthrough AI implementations, global expansion, and recognition as leaders in cognitive accessibility technology. Through extensive collaboration with neurodiversity advocates, cognitive specialists, and individuals with lived experiences, we've developed a comprehensive ecosystem that integrates advanced algorithms, personalized learning pathways, and real-time adaptation mechanisms. Our journey has involved countless iterations, user testing sessions, and breakthrough moments that have shaped our current platform into a beacon of innovation in cognitive support services.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Section Header with Green Gradient Shadow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl blur-xl"></div>
                    <h3 className="relative text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center mr-2">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      Innovation Pillars
                    </h3>
                  </div>
                  <div className="space-y-3">
                      {[
                        { 
                          title: "Advanced AI integration", 
                          description: "Machine learning algorithms for personalized support",
                          icon: "🤖",
                          color: "blue"
                        },
                        { 
                          title: "Personalized cognitive support", 
                          description: "Tailored solutions for individual needs",
                          icon: "🧠",
                          color: "purple"
                        },
                        { 
                          title: "Real-time adaptation systems", 
                          description: "Dynamic response to user requirements",
                          icon: "⚡",
                          color: "green"
                        },
                        { 
                          title: "Predictive assistance technology", 
                          description: "Anticipatory support mechanisms",
                          icon: "🔮",
                          color: "teal"
                        },
                        { 
                          title: "Global accessibility standards", 
                          description: "Worldwide compliance and reach",
                          icon: "🌍",
                          color: "orange"
                        }
                      ].map((item, index) => (
                        <div key={index} className={`group p-4 bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-900/20 dark:to-${item.color}-800/30 rounded-xl border border-${item.color}-200 dark:border-${item.color}-700 hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer`}>
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <div className="flex-1">
                              <h4 className={`font-semibold text-${item.color}-700 dark:text-${item.color}-300 mb-1 group-hover:text-${item.color}-800 dark:group-hover:text-${item.color}-200 transition-colors`}>
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/30 to-blue-50/30 dark:from-blue-900/5 dark:via-indigo-900/5 dark:to-blue-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    Advanced Growth Timeline (2022-2026)
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Live Progress</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              {/* Timeline Filters Section */}
              <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-8 border border-blue-200 dark:border-blue-700`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Filter className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced Filters</h3>
                    <button
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {showAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {getFilteredMilestones().length} of 17 milestones
                    </span>
                    {(selectedFilter !== 'all' || searchTerm || dateRange.start || dateRange.end || selectedColors.length > 0 || sortBy !== 'chronological') && (
                      <button
                        onClick={() => {
                          setSelectedFilter('all');
                          setSearchTerm('');
                          setDateRange({ start: '', end: '' });
                          setSelectedColors([]);
                          setSortBy('chronological');
                        }}
                        className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                      >
                        Clear All
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Basic Filters */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                  {/* Search Bar */}
                  <div className="relative w-full lg:w-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search milestones..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-full lg:w-56"
                    />
                  </div>
                  
                  {/* Category Filter Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'all' 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedFilter('research')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'research' 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Research
                    </button>
                    <button
                      onClick={() => setSelectedFilter('team')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'team' 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Team
                    </button>
                    <button
                      onClick={() => setSelectedFilter('development')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'development' 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Development
                    </button>
                    <button
                      onClick={() => setSelectedFilter('funding')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'funding' 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Funding
                    </button>
                  </div>
                </div>
                
                {/* Advanced Filters */}
                {showAdvanced && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Date Range Filter */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Date Range
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="date"
                            placeholder="Start Date"
                            value={dateRange.start}
                            onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                            className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                          />
                          <input
                            type="date"
                            placeholder="End Date"
                            value={dateRange.end}
                            onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                            className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                      
                      {/* Color Filter */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                          <Palette className="w-4 h-4 mr-2" />
                          Colors
                        </label>
                        <div className="flex items-center space-x-1">
                          {['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'indigo', 'teal', 'gray', 'cyan', 'emerald', 'rose', 'amber', 'lime'].map(color => (
                            <button
                              key={color}
                              onClick={() => {
                                setSelectedColors(prev => 
                                  prev.includes(color) 
                                    ? prev.filter(c => c !== color)
                                    : [...prev, color]
                                );
                              }}
                              className={`w-6 h-6 rounded-full border-2 transition-all ${
                                selectedColors.includes(color) 
                                  ? 'border-gray-900 dark:border-white scale-110' 
                                  : 'border-gray-300 dark:border-gray-600'
                              } ${
                                color === 'purple' ? 'bg-purple-500' :
                                color === 'blue' ? 'bg-blue-500' :
                                color === 'green' ? 'bg-green-500' :
                                color === 'orange' ? 'bg-orange-500' :
                                color === 'red' ? 'bg-red-500' :
                                color === 'pink' ? 'bg-pink-500' :
                                color === 'yellow' ? 'bg-yellow-500' :
                                color === 'indigo' ? 'bg-indigo-500' :
                                color === 'teal' ? 'bg-teal-500' :
                                color === 'gray' ? 'bg-gray-500' :
                                color === 'aur' ? 'bg-aur-500' :
                                color === 'cyan' ? 'bg-cyan-500' :
                                color === 'emerald' ? 'bg-emerald-500' :
                                color === 'rose' ? 'bg-rose-500' :
                                color === 'amber' ? 'bg-amber-500' :
                                color === 'lime' ? 'bg-lime-500' :
                                'bg-gray-500'
                              }`}
                              title={color.charAt(0).toUpperCase() + color.slice(1)}
                            >
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Sort Options */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                          <ArrowUpDown className="w-4 h-4 mr-2" />
                          Sort By
                        </label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                        >
                          <option value="chronological">Chronological</option>
                          <option value="reverse-chronological">Reverse Chronological</option>
                          <option value="alphabetical">Alphabetical</option>
                          <option value="progress">Progress</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Timeline Container */}
              <div className="relative space-y-6">
                {/* Vertical Timeline Line */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 transform -translate-x-1/2"></div>
                  
                  {/* Timeline Year Indicator */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-4">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                      2022-2026
                    </div>
                  </div>
                  
                  {getFilteredMilestones().map((item, index) => (
                    <div 
                      key={index} 
                      className={`relative flex items-center mb-8 ${
                        item.side === 'left' ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      {/* Timeline Point on Vertical Line */}
                      <div 
                        className={`absolute left-1/2 w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 transform -translate-x-1/2 z-10 flex items-center justify-center transition-all duration-300 cursor-pointer group ${
                          hoveredMilestone === index ? 'scale-125 shadow-xl' : 'scale-100 shadow-sm'
                        }`}
                        onMouseEnter={() => setHoveredMilestone(index)}
                        onMouseLeave={() => setHoveredMilestone(null)}
                        onClick={() => setSelectedAchievement(achievements[index])}
                      >
                        <div 
                          className={`absolute inset-0 rounded-full transition-all duration-300 ${
                            item.color === 'indigo' ? 'bg-gradient-to-br from-indigo-200 to-indigo-300 group-hover:from-indigo-300 group-hover:to-indigo-400' :
                            item.color === 'blue' ? 'bg-gradient-to-br from-blue-200 to-blue-300 group-hover:from-blue-300 group-hover:to-blue-400' :
                            item.color === 'green' ? 'bg-gradient-to-br from-green-200 to-green-300 group-hover:from-green-300 group-hover:to-green-400' :
                            item.color === 'purple' ? 'bg-gradient-to-br from-purple-200 to-purple-300 group-hover:from-purple-300 group-hover:to-purple-400' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-200 to-orange-300 group-hover:from-orange-300 group-hover:to-orange-400' :
                            item.color === 'red' ? 'bg-gradient-to-br from-red-200 to-red-300 group-hover:from-red-300 group-hover:to-red-400' :
                            item.color === 'pink' ? 'bg-gradient-to-br from-pink-200 to-pink-300 group-hover:from-pink-300 group-hover:to-pink-400' :
                            item.color === 'yellow' ? 'bg-gradient-to-br from-yellow-200 to-yellow-300 group-hover:from-yellow-300 group-hover:to-yellow-400' :
                            item.color === 'teal' ? 'bg-gradient-to-br from-teal-200 to-teal-300 group-hover:from-teal-300 group-hover:to-teal-400' :
                            item.color === 'gray' ? 'bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400' :
                            item.color === 'cyan' ? 'bg-gradient-to-br from-cyan-200 to-cyan-300 group-hover:from-cyan-300 group-hover:to-cyan-400' :
                            item.color === 'emerald' ? 'bg-gradient-to-br from-emerald-200 to-emerald-300 group-hover:from-emerald-300 group-hover:to-emerald-400' :
                            item.color === 'rose' ? 'bg-gradient-to-br from-rose-200 to-rose-300 group-hover:from-rose-300 group-hover:to-rose-400' :
                            item.color === 'amber' ? 'bg-gradient-to-br from-amber-200 to-amber-300 group-hover:from-amber-300 group-hover:to-amber-400' :
                            item.color === 'lime' ? 'bg-gradient-to-br from-lime-200 to-lime-300 group-hover:from-lime-300 group-hover:to-lime-400' :
                            'bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400'
                          }`}
                        ></div>
                        
                        {/* Icon with Animation */}
                        <span 
                          className={`relative text-sm text-white font-bold transition-all duration-300 ${
                            hoveredMilestone === index ? 'animate-pulse' : ''
                          }`}
                        >
                          {item.icon}
                        </span>
                        
                        {/* Hover Tooltip */}
                        {hoveredMilestone === index && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg shadow-lg whitespace-nowrap z-20">
                            <div className="font-semibold">{item.month}</div>
                            <div className="text-gray-300 dark:text-gray-600">{item.event}</div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                            </div>
                          </div>
                        )}
                        
                        {/* Ripple Effect */}
                        {hoveredMilestone === index && (
                          <div 
                            className={`absolute inset-0 rounded-full border-2 animate-ping ${
                              item.color === 'indigo' ? 'border-indigo-300' :
                              item.color === 'blue' ? 'border-blue-300' :
                              item.color === 'green' ? 'border-green-300' :
                              item.color === 'purple' ? 'border-purple-300' :
                              item.color === 'orange' ? 'border-orange-300' :
                              item.color === 'red' ? 'border-red-300' :
                              item.color === 'pink' ? 'border-pink-300' :
                              item.color === 'yellow' ? 'border-yellow-300' :
                              item.color === 'teal' ? 'border-teal-300' :
                              'border-gray-300'
                            }`}
                          ></div>
                        )}
                        
                        {/* Click Indicator */}
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      
                      {/* Content Card */}
                      <div 
                        className={`w-5/12 p-4 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-102 ${
                          hoveredMilestone === index ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-300' : 'bg-white dark:bg-gray-800 border-2 border-transparent'
                        } ${item.side === 'left' ? 'mr-4' : 'ml-4'}`}
                        onMouseEnter={() => setHoveredMilestone(index)}
                        onMouseLeave={() => setHoveredMilestone(null)}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                            hoveredMilestone === index ? 'scale-110 rotate-6' : 'scale-100'
                          } ${
                            item.color === 'indigo' ? 'bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-700' :
                            item.color === 'blue' ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' :
                            item.color === 'green' ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700' :
                            item.color === 'purple' ? 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700' :
                            item.color === 'red' ? 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800 dark:to-red-700' :
                            item.color === 'pink' ? 'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-700' :
                            item.color === 'yellow' ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700' :
                            item.color === 'teal' ? 'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-800 dark:to-teal-700' :
                            item.color === 'gray' ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700' :
                            item.color === 'cyan' ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-800 dark:to-cyan-700' :
                            item.color === 'emerald' ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-800 dark:to-emerald-700' :
                            item.color === 'rose' ? 'bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-800 dark:to-rose-700' :
                            item.color === 'amber' ? 'bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-800 dark:to-amber-700' :
                            item.color === 'lime' ? 'bg-gradient-to-br from-lime-100 to-lime-200 dark:from-lime-800 dark:to-lime-700' :
                            'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
                          }`}>
                            {item.icon}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-bold text-gray-900 dark:text-white text-lg">{item.month}</span>
                              {hoveredMilestone === index && (
                                <div className="flex items-center space-x-1 ml-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                  <span className="text-xs text-green-600 font-medium">Completed</span>
                                </div>
                              )}
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{item.event}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{item.detail}</p>
                            
                            {/* Interactive Progress Bar */}
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                              <div 
                                className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 h-full rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            
                            {/* Hover Details */}
                            {hoveredMilestone === index && (
                              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Calendar className="w-4 h-4 text-blue-600" />
                                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Timeline Details</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-1.5 h-1.5 bg-${item.color}-500 rounded-full`}></div>
                                    <span className="text-gray-700 dark:text-gray-300">Status: Complete</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-1.5 h-1.5 bg-green-500 rounded-full`}></div>
                                    <span className="text-gray-700 dark:text-gray-300">Impact: {item.impact}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-1.5 h-1.5 bg-blue-500 rounded-full`}></div>
                                    <span className="text-gray-700 dark:text-gray-300">Category: {item.category}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-1.5 h-1.5 bg-orange-500 rounded-full`}></div>
                                    <span className="text-gray-700 dark:text-gray-300">Progress: {item.progress}%</span>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* Action Buttons */}
                            <div className="flex items-center space-x-3 mt-4">
                              <button
                                onClick={() => handleShareViaGmail(item)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                  item.color === 'indigo' ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50' :
                                  item.color === 'blue' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50' :
                                  item.color === 'green' ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50' :
                                  item.color === 'purple' ? 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50' :
                                  item.color === 'orange' ? 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50' :
                                  item.color === 'red' ? 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50' :
                                  item.color === 'pink' ? 'bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50' :
                                  item.color === 'yellow' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-900/50' :
                                  item.color === 'teal' ? 'bg-teal-100 text-teal-700 hover:bg-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:hover:bg-teal-900/50' :
                                  'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:hover:bg-gray-900/50'
                                }`}
                              >
                                <MessageCircle className="w-4 h-4" />
                                <span>Share</span>
                              </button>
                              
                              <button
                                onClick={() => handleViewDetails(item)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                  item.color === 'indigo' ? 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600' :
                                  item.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' :
                                  item.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600' :
                                  item.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600' :
                                  item.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600' :
                                  item.color === 'red' ? 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600' :
                                  item.color === 'pink' ? 'bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600' :
                                  item.color === 'yellow' ? 'bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600' :
                                  item.color === 'teal' ? 'bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600' :
                                  'bg-gray-600 text-white hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600'
                                }`}
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>View Details</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Timeline Summary */}
              <div className="mt-16 p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-indigo-600" />
                  5-Year Advanced Growth Summary
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="text-2xl font-bold text-indigo-600 mb-2">17 Milestones</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Strategic achievements</p>
                    <div className="mt-3 text-xs text-green-600 font-semibold">+240% Growth</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">1M+ Users</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Global reach</p>
                    <div className="mt-3 text-xs text-green-600 font-semibold">+900% Growth</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-2xl font-bold text-green-600 mb-2">99% Accuracy</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI performance</p>
                    <div className="mt-3 text-xs text-green-600 font-semibold">+14% Improvement</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl mb-2">🌍</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">100+ Countries</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Global presence</p>
                    <div className="mt-3 text-xs text-green-600 font-semibold">+100% Expansion</div>
                  </div>
                </div>
                
                {/* Additional Metrics */}
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-800/50 dark:to-indigo-700/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-indigo-700 dark:text-indigo-300">50+ Research Papers</div>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">Academic contributions</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-800/50 dark:to-purple-700/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-purple-700 dark:text-purple-300">12 Patents Filed</div>
                    <p className="text-sm text-purple-600 dark:text-purple-400">Innovation protection</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-800/50 dark:to-green-700/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-green-700 dark:text-green-300">25+ Awards</div>
                    <p className="text-sm text-green-600 dark:text-green-400">Industry recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
                  onClick={() => setSelectedAchievement(achievement.id === selectedAchievement ? null : achievement.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {achievement.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.date}</span>
                        </div>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">
                          {achievement.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {selectedAchievement === achievement.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="w-5 h-5 text-indigo-600" />
                        <span className="font-semibold text-gray-900 dark:text-white">Achievement Details</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        This milestone represents our commitment to pushing the boundaries of what's possible in cognitive support technology and innovation.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === 'technologies' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Cpu className="w-6 h-6 mr-3 text-indigo-600" />
                Advanced Technology Stack
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h4>
                          <p className="text-sm text-gray-500">{tech.category}</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-indigo-600">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center`}>
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {metric.label}
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{metric.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Innovations Tab */}
        {activeTab === 'innovations' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Lightbulb className="w-6 h-6 mr-3 text-indigo-600" />
                Innovation Products
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {innovations.map((innovation, index) => (
                  <div key={index} className="p-6 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {innovation.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Status</div>
                        <div className={`text-sm font-medium ${
                          innovation.status === 'Active' 
                            ? 'text-green-600' 
                            : innovation.status === 'Beta' 
                              ? 'text-yellow-600' 
                              : 'text-gray-600'
                        }`}>
                          {innovation.status}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Users</div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {innovation.users}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Accuracy</div>
                        <div className="text-sm font-medium text-indigo-600">
                          {innovation.accuracy}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Brain className="w-6 h-6 mr-3 text-indigo-600" />
                Research Areas
              </h2>
              
              <div className="space-y-6">
                {researchAreas.map((area, index) => (
                  <div key={index} className="p-6 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {area.area}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium text-indigo-600">{area.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${area.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Research Team</span>
                        <span className="font-medium text-gray-900 dark:text-white">{area.team}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Timeline Milestone Details Modal */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedAchievement(null)}
        >
          <div 
            className={`rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
              selectedAchievement.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/70 border-4 border-purple-200 dark:border-purple-700' :
              selectedAchievement.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/70 border-4 border-blue-200 dark:border-blue-700' :
              selectedAchievement.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/70 border-4 border-green-200 dark:border-green-700' :
              selectedAchievement.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/50 dark:to-orange-800/70 border-4 border-orange-200 dark:border-orange-700' :
              selectedAchievement.color === 'red' ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/50 dark:to-red-800/70 border-4 border-red-200 dark:border-red-700' :
              selectedAchievement.color === 'pink' ? 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/50 dark:to-pink-800/70 border-4 border-pink-200 dark:border-pink-700' :
              selectedAchievement.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/50 dark:to-yellow-800/70 border-4 border-yellow-200 dark:border-yellow-700' :
              selectedAchievement.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/50 dark:to-indigo-800/70 border-4 border-indigo-200 dark:border-indigo-700' :
              selectedAchievement.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800/70 border-4 border-teal-200 dark:border-teal-700' :
              selectedAchievement.color === 'gray' ? 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/70 border-4 border-gray-200 dark:border-gray-700' :
              selectedAchievement.color === 'cyan' ? 'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/50 dark:to-cyan-800/70 border-4 border-cyan-200 dark:border-cyan-700' :
              selectedAchievement.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/50 dark:to-emerald-800/70 border-4 border-emerald-200 dark:border-emerald-700' :
              selectedAchievement.color === 'rose' ? 'bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/50 dark:to-rose-800/70 border-4 border-rose-200 dark:border-rose-700' :
              selectedAchievement.color === 'amber' ? 'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/50 dark:to-amber-800/70 border-4 border-amber-200 dark:border-amber-700' :
              selectedAchievement.color === 'lime' ? 'bg-gradient-to-br from-lime-50 to-lime-100 dark:from-lime-900/50 dark:to-lime-800/70 border-4 border-lime-200 dark:border-lime-700' :
              'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/70 border-4 border-gray-200 dark:border-gray-700'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-4"></div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                  hoveredMilestone ? 'scale-110 rotate-6' : 'scale-100'
                } ${
                  selectedAchievement.color === 'purple' ? 'bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600' :
                  selectedAchievement.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600' :
                  selectedAchievement.color === 'green' ? 'bg-gradient-to-br from-green-600 to-green-700 dark:from-green-500 dark:to-green-600' :
                  selectedAchievement.color === 'orange' ? 'bg-gradient-to-br from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-600' :
                  selectedAchievement.color === 'red' ? 'bg-gradient-to-br from-red-600 to-red-700 dark:from-red-500 dark:to-red-600' :
                  selectedAchievement.color === 'pink' ? 'bg-gradient-to-br from-pink-600 to-pink-700 dark:from-pink-500 dark:to-pink-600' :
                  selectedAchievement.color === 'yellow' ? 'bg-gradient-to-br from-yellow-600 to-yellow-700 dark:from-yellow-500 dark:to-yellow-600' :
                  selectedAchievement.color === 'indigo' ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600' :
                  selectedAchievement.color === 'teal' ? 'bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600' :
                  'bg-gradient-to-br from-gray-600 to-gray-700 dark:from-gray-500 dark:to-gray-600'
                }`}>
                  {selectedAchievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedAchievement.event}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedAchievement.month}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedAchievement(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Overview Section */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Overview
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {selectedAchievement.detail}
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className={`text-2xl font-bold ${selectedAchievement.color === 'purple' ? 'text-purple-600' : selectedAchievement.color === 'blue' ? 'text-blue-600' : selectedAchievement.color === 'green' ? 'text-green-600' : selectedAchievement.color === 'orange' ? 'text-orange-600' : selectedAchievement.color === 'red' ? 'text-red-600' : selectedAchievement.color === 'pink' ? 'text-pink-600' : selectedAchievement.color === 'yellow' ? 'text-yellow-600' : selectedAchievement.color === 'indigo' ? 'text-indigo-600' : selectedAchievement.color === 'teal' ? 'text-teal-600' : 'text-gray-600'}`}>
                      {selectedAchievement.progress}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Progress</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className={`text-2xl font-bold ${selectedAchievement.impact === 'High' ? 'text-red-600' : 'text-yellow-600'}`}>
                      {selectedAchievement.impact}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Impact</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-green-600">
                      {selectedAchievement.category}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Category</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-orange-600">
                      {selectedAchievement.side}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Timeline Side</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-red-600">
                      #{selectedAchievement.month.replace(/\D/g, '').split(' ')[1]}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Milestone ID</div>
                  </div>
                </div>
              </div>
              
              {/* Detailed Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Timeline Information */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Timeline Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Quarter</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAchievement.month}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Date</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAchievement.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Timeline Position</span>
                      <span className="font-medium text-gray-900 dark:text-white capitalize">{selectedAchievement.side}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Milestone ID</span>
                      <span className="font-medium text-gray-900 dark:text-white">#{selectedAchievement.month.replace(/\D/g, '').split(' ')[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Technical Details */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                    Technical Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Complexity Level</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedAchievement.progress > 90 ? 'Expert' : 
                         selectedAchievement.progress > 75 ? 'Advanced' : 
                         selectedAchievement.progress > 50 ? 'Intermediate' : 'Beginner'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                      <span className={`font-medium ${
                        selectedAchievement.progress === 100 ? 'text-green-600' : 
                         selectedAchievement.progress >= 90 ? 'text-blue-600' : 
                         selectedAchievement.progress >= 75 ? 'text-yellow-600' : 'text-orange-600'
                      }`}>
                        {selectedAchievement.progress === 100 ? 'Completed' : 
                         selectedAchievement.progress >= 90 ? 'Near Complete' : 
                         selectedAchievement.progress >= 75 ? 'In Progress' : 'Planning'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Priority</span>
                      <span className={`font-medium ${
                        selectedAchievement.impact === 'High' ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {selectedAchievement.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-blue-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Strategic milestone in our growth journey</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Demonstrates commitment to innovation and excellence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Contributes to our mission of supporting cognitive disabilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Represents significant advancement in cognitive support technology</span>
                  </li>
                </ul>
              </div>
              
              {/* Impact Metrics */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <BarChart className="w-5 h-5 mr-2 text-purple-600" />
                  Impact Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-purple-600">
                      {selectedAchievement.progress}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-blue-600">
                      {selectedAchievement.impact === 'High' ? '🔥' : '⭐'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Impact Level</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-green-600">
                      {selectedAchievement.category === 'technology' ? '🤖' : 
                       selectedAchievement.category === 'research' ? '🔬' : 
                       selectedAchievement.category === 'development' ? '💻' : 
                       selectedAchievement.category === 'expansion' ? '🌍' : '📋'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Category Focus</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-orange-600">
                      {selectedAchievement.side === 'left' ? '⬅️' : '⬆️'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Timeline Direction</div>
                  </div>
                </div>
              </div>
              
              {/* Future Outlook */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-green-600" />
                  Future Outlook
                </h4>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span>Next phase: Advanced AI integration and optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span>Expected impact: Transform cognitive support landscape</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span>Timeline continuation: Quarterly milestones through 2026</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-start justify-start pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center space-x-3 w-full">
                  <button
                    onClick={() => handleShareViaGmail(selectedAchievement)}
                    className={`w-[47.5%] flex items-center justify-center space-x-3 px-6 py-4 text-white rounded-lg transition-all duration-300 text-sm font-medium ${
                      selectedAchievement.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                      selectedAchievement.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                      selectedAchievement.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                      selectedAchievement.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' :
                      selectedAchievement.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' :
                      selectedAchievement.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700' :
                      selectedAchievement.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700' :
                      selectedAchievement.color === 'indigo' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700' :
                      selectedAchievement.color === 'teal' ? 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700' :
                      'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Share via Gmail</span>
                  </button>
                  <div className="flex-1"></div>
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="w-[47.5%] flex items-center justify-center space-x-3 px-6 py-4 text-white rounded-lg transition-all duration-300 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700"
                  >
                    <X className="w-5 h-5" />
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnovationExplore;
