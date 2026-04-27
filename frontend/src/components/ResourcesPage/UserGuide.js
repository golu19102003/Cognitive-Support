import React, { useState } from 'react';
import { Book, Users, MessageSquare, Bell, Eye, Zap, ChevronRight, ArrowRight, CheckCircle, PlayCircle, Code, Settings, Heart, Brain, Target, Clock, Star, Award, TrendingUp, Shield, HelpCircle, Lightbulb, Monitor, Smartphone, Volume2, Keyboard, Mouse, Search, Filter, Download, Share2, Bookmark, ThumbsUp, MessageSquareQuote, FileText, Video, Headphones, Globe, Lock, BarChart3, Activity, Database, Cloud, Cpu, Wifi, Smartphone as PhoneIcon } from 'lucide-react';

const UserGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedTutorial, setExpandedTutorial] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sections = [
    { id: 'overview', name: 'Overview', icon: Book },
    { id: 'tutorials', name: 'Step-by-Step Tutorials', icon: PlayCircle },
    { id: 'visual', name: 'Visual Guides', icon: Monitor },
    { id: 'accessibility', name: 'Accessibility Features', icon: Eye },
    { id: 'tools', name: 'Tools & Features', icon: Settings },
    { id: 'community', name: 'Community Support', icon: Users },
    { id: 'advanced', name: 'Advanced Tips', icon: Zap },
    { id: 'faq', name: 'FAQ', icon: HelpCircle }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with PriHub',
      difficulty: 'Beginner',
      duration: '10 min',
      category: 'basics',
      steps: [
        'Create your account and complete profile setup',
        'Navigate through the main dashboard',
        'Set up your accessibility preferences',
        'Explore available features and tools'
      ],
      videoUrl: '#',
      description: 'Learn the basics of using PriHub platform effectively'
    },
    {
      id: 2,
      title: 'Using Accessibility Tools',
      difficulty: 'Intermediate',
      duration: '15 min',
      category: 'accessibility',
      steps: [
        'Enable screen reader compatibility',
        'Configure high contrast mode',
        'Set up keyboard navigation',
        'Customize text size and spacing'
      ],
      videoUrl: '#',
      description: 'Master accessibility features for better user experience'
    },
    {
      id: 3,
      title: 'Chatbot Assistant Guide',
      difficulty: 'Beginner',
      duration: '8 min',
      category: 'chatbot',
      steps: [
        'Access the chatbot interface',
        'Use voice commands and text input',
        'Get help with daily tasks',
        'Customize chatbot responses'
      ],
      videoUrl: '#',
      description: 'Learn how to effectively use the AI chatbot assistant'
    },
    {
      id: 4,
      title: 'Setting Up Reminders',
      difficulty: 'Beginner',
      duration: '5 min',
      category: 'reminders',
      steps: [
        'Create medication reminders',
        'Set up appointment alerts',
        'Configure daily routine notifications',
        'Manage reminder preferences'
      ],
      videoUrl: '#',
      description: 'Never miss important events with smart reminders'
    }
  ];

  const visualGuides = [
    {
      id: 1,
      title: 'Dashboard Navigation',
      image: '/images/dashboard-guide.png',
      category: 'navigation',
      description: 'Complete overview of the main dashboard interface',
      hotspots: [
        { x: 20, y: 30, label: 'Main Menu' },
        { x: 50, y: 20, label: 'Quick Actions' },
        { x: 80, y: 40, label: 'User Profile' }
      ]
    },
    {
      id: 2,
      title: 'Accessibility Settings',
      image: '/images/accessibility-guide.png',
      category: 'accessibility',
      description: 'How to configure accessibility preferences',
      hotspots: [
        { x: 30, y: 25, label: 'Visual Settings' },
        { x: 70, y: 25, label: 'Audio Settings' },
        { x: 50, y: 50, label: 'Navigation Settings' }
      ]
    },
    {
      id: 3,
      title: 'Chatbot Interface',
      image: '/images/chatbot-guide.png',
      category: 'chatbot',
      description: 'Understanding chatbot features and controls',
      hotspots: [
        { x: 25, y: 70, label: 'Text Input' },
        { x: 75, y: 70, label: 'Voice Input' },
        { x: 50, y: 30, label: 'Chat History' }
      ]
    }
  ];

  const accessibilityFeatures = [
    {
      category: 'Visual',
      icon: Eye,
      features: [
        { name: 'Screen Reader Support', description: 'Full compatibility with NVDA, JAWS, and VoiceOver' },
        { name: 'High Contrast Mode', description: 'Enhanced color contrast for better visibility' },
        { name: 'Text Resizing', description: 'Adjust text size without breaking layout' },
        { name: 'Color Blindness Support', description: 'Color-blind friendly design patterns' }
      ]
    },
    {
      category: 'Audio',
      icon: Volume2,
      features: [
        { name: 'Text-to-Speech', description: 'Convert text content to natural speech' },
        { name: 'Audio Descriptions', description: 'Detailed audio descriptions for visual content' },
        { name: 'Volume Control', description: 'Separate volume controls for different audio elements' },
        { name: 'Sound Alerts', description: 'Customizable audio notifications' }
      ]
    },
    {
      category: 'Motor',
      icon: Keyboard,
      features: [
        { name: 'Keyboard Navigation', description: 'Full keyboard accessibility without mouse' },
        { name: 'Voice Commands', description: 'Control the app using voice commands' },
        { name: 'Switch Control', description: 'Support for switch input devices' },
        { name: 'Touch Optimization', description: 'Large touch targets for mobile devices' }
      ]
    },
    {
      category: 'Cognitive',
      icon: Brain,
      features: [
        { name: 'Simple Interface', description: 'Clean, distraction-free design' },
        { name: 'Reading Mode', description: 'Focus mode for better reading comprehension' },
        { name: 'Progress Indicators', description: 'Clear visual feedback for all actions' },
        { name: 'Error Prevention', description: 'Confirmations for destructive actions' }
      ]
    }
  ];

  const toolsAndFeatures = [
    {
      name: 'AI Chatbot',
      icon: MessageSquare,
      description: 'Intelligent assistant for daily tasks and questions',
      benefits: ['24/7 Availability', 'Natural Language Processing', 'Multi-language Support', 'Context Awareness'],
      usage: 'Click the chat bubble or press Ctrl+C to activate'
    },
    {
      name: 'Smart Reminders',
      icon: Bell,
      description: 'Intelligent reminder system for medications and appointments',
      benefits: ['Customizable Schedules', 'Multiple Notification Types', 'Recurring Reminders', 'Priority Levels'],
      usage: 'Access through the Reminders tab in the main menu'
    },
    {
      name: 'Accessibility Toolbar',
      icon: Settings,
      description: 'Quick access to all accessibility features',
      benefits: ['One-Click Activation', 'Profile Saving', 'Quick Settings', 'Reset Options'],
      usage: 'Found in the top-right corner of every page'
    },
    {
      name: 'Community Forum',
      icon: Users,
      description: 'Connect with other users and share experiences',
      benefits: ['Peer Support', 'Expert Advice', 'Resource Sharing', 'Success Stories'],
      usage: 'Navigate to Community section from main menu'
    }
  ];

  const communitySupport = [
    {
      type: 'Peer Support Groups',
      icon: Heart,
      description: 'Connect with others facing similar challenges',
      features: ['Topic-based Groups', 'Scheduled Meetings', 'Private Messaging', 'Resource Sharing'],
      joinProcess: 'Browse available groups and request to join'
    },
    {
      type: 'Expert Q&A',
      icon: Award,
      description: 'Get answers from healthcare professionals and experts',
      features: ['Verified Experts', 'Anonymous Questions', 'Detailed Responses', 'Follow-up Support'],
      joinProcess: 'Submit questions through the Expert Q&A section'
    },
    {
      type: 'Success Stories',
      icon: Star,
      description: 'Learn from others\' experiences and achievements',
      features: ['Real Stories', 'Progress Tracking', 'Motivation Tips', 'Strategy Sharing'],
      joinProcess: 'Read and share your own success story'
    },
    {
      type: 'Resource Library',
      icon: Book,
      description: 'Access curated resources and educational materials',
      features: ['Categorized Content', 'Downloadable Materials', 'Regular Updates', 'Expert Reviews'],
      joinProcess: 'Browse the library and bookmark useful resources'
    }
  ];

  const advancedTips = [
    {
      category: 'Productivity',
      icon: Zap,
      tips: [
        'Use keyboard shortcuts for faster navigation',
        'Create custom reminder templates',
        'Set up automated daily routines',
        'Use voice commands for hands-free operation'
      ]
    },
    {
      category: 'Personalization',
      icon: Settings,
      tips: [
        'Create multiple accessibility profiles',
        'Customize chatbot personality and responses',
        'Set up personalized notification sounds',
        'Create custom dashboard layouts'
      ]
    },
    {
      category: 'Integration',
      icon: Target,
      tips: [
        'Connect with calendar applications',
        'Integrate with healthcare providers',
        'Sync with wearable devices',
        'Export data for analysis'
      ]
    },
    {
      category: 'Security',
      icon: Shield,
      tips: [
        'Set up two-factor authentication',
        'Configure privacy settings',
        'Manage data sharing preferences',
        'Regular security checkups'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Go to the login page and click "Forgot Password". Enter your email address and follow the instructions sent to your email.',
      category: 'account'
    },
    {
      question: 'Can I use PriHub on multiple devices?',
      answer: 'Yes, PriHub works on desktop, tablet, and mobile devices. Your data syncs automatically across all logged-in devices.',
      category: 'general'
    },
    {
      question: 'How do I enable screen reader support?',
      answer: 'Enable your screen reader (NVDA, JAWS, or VoiceOver) and PriHub will automatically detect and optimize for screen reader use.',
      category: 'accessibility'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Yes, we use industry-standard encryption and follow HIPAA guidelines for data protection. Your privacy is our top priority.',
      category: 'security'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'Use the Help button in the app, email support@prihub.com, or call our 24/7 helpline at 1-800-PRIHUB.',
      category: 'support'
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => 
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || tutorial.category === selectedCategory)
  );

  const renderOverview = () => (
    <div className="p-6 space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Book className="h-8 w-8" />
          <h2 className="text-2xl font-bold">Welcome to PriHub User Guide</h2>
        </div>
        <p className="text-blue-100 mb-6 max-w-3xl">
          Complete documentation for mastering accessibility tools, AI chatbot assistance, smart reminders, and community support.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">50+</div>
            <p className="text-sm text-blue-100">Guides</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">25+</div>
            <p className="text-sm text-blue-100">Videos</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">15+</div>
            <p className="text-sm text-blue-100">Visual Guides</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">24/7</div>
            <p className="text-sm text-blue-100">Support</p>
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                activeSection === section.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className={`h-6 w-6 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-600'}`} />
                <ChevronRight className={`h-4 w-4 transition-transform ${
                  activeSection === section.id ? 'text-blue-600 rotate-90' : 'text-gray-400'
                }`} />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{section.name}</h3>
              <p className="text-xs text-gray-600">
                {section.id === 'overview' && 'Get started'}
                {section.id === 'tutorials' && 'Step-by-step'}
                {section.id === 'visual' && 'Visual guides'}
                {section.id === 'accessibility' && 'Accessibility'}
                {section.id === 'tools' && 'Tools & features'}
                {section.id === 'community' && 'Community'}
                {section.id === 'advanced' && 'Advanced tips'}
                {section.id === 'faq' && 'FAQ'}
              </p>
            </button>
          );
        })}
      </div>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900 text-sm">Quick Start</h3>
              <p className="text-xs text-green-700">Get started in 5 minutes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Zap className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900 text-sm">Pro Tips</h3>
              <p className="text-xs text-blue-700">Use Ctrl+K for search</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Award className="h-5 w-5 text-purple-600" />
            <div>
              <h3 className="font-semibold text-purple-900 text-sm">Expert Level</h3>
              <p className="text-xs text-purple-700">Master advanced features</p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Lightbulb className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Getting Started</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-xs">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Create Account</h4>
              <p className="text-xs text-gray-600">Sign up and complete profile</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-xs">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Explore Features</h4>
              <p className="text-xs text-gray-600">Navigate the dashboard</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-xs">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Customize Settings</h4>
              <p className="text-xs text-gray-600">Set up preferences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTutorials = () => (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Step-by-Step Tutorials</h2>
          <p className="text-sm text-gray-600">Master PriHub features with guided tutorials</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="basics">Basics</option>
            <option value="accessibility">Accessibility</option>
            <option value="chatbot">Chatbot</option>
            <option value="reminders">Reminders</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <PlayCircle className="h-4 w-4 text-blue-600" />
            <div>
              <p className="text-lg font-bold text-blue-900">{filteredTutorials.length}</p>
              <p className="text-xs text-blue-700">Total</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <div>
              <p className="text-lg font-bold text-green-900">
                {filteredTutorials.filter(t => t.difficulty === 'Beginner').length}
              </p>
              <p className="text-xs text-green-700">Beginner</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-yellow-600" />
            <div>
              <p className="text-lg font-bold text-yellow-900">
                {filteredTutorials.filter(t => t.difficulty === 'Intermediate').length}
              </p>
              <p className="text-xs text-yellow-700">Intermediate</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-purple-600" />
            <div>
              <p className="text-lg font-bold text-purple-900">
                {filteredTutorials.filter(t => t.difficulty === 'Advanced').length}
              </p>
              <p className="text-xs text-purple-700">Advanced</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tutorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{tutorial.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {tutorial.difficulty}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">{tutorial.description}</p>
              
              <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{tutorial.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Video className="h-3 w-3" />
                  <span>Video</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>{Math.floor(Math.random() * 500 + 200)} enrolled</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-xs text-gray-600">4.0</span>
              </div>

              <button
                onClick={() => setExpandedTutorial(expandedTutorial === tutorial.id ? null : tutorial.id)}
                className="w-full flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                {expandedTutorial === tutorial.id ? 'Hide Steps' : 'Show Steps'}
                <ChevronRight className={`h-3 w-3 ml-1 transition-transform ${
                  expandedTutorial === tutorial.id ? 'rotate-90' : ''
                }`} />
              </button>

              {expandedTutorial === tutorial.id && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Steps:</h4>
                  {tutorial.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-2 p-2 bg-gray-50 rounded">
                      <div className="flex-shrink-0 w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </div>
                      <p className="text-xs text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVisualGuides = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Visual Guides</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {visualGuides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="relative">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <Monitor className="h-16 w-16 text-gray-400" />
                <span className="ml-3 text-gray-500">Interactive Guide Preview</span>
              </div>
              {guide.hotspots.map((hotspot, index) => (
                <div
                  key={index}
                  className="absolute bg-blue-600 text-white px-2 py-1 rounded text-xs"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                >
                  {hotspot.label}
                </div>
              ))}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <PlayCircle className="h-4 w-4 mr-2" />
                Start Interactive Guide
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAccessibilityFeatures = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Accessibility Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accessibilityFeatures.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.category} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">{category.category} Accessibility</h3>
              </div>
              <div className="space-y-3">
                {category.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">{feature.name}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderToolsAndFeatures = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Tools & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toolsAndFeatures.map((tool) => {
          const Icon = tool.icon;
          return (
            <div key={tool.name} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {tool.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>How to use:</strong> {tool.usage}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCommunitySupport = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Community Support</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {communitySupport.map((support) => {
          const Icon = support.icon;
          return (
            <div key={support.type} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">{support.type}</h3>
              </div>
              <p className="text-gray-600 mb-4">{support.description}</p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {support.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                {support.joinProcess}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderAdvancedTips = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Advanced Tips</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advancedTips.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.category} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-6 w-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start space-x-3">
              <HelpCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {faq.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'tutorials': return renderTutorials();
      case 'visual': return renderVisualGuides();
      case 'accessibility': return renderAccessibilityFeatures();
      case 'tools': return renderToolsAndFeatures();
      case 'community': return renderCommunitySupport();
      case 'advanced': return renderAdvancedTips();
      case 'faq': return renderFAQ();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Book className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">User Guide</h1>
              <p className="text-xs text-gray-500">Complete documentation</p>
            </div>
          </div>

          {/* Section Navigation */}
          <nav className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="truncate">{section.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Search in Sidebar */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search guide..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Stats in Sidebar */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Rating</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-gray-700 ml-1">4.8</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Users</span>
                <span className="text-gray-700 font-medium">12.5K</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Status</span>
                <span className="text-green-600 font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {sections.find(s => s.id === activeSection)?.name || 'Overview'}
                </h2>
                <p className="text-sm text-gray-600">
                  {activeSection === 'overview' && 'Get started with PriHub basics'}
                  {activeSection === 'tutorials' && 'Step-by-step learning paths'}
                  {activeSection === 'visual' && 'Interactive visual guides'}
                  {activeSection === 'accessibility' && 'Accessibility features'}
                  {activeSection === 'tools' && 'Tools and features'}
                  {activeSection === 'community' && 'Community resources'}
                  {activeSection === 'advanced' && 'Advanced techniques'}
                  {activeSection === 'faq' && 'Common questions'}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                  <Download className="h-4 w-4" />
                  <span>PDF</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="bg-white">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">12 languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Enterprise security</span>
                </div>
              </div>
              <div className="text-gray-500">
                © 2024 PriHub. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default UserGuide;
