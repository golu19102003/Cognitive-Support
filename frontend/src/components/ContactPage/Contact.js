import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Globe, Users, ChevronRight, CheckCircle, AlertCircle, Star, Zap, Shield, Award, TrendingUp, Copy, ExternalLink, Calendar, User } from 'lucide-react';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal',
    company: '',
    phone: '',
    preferredContact: 'email'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    // Character count for message
    if (name === 'message') {
      setCharCount(value.length);
    }
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    validateField(name, e.target.value);
  };
  
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'normal',
      company: '',
      phone: '',
      preferredContact: 'email'
    });
    setErrors({});
    setTouched({});
    setCharCount(0);
  };

  const generateUniqueId = () => {
    return 'contact_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email';
        }
        break;
      case 'subject':
        if (!value.trim()) {
          newErrors.subject = 'Subject is required';
        } else if (value.length < 5) {
          newErrors.subject = 'Subject must be at least 5 characters';
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        }
        break;
      case 'phone':
        if (value && !/^\+?[\d\s-()]+$/.test(value)) {
          newErrors.phone = 'Please enter a valid phone number';
        }
        break;
    }
    
    setErrors(newErrors);
    return !newErrors[name];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const fields = ['name', 'email', 'subject', 'message'];
    let isValid = true;
    
    for (const field of fields) {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    }
    
    if (!isValid) {
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
        phone: true
      });
      return;
    }
    
    setIsLoading(true);
    setSuccess('');
    setSubmitCount(prev => prev + 1);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const ticketId = generateUniqueId();
      setSuccess(`✅ Message sent successfully! Ticket ID: ${ticketId}. We'll get back to you within 24 hours.`);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'normal',
        company: '',
        phone: '',
        preferredContact: 'email'
      });
      setCharCount(0);
      setErrors({});
      setTouched({});
      
    } catch (error) {
      setSuccess('❌ Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Advanced Header Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <img 
            src={isDarkMode ? "/image.png" : "/short_logo.png"} 
            alt="PriHub Logo" 
            className="h-16 w-auto mr-3 transition-all duration-300"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          <span style={{ color: '#16808D' }}>Contact</span>
          <span className={`transition-colors duration-300 ${
            isDarkMode ? 'text-white' : ''
          }`} style={{ color: isDarkMode ? '#ffffff' : '#000000' }}> Us</span>
        </h1>
        <p className={`text-xl transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>Get in touch with PriHub team</p>
        
        {/* Advanced Stats Section with More Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${
            isDarkMode ? 'bg-gray-800' : 'bg-blue-50'
          }`}>
            <div className="flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-[#1B9AAA]" />
            </div>
            <div className="text-2xl font-bold" style={{ color: '#1B9AAA' }}>10K+</div>
            <div className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Happy Clients</div>
            <div className={`text-xs mt-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>Since 2020</div>
          </div>
          <div className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${
            isDarkMode ? 'bg-gray-800' : 'bg-blue-50'
          }`}>
            <div className="flex items-center justify-center mb-3">
              <Star className="h-6 w-6 text-[#1B9AAA]" />
            </div>
            <div className="text-2xl font-bold" style={{ color: '#1B9AAA' }}>4.9</div>
            <div className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Rating</div>
            <div className={`text-xs mt-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>2,847 reviews</div>
          </div>
          <div className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${
            isDarkMode ? 'bg-gray-800' : 'bg-blue-50'
          }`}>
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-6 w-6 text-[#1B9AAA]" />
            </div>
            <div className="text-2xl font-bold" style={{ color: '#1B9AAA' }}>24h</div>
            <div className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Response Time</div>
            <div className={`text-xs mt-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>Business days</div>
          </div>
          <div className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${
            isDarkMode ? 'bg-gray-800' : 'bg-blue-50'
          }`}>
            <div className="flex items-center justify-center mb-3">
              <Shield className="h-6 w-6 text-[#1B9AAA]" />
            </div>
            <div className="text-2xl font-bold" style={{ color: '#1B9AAA' }}>100%</div>
            <div className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Secure</div>
            <div className={`text-xs mt-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>SSL Encrypted</div>
          </div>
        </div>

        <div className="mt-12">
          {/* Additional Info Bar */}
          <div className={`p-6 rounded-lg border transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-[#1B9AAA]" />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Instant Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>98% Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-[#1B9AAA]" />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div ref={formRef} className={`bg-white rounded-lg shadow p-8 transition-colors duration-300 ${
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
            {/* Personal Information Section */}
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
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] transition-colors duration-300 ${
                        errors.name && touched.name 
                          ? 'border-red-500 bg-red-50' 
                          : isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && touched.name && (
                      <div className="absolute mt-1 text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.name}
                      </div>
                    )}
                    {!errors.name && formData.name && touched.name && (
                      <div className="absolute mt-1 text-xs text-green-500 flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Looks good!
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] transition-colors duration-300 ${
                        errors.email && touched.email 
                          ? 'border-red-500 bg-red-50' 
                          : isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && touched.email && (
                      <div className="absolute mt-1 text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.email}
                      </div>
                    )}
                    {!errors.email && formData.email && touched.email && (
                      <div className="absolute mt-1 text-xs text-green-500 flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Valid email!
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] transition-colors duration-300 ${
                        errors.phone && touched.phone 
                          ? 'border-red-500 bg-red-50' 
                          : isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && touched.phone && (
                      <div className="absolute mt-1 text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white' 
                        : 'bg-white border-gray-300'
                    }`}
                    placeholder="Your company name (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Message Details Section */}
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
                  <label htmlFor="priority" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Priority Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['low', 'normal', 'high'].map((priority) => (
                      <label
                        key={priority}
                        className={`flex items-center justify-center px-3 py-2 border rounded-md cursor-pointer transition-all duration-300 ${
                          formData.priority === priority
                            ? 'bg-[#1B9AAA] text-white border-[#1B9AAA] shadow-md'
                            : isDarkMode
                              ? 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                              : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="priority"
                          value={priority}
                          checked={formData.priority === priority}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="capitalize">{priority}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] transition-colors duration-300 ${
                        errors.subject && touched.subject 
                          ? 'border-red-500 bg-red-50' 
                          : isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                      }`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && touched.subject && (
                      <div className="absolute mt-1 text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.subject}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredContact" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['email', 'phone'].map((method) => (
                      <label
                        key={method}
                        className={`flex items-center justify-center px-3 py-2 border rounded-md cursor-pointer transition-all duration-300 ${
                          formData.preferredContact === method
                            ? 'bg-[#1B9AAA] text-white border-[#1B9AAA] shadow-md'
                            : isDarkMode
                              ? 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                              : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] transition-colors duration-300 ${
                        errors.message && touched.message 
                          ? 'border-red-500 bg-red-50' 
                          : isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                      }`}
                      placeholder="Tell us more about your needs..."
                    ></textarea>
                    <div className={`absolute bottom-2 right-2 text-xs transition-colors duration-300 ${
                      charCount > 500 ? 'text-red-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {charCount}/500
                    </div>
                    {errors.message && touched.message && (
                      <div className="absolute mt-1 text-xs text-red-500 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className={`p-4 rounded-lg border transition-colors duration-300 ${
              isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex-1 flex justify-center items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#1B9AAA] to-[#4C97A8] hover:from-[#4C97A8] hover:to-[#1B9AAA] text-white'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1B9AAA]`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className={`flex-1 flex justify-center items-center py-3 px-6 border rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    isDarkMode 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Reset Form
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className={`bg-white rounded-lg shadow p-8 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
            <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Get in Touch</h2>
            <div className="space-y-4">
              <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-50 cursor-pointer ${
                isDarkMode ? 'hover:bg-gray-700' : ''
              }`}>
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#1B9AAA]" />
                </div>
                <div className="flex-1">
                  <p className={`font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Email</p>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>info@supportsystem.com</p>
                  <p className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Response time: 24 hours</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>

              <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-50 cursor-pointer ${
                isDarkMode ? 'hover:bg-gray-700' : ''
              }`}>
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#1B9AAA]" />
                </div>
                <div className="flex-1">
                  <p className={`font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Phone</p>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>+91 9680211602</p>
                  <p className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Available 9 AM - 6 PM</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>

              <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-50 cursor-pointer ${
                isDarkMode ? 'hover:bg-gray-700' : ''
              }`}>
                <div className="flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#1B9AAA]" />
                </div>
                <div className="flex-1">
                  <p className={`font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Address</p>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Jaipur, Rajasthan</p>
                  <p className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Get directions on map</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>

              <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-50 cursor-pointer ${
                isDarkMode ? 'hover:bg-gray-700' : ''
              }`}>
                <div className="flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#1B9AAA]" />
                </div>
                <div className="flex-1">
                  <p className={`font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Support Hours</p>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-lg shadow p-8 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
            <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Office Locations</h2>
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-[#1B9AAA] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Head Office</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Jaipur, Rajasthan</p>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Main operations and development center</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Globe className="h-3 w-3 mr-1" />
                        India
                      </span>
                      <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Users className="h-3 w-3 mr-1" />
                        50+ Staff
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-[#4C97A8] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Regional Office</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Mumbai, Maharashtra</p>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Sales and customer support</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Globe className="h-3 w-3 mr-1" />
                        India
                      </span>
                      <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Users className="h-3 w-3 mr-1" />
                        20+ Staff
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-r from-[#1B9AAA] to-[#4C97A8] rounded-lg shadow p-8 text-white`}>
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6" />
              <h3 className="text-xl font-bold">Quick Response</h3>
            </div>
            <p className="mb-4">We typically respond to all inquiries within 24 hours during business days.</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">Email Response</p>
                <p className="opacity-90">Within 24 hours</p>
              </div>
              <div>
                <p className="font-semibold">Phone Support</p>
                <p className="opacity-90">9 AM - 6 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
