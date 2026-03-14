import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, User, MessageSquare, 
  CheckCircle, AlertCircle, Award, Zap, TrendingUp, Calendar,
  Headphones, Shield, Globe, Users, Star, ChevronRight,
  Copy, Check, X, Menu, ArrowUp, MessageCircle, Heart,
  BarChart3, PieChart, Activity, Target, Timer, Settings,
  HelpCircle, FileText, Download, Upload, Filter, Search,
  Plus, Minus, Edit, Trash2, Save, RotateCw, Eye, EyeOff
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4">
            <img 
              src={isDarkMode ? "/image.png" : "/short_logo.png"} 
              alt="Prihub Logo" 
              className="h-16 w-auto mr-3 transition-all duration-300"
            />
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
          We're here to help you every step of the way. Reach out to our dedicated support team for assistance, guidance, and resources tailored to your needs.
        </p>
      </div>

      {/* Navigation Grid with Mixed Colors */}
      <div className="grid grid-cols-5 gap-4 mb-12">
        {/* Overview Section */}
        <div 
          onClick={() => setActiveSection('overview')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'overview' ? 'ring-2 ring-[#16808D]' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <Headphones className="h-8 w-8 text-[#16808D] mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Overview</h2>
        </div>

        {/* Features Section */}
        <div 
          onClick={() => setActiveSection('features')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'features' ? 'ring-2 ring-purple-600' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <Zap className="h-8 w-8 text-purple-600 mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Features</h2>
        </div>

        {/* Plans Section */}
        <div 
          onClick={() => setActiveSection('plans')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'plans' ? 'ring-2 ring-red-500' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <Star className="h-8 w-8 text-red-500 mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Plans</h2>
        </div>

        {/* FAQ Section */}
        <div 
          onClick={() => setActiveSection('faq')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'faq' ? 'ring-2 ring-blue-600' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <HelpCircle className="h-8 w-8 text-blue-600 mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>FAQ</h2>
        </div>

        {/* Stats Section */}
        <div 
          onClick={() => setActiveSection('stats')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'stats' ? 'ring-2 ring-green-600' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <BarChart3 className="h-8 w-8 text-green-600 mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Stats</h2>
        </div>
      </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="animate-fadeIn">
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#16808D]/10 to-purple-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Headphones className="h-16 w-16 text-[#16808D] mx-auto mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#16808D] to-purple-600 bg-clip-text text-transparent">
                  <span style={{ color: '#16808D' }}>Contact Overview</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
                  Connect with our dedicated support team through multiple channels. We provide comprehensive assistance tailored to your specific needs, ensuring you receive the help you deserve.
                </p>
              </div>
            </div>

            {/* Support Statistics */}
            <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-6">
                <TrendingUp className="h-12 w-12 text-[#16808D] mr-3 animate-pulse" />
                <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Live Support Statistics</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-[#16808D]/10 to-purple-500/10">
                  <Activity className="h-8 w-8 mx-auto mb-2 text-[#16808D]" />
                  <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{supportStats.avgResponseTime}</h3>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Avg Response Time</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{supportStats.satisfactionRate}</h3>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Satisfaction Rate</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{supportStats.activeAgents}</h3>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Active Agents</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                  <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{supportStats.ticketsResolved}</h3>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Tickets Resolved</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Contact Form */}
              <div ref={formRef} className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Send us a Message</h2>
                  {submitCount > 0 && (
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-green-500">{submitCount} submitted</span>
                    </div>
                  )}
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
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
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
          </div>
        )}

        {/* Features Section */}
{activeSection === 'features' && (
  <div className="animate-fadeIn">
    <div className="text-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-500/10 animate-pulse"></div>
      <div className="relative z-10">
        <Zap className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          <span style={{ color: 'purple' }}>Advanced Features</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
          Discover the powerful features that make our support system exceptional. From AI-powered assistance to global accessibility, we've got you covered.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {contactFeatures.map((feature, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:scale-105 ${
            index === 0 ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hover:border-purple-400' :
            index === 1 ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-emerald-400' :
            index === 2 ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-pink-400' :
            'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:border-red-400'
          } ${selectedFeature === index ? 'ring-4 ring-blue-500 shadow-xl' : ''} ${isDarkMode ? 'bg-gray-800' : ''}`}
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
              <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{feature.title}</h3>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{feature.description}</p>
              {selectedFeature === index && (
                <div className="mt-4 p-3 rounded-lg bg-white/50 dark:bg-gray-700/50">
                  <p className={`text-sm font-medium ${
                    isDarkMode ? 'text-blue-300' : 'text-blue-600'
                  }`}>Learn more about {feature.title.toLowerCase()}</p>
                </div>
              )}
            </div>
            <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
              selectedFeature === index ? 'rotate-90' : ''
            } ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        {/* Plans Section */}
{activeSection === 'plans' && (
  <div className="animate-fadeIn">
    <div className="text-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-500/10 animate-pulse"></div>
      <div className="relative z-10">
        <Star className="h-16 w-16 text-red-500 mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          <span style={{ color: 'red' }}>Support Plans</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
          Choose the perfect support plan that fits your needs. From free community support to enterprise solutions, we have options for everyone.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {supportPlans.map((plan, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
            plan.recommended
              ? 'ring-4 ring-red-500 border-red-500 bg-gradient-to-br from-red-50 to-orange-50'
              : index === 0 
                ? 'border-gray-300 bg-gradient-to-br from-gray-50 to-blue-50 hover:border-blue-400'
                : 'border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 hover:border-purple-400'
          } ${selectedPlan === plan.name ? 'ring-4 ring-green-500 shadow-xl' : ''} ${isDarkMode ? 'bg-gray-800' : ''}`}
        >
          {plan.recommended && (
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-3 py-1 rounded-full text-center mb-4 animate-pulse">
              ⭐ Recommended
            </div>
          )}
          <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>{plan.name}</h3>
          <p className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            plan.recommended ? 'text-red-600' : index === 0 ? 'text-blue-600' : 'text-purple-600'
          }`}>{plan.price}</p>
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <CheckCircle className={`h-4 w-4 ${
                  plan.recommended ? 'text-red-500' : index === 0 ? 'text-blue-500' : 'text-purple-500'
                }`} />
                <span className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSelectedPlan(plan.name)}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedPlan === plan.name
                ? 'bg-green-500 text-white hover:bg-green-600'
                : plan.recommended
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                  : index === 0
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            {selectedPlan === plan.name ? '✓ Selected' : 'Select Plan'}
          </button>
        </div>
      ))}
    </div>
  </div>
)}

        {/* FAQ Section */}
{activeSection === 'faq' && (
  <div className="animate-fadeIn">
    <div className="text-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 animate-pulse"></div>
      <div className="relative z-10">
        <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          <span style={{ color: 'blue' }}>Frequently Asked Questions</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
          Find quick answers to common questions about our services, features, and support options. Can't find what you're looking for? Feel free to reach out!
        </p>
      </div>
    </div>

    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] ${
            index === 0 
              ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-400'
              : index === 1
                ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400'
                : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:border-green-400'
          } ${isDarkMode ? 'bg-gray-800' : ''}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  index === 0 
                    ? 'bg-blue-100 text-blue-700'
                    : index === 1
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-green-100 text-green-700'
                }`}>{item.category}</span>
              </div>
              <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{item.question}</h3>
              <p className={`transition-colors duration-300 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{item.answer}</p>
            </div>
            <div className={`p-2 rounded-full ${
              index === 0 
                ? 'bg-blue-100 text-blue-600'
                : index === 1
                  ? 'bg-purple-100 text-purple-600'
                  : 'bg-green-100 text-green-600'
            }`}>
              <HelpCircle className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        {/* Stats Section */}
{activeSection === 'stats' && (
  <div className="animate-fadeIn">
    <div className="text-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-500/10 animate-pulse"></div>
      <div className="relative z-10">
        <BarChart3 className="h-16 w-16 text-green-600 mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          <span style={{ color: 'green' }}>Performance Analytics</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
          Track our performance metrics and see how we're continuously improving our support services. Real-time data updated every 10 seconds.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className={`p-6 rounded-lg border text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-400 ${
        isDarkMode ? 'bg-gray-800' : ''
      }`}>
        <Activity className="h-8 w-8 mx-auto mb-3 text-blue-500" />
        <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>{supportStats.avgResponseTime}</h3>
        <p className={`transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>Avg Response Time</p>
        <div className="mt-2 text-xs text-blue-500 font-medium">⬇️ Improving</div>
      </div>

      <div className={`p-6 rounded-lg border text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-400 ${
        isDarkMode ? 'bg-gray-800' : ''
      }`}>
        <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-500" />
        <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>{supportStats.satisfactionRate}</h3>
        <p className={`transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>Satisfaction Rate</p>
        <div className="mt-2 text-xs text-green-500 font-medium">⬆️ Excellent</div>
      </div>

      <div className={`p-6 rounded-lg border text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400 ${
        isDarkMode ? 'bg-gray-800' : ''
      }`}>
        <Users className="h-8 w-8 mx-auto mb-3 text-purple-500" />
        <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>{supportStats.activeAgents}</h3>
        <p className={`transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>Active Agents</p>
        <div className="mt-2 text-xs text-purple-500 font-medium">🟢 Online Now</div>
      </div>

      <div className={`p-6 rounded-lg border text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:border-orange-400 ${
        isDarkMode ? 'bg-gray-800' : ''
      }`}>
        <CheckCircle className="h-8 w-8 mx-auto mb-3 text-orange-500" />
        <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>{supportStats.ticketsResolved}</h3>
        <p className={`transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>Tickets Resolved</p>
        <div className="mt-2 text-xs text-orange-500 font-medium">📈 Growing</div>
      </div>
    </div>

    <div className={`mt-8 p-6 rounded-lg border bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200 ${
      isDarkMode ? 'bg-gray-800' : ''
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <RotateCw className="h-5 w-5 text-blue-500 animate-spin" />
          <span className={`text-sm font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Live updates every 10 seconds</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className={`text-sm font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>System Operational</span>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 space-y-3">
        <button
          onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
        
        <button
          onClick={() => setLiveChatStatus(liveChatStatus === 'online' ? 'offline' : 'online')}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            liveChatStatus === 'online'
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gray-500 hover:bg-gray-600'
          } text-white`}
        >
          <MessageCircle className="h-6 w-6" />
        </button>
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
