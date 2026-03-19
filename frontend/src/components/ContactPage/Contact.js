import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, User, MessageSquare, 
  CheckCircle, AlertCircle, Award, Zap, TrendingUp, Calendar,
  Headphones, Shield, Globe, Users, Star, ChevronRight,
  Copy, Check, X, Menu, ArrowUp, MessageCircle, Heart,
  BarChart3, PieChart, Activity, Target, Timer, Settings,
  HelpCircle, FileText, Download, Upload, Filter, Search,
  Plus, Minus, Edit, Trash2, Save, Refresh, Eye, EyeOff
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [submitCount, setSubmitCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [copied, setCopied] = useState('');
  
  // Advanced state variables
  const [activeSection, setActiveSection] = useState('overview');
  const [inquiryType, setInquiryType] = useState('general');
  const [urgency, setUrgency] = useState('normal');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showAdvancedForm, setShowAdvancedForm] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [liveChatStatus, setLiveChatStatus] = useState('online');
  const [supportStats, setSupportStats] = useState({
    avgResponseTime: '2 min',
    satisfactionRate: '98%',
    activeAgents: 12,
    ticketsResolved: 1247
  });

  const formRef = useRef(null);

  useEffect(() => {
    const checkDarkMode = () => {
      const theme = localStorage.getItem('theme');
      const darkMode = localStorage.getItem('darkMode');
      const isDark = localStorage.getItem('isDarkMode');
      
      if (theme === 'dark' || darkMode === 'true' || isDark === 'true') {
        setIsDarkMode(true);
      }
    };
    
    checkDarkMode();
    
    const interval = setInterval(() => {
      setSupportStats(prev => ({
        ...prev,
        avgResponseTime: Math.floor(Math.random() * 3 + 1) + ' min',
        ticketsResolved: prev.ticketsResolved + Math.floor(Math.random() * 3)
      }));
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Drag handlers for movable icon
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - iconPosition.x,
      y: e.clientY - iconPosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setIconPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSuccess('❌ Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setSuccess('❌ Please enter your email');
      return false;
    }
    if (!formData.message.trim()) {
      setSuccess('❌ Please enter your message');
      return false;
    }
    if (formData.message.length < 10) {
      setSuccess('❌ Message must be at least 10 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setSuccess('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const submitData = {
        ...formData,
        inquiryType,
        urgency,
        budget,
        timeline,
        selectedPlan,
        timestamp: new Date().toISOString()
      };
      
      console.log('Form submitted:', submitData);
      
      setSuccess('✅ Message sent successfully! We\'ll get back to you within 24 hours.');
      setSubmitCount(prev => prev + 1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setCharCount(0);
      setShowAnimation(true);
      
      setTimeout(() => setShowAnimation(false), 3000);
      
    } catch (error) {
      setSuccess('❌ Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Instant Response',
      description: 'Get immediate assistance from our AI-powered support system',
      color: 'text-blue-500'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Team',
      description: 'Connect with certified professionals specializing in cognitive support',
      color: 'text-green-500'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Platform',
      description: 'Your data is protected with enterprise-grade security measures',
      color: 'text-purple-500'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Support',
      description: '24/7 assistance available in multiple languages',
      color: 'text-orange-500'
    }
  ];

  const supportPlans = [
    {
      name: 'Basic',
      price: 'Free',
      features: ['Email Support', 'Community Access', 'Basic Resources'],
      recommended: false
    },
    {
      name: 'Premium',
      price: '$29/month',
      features: ['Priority Support', 'Live Chat', 'Personalized Assistance', 'Progress Tracking'],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Dedicated Support', 'Custom Solutions', 'API Access', 'Training Sessions'],
      recommended: false
    }
  ];

  const faqItems = [
    {
      category: 'Getting Started',
      question: 'How do I create an account?',
      answer: 'Click on the Sign Up button and follow the registration process. You\'ll need to provide basic information and verify your email.'
    },
    {
      category: 'Support',
      question: 'What support options are available?',
      answer: 'We offer email support, live chat, and phone support. Premium users get priority assistance with faster response times.'
    },
    {
      category: 'Features',
      question: 'Can I customize the interface?',
      answer: 'Yes! You can adjust text size, color themes, and layout preferences to suit your specific needs and accessibility requirements.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs with Complex Animation */}
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-30 animate-pulse ${isDarkMode ? 'bg-blue-600' : 'bg-blue-400'} shadow-2xl`}>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20"></div>
        </div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-30 animate-pulse delay-1000 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-400'} shadow-2xl`}>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 delay-1000"></div>
        </div>
        
        {/* Additional Floating Elements */}
        <div className={`absolute top-1/2 left-1/4 w-48 h-48 rounded-full opacity-20 animate-bounce ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-400'} shadow-xl`}></div>
        <div className={`absolute top-1/3 right-1/4 w-36 h-36 rounded-full opacity-25 animate-pulse delay-500 ${isDarkMode ? 'bg-cyan-600' : 'bg-cyan-400'} shadow-lg`}></div>
        
        {/* Moving Gradient Orbs */}
        <div className="absolute top-10 left-1/2 w-64 h-64 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}>
          <div className={`w-full h-full rounded-full bg-gradient-to-r ${isDarkMode ? 'from-blue-600 to-purple-600' : 'from-blue-400 to-purple-400'} shadow-2xl`}></div>
        </div>
        <div className="absolute bottom-10 left-1/3 w-56 h-56 rounded-full opacity-20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${isDarkMode ? 'from-purple-600 to-indigo-600' : 'from-purple-400 to-indigo-400'} shadow-2xl`}></div>
        </div>
        
        {/* Particle Effects */}
        <div className="absolute top-20 right-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-indigo-400 rounded-full opacity-40 animate-pulse delay-700"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-70 animate-ping"></div>
        
        {/* Communication-Themed Elements */}
        <div className="absolute top-32 right-20 w-8 h-8 border-2 border-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 border-2 border-purple-400 rounded-lg opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-indigo-400 rounded opacity-50 animate-bounce delay-500"></div>
        
        {/* Wave Effects */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <div className={`h-full bg-gradient-to-t ${isDarkMode ? 'from-blue-600 to-transparent' : 'from-blue-400 to-transparent'} animate-pulse`}></div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-24 opacity-10">
          <div className={`h-full bg-gradient-to-b ${isDarkMode ? 'from-purple-600 to-transparent' : 'from-purple-400 to-transparent'} animate-pulse delay-500`}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div 
                className="relative group"
                style={{
                  position: 'relative',
                  transform: `translate(${iconPosition.x}px, ${iconPosition.y}px)`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease'
                }}
              >
                <div 
                  className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 cursor-move select-none"
                  onMouseDown={handleMouseDown}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  <img 
                    src={isDarkMode ? "/image.png" : "/short_logo.png"} 
                    alt="Prihub Logo" 
                    className="h-16 w-auto mr-3 transform transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Floating animation when not dragging */}
                <div className={`absolute inset-0 rounded-full ${isDragging ? '' : 'animate-bounce'}`} style={{ animationDuration: '3s' }}></div>
              </div>
              <h1 className="text-4xl font-bold">
                <span style={{ color: '#16808D' }}>Contact</span>
                <span className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : ''
                }`} style={{ color: isDarkMode ? '#ffffff' : '#000000' }}> Support Center</span>
              </h1>
            </div>
          </div>
          <p className={`text-xl max-w-3xl mx-auto italic transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Comprehensive contact support and assistance services for individuals and families seeking cognitive accessibility guidance. We provide expert communication, dedicated support, and personalized solutions to ensure effective connection and professional assistance throughout your support journey with us.
        </p>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-5 gap-4 mb-12">
          {['overview', 'features', 'plans', 'faq', 'stats'].map((tab, index) => {
            const colors = [
              { ring: 'ring-[#16808D]', icon: 'text-[#16808D]', name: 'Overview' },
              { ring: 'ring-purple-600', icon: 'text-purple-600', name: 'Features' },
              { ring: 'ring-red-500', icon: 'text-red-500', name: 'Plans' },
              { ring: 'ring-blue-600', icon: 'text-blue-600', name: 'FAQ' },
              { ring: 'ring-green-600', icon: 'text-green-600', name: 'Stats' }
            ];
            const color = colors[index];
            const icons = [Zap, Star, Award, HelpCircle, BarChart3];
            const Icon = icons[index];
            
            return (
              <div 
                key={tab}
                onClick={() => setActiveSection(tab)}
                className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
                  activeSection === tab ? `ring-2 ${color.ring}` : ''
                } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <Icon className={`h-8 w-8 ${color.icon} mr-2`} />
                <h2 className={`text-sm font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{color.name}</h2>
              </div>
            );
          })}
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="animate-fadeIn">
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#16808D]/10 to-purple-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Headphones className="h-16 w-16 text-[#16808D] mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#16808D] to-purple-600 bg-clip-text text-transparent">
                  <span style={{ color: '#16808D' }}>Contact Support</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Get in touch with our dedicated support team. We're committed to providing comprehensive assistance and resources for individuals and families seeking cognitive support services.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    24/7 Support
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Expert Assistance
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Personalized Solutions
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-[#16808D] mx-auto mb-2" />
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Instant Response</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Get immediate assistance</p>
                </div>
              </div>
              <div className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>98% Satisfaction</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Customer success rate</p>
                </div>
              </div>
              <div className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="text-center">
                  <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Award Winning</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Excellence in service</p>
                </div>
              </div>
              <div className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24/7 Support</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Always available</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div ref={formRef} className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-6">
                  <Mail className="h-8 w-8 text-[#16808D] mr-3 animate-pulse" />
                  <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Send us a Message</h2>
                </div>
                
                {success && (
                  <div className={`border px-4 py-3 rounded mb-6 flex items-center space-x-2 ${
                    success.includes('✅') 
                      ? 'bg-green-50 border-green-200 text-green-600' 
                      : 'bg-red-50 border-red-200 text-red-600'
                  }`}>
                    {success.includes('✅') ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                    <span>{success}</span>
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                    isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <h3 className={`text-lg font-semibold mb-4 flex items-center transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      <User className="h-5 w-5 mr-2 text-[#1B9AAA]" />
                      Personal Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company || ''}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                          placeholder="Acme Corporation"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                    isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <h3 className={`text-lg font-semibold mb-4 flex items-center transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      <MessageSquare className="h-5 w-5 mr-2 text-[#1B9AAA]" />
                      Message Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                          placeholder="How can we help you?"
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                          placeholder="Please describe your issue or question in detail..."
                          required
                        />
                        <div className={`text-sm mt-2 text-right transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {charCount}/500 characters
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      loading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] transform hover:scale-105'
                    } text-white shadow-lg`}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                      isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-[#1B9AAA]" />
                          <div>
                            <p className={`font-semibold transition-colors duration-300 ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>Email</p>
                            <p className={`transition-colors duration-300 ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>info@supportsystem.com</p>
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard('info@supportsystem.com', 'email')}
                          className={`p-2 rounded-lg transition-colors duration-300 ${
                            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                          }`}
                        >
                          {copied === 'email' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                      isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-[#1B9AAA]" />
                          <div>
                            <p className={`font-semibold transition-colors duration-300 ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>Phone</p>
                            <p className={`transition-colors duration-300 ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>+91 9680211602</p>
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard('+91 9680211602', 'phone')}
                          className={`p-2 rounded-lg transition-colors duration-300 ${
                            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                          }`}
                        >
                          {copied === 'phone' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                      isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-[#1B9AAA]" />
                        <div>
                          <p className={`font-semibold transition-colors duration-300 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>Address</p>
                          <p className={`transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            123 Support Street<br />
                            Kota, Rajasthan 324005<br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                      isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-[#1B9AAA]" />
                        <div>
                          <p className={`font-semibold transition-colors duration-300 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>Support Hours</p>
                          <p className={`transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                            Saturday: 10:00 AM - 4:00 PM IST<br />
                            Sunday: Emergency Support Only
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Office Locations</h2>
                  
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                      isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Headquarters - Kota</h3>
                      <p className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Main Support Center<br />
                        Rajasthan Technical University Campus<br />
                        Kota, Rajasthan 324005
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                      isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Regional Office - Delhi</h3>
                      <p className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        North India Support Hub<br />
                        Connaught Place<br />
                        New Delhi 110001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Inspirational Quote Section */}
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-teal-600 pl-6 py-4">
                "Support is not just about answering questions—it's about building bridges of understanding that connect individuals with the resources, guidance, and compassion they need to thrive on their unique cognitive journey."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Every conversation is an opportunity to empower, educate, and uplift. Through dedicated support and genuine care, we transform challenges into stepping stones toward growth and independence.
              </p>
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeSection === 'features' && (
          <div className="animate-fadeIn">
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Star className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  <span style={{ color: 'purple' }}>Advanced Features</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Discover our comprehensive suite of features designed to provide exceptional support and assistance for cognitive disabilities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    AI-Powered Technology
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Advanced Accessibility
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Comprehensive Support
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer ${
                    selectedFeature === index 
                      ? 'ring-2 ring-purple-500 bg-gradient-to-r from-purple-50 to-blue-50' 
                      : isDarkMode 
                        ? 'bg-gray-800 border-gray-700 hover:border-purple-600' 
                        : 'bg-white border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${
                      index === 0 ? 'bg-blue-100 text-blue-600' :
                      index === 1 ? 'bg-green-100 text-green-600' :
                      index === 2 ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{feature.title}</h3>
                      <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{feature.description}</p>
                      {selectedFeature === index && (
                        <div className={`mt-4 p-4 rounded-lg border-l-4 ${
                          index === 0 ? 'border-blue-500 bg-blue-50' :
                          index === 1 ? 'border-green-500 bg-green-50' :
                          index === 2 ? 'border-purple-500 bg-purple-50' :
                          'border-orange-500 bg-orange-50'
                        }`}>
                          <p className="text-sm font-semibold">
                            {index === 0 && 'Get instant AI-powered responses within seconds'}
                            {index === 1 && 'Connect with certified professionals 24/7'}
                            {index === 2 && 'Enterprise-grade security with end-to-end encryption'}
                            {index === 3 && 'Multi-language support with real-time translation'}
                          </p>
                        </div>
                      )}
                    </div>
                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 flex-shrink-0 ${
                      selectedFeature === index ? 'rotate-90 text-purple-600' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Inspirational Quote Section */}
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-purple-600 pl-6 py-4">
                "Innovation in cognitive support is not just about technology—it's about creating tools that adapt to human needs, celebrate diverse abilities, and open doors to new possibilities for every individual."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                The right features can transform daily challenges into opportunities for growth and independence. With thoughtful design and user-centered innovation, technology becomes a bridge to empowerment and inclusion.
              </p>
            </div>
          </div>
        )}

        {/* Plans Section */}
        {activeSection === 'plans' && (
          <div className="animate-fadeIn">
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Award className="h-16 w-16 text-red-500 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  <span style={{ color: 'red' }}>Support Plans</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
                  Choose the perfect support plan tailored to your needs. From basic assistance to enterprise solutions, we have options for everyone.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-105 relative ${
                    plan.recommended
                      ? 'ring-2 ring-red-500 border-red-500 bg-gradient-to-br from-red-50 to-orange-50'
                      : selectedPlan === plan.name
                        ? 'ring-2 ring-green-500 border-green-500'
                        : isDarkMode 
                          ? 'bg-gray-800 border-gray-700 hover:border-red-600' 
                          : 'bg-white border-gray-200 hover:border-red-300'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-4 py-1 rounded-full text-center shadow-lg animate-pulse">
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-3 rounded-full mb-4 ${
                      index === 0 ? 'bg-gray-100 text-gray-600' :
                      index === 1 ? 'bg-red-100 text-red-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <Award className="h-8 w-8" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{plan.name}</h3>
                    <p className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                      index === 0 ? 'text-gray-600' :
                      index === 1 ? 'text-red-600' :
                      'text-orange-600'
                    }`}>{plan.price}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className={`p-1 rounded-full ${
                          index === 0 ? 'bg-gray-200' :
                          index === 1 ? 'bg-red-200' :
                          'bg-orange-200'
                        }`}>
                          <CheckCircle className={`h-4 w-4 ${
                            index === 0 ? 'text-gray-600' :
                            index === 1 ? 'text-red-600' :
                            'text-orange-600'
                          }`} />
                        </div>
                        <span className={`transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedPlan === plan.name
                        ? 'bg-green-500 text-white shadow-lg'
                        : index === 0
                          ? 'bg-gray-500 text-white hover:bg-gray-600'
                          : index === 1
                            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 shadow-lg'
                            : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 shadow-lg'
                    }`}
                  >
                    {selectedPlan === plan.name ? '✓ Selected' : `Choose ${plan.name}`}
                  </button>
                </div>
              ))}
            </div>
            
            {/* Inspirational Quote Section */}
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-orange-600 pl-6 py-4">
                "Support plans are not just about services—they're about creating pathways to independence, dignity, and quality of life. Every plan is a commitment to empowering individuals to reach their full potential."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                The right support plan can transform daily living from challenge to opportunity. With personalized care and comprehensive resources, every individual can build a foundation for growth and success.
              </p>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeSection === 'faq' && (
          <div className="animate-fadeIn">
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  <span style={{ color: 'blue' }}>Frequently Asked Questions</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
                  Find answers to common questions about our cognitive support services, features, and how we can help you or your loved ones.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-600' 
                      : 'bg-white border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.category === 'Getting Started' 
                            ? 'bg-blue-100 text-blue-700'
                            : item.category === 'Support'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-purple-100 text-purple-700'
                        }`}>
                          {item.category}
                        </div>
                        <div className={`p-2 rounded-full ${
                          index === 0 ? 'bg-blue-100 text-blue-600' :
                          index === 1 ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          <HelpCircle className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{item.question}</h3>
                      <div className={`p-4 rounded-lg border-l-4 mb-3 ${
                        index === 0 ? 'border-blue-500 bg-blue-50' :
                        index === 1 ? 'border-green-500 bg-green-50' :
                        'border-purple-500 bg-purple-50'
                      }`}>
                        <p className={`leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>{item.answer}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className={`flex items-center space-x-1 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          <Clock className="h-4 w-4" />
                          <span>Updated recently</span>
                        </span>
                        <span className={`flex items-center space-x-1 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          <Star className="h-4 w-4" />
                          <span>Helpful</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`mt-8 p-6 rounded-lg border text-center ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
            }`}>
              <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Still have questions?</h3>
              <p className={`mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Can't find the answer you're looking for? Our support team is here to help.</p>
              <button
                onClick={() => setActiveSection('overview')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Support Team
              </button>
            </div>
            
            {/* Inspirational Quote Section */}
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-blue-600 pl-6 py-4">
                "Questions are not signs of uncertainty—they are stepping stones to understanding. Every inquiry opens doors to knowledge, empowerment, and the confidence to make informed decisions about cognitive support."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Knowledge is the foundation of empowerment. By providing clear answers and thoughtful guidance, we help individuals and families navigate their cognitive journey with confidence and hope.
              </p>
            </div>
          </div>
        )}

        {/* Stats Section */}
        {activeSection === 'stats' && (
          <div className="animate-fadeIn">
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <BarChart3 className="h-16 w-16 text-green-600 mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  <span style={{ color: 'green' }}>Live Performance Analytics</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
                  Real-time metrics and performance data showing our commitment to excellence in cognitive support services.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={`p-6 rounded-lg border text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Activity className="h-8 w-8" />
                </div>
                <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{supportStats.avgResponseTime}</h3>
                <p className={`font-semibold text-blue-600 mb-2`}>Avg Response Time</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Lightning fast replies</p>
              </div>

              <div className={`p-6 rounded-lg border text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{supportStats.satisfactionRate}</h3>
                <p className={`font-semibold text-green-600 mb-2`}>Satisfaction Rate</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Customer happiness</p>
              </div>

              <div className={`p-6 rounded-lg border text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{supportStats.activeAgents}</h3>
                <p className={`font-semibold text-purple-600 mb-2`}>Active Agents</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Ready to help you</p>
              </div>

              <div className={`p-6 rounded-lg border text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="inline-flex p-4 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{supportStats.ticketsResolved}</h3>
                <p className={`font-semibold text-orange-600 mb-2`}>Tickets Resolved</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Issues solved successfully</p>
              </div>
            </div>
            
            <div className={`mt-8 p-6 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-gradient-to-r from-green-50 to-teal-50 border-green-200'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Real-Time Monitoring</h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Our systems update every 10 seconds to provide you with the most current performance metrics.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-sm font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Live</span>
                </div>
              </div>
            </div>
            
            {/* Inspirational Quote Section */}
            <div className="text-center py-8">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-green-600 pl-6 py-4">
                "Numbers tell stories of impact, but behind every statistic is a human life transformed. Our success is measured not in data points, but in the dignity, independence, and joy we help individuals achieve every day."
              </blockquote>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Performance metrics reflect our commitment to excellence, but the true measure of success lies in the empowered lives and strengthened communities we build through compassionate, effective cognitive support.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Success Animation */}
      {showAnimation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
            <p className="text-2xl font-bold text-green-500">Message Sent Successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
