import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  Brain, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  User,
  LogOut,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: Users, label: 'Residents', path: '/residents' },
    { icon: Calendar, label: 'Therapy', path: '/therapy' },
    { icon: FileText, label: 'Care Plans', path: '/care-plans' },
    { icon: Brain, label: 'AI Assistant', path: '/ai-assistant' },
    { icon: Settings, label: 'Accessibility', path: '/accessibility' },
  ];

  const statsCards = [
    {
      title: 'Total Residents',
      value: '24',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Sessions',
      value: '8',
      change: '+5%',
      icon: Activity,
      color: 'bg-green-500'
    },
    {
      title: 'Therapy Sessions',
      value: '15',
      change: '+8%',
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      title: 'AI Assistances',
      value: '142',
      change: '+23%',
      icon: Zap,
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Completed cognitive therapy session with AI assistance',
      time: '2 hours ago',
      status: 'completed',
      aiScore: 95,
      cognitiveLoad: 'Low'
    },
    {
      id: 2,
      user: 'Sarah Smith',
      action: 'AI-assisted daily routine setup',
      time: '3 hours ago',
      status: 'ai-assisted',
      aiScore: 88,
      cognitiveLoad: 'Medium'
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'Updated personalized accessibility care plan',
      time: '5 hours ago',
      status: 'updated',
      aiScore: 92,
      cognitiveLoad: 'Low'
    },
    {
      id: 4,
      user: 'Emily Davis',
      action: 'Added new resident with autism support protocol',
      time: '1 day ago',
      status: 'added',
      aiScore: 90,
      cognitiveLoad: 'Medium'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      resident: 'John Doe',
      time: '10:00 AM',
      type: 'Cognitive Therapy',
      duration: '45 min'
    },
    {
      id: 2,
      resident: 'Sarah Smith',
      time: '11:30 AM',
      type: 'ADHD Support Group',
      duration: '60 min'
    },
    {
      id: 3,
      resident: 'Mike Johnson',
      time: '2:00 PM',
      type: 'Speech Therapy',
      duration: '30 min'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#1B9AAA] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">PriHub</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.active
                    ? 'bg-[#1B9AAA] text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {user?.name || 'User'}
              </p>
              <p className="text-xs text-gray-500">
                {user?.email || 'user@example.com'}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                >
                  <Menu className="h-5 w-5 text-gray-500" />
                </button>
                <h1 className="ml-4 lg:ml-0 text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                
                <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                  <Bell className="h-5 w-5" />
                </button>
                
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      <span className="text-sm font-medium text-green-500">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-[#1B9AAA] rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-xs">
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                      <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                        activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                        activity.status === 'ai-assisted' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {activity.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-3 border border-gray-200 rounded-lg hover:border-[#1B9AAA] transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-gray-900">{appointment.resident}</p>
                        <span className="text-xs text-gray-500">{appointment.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{appointment.type}</p>
                      <p className="text-xs text-gray-500">{appointment.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-[#1B9AAA] hover:bg-[#1B9AAA] hover:text-white transition-colors">
                <Users className="h-5 w-5 mr-2" />
                Add Resident
              </button>
              <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-[#1B9AAA] hover:bg-[#1B9AAA] hover:text-white transition-colors">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Therapy
              </button>
              <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-[#1B9AAA] hover:bg-[#1B9AAA] hover:text-white transition-colors">
                <FileText className="h-5 w-5 mr-2" />
                Create Care Plan
              </button>
              <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-[#1B9AAA] hover:bg-[#1B9AAA] hover:text-white transition-colors">
                <Brain className="h-5 w-5 mr-2" />
                AI Assistant
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
