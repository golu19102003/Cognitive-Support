import React, { useState, useEffect } from 'react';
import { 
  Palette, Eye, Users, Brain, Zap, Shield, 
  ChevronRight, Star, BookOpen, Lightbulb,
  CheckCircle, AlertCircle, Info, Target, Heart,
  Monitor, Smartphone, Globe, Accessibility,
  Mic, Volume2, Code, Award, Keyboard
} from 'lucide-react';

const InclusiveDesignGuidelines = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('principles');

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

  const principles = [
    {
      icon: Eye,
      title: 'Perceivable',
      description: 'Information and user interface components must be presentable in ways users can perceive.',
      color: 'from-blue-500 to-blue-600',
      guidelines: [
        'Provide text alternatives for non-text content',
        'Create content that can be presented in different ways',
        'Make it easier for users to see and hear content',
        'Separate foreground from background'
      ]
    },
    {
      icon: Users,
      title: 'Operable',
      description: 'User interface components and navigation must be operable by all users.',
      color: 'from-green-500 to-green-600',
      guidelines: [
        'Make all functionality available from a keyboard',
        'Provide users enough time to read and use content',
        'Do not use content that causes seizures',
        'Help users navigate and find content'
      ]
    },
    {
      icon: Brain,
      title: 'Understandable',
      description: 'Information and the operation of user interface must be understandable.',
      color: 'from-purple-500 to-purple-600',
      guidelines: [
        'Make text content readable and understandable',
        'Make web pages appear and operate in predictable ways',
        'Help users avoid and correct mistakes',
        'Use clear and simple language'
      ]
    },
    {
      icon: Zap,
      title: 'Robust',
      description: 'Content must be robust enough to work with current and future technologies.',
      color: 'from-yellow-500 to-yellow-600',
      guidelines: [
        'Maximize compatibility with current and future tools',
        'Use valid HTML and semantic markup',
        'Ensure content works with assistive technologies',
        'Test with multiple browsers and devices'
      ]
    }
  ];

  const bestPractices = [
    {
      category: 'Visual Design',
      icon: Palette,
      practices: [
        { title: 'Color Contrast', description: 'Ensure text has sufficient contrast against background (WCAG AA: 4.5:1, AAA: 7:1)', status: 'essential' },
        { title: 'Font Size', description: 'Use readable font sizes (minimum 16px for body text)', status: 'essential' },
        { title: 'Color Independence', description: 'Don\'t rely solely on color to convey information', status: 'essential' },
        { title: 'Focus Indicators', description: 'Provide clear focus indicators for interactive elements', status: 'essential' }
      ]
    },
    {
      category: 'Navigation',
      icon: Target,
      practices: [
        { title: 'Keyboard Navigation', description: 'Ensure all interactive elements are keyboard accessible', status: 'essential' },
        { title: 'Skip Links', description: 'Provide skip links for keyboard users', status: 'recommended' },
        { title: 'Clear Structure', description: 'Use semantic HTML and logical heading hierarchy', status: 'essential' },
        { title: 'Breadcrumbs', description: 'Include breadcrumb navigation for complex sites', status: 'recommended' }
      ]
    },
    {
      category: 'Content',
      icon: BookOpen,
      practices: [
        { title: 'Alt Text', description: 'Provide descriptive alt text for all images', status: 'essential' },
        { title: 'Headings', description: 'Use proper heading structure (h1-h6)', status: 'essential' },
        { title: 'Link Text', description: 'Use descriptive link text (avoid "click here")', status: 'essential' },
        { title: 'Form Labels', description: 'Associate labels with all form controls', status: 'essential' }
      ]
    },
    {
      category: 'Interactive Elements',
      icon: Monitor,
      practices: [
        { title: 'Error Messages', description: 'Provide clear, descriptive error messages', status: 'essential' },
        { title: 'Form Validation', description: 'Validate forms in real-time with helpful feedback', status: 'recommended' },
        { title: 'Button States', description: 'Clearly indicate button states (disabled, loading, etc.)', status: 'essential' },
        { title: 'Tooltips', description: 'Provide helpful tooltips for complex interactions', status: 'recommended' }
      ]
    }
  ];

  const implementationExamples = [
    {
      title: 'Accessible Form Design',
      description: 'Creating forms that work for everyone',
      code: `<form>
  <fieldset>
    <legend>Contact Information</legend>
    
    <label for="name">
      Name <span aria-label="required">*</span>
    </label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required 
      aria-describedby="name-help"
    />
    <div id="name-help">Enter your full name</div>
    
    <label for="email">
      Email <span aria-label="required">*</span>
    </label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required 
      aria-describedby="email-help email-error"
    />
    <div id="email-help">Enter a valid email address</div>
    <div id="email-error" class="error" aria-live="polite"></div>
  </fieldset>
</form>`,
      benefits: ['Screen reader friendly', 'Keyboard accessible', 'Clear error messaging', 'Proper labeling']
    },
    {
      title: 'Responsive Navigation',
      description: 'Navigation that works on all devices',
      code: `<nav role="navigation" aria-label="Main">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  
  <button 
    class="mobile-menu-toggle" 
    aria-expanded="false"
    aria-controls="mobile-menu"
  >
    Menu
  </button>
  
  <ul id="mobile-menu" hidden>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
      benefits: ['Mobile friendly', 'Screen reader accessible', 'Keyboard navigation', 'ARIA labels']
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'essential':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'recommended':
        return <Info className="h-4 w-4 text-blue-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                  <Palette className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className={`text-3xl font-bold ml-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Inclusive Design Guidelines
              </h1>
            </div>
            <p className={`text-lg max-w-2xl mx-auto mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Design principles and best practices for creating accessible digital experiences with implementation examples.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4.8</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(9.3K designers)</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                WCAG 2.1 Compliant
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-pink-900/50 text-pink-300' : 'bg-pink-100 text-pink-700'}`}>
                Best Practices
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('guidelines')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Guidelines
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['principles', 'practices', 'implementation', 'testing', 'tools', 'guidelines', 'resources'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
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
        {activeTab === 'principles' && (
          <div className="space-y-8">
            {/* Key Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-purple-600 mr-3" />
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {principle.title}
                      </h3>
                    </div>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {principle.description}
                    </p>
                    <ul className="space-y-2">
                      {principle.guidelines.map((guideline, i) => (
                        <li key={i} className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {guideline}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Accessibility className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Universal Design
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Design products that can be used by people with the widest possible range of abilities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Equitable use</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Flexible use</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Simple use</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Monitor className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Responsive Design
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Create content that works seamlessly across all devices and screen sizes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mobile first</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Touch friendly</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Adaptive layouts</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Assistive Technology
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Ensure compatibility with screen readers, voice commands, and other assistive technologies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Screen readers</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Voice control</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Keyboard navigation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Accessibility Impact Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">WCAG 2.1</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Compliance Level
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Keyboard Accessible
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">A+</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Color Contrast
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practices' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestPractices.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.practices.map((practice, i) => (
                      <div key={i} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {practice.title}
                          </h4>
                          {getStatusIcon(practice.status)}
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {practice.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'implementation' && (
          <div className="space-y-6">
            {implementationExamples.map((example, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {example.title}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {example.description}
                </p>
                <div className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-4 mb-4`}>
                  <pre className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} overflow-x-auto`}>
                    {example.code}
                  </pre>
                </div>
                <div>
                  <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Key Benefits:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {example.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'testing' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Automated Testing',
                icon: Zap,
                description: 'Use automated tools to catch common accessibility issues',
                tools: ['axe-core', 'lighthouse', 'wave', 'sortsite']
              },
              {
                title: 'Manual Testing',
                icon: Users,
                description: 'Test with real users and assistive technologies',
                tools: ['Screen readers', 'Keyboard navigation', 'Voice control', 'Switch devices']
              },
              {
                title: 'User Testing',
                icon: Heart,
                description: 'Get feedback from users with disabilities',
                tools: ['User interviews', 'Usability testing', 'Surveys', 'Analytics']
              }
            ].map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {method.title}
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    {method.tools.map((tool, i) => (
                      <div key={i} className={`px-3 py-1 rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Screen Reader Tools',
                description: 'Essential tools for testing and optimizing screen reader compatibility',
                icon: Monitor,
                features: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack']
              },
              {
                title: 'Color Contrast Analyzers',
                description: 'Tools to verify and improve color contrast ratios',
                icon: Eye,
                features: ['WCAG Contrast Checker', 'Color Safe', 'Adobe Color', 'WebAIM']
              },
              {
                title: 'Keyboard Navigation',
                description: 'Tools for testing keyboard accessibility',
                icon: Target,
                features: ['Keyboard Testing', 'Tab Navigation', 'Focus Indicators', 'Skip Links']
              },
              {
                title: 'Accessibility Validators',
                description: 'Comprehensive accessibility testing and validation tools',
                icon: Shield,
                features: ['axe DevTools', 'WAVE', 'Lighthouse', 'IBM Equal Access']
              },
              {
                title: 'Voice Control',
                description: 'Voice recognition and control tools for accessibility',
                icon: Mic,
                features: ['Dragon NaturallySpeaking', 'Windows Speech', 'Google Voice', 'Siri']
              },
              {
                title: 'Text-to-Speech',
                description: 'Tools for converting text to spoken audio',
                icon: Volume2,
                features: ['NaturalReader', 'Balabolka', 'Read Aloud', 'ChromeVox']
              }
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {tool.title}
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tool.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, i) => (
                      <div key={i} className={`px-3 py-1 rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        {feature}
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
                WCAG 2.1 Guidelines
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Perceivable
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Text alternatives for non-text content</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Captions and transcripts</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Adaptable content</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Operable
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Keyboard accessibility</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>No time limits</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Navigation aids</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Understandable
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Readable content</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Predictable functionality</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Input assistance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Robust
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Error prevention</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Backward compatibility</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Assistive technology support</span>
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
                title: 'WCAG Guidelines',
                description: 'Official Web Content Accessibility Guidelines documentation',
                icon: BookOpen,
                features: ['WCAG 2.1', 'Understanding WCAG', 'Techniques', 'Examples']
              },
              {
                title: 'Accessibility Testing',
                description: 'Tools and methods for accessibility testing',
                icon: CheckCircle,
                features: ['Testing methods', 'Tools overview', 'Reporting', 'Compliance']
              },
              {
                title: 'Design Resources',
                description: 'Design patterns and templates for accessible design',
                icon: Palette,
                features: ['Color palettes', 'Typography', 'Layout patterns', 'Component library']
              },
              {
                title: 'Development Tools',
                description: 'Development tools and frameworks for accessibility',
                icon: Code,
                features: ['ARIA patterns', 'Testing libraries', 'Linting tools', 'IDE plugins']
              },
              {
                title: 'Training Materials',
                description: 'Educational resources for accessibility learning',
                icon: Award,
                features: ['Online courses', 'Workshops', 'Certifications', 'Webinars']
              },
              {
                title: 'Community Support',
                description: 'Communities and forums for accessibility help',
                icon: Users,
                features: ['Forums', 'Discussion groups', 'Expert networks', 'Support channels']
              }
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4`}>
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
      </div>
    </div>
  );
};

export default InclusiveDesignGuidelines;
