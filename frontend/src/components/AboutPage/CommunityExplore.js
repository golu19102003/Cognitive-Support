
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, Award, TrendingUp, Target, Zap, Globe, Shield, Star, ChevronRight, Clock, MapPin, ExternalLink, Heart, Lightbulb, MessageCircle, Activity, UserCheck, Sparkles, HelpingHand, Users2, Map, Filter, Search, ChevronDown, ChevronUp, Palette, ArrowUpDown, BarChart, BookOpen, X, Download } from 'lucide-react';

const CommunityExplore = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredInitiative, setHoveredInitiative] = useState(null);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [showInitiativeModal, setShowInitiativeModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('chronological');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [showMetricModal, setShowMetricModal] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [showTechnologyModal, setShowTechnologyModal] = useState(false);

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
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
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
      color: 'pink',
      detailedContent: {
        overview: 'Our Neurodiversity Partnership program connects leading neurodiversity advocacy organizations with cognitive health specialists to create comprehensive support networks.',
        keyFeatures: [
          'Monthly collaborative workshops',
          'Shared resource libraries',
          'Cross-organization training programs',
          'Joint research initiatives'
        ],
        achievements: [
          '15+ partner organizations onboarded',
          '50+ collaborative events conducted',
          '2000+ individuals served through partnerships',
          '3 major research publications'
        ],
        futureGoals: [
          'Expand to 25+ partner organizations',
          'Launch international partnership network',
          'Develop unified certification program',
          'Create global knowledge sharing platform'
        ],
        testimonials: [
          'This partnership has transformed how we approach neurodiversity support.',
          'The collaborative approach has doubled our impact in the community.',
          'Finally, specialists and advocates are working together effectively.'
        ],
        getInvolved: 'Join our partnership network to collaborate on creating inclusive cognitive support solutions.'
      }
    },
    {
      icon: '🧠',
      title: 'Expert Advisory Board',
      description: 'Leading cognitive specialists guiding our mission',
      impact: '8 experts on board',
      status: 'Established',
      color: 'blue',
      detailedContent: {
        overview: 'Our Expert Advisory Board comprises world-renowned cognitive specialists, neuroscientists, and healthcare professionals who provide strategic guidance and oversight.',
        keyFeatures: [
          'Quarterly strategic planning sessions',
          'Research review and validation',
          'Clinical best practices development',
          'Innovation assessment and recommendations'
        ],
        achievements: [
          '8 leading experts from diverse fields',
          '25+ research papers reviewed and endorsed',
          '10+ evidence-based protocols developed',
          'Annual cognitive health conference organized'
        ],
        futureGoals: [
          'Expand to 15+ international experts',
          'Launch peer-reviewed journal',
          'Create certification programs for practitioners',
          'Establish research grant foundation'
        ],
        testimonials: [
          'The expertise brought by this board is invaluable for our community.',
          'Evidence-based approaches have significantly improved our outcomes.',
          'Finally, we have access to cutting-edge cognitive research.'
        ],
        getInvolved: 'Connect with our experts through workshops, consultations, and collaborative research projects.'
      }
    },
    {
      icon: '🌐',
      title: 'Community Platform',
      description: 'Digital hub for peer support and resource sharing',
      impact: '2000+ members engaged',
      status: 'Launched',
      color: 'green',
      detailedContent: {
        overview: 'Our digital community platform provides a safe, accessible space for individuals with cognitive disabilities to connect, share resources, and access support services.',
        keyFeatures: [
          '24/7 peer support chat rooms',
          'Resource library with 500+ materials',
          'Personalized progress tracking',
          'Accessible video conferencing tools'
        ],
        achievements: [
          '2000+ active community members',
          '500+ educational resources available',
          '1000+ peer support sessions monthly',
          '95% user satisfaction rate'
        ],
        futureGoals: [
          'Launch mobile applications',
          'Add AI-powered personalization',
          'Integrate telehealth services',
          'Expand to multilingual support'
        ],
        testimonials: [
          'This platform has connected me with people who truly understand my journey.',
          'The resources available have been life-changing for my family.',
          'Finally, a safe space where I can be myself and get support.'
        ],
        getInvolved: 'Join our growing community to access resources, connect with peers, and participate in support groups.'
      }
    },
    {
      icon: '📈',
      title: 'Network Expansion',
      description: 'Growing our professional and community network',
      impact: '400% growth rate',
      status: 'Expanding',
      color: 'orange',
      detailedContent: {
        overview: 'Our Network Expansion initiative focuses on rapidly scaling our reach to serve more communities while maintaining quality and accessibility standards.',
        keyFeatures: [
          'Regional hub establishment',
          'Professional training programs',
          'Community ambassador recruitment',
          'Digital outreach campaigns'
        ],
        achievements: [
          '400% growth in 12 months',
          '5 new regional hubs established',
          '50+ community ambassadors trained',
          '100+ organizations in network'
        ],
        futureGoals: [
          'Establish 20+ regional hubs',
          'Train 200+ community ambassadors',
          'Reach 10,000+ individuals directly',
          'Launch international expansion program'
        ],
        testimonials: [
          'The rapid expansion has brought vital services to our underserved area.',
          'Quality has remained excellent despite incredible growth.',
          'Network expansion has made support accessible to so many more people.'
        ],
        getInvolved: 'Become a community ambassador or partner with us to expand our reach to new areas.'
      }
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
      category: 'Community',
      detailedContent: {
        overview: 'Our Community Building Excellence initiative represents a cornerstone achievement in creating a supportive ecosystem for individuals with cognitive disabilities. This milestone demonstrates our commitment to fostering inclusive communities where everyone feels valued and empowered.',
        keyFeatures: [
          'Comprehensive community engagement programs',
          'Peer support network establishment',
          'Inclusive community guidelines development',
          'Regular community events and activities'
        ],
        achievements: [
          '2000+ active community members',
          '500+ peer support connections',
          '100+ community events organized',
          '95% member satisfaction rate'
        ],
        futureGoals: [
          'Expand to 5000+ community members',
          'Launch mobile community app',
          'Establish regional community hubs',
          'Create mentorship programs'
        ],
        testimonials: [
          'The community has transformed how I connect with others who understand my journey.',
          'Finally, I found a place where I belong and can be myself.',
          'The support network has been invaluable for my personal growth.'
        ],
        getInvolved: 'Join our thriving community to connect, share experiences, and grow together in a supportive environment.'
      }
    },
    {
      id: 2,
      title: 'Professional Network Growth',
      description: 'Built extensive professional healthcare network',
      icon: '🤝',
      color: 'green',
      metrics: '500+ professionals',
      date: '2021',
      category: 'Innovation',
      detailedContent: {
        overview: 'Our Professional Network Growth initiative successfully established a comprehensive network of healthcare providers, specialists, and professionals dedicated to supporting individuals with cognitive disabilities. This achievement bridges the gap between community needs and professional expertise.',
        keyFeatures: [
          'Healthcare provider partnerships',
          'Specialist consultation services',
          'Professional training programs',
          'Referral network establishment'
        ],
        achievements: [
          '500+ healthcare professionals onboarded',
          '25+ specialized healthcare fields covered',
          '1000+ professional consultations provided',
          'Established referral pathways'
        ],
        futureGoals: [
          'Expand to 1000+ professionals',
          'Include international specialists',
          'Launch telehealth integration',
          'Create professional certification programs'
        ],
        testimonials: [
          'The professional network has connected me with specialists who truly understand my needs.',
          'Having access to qualified professionals has transformed my care journey.',
          'The referral system made finding the right specialist so much easier.'
        ],
        getInvolved: 'Connect with our professional network to access specialized support and expertise tailored to your needs.'
      }
    },
    {
      id: 3,
      title: 'Accessibility Innovation',
      description: 'Pioneered inclusive design solutions',
      icon: '♿',
      color: 'blue',
      metrics: '95% compliance',
      date: '2022',
      category: 'Network',
      detailedContent: {
        overview: 'Our Accessibility Innovation initiative led the way in creating truly inclusive digital experiences for individuals with cognitive disabilities. This achievement sets new standards for accessible design and user experience.',
        keyFeatures: [
          'WCAG 2.1 AA compliance implementation',
          'Cognitive-friendly interface design',
          'Multi-modal accessibility features',
          'User-centered testing protocols'
        ],
        achievements: [
          '95% accessibility compliance score',
          '50+ accessibility features implemented',
          '1000+ user testing sessions completed',
          'Industry recognition for inclusive design'
        ],
        futureGoals: [
          'Achieve 99% accessibility compliance',
          'Implement AI-powered accessibility',
          'Create accessibility certification program',
          'Develop adaptive interface technology'
        ],
        testimonials: [
          'The accessibility features have made the platform usable for me for the first time.',
          'Finally, a digital space that understands and adapts to my needs.',
          'The inclusive design approach has transformed my digital experience.'
        ],
        getInvolved: 'Join our accessibility initiatives to help create a more inclusive digital world for everyone.'
      }
    },
    {
      id: 4,
      title: 'Educational Impact',
      description: 'Delivered comprehensive learning programs',
      icon: '🎓',
      color: 'purple',
      metrics: '100+ courses',
      date: '2022',
      category: 'Education',
      detailedContent: {
        overview: 'Our Educational Impact initiative successfully created and delivered comprehensive learning programs tailored for individuals with cognitive disabilities. This achievement demonstrates our commitment to accessible education and skill development.',
        keyFeatures: [
          'Adaptive learning methodologies',
          'Multi-format educational content',
          'Personalized learning paths',
          'Progress tracking systems'
        ],
        achievements: [
          '100+ educational courses created',
          '5000+ learners enrolled',
          '85% course completion rate',
          'Industry recognition for educational innovation'
        ],
        futureGoals: [
          'Expand to 200+ specialized courses',
          'Launch mobile learning app',
          'Create certification programs',
          'Establish international partnerships'
        ],
        testimonials: [
          'The courses have helped me develop skills I never thought possible.',
          'Finally, educational content that adapts to my learning style.',
          'The personalized approach has transformed my learning journey.'
        ],
        getInvolved: 'Explore our educational programs to unlock your potential through adaptive and inclusive learning experiences.'
      }
    }
  ];

  const technologies = [
    { name: "Discord.js", level: 88, category: "API", icon: "💬", description: "Community chat bot integration", experience: "2+ years", projects: "8+" },
    { name: "Socket.io", level: 82, category: "Backend", icon: "⚡", description: "Real-time communication server", experience: "3+ years", projects: "12+" },
    { name: "PostgreSQL", level: 85, category: "Database", icon: "🐘", description: "Relational database for user data", experience: "4+ years", projects: "16+" },
    { name: "Vue.js", level: 78, category: "Frontend", icon: "💚", description: "Progressive web app framework", experience: "2+ years", projects: "10+" },
    { name: "Bootstrap", level: 92, category: "Styling", icon: "🅱️", description: "Responsive CSS framework", experience: "5+ years", projects: "30+" },
    { name: "GSAP", level: 80, category: "Animation", icon: "🎭", description: "Professional animation library", experience: "3+ years", projects: "14+" },
    { name: "PHP", level: 75, category: "Language", icon: "🐘", description: "Server-side scripting language", experience: "4+ years", projects: "20+" },
    { name: "MySQL", level: 83, category: "Database", icon: "🗄️", description: "Traditional relational database", experience: "5+ years", projects: "25+" },
    { name: "REST API", level: 90, category: "API", icon: "🔌", description: "Standard web service interface", experience: "4+ years", projects: "18+" },
    { name: "Kubernetes", level: 72, category: "DevOps", icon: "☸️", description: "Container orchestration platform", experience: "2+ years", projects: "6+" }
  ];

  const metrics = [
    { label: "Community Members", value: "2,000+", icon: "👥", trend: "+25%", description: "Active participants in our community", category: "team", impact: "High", timeframe: "Ongoing" },
    { label: "Professional Network", value: "500+", icon: "🤝", trend: "+40%", description: "Healthcare providers and specialists", category: "team", impact: "High", timeframe: "2 years" },
    { label: "Partner Organizations", value: "15+", icon: "🎯", trend: "+20%", description: "Strategic partnerships established", category: "development", impact: "Medium", timeframe: "1 year" },
    { label: "Resources Created", value: "100+", icon: "📚", trend: "+60%", description: "Educational materials and guides", category: "knowledge", impact: "High", timeframe: "6 months" },
    { label: "Support Sessions", value: "1,200+", icon: "💬", trend: "+150%", description: "Peer support interactions", category: "support", impact: "High", timeframe: "3 months" },
    { label: "Workshops Conducted", value: "50+", icon: "🎓", trend: "+80%", description: "Educational workshops and training", category: "quality", impact: "Medium", timeframe: "1 year" },
    { label: "User Satisfaction", value: "4.8/5", icon: "⭐", trend: "+15%", description: "Community feedback rating", category: "quality", impact: "High", timeframe: "6 months" },
    { label: "Platform Uptime", value: "99.9%", icon: "⚡", trend: "+5%", description: "Service availability and reliability", category: "performance", impact: "Critical", timeframe: "Ongoing" },
    { label: "Response Time", value: "<2s", icon: "⏱️", trend: "+30%", description: "Average support response time", category: "performance", impact: "Medium", timeframe: "3 months" },
    { label: "Accessibility Score", value: "95%", icon: "♿", trend: "+25%", description: "WCAG compliance rating", category: "accessibility", impact: "Critical", timeframe: "6 months" },
    { label: "Content Updates", value: "200+", icon: "🔄", trend: "+120%", description: "Regular content and feature updates", category: "devops", impact: "Medium", timeframe: "6 months" },
    { label: "Community Growth", value: "+150%", icon: "📈", trend: "+150%", description: "Monthly active user growth", category: "research", impact: "High", timeframe: "6 months" }
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
            {['overview', 'achievements', 'initiatives', 'technologies', 'metrics'].map((tab) => (
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
            {/* Community Overview Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  Community Building Overview
                </h2>

                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-pink-600 dark:text-pink-400 font-medium">
                    Active Development
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div className="space-y-6">
                  {/* Building Together */}
                  <div>
                    {/* Section Header with Gradient */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
                      <h3 className="relative text-xl font-bold text-gray-900 dark:text-white flex items-center">
                        <Users2 className="w-5 h-5 mr-2 text-pink-600" />
                        Building Together
                      </h3>
                    </div>

                    <p className="text-black dark:text-gray-300 leading-relaxed border-l-4 border-pink-500 pl-4 py-2 bg-pink-50/50 dark:bg-pink-900/10 rounded-r-lg mb-4">
                      We built our foundation on collaborative excellence with neurodiversity advocates, cognitive specialists, technology experts, and individuals with lived experiences. This collective wisdom shaped our approach to creating inclusive, empowering, and effective support systems.
                    </p>

                    <p className="text-black dark:text-gray-300 leading-relaxed border-l-4 border-green-500 pl-4 py-2 bg-pink-50/50 dark:bg-pink-900/10 rounded-r-lg">
                      The community building phase focused on creating meaningful networks, establishing strategic partnerships, and developing innovative platforms for meaningful connections and support sharing. This collaborative approach ensures sustainable growth and lasting impact in community.
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-pink-600" />
                      Key Achievements
                    </h4>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                      {[
                        { value: "50+", label: "Partners", icon: "🤝", color: "pink" },
                        { value: "200+", label: "Members", icon: "👥", color: "purple" },
                        { value: "15+", label: "Programs", icon: "📚", color: "blue" },
                        { value: "1000+", label: "Hours", icon: "⏰", color: "green" },
                        { value: "25+", label: "Workshops", icon: "🎯", color: "orange" },
                        { value: "10+", label: "Countries", icon: "🌍", color: "yellow" },
                        { value: "5★", label: "Rating", icon: "⭐", color: "indigo" },
                        { value: "100%", label: "Satisfaction", icon: "💯", color: "red" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`group p-6 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 text-center ${
                            item.color === 'pink' ? 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 hover:from-pink-100 hover:to-pink-200 dark:hover:from-pink-800/30 dark:hover:to-pink-700/30' :
                            item.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/30 dark:hover:to-purple-700/30' :
                            item.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30' :
                            item.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:from-green-100 hover:to-green-200 dark:hover:from-green-800/30 dark:hover:to-green-700/30' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 hover:from-orange-100 hover:to-orange-200 dark:hover:from-orange-800/30 dark:hover:to-orange-700/30' :
                            item.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 hover:from-yellow-100 hover:to-yellow-200 dark:hover:from-yellow-800/30 dark:hover:to-yellow-700/30' :
                            item.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 hover:from-indigo-100 hover:to-indigo-200 dark:hover:from-indigo-800/30 dark:hover:to-indigo-700/30' :
                            'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 hover:from-red-100 hover:to-red-200 dark:hover:from-red-800/30 dark:hover:to-red-700/30'
                          }`}
                        >
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                            item.color === 'pink' ? 'bg-gradient-to-br from-pink-400 to-pink-500' :
                            item.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                            item.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                            item.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                            item.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                            item.color === 'indigo' ? 'bg-gradient-to-br from-indigo-400 to-indigo-500' :
                            'bg-gradient-to-br from-red-400 to-red-500'
                          }`}>
                            {item.icon}
                          </div>
                          <div className={`text-2xl font-bold mb-1 ${
                            item.color === 'pink' ? 'text-pink-700 dark:text-pink-300' :
                            item.color === 'purple' ? 'text-purple-700 dark:text-purple-300' :
                            item.color === 'blue' ? 'text-blue-700 dark:text-blue-300' :
                            item.color === 'green' ? 'text-green-700 dark:text-green-300' :
                            item.color === 'orange' ? 'text-orange-700 dark:text-orange-300' :
                            item.color === 'yellow' ? 'text-yellow-700 dark:text-yellow-300' :
                            item.color === 'indigo' ? 'text-indigo-700 dark:text-indigo-300' :
                            'text-red-700 dark:text-red-300'
                          }`}>
                            {item.value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="space-y-8">

                  {/* Core Values */}
                  <div>
                    {/* Section Header with Gradient */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-xl blur-xl"></div>
                      <h3 className="relative text-xl font-bold text-gray-900 dark:text-white flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mr-3">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        Core Values
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {[
                        { month: "January", achievement: "Inclusive Collaboration", icon: "🤝", color: "pink" },
                        { month: "February", achievement: "Lived Experience Integration", icon: "💡", color: "purple" },
                        { month: "March", achievement: "Professional Partnership", icon: "🎯", color: "blue" },
                        { month: "April", achievement: "Community Empowerment", icon: "🚀", color: "green" },
                        { month: "May", achievement: "Shared Knowledge Building", icon: "📚", color: "orange" }
                      ].map((milestone, index) => (
                        <div 
                          key={index} 
                          className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-102 ${
                            index === 0 ? 'bg-gradient-to-r from-blue-50 to-green-100 dark:from-blue-900/20 dark:to-green-800/20 hover:from-blue-100 hover:to-green-200 dark:hover:from-blue-800/30 dark:hover:to-green-700/30' :
                            milestone.color === 'pink' ? 'bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 hover:from-pink-100 hover:to-pink-200 dark:hover:from-pink-800/30 dark:hover:to-pink-700/30' :
                            milestone.color === 'purple' ? 'bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/30 dark:hover:to-purple-700/30' :
                            milestone.color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30' :
                            milestone.color === 'green' ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:from-green-100 hover:to-green-200 dark:hover:from-green-800/30 dark:hover:to-green-700/30' :
                            'bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 hover:from-orange-100 hover:to-orange-200 dark:hover:from-orange-800/30 dark:hover:to-orange-700/30'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 ${
                            index === 0 ? 'bg-gradient-to-br from-blue-400 to-green-500' :
                            milestone.color === 'pink' ? 'bg-gradient-to-br from-pink-400 to-pink-500' :
                            milestone.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                            milestone.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                            milestone.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                            'bg-gradient-to-br from-orange-400 to-orange-500'
                          }`}>
                            {milestone.icon}
                          </div>
                          <div className="flex-1">
                            <div className={`font-bold text-sm mb-1 ${
                              index === 0 ? 'text-blue-700 dark:text-blue-300' :
                              milestone.color === 'pink' ? 'text-pink-700 dark:text-pink-300' :
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
                            index === 0 ? 'text-blue-500' :
                            milestone.color === 'pink' ? 'text-pink-500' :
                            milestone.color === 'purple' ? 'text-purple-500' :
                            milestone.color === 'blue' ? 'text-blue-500' :
                            milestone.color === 'green' ? 'text-green-500' :
                            'text-orange-500'
                          }`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Timeline */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      Impact Timeline
                    </h4>

                    <div className="space-y-4">
                      {[
                        { title: "Foundation Established", time: "Q1 2020", desc: "Core team formation", color: "blue" },
                        { title: "Network Expansion", time: "Q2-Q3 2020", desc: "Partnership development", color: "green" },
                        { title: "Platform Launch", time: "Q4 2020", desc: "Digital solutions", color: "purple" },
                        { title: "Ongoing Growth", time: "2021", desc: "Continuous improvement", color: "orange" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`p-6 rounded-xl bg-gradient-to-r ${
                            item.color === 'blue' ? 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30' :
                            item.color === 'green' ? 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:from-green-100 hover:to-green-200 dark:hover:from-green-800/30 dark:hover:to-green-700/30' :
                            item.color === 'purple' ? 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/30 dark:hover:to-purple-700/30' :
                            'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 hover:from-orange-100 hover:to-orange-200 dark:hover:from-orange-800/30 dark:hover:to-orange-700/30'
                          } hover:shadow-lg transition-all duration-300`}
                        >
                          <div className={`font-semibold ${
                            item.color === 'blue' ? 'text-blue-700 dark:text-blue-300' :
                            item.color === 'green' ? 'text-green-700 dark:text-green-300' :
                            item.color === 'purple' ? 'text-purple-700 dark:text-purple-300' :
                            'text-orange-700 dark:text-orange-300'
                          }`}>
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {item.time}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {item.desc}
                          </div>
                        </div>
                      ))}
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
                  <div key={index} className={`text-center p-6 bg-gradient-to-br ${
                    index % 4 === 0 ? 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700' :
                    index % 4 === 1 ? 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30 rounded-xl border border-green-200 dark:border-green-700' :
                    index % 4 === 2 ? 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-700' :
                    'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/30 rounded-xl border border-orange-200 dark:border-orange-700'
                  } hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{stat.label}</p>
                    <div className={`flex items-center justify-center space-x-1 ${
                      index % 4 === 0 ? 'text-blue-600' :
                      index % 4 === 1 ? 'text-green-600' :
                      index % 4 === 2 ? 'text-purple-600' :
                      'text-orange-600'
                    }`}>
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
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-indigo-50/30 dark:from-pink-900/5 dark:via-purple-900/5 dark:to-indigo-900/5"></div>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center animate-pulse">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Community Achievements</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Milestones that define our journey of community and excellence in cognitive support technology
                </p>
              </div>
            
            {/* Enhanced Header */}
            <div className="relative mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  Key Achievements
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Community Milestones</span>
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
                      console.log('Achievement clicked:', achievement);
                      setSelectedAchievement(achievement);
                      setShowAchievementModal(true);
                    }}
                  >
                    {/* View Details Button - Top Right */}
                    <div className="absolute top-4 right-4">
                      <button className={`flex items-center space-x-2 px-3 py-2 text-white rounded-lg transition-all duration-300 text-sm font-medium ${
                        achievement.category === 'Community' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700' :
                        achievement.category === 'Network' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                        achievement.category === 'Innovation' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                        achievement.category === 'Education' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                        'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
                      }`}>
                        <Award className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                    
                    {/* Enhanced Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      achievement.category === 'Community' ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700' :
                      achievement.category === 'Network' ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' :
                      achievement.category === 'Innovation' ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700' :
                      achievement.category === 'Education' ? 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700' :
                      'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
                    }`}>
                      {achievement.icon}
                    </div>
                    
                    {/* Enhanced Value */}
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">
                      {achievement.title}
                    </div>
                    
                    {/* Enhanced Label */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 font-medium">
                      {achievement.detailedContent.overview}
                    </p>
                    
                    {/* Enhanced Date */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.date}</span>
                    </div>
                    
                    {/* Enhanced Metrics */}
                    <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-pink-600 mb-2">
                      <Target className="w-4 h-4" />
                      <span>{achievement.metrics}</span>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                      <div className={`w-2 h-2 rounded-full ${
                        achievement.category === 'Community' ? 'bg-pink-500' :
                        achievement.category === 'Network' ? 'bg-blue-500' :
                        achievement.category === 'Innovation' ? 'bg-green-500' :
                        achievement.category === 'Education' ? 'bg-purple-500' :
                        'bg-gray-500'
                      }`}></div>
                      <span>{achievement.category}</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-indigo-50/30 dark:from-pink-900/5 dark:via-purple-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
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
                  <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              {/* Technology Categories Overview */}
              <div className="relative mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Frontend', 'Backend', 'Database', 'Intelligence', 'Styling', 'Animation', 'Language', 'API', 'DevOps'].map((category, index) => (
                    <div key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-800 dark:to-blue-800 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-600">
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
                      className="space-y-4 p-6 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-pink-100 dark:border-pink-800 relative overflow-hidden cursor-pointer"
                      onClick={() => {
                        console.log('Technology clicked:', tech);
                        setSelectedTechnology(tech);
                        setShowTechnologyModal(true);
                      }}
                    >
                      {/* Arrow Indicator - Top Right */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-transparent rounded-full blur-2xl"></div>
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
                            <h4 className="font-bold text-gray-900 dark:text-white text-xl group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
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
                          <div className="text-2xl font-bold text-pink-600 group-hover:text-pink-700 transition-colors">{tech.level}%</div>
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
                          <Target className="w-4 h-4 text-pink-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.projects} projects</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                          <Zap className="w-3 h-3" />
                          <span>Optimized</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technology Details Modal */}
      {showTechnologyModal && selectedTechnology && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowTechnologyModal(false)}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 rounded-t-2xl sticky top-0 z-10 ${
              selectedTechnology.category === 'Frontend' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
              selectedTechnology.category === 'Backend' ? 'bg-gradient-to-r from-green-500 to-green-600' :
              selectedTechnology.category === 'Database' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
              selectedTechnology.category === 'Intelligence' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
              selectedTechnology.category === 'Styling' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
              selectedTechnology.category === 'Animation' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
              selectedTechnology.category === 'Language' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
              selectedTechnology.category === 'API' ? 'bg-gradient-to-r from-red-500 to-red-600' :
              selectedTechnology.category === 'DevOps' ? 'bg-gradient-to-r from-gray-500 to-gray-600' :
              'bg-gradient-to-r from-gray-500 to-gray-600'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`text-4xl animate-bounce ${
                    selectedTechnology.category === 'Frontend' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                    selectedTechnology.category === 'Backend' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                    selectedTechnology.category === 'Database' ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                    selectedTechnology.category === 'Intelligence' ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                    selectedTechnology.category === 'Styling' ? 'bg-gradient-to-br from-pink-400 to-pink-500' :
                    selectedTechnology.category === 'Animation' ? 'bg-gradient-to-br from-indigo-400 to-indigo-500' :
                    selectedTechnology.category === 'Language' ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                    selectedTechnology.category === 'API' ? 'bg-gradient-to-br from-red-400 to-red-500' :
                    selectedTechnology.category === 'DevOps' ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                    'bg-gradient-to-br from-gray-400 to-gray-500'
                  }`}>
                    {selectedTechnology.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedTechnology.name}</h3>
                    <p className="text-white/90 text-sm">{selectedTechnology.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => downloadPDF(selectedTechnology, 'technology')}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
                    title="Download PDF"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setShowTechnologyModal(false)}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Technology Overview */}
              <div>
                <h4 className={`text-xl font-bold mb-3 flex items-center ${
                  selectedTechnology.category === 'Frontend' ? 'text-blue-700 dark:text-blue-300' :
                  selectedTechnology.category === 'Backend' ? 'text-green-700 dark:text-green-300' :
                  selectedTechnology.category === 'Database' ? 'text-orange-700 dark:text-orange-300' :
                  selectedTechnology.category === 'Intelligence' ? 'text-purple-700 dark:text-purple-300' :
                  selectedTechnology.category === 'Styling' ? 'text-pink-700 dark:text-pink-300' :
                  selectedTechnology.category === 'Animation' ? 'text-indigo-700 dark:text-indigo-300' :
                  selectedTechnology.category === 'Language' ? 'text-yellow-700 dark:text-yellow-300' :
                  selectedTechnology.category === 'API' ? 'text-red-700 dark:text-red-300' :
                  selectedTechnology.category === 'DevOps' ? 'text-gray-700 dark:text-gray-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>
                  <Lightbulb className={`w-6 h-6 mr-2 ${
                    selectedTechnology.category === 'Frontend' ? 'text-blue-600' :
                    selectedTechnology.category === 'Backend' ? 'text-green-600' :
                    selectedTechnology.category === 'Database' ? 'text-orange-600' :
                    selectedTechnology.category === 'Intelligence' ? 'text-purple-600' :
                    selectedTechnology.category === 'Styling' ? 'text-pink-600' :
                    selectedTechnology.category === 'Animation' ? 'text-indigo-600' :
                    selectedTechnology.category === 'Language' ? 'text-yellow-600' :
                    selectedTechnology.category === 'API' ? 'text-red-600' :
                    selectedTechnology.category === 'DevOps' ? 'text-gray-600' :
                    'text-gray-600'
                  }`} />
                  Technology Overview
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {selectedTechnology.name} is a {selectedTechnology.category.toLowerCase()} technology that powers our cognitive support platform with {selectedTechnology.level}% proficiency level. This technology enables advanced features and capabilities that enhance user experience and system performance.
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className={`text-xl font-bold mb-3 flex items-center ${
                  selectedTechnology.category === 'Frontend' ? 'text-blue-700 dark:text-blue-300' :
                  selectedTechnology.category === 'Backend' ? 'text-green-700 dark:text-green-300' :
                  selectedTechnology.category === 'Database' ? 'text-orange-700 dark:text-orange-300' :
                  selectedTechnology.category === 'Intelligence' ? 'text-purple-700 dark:text-purple-300' :
                  selectedTechnology.category === 'Styling' ? 'text-pink-700 dark:text-pink-300' :
                  selectedTechnology.category === 'Animation' ? 'text-indigo-700 dark:text-indigo-300' :
                  selectedTechnology.category === 'Language' ? 'text-yellow-700 dark:text-yellow-300' :
                  selectedTechnology.category === 'API' ? 'text-red-700 dark:text-red-300' :
                  selectedTechnology.category === 'DevOps' ? 'text-gray-700 dark:text-gray-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>
                  <Star className={`w-6 h-6 mr-2 ${
                    selectedTechnology.category === 'Frontend' ? 'text-blue-600' :
                    selectedTechnology.category === 'Backend' ? 'text-green-600' :
                    selectedTechnology.category === 'Database' ? 'text-orange-600' :
                    selectedTechnology.category === 'Intelligence' ? 'text-purple-600' :
                    selectedTechnology.category === 'Styling' ? 'text-pink-600' :
                    selectedTechnology.category === 'Animation' ? 'text-indigo-600' :
                    selectedTechnology.category === 'Language' ? 'text-yellow-600' :
                    selectedTechnology.category === 'API' ? 'text-red-600' :
                    selectedTechnology.category === 'DevOps' ? 'text-gray-600' :
                    'text-gray-600'
                  }`} />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className={`p-3 rounded-lg bg-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-50 dark:bg-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-900/30 border-l-4 border-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-400`}>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Advanced performance optimization</span>
                  </div>
                  <div className={`p-3 rounded-lg bg-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-50 dark:bg-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-900/30 border-l-4 border-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-400`}>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Scalable architecture design</span>
                  </div>
                  <div className={`p-3 rounded-lg bg-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-50 dark:bg-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-900/30 border-l-4 border-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-400`}>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Real-time data processing</span>
                  </div>
                  <div className={`p-3 rounded-lg bg-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-50 dark:bg-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-900/30 border-l-4 border-${selectedTechnology.category === 'Frontend' ? 'blue' : selectedTechnology.category === 'Backend' ? 'green' : selectedTechnology.category === 'Database' ? 'orange' : selectedTechnology.category === 'Intelligence' ? 'purple' : selectedTechnology.category === 'Styling' ? 'pink' : selectedTechnology.category === 'Animation' ? 'indigo' : selectedTechnology.category === 'Language' ? 'yellow' : selectedTechnology.category === 'API' ? 'red' : selectedTechnology.category === 'DevOps' ? 'gray' : 'gray'}-400`}>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Enterprise-grade security</span>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h4 className={`text-xl font-bold mb-3 flex items-center ${
                  selectedTechnology.category === 'Frontend' ? 'text-blue-700 dark:text-blue-300' :
                  selectedTechnology.category === 'Backend' ? 'text-green-700 dark:text-green-300' :
                  selectedTechnology.category === 'Database' ? 'text-orange-700 dark:text-orange-300' :
                  selectedTechnology.category === 'Intelligence' ? 'text-purple-700 dark:text-purple-300' :
                  selectedTechnology.category === 'Styling' ? 'text-pink-700 dark:text-pink-300' :
                  selectedTechnology.category === 'Animation' ? 'text-indigo-700 dark:text-indigo-300' :
                  selectedTechnology.category === 'Language' ? 'text-yellow-700 dark:text-yellow-300' :
                  selectedTechnology.category === 'API' ? 'text-red-700 dark:text-red-300' :
                  selectedTechnology.category === 'DevOps' ? 'text-gray-700 dark:text-gray-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>
                  <BarChart className="w-6 h-6 mr-2" />
                  Performance Metrics
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Proficiency Level</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            selectedTechnology.category === 'Frontend' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                            selectedTechnology.category === 'Backend' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                            selectedTechnology.category === 'Database' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                            selectedTechnology.category === 'Intelligence' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                            selectedTechnology.category === 'Styling' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                            selectedTechnology.category === 'Animation' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                            selectedTechnology.category === 'Language' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                            selectedTechnology.category === 'API' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                            selectedTechnology.category === 'DevOps' ? 'bg-gradient-to-r from-gray-500 to-gray-600' :
                            'bg-gradient-to-r from-gray-500 to-gray-600'
                          }`}
                          style={{ width: `${selectedTechnology.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{selectedTechnology.level}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Experience</span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{selectedTechnology.experience}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Projects Completed</span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{selectedTechnology.projects}</span>
                  </div>
                </div>
              </div>

              {/* Implementation Details */}
              <div>
                <h4 className={`text-xl font-bold mb-3 flex items-center ${
                  selectedTechnology.category === 'Frontend' ? 'text-blue-700 dark:text-blue-300' :
                  selectedTechnology.category === 'Backend' ? 'text-green-700 dark:text-green-300' :
                  selectedTechnology.category === 'Database' ? 'text-orange-700 dark:text-orange-300' :
                  selectedTechnology.category === 'Intelligence' ? 'text-purple-700 dark:text-purple-300' :
                  selectedTechnology.category === 'Styling' ? 'text-pink-700 dark:text-pink-300' :
                  selectedTechnology.category === 'Animation' ? 'text-indigo-700 dark:text-indigo-300' :
                  selectedTechnology.category === 'Language' ? 'text-yellow-700 dark:text-yellow-300' :
                  selectedTechnology.category === 'API' ? 'text-red-700 dark:text-red-300' :
                  selectedTechnology.category === 'DevOps' ? 'text-gray-700 dark:text-gray-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>
                  <Target className="w-6 h-6 mr-2" />
                  Implementation Details
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  This technology has been successfully integrated into our cognitive support platform, providing robust solutions for complex challenges. Our implementation follows industry best practices and ensures optimal performance across all use cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-indigo-50/30 dark:from-pink-900/5 dark:via-purple-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
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
                  <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-pink-100 dark:border-pink-800 group cursor-pointer relative`}
                    onClick={() => {
                      console.log('Metric clicked:', metric);
                      setSelectedMetric(metric);
                      setShowMetricModal(true);
                    }}
                  >
                    {/* Arrow Indicator - Top Right */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
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
                      <span>{metric.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Details Modal */}
      {showDetailsModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowDetailsModal(null)}
        >
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
          }`}
          onClick={(e) => e.stopPropagation()}
        >
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

      {/* Initiative Details Modal */}
      {showInitiativeModal && selectedInitiative && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowInitiativeModal(false)}
        >
          <div 
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r from-${selectedInitiative.color}-500 to-${selectedInitiative.color}-600 p-6 rounded-t-2xl sticky top-0 z-10`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl animate-bounce">{selectedInitiative.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedInitiative.title}</h3>
                    <p className="text-white/90 text-sm">{selectedInitiative.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadPDF(selectedInitiative, 'initiative')}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
                    title="Download PDF"
                  >
                    <Download className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setShowInitiativeModal(false)}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <div>
                <h4 className={`text-xl font-bold text-${selectedInitiative.color}-700 dark:text-${selectedInitiative.color}-300 mb-3 flex items-center`}>
                  <Lightbulb className="w-6 h-6 mr-2" />
                  Overview
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {selectedInitiative.detailedContent.overview}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className={`text-xl font-bold text-${selectedInitiative.color}-700 dark:text-${selectedInitiative.color}-300 mb-3 flex items-center`}>
                  <Star className="w-6 h-6 mr-2" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedInitiative.detailedContent.keyFeatures.map((feature, idx) => (
                    <div key={idx} className={`p-3 rounded-lg bg-${selectedInitiative.color}-50 dark:bg-${selectedInitiative.color}-900/30 border-l-4 border-${selectedInitiative.color}-400`}>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className={`text-xl font-bold text-${selectedInitiative.color}-700 dark:text-${selectedInitiative.color}-300 mb-3 flex items-center`}>
                  <Award className="w-6 h-6 mr-2" />
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedInitiative.detailedContent.achievements.map((achievement, idx) => (
                    <div key={idx} className={`p-3 rounded-lg bg-${selectedInitiative.color}-50 dark:bg-${selectedInitiative.color}-900/30 border-l-4 border-${selectedInitiative.color}-400`}>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Goals */}
              <div>
                <h4 className={`text-xl font-bold text-${selectedInitiative.color}-700 dark:text-${selectedInitiative.color}-300 mb-3 flex items-center`}>
                  <Target className="w-6 h-6 mr-2" />
                  Future Goals
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedInitiative.detailedContent.futureGoals.map((goal, idx) => (
                    <div key={idx} className={`p-3 rounded-lg bg-${selectedInitiative.color}-50 dark:bg-${selectedInitiative.color}-900/30 border-l-4 border-${selectedInitiative.color}-400`}>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h4 className={`text-xl font-bold text-${selectedInitiative.color}-700 dark:text-${selectedInitiative.color}-300 mb-3 flex items-center`}>
                  <Heart className="w-6 h-6 mr-2" />
                  Community Impact
                </h4>
                <div className="space-y-3">
                  {selectedInitiative.detailedContent.testimonials.map((testimonial, idx) => (
                    <div key={idx} className={`p-4 rounded-xl bg-white dark:bg-gray-800 border-l-4 border-${selectedInitiative.color}-400 shadow-md`}>
                      <p className="text-gray-700 dark:text-gray-300 text-lg italic">"{testimonial}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Involved */}
              <div className={`p-6 rounded-xl bg-gradient-to-r from-${selectedInitiative.color}-100 to-${selectedInitiative.color}-200 dark:from-${selectedInitiative.color}-900/30 dark:to-${selectedInitiative.color}-800/30 border-2 border-${selectedInitiative.color}-300`}>
                <h4 className={`text-xl font-bold text-${selectedInitiative.color}-700 dark:text-${selectedInitiative.color}-300 mb-3 flex items-center`}>
                  <Users className="w-6 h-6 mr-2" />
                  Get Involved
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-4">
                  {selectedInitiative.detailedContent.getInvolved}
                </p>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button className={`bg-${selectedInitiative.color}-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}>
                    <Users className="w-4 h-4" />
                    Join Community
                  </button>
                  <button className={`bg-${selectedInitiative.color}-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}>
                    <Heart className="w-4 h-4" />
                    Support Initiative
                  </button>
                  <button className={`bg-${selectedInitiative.color}-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}>
                    <HelpingHand className="w-4 h-4" />
                    Get Involved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Metrics Details Modal */}
      {showMetricModal && selectedMetric && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowMetricModal(false)}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 rounded-t-2xl sticky top-0 z-10 ${
              selectedMetric.category === 'research' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
              selectedMetric.category === 'team' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
              selectedMetric.category === 'financial' ? 'bg-gradient-to-r from-green-500 to-green-600' :
              selectedMetric.category === 'development' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
              selectedMetric.category === 'testing' ? 'bg-gradient-to-r from-red-500 to-red-600' :
              selectedMetric.category === 'accessibility' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
              selectedMetric.category === 'quality' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
              selectedMetric.category === 'performance' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
              selectedMetric.category === 'devops' ? 'bg-gradient-to-r from-gray-500 to-gray-600' :
              selectedMetric.category === 'support' ? 'bg-gradient-to-r from-teal-500 to-teal-600' :
              selectedMetric.category === 'knowledge' ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' :
              'bg-gradient-to-r from-gray-500 to-gray-600'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`text-4xl animate-bounce ${
                    selectedMetric.category === 'research' ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                    selectedMetric.category === 'team' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                    selectedMetric.category === 'financial' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                    selectedMetric.category === 'development' ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                    selectedMetric.category === 'testing' ? 'bg-gradient-to-br from-red-400 to-red-500' :
                    selectedMetric.category === 'accessibility' ? 'bg-gradient-to-br from-indigo-400 to-indigo-500' :
                    selectedMetric.category === 'quality' ? 'bg-gradient-to-br from-pink-400 to-pink-500' :
                    selectedMetric.category === 'performance' ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                    selectedMetric.category === 'devops' ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                    selectedMetric.category === 'support' ? 'bg-gradient-to-br from-teal-400 to-teal-500' :
                    selectedMetric.category === 'knowledge' ? 'bg-gradient-to-br from-cyan-400 to-cyan-500' :
                    'bg-gradient-to-br from-gray-400 to-gray-500'
                  }`}>
                    {selectedMetric.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedMetric.label}</h3>
                    <p className="text-white/90 text-sm">{selectedMetric.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => downloadPDF(selectedMetric, 'metric')}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
                    title="Download PDF"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setShowMetricModal(false)}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
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
                <h4 className={`text-xl font-semibold mb-3 flex items-center ${
                  selectedMetric.category === 'research' ? 'text-purple-700 dark:text-purple-300' :
                  selectedMetric.category === 'team' ? 'text-blue-700 dark:text-blue-300' :
                  selectedMetric.category === 'financial' ? 'text-green-700 dark:text-green-300' :
                  selectedMetric.category === 'development' ? 'text-orange-700 dark:text-orange-300' :
                  selectedMetric.category === 'testing' ? 'text-red-700 dark:text-red-300' :
                  selectedMetric.category === 'accessibility' ? 'text-indigo-700 dark:text-indigo-300' :
                  selectedMetric.category === 'quality' ? 'text-pink-700 dark:text-pink-300' :
                  selectedMetric.category === 'performance' ? 'text-yellow-700 dark:text-yellow-300' :
                  selectedMetric.category === 'devops' ? 'text-gray-700 dark:text-gray-300' :
                  selectedMetric.category === 'support' ? 'text-teal-700 dark:text-teal-300' :
                  selectedMetric.category === 'knowledge' ? 'text-cyan-700 dark:text-cyan-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>
                  <BarChart className={`w-5 h-5 mr-2 ${
                    selectedMetric.category === 'research' ? 'text-purple-600' :
                    selectedMetric.category === 'team' ? 'text-blue-600' :
                    selectedMetric.category === 'financial' ? 'text-green-600' :
                    selectedMetric.category === 'development' ? 'text-orange-600' :
                    selectedMetric.category === 'testing' ? 'text-red-600' :
                    selectedMetric.category === 'accessibility' ? 'text-indigo-600' :
                    selectedMetric.category === 'quality' ? 'text-pink-600' :
                    selectedMetric.category === 'performance' ? 'text-yellow-600' :
                    selectedMetric.category === 'devops' ? 'text-gray-600' :
                    selectedMetric.category === 'support' ? 'text-teal-600' :
                    selectedMetric.category === 'knowledge' ? 'text-cyan-600' :
                    'text-gray-600'
                  }`} />
                  Performance Overview
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {selectedMetric.label} represents a critical performance indicator for our cognitive support platform, 
                  showing our commitment to excellence and continuous improvement in service delivery.
                </p>
              </div>

              {/* Key Metrics */}
              <div>
                <h4 className={`text-xl font-semibold mb-3 flex items-center ${
                  selectedMetric.category === 'research' ? 'text-purple-700 dark:text-purple-300' :
                  selectedMetric.category === 'team' ? 'text-blue-700 dark:text-blue-300' :
                  selectedMetric.category === 'financial' ? 'text-green-700 dark:text-green-300' :
                  selectedMetric.category === 'development' ? 'text-orange-700 dark:text-orange-300' :
                  selectedMetric.category === 'testing' ? 'text-red-700 dark:text-red-300' :
                  selectedMetric.category === 'accessibility' ? 'text-indigo-700 dark:text-indigo-300' :
                  selectedMetric.category === 'quality' ? 'text-pink-700 dark:text-pink-300' :
                  selectedMetric.category === 'performance' ? 'text-yellow-700 dark:text-yellow-300' :
                  selectedMetric.category === 'devops' ? 'text-gray-700 dark:text-gray-300' :
                  selectedMetric.category === 'support' ? 'text-teal-700 dark:text-teal-300' :
                  selectedMetric.category === 'knowledge' ? 'text-cyan-700 dark:text-cyan-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>
                  <TrendingUp className={`w-5 h-5 mr-2 ${
                    selectedMetric.category === 'research' ? 'text-purple-600' :
                    selectedMetric.category === 'team' ? 'text-blue-600' :
                    selectedMetric.category === 'financial' ? 'text-green-600' :
                    selectedMetric.category === 'development' ? 'text-orange-600' :
                    selectedMetric.category === 'testing' ? 'text-red-600' :
                    selectedMetric.category === 'accessibility' ? 'text-indigo-600' :
                    selectedMetric.category === 'quality' ? 'text-pink-600' :
                    selectedMetric.category === 'performance' ? 'text-yellow-600' :
                    selectedMetric.category === 'devops' ? 'text-gray-600' :
                    selectedMetric.category === 'support' ? 'text-teal-600' :
                    selectedMetric.category === 'knowledge' ? 'text-cyan-600' :
                    'text-gray-600'
                  }`} />
                  Key Performance Indicators
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg border-l-4 ${
                    selectedMetric.category === 'research' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                    selectedMetric.category === 'team' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                    selectedMetric.category === 'financial' ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                    selectedMetric.category === 'development' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                    selectedMetric.category === 'testing' ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                    selectedMetric.category === 'accessibility' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-400' :
                    selectedMetric.category === 'quality' ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                    selectedMetric.category === 'performance' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                    selectedMetric.category === 'devops' ? 'bg-gray-50 dark:bg-gray-900/30 border-gray-400' :
                    selectedMetric.category === 'support' ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-400' :
                    selectedMetric.category === 'knowledge' ? 'bg-cyan-50 dark:bg-cyan-900/30 border-cyan-400' :
                    'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                  }`}>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Current Value</h5>
                    <div className={`text-3xl font-bold ${
                      selectedMetric.category === 'research' ? 'text-purple-600' :
                      selectedMetric.category === 'team' ? 'text-blue-600' :
                      selectedMetric.category === 'financial' ? 'text-green-600' :
                      selectedMetric.category === 'development' ? 'text-orange-600' :
                      selectedMetric.category === 'testing' ? 'text-red-600' :
                      selectedMetric.category === 'accessibility' ? 'text-indigo-600' :
                      selectedMetric.category === 'quality' ? 'text-pink-600' :
                      selectedMetric.category === 'performance' ? 'text-yellow-600' :
                      selectedMetric.category === 'devops' ? 'text-gray-600' :
                      selectedMetric.category === 'support' ? 'text-teal-600' :
                      selectedMetric.category === 'knowledge' ? 'text-cyan-600' :
                      'text-gray-600'
                    }`}>{selectedMetric.value}</div>
                  </div>
                  <div className={`p-4 rounded-lg border-l-4 ${
                    selectedMetric.category === 'research' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                    selectedMetric.category === 'team' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                    selectedMetric.category === 'financial' ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                    selectedMetric.category === 'development' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                    selectedMetric.category === 'testing' ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                    selectedMetric.category === 'accessibility' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-400' :
                    selectedMetric.category === 'quality' ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                    selectedMetric.category === 'performance' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                    selectedMetric.category === 'devops' ? 'bg-gray-50 dark:bg-gray-900/30 border-gray-400' :
                    selectedMetric.category === 'support' ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-400' :
                    selectedMetric.category === 'knowledge' ? 'bg-cyan-50 dark:bg-cyan-900/30 border-cyan-400' :
                    'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                  }`}>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Growth Trend</h5>
                    <div className="flex items-center space-x-2 text-green-600">
                      <TrendingUp className="w-5 h-5 animate-bounce" />
                      <span className="text-lg font-bold">{selectedMetric.trend}</span>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg border-l-4 ${
                    selectedMetric.category === 'research' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                    selectedMetric.category === 'team' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                    selectedMetric.category === 'financial' ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                    selectedMetric.category === 'development' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                    selectedMetric.category === 'testing' ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                    selectedMetric.category === 'accessibility' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-400' :
                    selectedMetric.category === 'quality' ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                    selectedMetric.category === 'performance' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                    selectedMetric.category === 'devops' ? 'bg-gray-50 dark:bg-gray-900/30 border-gray-400' :
                    selectedMetric.category === 'support' ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-400' :
                    selectedMetric.category === 'knowledge' ? 'bg-cyan-50 dark:bg-cyan-900/30 border-cyan-400' :
                    'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                  }`}>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Impact Level</h5>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        selectedMetric.impact === 'Critical' ? 'bg-red-500' :
                        selectedMetric.impact === 'High' ? 'bg-orange-500' :
                        selectedMetric.impact === 'Medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{selectedMetric.impact} Impact</span>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg border-l-4 ${
                    selectedMetric.category === 'research' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                    selectedMetric.category === 'team' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                    selectedMetric.category === 'financial' ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                    selectedMetric.category === 'development' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                    selectedMetric.category === 'testing' ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                    selectedMetric.category === 'accessibility' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-400' :
                    selectedMetric.category === 'quality' ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                    selectedMetric.category === 'performance' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                    selectedMetric.category === 'devops' ? 'bg-gray-50 dark:bg-gray-900/30 border-gray-400' :
                    selectedMetric.category === 'support' ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-400' :
                    selectedMetric.category === 'knowledge' ? 'bg-cyan-50 dark:bg-cyan-900/30 border-cyan-400' :
                    'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                  }`}>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Performance Score</h5>
                    <div className={`text-3xl font-bold ${
                      selectedMetric.category === 'research' ? 'text-purple-600' :
                      selectedMetric.category === 'team' ? 'text-blue-600' :
                      selectedMetric.category === 'financial' ? 'text-green-600' :
                      selectedMetric.category === 'development' ? 'text-orange-600' :
                      selectedMetric.category === 'testing' ? 'text-red-600' :
                      selectedMetric.category === 'accessibility' ? 'text-indigo-600' :
                      selectedMetric.category === 'quality' ? 'text-pink-600' :
                      selectedMetric.category === 'performance' ? 'text-yellow-600' :
                      selectedMetric.category === 'devops' ? 'text-gray-600' :
                      selectedMetric.category === 'support' ? 'text-teal-600' :
                      selectedMetric.category === 'knowledge' ? 'text-cyan-600' :
                      'text-gray-600'
                    }`}>95%</div>
                    <p className="text-gray-600 dark:text-gray-300">Overall performance rating</p>
                  </div>
                </div>
              </div>

              {/* Timeframe Analysis */}
              <div>
                <h4 className={`text-xl font-semibold mb-3 flex items-center ${
                  selectedMetric.category === 'research' ? 'text-purple-700 dark:text-purple-300' :
                  selectedMetric.category === 'team' ? 'text-blue-700 dark:text-blue-300' :
                  selectedMetric.category === 'financial' ? 'text-green-700 dark:text-green-300' :
                  selectedMetric.category === 'development' ? 'text-orange-700 dark:text-orange-300' :
                  selectedMetric.category === 'testing' ? 'text-red-700 dark:text-red-300' :
                  selectedMetric.category === 'accessibility' ? 'text-indigo-700 dark:text-indigo-300' :
                  selectedMetric.category === 'quality' ? 'text-pink-700 dark:text-pink-300' :
                  selectedMetric.category === 'performance' ? 'text-yellow-700 dark:text-yellow-300' :
                  selectedMetric.category === 'devops' ? 'text-gray-700 dark:text-gray-300' :
                  selectedMetric.category === 'support' ? 'text-teal-700 dark:text-teal-300' :
                  selectedMetric.category === 'knowledge' ? 'text-cyan-700 dark:text-cyan-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>
                  <Clock className={`w-5 h-5 mr-2 ${
                    selectedMetric.category === 'research' ? 'text-purple-600' :
                    selectedMetric.category === 'team' ? 'text-blue-600' :
                    selectedMetric.category === 'financial' ? 'text-green-600' :
                    selectedMetric.category === 'development' ? 'text-orange-600' :
                    selectedMetric.category === 'testing' ? 'text-red-600' :
                    selectedMetric.category === 'accessibility' ? 'text-indigo-600' :
                    selectedMetric.category === 'quality' ? 'text-pink-600' :
                    selectedMetric.category === 'performance' ? 'text-yellow-600' :
                    selectedMetric.category === 'devops' ? 'text-gray-600' :
                    selectedMetric.category === 'support' ? 'text-teal-600' :
                    selectedMetric.category === 'knowledge' ? 'text-cyan-600' :
                    'text-gray-600'
                  }`} />
                  Timeframe Analysis
                </h4>
                <div className={`p-4 rounded-lg border-l-4 ${
                  selectedMetric.category === 'research' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                  selectedMetric.category === 'team' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                  selectedMetric.category === 'financial' ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                  selectedMetric.category === 'development' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                  selectedMetric.category === 'testing' ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                  selectedMetric.category === 'accessibility' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-400' :
                  selectedMetric.category === 'quality' ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                  selectedMetric.category === 'performance' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                  selectedMetric.category === 'devops' ? 'bg-gray-50 dark:bg-gray-900/30 border-gray-400' :
                  selectedMetric.category === 'support' ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-400' :
                  selectedMetric.category === 'knowledge' ? 'bg-cyan-50 dark:bg-cyan-900/30 border-cyan-400' :
                  'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                }`}>
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
                    <span className="font-semibold">Measurement Period:</span> {selectedMetric.timeframe}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    This metric is tracked over {selectedMetric.timeframe} to ensure consistent performance monitoring 
                    and identify trends for continuous improvement.
                  </p>
                </div>
              </div>

              {/* Category Insights */}
              <div>
                <h4 className={`text-xl font-semibold mb-3 flex items-center ${
                  selectedMetric.category === 'research' ? 'text-purple-700 dark:text-purple-300' :
                  selectedMetric.category === 'team' ? 'text-blue-700 dark:text-blue-300' :
                  selectedMetric.category === 'financial' ? 'text-green-700 dark:text-green-300' :
                  selectedMetric.category === 'development' ? 'text-orange-700 dark:text-orange-300' :
                  selectedMetric.category === 'testing' ? 'text-red-700 dark:text-red-300' :
                  selectedMetric.category === 'accessibility' ? 'text-indigo-700 dark:text-indigo-300' :
                  selectedMetric.category === 'quality' ? 'text-pink-700 dark:text-pink-300' :
                  selectedMetric.category === 'performance' ? 'text-yellow-700 dark:text-yellow-300' :
                  selectedMetric.category === 'devops' ? 'text-gray-700 dark:text-gray-300' :
                  selectedMetric.category === 'support' ? 'text-teal-700 dark:text-teal-300' :
                  selectedMetric.category === 'knowledge' ? 'text-cyan-700 dark:text-cyan-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>
                  <Target className={`w-5 h-5 mr-2 ${
                    selectedMetric.category === 'research' ? 'text-purple-600' :
                    selectedMetric.category === 'team' ? 'text-blue-600' :
                    selectedMetric.category === 'financial' ? 'text-green-600' :
                    selectedMetric.category === 'development' ? 'text-orange-600' :
                    selectedMetric.category === 'testing' ? 'text-red-600' :
                    selectedMetric.category === 'accessibility' ? 'text-indigo-600' :
                    selectedMetric.category === 'quality' ? 'text-pink-600' :
                    selectedMetric.category === 'performance' ? 'text-yellow-600' :
                    selectedMetric.category === 'devops' ? 'text-gray-600' :
                    selectedMetric.category === 'support' ? 'text-teal-600' :
                    selectedMetric.category === 'knowledge' ? 'text-cyan-600' :
                    'text-gray-600'
                  }`} />
                  Category Insights
                </h4>
                <div className={`p-4 rounded-lg border-l-4 ${
                  selectedMetric.category === 'research' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                  selectedMetric.category === 'team' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                  selectedMetric.category === 'financial' ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                  selectedMetric.category === 'development' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                  selectedMetric.category === 'testing' ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                  selectedMetric.category === 'accessibility' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-400' :
                  selectedMetric.category === 'quality' ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                  selectedMetric.category === 'performance' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                  selectedMetric.category === 'devops' ? 'bg-gray-50 dark:bg-gray-900/30 border-gray-400' :
                  selectedMetric.category === 'support' ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-400' :
                  selectedMetric.category === 'knowledge' ? 'bg-cyan-50 dark:bg-cyan-900/30 border-cyan-400' :
                  'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                }`}>
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
                    <span className="font-semibold">Category:</span> {selectedMetric.category}
                  </p>
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
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{selectedMetric.category} Performance</span>
                  </div>
                </div>
              </div>

                          </div>
          </div>
        </div>
      )}

        {/* Initiatives Tab */}
        {activeTab === 'initiatives' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden`}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-indigo-50/30 dark:from-pink-900/5 dark:via-purple-900/5 dark:to-indigo-900/5"></div>
              
              {/* Enhanced Header */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-lg animate-pulse">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    Community Initiative
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Active Programs</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* Community Initiatives Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {communityInitiatives.map((initiative, index) => (
                  <div 
                    key={index}
                    className={`relative border-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer ${
                      selectedInitiative === index 
                        ? `border-${initiative.color}-500 bg-${initiative.color}-50 dark:bg-${initiative.color}-900/30 ring-2 ring-${initiative.color}-300` 
                        : `border-${initiative.color}-200 dark:border-${initiative.color}-700 bg-white dark:bg-gray-800`
                    }`}
                    onMouseEnter={() => setHoveredInitiative(index)}
                    onMouseLeave={() => setHoveredInitiative(null)}
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
                            initiative.color === 'pink' ? 'bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600' :
                            initiative.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' :
                            initiative.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600' :
                            initiative.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600' :
                            'bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600'
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

        {/* Achievement Details Modal */}
      {showAchievementModal && selectedAchievement && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowAchievementModal(false)}
        >
          {console.log('Modal opened with achievement:', selectedAchievement)}
          <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
            selectedAchievement.color === 'pink' ? 'border-4 border-pink-200 dark:border-pink-700' :
            selectedAchievement.color === 'blue' ? 'border-4 border-blue-200 dark:border-blue-700' :
            selectedAchievement.color === 'green' ? 'border-4 border-green-200 dark:border-green-700' :
            selectedAchievement.color === 'yellow' ? 'border-4 border-yellow-200 dark:border-yellow-700' :
            selectedAchievement.color === 'purple' ? 'border-4 border-purple-200 dark:border-purple-700' :
            selectedAchievement.color === 'orange' ? 'border-4 border-orange-200 dark:border-orange-700' :
            selectedAchievement.color === 'red' ? 'border-4 border-red-200 dark:border-red-700' :
            'border-4 border-gray-200 dark:border-gray-700'
          }`}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 ${
              selectedAchievement.color === 'pink' ? 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/30' :
              selectedAchievement.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30' :
              selectedAchievement.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30' :
              selectedAchievement.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/30' :
              selectedAchievement.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30' :
              selectedAchievement.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30' :
              selectedAchievement.color === 'red' ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30' :
              'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl ${
                    selectedAchievement.color === 'pink' ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                    selectedAchievement.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                    selectedAchievement.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                    selectedAchievement.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                    selectedAchievement.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
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
                      {selectedAchievement.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadPDF(selectedAchievement, 'achievement')}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setShowAchievementModal(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-pink-600" />
                  Overview
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {console.log('Overview content:', selectedAchievement.detailedContent?.overview)}
                  {selectedAchievement.detailedContent?.overview || 'No overview available'}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center`}>
                  <Star className={`w-5 h-5 mr-2 ${
                    selectedAchievement.color === 'pink' ? 'text-pink-600' :
                    selectedAchievement.color === 'blue' ? 'text-blue-600' :
                    selectedAchievement.color === 'green' ? 'text-green-600' :
                    selectedAchievement.color === 'yellow' ? 'text-yellow-600' :
                    selectedAchievement.color === 'purple' ? 'text-purple-600' :
                    selectedAchievement.color === 'orange' ? 'text-orange-600' :
                    selectedAchievement.color === 'red' ? 'text-red-600' :
                    'text-gray-600'
                  }`} />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedAchievement.detailedContent.keyFeatures.map((feature, idx) => (
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
                <h4 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center`}>
                  <Award className={`w-5 h-5 mr-2 ${
                    selectedAchievement.color === 'pink' ? 'text-pink-600' :
                    selectedAchievement.color === 'blue' ? 'text-blue-600' :
                    selectedAchievement.color === 'green' ? 'text-green-600' :
                    selectedAchievement.color === 'yellow' ? 'text-yellow-600' :
                    selectedAchievement.color === 'purple' ? 'text-purple-600' :
                    selectedAchievement.color === 'orange' ? 'text-orange-600' :
                    selectedAchievement.color === 'red' ? 'text-red-600' :
                    'text-gray-600'
                  }`} />
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedAchievement.detailedContent.achievements.map((achievement, idx) => (
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

              {/* Future Goals */}
              <div>
                <h4 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center`}>
                  <Target className={`w-5 h-5 mr-2 ${
                    selectedAchievement.color === 'pink' ? 'text-pink-600' :
                    selectedAchievement.color === 'blue' ? 'text-blue-600' :
                    selectedAchievement.color === 'green' ? 'text-green-600' :
                    selectedAchievement.color === 'yellow' ? 'text-yellow-600' :
                    selectedAchievement.color === 'purple' ? 'text-purple-600' :
                    selectedAchievement.color === 'orange' ? 'text-orange-600' :
                    selectedAchievement.color === 'red' ? 'text-red-600' :
                    'text-gray-600'
                  }`} />
                  Future Goals
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedAchievement.detailedContent.futureGoals.map((goal, idx) => (
                    <div key={idx} className={`p-3 rounded-lg border-l-4 ${
                      selectedAchievement.color === 'pink' ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                      selectedAchievement.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                      selectedAchievement.color === 'green' ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                      selectedAchievement.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                      selectedAchievement.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                      selectedAchievement.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                      selectedAchievement.color === 'red' ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                      'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                    }`}>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h4 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center`}>
                  <Heart className={`w-5 h-5 mr-2 ${
                    selectedAchievement.color === 'pink' ? 'text-pink-600' :
                    selectedAchievement.color === 'blue' ? 'text-blue-600' :
                    selectedAchievement.color === 'green' ? 'text-green-600' :
                    selectedAchievement.color === 'yellow' ? 'text-yellow-600' :
                    selectedAchievement.color === 'purple' ? 'text-purple-600' :
                    selectedAchievement.color === 'orange' ? 'text-orange-600' :
                    selectedAchievement.color === 'red' ? 'text-red-600' :
                    'text-gray-600'
                  }`} />
                  Community Impact
                </h4>
                <div className="space-y-3">
                  {selectedAchievement.detailedContent.testimonials.map((testimonial, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border-l-4 ${
                      selectedAchievement.color === 'pink' ? 'bg-pink-50 dark:bg-pink-900/30 border-pink-400' :
                      selectedAchievement.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400' :
                      selectedAchievement.color === 'green' ? 'bg-green-50 dark:bg-green-900/30 border-green-400' :
                      selectedAchievement.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400' :
                      selectedAchievement.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-400' :
                      selectedAchievement.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/30 border-orange-400' :
                      selectedAchievement.color === 'red' ? 'bg-red-50 dark:bg-red-900/30 border-red-400' :
                      'bg-gray-50 dark:bg-gray-900/30 border-gray-400'
                    }`}>
                      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Involved */}
              <div className={`p-4 rounded-lg bg-gradient-to-r border ${
                selectedAchievement.color === 'pink' ? 'from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/40 border-pink-200 dark:border-pink-700' :
                selectedAchievement.color === 'blue' ? 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/40 border-blue-200 dark:border-blue-700' :
                selectedAchievement.color === 'green' ? 'from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/40 border-green-200 dark:border-green-700' :
                selectedAchievement.color === 'yellow' ? 'from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/40 border-yellow-200 dark:border-yellow-700' :
                selectedAchievement.color === 'purple' ? 'from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/40 border-purple-200 dark:border-purple-700' :
                selectedAchievement.color === 'orange' ? 'from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/40 border-orange-200 dark:border-orange-700' :
                selectedAchievement.color === 'red' ? 'from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/40 border-red-200 dark:border-red-700' :
                'from-gray-100 to-gray-200 dark:from-gray-900/30 dark:to-gray-800/40 border-gray-200 dark:border-gray-700'
              }`}>
                <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center`}>
                  <HelpingHand className={`w-5 h-5 mr-2 ${
                    selectedAchievement.color === 'pink' ? 'text-pink-600' :
                    selectedAchievement.color === 'blue' ? 'text-blue-600' :
                    selectedAchievement.color === 'green' ? 'text-green-600' :
                    selectedAchievement.color === 'yellow' ? 'text-yellow-600' :
                    selectedAchievement.color === 'purple' ? 'text-purple-600' :
                    selectedAchievement.color === 'orange' ? 'text-orange-600' :
                    selectedAchievement.color === 'red' ? 'text-red-600' :
                    'text-gray-600'
                  }`} />
                  Get Involved
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedAchievement.detailedContent.getInvolved}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    {/* Community Era Section - Community Focused */}
      <div className="mt-12 mb-8">
        <div className={`bg-gradient-to-br from-pink-600 via-pink-700 to-indigo-800 text-white rounded-2xl shadow-2xl p-8 relative overflow-hidden`}>
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-4 left-4 opacity-50">
            <Users className="w-8 h-8 text-white/30 animate-pulse" />
          </div>
          <div className="absolute top-4 right-4 opacity-50">
            <Heart className="w-8 h-8 text-white/30 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-50">
            <HelpingHand className="w-8 h-8 text-white/30 animate-pulse" />
          </div>
          <div className="absolute bottom-4 right-4 opacity-50">
            <Sparkles className="w-8 h-8 text-white/30 animate-pulse" />
          </div>
          
          <div className="relative text-center">
            {/* Main Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Users2 className="w-8 h-8 text-white" />
            </div>
            
            {/* Unique Community Title */}
            <h2 className="text-3xl font-bold mb-4">The Community Era</h2>
            
            {/* Community-Focused Tagline */}
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Where community collaboration transformed into life-changing cognitive support solutions
            </p>
            
            {/* Community Values */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-yellow-300" />
                <span className="text-white/80 font-medium">Community</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-yellow-300" />
                <span className="text-white/80 font-medium">Compassion</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <HelpingHand className="w-4 h-4 text-yellow-300" />
                <span className="text-white/80 font-medium">Support</span>
              </div>
            </div>
            
            {/* Additional Community Message */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/70 text-sm">
                Together we build, together we grow, together we transform lives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityExplore;
