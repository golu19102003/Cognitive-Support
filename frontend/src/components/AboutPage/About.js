import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Brain, Heart, BookOpen, Users2, Shield, Phone, Mail, MapPin, ChevronRight, Calendar, Award, TrendingUp, Globe, Zap, Star, ArrowRight, Play, Pause, RotateCw } from 'lucide-react';
import GenesisExplore from './GenesisExplore';
import CommunityExplore from './CommunityExplore';
import InnovationExplore from './InnovationExplore';
const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('mission');
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [selectedStat, setSelectedStat] = useState(null);
  const [explorePage, setExplorePage] = useState(null);
  const navigate = useNavigate();
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
              <span style={{ color: '#16808D' }}>About</span>
              <span className={`transition-colors duration-300 ${
                isDarkMode ? 'text-white' : ''
              }`} style={{ color: isDarkMode ? '#ffffff' : '#000000' }}> Cognitive Disabilities</span>
            </h1>
          </div>
        </div>
        <p className={`text-xl max-w-3xl mx-auto italic transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Cognitive disabilities affect how a person learns, remembers, processes information, and makes decisions. 
          We're here to provide Support, understanding, and resources for individuals and families affected by cognitive disabilities.
        </p>
      </div>
      {/* Single Grid with All 5 Sections */}
      <div className="grid grid-cols-5 gap-4 mb-12">
        {/* Mission Section */}
        <div 
          onClick={() => setActiveSection('mission')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'mission' ? 'ring-2 ring-[#16808D]' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <Brain className="h-8 w-8 text-[#16808D] mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Mission</h2>
        </div>
        {/* Story Section */}
        <div 
          onClick={() => setActiveSection('story')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'story' ? 'ring-2 ring-purple-600' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <BookOpen className="h-8 w-8 text-purple-600 mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Story</h2>
        </div>
        {/* Values Section */}
        <div 
          onClick={() => setActiveSection('values')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'values' ? 'ring-2 ring-red-500' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <Heart className="h-8 w-8 text-red-500 mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Values</h2>
        </div>
        {/* Technology Section */}
        <div 
          onClick={() => setActiveSection('technology')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'technology' ? 'ring-2 ring-blue-600' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <Shield className="h-8 w-8 text-blue-600 mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Technology</h2>
        </div>
        {/* Team Section */}
        <div 
          onClick={() => setActiveSection('team')}
          className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer ${
            activeSection === 'team' ? 'ring-2 ring-green-600' : ''
          } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <Users2 className="h-8 w-8 text-green-600 mr-2" />
          <h2 className={`text-sm font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Team</h2>
        </div>
      </div>
      {/* Dynamic Content Based on Active Section */}
      {activeSection === 'mission' && (
        <div className="animate-fadeIn">
          <div className="text-center py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#16808D]/10 to-purple-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <Brain className="h-16 w-16 text-[#16808D] mx-auto mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#16808D] to-purple-600 bg-clip-text text-transparent">
                <span style={{ color: '#16808D' }}>Our Mission</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
                Founded with deep understanding of cognitive challenges, we provide comprehensive support and essential resources for individuals and families. We're committed to creating an inclusive society where everyone thrives and flourishes, regardless of cognitive abilities.
              </p>
            </div>
          </div>
          {/* Mission Pillars - Single Unified Grid */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Brain className="h-12 w-12 text-[#16808D] mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Mission Pillars</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-teal-500 pl-4 transition-all duration-300 hover:border-teal-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-teal-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Empowerment Through Knowledge</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Education and awareness break barriers, fostering understanding in communities through accurate information about cognitive disabilities.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 transition-all duration-300 hover:border-indigo-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-indigo-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Comprehensive Support Systems</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Beyond basic resources, we provide professional guidance, peer networks, and innovative technology solutions for cognitive accessibility.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4 transition-all duration-300 hover:border-cyan-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-cyan-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Building Inclusive Communities</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Creating environments where individuals with cognitive disabilities feel valued, respected, and fully included in all aspects of life.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 transition-all duration-300 hover:border-blue-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Innovation and Research</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Exploring new approaches and technologies with researchers and experts to develop cutting-edge cognitive accessibility solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {/* Understanding Section */}
            <div className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-6">
                <Brain className="h-12 w-12 text-blue-600 mr-3 animate-pulse" />
                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Cognitive Intelligence Framework</h2>
              </div>
              <p className={`leading-relaxed transition-colors duration-300 mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Cognitive disabilities encompass a spectrum of neurological conditions affecting information processing, memory systems, and executive functions. 
                Understanding these cognitive patterns through advanced neuroscience enables us to create personalized, adaptive support systems that enhance cognitive accessibility and promote neurodiversity inclusion.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-800/30 dark:to-cyan-800/30 rounded-xl p-4 border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Neural Attention Systems</h3>
                      <p className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Challenges in sustained attention, focus regulation, and cognitive filtering mechanisms affecting task completion and social engagement</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs rounded-full">ADHD</span>
                        <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs rounded-full">Focus Training</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-800/30 dark:to-pink-800/30 rounded-xl p-4 border border-purple-200 dark:border-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-purple-600 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Memory Architecture</h3>
                      <p className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Complexities in working memory, long-term retention, and information processing affecting learning and daily functioning</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-xs rounded-full">Memory Enhancement</span>
                        <span className="px-2 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 text-xs rounded-full">Cognitive Training</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-800/30 dark:to-emerald-800/30 rounded-xl p-4 border border-green-200 dark:border-green-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-green-600 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Executive Function Matrix</h3>
                      <p className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Difficulties in planning, organization, time management, and cognitive flexibility impacting goal achievement</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 text-xs rounded-full">Executive Coaching</span>
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs rounded-full">Skills Development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-800/30 dark:to-red-800/30 rounded-xl p-4 border border-orange-200 dark:border-orange-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-orange-600 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Social Cognition Networks</h3>
                      <p className={`transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Challenges in social perception, communication patterns, and relationship building affecting social integration</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300 text-xs rounded-full">Social Skills</span>
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 text-xs rounded-full">Communication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Support Section */}
            <div className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-6">
                <Heart className="h-12 w-12 text-red-600 mr-3 animate-pulse" />
                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Advanced Support Ecosystem</h2>
              </div>
              <p className={`leading-relaxed transition-colors duration-300 mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Access comprehensive professional support networks, peer communities, and cutting-edge resources. Our integrated support system connects you with specialized cognitive health professionals, 
                evidence-based therapeutic interventions, and 24/7 crisis support through the 988 Suicide & Crisis Lifeline for immediate emotional assistance.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-800/30 dark:to-purple-800/30 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-indigo-600 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>24/7 Crisis Helpline</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>988 Suicide & Crisis Lifeline</p>
                    <p className={`text-sm transition-colors duration-300 font-mono ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>988-988-9882</p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">24/7</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-xs rounded-full">Confidential</span>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-800/30 dark:to-cyan-800/30 rounded-xl p-4 border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                      <Users2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Peer Support Networks</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Connect with others who understand and share similar cognitive experiences</p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs rounded-full">Community</span>
                      <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs rounded-full">Support</span>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-800/30 dark:to-emerald-800/30 rounded-xl p-4 border border-green-200 dark:border-green-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-green-600 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Resource Hub</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Educational materials, assistive technology, and local cognitive services</p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 text-xs rounded-full">Technology</span>
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs rounded-full">Resources</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Education Section */}
            <div className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-6">
                <BookOpen className="h-12 w-12 text-purple-600 mr-3 animate-pulse" />
                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Cognitive Learning Academy</h2>
              </div>
              <p className={`leading-relaxed transition-colors duration-300 mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Advanced educational resources and evidence-based learning strategies for cognitive development and neurodiversity inclusion. 
                Our comprehensive learning framework integrates adaptive technologies, personalized assessment tools, and skill-building programs designed to enhance cognitive accessibility and promote lifelong learning for individuals with diverse neurological profiles.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-800/30 dark:to-pink-800/30 rounded-xl p-4 border border-purple-200 dark:border-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-purple-600 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Individual Learning Pathways</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Adaptive AI Learning Technologies</span>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Personalized cognitive training platforms with real-time adaptation</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Neurocognitive Assessment Services</span>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive cognitive profiling and personalized learning plans</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Executive Skills Development</span>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Advanced cognitive skill-building and memory enhancement programs</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-xs rounded-full">AI-Powered</span>
                    <span className="px-2 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 text-xs rounded-full">Personalized</span>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-800/30 dark:to-blue-800/30 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-indigo-600 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Family & Caregiver Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Professional Training Programs</span>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Evidence-based caregiver education and support strategies</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Respite Care Coordination</span>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive support service planning and coordination</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Resource Navigation Systems</span>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Digital platform for accessing comprehensive cognitive resources</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">Support</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs rounded-full">Resources</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Community Section */}
            <div className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-amber-600 mr-3 animate-pulse" />
                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Neurodiverse Community Hub</h2>
              </div>
              <p className={`leading-relaxed transition-colors duration-300 mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Connecting with a neurodiverse community where individuals share similar cognitive experiences is fundamental to psychological well-being and social integration. 
                Our inclusive ecosystem fosters authentic belonging, reduces isolation through meaningful connections, and provides mutual understanding, peer support, and collective empowerment for individuals across the cognitive spectrum.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-800/30 dark:to-pink-800/30 rounded-xl p-4 border border-purple-200 dark:border-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-purple-600 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Neurodiverse Peer Networks</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Connect with others who understand and share similar cognitive experiences and challenges</p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-xs rounded-full">Peer Support</span>
                      <span className="px-2 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 text-xs rounded-full">Understanding</span>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-800/30 dark:to-blue-800/30 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-indigo-600 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Inclusive Community Events</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Neurodiversity-friendly gatherings and adaptive activities for all cognitive abilities</p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">Inclusive</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs rounded-full">Adaptive</span>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-800/30 dark:to-amber-800/30 rounded-xl p-4 border border-yellow-200 dark:border-yellow-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 group-hover:text-yellow-600 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Cognitive Advocacy Programs</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Meaningful opportunities to contribute and make a difference in cognitive inclusion</p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">Advocacy</span>
                      <span className="px-2 py-1 bg-amber-100 dark:bg-amber-800 text-amber-700 dark:text-amber-300 text-xs rounded-full">Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inspirational Quote */}
          <div className="text-center py-8">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-teal-600 pl-6 py-4">
              "Our mission is not just about providing support—it's about creating a world where cognitive differences are celebrated, understood, and embraced as vital contributions to our collective human experience."
            </blockquote>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Through dedication, innovation, and unwavering compassion, we build bridges of understanding that transform challenges into opportunities for growth, learning, and meaningful inclusion.
            </p>
          </div>
        </div>
      )}
      {activeSection === 'story' && (
        <div className="animate-fadeIn">
          <div className="text-center py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
            <div className="relative z-10">
              <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our Story</h2>
              <p className="text-lg max-w-3xl mx-auto italic leading-relaxed">
                Founded with deep understanding of cognitive challenges, our journey began when passionate professionals and families united to create support services. Through collaboration, innovation, and unwavering dedication, we've grown into a trusted resource that empowers lives and transforms communities through inclusive support.
              </p>
            </div>
          </div>
          {/* Story Journey Timeline */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <BookOpen className="h-12 w-12 text-purple-600 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Journey Timeline</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "The Genesis (2019)",
                  description: "Our journey began when healthcare professionals, educators, and families recognized critical gaps in cognitive support services. Through countless conversations with individuals living with cognitive disabilities, we understood the urgent need for comprehensive, accessible, and personalized support solutions.",
                  icon: "🌱",
                  color: "purple",
                  stats: { year: "2019", impact: "Foundation", growth: "100%" }
                },
                {
                  title: "Community Building (2020-2021)",
                  description: "We built our foundation on collaboration with neurodiversity advocates, cognitive specialists, technology experts, and most importantly, individuals with lived experiences. This collective wisdom shaped our approach to creating inclusive, empowering, and effective support systems.",
                  icon: "🤝",
                  color: "pink",
                  stats: { years: "2020-2021", impact: "Collaboration", growth: "300%" }
                },
                {
                  title: "Innovation & Growth (2022-Present)",
                  description: "Leveraging cutting-edge technology and evidence-based practices, we developed innovative solutions that adapt to individual needs. Our commitment to continuous improvement and research ensures we remain at the forefront of cognitive support services.",
                  icon: "🚀",
                  color: "indigo",
                  stats: { years: "2022+", impact: "Innovation", growth: "500%" }
                }
              ].map((phase, index) => (
                <div 
                  key={index}
                  className={`relative border-l-4 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 ${
                    `border-${phase.color}-600 bg-gradient-to-r from-${phase.color}-50 to-${phase.color}-100 dark:from-${phase.color}-900/20 dark:to-${phase.color}-800/20`
                  } rounded-xl p-6 group`}
                >
                  {/* Corner Number Badge */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center bg-${phase.color}-600 shadow-lg`}>
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  {/* Phase Icon */}
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-3">
                      {phase.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold text-${phase.color}-600 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{phase.title}</h3>
                    </div>
                  </div>
                  {/* Stats Display */}
                  <div className={`grid grid-cols-3 gap-2 mb-4`}>
                    {Object.entries(phase.stats).map(([key, value]) => (
                      <div key={key} className={`text-center p-2 rounded-lg bg-${phase.color}-50 dark:bg-${phase.color}-900/20`}>
                        <div className={`text-xs font-semibold text-${phase.color}-600 dark:text-${phase.color}-400 capitalize`}>{key}</div>
                        <div className={`text-sm font-bold text-${phase.color}-700 dark:text-${phase.color}-300`}>{value}</div>
                      </div>
                    ))}
                  </div>
                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {phase.description}
                  </p>
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className={`h-2 bg-${phase.color}-200 dark:bg-${phase.color}-800 rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-gradient-to-r from-${phase.color}-400 to-${phase.color}-600 transition-all duration-1000 rounded-full`}
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                  {/* Explore More Button */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <button 
                      onClick={() => {
                        console.log('Explore More clicked for phase:', phase.color);
                        const targetPage = phase.color === 'purple' ? 'genesis' : phase.color === 'pink' ? 'community' : 'innovation';
                        console.log('Navigating to explore page:', targetPage);
                        setExplorePage(targetPage);
                        // Navigate to the explore page
                        navigate(`/about/${targetPage}`);
                      }}
                      className={`bg-${phase.color}-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center space-x-1`}
                    >
                      <ArrowRight className="w-3 h-3" />
                      Explore More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Impact Statistics */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Heart className="h-12 w-12 text-purple-600 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Impact Journey</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10,000+", label: "Lives Impacted", icon: "👥", color: "purple", trend: "+25%" },
                { value: "500+", label: "Professional Partners", icon: "🤝", color: "pink", trend: "+40%" },
                { value: "50+", label: "Support Programs", icon: "🎯", color: "indigo", trend: "+60%" },
                { value: "24/7", label: "Support Available", icon: "⏰", color: "green", trend: "100%" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 dark:from-${stat.color}-900/20 dark:to-${stat.color}-800/20 rounded-xl p-6 transition-all duration-500 cursor-pointer group ${
                    selectedStat === index ? 'scale-110 shadow-2xl ring-4 ring-' + stat.color + '-400 ring-opacity-50' : 'hover:scale-105 hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedStat(selectedStat === index ? null : index)}
                  onMouseEnter={() => setSelectedStat(index)}
                >
                  {/* Floating Icon */}
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 text-3xl transition-all duration-500 ${
                    selectedStat === index ? 'scale-125 rotate-12' : 'group-hover:scale-110 group-hover:rotate-6'
                  }`}>
                    {stat.icon}
                  </div>
                  {/* Animated Counter */}
                  <div className={`text-3xl font-bold mb-2 transition-all duration-500 ${
                    selectedStat === index ? `text-${stat.color}-600 scale-110` : `text-${stat.color}-600 group-hover:scale-105`
                  }`}>
                    <span className="inline-block transition-all duration-1000" style={{
                      animation: selectedStat === index ? 'countUp 1s ease-out' : 'none'
                    }}>
                      {stat.value}
                    </span>
                  </div>
                  {/* Label with Trend */}
                  <div className="relative">
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </p>
                    {/* Trend Indicator */}
                    <div className={`absolute -top-1 -right-1 flex items-center space-x-1 px-2 py-1 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-800 transition-all duration-300 ${
                      selectedStat === index ? 'scale-110 opacity-100' : 'opacity-0 group-hover:opacity-100 scale-105'
                    }`}>
                      <TrendingUp className={`w-3 h-3 text-${stat.color}-600`} />
                      <span className={`text-xs font-bold text-${stat.color}-700 dark:text-${stat.color}-300`}>{stat.trend}</span>
                    </div>
                  </div>
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-1000 ${
                    selectedStat === index ? `bg-${stat.color}-400 opacity-20 animate-pulse` : 'opacity-0'
                  }`}></div>
                  {/* Detail Expansion */}
                  {selectedStat === index && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 border border-${stat.color}-200 dark:border-${stat.color}-700 transition-all duration-300 animate-fadeIn`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <Award className={`w-4 h-4 text-${stat.color}-600`} />
                          <span className={`text-sm font-bold text-${stat.color}-700 dark:text-${stat.color}-300`}>Achievement Unlocked</span>
                        </div>
                        <p className={`text-xs text-gray-600 dark:text-gray-300`}>
                          Click to explore detailed insights about our {stat.label.toLowerCase()} milestone and impact stories.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Key Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Milestones Section */}
            <div className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-purple-600" />
              </div>
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Key Milestones</h2>
              <p className={`leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Our journey has been marked by significant achievements that have transformed cognitive support services and empowered countless individuals to lead more independent, fulfilling lives.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Launch of PriHub Platform</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Revolutionized digital accessibility with AI-powered cognitive support tools and personalized assistance features.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>National Recognition</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Received multiple awards for innovation in cognitive accessibility and inclusive technology solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Global Partnership Network</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Established partnerships with leading healthcare institutions and cognitive research centers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Vision Section */}
            <div className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-6">
                <Users2 className="h-12 w-12 text-purple-600" />
              </div>
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Vision for Tomorrow</h2>
              <p className={`leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We envision a world where cognitive disabilities are no longer barriers to success, where technology empowers every individual to reach their full potential, and where inclusive communities celebrate neurodiversity as a strength.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Advanced AI Integration</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Next-generation artificial intelligence for personalized cognitive support and adaptive learning experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Global Accessibility Standards</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Setting new benchmarks for digital accessibility and cognitive support across all platforms and devices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Community Empowerment</h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Building self-sustaining communities where individuals with cognitive disabilities support and empower each other.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inspirational Quote */}
          <div className="text-center py-8">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-5xl mx-auto border-l-4 border-purple-600 pl-6 py-4">
              "Founded with a deep understanding of challenges faced by individuals with cognitive disabilities, our journey began when passionate professionals and families came together to create comprehensive support services."
            </blockquote>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-5xl mx-auto">
              Through collaboration, innovation, and unwavering dedication, we've grown into a trusted resource that empowers lives and transforms communities through inclusive support and understanding.
            </p>
          </div>
        </div>
      )}
      {activeSection === 'values' && (
        <div className="animate-fadeIn">
          <div className="text-center py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <Heart className="h-16 w-16 text-red-500 mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Our Core Values</h2>
              <p className="text-lg max-w-3xl mx-auto italic mb-8">
                Our core values guide everything we do, ensuring we provide the best possible support and resources for our community members. These principles empower individuals with cognitive disabilities to reach their full potential through dedicated service and unwavering support.
              </p>
            </div>
          </div>
          {/* Values Grid - Enhanced */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Heart className="h-12 w-12 text-red-500 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Guiding Principles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-red-500 pl-4 transition-all duration-300 hover:border-red-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-red-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Compassion & Empathy</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We lead with understanding and compassion, recognizing the unique challenges faced by individuals with cognitive disabilities. Every interaction is guided by genuine care and empathy for our community members.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 transition-all duration-300 hover:border-orange-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-orange-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Integrity & Trust</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We build trust through transparency, honesty, and ethical practices. Our commitment to integrity ensures that our community can rely on us for accurate information and dependable support.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 transition-all duration-300 hover:border-yellow-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-yellow-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Innovation & Excellence</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We continuously seek innovative solutions and strive for excellence in everything we do. Our dedication to improvement ensures we provide the most effective and cutting-edge support available.
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4 transition-all duration-300 hover:border-pink-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-pink-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Inclusivity & Accessibility</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We believe in creating an inclusive environment where everyone feels welcome and valued. Our commitment to accessibility ensures that all individuals can participate fully in our community.
                </p>
              </div>
            </div>
          </div>
          {/* Values Impact Section */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Star className="h-12 w-12 text-yellow-500 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Values in Action</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="group relative bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 dark:from-red-900/20 dark:via-pink-900/20 dark:to-rose-900/20 rounded-2xl border border-red-200 dark:border-red-700 p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1 cursor-pointer">
                <div className="absolute top-3 right-3 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center group-hover:animate-spin">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-red-700 dark:text-red-300 mb-2 text-lg">Community Support</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-red-600 font-semibold">ACTIVE</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Revolutionary quantum-empowered cognitive assistance matrix supporting 10,000+ individuals through neural-adaptive community programs and AI-driven personalized intervention protocols
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 text-xs rounded-full">Quantum Matrix</span>
                  <span className="px-2 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 text-xs rounded-full">Neural-Adaptive</span>
                  <span className="px-2 py-1 bg-rose-100 dark:bg-rose-800 text-rose-700 dark:text-rose-300 text-xs rounded-full">AI Protocols</span>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900/20 dark:via-amber-900/20 dark:to-yellow-900/20 rounded-2xl border border-orange-200 dark:border-orange-700 p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-1 cursor-pointer">
                <div className="absolute top-3 right-3 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2 text-lg">Trust Built</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-orange-600 font-semibold">VERIFIED</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Blockchain-verified 98% satisfaction rate with zero-knowledge proof authentication, quantum-encrypted transparency protocols, and decentralized cognitive support service delivery
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300 text-xs rounded-full">Blockchain</span>
                  <span className="px-2 py-1 bg-amber-100 dark:bg-amber-800 text-amber-700 dark:text-amber-300 text-xs rounded-full">Zero-Knowledge</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">Quantum Safe</span>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-yellow-50 via-lime-50 to-green-50 dark:from-yellow-900/20 dark:via-lime-900/20 dark:to-green-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-700 p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1 cursor-pointer">
                <div className="absolute top-3 right-3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-lime-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <span className="text-white text-2xl">🌟</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-2 text-lg">Innovation Impact</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-yellow-600 font-semibold">PATENTED</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  50+ patent-pending breakthrough solutions leveraging quantum machine learning, neural interface technologies, and metaverse cognitive rehabilitation environments
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">Quantum ML</span>
                  <span className="px-2 py-1 bg-lime-100 dark:bg-lime-800 text-lime-700 dark:text-lime-300 text-xs rounded-full">Neural Interface</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 text-xs rounded-full">Metaverse</span>
                </div>
              </div>
            </div>
          </div>
          {/* Advanced Values Framework */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Brain className="h-12 w-12 text-purple-500 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Quantum Values Implementation Framework</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 dark:from-red-900/20 dark:via-pink-900/20 dark:to-rose-900/20 rounded-2xl border border-red-200 dark:border-red-700 p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-2 cursor-pointer">
                <div className="absolute top-3 right-3 w-14 h-14 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center group-hover:animate-spin">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">Quantum Strategic Alignment</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-red-600 font-semibold">QUANTUM</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Neural network-powered decision matrices with quantum-inspired algorithms ensuring perfect alignment between core values and cognitive support initiatives through predictive analytics and real-time optimization
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 text-xs rounded-full">Neural Networks</span>
                  <span className="px-2 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 text-xs rounded-full">Quantum AI</span>
                  <span className="px-2 py-1 bg-rose-100 dark:bg-rose-800 text-rose-700 dark:text-rose-300 text-xs rounded-full">Predictive</span>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900/20 dark:via-amber-900/20 dark:to-yellow-900/20 rounded-2xl border border-orange-200 dark:border-orange-700 p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-2 cursor-pointer">
                <div className="absolute top-3 right-3 w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Hyperdimensional Impact Analytics</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-orange-600 font-semibold">MULTI-DIM</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Multi-dimensional quantum analytics engine with real-time cognitive impact assessment, predictive modeling, and AI-driven continuous optimization across infinite dimensional value spaces
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300 text-xs rounded-full">Quantum Engine</span>
                  <span className="px-2 py-1 bg-amber-100 dark:bg-amber-800 text-amber-700 dark:text-amber-300 text-xs rounded-full">Real-Time</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">Infinite</span>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-yellow-50 via-lime-50 to-green-50 dark:from-yellow-900/20 dark:via-lime-900/20 dark:to-green-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-700 p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-2 cursor-pointer">
                <div className="absolute top-3 right-3 w-14 h-14 bg-gradient-to-br from-yellow-400 to-lime-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <span className="text-white text-xl">🔄</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">Autonomous Evolution Matrix</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-yellow-600 font-semibold">AUTONOMOUS</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Self-evolving quantum neural systems with autonomous learning capabilities, continuously adapting values through recursive improvement loops and emergent intelligence protocols
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">Self-Evolving</span>
                  <span className="px-2 py-1 bg-lime-100 dark:bg-lime-800 text-lime-700 dark:text-lime-300 text-xs rounded-full">Recursive</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 text-xs rounded-full">Emergent AI</span>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-2xl border border-pink-200 dark:border-pink-700 p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-2 cursor-pointer">
                <div className="absolute top-3 right-3 w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center group-hover:animate-spin">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Universal Quantum Standards</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-pink-600 font-semibold">UNIVERSAL</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Trans-dimensional compliance framework exceeding all known accessibility standards, implementing quantum-safe protocols and universal cognitive support across all realities
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 text-xs rounded-full">Trans-Dim</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-xs rounded-full">Quantum Safe</span>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">Multi-Reality</span>
                </div>
              </div>
            </div>
          </div>
          {/* Inspirational Quote */}
          <div className="text-center py-8">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-red-600 pl-6 py-4">
              "Our values are the compass that guides every decision, every interaction, and every innovation—ensuring that dignity, respect, and empowerment remain at the heart of everything we do."
            </blockquote>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Through unwavering commitment to excellence and compassion, we create a foundation of trust that enables individuals to flourish and communities to thrive together.
            </p>
          </div>
        </div>
      )}
      {activeSection === 'technology' && (
        <div className="animate-fadeIn">
          <div className="text-center py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 animate-pulse"></div>
            <div className="relative z-10">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-spin" />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Advanced Technology Stack</h2>
              <p className="text-lg max-w-3xl mx-auto italic mb-8">
                We leverage cutting-edge technology to provide accessible, user-friendly tools and resources that enhance quality of life for individuals with cognitive disabilities. Through innovative solutions and adaptive technologies, we break down barriers and create opportunities.
              </p>
            </div>
          </div>
          {/* Technology Grid - Enhanced */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Shield className="h-12 w-12 text-blue-600 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Technology Ecosystem</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4 transition-all duration-300 hover:border-blue-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>AI-Powered Cognitive Support</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Advanced artificial intelligence algorithms provide personalized assistance, adaptive learning, and predictive support tailored to individual cognitive needs and preferences.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4 transition-all duration-300 hover:border-cyan-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-cyan-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Multi-Modal Accessibility</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Comprehensive accessibility features including text-to-speech, screen reader compatibility, voice commands, and visual aids for diverse cognitive needs.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 transition-all duration-300 hover:border-indigo-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-indigo-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Real-Time Analytics</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Advanced analytics and monitoring systems track progress, identify patterns, and provide insights for continuous improvement and personalized support.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4 transition-all duration-300 hover:border-teal-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-teal-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Cloud-Based Infrastructure</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Secure, scalable cloud infrastructure ensures 24/7 availability, data synchronization, and seamless access across all devices and platforms.
                </p>
              </div>
            </div>
          </div>
          {/* Technology Impact Section */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Zap className="h-12 w-12 text-yellow-500 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Advanced Technology Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Elite Performance</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  99.9% uptime with sub-second response times powered by distributed cloud infrastructure and edge computing for critical cognitive support features
                </p>
              </div>
              <div className="text-center p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Military-Grade Security</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Enterprise-grade AES-256 encryption and zero-knowledge architecture ensuring complete privacy protection for all user data and HIPAA-compliant interactions
                </p>
              </div>
              <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Global Accessibility</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Available in 50+ languages with AI-powered real-time translation and culturally-adapted accessibility features serving users worldwide
                </p>
              </div>
            </div>
          </div>
          {/* Advanced Technology Architecture */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Shield className="h-12 w-12 text-blue-600 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Next-Generation Technology Architecture</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Quantum Neural Networks</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced deep learning algorithms with quantum-inspired computing for revolutionary pattern recognition and adaptive cognitive support systems
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-xl border border-cyan-200 dark:border-cyan-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Quantum-Speed Processing</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Nanosecond-level response times utilizing quantum computing principles for instantaneous cognitive assistance and real-time adaptation
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-xl border border-indigo-200 dark:border-indigo-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl mb-3">🔗</div>
                <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">Universal API Ecosystem</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Blockchain-powered API integration enabling seamless connectivity with global healthcare systems, educational platforms, and IoT devices
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 rounded-xl border border-teal-200 dark:border-teal-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-2">Omniversal Platform</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Cross-dimensional compatibility spanning all devices, browsers, operating systems, and emerging technologies including AR/VR/MR environments
                </p>
              </div>
            </div>
          </div>
          {/* Technology Roadmap */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <TrendingUp className="h-12 w-12 text-green-500 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Revolutionary Technology Roadmap</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-700 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                <div className="absolute top-2 right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:animate-bounce">
                  <span className="text-white font-bold">Q1</span>
                </div>
                <div className="mb-4">
                  <h3 className={`text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Quantum AI Enhancement Suite</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-600 font-semibold">IN DEVELOPMENT</span>
                  </div>
                </div>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Revolutionary quantum machine learning models featuring neural architecture search and transfer learning for hyper-personalized cognitive support patterns and predictive analytics with 99.8% accuracy
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs rounded-full">Quantum ML</span>
                  <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs rounded-full">Neural Search</span>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">99.8% Accuracy</span>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Progress: 75%</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-cyan-900/20 dark:to-indigo-900/20 rounded-lg border border-cyan-200 dark:border-cyan-700 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                <div className="absolute top-2 right-2 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center group-hover:animate-bounce">
                  <span className="text-white font-bold">Q2</span>
                </div>
                <div className="mb-4">
                  <h3 className={`text-lg font-semibold mb-2 group-hover:text-cyan-600 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Neural Voice Integration Platform</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-cyan-600 font-semibold">PLANNING</span>
                  </div>
                </div>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Advanced natural language processing with emotional intelligence and contextual understanding for completely hands-free cognitive assistance and voice-activated features supporting 100+ languages and dialects
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs rounded-full">NLP AI</span>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">100+ Languages</span>
                  <span className="px-2 py-1 bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 text-xs rounded-full">Voice AI</span>
                </div>
                <div className="mt-4 pt-4 border-t border-cyan-200 dark:border-cyan-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Progress: 45%</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-indigo-900/20 dark:to-teal-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                <div className="absolute top-2 right-2 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:animate-bounce">
                  <span className="text-white font-bold">Q3</span>
                </div>
                <div className="mb-4">
                  <h3 className={`text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Quantum Blockchain Security Framework</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-indigo-600 font-semibold">RESEARCH</span>
                  </div>
                </div>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Quantum-resistant blockchain with zero-knowledge proofs and homomorphic encryption for strong privacy, decentralized identity, and secure multi-party computation
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">Blockchain</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-xs rounded-full">Quantum Security</span>
                  <span className="px-2 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 text-xs rounded-full">Zero-Knowledge</span>
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Progress: 30%</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg border border-teal-200 dark:border-teal-700 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                <div className="absolute top-2 right-2 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:animate-bounce">
                  <span className="text-white font-bold">Q4</span>
                </div>
                <div className="mb-4">
                  <h3 className={`text-lg font-semibold mb-2 group-hover:text-teal-600 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Metaverse Cognitive Therapy Ecosystem</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-teal-600 font-semibold">CONCEPT</span>
                  </div>
                </div>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Fully immersive AR/VR/XR metaverse environments with haptic feedback and brain-computer interfaces for revolutionary cognitive rehabilitation, skill development, and therapeutic experiences in virtual worlds
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 text-xs rounded-full">AR/VR/XR</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 text-xs rounded-full">Metaverse</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs rounded-full">Brain Interface</span>
                </div>
                <div className="mt-4 pt-4 border-t border-teal-200 dark:border-teal-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Progress: 15%</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inspirational Quote */}
          <div className="text-center py-8">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-blue-600 pl-6 py-4">
              "Technology is not just our tool—it's our bridge to a more accessible world, where innovation meets compassion to create solutions that empower every mind to reach its full potential."
            </blockquote>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Through cutting-edge research and human-centered design, we pioneer breakthrough technologies that transform barriers into gateways of opportunity and independence.
            </p>
          </div>
        </div>
      )}
      {activeSection === 'team' && (
        <div className="animate-fadeIn">
          <div className="text-center py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 animate-pulse"></div>
            <div className="relative z-10">
              <Users2 className="h-16 w-16 text-green-600 mx-auto mb-4 animate-ping" />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Expert Team</h2>
              <p className="text-lg max-w-3xl mx-auto italic mb-8">
                Our dedicated team of professionals brings together expertise in healthcare, education, technology, and lived experience to provide comprehensive support. With diverse backgrounds and shared passion, we collaborate to deliver innovative solutions that make a difference.
              </p>
            </div>
          </div>
          {/* Team Structure - Enhanced */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Users2 className="h-12 w-12 text-green-600 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Team Structure</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-500 pl-4 transition-all duration-300 hover:border-green-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-green-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Clinical Professionals</h3>
                <p className={`text-base leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Licensed healthcare professionals including neurologists, psychologists, and cognitive therapists provide evidence-based support and guidance for complex cognitive needs.
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4 transition-all duration-300 hover:border-emerald-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-emerald-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Technology Experts</h3>
                <p className={`text-base leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Software engineers, AI specialists, and accessibility experts develop cutting-edge solutions and ensure seamless user experiences across all platforms and devices.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4 transition-all duration-300 hover:border-teal-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-teal-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Education Specialists</h3>
                <p className={`text-base leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Special education professionals and curriculum designers create adaptive learning materials and educational strategies tailored to diverse cognitive abilities and learning styles.
                </p>
              </div>
              <div className="border-l-4 border-lime-500 pl-4 transition-all duration-300 hover:border-lime-600 hover:shadow-md hover:transform hover:translate-x-1 group">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-lime-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Community Advocates</h3>
                <p className={`text-base leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Individuals with lived experience and community advocates ensure our solutions remain user-centered, culturally sensitive, and truly responsive to community needs.
                </p>
              </div>
            </div>
          </div>
          {/* Team Impact Section */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Award className="h-12 w-12 text-yellow-500 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Team Excellence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border border-purple-200 dark:border-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Expertise</h4>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  50+ certified professionals with average 10+ years experience in cognitive support
                </p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Dedication</h4>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  24/7 support availability with rapid response times for urgent assistance needs
                </p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg border border-amber-200 dark:border-amber-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Innovation</h4>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  15+ patents and awards for breakthrough cognitive support technologies
                </p>
              </div>
            </div>
          </div>
          {/* Meet Our Leadership Team */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Users className="h-12 w-12 text-green-600 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Meet Our Leadership Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pranjal Khandelwal */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border border-green-200 dark:border-green-700 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-start mb-4">
                  <div className="relative mr-4 flex-shrink-0">
                    <img 
                      src="/pranjal-passport.png" 
                      alt="Pranjal Khandelwal" 
                      className="w-20 h-20 rounded-full object-cover border-2 border-green-400"
                      onError={(e) => {
                        console.log('Image failed to load, using fallback');
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMxMGI5ODEiLz4KPHRleHQgeD0iNDAiIHk9IjQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                      PK
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className={`text-xl font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Pranjal Khandelwal</h3>
                    <p className="text-green-600 dark:text-green-400 font-semibold">Founder & CEO</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className={`mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Visionary leader driving innovation in cognitive support technology with expertise in full-stack development and strategic research.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 text-sm rounded-full">Full Stack Development</span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm rounded-full">Revenue Analysis</span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 text-sm rounded-full">Technology Finalization</span>
                  </div>
                </div>
                <div className="border-t border-green-200 dark:border-green-700 pt-4">
                  <h4 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Key Responsibilities:</h4>
                  <ul className={`space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• Strategic technology roadmap and research direction</li>
                    <li>• Revenue optimization and business growth</li>
                    <li>• Product development and innovation oversight</li>
                  </ul>
                </div>
              </div>
              {/* Ketan Chowdhury */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl border border-blue-200 dark:border-blue-700 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-start mb-4">
                  <div className="relative mr-4 flex-shrink-0">
                    <img 
                      src="/ketan-passport.jpeg" 
                      alt="Ketan Chowdhury" 
                      className="w-20 h-20 rounded-full object-cover border-2 border-blue-400"
                      onError={(e) => {
                        console.log('Image failed to load, using fallback');
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMwMjc0YmEiLz4KPHRleHQgeD0iNDAiIHk9IjQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                      KC
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className={`text-xl font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Ketan Chowdhury</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">COO & Marketing Research Head</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className={`mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Operational excellence expert with deep market insights and customer-centric approach to business growth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-sm rounded-full">Market Analysis</span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-300 text-sm rounded-full">Feedback Collection</span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">Operations</span>
                  </div>
                </div>
                <div className="border-t border-blue-200 dark:border-blue-700 pt-4">
                  <h4 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Key Responsibilities:</h4>
                  <ul className={`space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• Market research and competitive analysis</li>
                    <li>• Customer feedback integration and improvement</li>
                    <li>• Operational efficiency and team management</li>
                  </ul>
                </div>
              </div>
              {/* Vishakha Tomar */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl border border-purple-200 dark:border-purple-700 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-start mb-4">
                  <div className="relative mr-4 flex-shrink-0">
                    <img 
                      src="/vishakha-passport.jpg" 
                      alt="Vishakha Tomar" 
                      className="w-20 h-20 rounded-full object-cover border-2 border-purple-400"
                      onError={(e) => {
                        console.log('Image failed to load, using fallback');
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMzEwMGMxIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                      VT
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className={`text-xl font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Vishakha Tomar</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">CFO</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className={`mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Financial strategist with expertise in cost optimization and data-driven decision making for sustainable growth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-sm rounded-full">Cost Analysis</span>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-300 text-sm rounded-full">Survey Data</span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">Financial Planning</span>
                  </div>
                </div>
                <div className="border-t border-purple-200 dark:border-purple-700 pt-4">
                  <h4 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Key Responsibilities:</h4>
                  <ul className={`space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• Cost analysis and financial optimization</li>
                    <li>• Survey data summarization and insights</li>
                    <li>• Budget planning and financial oversight</li>
                  </ul>
                </div>
              </div>
              {/* Pelheiba Khangebam */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl border border-orange-200 dark:border-orange-700 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-start mb-4">
                  <div className="relative mr-4 flex-shrink-0">
                    <img 
                      src="/pelheiba-passport.jpeg" 
                      alt="Pelheiba Khangebam" 
                      className="w-20 h-20 rounded-full object-cover border-2 border-orange-400"
                      onError={(e) => {
                        console.log('Image failed to load, using fallback');
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMwYzYzEiLz4KPHRleHQgeD0iNDAiIHk9IjQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                      PK
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className={`text-xl font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Pelheiba Khangebam</h3>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold">CTO</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className={`mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Technology architect specializing in survey systems and data analytics for comprehensive cognitive support solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300 text-sm rounded-full">Google Forms</span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 text-sm rounded-full">Survey Analysis</span>
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm rounded-full">Data Gathering</span>
                  </div>
                </div>
                <div className="border-t border-orange-200 dark:border-orange-700 pt-4">
                  <h4 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Key Responsibilities:</h4>
                  <ul className={`space-y-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• Google Form creation and survey design</li>
                    <li>• Survey analysis and data interpretation</li>
                    <li>• Technology infrastructure and data gathering systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Team Collaboration Framework */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl mb-8 transform hover:scale-[1.02] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center mb-6">
              <Globe className="h-12 w-12 text-blue-500 mr-3 animate-pulse" />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Team Collaboration Framework</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border border-green-200 dark:border-green-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Cross-Functional</h4>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Integrated teams working seamlessly across technology, research, and operations for comprehensive project success
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Data-Driven</h4>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Evidence-based decision making with comprehensive analytics and insights for strategic cognitive support solutions
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl border border-purple-200 dark:border-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Goal-Oriented</h4>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Clear objectives and measurable outcomes for maximum impact and efficiency through strategic planning
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl border border-orange-200 dark:border-orange-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Innovation-Focused</h4>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Continuous improvement and cutting-edge solutions for cognitive support through advanced research and development
                </p>
              </div>
            </div>
          </div>
          {/* Inspirational Quote */}
          <div className="text-center py-8">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-green-600 pl-6 py-4">
              "Our team is more than experts—we are passionate advocates, innovative thinkers, and compassionate allies dedicated to creating a world where cognitive diversity is celebrated and supported."
            </blockquote>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Through collective expertise and shared commitment, we transform understanding into action, creating lasting impact that ripples through families, communities, and society at large.
            </p>
          </div>
        </div>
      )}
      {/* Explore Pages - Separate Routes */}
      {explorePage === 'genesis' && <GenesisExplore />}
      {explorePage === 'community' && <CommunityExplore />}
      {explorePage === 'innovation' && <InnovationExplore />}
    </div>
  );
};
export default About;
