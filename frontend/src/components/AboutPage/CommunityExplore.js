import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, Award, TrendingUp, Target, Zap, Globe, Shield, Star, ChevronRight, Clock, MapPin, ExternalLink, Heart, Lightbulb, MessageCircle, Activity, UserCheck, Sparkles, HelpingHand, Users2, Map } from 'lucide-react';

const CommunityExplore = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [hoveredInitiative, setHoveredInitiative] = useState(null);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const handleBackToStory = () => {
    window.location.href = '/about#story';
  };

  const achievements = [
    {
      id: 1,
      title: "Neurodiversity Partnership",
      description: "We built our foundation on collaboration with neurodiversity advocates, cognitive specialists, technology experts, and most importantly, individuals with lived experiences. This collective wisdom shaped our approach to creating inclusive, empowering, and effective support systems.",
      date: "February 2020",
      impact: "Community Building",
      icon: "🤝",
      color: "pink",
      progress: 100,
      detail: "Established partnerships with 15+ neurodiversity organizations and cognitive specialists"
    },
    {
      id: 2,
      title: "Expert Advisory Board",
      description: "Formed advisory board with leading cognitive specialists and healthcare professionals to guide our community building initiatives and ensure evidence-based practices.",
      date: "May 2020",
      impact: "Expert Network",
      icon: "🧠",
      color: "pink",
      progress: 100,
      detail: "Assembled 8 experts in cognitive psychology, neurodiversity, and assistive technology"
    },
    {
      id: 3,
      title: "Community Platform Launch",
      description: "Launched online community platform for peer support and resource sharing, enabling individuals with cognitive disabilities to connect and access valuable resources.",
      date: "August 2020",
      impact: "Digital Community",
      icon: "🌐",
      color: "pink",
      progress: 100,
      detail: "Deployed comprehensive platform with forums, chat, and resource libraries"
    },
    {
      id: 4,
      title: "Support Network Expanded",
      description: "Grew network to include 500+ professionals and 2000+ community members, creating a comprehensive ecosystem of cognitive support and collaboration.",
      date: "December 2021",
      impact: "Network Growth",
      icon: "📈",
      color: "pink",
      progress: 100,
      detail: "Achieved 400% growth in community engagement and professional partnerships"
    }
  ];

  const timelineMilestones = [
    {
      id: 1,
      month: "February 2020",
      event: "Neurodiversity Partnership",
      detail: "Established foundational partnerships with neurodiversity advocates and cognitive specialists",
      icon: "🤝",
      color: "pink",
      progress: 100,
      completed: true,
      metrics: "15+ partners"
    },
    {
      id: 2,
      month: "May 2020",
      event: "Expert Advisory Board",
      detail: "Formed advisory board with leading cognitive specialists and healthcare professionals",
      icon: "🧠",
      color: "blue",
      progress: 100,
      completed: true,
      metrics: "8 experts"
    },
    {
      id: 3,
      month: "August 2020",
      event: "Community Platform Launch",
      detail: "Launched comprehensive online platform for peer support and resource sharing",
      icon: "🌐",
      color: "green",
      progress: 100,
      completed: true,
      metrics: "500+ users"
    },
    {
      id: 4,
      month: "December 2020",
      event: "Network Expansion",
      detail: "Expanded network to 500+ professionals and 2000+ community members",
      icon: "📈",
      color: "orange",
      progress: 100,
      completed: true,
      metrics: "400% growth"
    },
    {
      id: 5,
      month: "March 2021",
      event: "Educational Workshops",
      detail: "Launched monthly educational workshops on cognitive health and support strategies",
      icon: "🎓",
      color: "purple",
      progress: 100,
      completed: true,
      metrics: "1000+ participants"
    },
    {
      id: 6,
      month: "June 2021",
      event: "Family Support Groups",
      detail: "Established dedicated support groups for families and caregivers",
      icon: "👨‍👩‍👧‍👦",
      color: "red",
      progress: 100,
      completed: true,
      metrics: "300+ families"
    },
    {
      id: 7,
      month: "September 2021",
      event: "Professional Training",
      detail: "Comprehensive training programs for healthcare professionals and educators",
      icon: "🎯",
      color: "indigo",
      progress: 100,
      completed: true,
      metrics: "200+ professionals"
    },
    {
      id: 8,
      month: "December 2021",
      event: "Community Milestone",
      detail: "Achieved major community growth and impact milestone",
      icon: "🏆",
      color: "yellow",
      progress: 100,
      completed: true,
      metrics: "2000+ members"
    }
  ];

  const technologies = [
    { name: "React.js", level: 90, category: "Frontend", icon: "⚛️" },
    { name: "Node.js", level: 85, category: "Backend", icon: "🟢" },
    { name: "Firebase", level: 95, category: "Database", icon: "🔥" },
    { name: "Community Tools", level: 88, category: "Platform", icon: "👥" },
    { name: "Video Conferencing", level: 82, category: "Communication", icon: "📹" },
    { name: "Resource Management", level: 87, category: "System", icon: "📚" }
  ];

  const metrics = [
    { label: "Community Members", value: "2,000+", icon: "👥", trend: "+400%" },
    { label: "Professional Partners", value: "500+", icon: "🤝", trend: "+300%" },
    { label: "Support Groups", value: "50", icon: "💬", trend: "+250%" },
    { label: "Resources Shared", value: "10,000+", icon: "📚", trend: "+500%" }
  ];

  const communityInitiatives = [
    {
      title: "Peer Support Programs",
      description: "Structured peer-to-peer support matching individuals with similar experiences and challenges. Our comprehensive matching system considers cognitive profiles, communication preferences, and support needs to create meaningful connections.",
      participants: "500+",
      impact: "High",
      icon: "🤝",
      features: [
        "Personalized matching algorithms",
        "Weekly virtual meetups", 
        "Progress tracking dashboard",
        "Community events calendar",
        "Mentorship programs",
        "Success story sharing"
      ],
      outcomes: [
        "85% participant satisfaction",
        "200+ successful matches",
        "Monthly engagement rate: 75%",
        "Average support duration: 6 months"
      ]
    },
    {
      title: "Educational Workshops",
      description: "Monthly workshops on cognitive health and support strategies, featuring expert-led sessions on topics ranging from daily living skills to advanced coping mechanisms. Each workshop includes interactive elements and practical takeaways.",
      participants: "1,000+",
      impact: "Medium",
      icon: "🎓",
      features: [
        "Expert-led sessions",
        "Interactive learning modules",
        "Downloadable resources",
        "Q&A forums", 
        "Certificate of completion",
        "Recorded sessions library",
        "Peer discussion groups"
      ],
      outcomes: [
        "92% completion rate",
        "4.8/5 average rating",
        "15+ workshop topics",
        "Monthly attendance: 150+ participants"
      ]
    },
    {
      title: "Family Support Groups",
      description: "Dedicated support groups for families and caregivers, providing emotional support, practical guidance, and resource sharing. Groups meet weekly and include both educational and social components.",
      participants: "300+",
      impact: "High",
      icon: "👨‍👩‍👧‍👦",
      features: [
        "Weekly support meetings",
        "Resource sharing platform",
        "Professional guidance sessions",
        "Care coordination services",
        "Emergency support hotline",
        "Respite care information",
        "Legal guidance resources"
      ],
      outcomes: [
        "90% family satisfaction rate",
        "50+ support groups active",
        "24/7 crisis response",
        "Monthly educational sessions",
        "Caregiver training programs"
      ]
    },
    {
      title: "Professional Training",
      description: "Comprehensive training programs for healthcare professionals, educators, and support staff. Curriculum developed by leading cognitive disability experts and updated quarterly based on emerging research.",
      participants: "200+",
      impact: "Medium",
      icon: "🎓",
      features: [
        "Certification courses",
        "Evidence-based practices",
        "Networking opportunities",
        "Research collaboration platform",
        "Mentoring programs",
        "Conference presentations",
        "Publication opportunities",
        "Continuing education credits"
      ],
      outcomes: [
        "95% certification success",
        "25+ training modules",
        "Partnership with 15+ institutions",
        "Annual research symposium",
        "Professional development hours: 10,000+"
      ]
    }
  ];

  const communityStats = [
    { label: "Community Members", value: "2,000+", icon: "👥", trend: "+400%", description: "Active participants" },
    { label: "Professional Partners", value: "500+", icon: "🤝", trend: "+300%", description: "Healthcare & education" },
    { label: "Support Groups", value: "50", icon: "💬", trend: "+250%", description: "Specialized groups" },
    { label: "Resources Shared", value: "10,000+", icon: "📚", trend: "+500%", description: "Educational materials" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
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
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Users className="w-6 h-6 mr-3 text-pink-600" />
                Community Building Overview
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Building Together</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    We built our foundation on collaboration with neurodiversity advocates, cognitive specialists, technology experts, and most importantly, individuals with lived experiences. This collective wisdom shaped our approach to creating inclusive, empowering, and effective support systems.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The community building phase focused on creating networks, establishing partnerships, and developing platforms for meaningful connections and support sharing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Core Values</h3>
                  <div className="space-y-3">
                    {[
                      "Inclusive collaboration",
                      "Lived experience integration", 
                      "Professional partnership",
                      "Community empowerment",
                      "Shared knowledge building"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2020-2021 Timeline Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-pink-600" />
                2020-2021 Community Journey
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-pink-400 dark:from-pink-600 dark:to-pink-700"></div>
                
                <div className="space-y-12">
                  {timelineMilestones.map((milestone, index) => (
                    <div key={milestone.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Timeline Point */}
                      <div className="w-1/2"></div>
                      <div className="relative z-10">
                        <div
                          className={`absolute left-1/2 w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 transform -translate-x-1/2 z-10 flex items-center justify-center transition-all duration-300 cursor-pointer group ${
                            hoveredMilestone === index ? 'scale-125 shadow-xl' : 'scale-100 shadow-sm'
                          }`}
                          onMouseEnter={() => {
                            setHoveredMilestone(index);
                            setHoveredCard(index);
                          }}
                          onMouseLeave={() => {
                            setHoveredMilestone(null);
                            setHoveredCard(null);
                          }}
                          onClick={() => setSelectedMilestone(milestone)}
                        >
                          <div
                            className={`absolute inset-0 rounded-full transition-all duration-300 ${
                              milestone.color === 'pink' ? 'bg-gradient-to-br from-pink-200 to-pink-300 group-hover:from-pink-300 group-hover:to-pink-400' :
                              milestone.color === 'blue' ? 'bg-gradient-to-br from-blue-200 to-blue-300 group-hover:from-blue-300 group-hover:to-blue-400' :
                              milestone.color === 'green' ? 'bg-gradient-to-br from-green-200 to-green-300 group-hover:from-green-300 group-hover:to-green-400' :
                              milestone.color === 'orange' ? 'bg-gradient-to-br from-orange-200 to-orange-300 group-hover:from-orange-300 group-hover:to-orange-400' :
                              milestone.color === 'purple' ? 'bg-gradient-to-br from-purple-200 to-purple-300 group-hover:from-purple-300 group-hover:to-purple-400' :
                              milestone.color === 'red' ? 'bg-gradient-to-br from-red-200 to-red-300 group-hover:from-red-300 group-hover:to-red-400' :
                              milestone.color === 'indigo' ? 'bg-gradient-to-br from-indigo-200 to-indigo-300 group-hover:from-indigo-300 group-hover:to-indigo-400' :
                              milestone.color === 'yellow' ? 'bg-gradient-to-br from-yellow-200 to-yellow-300 group-hover:from-yellow-300 group-hover:to-yellow-400' :
                              'bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400'
                            }`}
                          ></div>
                          <span
                            className={`relative text-sm text-white font-bold transition-all duration-300 ${
                              hoveredMilestone === index ? 'animate-pulse' : ''
                            }`}
                          >
                            {milestone.icon}
                          </span>
                          {hoveredMilestone === index && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg shadow-lg whitespace-nowrap z-20">
                              <div className="font-semibold">{milestone.month}</div>
                              <div className="text-gray-300 dark:text-gray-600">{milestone.event}</div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                              </div>
                            </div>
                          )}
                          {hoveredMilestone === index && (
                            <div
                              className={`absolute inset-0 rounded-full border-2 animate-ping ${
                                milestone.color === 'pink' ? 'border-pink-300' :
                                milestone.color === 'blue' ? 'border-blue-300' :
                                milestone.color === 'green' ? 'border-green-300' :
                                milestone.color === 'orange' ? 'border-orange-300' :
                                milestone.color === 'purple' ? 'border-purple-300' :
                                milestone.color === 'red' ? 'border-red-300' :
                                milestone.color === 'indigo' ? 'border-indigo-300' :
                                milestone.color === 'yellow' ? 'border-yellow-300' :
                                'border-gray-300'
                              }`}
                            ></div>
                          )}
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Card - 2019 Style */}
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-left'}`}>
                        <div 
                          className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer ${
                            hoveredMilestone === index 
                              ? 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-2 border-pink-300 dark:border-pink-600' 
                              : 'bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-pink-700'
                          }`}
                          onClick={() => setSelectedMilestone(milestone)}
                          onMouseEnter={() => {
                            setHoveredCard(index);
                            setHoveredMilestone(index);
                          }}
                          onMouseLeave={() => {
                            setHoveredCard(null);
                            setHoveredMilestone(null);
                          }}
                        >
                          <div className={`flex items-center space-x-2 mb-3`}>
                            <div className="text-2xl">{milestone.icon}</div>
                            <div className={`text-sm font-bold ${
                              milestone.color === 'pink' ? 'text-pink-600 dark:text-pink-400' :
                              milestone.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                              milestone.color === 'green' ? 'text-green-600 dark:text-green-400' :
                              milestone.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                              milestone.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                              milestone.color === 'red' ? 'text-red-600 dark:text-red-400' :
                              milestone.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                              milestone.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                              'text-gray-600 dark:text-gray-400'
                            }`}>
                              {milestone.month}
                            </div>
                            {milestone.completed && (
                              <div className="flex items-center space-x-1 ml-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-green-600 font-medium">Completed</span>
                              </div>
                            )}
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{milestone.event}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{milestone.detail}</p>
                          
                          {/* Interactive Progress Bar */}
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                milestone.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                                milestone.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                milestone.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                                milestone.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                                milestone.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                                milestone.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                                milestone.color === 'indigo' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                                milestone.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                                'bg-gradient-to-r from-gray-500 to-gray-600'
                              }`}
                              style={{ width: `${milestone.progress}%` }}
                            ></div>
                          </div>
                          
                          {/* Hover Details - 2019 Style with Complete Content */}
                          {(hoveredCard === index || hoveredMilestone === index) && (
                            <div className={`mt-3 p-4 rounded-lg border ${
                              milestone.color === 'pink' ? 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-700' :
                              milestone.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' :
                              milestone.color === 'green' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' :
                              milestone.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700' :
                              milestone.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700' :
                              milestone.color === 'red' ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700' :
                              milestone.color === 'indigo' ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700' :
                              milestone.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700' :
                              'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-700'
                            }`}>
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                  <Target className={`w-4 h-4 ${
                                    milestone.color === 'pink' ? 'text-pink-600' :
                                    milestone.color === 'blue' ? 'text-blue-600' :
                                    milestone.color === 'green' ? 'text-green-600' :
                                    milestone.color === 'orange' ? 'text-orange-600' :
                                    milestone.color === 'purple' ? 'text-purple-600' :
                                    milestone.color === 'red' ? 'text-red-600' :
                                    milestone.color === 'indigo' ? 'text-indigo-600' :
                                    milestone.color === 'yellow' ? 'text-yellow-600' :
                                    'text-gray-600'
                                  }`} />
                                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Key Metrics</span>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                  {milestone.metrics}
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                {milestone.event === "Neurodiversity Partnership" && (
                                  <>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">15+ neurodiversity organizations partnered</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Cognitive specialists collaboration established</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Lived experience integration framework created</span>
                                    </div>
                                  </>
                                )}
                                {milestone.event === "Expert Advisory Board" && (
                                  <>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">8 leading cognitive specialists onboard</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Healthcare professionals from diverse backgrounds</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Quarterly strategic review meetings established</span>
                                    </div>
                                  </>
                                )}
                                {milestone.event === "Community Platform Launch" && (
                                  <>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Comprehensive online platform deployed</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Peer support forums and chat features</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Resource sharing library implemented</span>
                                    </div>
                                  </>
                                )}
                                {milestone.event === "Network Expansion" && (
                                  <>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">500+ professionals joined network</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">2000+ community members engaged</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">400% growth in community engagement</span>
                                    </div>
                                  </>
                                )}
                                {milestone.event === "Educational Workshops" && (
                                  <>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Monthly workshop schedule established</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Cognitive health and support strategies curriculum</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">1000+ participants reached</span>
                                    </div>
                                  </>
                                )}
                                {milestone.event === "Family Support Groups" && (
                                  <>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Dedicated caregiver support groups</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Weekly meetings and resource sharing</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">300+ families supported</span>
                                    </div>
                                  </>
                                )}
                                {milestone.event === "Professional Training" && (
                                  <>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Comprehensive training programs developed</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Healthcare professionals and educators trained</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">200+ professionals certified</span>
                                    </div>
                                  </>
                                )}
                                {milestone.event === "Community Milestone" && (
                                  <>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Major community growth milestone achieved</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">2000+ active community members</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                      <span className="text-gray-600 dark:text-gray-300">Sustainable community ecosystem established</span>
                                    </div>
                                  </>
                                )}
                              </div>
                              
                              <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2">
                                  <div className={`w-2 h-2 rounded-full ${
                                    milestone.color === 'pink' ? 'bg-pink-500' :
                                    milestone.color === 'blue' ? 'bg-blue-500' :
                                    milestone.color === 'green' ? 'bg-green-500' :
                                    milestone.color === 'orange' ? 'bg-orange-500' :
                                    milestone.color === 'purple' ? 'bg-purple-500' :
                                    milestone.color === 'red' ? 'bg-red-500' :
                                    milestone.color === 'indigo' ? 'bg-indigo-500' :
                                    milestone.color === 'yellow' ? 'bg-yellow-500' :
                                    'bg-gray-500'
                                  }`}></div>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {milestone.progress}% Complete
                                  </span>
                                </div>
                                <div className={`flex items-center space-x-1 text-xs ${
                                  milestone.color === 'pink' ? 'text-pink-600 dark:text-pink-400' :
                                  milestone.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                  milestone.color === 'green' ? 'text-green-600 dark:text-green-400' :
                                  milestone.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                                  milestone.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                  milestone.color === 'red' ? 'text-red-600 dark:text-red-400' :
                                  milestone.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                                  milestone.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                                  'text-gray-600 dark:text-gray-400'
                                }`}>
                                  <TrendingUp className="w-3 h-3" />
                                  <span>Community Impact</span>
                                </div>
                              </div>
                              
                              {/* Click Indicator */}
                              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  milestone.color === 'pink' ? 'bg-pink-500' :
                                  milestone.color === 'blue' ? 'bg-blue-500' :
                                  milestone.color === 'green' ? 'bg-green-500' :
                                  milestone.color === 'orange' ? 'bg-orange-500' :
                                  milestone.color === 'purple' ? 'bg-purple-500' :
                                  milestone.color === 'red' ? 'bg-red-500' :
                                  milestone.color === 'indigo' ? 'bg-indigo-500' :
                                  milestone.color === 'yellow' ? 'bg-yellow-500' :
                                  'bg-gray-500'
                                }`}>
                                  <ChevronRight className="w-3 h-3 text-white" />
                                </div>
                              </div>
                              
                              {/* Hover Glow Effect */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${
                                milestone.color === 'pink' ? 'bg-pink-500' :
                                milestone.color === 'blue' ? 'bg-blue-500' :
                                milestone.color === 'green' ? 'bg-green-500' :
                                milestone.color === 'orange' ? 'bg-orange-500' :
                                milestone.color === 'purple' ? 'bg-purple-500' :
                                milestone.color === 'red' ? 'bg-red-500' :
                                milestone.color === 'indigo' ? 'bg-indigo-500' :
                                milestone.color === 'yellow' ? 'bg-yellow-500' :
                                'bg-gray-500'
                              }`}></div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {milestone.progress}% Complete
                              </span>
                            </div>
                            <div className={`flex items-center space-x-1 text-xs ${
                              milestone.color === 'pink' ? 'text-pink-600 dark:text-pink-400' :
                              milestone.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                              milestone.color === 'green' ? 'text-green-600 dark:text-green-400' :
                              milestone.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                              milestone.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                              milestone.color === 'red' ? 'text-red-600 dark:text-red-400' :
                              milestone.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                              milestone.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                              'text-gray-600 dark:text-gray-400'
                            }`}>
                              <TrendingUp className="w-3 h-3" />
                              <span>Community Impact</span>
                            </div>
                          </div>
                          
                          {/* Click Indicator */}
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              milestone.color === 'pink' ? 'bg-pink-500' :
                              milestone.color === 'blue' ? 'bg-blue-500' :
                              milestone.color === 'green' ? 'bg-green-500' :
                              milestone.color === 'orange' ? 'bg-orange-500' :
                              milestone.color === 'purple' ? 'bg-purple-500' :
                              milestone.color === 'red' ? 'bg-red-500' :
                              milestone.color === 'indigo' ? 'bg-indigo-500' :
                              milestone.color === 'yellow' ? 'bg-yellow-500' :
                              'bg-gray-500'
                            }`}>
                              <ChevronRight className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Milestone Detail Modal */}
            {selectedMilestone && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedMilestone(null)}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl ${
                        selectedMilestone.color === 'pink' ? 'bg-gradient-to-br from-pink-400 to-pink-600 text-white' :
                        selectedMilestone.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white' :
                        selectedMilestone.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600 text-white' :
                        selectedMilestone.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                        selectedMilestone.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white' :
                        selectedMilestone.color === 'red' ? 'bg-gradient-to-br from-red-400 to-red-600 text-white' :
                        selectedMilestone.color === 'indigo' ? 'bg-gradient-to-br from-indigo-400 to-indigo-600 text-white' :
                        selectedMilestone.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                        'bg-gradient-to-br from-gray-400 to-gray-600 text-white'
                      }`}>
                        {selectedMilestone.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedMilestone.event}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{selectedMilestone.month}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedMilestone(null)}
                      className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Event Details</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedMilestone.detail}</p>
                    </div>
                    
                    {/* Progress Status */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Completion Status</h4>
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl font-bold text-green-600">{selectedMilestone.progress}%</div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full bg-gradient-to-r ${
                                selectedMilestone.color === 'pink' ? 'from-pink-500 to-pink-600' :
                                selectedMilestone.color === 'blue' ? 'from-blue-500 to-blue-600' :
                                selectedMilestone.color === 'green' ? 'from-green-500 to-green-600' :
                                selectedMilestone.color === 'orange' ? 'from-orange-500 to-orange-600' :
                                selectedMilestone.color === 'purple' ? 'from-purple-500 to-purple-600' :
                                selectedMilestone.color === 'red' ? 'from-red-500 to-red-600' :
                                selectedMilestone.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                                selectedMilestone.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                                'from-gray-500 to-gray-600'
                              }`}
                              style={{ width: `${selectedMilestone.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Metrics</h4>
                      <div className="flex items-center space-x-2">
                        <Target className={`w-5 h-5 ${
                          selectedMilestone.color === 'pink' ? 'text-pink-600' :
                          selectedMilestone.color === 'blue' ? 'text-blue-600' :
                          selectedMilestone.color === 'green' ? 'text-green-600' :
                          selectedMilestone.color === 'orange' ? 'text-orange-600' :
                          selectedMilestone.color === 'purple' ? 'text-purple-600' :
                          selectedMilestone.color === 'red' ? 'text-red-600' :
                          selectedMilestone.color === 'indigo' ? 'text-indigo-600' :
                          selectedMilestone.color === 'yellow' ? 'text-yellow-600' :
                          'text-gray-600'
                        }`} />
                        <span className="text-gray-600 dark:text-gray-300">{selectedMilestone.metrics}</span>
                      </div>
                    </div>
                    
                    {/* Timeline Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Timeline Information</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Date</div>
                          <div className="font-medium text-gray-900 dark:text-white">{selectedMilestone.month}</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Status</div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {selectedMilestone.completed ? 'Completed' : 'In Progress'}
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Category</div>
                          <div className="font-medium text-gray-900 dark:text-white capitalize">{selectedMilestone.color}</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Impact</div>
                          <div className="font-medium text-gray-900 dark:text-white">High</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Details based on event */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Additional Information</h4>
                      <div className="space-y-2">
                        {selectedMilestone.event === "Neurodiversity Partnership" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">15+ neurodiversity organizations partnered</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Cognitive specialists collaboration established</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Lived experience integration framework created</span>
                            </div>
                          </>
                        )}
                        {selectedMilestone.event === "Expert Advisory Board" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">8 leading cognitive specialists onboard</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Healthcare professionals from diverse backgrounds</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Quarterly strategic review meetings established</span>
                            </div>
                          </>
                        )}
                        {selectedMilestone.event === "Community Platform Launch" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Comprehensive online platform deployed</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Peer support forums and chat features</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Resource sharing library implemented</span>
                            </div>
                          </>
                        )}
                        {selectedMilestone.event === "Network Expansion" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">500+ professionals joined network</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">2000+ community members engaged</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">400% growth in community engagement</span>
                            </div>
                          </>
                        )}
                        {selectedMilestone.event === "Educational Workshops" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Monthly workshop schedule established</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Cognitive health and support strategies curriculum</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">1000+ participants reached</span>
                            </div>
                          </>
                        )}
                        {selectedMilestone.event === "Family Support Groups" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Dedicated caregiver support groups</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Weekly meetings and resource sharing</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">300+ families supported</span>
                            </div>
                          </>
                        )}
                        {selectedMilestone.event === "Professional Training" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Comprehensive training programs developed</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Healthcare professionals and educators trained</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">200+ professionals certified</span>
                            </div>
                          </>
                        )}
                        {selectedMilestone.event === "Community Milestone" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Major community growth milestone achieved</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">2000+ active community members</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-gray-600 dark:text-gray-300">Sustainable community ecosystem established</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Status */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Current Status</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-600 font-medium">
                          {selectedMilestone.completed ? 'Successfully Completed' : 'In Progress'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Community Stats Dashboard */}
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

            {/* Enhanced Initiatives Section */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-pink-600" />
                Community Initiatives
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-1">
                {communityInitiatives.map((initiative, index) => (
                  <div 
                    key={index}
                    className={`p-2 border-2 rounded-lg transition-all duration-300 hover:shadow-sm hover:scale-100 cursor-pointer ${
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
                        
                        {/* Features List */}
                        <div className="space-y-2">
                          {initiative.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <UserCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Outcomes Section */}
                        <div className="mt-4 pt-4 border-t border-pink-200 dark:border-pink-700">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-pink-600" />
                            Key Outcomes
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {initiative.outcomes.map((outcome, outcomeIndex) => (
                              <div key={outcomeIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300 text-xs">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink-200 dark:border-pink-700">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-pink-600" />
                        <span className="text-pink-600 font-bold text-sm">{initiative.participants}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        initiative.impact === 'High' 
                          ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {initiative.impact} Impact
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
                        <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-xs font-medium rounded-full">
                          {achievement.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {selectedAchievement === achievement.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="w-5 h-5 text-pink-600" />
                        <span className="font-semibold text-gray-900 dark:text-white">Achievement Details</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        This milestone demonstrates our commitment to building inclusive communities and fostering meaningful collaborations that empower individuals with cognitive disabilities.
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
                <Zap className="w-6 h-6 mr-3 text-pink-600" />
                Community Technology Stack
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
                      <span className="text-lg font-bold text-pink-600">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full transition-all duration-1000"
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

        {/* Hero Section - At the End */}
        <div className={`bg-gradient-to-br from-pink-600 via-pink-700 to-purple-800 text-white rounded-2xl shadow-2xl p-8 mt-12`}>
          <div className="text-center">
            <HelpingHand className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">The Community Era</h2>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Where revolutionary ideas transformed into life-changing cognitive support solutions through the power of community collaboration and shared experiences
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2,000+</div>
                <div className="text-pink-200">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-pink-200">Professional Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-pink-200">Support Groups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-pink-200">Resources Shared</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityExplore;
