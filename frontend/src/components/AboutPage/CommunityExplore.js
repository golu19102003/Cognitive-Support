
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, Award, TrendingUp, Target, Zap, Globe, Shield, Star, ChevronRight, Clock, MapPin, ExternalLink, Heart, Lightbulb, MessageCircle, Activity, UserCheck, Sparkles, HelpingHand, Users2, Map, Filter, Search, ChevronDown, ChevronUp, Palette, ArrowUpDown } from 'lucide-react';

const CommunityExplore = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredInitiative, setHoveredInitiative] = useState(null);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('chronological');
  const [showAdvanced, setShowAdvanced] = useState(false);

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

  const handleBackToStory = () => {
    window.location.href = '/about#story';
  };

  const handleShareViaGmail = (milestone) => {
    const subject = encodeURIComponent(`Community Milestone: ${milestone.event} - ${milestone.month}`);
    const body = encodeURIComponent(
      `Hello,\n\nI wanted to share this amazing community milestone from our journey:\n\n` +
      `📅 ${milestone.month}\n` +
      `🎯 ${milestone.event}\n` +
      `📝 ${milestone.detail}\n\n` +
      `This represents our commitment to building a supportive community for cognitive health and wellness.\n\n` +
      `Learn more about our journey and join us in making a difference!\n\n` +
      `Best regards,\n` +
      `PriHub Community Team`
    );
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleViewDetails = (milestone) => {
    setShowDetailsModal(milestone);
  };

  const getFilteredMilestones = () => {
    let filtered = [...timelineMilestones];
    
    // Apply category filter
    if (selectedFilter !== 'all') {
      if (selectedFilter === 'partnership') {
        filtered = filtered.filter(item => 
          item.event.toLowerCase().includes('partnership') || 
          item.event.toLowerCase().includes('advisory') ||
          item.event.toLowerCase().includes('collaboration')
        );
      } else if (selectedFilter === 'platform') {
        filtered = filtered.filter(item => 
          item.event.toLowerCase().includes('platform') || 
          item.event.toLowerCase().includes('technology') ||
          item.event.toLowerCase().includes('integration')
        );
      } else if (selectedFilter === 'community') {
        filtered = filtered.filter(item => 
          item.event.toLowerCase().includes('community') || 
          item.event.toLowerCase().includes('support') ||
          item.event.toLowerCase().includes('workshops')
        );
      } else if (selectedFilter === 'growth') {
        filtered = filtered.filter(item => 
          item.event.toLowerCase().includes('expansion') || 
          item.event.toLowerCase().includes('network') ||
          item.event.toLowerCase().includes('milestone')
        );
      }
    }
    
    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.detail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.month.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply date range filter
    if (dateRange.start || dateRange.end) {
      filtered = filtered.filter(item => {
        // Parse the month from item.month (e.g., "January 2020")
        const monthYear = item.month.split(' ');
        const monthMap = {
          'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
          'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
        };
        const itemDate = new Date(monthYear[1], monthMap[monthYear[0]]);
        const startDate = dateRange.start ? new Date(dateRange.start) : null;
        const endDate = dateRange.end ? new Date(dateRange.end) : null;
        
        if (startDate && itemDate < startDate) return false;
        if (endDate && itemDate > endDate) return false;
        return true;
      });
    }
    
    // Apply color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(item => selectedColors.includes(item.color));
    }
    
    // Apply sorting
    if (sortBy === 'alphabetical') {
      filtered.sort((a, b) => a.event.localeCompare(b.event));
    } else if (sortBy === 'progress') {
      filtered.sort((a, b) => b.progress - a.progress);
    } else if (sortBy === 'reverse-chronological') {
      filtered.sort((a, b) => new Date(b.month) - new Date(a.month));
    }
    // chronological is default (already sorted)
    
    return filtered;
  };

  const communityStats = [
    { icon: '👥', value: '2,000+', label: 'Community Members', trend: '+25%', description: 'Active participants' },
    { icon: '🤝', value: '500+', label: 'Professional Network', trend: '+40%', description: 'Healthcare providers' },
    { icon: '🎯', value: '15+', label: 'Partner Organizations', trend: '+20%', description: 'Strategic partners' },
    { icon: '📚', value: '100+', label: 'Resources Created', trend: '+60%', description: 'Educational materials' }
  ];

  const communityInitiatives = [
    {
      icon: '🤝',
      title: 'Neurodiversity Partnership',
      description: 'Building bridges between neurodiversity advocates and cognitive specialists',
      impact: '15+ organizations partnered',
      status: 'Active',
      color: 'pink'
    },
    {
      icon: '🧠',
      title: 'Expert Advisory Board',
      description: 'Leading cognitive specialists guiding our mission',
      impact: '8 experts on board',
      status: 'Established',
      color: 'blue'
    },
    {
      icon: '🌐',
      title: 'Community Platform',
      description: 'Digital hub for peer support and resource sharing',
      impact: '2000+ members engaged',
      status: 'Launched',
      color: 'green'
    },
    {
      icon: '📈',
      title: 'Network Expansion',
      description: 'Growing our professional and community network',
      impact: '400% growth rate',
      status: 'Expanding',
      color: 'orange'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Community Building Excellence',
      description: 'Established thriving community ecosystem',
      icon: '🏆',
      color: 'yellow',
      metrics: '2000+ members',
      date: '2021',
      category: 'Community'
    },
    {
      id: 2,
      title: 'Professional Network Growth',
      description: 'Built extensive professional healthcare network',
      icon: '🤝',
      color: 'blue',
      metrics: '500+ professionals',
      date: '2021',
      category: 'Network'
    }
  ];

  const technologies = [
    { name: 'React.js', icon: '⚛️', description: 'Frontend framework' },
    { name: 'Node.js', icon: '🟢', description: 'Backend runtime' },
    { name: 'Firebase', icon: '🔥', description: 'Database & Auth' },
    { name: 'Tailwind CSS', icon: '🎨', description: 'Styling framework' }
  ];

  const metrics = [
    { icon: '👥', label: 'Community Members', value: '2,000+', change: '+25%' },
    { icon: '🤝', label: 'Professional Network', value: '500+', change: '+40%' },
    { icon: '🎯', label: 'Success Rate', value: '94%', change: '+12%' },
    { icon: '⭐', label: 'Satisfaction', value: '4.8/5', change: '+0.3' }
  ];

  const timelineMilestones = [
    { 
      month: "January 2020", 
      event: "Neurodiversity Partnership", 
      detail: "Established foundational partnerships with neurodiversity advocates and cognitive specialists",
      icon: "🤝",
      progress: 100,
      color: "rose",
      side: "left"
    },
    { 
      month: "March 2020", 
      event: "Expert Advisory Board", 
      detail: "Formed advisory board with leading cognitive specialists and healthcare professionals",
      icon: "🧠",
      progress: 100,
      color: "violet",
      side: "right"
    },
    { 
      month: "May 2020", 
      event: "Community Platform Launch", 
      detail: "Launched comprehensive online platform for peer support and resource sharing",
      icon: "🌐",
      progress: 100,
      color: "emerald",
      side: "left"
    },
    { 
      month: "July 2020", 
      event: "Network Expansion", 
      detail: "Expanded network to 500+ professionals and 2000+ community members",
      icon: "📈",
      progress: 100,
      color: "amber",
      side: "right"
    },
    { 
      month: "September 2020", 
      event: "Educational Workshops", 
      detail: "Launched monthly educational workshops on cognitive health and support strategies",
      icon: "🎓",
      progress: 100,
      color: "fuchsia",
      side: "left"
    },
    { 
      month: "November 2020", 
      event: "Family Support Groups", 
      detail: "Established dedicated support groups for families and caregivers",
      icon: "👨‍👩‍👧‍👦",
      progress: 100,
      color: "sky",
      side: "right"
    },
    { 
      month: "February 2021", 
      event: "Professional Training", 
      detail: "Comprehensive training programs for healthcare professionals and educators",
      icon: "🎯",
      progress: 100,
      color: "lime",
      side: "left"
    },
    { 
      month: "April 2021", 
      event: "Research Publication", 
      detail: "Published research findings on cognitive support methodologies",
      icon: "📚",
      progress: 100,
      color: "orange",
      side: "right"
    },
    { 
      month: "June 2021", 
      event: "International Collaboration", 
      detail: "Established partnerships with international cognitive health organizations",
      icon: "🌍",
      progress: 100,
      color: "teal",
      side: "left"
    },
    { 
      month: "August 2021", 
      event: "Technology Integration", 
      detail: "Integrated advanced AI and machine learning for personalized support",
      icon: "🤖",
      progress: 100,
      color: "indigo",
      side: "right"
    },
    { 
      month: "October 2021", 
      event: "Community Recognition", 
      detail: "Received recognition for outstanding community impact and innovation",
      icon: "🏅",
      progress: 100,
      color: "cyan",
      side: "left"
    },
    { 
      month: "December 2021", 
      event: "Community Milestone", 
      detail: "Achieved major community growth and sustainable ecosystem milestone",
      icon: "🏆",
      progress: 100,
      color: "purple",
      side: "right"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-pink-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBackToStory}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Story</span>
            </button>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-4">🤝</div>
            <h1 className="text-4xl font-bold mb-4">Community Building (2020-2021)</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Building bridges between professionals, advocates, and individuals with lived experiences
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'achievements', 'technologies', 'metrics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'border-pink-600 text-pink-600'
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
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-indigo-50/30 dark:from-pink-900/5 dark:via-purple-900/5 dark:to-indigo-900/5"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    Community Building Overview
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Active Development</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                          <Users2 className="w-4 h-4 text-white" />
                        </div>
                        Building Together
                      </h3>
                      <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          We built our foundation on <span className="font-semibold text-pink-600 dark:text-pink-400">collaborative excellence</span> with neurodiversity advocates, cognitive specialists, technology experts, and most importantly, individuals with lived experiences. This collective wisdom shaped our approach to creating <span className="font-semibold text-purple-600 dark:text-purple-400">inclusive, empowering, and effective</span> support systems.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          The community building phase focused on creating <span className="font-semibold text-indigo-600 dark:text-indigo-400">meaningful networks</span>, establishing <span className="font-semibold text-blue-600 dark:text-blue-400">strategic partnerships</span>, and developing <span className="font-semibold text-teal-600 dark:text-teal-400">innovative platforms</span> for meaningful connections and support sharing.
                        </p>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-pink-200 dark:border-pink-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-pink-600" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-2 gap-3.5">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">50+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Partners</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">200+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Members</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">15+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Programs</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Hours</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">25+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Workshops</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">10+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">5★</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-red-600 dark:text-red-400">100%</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        Core Values
                      </h3>
                      <div className="space-y-3">
                        {[
                          { 
                            title: "Inclusive Collaboration", 
                            description: "Bringing diverse voices together",
                            icon: "🤝",
                            color: "pink"
                          },
                          { 
                            title: "Lived Experience Integration", 
                            description: "Real insights from real experiences",
                            icon: "💡",
                            color: "purple"
                          },
                          { 
                            title: "Professional Partnership", 
                            description: "Expert guidance and support",
                            icon: "🎯",
                            color: "indigo"
                          },
                          { 
                            title: "Community Empowerment", 
                            description: "Building stronger together",
                            icon: "🚀",
                            color: "blue"
                          },
                          { 
                            title: "Shared Knowledge Building", 
                            description: "Collective growth and learning",
                            icon: "📚",
                            color: "teal"
                          }
                        ].map((item, index) => (
                          <div key={index} className={`group p-4 bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-900/20 dark:to-${item.color}-800/30 rounded-xl border border-${item.color}-200 dark:border-${item.color}-700 hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer`}>
                            <div className="flex items-start space-x-3">
                              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                              <div className="flex-1">
                                <h4 className={`font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-${item.color}-600 dark:group-hover:text-${item.color}-400 transition-colors`}>
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Impact Timeline */}
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                        Impact Timeline
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="flex-1 p-5 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-base font-medium text-gray-900 dark:text-white mb-2">Foundation Established</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Q1 2020</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Core team formation</div>
                          </div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div className="flex-1 p-5 bg-white dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-base font-medium text-gray-900 dark:text-white mb-2">Network Expansion</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Q2-Q3 2020</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Partnership development</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <div className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-base font-medium text-gray-900 dark:text-white mb-2">Platform Launch</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Q4 2020</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Digital solutions</div>
                          </div>
                          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                          <div className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-xl border border-pink-200 dark:border-pink-700 hover:shadow-lg transition-all duration-300">
                            <div className="text-base font-medium text-gray-900 dark:text-white mb-2">Ongoing Growth</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">2021</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Continuous improvement</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Impact Dashboard */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Activity className="w-6 h-6 mr-3 text-pink-600" />
                Community Impact Dashboard
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/30 rounded-xl border border-pink-200 dark:border-pink-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{stat.label}</p>
                    <div className="flex items-center justify-center space-x-1 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">{stat.trend}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2020-2021 Timeline Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-indigo-50/30 dark:from-pink-900/5 dark:via-purple-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    2020-2021 Timeline
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Live Progress</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              {/* Timeline Filters Section */}
              <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-8 border border-pink-200 dark:border-pink-700`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Filter className="w-5 h-5 text-pink-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced Filters</h3>
                    <button
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 transition-colors"
                    >
                      {showAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {getFilteredMilestones().length} of {timelineMilestones.length}
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
                        className="text-sm text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 font-medium"
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
                      className="pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm w-full lg:w-56"
                    />
                  </div>
                  
                  {/* Category Filter Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'all' 
                          ? 'bg-pink-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedFilter('partnership')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'partnership' 
                          ? 'bg-pink-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Partnerships
                    </button>
                    <button
                      onClick={() => setSelectedFilter('platform')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'platform' 
                          ? 'bg-pink-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Platform
                    </button>
                    <button
                      onClick={() => setSelectedFilter('community')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'community' 
                          ? 'bg-pink-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Community
                    </button>
                    <button
                      onClick={() => setSelectedFilter('growth')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'growth' 
                          ? 'bg-pink-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Growth
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
                            className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                          />
                          <input
                            type="date"
                            placeholder="End Date"
                            value={dateRange.end}
                            onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                            className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
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
                          {['rose', 'violet', 'emerald', 'amber', 'fuchsia', 'sky', 'lime', 'orange', 'teal', 'indigo', 'cyan', 'purple'].map(color => (
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
                                color === 'rose' ? 'bg-rose-500' :
                                color === 'violet' ? 'bg-violet-500' :
                                color === 'emerald' ? 'bg-emerald-500' :
                                color === 'amber' ? 'bg-amber-500' :
                                color === 'fuchsia' ? 'bg-fuchsia-500' :
                                color === 'sky' ? 'bg-sky-500' :
                                color === 'lime' ? 'bg-lime-500' :
                                color === 'orange' ? 'bg-orange-500' :
                                color === 'teal' ? 'bg-teal-500' :
                                color === 'indigo' ? 'bg-indigo-500' :
                                color === 'cyan' ? 'bg-cyan-500' :
                                'bg-purple-500'
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
                          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
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
              
              <div className="relative space-y-6">
                {/* Vertical Timeline Line */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 transform -translate-x-1/2"></div>
                  
                  {/* Timeline Year Indicator */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-4">
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                      2020-2021
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
                        onClick={() => setSelectedAchievement(achievements[index % achievements.length])}
                      >
                        <div 
                          className={`absolute inset-0 rounded-full transition-all duration-300 ${
                            item.color === 'rose' ? 'bg-gradient-to-br from-rose-200 to-rose-300 group-hover:from-rose-300 group-hover:to-rose-400' :
                            item.color === 'violet' ? 'bg-gradient-to-br from-violet-200 to-violet-300 group-hover:from-violet-300 group-hover:to-violet-400' :
                            item.color === 'emerald' ? 'bg-gradient-to-br from-emerald-200 to-emerald-300 group-hover:from-emerald-300 group-hover:to-emerald-400' :
                            item.color === 'amber' ? 'bg-gradient-to-br from-amber-200 to-amber-300 group-hover:from-amber-300 group-hover:to-amber-400' :
                            item.color === 'fuchsia' ? 'bg-gradient-to-br from-fuchsia-200 to-fuchsia-300 group-hover:from-fuchsia-300 group-hover:to-fuchsia-400' :
                            item.color === 'sky' ? 'bg-gradient-to-br from-sky-200 to-sky-300 group-hover:from-sky-300 group-hover:to-sky-400' :
                            item.color === 'lime' ? 'bg-gradient-to-br from-lime-200 to-lime-300 group-hover:from-lime-300 group-hover:to-lime-400' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-200 to-orange-300 group-hover:from-orange-300 group-hover:to-orange-400' :
                            item.color === 'teal' ? 'bg-gradient-to-br from-teal-200 to-teal-300 group-hover:from-teal-300 group-hover:to-teal-400' :
                            item.color === 'indigo' ? 'bg-gradient-to-br from-indigo-200 to-indigo-300 group-hover:from-indigo-300 group-hover:to-indigo-400' :
                            item.color === 'cyan' ? 'bg-gradient-to-br from-cyan-200 to-cyan-300 group-hover:from-cyan-300 group-hover:to-cyan-400' :
                            'bg-gradient-to-br from-purple-200 to-purple-300 group-hover:from-purple-300 group-hover:to-purple-400'
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
                              item.color === 'rose' ? 'border-rose-300' :
                              item.color === 'violet' ? 'border-violet-300' :
                              item.color === 'emerald' ? 'border-emerald-300' :
                              item.color === 'amber' ? 'border-amber-300' :
                              item.color === 'fuchsia' ? 'border-fuchsia-300' :
                              item.color === 'sky' ? 'border-sky-300' :
                              item.color === 'lime' ? 'border-lime-300' :
                              item.color === 'orange' ? 'border-orange-300' :
                              item.color === 'teal' ? 'border-teal-300' :
                              item.color === 'indigo' ? 'border-indigo-300' :
                              item.color === 'cyan' ? 'border-cyan-300' :
                              'border-purple-300'
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
                          hoveredMilestone === index ? 'bg-pink-50 dark:bg-pink-900/30 border-2 border-pink-300' : 'bg-white dark:bg-gray-800 border-2 border-transparent'
                        } ${item.side === 'left' ? 'mr-4' : 'ml-4'}`}
                        onMouseEnter={() => setHoveredMilestone(index)}
                        onMouseLeave={() => setHoveredMilestone(null)}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                            hoveredMilestone === index ? 'scale-110 rotate-6' : 'scale-100'
                          } ${
                            item.color === 'rose' ? 'bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-800 dark:to-rose-700' :
                            item.color === 'violet' ? 'bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-800 dark:to-violet-700' :
                            item.color === 'emerald' ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-800 dark:to-emerald-700' :
                            item.color === 'amber' ? 'bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-800 dark:to-amber-700' :
                            item.color === 'fuchsia' ? 'bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 dark:from-fuchsia-800 dark:to-fuchsia-700' :
                            item.color === 'sky' ? 'bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-800 dark:to-sky-700' :
                            item.color === 'lime' ? 'bg-gradient-to-br from-lime-100 to-lime-200 dark:from-lime-800 dark:to-lime-700' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700' :
                            item.color === 'teal' ? 'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-800 dark:to-teal-700' :
                            item.color === 'indigo' ? 'bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-700' :
                            item.color === 'cyan' ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-800 dark:to-cyan-700' :
                            'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700'
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className={`text-sm font-bold ${
                              item.color === 'rose' ? 'text-rose-600 dark:text-rose-400' :
                              item.color === 'violet' ? 'text-violet-600 dark:text-violet-400' :
                              item.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                              item.color === 'amber' ? 'text-amber-600 dark:text-amber-400' :
                              item.color === 'fuchsia' ? 'text-fuchsia-600 dark:text-fuchsia-400' :
                              item.color === 'sky' ? 'text-sky-600 dark:text-sky-400' :
                              item.color === 'lime' ? 'text-lime-600 dark:text-lime-400' :
                              item.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                              item.color === 'teal' ? 'text-teal-600 dark:text-teal-400' :
                              item.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                              item.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                              'text-purple-600 dark:text-purple-400'
                            }`}>
                              {item.month}
                            </div>
                            <div className={`text-xs px-2 py-1 rounded-full ${
                              item.progress === 100 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                            }`}>
                              {item.progress === 100 ? 'Completed' : 'In Progress'}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className={`text-lg font-bold mb-2 ${
                          item.color === 'rose' ? 'text-rose-700 dark:text-rose-300' :
                          item.color === 'violet' ? 'text-violet-700 dark:text-violet-300' :
                          item.color === 'emerald' ? 'text-emerald-700 dark:text-emerald-300' :
                          item.color === 'amber' ? 'text-amber-700 dark:text-amber-300' :
                          item.color === 'fuchsia' ? 'text-fuchsia-700 dark:text-fuchsia-300' :
                          item.color === 'sky' ? 'text-sky-700 dark:text-sky-300' :
                          item.color === 'lime' ? 'text-lime-700 dark:text-lime-300' :
                          item.color === 'orange' ? 'text-orange-700 dark:text-orange-300' :
                          item.color === 'teal' ? 'text-teal-700 dark:text-teal-300' :
                          item.color === 'indigo' ? 'text-indigo-700 dark:text-indigo-300' :
                          item.color === 'cyan' ? 'text-cyan-700 dark:text-cyan-300' :
                          'text-purple-700 dark:text-purple-300'
                        }`}>
                          {item.event}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {item.detail}
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center space-x-3 mt-4">
                          <button
                            onClick={() => handleShareViaGmail(item)}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                              item.color === 'rose' ? 'bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:hover:bg-rose-900/50' :
                              item.color === 'violet' ? 'bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:hover:bg-violet-900/50' :
                              item.color === 'emerald' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50' :
                              item.color === 'amber' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-900/50' :
                              item.color === 'fuchsia' ? 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900/50' :
                              item.color === 'sky' ? 'bg-sky-100 text-sky-700 hover:bg-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:hover:bg-sky-900/50' :
                              item.color === 'lime' ? 'bg-lime-100 text-lime-700 hover:bg-lime-200 dark:bg-lime-900/30 dark:text-lime-300 dark:hover:bg-lime-900/50' :
                              item.color === 'orange' ? 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50' :
                              item.color === 'teal' ? 'bg-teal-100 text-teal-700 hover:bg-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:hover:bg-teal-900/50' :
                              item.color === 'indigo' ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50' :
                              item.color === 'cyan' ? 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-900/50' :
                              'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50'
                            }`}
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                          
                          <button
                            onClick={() => handleViewDetails(item)}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                              item.color === 'rose' ? 'bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600' :
                              item.color === 'violet' ? 'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600' :
                              item.color === 'emerald' ? 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600' :
                              item.color === 'amber' ? 'bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600' :
                              item.color === 'fuchsia' ? 'bg-fuchsia-600 text-white hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600' :
                              item.color === 'sky' ? 'bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600' :
                              item.color === 'lime' ? 'bg-lime-600 text-white hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-600' :
                              item.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600' :
                              item.color === 'teal' ? 'bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600' :
                              item.color === 'indigo' ? 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600' :
                              item.color === 'cyan' ? 'bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600' :
                              'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
                            }`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                        </div>
                        
                        {/* Hover Details */}
                        {hoveredMilestone === index && (
                          <div className={`mt-3 p-3 rounded-lg border ${
                            item.color === 'rose' ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-700' :
                            item.color === 'violet' ? 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700' :
                            item.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700' :
                            item.color === 'amber' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700' :
                            item.color === 'fuchsia' ? 'bg-fuchsia-50 dark:bg-fuchsia-900/20 border-fuchsia-200 dark:border-fuchsia-700' :
                            item.color === 'sky' ? 'bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-700' :
                            item.color === 'lime' ? 'bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-700' :
                            item.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700' :
                            item.color === 'teal' ? 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700' :
                            item.color === 'indigo' ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700' :
                            item.color === 'cyan' ? 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-700' :
                            'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700'
                          }`}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <Target className={`w-4 h-4 ${
                                  item.color === 'rose' ? 'text-rose-600' :
                                  item.color === 'violet' ? 'text-violet-600' :
                                  item.color === 'emerald' ? 'text-emerald-600' :
                                  item.color === 'amber' ? 'text-amber-600' :
                                  item.color === 'fuchsia' ? 'text-fuchsia-600' :
                                  item.color === 'sky' ? 'text-sky-600' :
                                  item.color === 'lime' ? 'text-lime-600' :
                                  item.color === 'orange' ? 'text-orange-600' :
                                  item.color === 'teal' ? 'text-teal-600' :
                                  item.color === 'indigo' ? 'text-indigo-600' :
                                  item.color === 'cyan' ? 'text-cyan-600' :
                                  'text-purple-600'
                                }`} />
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Key Metrics</span>
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">
                                {item.progress}% Complete
                              </div>
                            </div>
                            
                            {/* Event-Specific Details */}
                            <div className="space-y-2">
                              {item.event === "Neurodiversity Partnership" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">15+ organizations partnered</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Cognitive specialists collaboration</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Expert Advisory Board" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">8 leading specialists onboard</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Healthcare professionals</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Community Platform Launch" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Online platform deployed</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Peer support forums</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Network Expansion" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">500+ professionals joined</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">2000+ community members</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Educational Workshops" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Monthly workshops</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">1000+ participants</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Family Support Groups" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Dedicated support groups</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">300+ families supported</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Professional Training" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Training programs</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">200+ professionals certified</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Research Publication" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">5 research papers published</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Academic recognition</span>
                                  </div>
                                </>
                              )}
                              {item.event === "International Collaboration" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">10+ countries partnered</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Global cognitive health network</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Technology Integration" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">AI-powered personalization</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Machine learning algorithms</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Community Recognition" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">National innovation award</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Industry recognition</span>
                                  </div>
                                </>
                              )}
                              {item.event === "Community Milestone" && (
                                <>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Major milestone achieved</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Sustainable ecosystem</span>
                                  </div>
                                </>
                              )}
                            </div>
                            
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${
                                  item.color === 'rose' ? 'bg-rose-500' :
                                  item.color === 'violet' ? 'bg-violet-500' :
                                  item.color === 'emerald' ? 'bg-emerald-500' :
                                  item.color === 'amber' ? 'bg-amber-500' :
                                  item.color === 'fuchsia' ? 'bg-fuchsia-500' :
                                  item.color === 'sky' ? 'bg-sky-500' :
                                  item.color === 'lime' ? 'bg-lime-500' :
                                  item.color === 'orange' ? 'bg-orange-500' :
                                  item.color === 'teal' ? 'bg-teal-500' :
                                  item.color === 'indigo' ? 'bg-indigo-500' :
                                  item.color === 'cyan' ? 'bg-cyan-500' :
                                  'bg-purple-500'
                                }`}></div>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {item.progress}% Complete
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${
                                  item.progress === 100 ? 'bg-green-500' : 'bg-yellow-500'
                                }`}></div>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {item.progress === 100 ? 'Completed' : 'In Progress'}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Initiatives Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-pink-600" />
                Community Initiatives
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {communityInitiatives.map((initiative, index) => (
                  <div 
                    key={index}
                    className={`p-6 border-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
                      hoveredInitiative === index 
                        ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/30' 
                        : 'border-pink-200 dark:border-pink-700 bg-white dark:bg-gray-800'
                    }`}
                    onMouseEnter={() => setHoveredInitiative(index)}
                    onMouseLeave={() => setHoveredInitiative(null)}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-4xl mb-2">{initiative.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {initiative.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {initiative.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            initiative.status === 'Active' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                              : initiative.status === 'Established'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                              : initiative.status === 'Launched'
                              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                              : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                          }`}>
                            {initiative.status}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {initiative.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      achievement.category === 'Community' 
                        ? 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {achievement.category}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{achievement.date}</span>
                    <span className="font-semibold text-pink-600">{achievement.metrics}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === 'technologies' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{tech.description}</p>
                </div>
              ))}
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
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{metric.value}</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{metric.label}</p>
                  <div className={`text-sm font-medium ${
                    metric.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
            showDetailsModal.color === 'rose' ? 'border-4 border-rose-200 dark:border-rose-700' :
            showDetailsModal.color === 'violet' ? 'border-4 border-violet-200 dark:border-violet-700' :
            showDetailsModal.color === 'emerald' ? 'border-4 border-emerald-200 dark:border-emerald-700' :
            showDetailsModal.color === 'amber' ? 'border-4 border-amber-200 dark:border-amber-700' :
            showDetailsModal.color === 'fuchsia' ? 'border-4 border-fuchsia-200 dark:border-fuchsia-700' :
            showDetailsModal.color === 'sky' ? 'border-4 border-sky-200 dark:border-sky-700' :
            showDetailsModal.color === 'lime' ? 'border-4 border-lime-200 dark:border-lime-700' :
            showDetailsModal.color === 'orange' ? 'border-4 border-orange-200 dark:border-orange-700' :
            showDetailsModal.color === 'teal' ? 'border-4 border-teal-200 dark:border-teal-700' :
            showDetailsModal.color === 'indigo' ? 'border-4 border-indigo-200 dark:border-indigo-700' :
            showDetailsModal.color === 'cyan' ? 'border-4 border-cyan-200 dark:border-cyan-700' :
            'border-4 border-purple-200 dark:border-purple-700'
          }`}>
            <div className={`p-6 ${
              showDetailsModal.color === 'rose' ? 'bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/30' :
              showDetailsModal.color === 'violet' ? 'bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/30' :
              showDetailsModal.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/30' :
              showDetailsModal.color === 'amber' ? 'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/30' :
              showDetailsModal.color === 'fuchsia' ? 'bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 dark:from-fuchsia-900/20 dark:to-fuchsia-800/30' :
              showDetailsModal.color === 'sky' ? 'bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/30' :
              showDetailsModal.color === 'lime' ? 'bg-gradient-to-br from-lime-50 to-lime-100 dark:from-lime-900/20 dark:to-lime-800/30' :
              showDetailsModal.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30' :
              showDetailsModal.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/30' :
              showDetailsModal.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30' :
              showDetailsModal.color === 'cyan' ? 'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30' :
              'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
                    showDetailsModal.color === 'rose' ? 'bg-gradient-to-br from-rose-200 to-rose-300 dark:from-rose-700 dark:to-rose-600' :
                    showDetailsModal.color === 'violet' ? 'bg-gradient-to-br from-violet-200 to-violet-300 dark:from-violet-700 dark:to-violet-600' :
                    showDetailsModal.color === 'emerald' ? 'bg-gradient-to-br from-emerald-200 to-emerald-300 dark:from-emerald-700 dark:to-emerald-600' :
                    showDetailsModal.color === 'amber' ? 'bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-700 dark:to-amber-600' :
                    showDetailsModal.color === 'fuchsia' ? 'bg-gradient-to-br from-fuchsia-200 to-fuchsia-300 dark:from-fuchsia-700 dark:to-fuchsia-600' :
                    showDetailsModal.color === 'sky' ? 'bg-gradient-to-br from-sky-200 to-sky-300 dark:from-sky-700 dark:to-sky-600' :
                    showDetailsModal.color === 'lime' ? 'bg-gradient-to-br from-lime-200 to-lime-300 dark:from-lime-700 dark:to-lime-600' :
                    showDetailsModal.color === 'orange' ? 'bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-600' :
                    showDetailsModal.color === 'teal' ? 'bg-gradient-to-br from-teal-200 to-teal-300 dark:from-teal-700 dark:to-teal-600' :
                    showDetailsModal.color === 'indigo' ? 'bg-gradient-to-br from-indigo-200 to-indigo-300 dark:from-indigo-700 dark:to-indigo-600' :
                    showDetailsModal.color === 'cyan' ? 'bg-gradient-to-br from-cyan-200 to-cyan-300 dark:from-cyan-700 dark:to-cyan-600' :
                    'bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-600'
                  }`}>
                    {showDetailsModal.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      showDetailsModal.color === 'rose' ? 'text-rose-800 dark:text-rose-200' :
                      showDetailsModal.color === 'violet' ? 'text-violet-800 dark:text-violet-200' :
                      showDetailsModal.color === 'emerald' ? 'text-emerald-800 dark:text-emerald-200' :
                      showDetailsModal.color === 'amber' ? 'text-amber-800 dark:text-amber-200' :
                      showDetailsModal.color === 'fuchsia' ? 'text-fuchsia-800 dark:text-fuchsia-200' :
                      showDetailsModal.color === 'sky' ? 'text-sky-800 dark:text-sky-200' :
                      showDetailsModal.color === 'lime' ? 'text-lime-800 dark:text-lime-200' :
                      showDetailsModal.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                      showDetailsModal.color === 'teal' ? 'text-teal-800 dark:text-teal-200' :
                      showDetailsModal.color === 'indigo' ? 'text-indigo-800 dark:text-indigo-200' :
                      showDetailsModal.color === 'cyan' ? 'text-cyan-800 dark:text-cyan-200' :
                      'text-purple-800 dark:text-purple-200'
                    }`}>
                      {showDetailsModal.event}
                    </h3>
                    <p className={`text-lg ${
                      showDetailsModal.color === 'rose' ? 'text-rose-600 dark:text-rose-400' :
                      showDetailsModal.color === 'violet' ? 'text-violet-600 dark:text-violet-400' :
                      showDetailsModal.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                      showDetailsModal.color === 'amber' ? 'text-amber-600 dark:text-amber-400' :
                      showDetailsModal.color === 'fuchsia' ? 'text-fuchsia-600 dark:text-fuchsia-400' :
                      showDetailsModal.color === 'sky' ? 'text-sky-600 dark:text-sky-400' :
                      showDetailsModal.color === 'lime' ? 'text-lime-600 dark:text-lime-400' :
                      showDetailsModal.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      showDetailsModal.color === 'teal' ? 'text-teal-600 dark:text-teal-400' :
                      showDetailsModal.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                      showDetailsModal.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                      'text-purple-600 dark:text-purple-400'
                    }`}>
                      {showDetailsModal.month}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDetailsModal(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-300">{showDetailsModal.detail}</p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Progress Status</h4>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full ${
                          showDetailsModal.progress === 100 ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${showDetailsModal.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {showDetailsModal.progress}% Complete
                    </span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">Timeline: {showDetailsModal.month}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">Status: {showDetailsModal.progress === 100 ? 'Completed' : 'In Progress'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">Community Impact: High</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleShareViaGmail(showDetailsModal)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      showDetailsModal.color === 'rose' ? 'bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600' :
                      showDetailsModal.color === 'violet' ? 'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600' :
                      showDetailsModal.color === 'emerald' ? 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600' :
                      showDetailsModal.color === 'amber' ? 'bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600' :
                      showDetailsModal.color === 'fuchsia' ? 'bg-fuchsia-600 text-white hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600' :
                      showDetailsModal.color === 'sky' ? 'bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600' :
                      showDetailsModal.color === 'lime' ? 'bg-lime-600 text-white hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-600' :
                      showDetailsModal.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600' :
                      showDetailsModal.color === 'teal' ? 'bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600' :
                      showDetailsModal.color === 'indigo' ? 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600' :
                      showDetailsModal.color === 'cyan' ? 'bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600' :
                      'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Share via Gmail</span>
                  </button>
                  
                  <button
                    onClick={() => setShowDetailsModal(null)}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                  >
                    Close
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

export default CommunityExplore;
