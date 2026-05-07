import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, User, Settings, Bell, Search, Menu, X, TrendingUp, Users, Calendar, FileText, Heart, Brain, Shield, Zap, Globe, Award, Target, Activity, BarChart3, PieChart, Clock, Star, ChevronRight, ArrowRight, LogOut, HelpCircle, BookOpen, MessageSquare, Phone, Mail, MapPin, CheckCircle, AlertTriangle, Download, Upload, Filter, Search as SearchIcon, Eye, ThumbsUp, Share2, Bookmark, Play, Video, File, Folder, Database, Cpu, Wifi, Cloud, Lock, Globe2, MapPin2, Navigation, ChevronLeft, Plus, Edit, Trash2, RefreshCw, Filter as FilterIcon, MoreVertical, UserPlus, UserMinus, MailOpen, Send, Paperclip, Image, Smile, Calendar as CalendarIcon, Tag, Hash, Link as LinkIcon, Copy, ExternalLink, Clock as ClockIcon, AlertCircle, Info, CheckSquare, Square, Minus, PlusCircle, MinusCircle, ArrowUp, ArrowDown, ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, MoreHorizontal, MoreVertical as MoreVerticalIcon, Settings2, LogIn, LogOut as LogOutIcon, UserCheck, UserX, Heart as HeartIcon, MessageCircle, Share, Bookmark as BookmarkIcon, Download as DownloadIcon, Upload as UploadIcon, FileText as FileTextIcon, FolderOpen, Folder as FolderIcon, Database as DatabaseIcon, Server, HardDrive, Cloud as CloudIcon, Wifi as WifiIcon, Globe as GlobeIcon, Shield as ShieldIcon, Lock as LockIcon, Unlock, Key, Eye as EyeIcon, EyeOff, Volume2, VolumeX, Mic, MicOff, Video as VideoIcon, VideoOff, Phone as PhoneIcon, PhoneOff, Mail as MailIcon, Send as SendIcon, Paperclip as PaperclipIcon, Image as ImageIcon, Smile as SmileIcon, Frown, Meh, Laugh, Angry, Sad, Dizzy, Heart as HeartFilledIcon, Wrench, Printer, FileDown, Archive, Package, Save } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Logout function
  const handleLogout = async () => {
    try {
      // Clear Firebase authentication
      const { auth } = await import('../../firebase');
      if (auth) {
        await auth.signOut();
      }
      
      // Clear localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      localStorage.removeItem('joinDate');
      
      // Update authentication state
      setIsAuthenticated(false);
      setCurrentUser(null);
      
      // Update user data to guest
      setUserData(prev => ({
        ...prev,
        name: 'Guest User',
        email: 'guest@example.com',
        role: 'Guest',
        joinDate: 'Not logged in',
        lastLogin: 'Not logged in',
        profileCompletion: 0,
        photoURL: ''
      }));
      
      // Show notification
      if (window.showNotification) {
        window.showNotification('Logged out successfully', 'success');
      }
      
      // Navigate to login page
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Still update state even if Firebase logout fails
      setIsAuthenticated(false);
      setCurrentUser(null);
      navigate('/login');
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'achievement',
      title: 'Achievement Unlocked!',
      message: 'You completed your first cognitive assessment',
      time: '2 hours ago',
      read: false,
      icon: '🏆',
      color: 'text-yellow-600'
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Medication Reminder',
      message: 'Time for your daily medication',
      time: '3 hours ago',
      read: false,
      icon: '💊',
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'community',
      title: 'New Community Post',
      message: 'Sarah shared a helpful resource',
      time: '5 hours ago',
      read: true,
      icon: '👥',
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Therapy session tomorrow at 2 PM',
      time: '1 day ago',
      read: true,
      icon: '📅',
      color: 'text-purple-600'
    },
    {
      id: 5,
      type: 'system',
      title: 'Profile Updated',
      message: 'Your accessibility preferences have been saved',
      time: '2 days ago',
      read: true,
      icon: '⚙️',
      color: 'text-gray-600'
    }
  ]);
  const [messages, setMessages] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check authentication state on component mount
  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const { auth } = await import('../../firebase');
        const user = localStorage.getItem('user');
        
        if (auth && auth.currentUser) {
          // Firebase user is logged in
          setIsAuthenticated(true);
          setCurrentUser(auth.currentUser);
        } else if (user) {
          // User data exists in localStorage (backend auth)
          setIsAuthenticated(true);
          setCurrentUser(JSON.parse(user));
        } else {
          // No user found - guest user
          setIsAuthenticated(false);
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Auth state check error:', error);
        setIsAuthenticated(false);
        setCurrentUser(null);
      }
    };

    checkAuthState();

    // Listen for auth state changes
    const listenForAuthChanges = async () => {
      try {
        const { auth } = await import('../../firebase');
        if (auth) {
          const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
              setIsAuthenticated(true);
              setCurrentUser(user);
            } else {
              setIsAuthenticated(false);
              setCurrentUser(null);
            }
          });
          return unsubscribe;
        }
      } catch (error) {
        console.error('Auth listener error:', error);
      }
    };

    listenForAuthChanges();
  }, []);

  // Update userData when authentication state changes
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      console.log('🔄 Updating userData with Firebase user:', currentUser);
      setUserData(prev => ({
        ...prev,
        name: currentUser.displayName || currentUser.name || localStorage.getItem('userName') || 'User',
        email: currentUser.email || localStorage.getItem('userEmail') || 'user@example.com',
        role: localStorage.getItem('userRole') || 'User',
        joinDate: localStorage.getItem('joinDate') || new Date().toISOString().split('T')[0],
        lastLogin: new Date().toLocaleString(),
        profileCompletion: 85,
        photoURL: currentUser.photoURL || '',
        preferences: {
          language: localStorage.getItem('language') || 'English',
          theme: localStorage.getItem('theme') || 'light',
          notifications: localStorage.getItem('notifications') === 'true',
          emailAlerts: localStorage.getItem('emailAlerts') === 'true',
          profileVisibility: localStorage.getItem('profileVisibility') || 'Everyone',
          activityStatus: localStorage.getItem('activityStatus') === 'true'
        }
      }));
    } else {
      console.log('🔄 Resetting userData to guest state');
      setUserData(prev => ({
        ...prev,
        name: 'Guest User',
        email: 'guest@example.com',
        role: 'Guest',
        joinDate: 'Not logged in',
        lastLogin: 'Not logged in',
        profileCompletion: 0,
        photoURL: ''
      }));
    }
  }, [isAuthenticated, currentUser]);

  // Notification management functions
  const markNotificationAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getUnreadCount = () => {
    return notifications.filter(notif => !notif.read).length;
  };

  const addNotification = (newNotification) => {
    setNotifications(prev => [newNotification, ...prev]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileDropdown && !event.target.closest('.profile-dropdown')) {
        setShowProfileDropdown(false);
      }
      if (showNotifications && !event.target.closest('.notification-dropdown')) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileDropdown, showNotifications]);

  // Function to get initials from user name
  const getInitials = (name) => {
    if (!name) return 'U';
    
    const nameParts = name.trim().split(/\s+/);
    
    if (nameParts.length === 1) {
      // Single name - return first letter
      return nameParts[0].charAt(0).toUpperCase();
    } else if (nameParts.length === 2) {
      // First and last name - return first letter of each
      return (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase();
    } else {
      // More than 2 parts - return first and last
      return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
    }
  };

  // Search suggestions data
  const searchSuggestions = [
    { keyword: 'resources', description: 'Access learning materials and courses', icon: '📚' },
    { keyword: 'learning', description: 'Browse educational content', icon: '📖' },
    { keyword: 'activities', description: 'View your recent activities', icon: '🎯' },
    { keyword: 'progress', description: 'Track your learning progress', icon: '📊' },
    { keyword: 'community', description: 'Join community discussions', icon: '👥' },
    { keyword: 'forum', description: 'Participate in forums', icon: '💬' },
    { keyword: 'messages', description: 'Check your messages', icon: '✉️' },
    { keyword: 'chat', description: 'Start a conversation', icon: '💭' },
    { keyword: 'profile', description: 'Manage your profile', icon: '👤' },
    { keyword: 'account', description: 'Account settings', icon: '⚙️' },
    { keyword: 'settings', description: 'Configure preferences', icon: '🔧' },
    { keyword: 'help', description: 'Get help and support', icon: '❓' },
    { keyword: 'support', description: 'Contact support team', icon: '🆘' }
  ];

  // Filter suggestions based on search query
  const filteredSuggestions = searchSuggestions.filter(suggestion => 
    suggestion.keyword.toLowerCase().includes(searchQuery.toLowerCase()) &&
    searchQuery.length > 0
  );

  // Handle suggestion click
  const handleSuggestionClick = (keyword) => {
    setSearchQuery(keyword);
    setShowSuggestions(false);
    
    // Trigger search with selected keyword
    const sections = [];
    
    if (keyword.includes('resource') || keyword.includes('learning')) {
      sections.push('Resources');
    }
    if (keyword.includes('activity') || keyword.includes('progress')) {
      sections.push('Activities');
    }
    if (keyword.includes('community') || keyword.includes('forum')) {
      sections.push('Community');
    }
    if (keyword.includes('message') || keyword.includes('chat')) {
      sections.push('Messages');
    }
    if (keyword.includes('profile') || keyword.includes('account')) {
      sections.push('Profile');
    }
    if (keyword.includes('setting') || keyword.includes('config')) {
      sections.push('Settings');
    }
    if (keyword.includes('help') || keyword.includes('support')) {
      sections.push('Help');
    }

    if (sections.length > 0) {
      showNotification(`Navigating to: ${sections[0]}`, 'success');
      const sectionMap = {
        'Resources': 'resources',
        'Activities': 'activities',
        'Community': 'community',
        'Messages': 'messages',
        'Profile': 'profile',
        'Settings': 'settings',
        'Help': 'help'
      };
      
      if (sectionMap[sections[0]]) {
        setActiveSection(sectionMap[sections[0]]);
      }
    }
  };

  // Search functionality
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      showNotification('Please enter a search term', 'warning');
      return;
    }

    // Simulate search functionality
    const searchTerm = searchQuery.toLowerCase().trim();
    
    // Check if search term matches different sections
    const sections = [];
    
    if (searchTerm.includes('resource') || searchTerm.includes('learning')) {
      sections.push('Resources');
    }
    if (searchTerm.includes('activity') || searchTerm.includes('progress')) {
      sections.push('Activities');
    }
    if (searchTerm.includes('community') || searchTerm.includes('forum')) {
      sections.push('Community');
    }
    if (searchTerm.includes('message') || searchTerm.includes('chat')) {
      sections.push('Messages');
    }
    if (searchTerm.includes('profile') || searchTerm.includes('account')) {
      sections.push('Profile');
    }
    if (searchTerm.includes('setting') || searchTerm.includes('config')) {
      sections.push('Settings');
    }
    if (searchTerm.includes('help') || searchTerm.includes('support')) {
      sections.push('Help');
    }

    if (sections.length > 0) {
      showNotification(`Found results in: ${sections.join(', ')}`, 'success');
      // Navigate to first matching section
      const sectionMap = {
        'Resources': 'resources',
        'Activities': 'activities',
        'Community': 'community',
        'Messages': 'messages',
        'Profile': 'profile',
        'Settings': 'settings',
        'Help': 'help'
      };
      
      if (sectionMap[sections[0]]) {
        setActiveSection(sectionMap[sections[0]]);
      }
    } else {
      showNotification('No results found. Try searching for: resources, activities, community, messages, profile, settings, or help', 'info');
    }
  };
  
  // Real-time data states
  const [realTimeStats, setRealTimeStats] = useState({
    totalUsers: 2847,
    activeUsers: 892,
    totalResources: 156,
    communityPosts: 34,
    achievementPoints: 890,
    completedActivities: 24,
    onlineUsers: 127,
    newMessages: 3
  });
  
  const [userData, setUserData] = useState({
    name: isAuthenticated && currentUser ? 
      (currentUser.displayName || currentUser.name || localStorage.getItem('userName') || 'User') : 'Guest User',
    email: isAuthenticated && currentUser ? 
      (currentUser.email || localStorage.getItem('userEmail') || 'guest@example.com') : 'guest@example.com',
    role: isAuthenticated && currentUser ? 
      (localStorage.getItem('userRole') || 'User') : 'Guest',
    joinDate: isAuthenticated ? 
      (localStorage.getItem('joinDate') || new Date().toISOString().split('T')[0]) : 'Not logged in',
    lastLogin: isAuthenticated ? new Date().toLocaleString() : 'Not logged in',
    profileCompletion: isAuthenticated ? 85 : 0,
    photoURL: isAuthenticated && currentUser ? 
      (currentUser.photoURL || '') : '',
    preferences: {
      language: localStorage.getItem('language') || 'English',
      theme: localStorage.getItem('theme') || 'light',
      notifications: localStorage.getItem('notifications') === 'true',
      emailAlerts: localStorage.getItem('emailAlerts') === 'true',
      profileVisibility: localStorage.getItem('profileVisibility') || 'Everyone',
      activityStatus: localStorage.getItem('activityStatus') === 'true'
    }
  });
  
  // Messages state
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [messageInput, setMessageInput] = useState('');
  const [showComposeModal, setShowComposeModal] = useState(false);
  const [composeData, setComposeData] = useState({
    recipient: '',
    subject: '',
    message: ''
  });
  const [conversations, setConversations] = useState([
    { 
      id: 0, 
      name: 'Support Team', 
      message: 'How can we help you today?', 
      time: '2 hours ago', 
      unread: true, 
      avatar: 'S',
      messages: [
        { sender: 'support', text: 'Hello! How can we help you with your cognitive support journey today?', time: '2 hours ago' },
        { sender: 'user', text: "I'm looking for resources on memory improvement techniques", time: '1 hour ago' },
        { sender: 'support', text: 'Great! I can help you with that. We have several excellent resources on memory improvement. Would you like me to share some specific techniques and exercises?', time: '30 minutes ago' }
      ]
    },
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      message: 'Thanks for the resources!', 
      time: '1 day ago', 
      unread: false, 
      avatar: 'S',
      messages: [
        { sender: 'sarah', text: 'Thanks for the resources!', time: '1 day ago' }
      ]
    },
    { 
      id: 2, 
      name: 'Community Admin', 
      message: 'Welcome to the community!', 
      time: '3 days ago', 
      unread: false, 
      avatar: 'C',
      messages: [
        { sender: 'admin', text: 'Welcome to the community!', time: '3 days ago' }
      ]
    },
    { 
      id: 3, 
      name: 'Dr. Smith', 
      message: 'Your progress looks great', 
      time: '1 week ago', 
      unread: false, 
      avatar: 'D',
      messages: [
        { sender: 'drsmith', text: 'Your progress looks great', time: '1 week ago' }
      ]
    }
  ]);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home, path: '/dashboard', badge: null },
    { id: 'profile', label: 'My Profile', icon: User, path: '/dashboard/profile', badge: null },
    { id: 'activities', label: 'Activities', icon: Activity, path: '/dashboard/activities', badge: realTimeStats.completedActivities },
    { id: 'resources', label: 'Resources', icon: BookOpen, path: '/dashboard/resources', badge: realTimeStats.totalResources },
    { id: 'community', label: 'Community', icon: Users, path: '/dashboard/community', badge: realTimeStats.communityPosts },
    { id: 'progress', label: 'Progress', icon: TrendingUp, path: '/dashboard/progress', badge: realTimeStats.achievementPoints },
    { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/dashboard/messages', badge: messages },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/dashboard/settings', badge: null },
    { id: 'help', label: 'Help & Support', icon: HelpCircle, path: '/dashboard/help', badge: null }
  ];

  const stats = [
    { label: 'Activities Completed', value: realTimeStats.completedActivities, icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100', trend: '+12%', trendColor: 'text-green-600' },
    { label: 'Resources Accessed', value: realTimeStats.totalResources, icon: BookOpen, color: 'text-blue-600', bgColor: 'bg-blue-100', trend: '+8%', trendColor: 'text-blue-600' },
    { label: 'Community Posts', value: realTimeStats.communityPosts, icon: MessageSquare, color: 'text-purple-600', bgColor: 'bg-purple-100', trend: '+15%', trendColor: 'text-purple-600' },
    { label: 'Achievement Points', value: realTimeStats.achievementPoints, icon: Award, color: 'text-orange-600', bgColor: 'bg-orange-100', trend: '+25%', trendColor: 'text-orange-600' },
    { label: 'Online Users', value: realTimeStats.onlineUsers, icon: Users, color: 'text-teal-600', bgColor: 'bg-teal-100', trend: '+5%', trendColor: 'text-teal-600' },
    { label: 'Total Users', value: realTimeStats.totalUsers, icon: Globe, color: 'text-indigo-600', bgColor: 'bg-indigo-100', trend: '+18%', trendColor: 'text-indigo-600' }
  ];

  const recentActivities = [
    { title: 'Completed Learning Module', description: 'Understanding Cognitive Disabilities', time: '2 hours ago', icon: CheckCircle, type: 'achievement', color: 'text-green-600' },
    { title: 'Joined Community Discussion', description: 'Support Strategies for ADHD', time: '5 hours ago', icon: Users, type: 'community', color: 'text-blue-600' },
    { title: 'Downloaded Resource', description: 'Cognitive Assessment Tools PDF', time: '1 day ago', icon: Download, type: 'resource', color: 'text-purple-600' },
    { title: 'Achievement Unlocked', description: 'First Week Milestone', time: '2 days ago', icon: Award, type: 'achievement', color: 'text-orange-600' },
    { title: 'New Message Received', description: 'From Support Team', time: '3 hours ago', icon: MessageSquare, type: 'message', color: 'text-indigo-600' },
    { title: 'Profile Updated', description: 'Added new skills and interests', time: '4 hours ago', icon: User, type: 'profile', color: 'text-teal-600' }
  ];

  const upcomingEvents = [
    { title: 'Support Group Meeting', date: '2024-01-20', time: '3:00 PM', type: 'community', attendees: 24, status: 'upcoming' },
    { title: 'Workshop: Memory Techniques', date: '2024-01-22', time: '2:00 PM', type: 'workshop', attendees: 45, status: 'registered' },
    { title: 'One-on-One Session', date: '2024-01-25', time: '10:00 AM', type: 'session', attendees: 1, status: 'confirmed' },
    { title: 'Community Webinar', date: '2024-01-28', time: '4:00 PM', type: 'webinar', attendees: 127, status: 'open' },
    { title: 'Peer Support Circle', date: '2024-01-30', time: '6:00 PM', type: 'peer', attendees: 8, status: 'available' }
  ];

  const quickActions = [
    { title: 'Start Learning', description: 'Begin your cognitive journey', icon: Brain, color: 'bg-blue-500', path: '/resources', count: realTimeStats.totalResources },
    { title: 'Join Community', description: 'Connect with others', icon: Users, color: 'bg-green-500', path: '/about/community', count: realTimeStats.communityPosts },
    { title: 'Get Support', description: 'Access help resources', icon: Heart, color: 'bg-purple-500', path: '/help', count: '24/7' },
    { title: 'Track Progress', description: 'View your achievements', icon: TrendingUp, color: 'bg-orange-500', path: 'progress', count: realTimeStats.achievementPoints },
    { title: 'View Resources', description: 'Access learning materials', icon: BookOpen, color: 'bg-teal-500', path: '/resources', count: realTimeStats.totalResources },
    { title: 'Contact Support', description: 'Get help from team', icon: Phone, color: 'bg-red-500', path: '/contact', count: 'Live' }
  ];

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStats(prev => ({
        ...prev,
        activeUsers: Math.max(800, prev.activeUsers + Math.floor(Math.random() * 20 - 10)),
        onlineUsers: Math.max(100, prev.onlineUsers + Math.floor(Math.random() * 10 - 5)),
        newMessages: Math.max(0, prev.newMessages + Math.floor(Math.random() * 3)),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Check for theme preference
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   localStorage.getItem('isDarkMode');
      setDarkMode(theme === 'dark' || theme === 'true');
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

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Profile handlers
  const handleEditProfile = () => {
    // Create edit profile modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
        <h3 class="text-xl font-bold mb-4">Edit Profile</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="editName" value="${userData.name}" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="editEmail" value="${userData.email}" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select id="editRole" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="User" ${userData.role === 'User' ? 'selected' : ''}>User</option>
              <option value="Admin" ${userData.role === 'Admin' ? 'selected' : ''}>Admin</option>
              <option value="Moderator" ${userData.role === 'Moderator' ? 'selected' : ''}>Moderator</option>
            </select>
          </div>
        </div>
        <div class="flex justify-end space-x-3 mt-6">
          <button id="cancelEdit" class="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
          <button id="saveEdit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Handle save
    document.getElementById('saveEdit').onclick = () => {
      const newName = document.getElementById('editName').value;
      const newEmail = document.getElementById('editEmail').value;
      const newRole = document.getElementById('editRole').value;
      
      console.log('Updating profile:', { newName, newEmail, newRole });
      
      // Update state and localStorage
      setUserData(prev => ({
        ...prev,
        name: newName,
        email: newEmail,
        role: newRole
      }));
      
      localStorage.setItem('userName', newName);
      localStorage.setItem('userEmail', newEmail);
      localStorage.setItem('userRole', newRole);
      
      console.log('Profile updated in localStorage');
      
      document.body.removeChild(modal);
      showNotification('Profile updated successfully', 'success');
    };
    
    // Handle cancel
    document.getElementById('cancelEdit').onclick = () => {
      document.body.removeChild(modal);
    };
    
    // Close on backdrop click
    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    };
  };

  const handleChangePassword = () => {
    // Create change password modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
        <h3 class="text-xl font-bold mb-4">Change Password</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input type="password" id="currentPassword" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input type="password" id="newPassword" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input type="password" id="confirmPassword" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
        </div>
        <div class="flex justify-end space-x-3 mt-6">
          <button id="cancelPassword" class="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
          <button id="savePassword" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Change Password</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Handle save
    document.getElementById('savePassword').onclick = () => {
      const currentPassword = document.getElementById('currentPassword').value;
      const newPassword = document.getElementById('newPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      console.log('Password change attempt:', { currentPassword: '***', newPassword: '***', confirmPassword: '***' });
      
      // Validation
      if (!currentPassword || !newPassword || !confirmPassword) {
        console.log('Password validation failed: empty fields');
        showNotification('Please fill in all password fields', 'error');
        return;
      }
      
      if (newPassword !== confirmPassword) {
        console.log('Password validation failed: passwords do not match');
        showNotification('New passwords do not match', 'error');
        return;
      }
      
      if (newPassword.length < 6) {
        console.log('Password validation failed: too short');
        showNotification('Password must be at least 6 characters long', 'error');
        return;
      }
      
      // Simulate password change (in real app, this would call API)
      localStorage.setItem('lastPasswordChange', new Date().toISOString());
      console.log('Password changed successfully');
      
      document.body.removeChild(modal);
      showNotification('Password changed successfully', 'success');
    };
    
    // Handle cancel
    document.getElementById('cancelPassword').onclick = () => {
      document.body.removeChild(modal);
    };
    
    // Close on backdrop click
    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    };
  };

  const handleAccountSettings = () => {
    // Navigate to settings section
    console.log('Navigating to settings section...');
    setActiveSection('settings');
    // Force a re-render by updating state
    setTimeout(() => {
      console.log('Active section after navigation:', 'settings');
      showNotification('Navigated to Account Settings', 'info');
    }, 100);
  };

  const handleDownloadData = () => {
    // Create comprehensive dashboard data
    const dashboardData = {
      personalInfo: {
        name: userData.name,
        email: userData.email,
        role: userData.role,
        joinDate: userData.joinDate,
        lastLogin: userData.lastLogin,
        profileCompletion: userData.profileCompletion
      },
      preferences: userData.preferences,
      statistics: realTimeStats,
      recentActivities: recentActivities,
      upcomingEvents: upcomingEvents,
      quickActions: quickActions.map(action => ({
        title: action.title,
        description: action.description,
        count: action.count
      })),
      exportInfo: {
        exportDate: new Date().toLocaleString(),
        platform: 'PriHub Dashboard',
        version: '1.0.0'
      }
    };

    // Generate formatted text content for direct download
    const textContent = generateTextReport(dashboardData);
    
    // Create text blob for direct download
    const textBlob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(textBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `prihub-dashboard-data-${userData.name.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Also create HTML file for PDF conversion
    const htmlContent = generatePDFContent(dashboardData);
    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
    const htmlUrl = URL.createObjectURL(htmlBlob);
    const htmlLink = document.createElement('a');
    htmlLink.href = htmlUrl;
    htmlLink.download = `prihub-dashboard-data-${userData.name.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(htmlLink);
    htmlLink.click();
    document.body.removeChild(htmlLink);
    URL.revokeObjectURL(htmlUrl);
    
    showNotification('Your dashboard data has been downloaded successfully. You can open the HTML file and print it as PDF if needed.', 'success');
  };

  const handleDownloadProfileData = () => {
    // Create profile-specific data
    const profileData = {
      personalInfo: {
        name: userData.name,
        email: userData.email,
        role: userData.role,
        joinDate: userData.joinDate,
        lastLogin: userData.lastLogin,
        profileCompletion: userData.profileCompletion
      },
      preferences: userData.preferences,
      exportInfo: {
        exportDate: new Date().toLocaleString(),
        platform: 'PriHub Dashboard',
        version: '1.0.0'
      }
    };

    // Generate profile-specific text content
    const textContent = generateProfileTextReport(profileData);
    
    // Create text blob for direct download
    const textBlob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(textBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `prihub-profile-data-${userData.name.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('Your profile data has been downloaded successfully.', 'success');
  };

  const generateProfileTextReport = (data) => {
    // Create well-formatted text content for profile
    const textContent = `
╔══════════════════════════════════════════════════════════════════════════╗
║                    🧠 PRIHUB PROFILE DATA REPORT              ║
╚══════════════════════════════════════════════════════════════════════╗

Generated on: ${data.exportInfo.exportDate}
Platform: ${data.exportInfo.platform}
Version: ${data.exportInfo.version}

──────────────────────────────────────────────────────────────────────────
👤 PERSONAL INFORMATION
──────────────────────────────────────────────────────────────────

Name:           ${data.personalInfo.name}
Email:          ${data.personalInfo.email}
Role:           ${data.personalInfo.role}
Join Date:      ${data.personalInfo.joinDate}
Last Login:     ${data.personalInfo.lastLogin}
Profile Completion: ${data.personalInfo.profileCompletion}%

──────────────────────────────────────────────────────────────────────────
⚙️ PREFERENCES
────────────────────────────────────────────────────────────────--

Language:              ${data.preferences.language}
Theme:                 ${data.preferences.theme}
Notifications:         ${data.preferences.notifications ? '✓ Enabled' : '✗ Disabled'}
Email Alerts:          ${data.preferences.emailAlerts ? '✓ Enabled' : '✗ Disabled'}
Profile Visibility:     ${data.preferences.profileVisibility}
Activity Status:        ${data.preferences.activityStatus ? '✓ Enabled' : '✗ Disabled'}

──────────────────────────────────────────────────────────────────────────
💾 EXPORT INFORMATION
──────────────────────────────────────────────────────────────────

Export Date:           ${data.exportInfo.exportDate}
Export Format:         Text File (.txt)
File Size:             ~10KB
Data Integrity:        ✓ Verified

──────────────────────────────────────────────────────────────────────────
📝 NOTES
──────────────────────────────────────────────────────────────────

• This file contains your profile information and preferences.
• You can print this file and save it as PDF using your browser's print function.
• For PDF conversion: Open this file → Press Ctrl+P → Select "Save as PDF"
• All data is encrypted and stored securely on PriHub servers
• You can request data deletion at any time through your account settings

──────────────────────────────────────────────────────────────────────────
                    © 2024 PRIHUB - COGNITIVE SUPPORT
                    Support for Cognitive Disabilities
                    https://prihub.com
──────────────────────────────────────────────────────────────────────────

This profile report was generated automatically and contains your personal
information and preferences.

For questions or concerns, contact our support team at support@prihub.com
`;

    return textContent;
  };

  const handleSupportSystem = () => {
    // Navigate to help section
    console.log('Navigating to help section...');
    setActiveSection('help');
    // Force a re-render by updating state
    setTimeout(() => {
      console.log('Active section after navigation:', 'help');
      showNotification('Navigated to Support System', 'info');
    }, 100);
  };

  const handlePrintProfile = () => {
    // Create profile-specific content for printing
    const profileContent = generateProfilePrintContent();
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(profileContent);
    printWindow.document.close();
    
    // Wait for content to load, then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        // Close the window after printing (or after user cancels)
        printWindow.onafterprint = () => {
          printWindow.close();
        };
        // Fallback for browsers that don't support onafterprint
        setTimeout(() => {
          if (!printWindow.closed) {
            printWindow.close();
          }
        }, 1000);
      }, 500);
    };
    
    showNotification('Profile print dialog opened. You can save as PDF from the print dialog.', 'info');
  };

  const generateTextReport = (data) => {
    // Create well-formatted text content
    const textContent = `
╔════════════════════════════════════════════════════════════╗
║                    🧠 PRIHUB DASHBOARD DATA REPORT            ║
╚══════════════════════════════════════════════════════════════╝

Generated on: ${data.exportInfo.exportDate}
Platform: ${data.exportInfo.platform}
Version: ${data.exportInfo.version}

──────────────────────────────────────────────────────────────────
👤 PERSONAL INFORMATION
──────────────────────────────────────────────────────────────────

Name:           ${data.personalInfo.name}
Email:          ${data.personalInfo.email}
Role:           ${data.personalInfo.role}
Join Date:      ${data.personalInfo.joinDate}
Last Login:     ${data.personalInfo.lastLogin}
Profile Completion: ${data.personalInfo.profileCompletion}%

──────────────────────────────────────────────────────────────────
⚙️ PREFERENCES
──────────────────────────────────────────────────────────────────

Language:              ${data.preferences.language}
Theme:                 ${data.preferences.theme}
Notifications:         ${data.preferences.notifications ? '✓ Enabled' : '✗ Disabled'}
Email Alerts:          ${data.preferences.emailAlerts ? '✓ Enabled' : '✗ Disabled'}
Profile Visibility:     ${data.preferences.profileVisibility}
Activity Status:        ${data.preferences.activityStatus ? '✓ Enabled' : '✗ Disabled'}

──────────────────────────────────────────────────────────────────
📊 DASHBOARD STATISTICS
──────────────────────────────────────────────────────────────────

Total Users:           ${data.statistics.totalUsers.toLocaleString()}
Active Users:          ${data.statistics.activeUsers.toLocaleString()}
Online Users:          ${data.statistics.onlineUsers.toLocaleString()}
Total Resources:       ${data.statistics.totalResources.toLocaleString()}
Community Posts:       ${data.statistics.communityPosts.toLocaleString()}
Achievement Points:    ${data.statistics.achievementPoints.toLocaleString()}
Completed Activities:  ${data.statistics.completedActivities.toLocaleString()}
New Messages:          ${data.statistics.newMessages.toLocaleString()}

──────────────────────────────────────────────────────────────────
📋 RECENT ACTIVITIES
──────────────────────────────────────────────────────────────────

${data.recentActivities.map((activity, index) => `
${index + 1}. ${activity.title}
   └─ ${activity.description}
   └─ ${activity.time}
`).join('')}

──────────────────────────────────────────────────────────────────────────
📅 UPCOMING EVENTS
──────────────────────────────────────────────────────────────────

${data.upcomingEvents.map((event, index) => `
${index + 1}. ${event.title}
   └─ 📅 ${event.date} at ${event.time}
   └─ 👥 ${event.attendees} attendees | 🏷️ ${event.type} (${event.status})
`).join('')}

──────────────────────────────────────────────────────────────────────────
🚀 QUICK ACTIONS
──────────────────────────────────────────────────────────────────

${data.quickActions.map((action, index) => `
${index + 1}. ${action.title}
   └─ ${action.description}
   └─ Count: ${action.count}
`).join('')}

──────────────────────────────────────────────────────────────────────────
📈 ACHIEVEMENT BADGES
──────────────────────────────────────────────────────────────────

• First Steps          ✓ Unlocked
• Week Warrior         ✓ Unlocked  
• Community Helper      ✓ Unlocked
• Knowledge Seeker      ✗ Locked
• Consistent Learner    ✓ Unlocked
• Support Champion      ✗ Locked
• Master Mind           ✗ Locked
• Elite User            ✗ Locked

──────────────────────────────────────────────────────────────────────────
🎯 PROGRESS SUMMARY
──────────────────────────────────────────────────────────────────

Level Progress:        78% Complete
Monthly Goal Progress:  80% Complete
Current Streak:        12 days
Total Sessions:        47 sessions
Average Session Time:   25 minutes

──────────────────────────────────────────────────────────────────
📞 SUPPORT & CONTACT
──────────────────────────────────────────────────────────────────

Support Email:         support@prihub.com
Help Center:           Available 24/7
Community Forum:       Active
Live Chat:             Online

──────────────────────────────────────────────────────────────────
🔐 SECURITY & PRIVACY
────────────────────────────────────────────────────────────────--

Data Encryption:       ✓ Enabled
Two-Factor Auth:       ✓ Enabled
Privacy Settings:      ${data.preferences.profileVisibility}
Data Sharing:          ✗ Disabled
Last Security Update:  2024-04-15

──────────────────────────────────────────────────────────────────────────
💾 EXPORT INFORMATION
──────────────────────────────────────────────────────────────────

Export Date:           ${data.exportInfo.exportDate}
Export Format:         Text File (.txt)
File Size:             ~15KB
Data Integrity:        ✓ Verified

──────────────────────────────────────────────────────────────────────────
📝 NOTES
──────────────────────────────────────────────────────────────────

• This file contains your complete dashboard data as of the export date
• You can print this file and save it as PDF using your browser's print function
• For PDF conversion: Open this file → Press Ctrl+P → Select "Save as PDF"
• All data is encrypted and stored securely on PriHub servers
• You can request data deletion at any time through your account settings

──────────────────────────────────────────────────────────────────────────
                    © 2024 PRIHUB - COGNITIVE SUPPORT
                    Support for Cognitive Disabilities
                    https://prihub.com
──────────────────────────────────────────────────────────────────────────

This report was generated automatically and contains your personal
dashboard data. Please keep this file secure and do not share it with
unauthorized individuals.

For questions or concerns, contact our support team at support@prihub.com
`;

    return textContent;
  };

  const generateProfilePrintContent = () => {
    // Create HTML content for profile printing
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>PriHub Profile Report</title>
    <style>
        @page {
            margin: 20mm;
            size: A4;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 100%;
            margin: 0;
            padding: 20px;
            background: white;
        }
        
        .header {
            text-align: center;
            border-bottom: 3px solid #1B9AAA;
            padding-bottom: 20px;
            margin-bottom: 30px;
            page-break-after: avoid;
        }
        
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #1B9AAA;
            margin-bottom: 10px;
        }
        
        .section {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            page-break-inside: avoid;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: bold;
            color: #142C52;
            margin-bottom: 15px;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .info-item {
            padding: 12px;
            background-color: white;
            border-radius: 6px;
            border-left: 4px solid #1B9AAA;
        }
        
        .info-label {
            font-weight: bold;
            color: #666;
            display: block;
            margin-bottom: 5px;
        }
        
        .info-value {
            color: #333;
            font-size: 16px;
        }
        
        .preference-item {
            padding: 12px;
            background-color: white;
            border-radius: 6px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 3px solid #16808D;
        }
        
        .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .badge-success {
            background-color: #d4edda;
            color: #155724;
        }
        
        .badge-danger {
            background-color: #f8d7da;
            color: #721c24;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #ddd;
            font-size: 12px;
            color: #666;
            page-break-inside: avoid;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 10px;
            }
            
            .section {
                page-break-inside: avoid;
                margin-bottom: 20px;
            }
            
            .header {
                page-break-after: avoid;
            }
            
            .footer {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">🧠 PriHub Profile</div>
        <h1>User Profile Report</h1>
        <p><strong>Generated on:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Platform:</strong> PriHub Dashboard</p>
    </div>

    <div class="section">
        <div class="section-title">👤 Personal Information</div>
        <div class="info-grid">
            <div class="info-item">
                <span class="info-label">Name:</span>
                <span class="info-value">${userData.name}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Email:</span>
                <span class="info-value">${userData.email}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Role:</span>
                <span class="info-value">${userData.role}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Join Date:</span>
                <span class="info-value">${userData.joinDate}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Last Login:</span>
                <span class="info-value">${userData.lastLogin}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Profile Completion:</span>
                <span class="info-value">${userData.profileCompletion}%</span>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">⚙️ Preferences</div>
        <div class="preference-item">
            <span class="info-label">Language:</span>
            <span class="info-value">${userData.preferences.language}</span>
        </div>
        <div class="preference-item">
            <span class="info-label">Theme:</span>
            <span class="info-value">${userData.preferences.theme}</span>
        </div>
        <div class="preference-item">
            <span class="info-label">Notifications:</span>
            <span class="badge ${userData.preferences.notifications ? 'badge-success' : 'badge-danger'}">
                ${userData.preferences.notifications ? '✓ Enabled' : '✗ Disabled'}
            </span>
        </div>
        <div class="preference-item">
            <span class="info-label">Email Alerts:</span>
            <span class="badge ${userData.preferences.emailAlerts ? 'badge-success' : 'badge-danger'}">
                ${userData.preferences.emailAlerts ? '✓ Enabled' : '✗ Disabled'}
            </span>
        </div>
        <div class="preference-item">
            <span class="info-label">Profile Visibility:</span>
            <span class="info-value">${userData.preferences.profileVisibility}</span>
        </div>
        <div class="preference-item">
            <span class="info-label">Activity Status:</span>
            <span class="badge ${userData.preferences.activityStatus ? 'badge-success' : 'badge-danger'}">
                ${userData.preferences.activityStatus ? '✓ Enabled' : '✗ Disabled'}
            </span>
        </div>
    </div>

    <div class="footer">
        <p><strong>© 2024 PriHub - Support for Cognitive Disabilities</strong></p>
        <p>This profile report contains your personal information and preferences.</p>
        <p>Platform: PriHub Dashboard | Generated: ${new Date().toLocaleString()}</p>
    </div>
</body>
</html>
    `;
    
    return htmlContent;
  };

  // Message handlers
  const handleSendMessage = () => {
    if (messageInput.trim() === '') {
      showNotification('Please enter a message', 'error');
      return;
    }

    const newMessage = {
      sender: 'user',
      text: messageInput,
      time: 'Just now'
    };

    // Update conversations with new message
    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          message: messageInput,
          time: 'Just now'
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setMessageInput('');
    showNotification('Message sent successfully', 'success');

    // Simulate reply after 2 seconds
    setTimeout(() => {
      const replyMessage = {
        sender: 'support',
        text: 'Thank you for your message! Our team will get back to you soon.',
        time: 'Just now'
      };

      const updatedWithReply = updatedConversations.map(conv => {
        if (conv.id === selectedConversation) {
          return {
            ...conv,
            messages: [...conv.messages, replyMessage],
            message: replyMessage.text,
            time: 'Just now'
          };
        }
        return conv;
      });

      setConversations(updatedWithReply);
    }, 2000);
  };

  const handleSelectConversation = (conversationId) => {
    setSelectedConversation(conversationId);
    
    // Mark as read
    const updatedConversations = conversations.map(conv => {
      if (conv.id === conversationId) {
        return { ...conv, unread: false };
      }
      return conv;
    });
    setConversations(updatedConversations);
  };

  const handleComposeMessage = () => {
    setShowComposeModal(true);
  };

  const handleSendNewMessage = () => {
    if (!composeData.recipient || !composeData.subject || !composeData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    // Create new conversation
    const newConversation = {
      id: conversations.length,
      name: composeData.recipient,
      message: composeData.subject,
      time: 'Just now',
      unread: false,
      avatar: composeData.recipient.charAt(0).toUpperCase(),
      messages: [
        { sender: 'user', text: composeData.message, time: 'Just now' }
      ]
    };

    setConversations([newConversation, ...conversations]);
    setSelectedConversation(newConversation.id);
    setShowComposeModal(false);
    setComposeData({ recipient: '', subject: '', message: '' });
    showNotification('Message sent successfully', 'success');
  };

  // Settings handlers
  const handleEmailAlertsToggle = () => {
    const newValue = !userData.preferences.emailAlerts;
    setUserData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        emailAlerts: newValue
      }
    }));
    localStorage.setItem('emailAlerts', newValue.toString());
    
    // Show notification
    if (newValue) {
      showNotification('Email alerts enabled', 'success');
    } else {
      showNotification('Email alerts disabled', 'info');
    }
  };

  const handleNotificationsToggle = () => {
    const newValue = !userData.preferences.notifications;
    setUserData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        notifications: newValue
      }
    }));
    localStorage.setItem('notifications', newValue.toString());
    
    // Show notification
    if (newValue) {
      showNotification('Push notifications enabled', 'success');
    } else {
      showNotification('Push notifications disabled', 'info');
    }
  };

  const handleDarkModeToggle = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    setUserData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        theme: newValue ? 'dark' : 'light'
      }
    }));
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
    localStorage.setItem('darkMode', newValue.toString());
    
    // Show notification
    if (newValue) {
      showNotification('Dark mode enabled', 'success');
    } else {
      showNotification('Dark mode disabled', 'info');
    }
  };

  const handleProfileVisibilityChange = (value) => {
    setUserData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        profileVisibility: value
      }
    }));
    localStorage.setItem('profileVisibility', value);
    showNotification(`Profile visibility set to ${value}`, 'success');
  };

  const handleActivityStatusToggle = () => {
    const newValue = !userData.preferences.activityStatus;
    setUserData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        activityStatus: newValue
      }
    }));
    localStorage.setItem('activityStatus', newValue.toString());
    
    // Show notification
    if (newValue) {
      showNotification('Activity status enabled', 'success');
    } else {
      showNotification('Activity status disabled', 'info');
    }
  };

  const generatePDFContent = (data) => {
    // Create HTML content for PDF generation
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>PriHub Dashboard Data Report</title>
    <style>
        @page {
            margin: 20mm;
            size: A4;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 100%;
            margin: 0;
            padding: 20px;
            background: white;
        }
        
        .header {
            text-align: center;
            border-bottom: 3px solid #1B9AAA;
            padding-bottom: 20px;
            margin-bottom: 30px;
            page-break-after: avoid;
        }
        
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #1B9AAA;
            margin-bottom: 10px;
        }
        
        .section {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            page-break-inside: avoid;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: bold;
            color: #142C52;
            margin-bottom: 15px;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .info-item {
            padding: 12px;
            background-color: white;
            border-radius: 6px;
            border-left: 4px solid #1B9AAA;
        }
        
        .info-label {
            font-weight: bold;
            color: #666;
            display: block;
            margin-bottom: 5px;
        }
        
        .info-value {
            color: #333;
            font-size: 16px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .stat-card {
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            text-align: center;
            border-left: 5px solid #1B9AAA;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .stat-number {
            font-size: 28px;
            font-weight: bold;
            color: #1B9AAA;
            margin-bottom: 8px;
        }
        
        .stat-label {
            font-size: 14px;
            color: #666;
            font-weight: 500;
        }
        
        .activity-item, .event-item {
            padding: 15px;
            background-color: white;
            border-radius: 6px;
            margin-bottom: 15px;
            border-left: 4px solid #16808D;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .activity-title, .event-title {
            font-weight: bold;
            margin-bottom: 8px;
            font-size: 16px;
        }
        
        .activity-meta, .event-meta {
            font-size: 13px;
            color: #666;
            margin-bottom: 3px;
        }
        
        .preference-item {
            padding: 12px;
            background-color: white;
            border-radius: 6px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 3px solid #16808D;
        }
        
        .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .badge-success {
            background-color: #d4edda;
            color: #155724;
        }
        
        .badge-danger {
            background-color: #f8d7da;
            color: #721c24;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #ddd;
            font-size: 12px;
            color: #666;
            page-break-inside: avoid;
        }
        
        .achievement-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        
        .achievement-item {
            padding: 12px;
            background-color: white;
            border-radius: 6px;
            display: flex;
            align-items: center;
            border-left: 3px solid #28a745;
        }
        
        .achievement-item.locked {
            border-left-color: #dc3545;
            opacity: 0.7;
        }
        
        .achievement-icon {
            margin-right: 10px;
            font-size: 20px;
        }
        
        .achievement-name {
            font-weight: bold;
            font-size: 14px;
        }
        
        .achievement-status {
            margin-left: auto;
            font-size: 12px;
            font-weight: bold;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 10px;
            }
            
            .section {
                page-break-inside: avoid;
                margin-bottom: 20px;
            }
            
            .header {
                page-break-after: avoid;
            }
            
            .footer {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">🧠 PriHub Dashboard</div>
        <h1>User Data Report</h1>
        <p><strong>Generated on:</strong> ${data.exportInfo.exportDate}</p>
        <p><strong>Platform:</strong> ${data.exportInfo.platform} | <strong>Version:</strong> ${data.exportInfo.version}</p>
    </div>

    <div class="section">
        <div class="section-title">👤 Personal Information</div>
        <div class="info-grid">
            <div class="info-item">
                <span class="info-label">Name:</span>
                <span class="info-value">${data.personalInfo.name}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Email:</span>
                <span class="info-value">${data.personalInfo.email}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Role:</span>
                <span class="info-value">${data.personalInfo.role}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Join Date:</span>
                <span class="info-value">${data.personalInfo.joinDate}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Last Login:</span>
                <span class="info-value">${data.personalInfo.lastLogin}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Profile Completion:</span>
                <span class="info-value">${data.personalInfo.profileCompletion}%</span>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">⚙️ Preferences</div>
        <div class="preference-item">
            <span class="info-label">Language:</span>
            <span class="info-value">${data.preferences.language}</span>
        </div>
        <div class="preference-item">
            <span class="info-label">Theme:</span>
            <span class="info-value">${data.preferences.theme}</span>
        </div>
        <div class="preference-item">
            <span class="info-label">Notifications:</span>
            <span class="badge ${data.preferences.notifications ? 'badge-success' : 'badge-danger'}">
                ${data.preferences.notifications ? '✓ Enabled' : '✗ Disabled'}
            </span>
        </div>
        <div class="preference-item">
            <span class="info-label">Email Alerts:</span>
            <span class="badge ${data.preferences.emailAlerts ? 'badge-success' : 'badge-danger'}">
                ${data.preferences.emailAlerts ? '✓ Enabled' : '✗ Disabled'}
            </span>
        </div>
        <div class="preference-item">
            <span class="info-label">Profile Visibility:</span>
            <span class="info-value">${data.preferences.profileVisibility}</span>
        </div>
        <div class="preference-item">
            <span class="info-label">Activity Status:</span>
            <span class="badge ${data.preferences.activityStatus ? 'badge-success' : 'badge-danger'}">
                ${data.preferences.activityStatus ? '✓ Enabled' : '✗ Disabled'}
            </span>
        </div>
    </div>

    <div class="section">
        <div class="section-title">📊 Dashboard Statistics</div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">${data.statistics.totalUsers.toLocaleString()}</div>
                <div class="stat-label">Total Users</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${data.statistics.activeUsers.toLocaleString()}</div>
                <div class="stat-label">Active Users</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${data.statistics.totalResources.toLocaleString()}</div>
                <div class="stat-label">Resources</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${data.statistics.communityPosts.toLocaleString()}</div>
                <div class="stat-label">Community Posts</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${data.statistics.achievementPoints.toLocaleString()}</div>
                <div class="stat-label">Achievement Points</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${data.statistics.completedActivities.toLocaleString()}</div>
                <div class="stat-label">Completed Activities</div>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">📋 Recent Activities</div>
        ${data.recentActivities.map(activity => `
            <div class="activity-item">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-meta">${activity.description}</div>
                <div class="activity-meta"><strong>Time:</strong> ${activity.time}</div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <div class="section-title">📅 Upcoming Events</div>
        ${data.upcomingEvents.map(event => `
            <div class="event-item">
                <div class="event-title">${event.title}</div>
                <div class="event-meta">📅 <strong>Date:</strong> ${event.date} at ${event.time}</div>
                <div class="event-meta">👥 <strong>Attendees:</strong> ${event.attendees}</div>
                <div class="event-meta">🏷️ <strong>Type:</strong> ${event.type} (${event.status})</div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <div class="section-title">🚀 Quick Actions</div>
        <div class="info-grid">
            ${data.quickActions.map(action => `
                <div class="info-item">
                    <span class="info-label">${action.title}:</span>
                    <span class="info-value">${action.description} (${action.count})</span>
                </div>
            `).join('')}
        </div>
    </div>

    <div class="section">
        <div class="section-title">📈 Achievement Badges</div>
        <div class="achievement-grid">
            <div class="achievement-item">
                <span class="achievement-icon">🏆</span>
                <span class="achievement-name">First Steps</span>
                <span class="achievement-status badge badge-success">✓ Unlocked</span>
            </div>
            <div class="achievement-item">
                <span class="achievement-icon">⭐</span>
                <span class="achievement-name">Week Warrior</span>
                <span class="achievement-status badge badge-success">✓ Unlocked</span>
            </div>
            <div class="achievement-item">
                <span class="achievement-icon">🤝</span>
                <span class="achievement-name">Community Helper</span>
                <span class="achievement-status badge badge-success">✓ Unlocked</span>
            </div>
            <div class="achievement-item locked">
                <span class="achievement-icon">📚</span>
                <span class="achievement-name">Knowledge Seeker</span>
                <span class="achievement-status badge badge-danger">✗ Locked</span>
            </div>
            <div class="achievement-item">
                <span class="achievement-icon">📈</span>
                <span class="achievement-name">Consistent Learner</span>
                <span class="achievement-status badge badge-success">✓ Unlocked</span>
            </div>
            <div class="achievement-item locked">
                <span class="achievement-icon">💝</span>
                <span class="achievement-name">Support Champion</span>
                <span class="achievement-status badge badge-danger">✗ Locked</span>
            </div>
            <div class="achievement-item locked">
                <span class="achievement-icon">🧠</span>
                <span class="achievement-name">Master Mind</span>
                <span class="achievement-status badge badge-danger">✗ Locked</span>
            </div>
            <div class="achievement-item locked">
                <span class="achievement-icon">👑</span>
                <span class="achievement-name">Elite User</span>
                <span class="achievement-status badge badge-danger">✗ Locked</span>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">🎯 Progress Summary</div>
        <div class="info-grid">
            <div class="info-item">
                <span class="info-label">Level Progress:</span>
                <span class="info-value">78% Complete</span>
            </div>
            <div class="info-item">
                <span class="info-label">Monthly Goal Progress:</span>
                <span class="info-value">80% Complete</span>
            </div>
            <div class="info-item">
                <span class="info-label">Current Streak:</span>
                <span class="info-value">12 days</span>
            </div>
            <div class="info-item">
                <span class="info-label">Total Sessions:</span>
                <span class="info-value">47 sessions</span>
            </div>
            <div class="info-item">
                <span class="info-label">Average Session Time:</span>
                <span class="info-value">25 minutes</span>
            </div>
            <div class="info-item">
                <span class="info-label">Last Achievement:</span>
                <span class="info-value">Community Helper</span>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">📞 Support & Contact</div>
        <div class="info-grid">
            <div class="info-item">
                <span class="info-label">Support Email:</span>
                <span class="info-value">support@prihub.com</span>
            </div>
            <div class="info-item">
                <span class="info-label">Help Center:</span>
                <span class="info-value">Available 24/7</span>
            </div>
            <div class="info-item">
                <span class="info-label">Community Forum:</span>
                <span class="info-value">Active</span>
            </div>
            <div class="info-item">
                <span class="info-label">Live Chat:</span>
                <span class="info-value">Online</span>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">🔐 Security & Privacy</div>
        <div class="info-grid">
            <div class="info-item">
                <span class="info-label">Data Encryption:</span>
                <span class="badge badge-success">✓ Enabled</span>
            </div>
            <div class="info-item">
                <span class="info-label">Two-Factor Auth:</span>
                <span class="badge badge-success">✓ Enabled</span>
            </div>
            <div class="info-item">
                <span class="info-label">Privacy Settings:</span>
                <span class="info-value">${data.preferences.profileVisibility}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Data Sharing:</span>
                <span class="badge badge-danger">✗ Disabled</span>
            </div>
            <div class="info-item">
                <span class="info-label">Last Security Update:</span>
                <span class="info-value">2024-04-15</span>
            </div>
            <div class="info-item">
                <span class="info-label">Password Last Changed:</span>
                <span class="info-value">${localStorage.getItem('lastPasswordChange') ? new Date(localStorage.getItem('lastPasswordChange')).toLocaleDateString() : 'Never'}</span>
            </div>
        </div>
    </div>

    <div class="footer">
        <p><strong>© 2024 PriHub - Support for Cognitive Disabilities</strong></p>
        <p>This report contains your dashboard data as of ${data.exportInfo.exportDate}</p>
        <p>Platform: ${data.exportInfo.platform} | Version: ${data.exportInfo.version}</p>
        <p><strong>Security Notice:</strong> This document contains sensitive personal information. Keep it secure and do not share with unauthorized individuals.</p>
    </div>
</body>
</html>
    `;
    
    return htmlContent;
  };

  const handleClearCache = () => {
    // Clear localStorage cache
    const keysToKeep = ['userName', 'userEmail', 'userRole', 'joinDate', 'userAvatar'];
    const allKeys = Object.keys(localStorage);
    
    allKeys.forEach(key => {
      if (!keysToKeep.includes(key)) {
        localStorage.removeItem(key);
      }
    });
    
    // Clear session storage
    sessionStorage.clear();
    
    // Show notification and refresh user data
    showNotification('Cache cleared successfully', 'success');
    
    // Reload user preferences from localStorage
    setTimeout(() => {
      setUserData(prev => ({
        ...prev,
        preferences: {
          language: localStorage.getItem('language') || 'English',
          theme: localStorage.getItem('theme') || 'light',
          notifications: localStorage.getItem('notifications') === 'true',
          emailAlerts: localStorage.getItem('emailAlerts') === 'true',
          profileVisibility: localStorage.getItem('profileVisibility') || 'Everyone',
          activityStatus: localStorage.getItem('activityStatus') === 'true'
        }
      }));
    }, 500);
  };

  const showNotification = (message, type = 'info') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-y-full ${
      type === 'success' ? 'bg-green-500 text-white' :
      type === 'error' ? 'bg-red-500 text-white' :
      type === 'warning' ? 'bg-yellow-500 text-white' :
      'bg-blue-500 text-white'
    }`;
    notification.innerHTML = `
      <div class="flex items-center">
        <span class="mr-2">${
          type === 'success' ? '✓' :
          type === 'error' ? '✗' :
          type === 'warning' ? '⚠' :
          'ℹ'
        }</span>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in from bottom
    setTimeout(() => {
      notification.classList.remove('translate-y-full');
      notification.classList.add('translate-y-0');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('translate-y-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  // Render different sections based on activeSection
  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return renderOverview();
      case 'profile':
        return renderProfile();
      case 'activities':
        return renderActivities();
      case 'resources':
        return renderResources();
      case 'community':
        return renderCommunity();
      case 'progress':
        return renderProgress();
      case 'messages':
        return renderMessages();
      case 'settings':
        return renderSettings();
      case 'help':
        return renderHelp();
      default:
        return renderOverview();
    }
  };

  // Overview Section
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Welcome back, {userData.name}! 👋
            </h1>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Here's what's happening with your cognitive support journey today.
            </p>
          </div>
          <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'} border ${darkMode ? 'border-green-600' : 'border-green-200'}`}>
            <p className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Profile Complete</p>
            <p className={`text-lg font-bold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>{userData.profileCompletion}%</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8" style={{ gap: darkMode ? '1rem' : undefined }}>
        {stats.map((stat, index) => (
        <div className={`p-4 sm:p-6 lg:p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-md transition-shadow`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="text-right">
                <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</span>
                <div className={`text-xs ${stat.trendColor} flex items-center`}>
                  <ArrowUp className="h-3 w-3 mr-1" />
                  {stat.trend}
                </div>
              </div>
            </div>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8" style={{ gap: darkMode ? '1rem' : undefined }}>
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
              // Check if it's a dashboard section or external path
              if (action.path === 'progress') {
                setActiveSection('progress');
              } else if (action.path === 'profile') {
                setActiveSection('profile');
              } else if (action.path === 'activities') {
                setActiveSection('activities');
              } else if (action.path === 'resources') {
                setActiveSection('resources');
              } else if (action.path === 'community') {
                setActiveSection('community');
              } else if (action.path === 'messages') {
                setActiveSection('messages');
              } else if (action.path === 'settings') {
                setActiveSection('settings');
              } else if (action.path === 'help') {
                setActiveSection('help');
              } else {
                handleNavigation(action.path);
              }
            }}
              className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4 hover:shadow-md transition-all cursor-pointer group text-center`}
            >
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform mx-auto`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'} mb-1 text-center`}>{action.title}</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 text-center`}>{action.description}</p>
              <div className={`text-xs font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center`}>
                {action.count}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activities & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8" style={{ gap: darkMode ? '1rem' : undefined }}>
        {/* Recent Activities */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activities</h2>
            <button className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.slice(0, 5).map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'achievement' ? 'bg-green-100' :
                  activity.type === 'community' ? 'bg-blue-100' :
                  activity.type === 'resource' ? 'bg-purple-100' :
                  activity.type === 'message' ? 'bg-indigo-100' :
                  activity.type === 'profile' ? 'bg-teal-100' :
                  'bg-gray-100'
                }`}>
                  <activity.icon className={`h-5 w-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{activity.title}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{activity.description}</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Upcoming Events</h2>
            <button className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              View Calendar
            </button>
          </div>
          <div className="space-y-4">
            {upcomingEvents.slice(0, 5).map((event, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className={`p-2 rounded-lg ${
                  event.type === 'community' ? 'bg-blue-100' :
                  event.type === 'workshop' ? 'bg-green-100' :
                  event.type === 'session' ? 'bg-purple-100' :
                  event.type === 'webinar' ? 'bg-orange-100' :
                  event.type === 'peer' ? 'bg-teal-100' :
                  'bg-gray-100'
                }`}>
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{event.title}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.date} at {event.time}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      event.type === 'community' ? 'bg-blue-100 text-blue-700' :
                      event.type === 'workshop' ? 'bg-green-100 text-green-700' :
                      event.type === 'session' ? 'bg-purple-100 text-purple-700' :
                      event.type === 'webinar' ? 'bg-orange-100 text-orange-700' :
                      event.type === 'peer' ? 'bg-teal-100 text-teal-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {event.type}
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {event.attendees} attendees
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Profile Section
  const renderProfile = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>My Profile</h2>
        
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center">
            {userData.photoURL ? (
              <img 
                src={userData.photoURL} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  console.log('🖼️ Image load error, falling back to initials');
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
                onLoad={() => {
                  console.log('🖼️ Profile image loaded successfully:', userData.photoURL);
                }}
              />
            ) : null}
            <span className="text-white text-2xl font-bold" style={{ display: userData.photoURL ? 'none' : 'flex' }}>
              {userData.name ? getInitials(userData.name) : 'U'}
            </span>
          </div>
          <div>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.name}</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{userData.email}</p>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Member since {userData.joinDate}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                {userData.role}
              </span>
              <span className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'}`}>
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Personal Information</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full Name</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Role</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.role}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Last Login</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.lastLogin}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Preferences</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Language</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.preferences.language}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Theme</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.preferences.theme}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Notifications</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.preferences.notifications ? 'Enabled' : 'Disabled'}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email Alerts</span>
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{userData.preferences.emailAlerts ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {/* First Row - All shorter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleEditProfile}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Edit Profile
            </button>
            <button 
              onClick={() => window.print()}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </button>
            <button 
              onClick={handleChangePassword}
              className={`px-4 py-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} rounded-lg hover:bg-gray-300 transition-colors`}
            >
              Change Password
            </button>
          </div>

          {/* Second Row - Remaining longer buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleAccountSettings}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Account Settings
            </button>
            <button 
              onClick={handleDownloadProfileData}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <FileDown className="h-4 w-4" />
              <span>Download Data</span>
            </button>
            <button 
              onClick={handleSupportSystem}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Support System</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Activities Section
  const renderActivities = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: darkMode ? '1rem' : undefined }}>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-blue-600' : 'border-blue-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">{realTimeStats.completedActivities}</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Cognitive Exercises</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Completed this week</p>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'} border ${darkMode ? 'border-green-600' : 'border-green-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <BookOpen className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">{realTimeStats.totalResources}</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resources Accessed</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Total resources viewed</p>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border ${darkMode ? 'border-purple-600' : 'border-purple-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <Users className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">{realTimeStats.communityPosts}</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Community Posts</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Posts and comments</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Recent Activity Log</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className={`p-2 rounded-lg ${
                  activity.type === 'achievement' ? 'bg-green-100' :
                  activity.type === 'community' ? 'bg-blue-100' :
                  activity.type === 'resource' ? 'bg-purple-100' :
                  activity.type === 'message' ? 'bg-indigo-100' :
                  activity.type === 'profile' ? 'bg-teal-100' :
                  'bg-gray-100'
                }`}>
                  <activity.icon className={`h-5 w-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{activity.title}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{activity.description}</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Resources Section
  const renderResources = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resources</h2>
          <button 
            onClick={() => handleNavigation('/resources')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Resources
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" style={{ gap: darkMode ? '1rem' : undefined }}>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-md transition-shadow cursor-pointer`}
               onClick={() => handleNavigation('/resources')}>
            <div className="flex items-center justify-between mb-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-sm text-blue-600">PDF</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>User Guide</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Complete platform guide</p>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-md transition-shadow cursor-pointer`}
               onClick={() => handleNavigation('/resources')}>
            <div className="flex items-center justify-between mb-3">
              <Video className="h-8 w-8 text-purple-600" />
              <span className="text-sm text-purple-600">Video</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tutorial Videos</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Step-by-step tutorials</p>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-md transition-shadow cursor-pointer`}
               onClick={() => handleNavigation('/resources')}>
            <div className="flex items-center justify-between mb-3">
              <BookOpen className="h-8 w-8 text-green-600" />
              <span className="text-sm text-green-600">Article</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Learning Materials</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Educational content</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Resource Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Learning', 'Support', 'Community', 'Tools'].map((category, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                   onClick={() => handleNavigation('/resources')}>
                <div className={`w-12 h-12 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                  category === 'Learning' ? 'bg-blue-100' :
                  category === 'Support' ? 'bg-green-100' :
                  category === 'Community' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  {category === 'Learning' && <BookOpen className="h-6 w-6 text-blue-600" />}
                  {category === 'Support' && <Heart className="h-6 w-6 text-green-600" />}
                  {category === 'Community' && <Users className="h-6 w-6 text-purple-600" />}
                  {category === 'Tools' && <Wrench className="h-6 w-6 text-orange-600" />}
                </div>
                <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{category}</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  {Math.floor(Math.random() * 20 + 10)} items
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Community Section
  const renderCommunity = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Community</h2>
          <button 
            onClick={() => handleNavigation('/about/community')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Community
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-blue-600' : 'border-blue-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">{realTimeStats.totalUsers}</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Total Members</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Active community members</p>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'} border ${darkMode ? 'border-green-600' : 'border-green-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <MessageSquare className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">{realTimeStats.communityPosts}</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Community Posts</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Discussions and shares</p>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border ${darkMode ? 'border-purple-600' : 'border-purple-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <Activity className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">{realTimeStats.activeUsers}</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Active Now</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Members online</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Discussions</h3>
          {[
            { title: 'Support Strategies for ADHD', author: 'Sarah Johnson', replies: 23, time: '2 hours ago', category: 'Support' },
            { title: 'Memory Improvement Techniques', author: 'Mike Chen', replies: 18, time: '5 hours ago', category: 'Learning' },
            { title: 'Daily Living Tips', author: 'Emily Davis', replies: 31, time: '1 day ago', category: 'Tips' },
            { title: 'Cognitive Exercise Success Stories', author: 'Alex Thompson', replies: 15, time: '2 days ago', category: 'Success' }
          ].map((discussion, index) => (
            <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                 onClick={() => handleNavigation('/about/community')}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{discussion.title}</h4>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{discussion.author}</span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{discussion.replies} replies</span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{discussion.time}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  discussion.category === 'Support' ? 'bg-blue-100 text-blue-700' :
                  discussion.category === 'Learning' ? 'bg-green-100 text-green-700' :
                  discussion.category === 'Tips' ? 'bg-purple-100 text-purple-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {discussion.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Progress Section
  const renderProgress = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Progress</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50'} border ${darkMode ? 'border-blue-600' : 'border-blue-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <Award className="h-10 w-10 text-blue-600" />
              <span className="text-3xl font-bold text-blue-600">{realTimeStats.achievementPoints}</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Achievement Points</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Total points earned</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Level Progress</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-teal-50'} border ${darkMode ? 'border-green-600' : 'border-green-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <Target className="h-10 w-10 text-green-600" />
              <span className="text-3xl font-bold text-green-600">{realTimeStats.completedActivities}</span>
            </div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Activities Completed</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>This month</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Monthly Goal</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'First Steps', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100', unlocked: true },
              { name: 'Week Warrior', icon: Award, color: 'text-blue-600', bgColor: 'bg-blue-100', unlocked: true },
              { name: 'Community Helper', icon: Users, color: 'text-purple-600', bgColor: 'bg-purple-100', unlocked: true },
              { name: 'Knowledge Seeker', icon: BookOpen, color: 'text-orange-600', bgColor: 'bg-orange-100', unlocked: false },
              { name: 'Consistent Learner', icon: TrendingUp, color: 'text-teal-600', bgColor: 'bg-teal-100', unlocked: true },
              { name: 'Support Champion', icon: Heart, color: 'text-red-600', bgColor: 'bg-red-100', unlocked: false },
              { name: 'Master Mind', icon: Brain, color: 'text-indigo-600', bgColor: 'bg-indigo-100', unlocked: false },
              { name: 'Elite User', icon: Star, color: 'text-yellow-600', bgColor: 'bg-yellow-100', unlocked: false }
            ].map((achievement, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} text-center ${
                achievement.unlocked ? '' : 'opacity-50'
              }`}>
                <div className={`w-12 h-12 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                  achievement.unlocked ? achievement.bgColor : 'bg-gray-100'
                }`}>
                  <achievement.icon className={`h-6 w-6 ${
                    achievement.unlocked ? achievement.color : 'text-gray-400'
                  }`} />
                </div>
                <h4 className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{achievement.name}</h4>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  {achievement.unlocked ? 'Unlocked' : 'Locked'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Messages Section
  const renderMessages = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Messages</h2>
          <button 
            onClick={handleComposeMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Compose New
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Conversations</h3>
            <div className="space-y-2">
              {conversations.map((conversation) => (
                <div 
                  key={conversation.id} 
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedConversation === conversation.id 
                      ? darkMode ? 'bg-gray-600' : 'bg-blue-50 border border-blue-200'
                      : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => handleSelectConversation(conversation.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">{conversation.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{conversation.name}</h4>
                        {conversation.unread && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>{conversation.message}</p>
                      <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{conversation.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {conversations[selectedConversation]?.name || 'Select a conversation'}
                </h3>
                <div className="flex space-x-2">
                  <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} transition-colors`}>
                    <Phone className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                  <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} transition-colors`}>
                    <Video className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                  <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} transition-colors`}>
                    <MoreVertical className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>

              <div className="space-y-4 mb-4" style={{ height: '300px', overflowY: 'auto' }}>
                {conversations[selectedConversation]?.messages.map((message, index) => (
                  <div key={index} className={`flex items-start space-x-3 ${
                    message.sender === 'user' ? 'justify-end' : ''
                  }`}>
                    {message.sender !== 'user' && (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">
                          {conversations[selectedConversation].avatar}
                        </span>
                      </div>
                    )}
                    <div className={`flex-1 p-3 rounded-lg max-w-xs ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : `${darkMode ? 'bg-gray-600' : 'bg-white'} border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`
                    }`}>
                      <p className={`text-sm ${message.sender === 'user' ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {message.text}
                      </p>
                      <p className={`text-xs ${message.sender === 'user' ? 'opacity-75' : darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                        {message.time}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Y</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className={`flex-1 px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                />
                <button 
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compose Modal */}
      {showComposeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-96 max-w-full mx-4`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Compose New Message</h3>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Recipient</label>
                <input
                  type="text"
                  value={composeData.recipient}
                  onChange={(e) => setComposeData({...composeData, recipient: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  placeholder="Enter recipient name"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                <input
                  type="text"
                  value={composeData.subject}
                  onChange={(e) => setComposeData({...composeData, subject: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea
                  value={composeData.message}
                  onChange={(e) => setComposeData({...composeData, message: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  rows="4"
                  placeholder="Type your message..."
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button 
                onClick={() => setShowComposeModal(false)}
                className={`px-4 py-2 ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'}`}
              >
                Cancel
              </button>
              <button 
                onClick={handleSendNewMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Settings Section
  const renderSettings = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Settings</h2>

        <div className="space-y-6">
          <div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Account Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email Notifications</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive email updates about your activity</p>
                </div>
                <button 
                  onClick={handleEmailAlertsToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    userData.preferences.emailAlerts ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    userData.preferences.emailAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Push Notifications</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive push notifications in your browser</p>
                </div>
                <button 
                  onClick={handleNotificationsToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    userData.preferences.notifications ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    userData.preferences.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dark Mode</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Use dark theme across the platform</p>
                </div>
                <button 
                  onClick={handleDarkModeToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    darkMode ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Privacy Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Profile Visibility</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Make your profile visible to other users</p>
                </div>
                <select 
                  value={userData.preferences.profileVisibility}
                  onChange={(e) => handleProfileVisibilityChange(e.target.value)}
                  className={`px-3 py-1 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                >
                  <option>Everyone</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Activity Status</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Show when you're active</p>
                </div>
                <button 
                  onClick={handleActivityStatusToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    userData.preferences.activityStatus ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    userData.preferences.activityStatus ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Data & Storage</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={handleDownloadData}
                  className={`w-full text-left px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'} hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Download</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Get complete dashboard data</p>
                    </div>
                    <FileDown className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                  </div>
                </button>

                <button 
                  onClick={handlePrintProfile}
                  className={`w-full text-left px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'} hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Print</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Print profile report</p>
                    </div>
                    <Printer className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                  </div>
                </button>
              </div>

              <button 
                onClick={handleClearCache}
                className={`w-full text-left px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'} hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Clear Cache</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Clear temporary files and cache</p>
                  </div>
                  <Trash2 className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Help & Support Section
  const renderHelp = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Help & Support</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-50 to-blue-100'} border ${darkMode ? 'border-blue-600' : 'border-blue-200'} text-center cursor-pointer hover:shadow-md transition-shadow`}
               onClick={() => handleNavigation('/help')}>
            <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Live Chat</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>Chat with our support team</p>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Online
              </span>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-green-100'} border ${darkMode ? 'border-green-600' : 'border-green-200'} text-center cursor-pointer hover:shadow-md transition-shadow`}
               onClick={() => handleNavigation('/contact')}>
            <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email Support</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>Get help via email</p>
            <div className="mt-4">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>support@prihub.com</span>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-purple-50 to-purple-100'} border ${darkMode ? 'border-purple-600' : 'border-purple-200'} text-center cursor-pointer hover:shadow-md transition-shadow`}
               onClick={() => handleNavigation('/resources')}>
            <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Help Center</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>Browse help articles</p>
            <div className="mt-4">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>150+ Articles</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { question: 'How do I get started with PriHub?', answer: 'Simply sign up for an account and complete your profile to access all features.' },
              { question: 'What resources are available for cognitive support?', answer: 'We offer learning materials, exercises, community support, and professional guidance.' },
              { question: 'How can I connect with the community?', answer: 'Join our community forums, participate in discussions, and attend virtual events.' },
              { question: 'Is my data secure and private?', answer: 'Yes, we use industry-standard encryption and never share your personal information.' },
              { question: 'How do I track my progress?', answer: 'Your dashboard shows detailed analytics of your activities and achievements.' }
            ].map((faq, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{faq.question}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>{faq.answer}</p>
                  </div>
                  <button className={`ml-4 p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} transition-colors`}>
                    <ChevronDownIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Still need help? Our support team is here for you</p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveSection('overview')}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              View Dashboard
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </button>
            <button 
              onClick={() => handleNavigation('/help')}
              className={`px-6 py-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} rounded-lg hover:bg-gray-300 transition-colors`}
            >
              Browse Help Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300 ease-in-out max-h-[96vh] overflow-hidden`}>
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${!isSidebarOpen && 'justify-center'}`}>
              <div className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              {isSidebarOpen && (
                <div className="ml-3">
                  <h2 className="text-lg font-bold text-gray-900">PriHub</h2>
                  <p className="text-xs text-gray-500">Dashboard</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                  }}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#142C52] to-[#16808D] text-white shadow-md'
                      : darkMode 
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {isSidebarOpen && (
                    <>
                      <span className="ml-3 flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          activeSection === item.id 
                            ? 'bg-white/20 text-white' 
                            : darkMode
                              ? 'bg-gray-600 text-gray-200'
                              : 'bg-gray-200 text-gray-700'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden max-h-[96vh]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className={`px-6 ${isSidebarOpen ? 'py-[calc(1rem+0.14vh)]' : 'py-[calc(1rem+0.14vh-0.25vh)]'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <div className="max-w-xl w-full">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search resources, activities, community..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestions(e.target.value.length > 0);
                      }}
                      onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSearch();
                          setShowSuggestions(false);
                        }
                      }}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                    />
                    
                    {/* Suggestions Dropdown */}
                    {showSuggestions && filteredSuggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                        {filteredSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion.keyword)}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{suggestion.icon}</span>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900">{suggestion.keyword}</div>
                                <div className="text-sm text-gray-500">{suggestion.description}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 ml-6">
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Bell className="h-5 w-5" />
                    {getUnreadCount() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {getUnreadCount()}
                      </span>
                    )}
                  </button>
                  
                  {/* Notifications Dropdown */}
                  {showNotifications && (
                    <div className="notification-dropdown absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-80 max-h-96 overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                          <button 
                            onClick={markAllNotificationsAsRead}
                            className="text-xs text-blue-600 hover:text-blue-800"
                          >
                            Mark all as read
                          </button>
                        </div>
                      </div>
                      
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div 
                              key={notification.id}
                              className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                                !notification.read ? 'bg-blue-50' : ''
                              }`}
                              onClick={() => markNotificationAsRead(notification.id)}
                            >
                              <div className="flex items-start space-x-3">
                                <span className={`text-lg ${notification.color}`}>
                                  {notification.icon}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm font-medium text-gray-900 ${
                                    !notification.read ? 'font-semibold' : ''
                                  }`}>
                                    {notification.title}
                                  </p>
                                  <p className="text-sm text-gray-600 truncate">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                )}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-4 text-center text-gray-500">
                            <p className="text-sm">No notifications</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-3 border-t border-gray-200">
                        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
                          View all notifications
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                    <p className="text-xs text-gray-500">{userData.role}</p>
                  </div>
                  <div className="relative">
                    <button 
                      onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                      className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
                    >
                      <span className="text-white text-sm font-bold">
                        {userData.photoURL ? (
                          <img 
                            src={userData.photoURL} 
                            alt="Profile" 
                            className="w-full h-full rounded-full object-cover"
                            onError={(e) => {
                              console.log('🖼️ Header image load error, falling back to initials');
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                            onLoad={() => {
                              console.log('🖼️ Header profile image loaded successfully:', userData.photoURL);
                            }}
                          />
                        ) : null}
                        <span className="text-white text-sm font-bold" style={{ display: userData.photoURL ? 'none' : 'flex' }}>
                          {getInitials(userData.name)}
                        </span>
                      </span>
                    </button>
                    
                    {/* Profile Dropdown Menu */}
                    {showProfileDropdown && (
                      <div className="profile-dropdown absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-48 py-2">
                        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => navigate('/dashboard/profile')}>
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-600" />
                            <span className="text-gray-900">View Profile</span>
                          </div>
                        </div>
                        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => navigate('/dashboard/settings')}>
                          <div className="flex items-center space-x-2">
                            <Settings className="h-4 w-4 text-gray-600" />
                            <span className="text-gray-900">Account Settings</span>
                          </div>
                        </div>
                        <div className="border-t border-gray-200 mt-2 pt-2"></div>
                        <div className="px-4 py-2 hover:bg-red-50 cursor-pointer transition-colors" onClick={handleLogout}>
                          <div className="flex items-center space-x-2">
                            <LogOut className="h-4 w-4 text-red-600" />
                            <span className="text-red-600 font-medium">Logout</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
