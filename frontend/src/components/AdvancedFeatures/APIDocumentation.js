import React, { useState, useEffect } from 'react';
import { 
  Code, FileText, Terminal, Globe, Zap, Shield, 
  ChevronRight, Star, Download, Copy, CheckCircle,
  Server, Database, Key, Settings, BookOpen, Link, Users
} from 'lucide-react';

const APIDocumentation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState(null);

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

  const features = [
    {
      icon: Code,
      title: 'RESTful API',
      description: 'Clean, intuitive REST API design with comprehensive documentation and examples.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and API key authentication for secure access to all endpoints.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for performance with response times under 100ms for most operations.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Distributed across global CDN for low latency access from anywhere.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'WebSocket support for real-time updates and live data streaming.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Settings,
      title: 'Flexible Configuration',
      description: 'Customizable endpoints and parameters to fit your specific needs.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/accessibility/features',
      description: 'Get all accessibility features',
      example: `curl -X GET "https://api.prihub.com/api/v1/accessibility/features" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
      method: 'POST',
      path: '/api/v1/ai/assistant/chat',
      description: 'Send message to AI assistant',
      example: `curl -X POST "https://api.prihub.com/api/v1/ai/assistant/chat" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"message": "How do I enable screen reader?"}'`
    },
    {
      method: 'GET',
      path: '/api/v1/user/profile',
      description: 'Get user accessibility profile',
      example: `curl -X GET "https://api.prihub.com/api/v1/user/profile" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
      method: 'PUT',
      path: '/api/v1/user/preferences',
      description: 'Update user preferences',
      example: `curl -X PUT "https://api.prihub.com/api/v1/user/preferences" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"fontSize": "large", "highContrast": true}'`
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'JavaScript SDK',
      code: `import { PriHubAPI } from '@prihub/sdk';

const api = new PriHubAPI({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.prihub.com'
});

// Get accessibility features
const features = await api.getAccessibilityFeatures();

// Send message to AI assistant
const response = await api.sendAIMessage('Help me navigate');`
    },
    {
      language: 'Python',
      title: 'Python Client',
      code: `import requests
import json

class PriHubAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://api.prihub.com'
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    
    def get_features(self):
        response = requests.get(
            f'{self.base_url}/api/v1/accessibility/features',
            headers=self.headers
        )
        return response.json()`
    },
    {
      language: 'cURL',
      title: 'Direct API Calls',
      code: `# Get accessibility features
curl -X GET "https://api.prihub.com/api/v1/accessibility/features" \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Update user preferences
curl -X PUT "https://api.prihub.com/api/v1/user/preferences" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"fontSize": "large", "highContrast": true}'`
    }
  ];

  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-blue-400 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-gray-600 to-blue-600 p-3 rounded-full">
                  <Code className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className={`text-3xl font-bold ml-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                API Documentation
              </h1>
            </div>
            <p className={`text-lg max-w-2xl mx-auto mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Technical documentation with practical guides and code examples for integrating PriHub accessibility services.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4.5</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(3.2K developers)</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'}`}>
                RESTful API
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                v1.0.0
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('endpoints')}
                className="bg-gradient-to-r from-gray-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-gray-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Docs
              </button>
              <button 
                onClick={() => setActiveTab('sdks')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
              >
                <Download className="h-4 w-4 inline mr-2" />
                Download SDK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['overview', 'endpoints', 'examples', 'sdks', 'authentication', 'rate-limits', 'support'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-gray-600 to-blue-600 text-white'
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
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.title === 'RESTful API' && (
                        <>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Standard HTTP methods</span>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>JSON responses</span>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Versioning support</span>
                          </div>
                        </>
                      )}
                      {feature.title === 'Secure Authentication' && (
                        <>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>OAuth 2.0</span>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>API keys</span>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>JWT tokens</span>
                          </div>
                        </>
                      )}
                      {feature.title === 'Lightning Fast' && (
                        <>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sub-second responses</span>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>CDN optimized</span>
                          </div>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-yellow-600 mr-2" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Global servers</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Real-time Data
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  WebSocket support for real-time updates and live data streaming.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>WebSocket API</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Event streaming</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Push notifications</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Global CDN
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Distributed across global CDN for low latency access from anywhere.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Edge locations</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Auto failover</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Load balancing</span>
                  </div>
                </div>
              </div>
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Settings className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Flexible Configuration
                  </h3>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Customizable endpoints and parameters to fit your specific needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Custom headers</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Query parameters</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-orange-600 mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Webhook support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                API Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">&lt;100ms</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Average Response Time
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Uptime SLA
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Daily Requests
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">TB</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Data Processed
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'endpoints' && (
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className={`ml-4 font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {endpoint.path}
                  </code>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {endpoint.description}
                </p>
                <div className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-4`}>
                  <pre className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} overflow-x-auto`}>
                    {endpoint.example}
                  </pre>
                  <button
                    onClick={() => handleCopyCode(endpoint.example, index)}
                    className={`absolute top-2 right-2 p-2 rounded ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    {copiedCode === index ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {codeExamples.map((example, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {example.title}
                </h3>
                <div className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-4`}>
                  <pre className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} overflow-x-auto`}>
                    {example.code}
                  </pre>
                  <button
                    onClick={() => handleCopyCode(example.code, index)}
                    className={`absolute top-2 right-2 p-2 rounded ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    {copiedCode === index ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sdks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'TypeScript', icon: Code, color: 'from-yellow-500 to-yellow-600', githubUrl: 'https://github.com/anthropics/anthropic-sdk-typescript' },
              { name: 'Python', icon: Terminal, color: 'from-blue-500 to-blue-600', githubUrl: 'https://github.com/anthropics/anthropic-sdk-python' },
              { name: 'Java', icon: Server, color: 'from-red-500 to-red-600', githubUrl: 'https://github.com/anthropics/anthropic-sdk-java' },
              { name: 'Ruby', icon: FileText, color: 'from-red-600 to-red-700', githubUrl: 'https://github.com/anthropics/anthropic-sdk-ruby' },
              { name: 'PHP', icon: Database, color: 'from-purple-500 to-purple-600', githubUrl: 'https://github.com/anthropics/anthropic-sdk-php' },
              { name: 'C#', icon: Settings, color: 'from-green-500 to-green-600', githubUrl: 'https://github.com/anthropics/anthropic-sdk-csharp' },
              { name: 'Go', icon: Link, color: 'from-indigo-500 to-indigo-600', githubUrl: 'https://github.com/anthropics/anthropic-sdk-go' }
            ].map((sdk, index) => {
              const Icon = sdk.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${sdk.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {sdk.name} SDK
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Official {sdk.name} SDK with full API coverage and comprehensive documentation.
                  </p>
                  <button 
                    onClick={() => window.open(sdk.githubUrl, '_blank')}
                    className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                      isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Download SDK
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'authentication' && (
          <div className="space-y-6">
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Authentication & Security
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    OAuth 2.0 Flow
                  </h4>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Industry-standard OAuth 2.0 implementation for secure authorization.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Authorization code flow</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Client credentials</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Refresh tokens</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    API Keys
                  </h4>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Simple API key authentication for quick integration and testing.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Environment-specific keys</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Key rotation support</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Usage analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rate-limits' && (
          <div className="space-y-6">
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Rate Limits & Quotas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Free Tier
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Requests per hour</span>
                      <span className="text-sm font-bold text-blue-600">1,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Requests per day</span>
                      <span className="text-sm font-bold text-blue-600">10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Concurrent connections</span>
                      <span className="text-sm font-bold text-blue-600">10</span>
                    </div>
                  </div>
                </div>
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Pro Tier
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Requests per hour</span>
                      <span className="text-sm font-bold text-green-600">10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Requests per day</span>
                      <span className="text-sm font-bold text-green-600">100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Concurrent connections</span>
                      <span className="text-sm font-bold text-green-600">100</span>
                    </div>
                  </div>
                </div>
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Enterprise Tier
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Requests per hour</span>
                      <span className="text-sm font-bold text-purple-600">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Requests per day</span>
                      <span className="text-sm font-bold text-purple-600">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Concurrent connections</span>
                      <span className="text-sm font-bold text-purple-600">Custom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Technical Documentation',
                description: 'Comprehensive guides, tutorials, and API reference documentation.',
                icon: FileText,
                features: ['API reference', 'Integration guides', 'Best practices', 'Troubleshooting']
              },
              {
                title: 'Developer Community',
                description: 'Active community forum for developers to share knowledge and get help.',
                icon: Users,
                features: ['Q&A forum', 'Code examples', 'Developer blog', 'Community events']
              },
              {
                title: 'Priority Support',
                description: 'Get dedicated technical support from our API engineering team.',
                icon: Shield,
                features: ['Email support', 'Live chat', 'Priority response', 'Custom solutions']
              },
              {
                title: 'Status Dashboard',
                description: 'Real-time monitoring of API performance and service availability.',
                icon: Zap,
                features: ['Uptime monitoring', 'Performance metrics', 'Incident history', 'Maintenance schedule']
              },
              {
                title: 'Sample Applications',
                description: 'Ready-to-use sample applications demonstrating API integration.',
                icon: Code,
                features: ['Web applications', 'Mobile apps', 'Server integrations', 'API demos']
              },
              {
                title: 'Testing Tools',
                description: 'Testing utilities and sandbox environment for API development.',
                icon: Terminal,
                features: ['API playground', 'Test data generator', 'Performance testing', 'Debug tools']
              }
            ].map((support, index) => {
              const Icon = support.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r from-gray-500 to-blue-500 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {support.title}
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {support.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {support.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <ChevronRight className="h-3 w-3 text-blue-600 mr-2" />
                        <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      switch(support.title) {
                        case 'Technical Documentation':
                          window.open('https://docs.anthropic.com/claude/reference', '_blank');
                          break;
                        case 'Developer Community':
                          window.open('https://github.com/anthropics/anthropic-sdk/discussions', '_blank');
                          break;
                        case 'Priority Support':
                          window.open('https://support.anthropic.com', '_blank');
                          break;
                        case 'Status Dashboard':
                          window.open('https://status.anthropic.com', '_blank');
                          break;
                        case 'Sample Applications':
                          window.open('https://github.com/anthropics/anthropic-sdk-examples', '_blank');
                          break;
                        case 'Testing Tools':
                          window.open('https://console.anthropic.com/', '_blank');
                          break;
                        default:
                          break;
                      }
                    }}
                    className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                      isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {support.title === 'Technical Documentation' && 'View Documentation'}
                    {support.title === 'Developer Community' && 'Join Community'}
                    {support.title === 'Priority Support' && 'Get Support'}
                    {support.title === 'Status Dashboard' && 'View Status'}
                    {support.title === 'Sample Applications' && 'View Examples'}
                    {support.title === 'Testing Tools' && 'Open Console'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default APIDocumentation;
