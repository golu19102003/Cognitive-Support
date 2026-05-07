import React, { useState, useEffect } from 'react';
import { 
  Bot, MessageSquare, Clock, Shield, Zap, HelpCircle, 
  ChevronRight, Star, Users, Brain, Mic, Headphones,
  Volume2, Eye, Settings, Sparkles, ArrowRight, Target, BookOpen
} from 'lucide-react';

const AISmartAssistant = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today with accessibility features or platform navigation?", sender: 'ai', timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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

  const generateAIResponse = (userMessage) => {
    const responses = [
      "I can help you with accessibility features! Would you like to know about screen readers, voice commands, or visual aids?",
      "For platform navigation, you can use keyboard shortcuts. Press Tab to navigate and Enter to select.",
      "I recommend checking out our accessibility settings in the preferences menu for personalized options.",
      "Our AI assistant is available 24/7 to help you with any accessibility questions you might have.",
      "You can enable high contrast mode and adjust font sizes in the accessibility settings for better visibility.",
      "For cognitive support, try our focus mode and reminder features to help with daily tasks.",
      "Our community forums are a great place to connect with others who share similar experiences.",
      "Would you like me to guide you through setting up your accessibility preferences?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Chat naturally with our AI assistant that understands context and provides personalized responses.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Get help anytime, anywhere. Our AI assistant is always ready to assist you.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your conversations are secure and private. We use advanced encryption to protect your data.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant responses and quick solutions to your questions and accessibility needs.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Brain,
      title: 'Smart Learning',
      description: 'Our AI learns from your preferences to provide increasingly personalized assistance.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: HelpCircle,
      title: 'Accessibility Expert',
      description: 'Specialized knowledge in accessibility features and cognitive support technologies.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const capabilities = [
    'Platform Navigation Assistance',
    'Accessibility Feature Guidance',
    'Personalized Recommendations',
    'Technical Support',
    'Community Connection Help',
    'Educational Resource Discovery',
    'Cognitive Support Strategies',
    'Multi-language Support'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'User with Visual Impairment',
      content: 'The AI assistant has been a game-changer for me. It helps me navigate the platform effortlessly and finds the accessibility features I need.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Caregiver',
      content: 'As a caregiver, I rely on the AI assistant to get quick answers and support for my client\'s specific needs.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Educational Specialist',
      content: 'The AI assistant provides excellent guidance on educational resources and accessibility tools for my students.',
      rating: 4
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full">
                  <Bot className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className={`text-3xl font-bold ml-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                AI Smart Assistant
              </h1>
            </div>
            <p className={`text-lg max-w-2xl mx-auto mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Intelligent chatbot providing personalized accessibility guidance and platform navigation support.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4.7</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(9.8K users)</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'}`}>
                24/7 Available
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                New Feature
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Try AI Assistant
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['overview', 'features', 'capabilities', 'technology', 'use-cases', 'testimonials', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Natural Conversations
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Chat naturally with our AI assistant that understands context, intent, and nuances in your questions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Context-aware responses</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Multi-language support</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Emotional intelligence</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    24/7 Availability
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Get help anytime, anywhere. Our AI assistant is always ready to assist you with instant responses.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Instant responses</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No downtime</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Global availability</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Privacy Protected
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your conversations are secure and private. We use advanced encryption to protect your data.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>GDPR compliant</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Data anonymization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Lightning Fast
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Get instant responses and quick solutions to your questions and accessibility needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sub-second response time</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Optimized algorithms</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Real-time processing</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Smart Learning
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our AI learns from your preferences to provide increasingly personalized assistance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Adaptive responses</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Preference learning</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Personalized suggestions</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-8 w-8 text-pink-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Accessibility Expert
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Specialized knowledge in accessibility features and cognitive support technologies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-pink-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Screen reader expertise</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-pink-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Cognitive support</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-pink-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Accessibility best practices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                AI Assistant Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Query Accuracy
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">&lt;1s</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Response Time
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Languages
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
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
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'capabilities' && (
          <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AI Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'technology' && (
          <div className="space-y-6">
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Advanced AI Technology
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Natural Language Processing
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    State-of-the-art NLP models understand context, intent, and nuances in user queries, providing accurate and relevant responses.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Context-aware conversations</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Multi-language support</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Sentiment analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Machine Learning Models
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Custom-trained models specifically designed for accessibility support and cognitive assistance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Accessibility expertise</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Continuous learning</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Personalized responses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'use-cases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Visual Impairment Support',
                description: 'Helps users with visual impairments navigate the platform using voice commands and audio descriptions.',
                icon: Eye,
                features: ['Screen reader guidance', 'Voice navigation', 'Audio descriptions', 'High contrast tips']
              },
              {
                title: 'Cognitive Assistance',
                description: 'Provides step-by-step guidance for users with cognitive challenges to complete tasks.',
                icon: Brain,
                features: ['Task breakdown', 'Memory aids', 'Focus assistance', 'Simplified instructions']
              },
              {
                title: 'Platform Navigation',
                description: 'Guides users through complex platform features and helps them find relevant resources.',
                icon: Target,
                features: ['Feature discovery', 'Shortcut guidance', 'Tutorial assistance', 'Resource location']
              },
              {
                title: 'Accessibility Setup',
                description: 'Assists users in configuring accessibility settings for their specific needs.',
                icon: Settings,
                features: ['Settings guidance', 'Preference setup', 'Feature activation', 'Customization help']
              },
              {
                title: 'Emergency Support',
                description: 'Provides immediate assistance for users facing accessibility barriers or technical issues.',
                icon: Shield,
                features: ['Crisis support', 'Technical help', 'Emergency contacts', 'Quick solutions']
              },
              {
                title: 'Learning Resources',
                description: 'Recommends educational content and learning materials based on user needs and abilities.',
                icon: BookOpen,
                features: ['Content suggestions', 'Learning paths', 'Skill development', 'Resource discovery']
              }
            ].map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {useCase.title}
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <ChevronRight className="h-3 w-3 text-indigo-600 mr-2" />
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

        {activeTab === 'faq' && (
          <div className="space-y-4">
            {[
              {
                question: 'How does the AI assistant understand accessibility needs?',
                answer: 'The AI assistant is trained on extensive accessibility data and can recognize patterns related to different disabilities and accessibility requirements. It provides personalized recommendations based on user interactions and preferences.'
              },
              {
                question: 'Is my conversation data secure and private?',
                answer: 'Yes, all conversations are encrypted and processed securely. We follow strict privacy protocols and never share personal information. Your data is used only to improve the AI assistant\'s performance.'
              },
              {
                question: 'Can the AI assistant help with specific accessibility tools?',
                answer: 'Absolutely! The AI assistant has comprehensive knowledge of screen readers, voice commands, keyboard shortcuts, and other accessibility tools. It can provide step-by-step guidance for setup and usage.'
              },
              {
                question: 'How accurate are the AI assistant\'s recommendations?',
                answer: 'The AI assistant achieves over 95% accuracy for accessibility-related queries. It continuously learns from user feedback and updates its knowledge base to provide increasingly accurate responses.'
              },
              {
                question: 'Can I use the AI assistant in multiple languages?',
                answer: 'Yes, the AI assistant supports over 50 languages and can provide accessibility guidance in your preferred language. It also understands cultural nuances in accessibility needs.'
              },
              {
                question: 'What if the AI assistant can\'t answer my question?',
                answer: 'If the AI assistant cannot provide a satisfactory answer, it will connect you with human support specialists who can help with more complex accessibility needs.'
              }
            ].map((faq, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {faq.question}
                    </h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.content}"
                </p>
                <div>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chat Interface Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className={`w-full max-w-2xl mx-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-2xl`}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bot className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    AI Assistant
                  </h3>
                  {isTyping && (
                    <div className="ml-3 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                      <span className="text-sm text-green-500">Typing...</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>✕</span>
                </button>
              </div>
            </div>
            <div className="p-6 h-96 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-indigo-200' : isDarkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`flex-1 px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  disabled={isTyping}
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={isTyping || inputMessage.trim() === ''}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISmartAssistant;
