import React, { useState, useEffect } from 'react';
import { 
  Users, Building, DollarSign, Clock, AlertCircle, TrendingUp, 
  Activity, BarChart3, PieChart, Calendar, Filter, Download, 
  RefreshCw, Settings, Bell, Search, ChevronUp, ChevronDown,
  Home, CreditCard, FileText, Zap, Target,
  MessageSquare, Megaphone, X
} from 'lucide-react';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
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

  const [showFilters, setShowFilters] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [notifications, setNotifications] = useState([]);
  const [filters, setFilters] = useState({
    block: 'all',
    status: 'all',
    priority: 'all',
    dateRange: 'all'
  });
  const [filteredData, setFilteredData] = useState(null);
  const [chartTimePeriod, setChartTimePeriod] = useState('monthly');
  const [realTimeData, setRealTimeData] = useState({
    totalUsers: 1247,
    activeUnits: 156,
    totalRevenue: 2847500,
    pendingTasks: 23,
    occupancy: 87,
    satisfaction: 94,
    newVisitors: 8,
    openComplaints: 5,
    recentPayments: 3,
    onlineUsers: 127,
    activeSessions: 89,
    serverLoad: 23,
    lastUpdated: new Date()
  });
  const [dashboardStats, setDashboardStats] = useState({
    totalResidents: 1234,
    activeUnits: 892,
    monthlyRevenue: 45678,
    pendingIssues: 23
  });
  const [activities, setActivities] = useState([]);
  const [systemHealth, setSystemHealth] = useState({
    database: 'operational',
    api: 'operational',
    storage: 'operational',
    backup: 'operational'
  });

  const colorPalettes = {
    primary: {
      light: '#02394A',
      medium: '#142C52',
      dark: '#070D15'
    },
    skyBlue: {
      light: '#E0F7FA',
      medium: '#1B9AAA',
      dark: '#147783'
    },
    darkBlack: {
      light: '#C9D0DA',
      medium: '#4A5563',
      dark: '#070D15'
    },
    darkBlue: {
      light: '#D4DBE9',
      medium: '#5B74A3',
      dark: '#142C52'
    },
    tealNavy: {
      light: '#CCE7EC',
      medium: '#4C97A8',
      dark: '#02394A'
    }
  };

  const summaryStats = [
    {
      title: 'Total Residents',
      value: realTimeData.totalUsers.toLocaleString(),
      change: '+12%',
      icon: Users,
      color: colorPalettes.primary,
      trend: 'up'
    },
    {
      title: 'Active Units',
      value: realTimeData.activeUnits.toLocaleString(),
      change: '+5%',
      icon: Building,
      color: colorPalettes.skyBlue,
      trend: 'up'
    },
    {
      title: 'Monthly Revenue',
      value: `$${(realTimeData.totalRevenue / 1000).toFixed(1)}K`,
      change: '+8%',
      icon: DollarSign,
      color: colorPalettes.darkBlue,
      trend: 'up'
    },
    {
      title: 'Pending Issues',
      value: realTimeData.pendingTasks.toLocaleString(),
      change: '-15%',
      icon: AlertCircle,
      color: colorPalettes.darkBlack,
      trend: 'down'
    }
  ];

  const [chartData, setChartData] = useState({
    revenue: [
      { label: 'Mon', revenue: 6500, target: 7000 },
      { label: 'Tue', revenue: 5800, target: 6500 },
      { label: 'Wed', revenue: 7200, target: 6800 },
      { label: 'Thu', revenue: 6100, target: 7200 },
      { label: 'Fri', revenue: 8200, target: 7500 },
      { label: 'Sat', revenue: 7500, target: 8000 },
      { label: 'Sun', revenue: 6800, target: 7500 }
    ],
    weekly: [
      { label: 'Week 1', revenue: 45000, target: 50000 },
      { label: 'Week 2', revenue: 38000, target: 45000 },
      { label: 'Week 3', revenue: 52000, target: 48000 },
      { label: 'Week 4', revenue: 41000, target: 52000 }
    ],
    monthly: [
      { month: 'Jan', revenue: 120000, target: 90000 },
      { month: 'Feb', revenue: 95000, target: 100000 },
      { month: 'Mar', revenue: 135000, target: 110000 },
      { month: 'Apr', revenue: 115000, target: 120000 },
      { month: 'May', revenue: 165000, target: 130000 },
      { month: 'Jun', revenue: 145000, target: 140000 }
    ],
    yearly: [
      { year: '2020', revenue: 450000, target: 500000 },
      { year: '2021', revenue: 520000, target: 600000 },
      { year: '2022', revenue: 480000, target: 700000 },
      { year: '2023', revenue: 580000, target: 800000 },
      { year: '2024', revenue: 550000, target: 900000 }
    ],
    occupancy: [
      { block: 'A', occupied: 42, total: 48, color: '#1B9AAA' },
      { block: 'B', occupied: 38, total: 48, color: '#178740' },
      { block: 'C', occupied: 45, total: 48, color: '#5B74A3' },
      { block: 'D', occupied: 31, total: 48, color: '#142C52' }
    ],
    activities: [
      { id: 1, type: 'visitor', message: 'New visitor registration: John Smith', time: '2 mins ago', icon: Users, color: '#1B9AAA' },
      { id: 2, type: 'payment', message: 'Payment received for Unit A-101', time: '15 mins ago', icon: CreditCard, color: '#178740' },
      { id: 4, type: 'complaint', message: 'New complaint: Water leakage in C-302', time: '2 hours ago', icon: FileText, color: '#142C52' },
      { id: 5, type: 'system', message: 'Monthly report generated', time: '3 hours ago', icon: FileText, color: '#02394A' }
    ]
  });

  const chartDatasets = {
    daily: [
      { label: 'Mon', revenue: 6500, target: 7000 },
      { label: 'Tue', revenue: 5800, target: 6500 },
      { label: 'Wed', revenue: 7200, target: 6800 },
      { label: 'Thu', revenue: 6100, target: 7200 },
      { label: 'Fri', revenue: 8200, target: 7500 },
      { label: 'Sat', revenue: 7500, target: 8000 },
      { label: 'Sun', revenue: 6800, target: 7500 }
    ],
    weekly: [
      { label: 'Week 1', revenue: 45000, target: 50000 },
      { label: 'Week 2', revenue: 38000, target: 45000 },
      { label: 'Week 3', revenue: 52000, target: 48000 },
      { label: 'Week 4', revenue: 41000, target: 52000 }
    ],
    monthly: [
      { month: 'Jan', revenue: 120000, target: 90000 },
      { month: 'Feb', revenue: 95000, target: 100000 },
      { month: 'Mar', revenue: 135000, target: 110000 },
      { month: 'Apr', revenue: 115000, target: 120000 },
      { month: 'May', revenue: 165000, target: 130000 },
      { month: 'Jun', revenue: 145000, target: 140000 }
    ],
    yearly: [
      { year: '2020', revenue: 450000, target: 500000 },
      { year: '2021', revenue: 520000, target: 600000 },
      { year: '2022', revenue: 480000, target: 700000 },
      { year: '2023', revenue: 580000, target: 800000 },
      { year: '2024', revenue: 550000, target: 900000 }
    ]
  };

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/communication/notifications');
      const result = await response.json();
      
      if (result.success) {
        setNotifications(result.data.notifications || [
          {
            id: 1,
            title: 'System Update',
            message: 'System has been updated successfully',
            time: '10 minutes ago',
            read: false,
            type: 'success'
          },
          {
            id: 2,
            title: 'New Visitor',
            message: 'Guest registered for Unit B-205',
            time: '30 minutes ago',
            read: false,
            type: 'info'
          },
          {
            id: 3,
            title: 'Payment Reminder',
            message: 'Monthly service fee due in 3 days',
            time: '1 hour ago',
            read: true,
            type: 'warning'
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const fetchActivities = async () => {
    try {
      const [visitorRes, financeRes] = await Promise.all([
        fetch('/api/visitors?limit=5'),
        fetch('/api/finance/transactions?limit=5')
      ]);

      const visitorData = await visitorRes.json();
      const financeData = await financeRes.json();

      const activities = [];
      
      if (visitorData.success) {
        visitorData.data.visitors.forEach(visitor => {
          activities.push({
            id: `visitor-${visitor.id}`,
            type: 'visitor',
            title: `${visitor.name} - ${visitor.purpose}`,
            description: `Unit ${visitor.unitNumber}`,
            time: new Date(visitor.checkIn).toLocaleString(),
            priority: 'medium'
          });
        });
      }

      if (financeData.success) {
        financeData.data.transactions.forEach(transaction => {
          activities.push({
            id: `payment-${transaction.id}`,
            type: 'payment',
            title: `${transaction.type} - ${transaction.description}`,
            description: `$${transaction.amount}`,
            time: new Date(transaction.date).toLocaleString(),
            priority: 'low'
          });
        });
      }

      activities.sort((a, b) => new Date(b.time) - new Date(a.time));
      setActivities(activities.slice(0, 10));
    } catch (error) {
      console.error('Error fetching activities:', error);
      setActivities([
        {
          id: 1,
          type: 'system',
          title: 'System Update',
          description: 'Scheduled for tomorrow',
          time: '2 hours ago',
          priority: 'high'
        },
        {
          id: 2,
          type: 'visitor',
          title: 'Guest Registration',
          description: 'John Smith - Unit B-205',
          time: '3 hours ago',
          priority: 'medium'
        },
        {
          id: 3,
          type: 'payment',
          title: 'Service Fee',
          description: 'Received from Unit C-101',
          time: '5 hours ago',
          priority: 'low'
        }
      ]);
    }
  };

  const handleQuickAction = async (actionId) => {
    try {
      setIsLoading(true);
      
      switch(actionId) {
        case 1: // Add Visitor
          const visitorData = {
            name: prompt('Enter visitor name:') || 'Guest User',
            purpose: prompt('Enter visit purpose:') || 'Personal Visit',
            unitNumber: prompt('Enter unit number:') || 'A-101',
            checkIn: new Date().toISOString(),
            status: 'active'
          };
          
          const response = await fetch('/api/visitors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(visitorData)
          });
          
          if (response.ok) {
            alert('Visitor registered successfully!');
            await fetchRealTimeData();
          } else {
            alert('Failed to register visitor');
          }
          break;
          
        case 2: // Report Issue
          const issueData = {
            title: prompt('Enter issue title:') || 'General Issue',
            description: prompt('Enter description:') || 'Issue description',
            priority: prompt('Enter priority (high/medium/low):') || 'medium',
            category: prompt('Enter category:') || 'general',
            status: 'pending',
            createdAt: new Date().toISOString()
          };
          
          const issueResponse = await fetch('/api/administration/issues', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(issueData)
          });
          
          if (issueResponse.ok) {
            alert('Issue reported successfully!');
            await fetchRealTimeData();
          } else {
            alert('Failed to report issue');
          }
          break;
          
        case 3: // Check Notifications
          await fetchNotifications();
          alert('Notifications checked!');
          break;
          
        case 4: // Report Now
          const reportType = prompt('Select report type (finance/visitors/administration):') || 'finance';
          const reportData = {
            type: reportType,
            dateRange: selectedTimeRange,
            filters: filters,
            generatedAt: new Date().toISOString()
          };
          
          const reportResponse = await fetch('/api/administration/reports', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reportData)
          });
          
          if (reportResponse.ok) {
            const result = await reportResponse.json();
            alert(`Report generated: ${result.message}`);
          } else {
            alert('Failed to generate report');
          }
          break;
          
        default:
          console.log('Unknown action:', actionId);
      }
    } catch (error) {
      console.error('Error in quick action:', error);
      alert('Action failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      setIsLoading(true);
      
      const exportData = {
        timestamp: new Date().toISOString(),
        timeRange: selectedTimeRange,
        filters: filters,
        dashboardStats: realTimeData,
        activities: activities,
        notifications: notifications,
        systemHealth: systemHealth
      };

      const response = await fetch('/api/administration/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exportData)
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dashboard-export-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        alert('Dashboard data exported successfully!');
      } else {
        const csvContent = generateCSV(exportData);
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dashboard-export-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        alert('Dashboard data exported as CSV!');
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateCSV = (data) => {
    const headers = ['Metric', 'Value', 'Change', 'Last Updated'];
    const rows = [
      ['Total Users', data.dashboardStats.totalUsers, '+12%', new Date().toLocaleString()],
      ['Active Units', data.dashboardStats.activeUnits, '+5%', new Date().toLocaleString()],
      ['Monthly Revenue', `$${data.dashboardStats.totalRevenue}`, '+8%', new Date().toLocaleString()],
      ['Pending Tasks', data.dashboardStats.pendingTasks, '-15%', new Date().toLocaleString()],
      ['Server Load', `${data.dashboardStats.serverLoad}%`, 'Stable', new Date().toLocaleString()]
    ];
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
    
    return csvContent;
  };

  const [quickActions] = useState([
    { id: 1, title: 'Add Visitor', icon: Users, color: '#1B9AAA', bgColor: '#E0F7FA' },
    { id: 2, title: 'Report Issue', icon: FileText, color: '#178740', bgColor: '#E0F7FA' },
    { id: 3, title: 'Check Notifications', icon: Bell, color: '#142C52', bgColor: '#E0F7FA' },
    { id: 4, title: 'Report Now', icon: Megaphone, color: '#02394A', bgColor: '#E0F7FA' }
  ]);

  
  useEffect(() => {
    fetchDashboardData();
    fetchNotifications();
    fetchActivities();
    fetchRealTimeData();
    
    const realTimeInterval = setInterval(fetchRealTimeData, 10000);
    const notificationInterval = setInterval(fetchNotifications, 30000);
    const activityInterval = setInterval(fetchActivities, 60000);
    
    return () => {
      clearInterval(realTimeInterval);
      clearInterval(notificationInterval);
      clearInterval(activityInterval);
    };
  }, []);


  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/administration/dashboard');
      const result = await response.json();
      
      if (result.success) {
        setDashboardStats({
          totalResidents: result.data.metrics.totalUsers || 1234,
          activeUnits: result.data.metrics.activeUnits || 892,
          monthlyRevenue: result.data.metrics.monthlyRevenue || 45678,
          pendingIssues: result.data.metrics.pendingIssues || 23
        });
        setSystemHealth(result.data.systemHealth);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      await fetchDashboardData();
      await fetchNotifications();
      await fetchActivities();
      await fetchRealTimeData();
      
      setRealTimeData(prev => ({
        ...prev,
        lastUpdated: new Date()
      }));
    } catch (error) {
      console.error('Error refreshing dashboard:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearFilters = () => {
    setFilters({
      block: 'all',
      status: 'all',
      priority: 'all',
      dateRange: 'all'
    });
    setFilteredData(null);
  };

  const currentDisplayData = filteredData || realTimeData || {
    totalUsers: 1247,
    activeUnits: 156,
    totalRevenue: 2847500,
    pendingTasks: 23
  };

  const fetchRealTimeData = async () => {
    try {
      const [healthRes, authRes, visitorsRes, financeRes, communicationRes] = await Promise.all([
        fetch('/api/health'),
        fetch('/api/auth/users'),
        fetch('/api/visitors'),
        fetch('/api/finance/transactions'),
        fetch('/api/communication/announcements')
      ]);

      const healthData = await healthRes.json();
      const authData = await authRes.json();
      const visitorsData = await visitorsRes.json();
      const financeData = await financeRes.json();
      const communicationData = await communicationRes.json();

      setRealTimeData(prev => ({
        ...prev,
        totalUsers: authData.success ? authData.data.users.length : prev.totalUsers,
        activeUnits: authData.success ? authData.data.users.filter(u => u.status === 'Active').length : prev.activeUnits,
        totalRevenue: financeData.success ? financeData.data.transactions.reduce((sum, t) => sum + t.amount, 0) : prev.totalRevenue,
        pendingTasks: 0,
        newVisitors: visitorsData.success ? visitorsData.data.visitors.filter(v => {
          const today = new Date();
          const visitDate = new Date(v.checkIn);
          return visitDate.toDateString() === today.toDateString();
        }).length : prev.newVisitors,
        recentPayments: financeData.success ? financeData.data.transactions.filter(t => {
          const today = new Date();
          const paymentDate = new Date(t.date);
          return paymentDate.toDateString() === today.toDateString();
        }).length : prev.recentPayments,
        serverLoad: healthData.success ? Math.floor(Math.random() * 30 + 10) : prev.serverLoad,
        lastUpdated: new Date()
      }));
    } catch (error) {
      console.error('Error fetching real-time data:', error);
    }
  };

  const handleChartTimePeriodChange = (period) => {
    setChartTimePeriod(period);
    setChartData(prev => ({
      ...prev,
      revenue: chartDatasets[period]
    }));
  };

  const getChartLabel = (data) => {
    return data.month || data.label || data.year || 'Unknown';
  };

  const getMaxRevenue = (data) => {
    return Math.max(...data.map(d => d.revenue), ...data.map(d => d.target));
  };

  const getMinRevenue = (data) => {
    return Math.min(...data.map(d => d.revenue), ...data.map(d => d.target));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getMetricIcon = (metric) => {
    switch (metric) {
      case 'users': return Users;
      case 'units': return Building;
      case 'revenue': return DollarSign;
      case 'tasks': return Clock;
      default: return Activity;
    }
  };

  const getMetricColor = (metric) => {
    switch (metric) {
      case 'users': return '#1B9AAA';
      case 'units': return '#178740';
      case 'revenue': return '#5B74A3';
      case 'tasks': return '#142C52';
      default: return '#4C97A8';
    }
  };

  return (
    <div className="min-h-screen p-6" style={{
      backgroundColor: '#E0F7FA',
      backgroundImage: `
        linear-gradient(rgba(224, 247, 250, 0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(224, 247, 250, 0.8) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      backgroundPosition: '0 0, 0 0',
      borderRadius: '2rem',
      overflow: 'hidden',
      width: '110%',
      marginLeft: '-4rem',
      paddingLeft: '2rem',
      marginRight: '-3rem',
      paddingRight: '2rem'
    }}>
      <div className="max-w-full mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8" style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          width: '100%'
        }}>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img 
              src={isDarkMode ? "/image.png" : "/short_logo.png"} 
              alt="PriHub Logo" 
              className="h-12 w-auto mr-3 transition-all duration-300"
            />
            <div>
              <h1 className="text-3xl font-bold" style={{color: colorPalettes.primary.dark}} mb-2="true">PriHub Dashboard</h1>
              <p style={{color: colorPalettes.darkBlack.medium}}>Real-time overview of your society management system</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{color: colorPalettes.darkBlack.medium}} />
              <input
                type="text"
                placeholder="Search dashboard..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-white border-2"
                style={{borderColor: colorPalettes.skyBlue.medium, focusRingColor: colorPalettes.skyBlue.light}}
              />
            </div>
            
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-white border-2"
              style={{borderColor: colorPalettes.skyBlue.medium, focusRingColor: colorPalettes.skyBlue.light, color: colorPalettes.primary.light}}
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 text-white border-2 hover:bg-[#1B9AAA] hover:text-white"
              style={{backgroundColor: colorPalettes.skyBlue.medium}}
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>

            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 text-white disabled:opacity-50 border-2 hover:bg-[#1B9AAA] hover:text-white"
              style={{backgroundColor: colorPalettes.tealNavy.medium}}
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button 
              onClick={handleExport}
              disabled={isLoading}
              className="px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 text-white disabled:opacity-50 border-2 hover:bg-[#1B9AAA] hover:text-white" 
              style={{backgroundColor: colorPalettes.darkBlue.medium}}
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="rounded-lg shadow-md p-4 mb-6 border" style={{backgroundColor: 'white', borderColor: colorPalettes.skyBlue.medium}}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: colorPalettes.primary.light}}>Block</label>
                <select 
                  value={filters.block}
                  onChange={(e) => setFilters(prev => ({...prev, block: e.target.value}))}
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 bg-white border-2" 
                  style={{borderColor: colorPalettes.skyBlue.medium, focusRingColor: colorPalettes.skyBlue.light}}
                >
                  <option value="all">All Blocks</option>
                  <option value="A">Block A</option>
                  <option value="B">Block B</option>
                  <option value="C">Block C</option>
                  <option value="D">Block D</option>
                  <option value="E">Block E</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: colorPalettes.primary.light}}>Status</label>
                <select 
                  value={filters.status}
                  onChange={(e) => setFilters(prev => ({...prev, status: e.target.value}))}
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 bg-white border-2" 
                  style={{borderColor: colorPalettes.skyBlue.medium, focusRingColor: colorPalettes.skyBlue.light}}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: colorPalettes.primary.light}}>Priority</label>
                <select 
                  value={filters.priority}
                  onChange={(e) => setFilters(prev => ({...prev, priority: e.target.value}))}
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 bg-white border-2" 
                  style={{borderColor: colorPalettes.skyBlue.medium, focusRingColor: colorPalettes.skyBlue.light}}
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: colorPalettes.primary.light}}>Date Range</label>
                <select 
                  value={filters.dateRange}
                  onChange={(e) => setFilters(prev => ({...prev, dateRange: e.target.value}))}
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 bg-white border-2" 
                  style={{borderColor: colorPalettes.skyBlue.medium, focusRingColor: colorPalettes.skyBlue.light}}
                >
                  <option value="all">All Time</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={clearFilters}
                className="px-4 py-2 rounded-lg transition-colors text-white"
                style={{backgroundColor: colorPalettes.darkBlack.medium}}
              >
                Clear Filters
              </button>
              <button
                onClick={applyFilters}
                disabled={isLoading}
                className="px-4 py-2 rounded-lg transition-colors text-white disabled:opacity-50"
                style={{backgroundColor: colorPalettes.skyBlue.medium}}
              >
                {isLoading ? 'Applying...' : 'Apply Filters'}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" style={{backgroundColor: 'white', borderLeft: `4px solid ${colorPalettes.skyBlue.medium}`}}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{color: colorPalettes.tealNavy.dark}}>Total Users</p>
              <p className="text-2xl font-bold" style={{color: colorPalettes.tealNavy.dark}}>{currentDisplayData.totalUsers.toLocaleString()}</p>
              <p className="text-sm flex items-center mt-2" style={{color: '#178740'}}>
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </div>
            <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{backgroundColor: colorPalettes.tealNavy.light, color: colorPalettes.skyBlue.medium}}>
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" style={{backgroundColor: 'white', borderLeft: `4px solid ${colorPalettes.tealNavy.medium}`}}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{color: colorPalettes.tealNavy.dark}}>Active Units</p>
              <p className="text-2xl font-bold" style={{color: colorPalettes.tealNavy.dark}}>{currentDisplayData.activeUnits}</p>
              <p className="text-sm flex items-center mt-2" style={{color: '#EF4444'}}>
                <ChevronDown className="h-3 w-3 mr-1" />
                -5% from last month
              </p>
            </div>
            <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{backgroundColor: colorPalettes.tealNavy.light, color: colorPalettes.tealNavy.medium}}>
              <Building className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" style={{backgroundColor: 'white', borderLeft: `4px solid ${colorPalettes.darkBlue.medium}`}}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{color: colorPalettes.tealNavy.dark}}>Total Revenue</p>
              <p className="text-2xl font-bold" style={{color: colorPalettes.tealNavy.dark}}>{formatCurrency(currentDisplayData.totalRevenue)}</p>
              <p className="text-sm flex items-center mt-2" style={{color: '#178740'}}>
                <TrendingUp className="h-3 w-3 mr-1" />
                +18% from last month
              </p>
            </div>
            <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{backgroundColor: colorPalettes.tealNavy.light, color: colorPalettes.darkBlue.medium}}>
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" style={{backgroundColor: 'white', borderLeft: `4px solid ${colorPalettes.primary.medium}`}}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{color: colorPalettes.tealNavy.dark}}>Pending Tasks</p>
              <p className="text-2xl font-bold" style={{color: colorPalettes.tealNavy.dark}}>{currentDisplayData.pendingTasks}</p>
              <p className="text-sm flex items-center mt-2" style={{color: '#EF4444'}}>
                <ChevronDown className="h-3 w-3 mr-1" />
                -8% from last month
              </p>
            </div>
            <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{backgroundColor: colorPalettes.tealNavy.light, color: colorPalettes.primary.medium}}>
              <Clock className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="rounded-lg shadow-md p-6 bg-white">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold" style={{color: '#02394A'}}>Revenue Overview</h3>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" style={{color: '#4C97A8'}} />
              <select 
                value={chartTimePeriod}
                onChange={(e) => handleChartTimePeriodChange(e.target.value)}
                className="text-sm rounded px-3 py-1 border border-[#E0F7FA] focus:outline-none focus:ring-2 focus:ring-[#1B9AAA]"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>
          
          <div className="h-64 flex items-end justify-between space-x-3 px-4">
            {chartData.revenue.map((data, index) => {
              const mixedColors = [
                { from: '#1B9AAA', to: '#147783', hover: '#0C4A50' },
                { from: '#178740', to: '#0F4C2A', hover: '#0A3420' },
                { from: '#5B74A3', to: '#415A8A', hover: '#364A75' },
                { from: '#142C52', to: '#0E2140', hover: '#071426' },
                { from: '#4C97A8', to: '#02394A', hover: '#01181F' },
                { from: '#76D6E1', to: '#4C97A8', hover: '#1B9AAA' }
              ];
              const colorScheme = mixedColors[index % mixedColors.length];
              
              const maxRevenue = Math.max(...chartData.revenue.map(d => d.revenue));
              const minRevenue = Math.min(...chartData.revenue.map(d => d.revenue));
              const revenueRange = maxRevenue - minRevenue;
              
              const normalizedValue = revenueRange > 0 ? (data.revenue - minRevenue) / revenueRange : 0;
              const barHeight = normalizedValue * 165 + 15;
              
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full">
                    <div 
                      className="w-full rounded-t-lg transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to top, ${colorScheme.from}, ${colorScheme.to})`,
                        height: `${barHeight}px`
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `linear-gradient(to top, ${colorScheme.hover}, ${colorScheme.to})`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = `linear-gradient(to top, ${colorScheme.from}, ${colorScheme.to})`;
                      }}
                    ></div>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-xs font-medium" style={{color: '#4A5563'}}>{getChartLabel(data)}</p>
                    <p className="text-sm font-bold" style={{color: '#02394A'}}>{formatCurrency(data.revenue)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 pt-4 border-t border-[#E0F7FA]">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xs" style={{color: '#4A5563'}}>Total Revenue</p>
                <p className="text-lg font-bold" style={{color: '#02394A'}}>
                  {formatCurrency(chartData.revenue.reduce((sum, item) => sum + item.revenue, 0))}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs" style={{color: '#4A5563'}}>Average</p>
                <p className="text-lg font-bold" style={{color: '#02394A'}}>
                  {formatCurrency(Math.round(chartData.revenue.reduce((sum, item) => sum + item.revenue, 0) / chartData.revenue.length))}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs" style={{color: '#4A5563'}}>Growth</p>
                <p className="text-lg font-bold" style={{color: '#178740'}}>+12.5%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-6" style={{backgroundColor: 'white'}}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold" style={{color: colorPalettes.primary.light}}>Unit Occupancy</h3>
            <div className="flex items-center space-x-2">
              <PieChart className="h-5 w-5" style={{color: colorPalettes.tealNavy.medium}} />
              <span className="text-sm" style={{color: colorPalettes.darkBlack.medium}}>Overall: {realTimeData.occupancy}%</span>
            </div>
          </div>
          <div className="space-y-3">
            {chartData.occupancy.map((block, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium" style={{color: colorPalettes.primary.light}}>Block {block.block}</span>
                    <span style={{color: colorPalettes.darkBlack.medium}}>{block.occupied}/{block.total}</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{backgroundColor: '#E5E7EB'}}>
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(block.occupied / block.total) * 100}%`,
                        backgroundColor: block.color
                      }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-medium" style={{color: colorPalettes.primary.light}}>
                  {Math.round((block.occupied / block.total) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-[#02394A] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleQuickAction(action.id)}
                className="p-4 rounded-lg border border-[#E0F7FA] hover:shadow-md transition-all hover:scale-105 flex flex-col items-center space-y-2 min-h-[120px]"
                style={{ backgroundColor: action.bgColor }}
              >
                <div className="h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-[#02394A] text-center">{action.title}</span>
              </button>
            ))}
          </div>
        </div>

        {}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#02394A]">Recent Activities</h3>
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-[#4C97A8]" />
              <button className="text-sm text-[#1B9AAA] hover:text-[#147783]">View All</button>
            </div>
          </div>
          <div className="space-y-3">
            {chartData.activities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#E0F7FA] transition-colors">
                <div className="p-2 rounded-full" style={{backgroundColor: '#CCE7EC', color: activity.color}}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#02394A]">{activity.message}</p>
                  <p className="text-xs text-[#4A5563]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-[#02394A] mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-24 w-24 rounded-full border-8 border-[#E0F7FA]"></div>
              <div className="absolute h-24 w-24 rounded-full border-8 border-[#1B9AAA] border-t-transparent border-r-transparent transform rotate-45"></div>
              <div className="absolute text-lg font-bold text-[#02394A]">{realTimeData.occupancy}%</div>
            </div>
            <p className="text-sm font-medium text-[#1B9AAA] mt-2">Occupancy Rate</p>
          </div>
          
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-24 w-24 rounded-full border-8 border-[#E0F7FA]"></div>
              <div className="absolute h-24 w-24 rounded-full border-8 border-[#178740] border-t-transparent border-r-transparent transform rotate-45"></div>
              <div className="absolute text-lg font-bold text-[#02394A]">{realTimeData.satisfaction}%</div>
            </div>
            <p className="text-sm font-medium text-[#178740] mt-2">Satisfaction Score</p>
          </div>
          
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center">
              <div className="h-24 w-24 rounded-full border-8 border-[#E0F7FA]"></div>
              <div className="absolute h-24 w-24 rounded-full border-8 border-[#5B74A3] border-t-transparent border-r-transparent transform rotate-45"></div>
              <div className="absolute text-lg font-bold text-[#02394A]">92%</div>
            </div>
            <p className="text-sm font-medium text-[#5B74A3] mt-2">Efficiency Rate</p>
          </div>
        </div>
      </div>

      {}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#02394A]">Monthly Statistics</h3>
            <Calendar className="h-5 w-5 text-[#4C97A8]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#E0F7FA] rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-[#1B9AAA] flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#02394A]">New Registrations</p>
                  <p className="text-xs text-[#4A5563]">This month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[#1B9AAA]">47</p>
                <p className="text-xs text-[#22C55E]">+12%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-[#E0F7FA] rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-[#178740] flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#02394A]">Revenue Collected</p>
                  <p className="text-xs text-[#4A5563]">This month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[#178740]">$284K</p>
                <p className="text-xs text-[#22C55E]">+18%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-[#E0F7FA] rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-[#5B74A3] flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#02394A]">System Tasks</p>
                  <p className="text-xs text-[#4A5563]">Completed</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[#5B74A3]">23</p>
                <p className="text-xs text-[#22C55E]">+8%</p>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#02394A]">Activity Timeline</h3>
            <Activity className="h-5 w-5 text-[#4C97A8]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-[#1B9AAA] flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#02394A]">New User Registration</p>
                  <span className="text-xs text-[#4A5563]">2 mins ago</span>
                </div>
                <p className="text-xs text-[#4A5563] mt-1">John Smith registered for Block A</p>
                <div className="mt-2 h-1 bg-[#E0F7FA] rounded"></div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-[#178740] flex items-center justify-center flex-shrink-0 mt-1">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#02394A]">Payment Received</p>
                  <span className="text-xs text-[#4A5563]">15 mins ago</span>
                </div>
                <p className="text-xs text-[#4A5563] mt-1">Monthly dues paid for Unit B-305</p>
                <div className="mt-2 h-1 bg-[#E0F7FA] rounded"></div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0 mt-1">
                <AlertCircle className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#02394A]">System Alert</p>
                  <span className="text-xs text-[#4A5563]">1 hour ago</span>
                </div>
                <p className="text-xs text-[#4A5563] mt-1">System update completed in Block C</p>
                <div className="mt-2 h-1 bg-[#E0F7FA] rounded"></div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-[#5B74A3] flex items-center justify-center flex-shrink-0 mt-1">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#02394A]">Report Generated</p>
                  <span className="text-xs text-[#4A5563]">3 hours ago</span>
                </div>
                <p className="text-xs text-[#4A5563] mt-1">Monthly financial report completed</p>
                <div className="mt-2 h-1 bg-[#E0F7FA] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-[#02394A]">Top Performers</h3>
          <Target className="h-5 w-5 text-[#4C97A8]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-[#E0F7FA] rounded-lg">
            <div className="h-12 w-12 rounded-full bg-[#1B9AAA] flex items-center justify-center mx-auto mb-2">
              <Users className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg font-bold text-[#02394A]">Block A</p>
            <p className="text-sm text-[#22C55E]">95% Occupancy</p>
            <div className="mt-2 flex justify-center">
              {[1,2,3,4,5].map((star) => (
                <div key={star} className="h-4 w-4 bg-[#1B9AAA] rounded-full mx-0.5"></div>
              ))}
            </div>
          </div>
          
          <div className="text-center p-4 bg-[#E0F7FA] rounded-lg">
            <div className="h-12 w-12 rounded-full bg-[#178740] flex items-center justify-center mx-auto mb-2">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg font-bold text-[#02394A]">Block B</p>
            <p className="text-sm text-[#22C55E]">92% Revenue</p>
            <div className="mt-2 flex justify-center">
              {[1,2,3,4,5].map((star) => (
                <div key={star} className="h-4 w-4 bg-[#178740] rounded-full mx-0.5"></div>
              ))}
            </div>
          </div>
          
          <div className="text-center p-4 bg-[#E0F7FA] rounded-lg">
            <div className="h-12 w-12 rounded-full bg-[#5B74A3] flex items-center justify-center mx-auto mb-2">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg font-bold text-[#02394A]">Block C</p>
            <p className="text-sm text-[#22C55E]">98% Safety</p>
            <div className="mt-2 flex justify-center">
              {[1,2,3,4,5].map((star) => (
                <div key={star} className="h-4 w-4 bg-[#5B74A3] rounded-full mx-0.5"></div>
              ))}
            </div>
          </div>
          
          <div className="text-center p-4 bg-[#E0F7FA] rounded-lg">
            <div className="h-12 w-12 rounded-full bg-[#142C52] flex items-center justify-center mx-auto mb-2">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg font-bold text-[#02394A]">Block D</p>
            <p className="text-sm text-[#22C55E]">90% Efficiency</p>
            <div className="mt-2 flex justify-center">
              {[1,2,3,4,5].map((star) => (
                <div key={star} className="h-4 w-4 bg-[#142C52] rounded-full mx-0.5"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="h-8 w-8 rounded-full bg-[#1B9AAA] flex items-center justify-center mx-auto mb-2">
            <Users className="h-4 w-4 text-white" />
          </div>
          <p className="text-2xl font-bold text-[#02394A]">1,247</p>
          <p className="text-xs text-[#4A5563]">Total Users</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="h-8 w-8 rounded-full bg-[#178740] flex items-center justify-center mx-auto mb-2">
            <Building className="h-4 w-4 text-white" />
          </div>
          <p className="text-2xl font-bold text-[#02394A]">892</p>
          <p className="text-xs text-[#4A5563]">Active Units</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="h-8 w-8 rounded-full bg-[#5B74A3] flex items-center justify-center mx-auto mb-2">
            <DollarSign className="h-4 w-4 text-white" />
          </div>
          <p className="text-2xl font-bold text-[#02394A]">$2.8M</p>
          <p className="text-xs text-[#4A5563]">Revenue</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="h-8 w-8 rounded-full bg-[#142C52] flex items-center justify-center mx-auto mb-2">
            <Clock className="h-4 w-4 text-white" />
          </div>
          <p className="text-2xl font-bold text-[#02394A]">23</p>
          <p className="text-xs text-[#4A5563]">Pending</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="h-8 w-8 rounded-full bg-[#EF4444] flex items-center justify-center mx-auto mb-2">
            <AlertCircle className="h-4 w-4 text-white" />
          </div>
          <p className="text-2xl font-bold text-[#02394A]">5</p>
          <p className="text-xs text-[#4A5563]">Alerts</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="h-8 w-8 rounded-full bg-[#22C55E] flex items-center justify-center mx-auto mb-2">
            <TrendingUp className="h-4 w-4 text-white" />
          </div>
          <p className="text-2xl font-bold text-[#02394A]">94%</p>
          <p className="text-xs text-[#4A5563]">Growth</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
