import React, { useState, useEffect } from 'react';
import { Headphones, MessageSquare, Clock, Mail, Phone, Users, Search, ExternalLink, CheckCircle, AlertTriangle, Eye, Target, BookOpen, FileText, Settings, HelpCircle, Zap, Shield, Globe, ChevronDown, ChevronUp, Database, Cloud, Server, Wifi, Activity, TrendingUp, BarChart3, PieChart, LineChart, Award, Star, ThumbsUp, MessageCircle, Video, FileQuestion, Bug, Wrench, Cpu, Smartphone, Monitor, MapPin, Download, Rocket } from 'lucide-react';

const Support = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [aiSupportScore, setAiSupportScore] = useState(94);
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    activeChats: 12,
    avgResponseTime: '2.3 min',
    satisfactionRate: 96,
    aiResolutionRate: 78,
    ticketsResolved: 156,
    ticketsPending: 23
  });

  const [aiInsights, setAiInsights] = useState([
    { type: 'performance', message: 'AI resolution rate improved by 15% this week', severity: 'success', time: '1 hour ago' },
    { type: 'trend', message: 'Peak support hours: 2PM-4PM detected by AI', severity: 'info', time: '3 hours ago' },
    { type: 'alert', message: '3 high-priority tickets need immediate attention', severity: 'warning', time: '5 mins ago' }
  ]);

  const [smartSuggestions, setSmartSuggestions] = useState([
    'Enable 24/7 AI chatbot for instant responses',
    'Create FAQ for common accessibility questions',
    'Schedule proactive maintenance during low-traffic hours'
  ]);

  const supportSections = [
    {
      id: 'getting-started',
      title: '1. Getting Started',
      icon: BookOpen,
      color: 'text-green-600',
      description: 'Complete beginner\'s guide with step-by-step setup instructions and comprehensive onboarding resources',
      content: [
        'Account creation and profile setup with accessibility preferences configuration',
        'AI assistant personalization and cognitive support customization',
        'Basic navigation overview with keyboard shortcuts and accessibility features',
        'First session setup guide with emergency contacts and caregiver configuration',
        'Device compatibility setup for desktop, tablet, and mobile platforms',
        'Accessibility features详解 including screen reader, high contrast, and text-to-speech integration',
        'Privacy settings configuration and data management preferences',
        'Notification preferences and communication settings setup',
        'Language and regional settings for personalized experience',
        'Security settings including two-factor authentication and password management',
        'Integration with third-party assistive technologies and external devices',
        'Backup and data synchronization setup for cross-device continuity'
      ],
      quickActions: ['Watch Tutorial', 'Setup Wizard', 'Quick Guide', 'Accessibility Test', 'Device Setup'],
      estimatedTime: '15-30 minutes',
      difficulty: 'Beginner',
      prerequisites: ['Valid email address', 'Internet connection', 'Modern web browser'],
      outcomes: ['Account ready', 'Accessibility configured', 'AI assistant personalized']
    },
    {
      id: 'features-guide',
      title: '2. Features Guide',
      icon: Zap,
      color: 'text-blue-600',
      description: 'Comprehensive documentation of all platform features with detailed usage instructions and best practices',
      content: [
        'AI cognitive assistance tools with natural language processing and context-aware responses',
        'Accessibility features详解 including screen reader compatibility, voice commands, and adaptive interfaces',
        'Communication methods including text, voice, video, and sign language integration',
        'Data synchronization across devices with real-time updates and conflict resolution',
        'Customization options for user interface themes, font sizes, and color schemes',
        'Integration capabilities with calendar apps, email clients, and productivity tools',
        'Task management features with reminders, scheduling, and progress tracking',
        'Emergency response systems with one-click panic buttons and automatic alerts',
        'Collaboration tools for caregivers and support networks',
        'Analytics and progress monitoring with detailed reports and insights',
        'Offline mode capabilities and data caching for uninterrupted access',
        'Multi-language support with automatic translation and localization features'
      ],
      quickActions: ['Feature Tour', 'Video Tutorials', 'Documentation', 'Advanced Settings', 'Integration Guide'],
      estimatedTime: '30-60 minutes',
      difficulty: 'Intermediate',
      prerequisites: ['Basic account setup', 'Familiarity with platform'],
      outcomes: ['Feature mastery', 'Optimized usage', 'Customized experience']
    },
    {
      id: 'troubleshooting',
      title: '3. Troubleshooting',
      icon: Wrench,
      color: 'text-orange-600',
      description: 'Comprehensive troubleshooting guide with common issues, advanced solutions, and preventive maintenance tips',
      content: [
        'Connection problems and network connectivity issues with diagnostic tools and solutions',
        'AI assistant not responding or providing incorrect answers with reset procedures',
        'Accessibility feature issues including screen reader problems and voice recognition failures',
        'Performance optimization techniques for faster loading and smoother operation',
        'Account access problems including forgotten passwords and authentication failures',
        'Data synchronization errors and conflicts with manual resolution methods',
        'Browser compatibility issues with Chrome, Firefox, Safari, and Edge troubleshooting',
        'Mobile app synchronization problems and cross-platform consistency issues',
        'Audio and video call quality issues with bandwidth optimization solutions',
        'File upload and download problems with size limits and format compatibility',
        'Notification and alert system failures with troubleshooting and reset procedures',
        'Cache and cookie issues causing performance problems or login difficulties'
      ],
      quickActions: ['Diagnostic Tool', 'Common Fixes', 'Contact Support', 'System Scan', 'Performance Check'],
      estimatedTime: '10-60 minutes',
      difficulty: 'Varies by issue',
      prerequisites: ['Basic technical knowledge', 'Access to device settings'],
      outcomes: ['Issue resolution', 'System optimization', 'Preventive maintenance']
    },
    {
      id: 'technical-support',
      title: '4. Technical Support',
      icon: Cpu,
      color: 'text-purple-600',
      description: 'Advanced technical assistance for developers, IT professionals, and power users with complex integration needs',
      content: [
        'System requirements and hardware specifications for optimal performance',
        'Browser compatibility testing with detailed version support matrix',
        'Mobile app support for iOS and Android with troubleshooting guides',
        'API integration help with comprehensive documentation and code examples',
        'Performance issues analysis with profiling tools and optimization techniques',
        'Security concerns including vulnerability assessment and protection measures',
        'Database management and data migration procedures with backup strategies',
        'Network configuration and firewall settings for enterprise environments',
        'SSL/TLS certificate management and HTTPS implementation',
        'Load balancing and server optimization for high-traffic scenarios',
        'Custom development and white-label solutions for institutional partners',
        'Compliance and audit requirements for healthcare and educational institutions'
      ],
      quickActions: ['Live Chat', 'Remote Session', 'Priority Queue', 'Developer Documentation', 'API Testing'],
      estimatedTime: '30-120 minutes',
      difficulty: 'Advanced',
      prerequisites: ['Technical background', 'Admin access', 'Development environment'],
      outcomes: ['Technical resolution', 'System optimization', 'Integration success']
    },
    {
      id: 'faq',
      title: '5. Frequently Asked Questions',
      icon: HelpCircle,
      color: 'text-teal-600',
      description: 'Comprehensive FAQ section with detailed answers to common questions, troubleshooting guides, and best practices',
      content: [
        'Account management including password reset, profile updates, and subscription management',
        'Billing and subscriptions with payment methods, invoice management, and cancellation procedures',
        'Privacy and security with data protection, GDPR compliance, and privacy settings',
        'Accessibility questions with WCAG compliance, assistive technology support, and accommodation requests',
        'Technical specifications including supported browsers, devices, and system requirements',
        'Platform limitations and constraints with workarounds and alternative solutions',
        'Integration with third-party services and external applications',
        'Data export and portability with GDPR compliance and data transfer procedures',
        'Multi-user support and family account management with parental controls',
        'Emergency procedures and crisis support with immediate response protocols',
        'Feature requests and feedback submission with development roadmap information'
      ],
      quickActions: ['Search FAQ', 'Top Questions', 'Recent Updates', 'Category Browse', 'Ask Expert'],
      estimatedTime: '5-30 minutes',
      difficulty: 'Beginner to Advanced',
      prerequisites: ['Basic platform familiarity'],
      outcomes: ['Question answered', 'Information found', 'Issue resolved']
    },
    {
      id: 'contact-support',
      title: '6. Contact Support',
      icon: MessageCircle,
      color: 'text-indigo-600',
      description: 'Multiple contact channels with 24/7 availability, priority support, and specialized assistance options',
      content: [
        '24/7 live chat support with AI-powered assistance and human agent escalation',
        'Email support team with detailed ticketing system and response tracking',
        'Phone assistance with toll-free numbers and international support options',
        'Video call support with screen sharing and remote desktop assistance',
        'Community forum with peer-to-peer support and expert moderation',
        'Emergency hotline with immediate response for critical issues',
        'Priority support for institutional partners and enterprise customers',
        'Scheduled consultations with dedicated account managers',
        'WhatsApp and social media support for quick questions and updates',
        'Callback service with guaranteed response time windows',
        'Multilingual support with translation services available',
        'Accessibility-specific support with assistive technology experts'
      ],
      quickActions: ['Start Chat', 'Send Email', 'Call Now', 'Schedule Video Call', 'Emergency Contact'],
      estimatedTime: 'Response varies by channel',
      difficulty: 'All levels',
      prerequisites: ['Contact information', 'Issue description'],
      outcomes: ['Assistance received', 'Issue escalated', 'Resolution initiated']
    }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', checkTheme);
      window.removeEventListener('themechange', checkTheme);
      window.removeEventListener('darkModeChange', checkTheme);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCE7EC]/20 via-white to-teal-50/20">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#147783] to-teal-600 rounded-lg flex items-center justify-center">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Help & Support Center</h1>
                <p className="text-sm text-gray-600">24/7 Assistance & Resources</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search support..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#147783] focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-600 hover:text-[#147783] transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI-Powered Support Analytics */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent">AI-Powered Support Analytics</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Real-time Monitoring</span>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#147783] to-teal-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>View Dashboard</span>
              </button>
            </div>
          </div>

          {/* Support Analytics Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Support Performance Center</h3>
                <p className="text-blue-700 text-sm">Real-time metrics and AI-powered insights</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                <div className="flex items-center justify-between mb-2">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-medium text-blue-800">Active Chats</p>
                <p className="text-2xl font-bold text-blue-700">{realTimeMetrics.activeChats}</p>
                <p className="text-xs text-blue-600">Live conversations</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200/50">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-medium text-green-800">Response Time</p>
                <p className="text-2xl font-bold text-green-700">{realTimeMetrics.avgResponseTime}</p>
                <p className="text-xs text-green-600">Average wait time</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200/50">
                <div className="flex items-center justify-between mb-2">
                  <ThumbsUp className="h-5 w-5 text-purple-600" />
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-medium text-purple-800">Satisfaction Rate</p>
                <p className="text-2xl font-bold text-purple-700">{realTimeMetrics.satisfactionRate}%</p>
                <p className="text-xs text-purple-600">User happiness score</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200/50">
                <div className="flex items-center justify-between mb-2">
                  <Cpu className="h-5 w-5 text-orange-600" />
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-medium text-orange-800">AI Resolution Rate</p>
                <p className="text-2xl font-bold text-orange-700">{realTimeMetrics.aiResolutionRate}%</p>
                <p className="text-xs text-orange-600">Automated solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-200/50">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-medium text-red-800">Tickets Resolved</p>
                <p className="text-2xl font-bold text-red-700">{realTimeMetrics.ticketsResolved}</p>
                <p className="text-xs text-red-600">Completed today</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200/50">
                <div className="flex items-center justify-between mb-2">
                  <AlertTriangle className="h-5 w-5 text-teal-600" />
                  <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-medium text-teal-800">Tickets Pending</p>
                <p className="text-2xl font-bold text-teal-700">{realTimeMetrics.ticketsPending}</p>
                <p className="text-xs text-teal-600">Awaiting response</p>
              </div>
            </div>
          </div>

          {/* AI-Powered Insights */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50">
            <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
              AI-Powered Insights
            </h3>
            <div className="space-y-3">
              {aiInsights.map((insight, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  insight.severity === 'success' ? 'bg-green-50 border-green-200' :
                  insight.severity === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-blue-50 border-blue-200'
                }`}>
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      insight.severity === 'success' ? 'bg-green-500' :
                      insight.severity === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{insight.message}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">{insight.time}</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                          Type: {insight.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Categories - Privacy Policy Details Layout */}
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
        <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent mb-8">Support Categories</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left Sidebar - Topics List */}
          <div className="lg:w-2/5">
            <div className="sticky top-8 bg-gradient-to-r from-[#CCE7EC]/30 to-teal-50/30 rounded-xl p-6 border border-[#147783]/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Topics</h3>
              <div className="space-y-2">
                {supportSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => toggleSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      expandedSection === section.id
                        ? 'bg-gradient-to-r from-[#147783] to-teal-600 text-white shadow-lg'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className={`h-5 w-5 ${expandedSection === section.id ? 'text-white' : section.color}`} />
                      <span className={`font-medium ${expandedSection === section.id ? 'text-white' : section.color}`}>
                        {section.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-3/5 flex items-center h-full overflow-y-auto">
            {expandedSection ? (
              <div className="w-full h-full">
                {supportSections
                  .filter(section => section.id === expandedSection)
                  .map((section) => (
                    <div key={section.id} className="bg-gradient-to-br from-[#CCE7EC]/30 to-teal-50/30 rounded-2xl p-8 border border-[#147783]/20 h-full overflow-y-auto">
                      {/* Section Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${section.color === 'text-green-600' ? 'bg-green-100' : section.color === 'text-blue-600' ? 'bg-blue-100' : section.color === 'text-purple-600' ? 'bg-purple-100' : section.color === 'text-orange-600' ? 'bg-orange-100' : 'bg-teal-100'}`}>
                          <section.icon className={`h-6 w-6 ${section.color}`} />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${section.color}`}>{section.title}</h3>
                          <p className="text-gray-600 text-sm">{section.description}</p>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="space-y-6">

                      {/* Key Topics */}
                      <div className={`bg-gradient-to-br ${section.color === 'text-blue-600' ? 'from-blue-50 to-indigo-50' : section.color === 'text-green-600' ? 'from-green-50 to-emerald-50' : section.color === 'text-purple-600' ? 'from-purple-50 to-violet-50' : 'from-orange-50 to-amber-50'} rounded-xl p-6 border ${section.color === 'text-blue-600' ? 'border-blue-200/50' : section.color === 'text-green-600' ? 'border-green-200/50' : section.color === 'text-purple-600' ? 'border-purple-200/50' : 'border-orange-200/50'} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
                        <h4 className={`text-lg font-semibold ${section.color === 'text-blue-600' ? 'text-blue-900' : section.color === 'text-green-600' ? 'text-green-900' : section.color === 'text-purple-600' ? 'text-purple-900' : 'text-orange-900'} mb-4 flex items-center`}>
                          <BookOpen className={`h-5 w-5 ${section.color} mr-2`} />
                          Key Topics
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.content.map((item, index) => (
                            <div key={index} className="flex items-start space-x-2 p-3 bg-white/60 rounded-lg">
                              <CheckCircle className={`h-4 w-4 ${section.color} mt-0.5 flex-shrink-0`} />
                              <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      {section.quickActions && (
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                          <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                            <Zap className="h-5 w-5 text-green-600 mr-2" />
                            Quick Actions
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {section.quickActions.map((action, index) => (
                              <button key={index} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors">
                                {action}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Time & Difficulty */}
                      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                          <Clock className="h-5 w-5 text-purple-600 mr-2" />
                          Support Details
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-purple-100/50 rounded-lg">
                            <span className="text-purple-800 font-medium text-sm">Estimated Time:</span>
                            <span className="text-purple-700 text-sm">{section.estimatedTime}</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-purple-100/50 rounded-lg">
                            <span className="text-purple-800 font-medium text-sm">Difficulty Level:</span>
                            <span className="text-purple-700 text-sm">{section.difficulty}</span>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-[#CCE7EC] to-teal-50 rounded-full flex items-center justify-center mb-6">
                  <Headphones className="h-12 w-12 text-[#147783]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Support Topic</h3>
                <p className="text-gray-600 max-w-md">Choose a topic from the left sidebar to view detailed support information and resources.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 mb-8">
        <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
          <Zap className="h-5 w-5 text-green-600 mr-2" />
          Quick Actions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Video className="h-5 w-5 text-white" />
              </div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <h5 className="text-lg font-semibold text-blue-900 mb-2">Video Tutorials</h5>
            <p className="text-blue-700 text-sm mb-4">Step-by-step video guides</p>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Watch Now
              </button>
              <p className="text-xs text-gray-600 text-center">Available 24/7</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FileQuestion className="h-5 w-5 text-white" />
              </div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            <h5 className="text-lg font-semibold text-purple-900 mb-2">FAQ</h5>
            <p className="text-purple-700 text-sm mb-4">Common questions answered</p>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Browse FAQ
              </button>
              <p className="text-xs text-gray-600 text-center">Updated regularly</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <h5 className="text-lg font-semibold text-green-900 mb-2">Live Chat</h5>
            <p className="text-green-700 text-sm mb-4">Chat with support team</p>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Chat
              </button>
              <p className="text-xs text-gray-600 text-center">Available 24/7</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Download className="h-5 w-5 text-white" />
              </div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <h5 className="text-lg font-semibold text-orange-900 mb-2">Download Guides</h5>
            <p className="text-orange-700 text-sm mb-4">PDF guides and manuals</p>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Download
              </button>
              <p className="text-xs text-gray-600 text-center">Free resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Team Grid */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200/50 mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="h-5 w-5 text-gray-700 mr-2" />
          Our Support Team
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/60 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#147783] to-teal-600 rounded-full flex items-center justify-center">
                <Headphones className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Support Lead</p>
                <p className="text-sm text-gray-600">Senior Support Expert</p>
              </div>
            </div>
            <p className="text-xs text-gray-700">5+ years experience, 24/7 certified</p>
          </div>
          <div className="bg-white/60 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#147783] to-teal-600 rounded-full flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Technical Expert</p>
                <p className="text-sm text-gray-600">IT Specialist</p>
              </div>
            </div>
            <p className="text-xs text-gray-700">8+ years experience, certified</p>
          </div>
          <div className="bg-white/60 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#147783] to-teal-600 rounded-full flex items-center justify-center">
                <Cpu className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">AI Specialist</p>
                <p className="text-sm text-gray-600">AI Support Expert</p>
              </div>
            </div>
            <p className="text-xs text-gray-700">6+ years experience, ML certified</p>
          </div>
        </div>
      </div>

      {/* Contact Options Grid */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200/50 mb-8">
        <h4 className="text-lg font-semibold text-teal-900 mb-4 flex items-center">
          <Phone className="h-5 w-5 text-teal-600 mr-2" />
          Contact Options
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <h5 className="text-lg font-semibold text-blue-900 mb-2">Live Chat Support</h5>
            <p className="text-blue-700 text-sm mb-4">Chat with our support team in real-time</p>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Chat
              </button>
              <p className="text-xs text-gray-600 text-center">Available 24/7</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Video className="h-5 w-5 text-white" />
              </div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
            <h5 className="text-lg font-semibold text-purple-900 mb-2">Video Consultation</h5>
            <p className="text-purple-700 text-sm mb-4">Schedule a video call with our experts</p>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule Call
              </button>
              <p className="text-xs text-gray-600 text-center">Available by appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Grid */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50 mb-8">
        <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
          Emergency Support
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h5 className="text-lg font-semibold text-red-900">Emergency Support Contact</h5>
              <p className="text-red-700 text-sm">For urgent support matters</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-red-800 font-medium">+91 98765 43211</span>
            <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Emergency Call
            </button>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-200/50">
        <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent mb-8">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#147783]" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email Support</p>
                  <p className="text-sm text-gray-600">support@prihub.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#147783]" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone Support</p>
                  <p className="text-sm text-gray-600">+1-800-PRIHUB</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-[#147783]" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Live Chat</p>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Times</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <span className="text-sm text-green-600">Within 24 hours</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Phone</span>
                <span className="text-sm text-green-600">2-5 minutes</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Live Chat</span>
                <span className="text-sm text-green-600">Instant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Support;
