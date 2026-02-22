import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, Award, TrendingUp, Target, Zap, Globe, Shield, Star, ChevronRight, Clock, MapPin, ExternalLink, Rocket, Brain, Cpu, Lightbulb, BarChart } from 'lucide-react';

const InnovationExplore = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setIsDarkMode(theme === 'dark');
    };

    checkTheme();
    window.addEventListener('storage', checkTheme);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkTheme);

    return () => {
      window.removeEventListener('storage', checkTheme);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkTheme);
    };
  }, []);

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToStory = () => {
    window.location.href = '/about#story';
  };

  const achievements = [
    {
      id: 1,
      title: "Advanced AI Integration",
      description: "Leveraging cutting-edge technology and evidence-based practices, we developed innovative solutions that adapt to individual needs. Our commitment to continuous improvement and research ensures we remain at the forefront of cognitive support services.",
      date: "January 2022",
      impact: "Technology Breakthrough",
      icon: "🤖",
      color: "indigo"
    },
    {
      id: 2,
      title: "Global Platform Launch",
      description: "Expanded services globally with multilingual support and cultural adaptation, making cognitive support accessible to diverse communities worldwide.",
      date: "June 2022",
      impact: "Global Expansion",
      icon: "🌍",
      color: "indigo"
    },
    {
      id: 3,
      title: "Research Partnership",
      description: "Established partnerships with leading cognitive research institutions worldwide to advance evidence-based practices and innovative solutions.",
      date: "September 2022",
      impact: "Research Excellence",
      icon: "🔬",
      color: "indigo"
    },
    {
      id: 4,
      title: "Innovation Award",
      description: "Received international recognition for innovation in cognitive accessibility, validating our approach and impact on the community.",
      date: "December 2023",
      impact: "Industry Recognition",
      icon: "🏆",
      color: "indigo"
    }
  ];

  const technologies = [
    { name: "Advanced AI", level: 95, category: "Intelligence", icon: "🤖" },
    { name: "React.js", level: 92, category: "Frontend", icon: "⚛️" },
    { name: "Node.js", level: 88, category: "Backend", icon: "🟢" },
    { name: "Machine Learning", level: 90, category: "AI/ML", icon: "🧠" },
    { name: "Cloud Infrastructure", level: 93, category: "Infrastructure", icon: "☁️" },
    { name: "Analytics Platform", level: 87, category: "Data", icon: "📊" }
  ];

  const metrics = [
    { label: "AI Models Deployed", value: "50+", icon: "🤖", trend: "+500%" },
    { label: "Global Users", value: "10,000+", icon: "🌍", trend: "+1000%" },
    { label: "Research Papers", value: "25", icon: "📚", trend: "+400%" },
    { label: "Innovation Patents", value: "8", icon: "💡", trend: "+800%" }
  ];

  const innovations = [
    {
      title: "Personalized AI Assistant",
      description: "AI-powered assistant that adapts to individual cognitive needs and learning patterns",
      status: "Active",
      users: "5,000+",
      accuracy: "95%"
    },
    {
      title: "Cognitive Analytics",
      description: "Advanced analytics platform for tracking cognitive progress and support effectiveness",
      status: "Active",
      users: "3,000+",
      accuracy: "92%"
    },
    {
      title: "Adaptive Interface",
      description: "Dynamic interface that adjusts based on user cognitive load and preferences",
      status: "Beta",
      users: "1,000+",
      accuracy: "88%"
    },
    {
      title: "Predictive Support",
      description: "Predictive system that anticipates cognitive support needs before they arise",
      status: "Development",
      users: "500+",
      accuracy: "85%"
    }
  ];

  const researchAreas = [
    {
      area: "Cognitive Pattern Recognition",
      description: "Advanced algorithms for understanding individual cognitive patterns",
      progress: 85,
      team: "12 researchers"
    },
    {
      area: "Neural Interface Integration",
      description: "Exploring brain-computer interface for cognitive support",
      progress: 60,
      team: "8 researchers"
    },
    {
      area: "Multimodal Learning",
      description: "Combining visual, auditory, and kinesthetic learning approaches",
      progress: 75,
      team: "10 researchers"
    },
    {
      area: "Real-time Adaptation",
      description: "Systems that adapt in real-time to cognitive state changes",
      progress: 70,
      team: "15 researchers"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={handleBackToStory}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Story</span>
            </button>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-4xl font-bold mb-4">Innovation & Growth (2022-Present)</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Pushing boundaries with cutting-edge technology and revolutionary cognitive support solutions
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'achievements', 'technologies', 'metrics', 'innovations', 'research'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Rocket className="w-6 h-6 mr-3 text-indigo-600" />
                Innovation Overview
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Cutting-Edge Technology</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Leveraging cutting-edge technology and evidence-based practices, we developed innovative solutions that adapt to individual needs. Our commitment to continuous improvement and research ensures we remain at the forefront of cognitive support services.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The innovation phase has been marked by breakthrough AI implementations, global expansion, and recognition as leaders in cognitive accessibility technology.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Innovation Pillars</h3>
                  <div className="space-y-3">
                    {[
                      "Advanced AI integration",
                      "Personalized cognitive support",
                      "Real-time adaptation systems",
                      "Predictive assistance technology",
                      "Global accessibility standards"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Timeline */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <BarChart className="w-6 h-6 mr-3 text-indigo-600" />
                Growth Timeline
              </h2>
              
              <div className="space-y-6">
                {[
                  { year: "2022", event: "AI Integration", detail: "Advanced AI systems deployed for personalized support" },
                  { year: "2022", event: "Global Launch", detail: "Platform expanded to 50+ countries" },
                  { year: "2023", event: "Research Partnership", detail: "Collaboration with leading cognitive research institutions" },
                  { year: "2023", event: "Innovation Award", detail: "International recognition for cognitive accessibility" },
                  { year: "2024", event: "Next-Gen AI", detail: "Next-generation AI models with 95% accuracy" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{item.year}</span>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.event}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
                  onClick={() => setSelectedAchievement(achievement.id === selectedAchievement ? null : achievement.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {achievement.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.date}</span>
                        </div>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">
                          {achievement.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {selectedAchievement === achievement.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="w-5 h-5 text-indigo-600" />
                        <span className="font-semibold text-gray-900 dark:text-white">Achievement Details</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        This milestone represents our commitment to pushing the boundaries of what's possible in cognitive support technology and innovation.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === 'technologies' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Cpu className="w-6 h-6 mr-3 text-indigo-600" />
                Advanced Technology Stack
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h4>
                          <p className="text-sm text-gray-500">{tech.category}</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-indigo-600">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center`}>
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {metric.label}
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{metric.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Innovations Tab */}
        {activeTab === 'innovations' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Lightbulb className="w-6 h-6 mr-3 text-indigo-600" />
                Innovation Products
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {innovations.map((innovation, index) => (
                  <div key={index} className="p-6 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {innovation.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Status</div>
                        <div className={`text-sm font-medium ${
                          innovation.status === 'Active' 
                            ? 'text-green-600' 
                            : innovation.status === 'Beta' 
                              ? 'text-yellow-600' 
                              : 'text-gray-600'
                        }`}>
                          {innovation.status}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Users</div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {innovation.users}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Accuracy</div>
                        <div className="text-sm font-medium text-indigo-600">
                          {innovation.accuracy}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <div className="space-y-8">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Brain className="w-6 h-6 mr-3 text-indigo-600" />
                Research Areas
              </h2>
              
              <div className="space-y-6">
                {researchAreas.map((area, index) => (
                  <div key={index} className="p-6 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {area.area}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium text-indigo-600">{area.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${area.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Research Team</span>
                        <span className="font-medium text-gray-900 dark:text-white">{area.team}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InnovationExplore;
