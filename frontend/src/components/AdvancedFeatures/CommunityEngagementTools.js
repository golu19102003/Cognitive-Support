import React, { useState, useEffect } from 'react';
import { 
  Users, Heart, MessageSquare, TrendingUp, Award, Calendar,
  ChevronRight, Star, BarChart3, Activity, Target,
  Zap, Shield, Globe, Video, Mic, Bell, Share2,
  Smartphone, Brain, BookOpen
} from 'lucide-react';

const CommunityEngagementTools = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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

  const features = [
    {
      icon: BarChart3,
      title: 'Engagement Analytics',
      description: 'Comprehensive analytics dashboard to track community participation, user engagement, and interaction patterns.',
      color: 'from-blue-500 to-blue-600',
      metrics: ['User Activity', 'Participation Rate', 'Engagement Score', 'Growth Trends']
    },
    {
      icon: Target,
      title: 'Participation Tools',
      description: 'Interactive tools designed to increase meaningful engagement and active participation for users with cognitive challenges.',
      color: 'from-green-500 to-green-600',
      metrics: ['Interactive Polls', 'Q&A Sessions', 'Workshops', 'Discussion Forums']
    },
    {
      icon: Heart,
      title: 'Community Building',
      description: 'Features that foster connections, build relationships, and create a supportive community environment.',
      color: 'from-purple-500 to-purple-600',
      metrics: ['User Profiles', 'Connection Suggestions', 'Mentorship Programs', 'Success Stories']
    },
    {
      icon: Activity,
      title: 'Social Features',
      description: 'Rich social interaction features including real-time chat, video calls, and collaborative spaces.',
      color: 'from-orange-500 to-orange-600',
      metrics: ['Live Chat', 'Video Meetings', 'Group Activities', 'Event Planning']
    }
  ];

  const tools = [
    {
      name: 'Community Dashboard',
      description: 'Centralized dashboard for managing all community activities and engagement metrics.',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      features: ['Real-time Analytics', 'User Insights', 'Activity Tracking', 'Performance Reports']
    },
    {
      name: 'Interactive Forums',
      description: 'Accessible discussion forums with adaptive features for cognitive accessibility.',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600',
      features: ['Thread Organization', 'Accessibility Mode', 'Moderation Tools', 'Content Filtering']
    },
    {
      name: 'Virtual Events',
      description: 'Host accessible virtual events, workshops, and meetups with engagement tracking.',
      icon: Video,
      color: 'from-purple-500 to-purple-600',
      features: ['Live Streaming', 'Accessibility Features', 'Recording Options', 'Attendance Tracking']
    },
    {
      name: 'Gamification System',
      description: 'Motivate participation with badges, points, and achievement systems.',
      icon: Award,
      color: 'from-orange-500 to-orange-600',
      features: ['Achievement Badges', 'Point System', 'Leaderboards', 'Progress Tracking']
    }
  ];

  const engagementMetrics = [
    {
      title: 'Daily Active Users',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Participation Rate',
      value: '78%',
      change: '+5%',
      trend: 'up',
      icon: Target
    },
    {
      title: 'Engagement Score',
      value: '8.4/10',
      change: '+0.3',
      trend: 'up',
      icon: Activity
    },
    {
      title: 'Community Growth',
      value: '+156',
      change: '+23%',
      trend: 'up',
      icon: TrendingUp
    }
  ];

  const successStories = [
    {
      name: 'Sarah\'s Support Group',
      type: 'Peer Support Community',
      description: 'A thriving community for users with visual impairments that grew from 5 to 150+ members in 6 months.',
      metrics: ['150+ Members', '89% Satisfaction', 'Daily Activities', 'High Engagement'],
      image: '👥'
    },
    {
      name: 'Tech Skills Workshop',
      type: 'Educational Program',
      description: 'Monthly workshops teaching assistive technology skills to users with cognitive challenges.',
      metrics: ['45 Participants', '92% Completion', 'Skill Improvement', 'Ongoing Support'],
      image: '💻'
    },
    {
      name: 'Mentorship Program',
      type: 'Peer Connection',
      description: 'Connecting experienced users with newcomers for personalized guidance and support.',
      metrics: ['28 Mentor Pairs', '95% Success Rate', 'Long-term Impact', 'Community Growth'],
      image: '🤝'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-rose-50 via-white to-purple-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-rose-600 to-purple-600 p-3 rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className={`text-3xl font-bold ml-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Community Engagement Tools
              </h1>
            </div>
            <p className={`text-lg max-w-2xl mx-auto mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Interactive adaptive tools for meaningful engagement and active participation for users with cognitive challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4.7</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(9.8K communities)</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-rose-900/50 text-rose-300' : 'bg-rose-100 text-rose-700'}`}>
                Engagement Analytics
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                Participation Tools
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('tools')}
              className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-rose-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Engage Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['overview', 'tools', 'analytics', 'success', 'features', 'resources', 'impact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white'
                  : isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.metrics.map((metric, i) => (
                      <div key={i} className={`px-3 py-1 rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'guidelines' && (
          <div className="space-y-6">
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Community Engagement Guidelines
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Best Practices
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Create inclusive content</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Encourage participation</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Provide clear instructions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Accessibility Standards
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>WCAG 2.1 compliance</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Screen reader support</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Keyboard navigation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Community Handbook',
                description: 'Comprehensive guide for community managers and moderators',
                icon: BookOpen,
                features: ['Moderation guidelines', 'Community standards', 'Best practices']
              },
              {
                title: 'Training Materials',
                description: 'Educational resources for community engagement',
                icon: Video,
                features: ['Video tutorials', 'Workshops', 'Certification courses']
              },
              {
                title: 'Support Center',
                description: 'Get help and support for community management',
                icon: Users,
                features: ['24/7 support', 'Expert consultation', 'Community forum']
              },
              {
                title: 'Analytics Tools',
                description: 'Tools to measure and improve community engagement',
                icon: BarChart3,
                features: ['Engagement metrics', 'User insights', 'Growth analytics']
              },
              {
                title: 'Communication Templates',
                description: 'Ready-to-use templates for community communication',
                icon: MessageSquare,
                features: ['Announcement templates', 'Email templates', 'Social media posts']
              },
              {
                title: 'Success Stories',
                description: 'Case studies and success stories from other communities',
                icon: Award,
                features: ['Case studies', 'Success metrics', 'Lessons learned']
              }
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {resource.title}
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {resource.description}
                  </p>
                  <div className="space-y-2">
                    {resource.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <ChevronRight className="h-3 w-3 text-purple-600 mr-2" />
                        <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8 text-rose-600" />
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {metric.value}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {metric.title}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        
        {activeTab === 'features' && (
          <div className="space-y-8">
            {/* Key Features Overview */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Community Engagement Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Community Insights',
                    description: 'Advanced analytics and insights for community growth and engagement',
                    icon: TrendingUp,
                    highlights: ['Growth metrics', 'Engagement patterns', 'User behavior analysis', 'Predictive insights']
                  },
                  {
                    title: 'Engagement Automation',
                    description: 'Automated workflows to boost community participation and retention',
                    icon: Zap,
                    highlights: ['Auto-reminders', 'Smart scheduling', 'Personalized outreach', 'Behavior triggers']
                  },
                  {
                    title: 'Social Integration',
                    description: 'Seamless integration with popular social media platforms',
                    icon: Share2,
                    highlights: ['Cross-platform sharing', 'Social analytics', 'Content syndication', 'Brand consistency']
                  },
                  {
                    title: 'Mobile Experience',
                    description: 'Optimized mobile experience for on-the-go community engagement',
                    icon: Smartphone,
                    highlights: ['Mobile apps', 'Push notifications', 'Offline access', 'Mobile-first design']
                  },
                  {
                    title: 'AI-Powered Features',
                    description: 'Artificial intelligence features for enhanced community management',
                    icon: Brain,
                    highlights: ['Smart moderation', 'Content recommendations', 'User segmentation', 'Predictive analytics']
                  },
                  {
                    title: 'Security & Privacy',
                    description: 'Enterprise-grade security and privacy controls for community safety',
                    icon: Shield,
                    highlights: ['Data encryption', 'Privacy controls', 'Compliance tools', 'Security monitoring']
                  }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className={`w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {feature.title}
                      </h4>
                      <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center">
                            <ChevronRight className="h-3 w-3 text-purple-600 mr-2" />
                            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Feature Comparison */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Feature Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className={`w-full ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <thead>
                    <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <th className="text-left py-3 px-4">Feature</th>
                      <th className="text-center py-3 px-4">Basic</th>
                      <th className="text-center py-3 px-4">Professional</th>
                      <th className="text-center py-3 px-4">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Real-time Analytics', basic: '✓', pro: '✓', enterprise: '✓' },
                      { feature: 'Interactive Tools', basic: '✓', pro: '✓', enterprise: '✓' },
                      { feature: 'Smart Notifications', basic: '✗', pro: '✓', enterprise: '✓' },
                      { feature: 'Advanced Analytics', basic: '✗', pro: '✓', enterprise: '✓' },
                      { feature: 'API Access', basic: '✗', pro: '✗', enterprise: '✓' },
                      { feature: 'Priority Support', basic: '✗', pro: '✗', enterprise: '✓' }
                    ].map((row, index) => (
                      <tr key={index} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4">{row.feature}</td>
                        <td className="text-center py-3 px-4">{row.basic}</td>
                        <td className="text-center py-3 px-4">{row.pro}</td>
                        <td className="text-center py-3 px-4">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {tool.name}
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tool.description}
                  </p>
                  <div className="space-y-2">
                    {tool.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-rose-600 mr-2" />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Engagement Analytics Dashboard
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'User Activity', value: 'High', description: 'Users are highly active in community discussions' },
                  { title: 'Participation Rate', value: '78%', description: 'Above industry average for community platforms' },
                  { title: 'Engagement Score', value: '8.4/10', description: 'Excellent user engagement and satisfaction' },
                  { title: 'Retention Rate', value: '92%', description: 'Users continue to participate over time' },
                  { title: 'Growth Rate', value: '+23%', description: 'Steady community growth month over month' },
                  { title: 'Interaction Quality', value: 'High', description: 'Meaningful and supportive interactions' }
                ].map((metric, index) => (
                  <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {metric.title}
                    </h4>
                    <p className={`text-2xl font-bold mb-1 text-rose-600`}>
                      {metric.value}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'success' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="text-4xl mb-4 text-center">{story.image}</div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {story.name}
                </h3>
                <p className={`text-sm font-medium mb-3 text-rose-600`}>
                  {story.type}
                </p>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {story.description}
                </p>
                <div className="space-y-2">
                  {story.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityEngagementTools;
