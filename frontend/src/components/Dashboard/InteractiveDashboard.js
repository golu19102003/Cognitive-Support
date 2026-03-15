import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Brain, 
  Activity, 
  MessageSquare, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Shield, 
  Heart, 
  Target, 
  Award, 
  Zap,
  Eye,
  Volume2,
  Keyboard,
  Settings,
  BarChart3,
  PieChart,
  LineChart,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  FileText,
  Globe,
  Smartphone,
  Database,
  Lock,
  Cpu,
  Wifi,
  Cloud,
  UserCheck,
  UserX,
  ThumbsUp,
  ThumbsDown,
  Timer,
  Star,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  MoreVertical,
  Bell,
  Search,
  Filter,
  Download,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Info,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

const InteractiveDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('overview');
  const [timeRange, setTimeRange] = useState('week');
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  // Check for theme preference
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   localStorage.getItem('isDarkMode');
      setIsDarkMode(theme === 'dark' || theme === 'true');
    };
    checkTheme();
  }, []);

  // Real-time metrics data
  const [metrics, setMetrics] = useState({
    totalUsers: 1247,
    activeUsers: 892,
    dailySessions: 456,
    aiInteractions: 3247,
    accessibilityUsage: 78,
    userSatisfaction: 94,
    systemUptime: 99.9,
    responseTime: 1.2,
    tasksCompleted: 892,
    remindersSet: 567,
    chatbotQueries: 2341,
    accessibilityFeatures: {
      tts: 456,
      screenReader: 234,
      keyboardNav: 789,
      highContrast: 345,
      largeText: 567
    }
  });

  // User demographics data
  const userDemographics = [
    { category: 'Learning Disabilities', count: 234, percentage: 18.8, color: '#16808D' },
    { category: 'ADHD', count: 189, percentage: 15.2, color: '#22C55E' },
    { category: 'Autism Spectrum', count: 156, percentage: 12.5, color: '#1B9AAA' },
    { category: 'Memory Disorders', count: 123, percentage: 9.9, color: '#142C52' },
    { category: 'Visual Impairments', count: 98, percentage: 7.9, color: '#059669' },
    { category: 'Other', count: 447, percentage: 35.7, color: '#6B46C1' }
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Completed cognitive therapy session',
      time: '2 hours ago',
      type: 'success',
      score: 95
    },
    {
      id: 2,
      user: 'Sarah Smith',
      action: 'Set up daily reminders',
      time: '3 hours ago',
      type: 'info',
      score: 88
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'Updated accessibility settings',
      time: '5 hours ago',
      type: 'warning',
      score: 92
    },
    {
      id: 4,
      user: 'Emily Davis',
      action: 'Used chatbot for navigation help',
      time: '1 day ago',
      type: 'success',
      score: 90
    }
  ];

  // System performance metrics
  const systemPerformance = [
    { metric: 'Response Time', value: '1.2s', status: 'excellent', trend: 'down' },
    { metric: 'Uptime', value: '99.9%', status: 'excellent', trend: 'stable' },
    { metric: 'Error Rate', value: '0.1%', status: 'good', trend: 'down' },
    { metric: 'Load Time', value: '2.3s', status: 'good', trend: 'down' }
  ];

  // Accessibility features usage
  const accessibilityFeatures = [
    { feature: 'Text-to-Speech', usage: 456, icon: Volume2, color: '#16808D' },
    { feature: 'Screen Reader', usage: 234, icon: Eye, color: '#22C55E' },
    { feature: 'Keyboard Navigation', usage: 789, icon: Keyboard, color: '#1B9AAA' },
    { feature: 'High Contrast', usage: 345, icon: Settings, color: '#142C52' },
    { feature: 'Large Text', usage: 567, icon: FileText, color: '#059669' }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Analytics', icon: Users },
    { id: 'accessibility', label: 'Accessibility', icon: Shield },
    { id: 'performance', label: 'Performance', icon: Cpu },
    { id: 'activities', label: 'Activities', icon: Activity },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];

  const timeRanges = [
    { id: 'day', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'year', label: 'This Year' }
  ];

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMetrics(prev => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 10),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
        dailySessions: prev.dailySessions + Math.floor(Math.random() * 8),
        aiInteractions: prev.aiInteractions + Math.floor(Math.random() * 20)
      }));
      setIsLoading(false);
    }, 1000);
  };

  const MetricCard = ({ title, value, icon: Icon, change, color, subtitle }) => (
    <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <Icon className={`h-6 w-6`} style={{ color }} />
        </div>
        {change && (
          <div className={`flex items-center text-sm font-medium ${
            change > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {change > 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {value}
        </div>
        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {title}
        </div>
        {subtitle && (
          <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );

  const ActivityItem = ({ activity }) => (
    <div className={`p-4 rounded-lg flex items-center space-x-4 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } hover:shadow-md transition-shadow`}>
      <div className={`p-2 rounded-full ${
        activity.type === 'success' ? 'bg-green-100' :
        activity.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
      }`}>
        {activity.type === 'success' ? <CheckCircle className="h-4 w-4 text-green-600" /> :
         activity.type === 'warning' ? <AlertTriangle className="h-4 w-4 text-yellow-600" /> :
         <Info className="h-4 w-4 text-blue-600" />}
      </div>
      <div className="flex-1">
        <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {activity.user}
        </div>
        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {activity.action}
        </div>
      </div>
      <div className="text-right">
        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {activity.time}
        </div>
        <div className="text-xs text-green-600">
          Score: {activity.score}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-40 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border-b ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <div className="ml-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#16808D] to-[#1B9AAA] rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h1 className={`ml-3 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  PRIHUB Dashboard
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={refreshData}
                className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                disabled={isLoading}
              >
                <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <Bell className="h-5 w-5" />
                </button>
              </div>
              
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className={`px-3 py-1 rounded-md text-sm ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                {timeRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-30 w-64 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0`}>
          <nav className="mt-8 px-4">
            <div className="space-y-2">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#16808D] to-[#1B9AAA] text-white'
                      : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Platform Overview
                </h2>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Last updated: {new Date().toLocaleTimeString()}
                  </span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  title="Total Users"
                  value={metrics.totalUsers.toLocaleString()}
                  icon={Users}
                  change={12}
                  color="#16808D"
                  subtitle="+156 this week"
                />
                <MetricCard
                  title="Active Sessions"
                  value={metrics.dailySessions}
                  icon={Activity}
                  change={8}
                  color="#22C55E"
                  subtitle="Daily average"
                />
                <MetricCard
                  title="AI Interactions"
                  value={metrics.aiInteractions.toLocaleString()}
                  icon={MessageSquare}
                  change={23}
                  color="#1B9AAA"
                  subtitle="Real-time assistance"
                />
                <MetricCard
                  title="Satisfaction Rate"
                  value={`${metrics.userSatisfaction}%`}
                  icon={Heart}
                  change={2}
                  color="#142C52"
                  subtitle="User feedback"
                />
              </div>

              {/* User Demographics Chart */}
              <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  User Demographics
                </h3>
                <div className="space-y-3">
                  {userDemographics.map((demo, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: demo.color }}></div>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {demo.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className={`w-32 h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            <div
                              className="h-2 rounded-full"
                              style={{ width: `${demo.percentage}%`, backgroundColor: demo.color }}
                            ></div>
                          </div>
                          <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {demo.percentage}%
                          </span>
                        </div>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          ({demo.count})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent Activities
                </h3>
                <div className="space-y-3">
                  {recentActivities.map(activity => (
                    <ActivityItem key={activity.id} activity={activity} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* User Analytics Section */}
          {activeSection === 'users' && (
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                User Analytics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MetricCard
                  title="Total Users"
                  value={metrics.totalUsers.toLocaleString()}
                  icon={Users}
                  change={12}
                  color="#16808D"
                  subtitle="Registered accounts"
                />
                <MetricCard
                  title="Active Users"
                  value={metrics.activeUsers}
                  icon={UserCheck}
                  change={8}
                  color="#22C55E"
                  subtitle="Currently online"
                />
                <MetricCard
                  title="New Users"
                  value="156"
                  icon={TrendingUp}
                  change={15}
                  color="#1B9AAA"
                  subtitle="This month"
                />
              </div>

              <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  User Engagement Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      Daily Active Users
                    </div>
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {metrics.dailySessions}
                    </div>
                    <div className="text-xs text-green-600">+8% from yesterday</div>
                  </div>
                  <div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      Average Session Duration
                    </div>
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      24.5 min
                    </div>
                    <div className="text-xs text-green-600">+12% from last week</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accessibility Section */}
          {activeSection === 'accessibility' && (
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Accessibility Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accessibilityFeatures.map((feature, index) => (
                  <div key={index} className={`p-6 rounded-xl shadow-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                      </div>
                      <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {feature.usage}
                      </span>
                    </div>
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.feature}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                      Daily active users
                    </div>
                  </div>
                ))}
              </div>

              <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Accessibility Compliance
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      WCAG 2.1 Compliance
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 rounded-full bg-green-100">
                        <div className="w-full h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">100%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Screen Reader Compatibility
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 rounded-full bg-green-100">
                        <div className="w-full h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">100%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Keyboard Navigation
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 rounded-full bg-green-100">
                        <div className="w-full h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Section */}
          {activeSection === 'performance' && (
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                System Performance
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  title="Response Time"
                  value={`${metrics.responseTime}s`}
                  icon={Zap}
                  change={-5}
                  color="#16808D"
                  subtitle="Average response"
                />
                <MetricCard
                  title="System Uptime"
                  value={`${metrics.systemUptime}%`}
                  icon={Shield}
                  change={0.1}
                  color="#22C55E"
                  subtitle="Last 30 days"
                />
                <MetricCard
                  title="Error Rate"
                  value="0.1%"
                  icon={AlertTriangle}
                  change={-20}
                  color="#DC2626"
                  subtitle="Critical errors"
                />
                <MetricCard
                  title="Load Time"
                  value="2.3s"
                  icon={Clock}
                  change={-8}
                  color="#1B9AAA"
                  subtitle="Page load"
                />
              </div>

              <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Performance Metrics
                </h3>
                <div className="space-y-4">
                  {systemPerformance.map((perf, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {perf.metric}
                        </div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {perf.status === 'excellent' ? 'Excellent performance' : 'Good performance'}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {perf.value}
                        </span>
                        <div className={`flex items-center text-xs ${
                          perf.trend === 'up' ? 'text-red-600' :
                          perf.trend === 'down' ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {perf.trend === 'up' ? <ArrowUp className="h-3 w-3" /> :
                           perf.trend === 'down' ? <ArrowDown className="h-3 w-3" /> :
                           <div className="h-3 w-3 rounded-full bg-gray-400"></div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Activities Section */}
          {activeSection === 'activities' && (
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                User Activities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MetricCard
                  title="Tasks Completed"
                  value={metrics.tasksCompleted}
                  icon={CheckCircle}
                  change={15}
                  color="#16808D"
                  subtitle="Daily average"
                />
                <MetricCard
                  title="Reminders Set"
                  value={metrics.remindersSet}
                  icon={Bell}
                  change={8}
                  color="#22C55E"
                  subtitle="Active reminders"
                />
                <MetricCard
                  title="Chatbot Queries"
                  value={metrics.chatbotQueries}
                  icon={MessageSquare}
                  change={23}
                  color="#1B9AAA"
                  subtitle="AI assistance"
                />
              </div>

              <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent User Activities
                </h3>
                <div className="space-y-3">
                  {recentActivities.map(activity => (
                    <ActivityItem key={activity.id} activity={activity} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reports Section */}
          {activeSection === 'reports' && (
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Reports & Analytics
              </h2>
              
              <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Export Reports
                  </h3>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#16808D] to-[#1B9AAA] text-white rounded-md hover:opacity-90 transition-opacity">
                    <Download className="h-4 w-4" />
                    <span>Export All</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <button className={`p-4 rounded-lg text-left ${
                    isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-colors`}>
                    <FileText className="h-6 w-6 mb-2 text-blue-600" />
                    <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      User Analytics Report
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      PDF • 2.4 MB
                    </div>
                  </button>
                  
                  <button className={`p-4 rounded-lg text-left ${
                    isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-colors`}>
                    <BarChart3 className="h-6 w-6 mb-2 text-green-600" />
                    <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Performance Metrics
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      CSV • 1.8 MB
                    </div>
                  </button>
                  
                  <button className={`p-4 rounded-lg text-left ${
                    isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-colors`}>
                    <PieChart className="h-6 w-6 mb-2 text-purple-600" />
                    <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Accessibility Report
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      PDF • 3.1 MB
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InteractiveDashboard;
