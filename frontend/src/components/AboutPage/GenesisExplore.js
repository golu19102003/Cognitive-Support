import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, Award, TrendingUp, Target, Zap, Globe, Shield, Star, ChevronRight, Clock, MapPin, ExternalLink, Brain, Lightbulb, Rocket, Sparkles, Activity, BarChart, Eye, Heart, MessageCircle, UserCheck, Award as AwardIcon, TrendingUp as TrendingUpIcon, Target as TargetIcon, Filter, Search, ChevronDown, ChevronUp, Palette, ArrowUpDown, X, Download } from 'lucide-react';

const GenesisExplore = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('chronological');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeMetric, setActiveMetric] = useState('growth');
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [showInitiativeModal, setShowInitiativeModal] = useState(false);

  // PDF Download Function
  const downloadPDF = (modalData, modalType) => {
    // For now, create a simple text download as a placeholder
    // In a real implementation, you would use a PDF library like jsPDF
    const content = `
${modalType === 'achievement' ? 'ACHIEVEMENT DETAILS' : 
  modalType === 'metric' ? 'PERFORMANCE METRICS' : 
  modalType === 'technology' ? 'TECHNOLOGY INFORMATION' : 
  'INITIATIVE DETAILS'}

========================================
Logo: C:\\Users\\pranj\\OneDrive\\Desktop\\My Projects\\Final Year Major Project Documents\\Cognitive-Support\\frontend\\public\\Longs_logo.png
========================================

${modalType === 'achievement' && modalData ? `
Title: ${modalData.title}
Category: ${modalData.category}
Impact: ${modalData.impact}
Date: ${modalData.date}

Description:
${modalData.description}` :

modalType === 'metric' && modalData ? `
Metric: ${modalData.label}
Value: ${modalData.value}
Trend: ${modalData.trend}
Impact: ${modalData.impact}
Category: ${modalData.category}
Timeframe: ${modalData.timeframe}

Description:
${modalData.description}` :

modalType === 'technology' && modalData ? `
Technology: ${modalData.name}
Category: ${modalData.category}
Proficiency: ${modalData.level}%
Experience: ${modalData.experience}
Projects: ${modalData.projects}

Description:
${modalData.description}` :

modalType === 'initiative' && modalData ? `
Initiative: ${modalData.title}
Category: ${modalData.category}
Status: ${modalData.status}
Impact: ${modalData.impact}

Description:
${modalData.description}` : ''}

========================================
Generated on: ${new Date().toLocaleString()}
========================================
`;
    
    // Create and download file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${modalType}_${modalData?.title || modalData?.label || modalData?.name || 'details'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

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

  const handleShareViaGmail = (milestone) => {
    const subject = encodeURIComponent(`Genesis Milestone: ${milestone.event} - ${milestone.month}`);
    const body = encodeURIComponent(
      `Hello,\n\nI wanted to share this amazing milestone from our genesis journey:\n\n` +
      `📅 ${milestone.month}\n` +
      `🎯 ${milestone.event}\n` +
      `📝 ${milestone.detail}\n\n` +
      `This represents our commitment to building a supportive community for cognitive health and wellness.\n\n` +
      `Learn more about our journey and join us in making a difference!\n\n` +
      `Best regards,\n` +
      `PriHub Genesis Team`
    );
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleViewDetails = (milestone) => {
    setShowDetailsModal(milestone);
  };

  const getFilteredMilestones = () => {
    let filtered = [
      { 
        month: "January", 
        event: "Research phase initiated", 
        detail: "Comprehensive study of cognitive disability challenges",
        icon: "🔬",
        progress: 100,
        color: "purple",
        side: "left"
      },
      { 
        month: "March", 
        event: "Team formation", 
        detail: "Multidisciplinary team assembled",
        icon: "👥",
        progress: 100,
        color: "blue",
        side: "right"
      },
      { 
        month: "June", 
        event: "Funding secured", 
        detail: "Seed funding for prototype development",
        icon: "💰",
        progress: 100,
        color: "green",
        side: "left"
      },
      { 
        month: "September", 
        event: "First prototype", 
        detail: "Initial cognitive support platform launched",
        icon: "🚀",
        progress: 100,
        color: "orange",
        side: "right"
      },
      { 
        month: "December", 
        event: "User testing", 
        detail: "Beta testing with 100+ users",
        icon: "👤",
        progress: 100,
        color: "red",
        side: "left"
      }
    ];
    
    // Apply category filter
    if (selectedFilter !== 'all') {
      if (selectedFilter === 'research') {
        filtered = filtered.filter(item => 
          item.event.toLowerCase().includes('research') || 
          item.event.toLowerCase().includes('study')
        );
      } else if (selectedFilter === 'team') {
        filtered = filtered.filter(item => 
          item.event.toLowerCase().includes('team') || 
          item.event.toLowerCase().includes('formation')
        );
      } else if (selectedFilter === 'development') {
        filtered = filtered.filter(item => 
          item.event.toLowerCase().includes('prototype') || 
          item.event.toLowerCase().includes('testing')
        );
      } else if (selectedFilter === 'funding') {
        filtered = filtered.filter(item => 
          item.event.toLowerCase().includes('funding') || 
          item.event.toLowerCase().includes('seed')
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
        // Parse the month from item.month (e.g., "January")
        const monthMap = {
          'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
          'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
        };
        const itemDate = new Date(2019, monthMap[item.month]);
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
      filtered.sort((a, b) => new Date(b.month + ' 2019') - new Date(a.month + ' 2019'));
    }
    // chronological is default (already sorted)
    
    return filtered;
  };

  const achievements = [
    {
      id: 1,
      title: "Research Started",
      description: "Our journey began when healthcare professionals, educators, and families recognized critical gaps in cognitive support services. Through countless conversations with individuals living with cognitive disabilities, we understood the urgent need for comprehensive, accessible, and personalized support solutions. This foundational research phase involved extensive literature reviews, stakeholder interviews, and needs assessments that shaped our entire approach.",
      date: "January 2019",
      impact: "Foundation",
      icon: "🔬",
      color: "purple",
      details: {
        methodology: "Qualitative research with 50+ interviews",
        participants: "Healthcare professionals, educators, families",
        duration: "3 months intensive research",
        outcomes: "Identified 12 critical support gaps",
        next_steps: "Prototype development based on findings",
        keyFeatures: [
          'Comprehensive needs assessment',
          'Multi-stakeholder interviews',
          'Evidence-based research methodology',
          'Gap analysis and identification',
          'Community engagement programs',
          'Expert consultation services'
        ],
        achievements: [
          '500+ hours of dedicated research',
          'Evidence-based cognitive frameworks',
          'Multi-disciplinary expert collaboration',
          '12 critical support gaps identified',
          '50+ stakeholder interviews conducted',
          'Comprehensive research methodology'
        ]
      },
      metrics: {
        research_hours: "500+",
        interviews_conducted: "50+",
        gap_analysis: "12 critical areas identified",
        stakeholder_meetings: "25+"
      }
    },
    {
      id: 2,
      title: "Team Formed",
      description: "Assembled multidisciplinary team of healthcare professionals, educators, and technologists to address cognitive support challenges with diverse expertise and perspectives. Our team brought together decades of combined experience in cognitive science, software development, educational psychology, and disability advocacy, creating a powerhouse of innovation and compassion.",
      date: "March 2019",
      impact: "Team Building",
      icon: "👥",
      color: "blue",
      details: {
        methodology: "Strategic recruitment and team integration",
        team_composition: "5 core members + 15 advisors",
        expertise_areas: "Cognitive science, UX design, development, psychology",
        collaboration_model: "Agile with weekly sprints",
        outcomes: "Fully functional cross-functional team",
        keyFeatures: [
          'Multi-disciplinary team assembly',
          'Expert recruitment and onboarding',
          'Collaborative innovation culture',
          'Agile development methodology',
          'Cross-functional expertise coverage',
          'Expert knowledge sharing'
        ],
        achievements: [
          '20+ specialized team members',
          '400% team growth in 6 months',
          'Multi-disciplinary expertise coverage',
          '75+ combined years of experience',
          '8 key disciplines represented',
          '12 successful sprints completed'
        ]
      },
      metrics: {
        team_size: "20 total members",
        expertise_years: "75+ combined years",
        disciplines_covered: "8 key areas",
        weekly_sprints: "12 sprints completed"
      }
    },
    {
      id: 3,
      title: "Initial Funding",
      description: "Secured seed funding for prototype development and initial research into cognitive support solutions and accessibility technologies. This critical investment enabled us to build our first MVP, conduct user testing with diverse cognitive profiles, and establish the technical infrastructure that would support our ambitious vision for inclusive cognitive support.",
      date: "June 2019",
      impact: "Financial Milestone",
      icon: "💰",
      color: "green",
      details: {
        methodology: "Multi-stage investor pitching and grant applications",
        funding_sources: "Angel investors, research grants, crowdfunding",
        amount_raised: "$250,000 seed funding",
        use_allocation: "60% development, 25% research, 15% operations",
        timeline: "6-month funding round",
        keyFeatures: [
          'Multi-stage investor pitching',
          'Strategic grant applications',
          'Financial resource optimization',
          'Transparent fund allocation',
          'Investor relationship management',
          'Long-term financial planning'
        ],
        achievements: [
          '$250K seed funding secured',
          'Multiple investor partnerships',
          'Strategic financial planning',
          '18 months runway achieved',
          '40% grant approval rate',
          '8 investor partnerships established'
        ]
      },
      metrics: {
        funding_amount: "$250,000",
        investors_count: "8 investors",
        grant_success_rate: "40% approval rate",
        runway_duration: "18 months"
      }
    },
    {
      id: 4,
      title: "First Prototype",
      description: "Developed and tested initial cognitive support platform prototype with comprehensive accessibility features and user-centered design. This groundbreaking prototype incorporated AI-driven personalization, multi-modal communication support, and real-time assistance features, setting new standards for cognitive accessibility technology.",
      date: "September 2019",
      impact: "Technical Achievement",
      icon: "🚀",
      color: "orange",
      details: {
        methodology: "Rapid prototyping with iterative user testing",
        technologies_used: "React, Node.js, AI/ML, Firebase",
        accessibility_features: "WCAG 2.1 AA compliance, screen reader support",
        testing_approach: "User testing with 100+ diverse participants",
        iterations: "15 major iterations based on feedback",
        keyFeatures: [
          'AI-driven personalization engine',
          'Multi-modal communication support',
          'Real-time assistance features',
          'WCAG 2.1 AA compliance',
          'Screen reader compatibility',
          'User-centered design approach'
        ],
        achievements: [
          '25+ core platform features',
          '98% WCAG compliance score',
          '4.7/5 user satisfaction rating',
          '100+ diverse user testing participants',
          '15 major iterations completed',
          '95% bug resolution rate within 48 hours'
        ]
      },
      metrics: {
        development_time: "4 months",
        features_built: "25+ core features",
        accessibility_score: "98% WCAG compliance",
        user_satisfaction: "4.7/5 average rating",
        bug_fix_rate: "95% issues resolved within 48 hours"
      }
    }
  ];

  const technologies = [
    { name: "React.js", level: 85, category: "Intelligence", icon: "⚛️", description: "Component-based UI framework", experience: "3+ years", projects: "15+" },
    { name: "Node.js", level: 80, category: "Backend", icon: "🟢", description: "JavaScript runtime environment", experience: "3+ years", projects: "12+" },
    { name: "Firebase", level: 90, category: "Database", icon: "🔥", description: "Real-time database & authentication", experience: "4+ years", projects: "20+" },
    { name: "AI/ML", level: 75, category: "Frontend", icon: "🤖", description: "Machine learning & cognitive AI", experience: "2+ years", projects: "8+" },
    { name: "Tailwind CSS", level: 95, category: "Styling", icon: "🎨", description: "Utility-first CSS framework", experience: "3+ years", projects: "25+" },
    { name: "Framer Motion", level: 85, category: "Animation", icon: "🎬", description: "React animation library", experience: "2+ years", projects: "10+" },
    { name: "TypeScript", level: 88, category: "Language", icon: "📘", description: "Typed JavaScript superset", experience: "3+ years", projects: "18+" },
    { name: "MongoDB", level: 82, category: "Database", icon: "🍃", description: "NoSQL document database", experience: "3+ years", projects: "14+" },
    { name: "GraphQL", level: 78, category: "API", icon: "🔗", description: "Query language for APIs", experience: "2+ years", projects: "6+" },
    { name: "Docker", level: 70, category: "DevOps", icon: "🐳", description: "Container platform", experience: "2+ years", projects: "5+" }
  ];

  const genesisInitiatives = [
    {
      icon: '🔬',
      title: 'Research Foundation',
      description: 'Comprehensive cognitive disability research and analysis',
      impact: '500+ research hours',
      status: 'Completed',
      color: 'purple',
      detailedContent: {
        overview: 'Our Research Foundation initiative represents the cornerstone of our genesis journey, involving extensive study of cognitive disability challenges, user needs analysis, and evidence-based approach development.',
        keyFeatures: [
          'Deep cognitive research methodology',
          'Evidence-based framework development',
          'User-centered design approach',
          'Comprehensive needs assessment'
        ],
        achievements: [
          '500+ hours of dedicated research',
          'Evidence-based cognitive frameworks',
          'Multi-disciplinary expert collaboration',
          'Research publication in cognitive science'
        ],
        futureGoals: [
          'Expand research to global demographics',
          'Develop AI-powered research tools',
          'Establish cognitive research lab',
          'Create open research database'
        ],
        testimonials: [
          'The research foundation provided invaluable insights into cognitive challenges.',
          'Evidence-based approach transformed our understanding of user needs.',
          'Comprehensive research methodology set new industry standards.'
        ],
        getInvolved: 'Join our research community to contribute to cognitive science advancement and evidence-based solution development.'
      }
    },
    {
      icon: '👥',
      title: 'Team Excellence',
      description: 'Multidisciplinary expert team assembly and collaboration',
      impact: '20+ specialized experts',
      status: 'Active',
      color: 'blue',
      detailedContent: {
        overview: 'Our Team Excellence initiative focuses on assembling and nurturing a multidisciplinary team of cognitive science experts, developers, researchers, and accessibility specialists.',
        keyFeatures: [
          'Cross-functional team structure',
          'Continuous professional development',
          'Collaborative innovation culture',
          'Expert knowledge sharing'
        ],
        achievements: [
          '20+ specialized team members',
          '400% team growth in 6 months',
          'Multi-disciplinary expertise coverage',
          'Industry-leading talent retention'
        ],
        futureGoals: [
          'Expand to 50+ team members',
          'Establish international talent network',
          'Create internal training academy',
          'Launch expert mentorship program'
        ],
        testimonials: [
          'The multidisciplinary approach brings diverse perspectives to problem-solving.',
          'Team collaboration culture fosters innovation and excellence.',
          'Expert team members provide unmatched cognitive insights.'
        ],
        getInvolved: 'Join our expert team to contribute your specialized skills to cognitive support innovation.'
      }
    },
    {
      icon: '💰',
      title: 'Strategic Funding',
      description: 'Seed funding acquisition and financial resource management',
      impact: '$250K seed investment',
      status: 'Secured',
      color: 'green',
      detailedContent: {
        overview: 'Our Strategic Funding initiative successfully secured seed investment for prototype development, research expansion, and team growth through comprehensive investor presentations.',
        keyFeatures: [
          'Comprehensive funding strategy',
          'Investor relationship management',
          'Financial resource optimization',
          'Transparent fund allocation'
        ],
        achievements: [
          '$250K seed funding secured',
          'Multiple investor partnerships',
          'Strategic financial planning',
          'Resource allocation efficiency'
        ],
        futureGoals: [
          'Series A funding round',
          'Institutional partnerships',
          'Grant acquisition programs',
          'Sustainable revenue models'
        ],
        testimonials: [
          'Strategic funding approach ensured sustainable growth trajectory.',
          'Transparent fund allocation built investor confidence.',
          'Well-planned financial strategy enabled rapid scaling.'
        ],
        getInvolved: 'Partner with us through investment opportunities or strategic funding collaborations.'
      }
    },
    {
      icon: '🚀',
      title: 'Platform Innovation',
      description: 'Advanced cognitive support platform development and deployment',
      impact: '25+ core features',
      status: 'Launched',
      color: 'orange',
      detailedContent: {
        overview: 'Our Platform Innovation initiative delivered a comprehensive cognitive support platform with advanced features, AI integration, and accessibility-first design.',
        keyFeatures: [
          'AI-powered cognitive assistance',
          'Real-time support systems',
          'Accessibility-first design',
          'Multi-platform compatibility'
        ],
        achievements: [
          '25+ core platform features',
          '98% WCAG compliance score',
          '4.7/5 user satisfaction rating',
          '99.9% platform uptime'
        ],
        futureGoals: [
          'Mobile application launch',
          'Advanced AI integration',
          'Global accessibility expansion',
          'Enterprise platform version'
        ],
        testimonials: [
          'Platform innovation exceeded all expectations for cognitive support.',
          'Accessibility-first approach made it usable for everyone.',
          'AI features provide personalized cognitive assistance.'
        ],
        getInvolved: 'Contribute to platform development through testing, feedback, and feature suggestions.'
      }
    }
  ];

  const metrics = [
    { label: "Research Hours", value: "500+", icon: "🔬", trend: "+100%", description: "Deep cognitive research", category: "research", impact: "High", timeframe: "6 months" },
    { label: "Team Members", value: "20", icon: "👥", trend: "+400%", description: "Multidisciplinary experts", category: "team", impact: "Critical", timeframe: "Ongoing" },
    { label: "Funding Raised", value: "$250K", icon: "💰", trend: "+∞", description: "Seed investment secured", category: "financial", impact: "Critical", timeframe: "6 months" },
    { label: "Prototype Features", value: "25+", icon: "🚀", trend: "+300%", description: "Core platform capabilities", category: "development", impact: "High", timeframe: "4 months" },
    { label: "User Testing", value: "100+", icon: "👤", trend: "+200%", description: "Diverse cognitive profiles", category: "testing", impact: "High", timeframe: "2 months" },
    { label: "Accessibility Score", value: "98%", icon: "♿", trend: "+50%", description: "WCAG compliance rating", category: "accessibility", impact: "Critical", timeframe: "3 months" },
    { label: "Satisfaction Rate", value: "4.7/5", icon: "⭐", trend: "+25%", description: "User feedback rating", category: "quality", impact: "High", timeframe: "2 months" },
    { label: "API Performance", value: "99.9%", icon: "⚡", trend: "+15%", description: "Uptime & response time", category: "performance", impact: "High", timeframe: "6 months" },
    { label: "Code Coverage", value: "92%", icon: "🛡️", trend: "+30%", description: "Testing & quality assurance", category: "quality", impact: "Medium", timeframe: "4 months" },
    { label: "Deployment Frequency", value: "50+", icon: "🔄", trend: "+400%", description: "Continuous integration", category: "devops", impact: "Medium", timeframe: "6 months" },
    { label: "Bug Resolution", value: "95%", icon: "🔧", trend: "+60%", description: "Issue resolution rate", category: "support", impact: "High", timeframe: "Ongoing" },
    { label: "Documentation", value: "500+", icon: "📚", trend: "+200%", description: "Technical documentation pages", category: "knowledge", impact: "Medium", timeframe: "6 months" }
  ];

  const impactMetrics = [
    {
      title: "Community Impact",
      value: "2,500+",
      description: "Individuals directly impacted through research and initial outreach",
      icon: "👥",
      color: "purple",
      growth: "+150%",
      timeframe: "2019-2020"
    },
    {
      title: "Technical Innovation",
      value: "15 Patents",
      description: "Novel approaches to cognitive support technology and accessibility features",
      icon: "�",
      color: "purple",
      growth: "+200%",
      timeframe: "2019-2020"
    },
    {
      title: "Research Publications",
      value: "8 Papers",
      description: "Academic contributions to cognitive disability research and accessibility studies",
      icon: "📚",
      color: "purple",
      growth: "+300%",
      timeframe: "2019-2020"
    },
    {
      title: "Partnership Network",
      value: "50+ Organizations",
      description: "Strategic alliances with healthcare institutions, universities, and advocacy groups",
      icon: "🤝",
      color: "purple",
      growth: "+400%",
      timeframe: "2019-2020"
    }
  ];

  const growthChart = [
    { month: "Jan", research: 40, team: 5, funding: 0, development: 0 },
    { month: "Feb", research: 60, team: 8, funding: 0, development: 0 },
    { month: "Mar", research: 80, team: 15, funding: 0, development: 5 },
    { month: "Apr", research: 50, team: 18, funding: 0, development: 12 },
    { month: "May", research: 30, team: 20, funding: 0, development: 25 },
    { month: "Jun", research: 20, team: 20, funding: 250, development: 35 },
    { month: "Jul", research: 10, team: 20, funding: 250, development: 50 },
    { month: "Aug", research: 5, team: 20, funding: 250, development: 70 },
    { month: "Sep", research: 0, team: 20, funding: 250, development: 90 },
    { month: "Oct", research: 0, team: 20, funding: 250, development: 85 },
    { month: "Nov", research: 0, team: 20, funding: 250, development: 75 },
    { month: "Dec", research: 0, team: 20, funding: 250, development: 60 }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🌱</div>
            <h1 className="text-4xl font-bold mb-4">The Genesis (2019)</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Where it all began - foundation of our journey to transform cognitive support services
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'achievements', 'initiatives', 'technologies', 'metrics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'border-purple-600 text-purple-600'
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
            {/* Journey Overview */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Target className="w-6 h-6 mr-3 text-purple-600" />
                Journey Overview
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  {/* Section Header with Gradient */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl"></div>
                    <h3 className="relative text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      The Beginning
                    </h3>
                  </div>
                  
                  {/* Content with Enhanced Typography */}
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify border-l-4 border-purple-400 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/10 rounded-r-lg">
                      Our journey began when healthcare professionals, educators, and families recognized critical gaps in cognitive support services. Through countless conversations with individuals living with cognitive disabilities, we understood the urgent need for comprehensive, accessible, and personalized support solutions. This foundational research phase involved extensive literature reviews, stakeholder interviews, and needs assessments that shaped our entire approach.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify border-l-4 border-blue-400 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg">
                      The genesis phase was marked by intensive research, team building, and prototype development. We established the foundation for what would become a revolutionary approach to cognitive support services, setting new standards for accessibility and user-centered design.
                    </p>
                  </div>
                  
                  {/* Enhanced Key Milestones */}
                  <div className="mt-8">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                        <Calendar className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">2019 Key Milestones</h4>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { month: "January", achievement: "Research Foundation", icon: "🔬", color: "purple" },
                        { month: "March", achievement: "Team Assembly", icon: "👥", color: "blue" },
                        { month: "June", achievement: "Seed Funding", icon: "💰", color: "green" },
                        { month: "September", achievement: "First Prototype", icon: "🚀", color: "orange" }
                      ].map((milestone, index) => (
                        <div 
                          key={index} 
                          className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-102 ${
                            milestone.color === 'purple' ? 'bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/30 dark:hover:to-purple-700/30' :
                            milestone.color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30' :
                            milestone.color === 'green' ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:from-green-100 hover:to-green-200 dark:hover:from-green-800/30 dark:hover:to-green-700/30' :
                            'bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 hover:from-orange-100 hover:to-orange-200 dark:hover:from-orange-800/30 dark:hover:to-orange-700/30'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 ${
                            milestone.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                            milestone.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                            milestone.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                            'bg-gradient-to-br from-orange-400 to-orange-500'
                          }`}>
                            {milestone.icon}
                          </div>
                          <div className="flex-1">
                            <div className={`font-bold text-sm mb-1 ${
                              milestone.color === 'purple' ? 'text-purple-700 dark:text-purple-300' :
                              milestone.color === 'blue' ? 'text-blue-700 dark:text-blue-300' :
                              milestone.color === 'green' ? 'text-green-700 dark:text-green-300' :
                              'text-orange-700 dark:text-orange-300'
                            }`}>
                              {milestone.month}
                            </div>
                            <div className="text-gray-700 dark:text-gray-300 font-medium">{milestone.achievement}</div>
                          </div>
                          <ChevronRight className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-1 ${
                            milestone.color === 'purple' ? 'text-purple-500' :
                            milestone.color === 'blue' ? 'text-blue-500' :
                            milestone.color === 'green' ? 'text-green-500' :
                            'text-orange-500'
                          }`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Section Header with Gradient */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-xl blur-xl"></div>
                    <h3 className="relative text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mr-3">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      Revolutionary Impact
                    </h3>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify border-l-4 border-green-400 pl-4 py-2 bg-green-50/50 dark:bg-green-900/10 rounded-r-lg">
                      The genesis year wasn't just about building products—it was about reimagining how cognitive support could and should work. We challenged conventional approaches, embraced cutting-edge technology, and placed individuals with cognitive disabilities at the center of every decision, process, and innovation.
                    </p>
                  </div>
                  
                  {/* Enhanced Impact Stats */}
                  <div className="mt-8">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-2">
                        <BarChart className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Impact Metrics</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Lives Impacted", value: "2,500+", icon: "👥", color: "purple", trend: "+150%" },
                        { label: "Innovation Score", value: "98%", icon: "💡", color: "blue", trend: "+200%" },
                        { label: "Research Papers", value: "8", icon: "📚", color: "green", trend: "+300%" },
                        { label: "Partnerships", value: "50+", icon: "🤝", color: "orange", trend: "+400%" },
                        { label: "User Satisfaction", value: "4.8/5", icon: "⭐", color: "yellow", trend: "+120%" },
                        { label: "Global Reach", value: "15+", icon: "🌍", color: "indigo", trend: "+250%" }
                      ].map((stat, index) => (
                        <div 
                          key={index} 
                          className={`group p-4 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 text-center ${
                            stat.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/30 dark:hover:to-purple-700/30' :
                            stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30' :
                            stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:from-green-100 hover:to-green-200 dark:hover:from-green-800/30 dark:hover:to-green-700/30' :
                            stat.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 hover:from-orange-100 hover:to-orange-200 dark:hover:from-orange-800/30 dark:hover:to-orange-700/30' :
                            stat.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 hover:from-yellow-100 hover:to-yellow-200 dark:hover:from-yellow-800/30 dark:hover:to-yellow-700/30' :
                            'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 hover:from-indigo-100 hover:to-indigo-200 dark:hover:from-indigo-800/30 dark:hover:to-indigo-700/30'
                          }`}
                        >
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                            stat.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                            stat.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                            stat.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                            stat.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                            stat.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                            'bg-gradient-to-br from-indigo-400 to-indigo-500'
                          }`}>
                            {stat.icon}
                          </div>
                          <div className={`text-xl font-bold mb-1 ${
                            stat.color === 'purple' ? 'text-purple-700 dark:text-purple-300' :
                            stat.color === 'blue' ? 'text-blue-700 dark:text-blue-300' :
                            stat.color === 'green' ? 'text-green-700 dark:text-green-300' :
                            stat.color === 'orange' ? 'text-orange-700 dark:text-orange-300' :
                            stat.color === 'yellow' ? 'text-yellow-700 dark:text-yellow-300' :
                            'text-indigo-700 dark:text-indigo-300'
                          }`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">{stat.label}</div>
                          <div className="flex items-center justify-center space-x-1">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-green-600 font-semibold">{stat.trend}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-indigo-50/30 dark:from-purple-900/5 dark:via-blue-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    2019 Timeline
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Live Progress</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              {/* Timeline Filters Section */}
              <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-8 border border-purple-200 dark:border-purple-700`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Filter className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced Filters</h3>
                    <button
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                    >
                      {showAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {getFilteredMilestones().length} of 5 milestones
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
                      className="pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm w-full lg:w-56"
                    />
                  </div>
                  
                  {/* Category Filter Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'all' 
                          ? 'bg-purple-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedFilter('research')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'research' 
                          ? 'bg-purple-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Research
                    </button>
                    <button
                      onClick={() => setSelectedFilter('team')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'team' 
                          ? 'bg-purple-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Team
                    </button>
                    <button
                      onClick={() => setSelectedFilter('development')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'development' 
                          ? 'bg-purple-600 text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Development
                    </button>
                    <button
                      onClick={() => setSelectedFilter('funding')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedFilter === 'funding' 
                          ? 'bg-purple-600 text-white shadow-md' 
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
                          {['purple', 'blue', 'green', 'orange', 'red'].map(color => (
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
                                'bg-red-500'
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
              
              <div className="relative space-y-6">
                {/* Vertical Timeline Line */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 transform -translate-x-1/2"></div>
                  
                  {/* Timeline Year Indicator */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                      2019
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
                            item.color === 'purple' ? 'bg-gradient-to-br from-purple-200 to-purple-300 group-hover:from-purple-300 group-hover:to-purple-400' :
                            item.color === 'blue' ? 'bg-gradient-to-br from-blue-200 to-blue-300 group-hover:from-blue-300 group-hover:to-blue-400' :
                            item.color === 'green' ? 'bg-gradient-to-br from-green-200 to-green-300 group-hover:from-green-300 group-hover:to-green-400' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-200 to-orange-300 group-hover:from-orange-300 group-hover:to-orange-400' :
                            'bg-gradient-to-br from-red-200 to-red-300 group-hover:from-red-300 group-hover:to-red-400'
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
                            <div className="font-semibold">{item.month} 2019</div>
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
                              item.color === 'purple' ? 'border-purple-300' :
                              item.color === 'blue' ? 'border-blue-300' :
                              item.color === 'green' ? 'border-green-300' :
                              item.color === 'orange' ? 'border-orange-300' :
                              'border-red-300'
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
                          hoveredMilestone === index ? 'bg-purple-50 dark:bg-purple-900/30 border-2 border-purple-300' : 'bg-white dark:bg-gray-800 border-2 border-transparent'
                        } ${item.side === 'left' ? 'mr-4' : 'ml-4'}`}
                        onMouseEnter={() => setHoveredMilestone(index)}
                        onMouseLeave={() => setHoveredMilestone(null)}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                            hoveredMilestone === index ? 'scale-110 rotate-6' : 'scale-100'
                          } ${
                            item.color === 'purple' ? 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700' :
                            item.color === 'blue' ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' :
                            item.color === 'green' ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700' :
                            'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800 dark:to-red-700'
                          }`}>
                            {item.icon}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-bold text-gray-900 dark:text-white text-lg">{item.month}</span>
                              <span className="text-sm text-gray-500">2019</span>
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
                              <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Calendar className="w-4 h-4 text-purple-600" />
                                  <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Timeline Details</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-1.5 h-1.5 bg-${item.color}-500 rounded-full`}></div>
                                    <span className="text-gray-700 dark:text-gray-300">Status: Complete</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-1.5 h-1.5 bg-green-500 rounded-full`}></div>
                                    <span className="text-gray-700 dark:text-gray-300">Impact: High</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-1.5 h-1.5 bg-blue-500 rounded-full`}></div>
                                    <span className="text-gray-700 dark:text-gray-300">Duration: 3 months</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-1.5 h-1.5 bg-orange-500 rounded-full`}></div>
                                    <span className="text-gray-700 dark:text-gray-300">Team: 20 members</span>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* Action Buttons */}
                            <div className="flex items-center space-x-3 mt-4">
                              <button
                                onClick={() => handleShareViaGmail(item)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                  item.color === 'purple' ? 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50' :
                                  item.color === 'blue' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50' :
                                  item.color === 'green' ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50' :
                                  item.color === 'orange' ? 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50' :
                                  'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50'
                                }`}
                              >
                                <MessageCircle className="w-4 h-4" />
                                <span>Share</span>
                              </button>
                              
                              <button
                                onClick={() => handleViewDetails(item)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                  item.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600' :
                                  item.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' :
                                  item.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600' :
                                  item.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600' :
                                  'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600'
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
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-8">
            {/* Enhanced Header */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-indigo-50/30 dark:from-pink-900/5 dark:via-purple-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    Key Achievements
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Genesis Milestones</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-pink-100 dark:border-pink-800 group cursor-pointer relative`}
                    onClick={() => {
                      setSelectedAchievement(achievement);
                      setShowAchievementModal(true);
                    }}
                  >
                    {/* View Details Button - Top Right */}
                    <div className="absolute top-4 right-4">
                      <button className={`flex items-center space-x-2 px-3 py-2 text-white rounded-lg transition-all duration-300 text-sm font-medium ${
                        achievement.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                        achievement.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                        achievement.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                        achievement.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' :
                        achievement.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' :
                        'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
                      }`}>
                        <Award className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                    
                    {/* Enhanced Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      achievement.color === 'purple' ? 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700' :
                      achievement.color === 'blue' ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' :
                      achievement.color === 'green' ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700' :
                      achievement.color === 'orange' ? 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700' :
                      achievement.color === 'red' ? 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800 dark:to-red-700' :
                      'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
                    }`}>
                      {achievement.icon}
                    </div>
                    
                    {/* Enhanced Value */}
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">
                      {achievement.title}
                    </div>
                    
                    {/* Enhanced Description */}
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 font-medium">
                      {achievement.detailedContent?.overview || achievement.description}
                    </div>
                    
                    {/* Enhanced Metrics */}
                    <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-pink-600 mb-2">
                      <Target className="w-4 h-4" />
                      <span>{achievement.status}</span>
                    </div>
                    
                    {/* Enhanced Date */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-8 mt-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Genesis Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones that define our journey of foundation and excellence in cognitive support technology
          </p>
        </div>

        {/* Achievement Details Modal */}
        {showAchievementModal && selectedAchievement && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAchievementModal(false)}
          >
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
              selectedAchievement.color === 'purple' ? 'border-4 border-purple-200 dark:border-purple-700' :
              selectedAchievement.color === 'blue' ? 'border-4 border-blue-200 dark:border-blue-700' :
              selectedAchievement.color === 'green' ? 'border-4 border-green-200 dark:border-green-700' :
              selectedAchievement.color === 'orange' ? 'border-4 border-orange-200 dark:border-orange-700' :
              selectedAchievement.color === 'red' ? 'border-4 border-red-200 dark:border-red-700' :
              'border-4 border-gray-200 dark:border-gray-700'
            }`}
            onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`p-6 ${
                selectedAchievement.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30' :
                selectedAchievement.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30' :
                selectedAchievement.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30' :
                selectedAchievement.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30' :
                selectedAchievement.color === 'red' ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30' :
                'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/30'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl ${
                      selectedAchievement.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                      selectedAchievement.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                      selectedAchievement.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                      selectedAchievement.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                      selectedAchievement.color === 'red' ? 'bg-gradient-to-br from-red-400 to-red-600' :
                      'bg-gradient-to-br from-gray-400 to-gray-600'
                    }`}>
                      {selectedAchievement.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedAchievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedAchievement.impact}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => downloadPDF(selectedAchievement, 'achievement')}
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      title="Download PDF"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setShowAchievementModal(false)}
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      title="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Overview */}
                <div>
                  <h4 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center`}>
                    <Lightbulb className={`w-5 h-5 mr-2 ${
                      selectedAchievement.color === 'purple' ? 'text-purple-600' :
                      selectedAchievement.color === 'blue' ? 'text-blue-600' :
                      selectedAchievement.color === 'green' ? 'text-green-600' :
                      selectedAchievement.color === 'orange' ? 'text-orange-600' :
                      selectedAchievement.color === 'red' ? 'text-red-600' :
                      'text-gray-600'
                    }`} />
                    Overview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedAchievement.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-600" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedAchievement.details?.keyFeatures?.map((feature, idx) => (
                      <div key={idx} className={`p-3 rounded-lg border-l-4 ${
                        idx === 0 ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                        idx === 1 ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                        idx === 2 ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                        idx === 3 ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                        'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                      }`}>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-indigo-600" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedAchievement.details?.achievements?.map((achievement, idx) => (
                      <div key={idx} className={`p-3 rounded-lg border-l-4 ${
                        idx === 0 ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                        idx === 1 ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                        idx === 2 ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                        idx === 3 ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-400' :
                        'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                      }`}>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Information */}
                <div className={`p-4 rounded-lg bg-gradient-to-r border ${
                  selectedAchievement.color === 'purple' ? 'from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/40 border-purple-200 dark:border-purple-700' :
                  selectedAchievement.color === 'blue' ? 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/40 border-blue-200 dark:border-blue-700' :
                  selectedAchievement.color === 'green' ? 'from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/40 border-green-200 dark:border-green-700' :
                  selectedAchievement.color === 'orange' ? 'from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/40 border-orange-200 dark:border-orange-700' :
                  selectedAchievement.color === 'red' ? 'from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/40 border-red-200 dark:border-red-700' :
                  'from-gray-100 to-gray-200 dark:from-gray-900/30 dark:to-gray-800/40 border-gray-200 dark:border-gray-700'
                }`}>
                  <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center`}>
                    <Calendar className={`w-5 h-5 mr-2 ${
                      selectedAchievement.color === 'purple' ? 'text-purple-600' :
                      selectedAchievement.color === 'blue' ? 'text-blue-600' :
                      selectedAchievement.color === 'green' ? 'text-green-600' :
                      selectedAchievement.color === 'orange' ? 'text-orange-600' :
                      selectedAchievement.color === 'red' ? 'text-red-600' :
                      'text-gray-600'
                    }`} />
                    Achievement Date
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedAchievement.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Genesis Initiatives Tab */}
        {activeTab === 'initiatives' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-indigo-50/30 dark:from-purple-900/5 dark:via-blue-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <Rocket className="w-4 h-4 text-white" />
                    </div>
                    Genesis Initiatives
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Active Programs</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* Genesis Initiatives Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {genesisInitiatives.map((initiative, index) => (
                  <div 
                    key={index}
                    className={`relative border-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer ${
                      selectedInitiative === index 
                        ? `border-${initiative.color}-500 bg-${initiative.color}-50 dark:bg-${initiative.color}-900/30 ring-2 ring-${initiative.color}-300` 
                        : `border-${initiative.color}-200 dark:border-${initiative.color}-700 bg-white dark:bg-gray-800`
                    }`}
                    onMouseEnter={() => setHoveredMilestone(index)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    onClick={() => {
                      setSelectedInitiative(initiative);
                      setShowInitiativeModal(true);
                    }}
                  >
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="text-5xl mb-2 animate-bounce">{initiative.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {initiative.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {initiative.description}
                          </p>
                        </div>
                      </div>

                      {/* Key Features in Main Grid */}
                      <div className="mb-4">
                        <h4 className={`text-sm font-semibold text-${initiative.color}-700 dark:text-${initiative.color}-300 mb-2 flex items-center`}>
                          <Star className="w-4 h-4 mr-1" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {initiative.detailedContent.keyFeatures.map((feature, idx) => (
                            <div 
                              key={idx} 
                              className={`group relative p-2 rounded-lg bg-gradient-to-r from-${initiative.color}-50 to-${initiative.color}-100 dark:from-${initiative.color}-900/20 dark:to-${initiative.color}-800/20 border border-${initiative.color}-200 hover:border-${initiative.color}-400 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer`}
                            >
                              <div className={`absolute top-1 right-1 w-2 h-2 rounded-full bg-${initiative.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                <div className="w-full h-full rounded-full bg-white"></div>
                              </div>
                              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium group-hover:text-${initiative.color}-800 dark:group-hover:text-${initiative.color}-200 transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Learn More Button and Impact */}
                      <div className="flex items-center justify-between">
                        {/* Learn More Button */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click from firing
                            setSelectedInitiative(initiative);
                            setShowInitiativeModal(true);
                          }}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                            initiative.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600' :
                            initiative.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' :
                            initiative.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600' :
                            initiative.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600' :
                            'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
                          }`}
                        >
                          <ChevronRight className="w-4 h-4" />
                          <span>Learn More</span>
                        </button>
                        
                        {/* Impact on Right Side */}
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {initiative.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === 'technologies' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-indigo-50/30 dark:from-purple-900/5 dark:via-blue-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    Technology Stack
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Active Technologies</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              {/* Technology Categories Overview */}
              <div className="relative mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Frontend', 'Backend', 'Database', 'Intelligence', 'Styling', 'Animation', 'Language', 'API', 'DevOps'].map((category, index) => (
                    <div key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-600">
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative grid md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="group relative">
                    {/* Card with Advanced Hover Effects */}
                    <div 
                      className="space-y-4 p-6 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-purple-100 dark:border-purple-800 relative overflow-hidden cursor-pointer"
                      onClick={() => setSelectedTechnology(tech)}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-xl"></div>
                      </div>
                      
                      {/* Technology Header */}
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg ${
                            tech.category === 'Frontend' ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-blue-500/50' :
                            tech.category === 'Backend' ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-green-500/50' :
                            tech.category === 'Database' ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-orange-500/50' :
                            tech.category === 'Intelligence' ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-purple-500/50' :
                            tech.category === 'Styling' ? 'bg-gradient-to-br from-pink-400 to-pink-600 text-white shadow-pink-500/50' :
                            tech.category === 'Animation' ? 'bg-gradient-to-br from-indigo-400 to-indigo-600 text-white shadow-indigo-500/50' :
                            tech.category === 'Language' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-yellow-500/50' :
                            tech.category === 'API' ? 'bg-gradient-to-br from-red-400 to-red-600 text-white shadow-red-500/50' :
                            tech.category === 'DevOps' ? 'bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-gray-500/50' :
                            'bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-gray-500/50'
                          }`}>
                            {tech.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {tech.name}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</span>
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-green-600 font-medium">Active</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">{tech.level}%</div>
                          <div className="text-xs text-gray-500">Proficiency</div>
                        </div>
                      </div>
                      
                      {/* Technology Description */}
                      <p className="relative text-sm text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                        {tech.description}
                      </p>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                            tech.category === 'Frontend' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                            tech.category === 'Backend' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                            tech.category === 'Database' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                            tech.category === 'Intelligence' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                            tech.category === 'Styling' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                            tech.category === 'Animation' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                            tech.category === 'Language' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                            tech.category === 'API' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                            tech.category === 'DevOps' ? 'bg-gradient-to-r from-gray-500 to-gray-600' :
                            'bg-gradient-to-r from-gray-500 to-gray-600'
                          }`}
                          style={{ width: `${tech.level}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                        </div>
                      </div>
                      
                      {/* Skill Level Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                            tech.level >= 80 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                            tech.level >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                            'bg-gradient-to-r from-orange-500 to-orange-600'
                          }`}>
                            {tech.level >= 80 ? 'Expert' : tech.level >= 60 ? 'Advanced' : 'Intermediate'}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{tech.experience}</span>
                        </div>
                      </div>
                      
                      {/* Projects & Status */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-purple-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.projects} projects</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-medium text-green-600">Production Ready</span>
                        </div>
                      </div>
                      
                      {/* Click Indicator */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Technology Detail Modal */}
              {selectedTechnology && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedTechnology(null)}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl ${
                          selectedTechnology.category === 'Frontend' ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white' :
                          selectedTechnology.category === 'Backend' ? 'bg-gradient-to-br from-green-400 to-green-600 text-white' :
                          selectedTechnology.category === 'Database' ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                          selectedTechnology.category === 'Intelligence' ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white' :
                          selectedTechnology.category === 'Styling' ? 'bg-gradient-to-br from-pink-400 to-pink-600 text-white' :
                          selectedTechnology.category === 'Animation' ? 'bg-gradient-to-br from-indigo-400 to-indigo-600 text-white' :
                          selectedTechnology.category === 'Language' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                          selectedTechnology.category === 'API' ? 'bg-gradient-to-br from-red-400 to-red-600 text-white' :
                          selectedTechnology.category === 'DevOps' ? 'bg-gradient-to-br from-gray-400 to-gray-600 text-white' :
                          'bg-gradient-to-br from-gray-400 to-gray-600 text-white'
                        }`}>
                          {selectedTechnology.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedTechnology.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{selectedTechnology.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => downloadPDF(selectedTechnology, 'technology')}
                          className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                          title="Download PDF"
                        >
                          <Download className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => setSelectedTechnology(null)}
                          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Proficiency Section */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Proficiency Level</h4>
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl font-bold text-purple-600">{selectedTechnology.level}%</div>
                          <div className="flex-1">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full bg-gradient-to-r ${
                                  selectedTechnology.category === 'Frontend' ? 'from-blue-500 to-blue-600' :
                                  selectedTechnology.category === 'Backend' ? 'from-green-500 to-green-600' :
                                  selectedTechnology.category === 'Database' ? 'from-orange-500 to-orange-600' :
                                  selectedTechnology.category === 'Intelligence' ? 'from-purple-500 to-purple-600' :
                                  selectedTechnology.category === 'Styling' ? 'from-pink-500 to-pink-600' :
                                  selectedTechnology.category === 'Animation' ? 'from-indigo-500 to-indigo-600' :
                                  selectedTechnology.category === 'Language' ? 'from-yellow-500 to-yellow-600' :
                                  selectedTechnology.category === 'API' ? 'from-red-500 to-red-600' :
                                  selectedTechnology.category === 'DevOps' ? 'from-gray-500 to-gray-600' :
                                  'from-gray-500 to-gray-600'
                                }`}
                                style={{ width: `${selectedTechnology.level}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedTechnology.description}</p>
                      </div>
                      
                      {/* Technical Details */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Category</div>
                            <div className="font-medium text-gray-900 dark:text-white">{selectedTechnology.category}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Type</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedTechnology.category === 'Frontend' ? 'Client-Side Framework' :
                               selectedTechnology.category === 'Backend' ? 'Server-Side Runtime' :
                               selectedTechnology.category === 'Database' ? 'Data Storage' :
                               selectedTechnology.category === 'Intelligence' ? 'AI/ML Platform' :
                               selectedTechnology.category === 'Styling' ? 'CSS Framework' :
                               selectedTechnology.category === 'Animation' ? 'Animation Library' :
                               selectedTechnology.category === 'Language' ? 'Programming Language' :
                               selectedTechnology.category === 'API' ? 'API Protocol' :
                               selectedTechnology.category === 'DevOps' ? 'Container Platform' :
                               'Development Tool'}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Experience & Projects */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Experience</h4>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-purple-500" />
                            <span className="text-gray-600 dark:text-gray-300">{selectedTechnology.experience}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Projects</h4>
                          <div className="flex items-center space-x-2">
                            <Target className="w-5 h-5 text-purple-500" />
                            <span className="text-gray-600 dark:text-gray-300">{selectedTechnology.projects} completed</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Usage Statistics */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Usage Statistics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">
                              {selectedTechnology.level >= 80 ? 'Daily' : selectedTechnology.level >= 60 ? 'Weekly' : 'Monthly'}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Usage Frequency</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">
                              {selectedTechnology.level >= 80 ? '100%' : selectedTechnology.level >= 60 ? '85%' : '60%'}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Team Adoption</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">
                              {selectedTechnology.level >= 80 ? '5.0' : selectedTechnology.level >= 60 ? '4.5' : '4.0'}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Satisfaction Score</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {selectedTechnology.name === 'React.js' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Component-based architecture</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Virtual DOM for performance</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Rich ecosystem and community</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'Node.js' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">JavaScript runtime environment</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Non-blocking I/O operations</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">NPM package ecosystem</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'Firebase' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Real-time database synchronization</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Authentication & security</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Cloud hosting & CDN</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'AI/ML' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Machine learning models</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Natural language processing</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Cognitive AI capabilities</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'Tailwind CSS' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Utility-first CSS framework</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Responsive design utilities</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Custom configuration</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'Framer Motion' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">React animation library</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Physics-based animations</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Gesture recognition</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'TypeScript' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Type safety and static typing</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Enhanced IDE support</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Better code maintainability</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'MongoDB' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">NoSQL document database</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Flexible schema design</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Horizontal scalability</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'GraphQL' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Query language for APIs</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Single endpoint queries</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Real-time subscriptions</span>
                              </div>
                            </>
                          )}
                          {selectedTechnology.name === 'Docker' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Container platform</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Environment consistency</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Microservices deployment</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Performance Metrics */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Load Time</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedTechnology.category === 'Frontend' ? '< 100ms' :
                               selectedTechnology.category === 'Backend' ? '< 50ms' :
                               selectedTechnology.category === 'Database' ? '< 200ms' :
                               selectedTechnology.category === 'Intelligence' ? '< 500ms' :
                               '< 150ms'}
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Memory Usage</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedTechnology.level >= 80 ? 'Low' : selectedTechnology.level >= 60 ? 'Medium' : 'High'}
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Scalability</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedTechnology.level >= 80 ? 'Excellent' : selectedTechnology.level >= 60 ? 'Good' : 'Fair'}
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Learning Curve</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedTechnology.level >= 80 ? 'Easy' : selectedTechnology.level >= 60 ? 'Moderate' : 'Steep'}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Skill Level */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skill Assessment</h4>
                        <div className={`inline-flex px-4 py-2 rounded-full text-sm font-bold text-white ${
                          selectedTechnology.level >= 80 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                          selectedTechnology.level >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                          'bg-gradient-to-r from-orange-500 to-orange-600'
                        }`}>
                          {selectedTechnology.level >= 80 ? 'Expert Level' : selectedTechnology.level >= 60 ? 'Advanced Level' : 'Intermediate Level'}
                        </div>
                      </div>
                      
                      {/* Status */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Current Status</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 font-medium">Active in Production</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-indigo-50/30 dark:from-purple-900/5 dark:via-blue-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <BarChart className="w-4 h-4 text-white" />
                    </div>
                    Performance Metrics
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Live Analytics</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-purple-100 dark:border-purple-800 group cursor-pointer`}
                    onClick={() => setSelectedMetric(metric)}>
                    {/* Enhanced Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      metric.category === 'research' ? 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700' :
                      metric.category === 'team' ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' :
                      metric.category === 'financial' ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700' :
                      metric.category === 'development' ? 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700' :
                      metric.category === 'testing' ? 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800 dark:to-red-700' :
                      metric.category === 'accessibility' ? 'bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-700' :
                      metric.category === 'quality' ? 'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-700' :
                      metric.category === 'performance' ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700' :
                      metric.category === 'devops' ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700' :
                      metric.category === 'support' ? 'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-800 dark:to-teal-700' :
                      metric.category === 'knowledge' ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-800 dark:to-cyan-700' :
                      'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
                    }`}>
                      {metric.icon}
                    </div>
                    
                    {/* Enhanced Value */}
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">
                      {metric.value}
                    </div>
                    
                    {/* Enhanced Label */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 font-medium">
                      {metric.label}
                    </p>
                    
                    {/* Enhanced Description */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                      {metric.description}
                    </p>
                    
                    {/* Enhanced Trend */}
                    <div className="flex items-center justify-center space-x-1 text-green-600 mb-2">
                      <TrendingUp className="w-4 h-4 animate-bounce" />
                      <span className="text-sm font-medium">{metric.trend}</span>
                    </div>
                    
                    {/* Impact Level */}
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${
                        metric.impact === 'Critical' ? 'bg-red-500' :
                        metric.impact === 'High' ? 'bg-orange-500' :
                        metric.impact === 'Medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}></div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {metric.impact} Impact
                      </span>
                    </div>
                    
                    {/* Timeframe */}
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <Clock className="w-3 h-3" />
                      <span>{metric.timeframe}</span>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                      <div className={`w-2 h-2 rounded-full ${
                        metric.category === 'research' ? 'bg-purple-500' :
                        metric.category === 'team' ? 'bg-blue-500' :
                        metric.category === 'financial' ? 'bg-green-500' :
                        metric.category === 'development' ? 'bg-orange-500' :
                        metric.category === 'testing' ? 'bg-red-500' :
                        metric.category === 'accessibility' ? 'bg-indigo-500' :
                        metric.category === 'quality' ? 'bg-pink-500' :
                        metric.category === 'performance' ? 'bg-yellow-500' :
                        metric.category === 'devops' ? 'bg-gray-500' :
                        metric.category === 'support' ? 'bg-teal-500' :
                        metric.category === 'knowledge' ? 'bg-cyan-500' :
                        'bg-gray-500'
                      }`}></div>
                      <span className="capitalize">{metric.category}</span>
                    </div>
                    
                    {/* Click Indicator */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Metric Detail Modal */}
              {selectedMetric && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedMetric(null)}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-4xl ${
                          selectedMetric.category === 'research' ? 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700' :
                          selectedMetric.category === 'team' ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' :
                          selectedMetric.category === 'financial' ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700' :
                          selectedMetric.category === 'development' ? 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700' :
                          selectedMetric.category === 'testing' ? 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800 dark:to-red-700' :
                          selectedMetric.category === 'accessibility' ? 'bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-700' :
                          selectedMetric.category === 'quality' ? 'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-700' :
                          selectedMetric.category === 'performance' ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700' :
                          selectedMetric.category === 'devops' ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700' :
                          selectedMetric.category === 'support' ? 'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-800 dark:to-teal-700' :
                          selectedMetric.category === 'knowledge' ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-800 dark:to-cyan-700' :
                          'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
                        }`}>
                          {selectedMetric.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedMetric.label}</h3>
                          <p className="text-gray-600 dark:text-gray-400 capitalize">{selectedMetric.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => downloadPDF(selectedMetric, 'metric')}
                          className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                          title="Download PDF"
                        >
                          <Download className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => setSelectedMetric(null)}
                          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Current Value */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Current Value</h4>
                        <div className="text-4xl font-bold text-purple-600">{selectedMetric.value}</div>
                      </div>
                      
                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedMetric.description}</p>
                      </div>
                      
                      {/* Performance Trend */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance Trend</h4>
                        <div className="flex items-center space-x-3">
                          <TrendingUp className="w-6 h-6 text-green-500" />
                          <span className="text-2xl font-bold text-green-600">{selectedMetric.trend}</span>
                          <span className="text-gray-600 dark:text-gray-400">growth</span>
                        </div>
                      </div>
                      
                      {/* Detailed Analysis */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Detailed Analysis</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Target Achievement</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedMetric.category === 'research' ? 'Exceeded by 25%' :
                               selectedMetric.category === 'team' ? 'Optimal size reached' :
                               selectedMetric.category === 'financial' ? 'Funding goal met' :
                               selectedMetric.category === 'development' ? 'Feature complete' :
                               selectedMetric.category === 'testing' ? 'Coverage achieved' :
                               selectedMetric.category === 'accessibility' ? 'WCAG compliance' :
                               selectedMetric.category === 'quality' ? 'High satisfaction' :
                               selectedMetric.category === 'performance' ? 'Optimal uptime' :
                               selectedMetric.category === 'devops' ? 'CI/CD established' :
                               selectedMetric.category === 'support' ? 'Fast resolution' :
                               selectedMetric.category === 'knowledge' ? 'Comprehensive docs' :
                               'Target met'}
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Next Milestone</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {selectedMetric.category === 'research' ? '750+ hours' :
                               selectedMetric.category === 'team' ? '25 members' :
                               selectedMetric.category === 'financial' ? '$500K target' :
                               selectedMetric.category === 'development' ? '50+ features' :
                               selectedMetric.category === 'testing' ? '200+ users' :
                               selectedMetric.category === 'accessibility' ? 'AAA compliance' :
                               selectedMetric.category === 'quality' ? '4.8/5 rating' :
                               selectedMetric.category === 'performance' ? '99.99% uptime' :
                               selectedMetric.category === 'devops' ? '100+ deployments' :
                               selectedMetric.category === 'support' ? '98% resolution' :
                               selectedMetric.category === 'knowledge' ? '1000+ pages' :
                               'Next phase'}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Historical Data */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Historical Progress</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Q1 2019</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded-full" style={{ width: '20%' }}></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">20%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Q2 2019</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="h-2 bg-gray-400 dark:bg-gray-500 rounded-full" style={{ width: '45%' }}></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">45%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Q3 2019</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="h-2 bg-gray-500 dark:bg-gray-400 rounded-full" style={{ width: '70%' }}></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">70%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Q4 2019</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="h-2 bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                              </div>
                              <span className="text-sm text-green-600 font-medium">100%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Impact & Timeframe */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Impact Level</h4>
                          <div className={`inline-flex px-4 py-2 rounded-full text-sm font-bold text-white ${
                            selectedMetric.impact === 'Critical' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                            selectedMetric.impact === 'High' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                            selectedMetric.impact === 'Medium' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                            'bg-gradient-to-r from-green-500 to-green-600'
                          }`}>
                            {selectedMetric.impact} Impact
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Timeframe</h4>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-purple-500" />
                            <span className="text-gray-600 dark:text-gray-300">{selectedMetric.timeframe}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Key Insights */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Insights</h4>
                        <div className="space-y-2">
                          {selectedMetric.label === 'Research Hours' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Deep cognitive research conducted</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Multiple research methodologies applied</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">12 critical gaps identified</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Team Members' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Multidisciplinary expertise assembled</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">8 key disciplines covered</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">75+ combined years experience</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Funding Raised' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Seed investment secured</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">8 investors participated</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">40% approval rate achieved</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Prototype Features' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">25+ core features developed</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">AI-driven personalization</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Accessibility features integrated</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'User Testing' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">100+ diverse participants</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Multiple cognitive profiles</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Comprehensive feedback collected</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Accessibility Score' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">98% WCAG compliance</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">AA level standards met</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Screen readers supported</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Satisfaction Rate' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">4.7/5 average rating</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">95% positive feedback</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">High user retention</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'API Performance' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">99.9% uptime achieved</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Sub-50ms response time</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Zero downtime incidents</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Code Coverage' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">92% code coverage</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Comprehensive test suite</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Automated testing pipeline</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Deployment Frequency' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">50+ deployments/month</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">CI/CD pipeline active</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Zero-downtime deployments</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Bug Resolution' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">95% resolution rate</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">48-hour SLA met</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">Proactive monitoring</span>
                              </div>
                            </>
                          )}
                          {selectedMetric.label === 'Documentation' && (
                            <>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">500+ documentation pages</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">API reference complete</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">User guides available</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Category */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Category</h4>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${
                            selectedMetric.category === 'research' ? 'bg-purple-500' :
                            selectedMetric.category === 'team' ? 'bg-blue-500' :
                            selectedMetric.category === 'financial' ? 'bg-green-500' :
                            selectedMetric.category === 'development' ? 'bg-orange-500' :
                            selectedMetric.category === 'testing' ? 'bg-red-500' :
                            selectedMetric.category === 'accessibility' ? 'bg-indigo-500' :
                            selectedMetric.category === 'quality' ? 'bg-pink-500' :
                            selectedMetric.category === 'performance' ? 'bg-yellow-500' :
                            selectedMetric.category === 'devops' ? 'bg-gray-500' :
                            selectedMetric.category === 'support' ? 'bg-teal-500' :
                            selectedMetric.category === 'knowledge' ? 'bg-cyan-500' :
                            'bg-gray-500'
                          }`}></div>
                          <span className="text-gray-600 dark:text-gray-300 capitalize">{selectedMetric.category}</span>
                        </div>
                      </div>
                      
                      {/* Status */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Status</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 font-medium">Actively Tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hero Section - At the End */}
        <div className={`bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white rounded-2xl shadow-2xl p-8 mt-12 relative overflow-hidden`}>
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-4 left-4 opacity-50">
            <Zap className="w-8 h-8 text-white/30 animate-pulse" />
          </div>
          <div className="absolute top-4 right-4 opacity-50">
            <Sparkles className="w-8 h-8 text-white/30 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-50">
            <Lightbulb className="w-8 h-8 text-white/30 animate-pulse" />
          </div>
          <div className="absolute bottom-4 right-4 opacity-50">
            <Target className="w-8 h-8 text-white/30 animate-pulse" />
          </div>
          
          <div className="relative text-center">
            {/* Main Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            {/* Main Title */}
            <h2 className="text-3xl font-bold mb-4">The Genesis Era</h2>
            
            {/* Tagline */}
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Where revolutionary ideas transformed into life-changing cognitive support solutions
            </p>
            
            {/* Innovation Values */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span className="text-white/80 font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Lightbulb className="w-4 h-4 text-yellow-300" />
                <span className="text-white/80 font-medium">Ideas</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Target className="w-4 h-4 text-yellow-300" />
                <span className="text-white/80 font-medium">Solutions</span>
              </div>
            </div>
            
            {/* Additional Innovation Message */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/70 text-sm">
                Revolutionizing cognitive support through cutting-edge innovation and transformative ideas
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <>
      {/* Details Modal */}
      {showDetailsModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowDetailsModal(null)}
        >
          <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
            showDetailsModal.color === 'purple' ? 'border-4 border-purple-200 dark:border-purple-700' :
            showDetailsModal.color === 'blue' ? 'border-4 border-blue-200 dark:border-blue-700' :
            showDetailsModal.color === 'green' ? 'border-4 border-green-200 dark:border-green-700' :
            showDetailsModal.color === 'orange' ? 'border-4 border-orange-200 dark:border-orange-700' :
            'border-4 border-red-200 dark:border-red-700'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
            <div className={`p-6 ${
              showDetailsModal.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30' :
              showDetailsModal.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30' :
              showDetailsModal.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30' :
              showDetailsModal.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30' :
              'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
                    showDetailsModal.color === 'purple' ? 'bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-600' :
                    showDetailsModal.color === 'blue' ? 'bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600' :
                    showDetailsModal.color === 'green' ? 'bg-gradient-to-br from-green-200 to-green-300 dark:from-green-700 dark:to-green-600' :
                    showDetailsModal.color === 'orange' ? 'bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-600' :
                    'bg-gradient-to-br from-red-200 to-red-300 dark:from-red-700 dark:to-red-600'
                  }`}>
                    {showDetailsModal.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      showDetailsModal.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                      showDetailsModal.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                      showDetailsModal.color === 'green' ? 'text-green-800 dark:text-green-200' :
                      showDetailsModal.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                      'text-red-800 dark:text-red-200'
                    }`}>
                      {showDetailsModal.event}
                    </h3>
                    <p className={`text-lg ${
                      showDetailsModal.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                      showDetailsModal.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      showDetailsModal.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      showDetailsModal.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      'text-red-600 dark:text-red-400'
                    }`}>
                      {showDetailsModal.month} 2019
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
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Genesis Timeline Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">Timeline: {showDetailsModal.month} 2019</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">Status: {showDetailsModal.progress === 100 ? 'Completed' : 'In Progress'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">Impact: Foundation Building</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleShareViaGmail(showDetailsModal)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      showDetailsModal.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600' :
                      showDetailsModal.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' :
                      showDetailsModal.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600' :
                      showDetailsModal.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600' :
                      'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600'
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

      {/* Genesis Initiatives Modal */}
      {showInitiativeModal && selectedInitiative && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowInitiativeModal(false)}
        >
          <div 
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
              selectedInitiative.color === 'purple' ? 'border-4 border-purple-200 dark:border-purple-700' :
              selectedInitiative.color === 'blue' ? 'border-4 border-blue-200 dark:border-blue-700' :
              selectedInitiative.color === 'green' ? 'border-4 border-green-200 dark:border-green-700' :
              selectedInitiative.color === 'orange' ? 'border-4 border-orange-200 dark:border-orange-700' :
              'border-4 border-purple-200 dark:border-purple-700'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`p-6 ${
              selectedInitiative.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30' :
              selectedInitiative.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30' :
              selectedInitiative.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30' :
              selectedInitiative.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30' :
              'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
                    selectedInitiative.color === 'purple' ? 'bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-600' :
                    selectedInitiative.color === 'blue' ? 'bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600' :
                    selectedInitiative.color === 'green' ? 'bg-gradient-to-br from-green-200 to-green-300 dark:from-green-700 dark:to-green-600' :
                    selectedInitiative.color === 'orange' ? 'bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-600' :
                    'bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-600'
                  }`}>
                    {selectedInitiative.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      selectedInitiative.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                      selectedInitiative.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                      selectedInitiative.color === 'green' ? 'text-green-800 dark:text-green-200' :
                      selectedInitiative.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                      'text-purple-800 dark:text-purple-200'
                    }`}>
                      {selectedInitiative.title}
                    </h3>
                    <p className={`text-lg ${
                      selectedInitiative.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                      selectedInitiative.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      selectedInitiative.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      selectedInitiative.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      'text-purple-600 dark:text-purple-400'
                    }`}>
                      {selectedInitiative.status} • {selectedInitiative.impact}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadPDF(selectedInitiative, 'initiative')}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setShowInitiativeModal(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  selectedInitiative.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                  selectedInitiative.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                  selectedInitiative.color === 'green' ? 'text-green-800 dark:text-green-200' :
                  selectedInitiative.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                  'text-purple-800 dark:text-purple-200'
                }`}>
                  Overview
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedInitiative.detailedContent.overview}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  selectedInitiative.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                  selectedInitiative.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                  selectedInitiative.color === 'green' ? 'text-green-800 dark:text-green-200' :
                  selectedInitiative.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                  'text-purple-800 dark:text-purple-200'
                }`}>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedInitiative.detailedContent.keyFeatures.map((feature, idx) => (
                    <div key={idx} className={`p-3 rounded-lg ${
                      selectedInitiative.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                      selectedInitiative.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                      selectedInitiative.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                      selectedInitiative.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                      'bg-purple-100 dark:bg-purple-900/30'
                    }`}>
                      <span className={`text-sm font-medium ${
                        selectedInitiative.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                        selectedInitiative.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                        selectedInitiative.color === 'green' ? 'text-green-800 dark:text-green-200' :
                        selectedInitiative.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                        'text-purple-800 dark:text-purple-200'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  selectedInitiative.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                  selectedInitiative.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                  selectedInitiative.color === 'green' ? 'text-green-800 dark:text-green-200' :
                  selectedInitiative.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                  'text-purple-800 dark:text-purple-200'
                }`}>
                  Achievements
                </h4>
                <div className="space-y-2">
                  {selectedInitiative.detailedContent.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        selectedInitiative.color === 'purple' ? 'bg-purple-500' :
                        selectedInitiative.color === 'blue' ? 'bg-blue-500' :
                        selectedInitiative.color === 'green' ? 'bg-green-500' :
                        selectedInitiative.color === 'orange' ? 'bg-orange-500' :
                        'bg-purple-500'
                      }`}></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Goals */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  selectedInitiative.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                  selectedInitiative.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                  selectedInitiative.color === 'green' ? 'text-green-800 dark:text-green-200' :
                  selectedInitiative.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                  'text-purple-800 dark:text-purple-200'
                }`}>
                  Future Goals
                </h4>
                <div className="space-y-2">
                  {selectedInitiative.detailedContent.futureGoals.map((goal, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Target className={`w-4 h-4 mt-0.5 ${
                        selectedInitiative.color === 'purple' ? 'text-purple-500' :
                        selectedInitiative.color === 'blue' ? 'text-blue-500' :
                        selectedInitiative.color === 'green' ? 'text-green-500' :
                        selectedInitiative.color === 'orange' ? 'text-orange-500' :
                        'text-purple-500'
                      }`} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  selectedInitiative.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                  selectedInitiative.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                  selectedInitiative.color === 'green' ? 'text-green-800 dark:text-green-200' :
                  selectedInitiative.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                  'text-purple-800 dark:text-purple-200'
                }`}>
                  Testimonials
                </h4>
                <div className="space-y-3">
                  {selectedInitiative.detailedContent.testimonials.map((testimonial, idx) => (
                    <div key={idx} className={`p-3 rounded-lg italic ${
                      selectedInitiative.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                      selectedInitiative.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                      selectedInitiative.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                      selectedInitiative.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                      'bg-purple-100 dark:bg-purple-900/30'
                    }`}>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">"{testimonial}"</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Involved */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  selectedInitiative.color === 'purple' ? 'text-purple-800 dark:text-purple-200' :
                  selectedInitiative.color === 'blue' ? 'text-blue-800 dark:text-blue-200' :
                  selectedInitiative.color === 'green' ? 'text-green-800 dark:text-green-200' :
                  selectedInitiative.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                  'text-purple-800 dark:text-purple-200'
                }`}>
                  Get Involved
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedInitiative.detailedContent.getInvolved}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowInitiativeModal(false)}
                  className={`flex-1 ${
                    selectedInitiative.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600' :
                    selectedInitiative.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' :
                    selectedInitiative.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600' :
                    selectedInitiative.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600' :
                    'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
                  } px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105`}
                >
                  Join Initiative
                </button>
                
                <button
                  onClick={() => setShowInitiativeModal(false)}
                  className={`flex-1 ${
                    selectedInitiative.color === 'purple' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-800/50 dark:text-purple-200' :
                    selectedInitiative.color === 'blue' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 dark:text-blue-200' :
                    selectedInitiative.color === 'green' ? 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/50 dark:text-green-200' :
                    selectedInitiative.color === 'orange' ? 'bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:hover:bg-orange-800/50 dark:text-orange-200' :
                    'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-800/50 dark:text-purple-200'
                  } px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105`}
                >
                  Learn More
                </button>
                
                <button
                  onClick={() => setShowInitiativeModal(false)}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
    </div>
  );
};

export default GenesisExplore;
