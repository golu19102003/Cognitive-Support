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

              <p className="text-lg max-w-2xl mx-auto italic leading-relaxed">

                Founded with deep understanding of cognitive disability challenges, we provide comprehensive support, understanding, and essential resources for individuals and families. We're fully committed to creating a truly inclusive society where everyone truly thrives and flourishes, regardless of cognitive abilities.

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

              <div className="border-l-4 border-[#16808D] pl-4 transition-all duration-300 hover:border-[#16808D] hover:shadow-md hover:transform hover:translate-x-1 group">

                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#16808D] ${

                  isDarkMode ? 'text-white' : 'text-gray-900'

                }`}>Empowerment Through Knowledge</h3>

                <p className={`transition-colors duration-300 ${

                  isDarkMode ? 'text-gray-300' : 'text-gray-600'

                }`}>

                  Education and awareness break barriers, fostering understanding in communities through accurate information about cognitive disabilities.

                </p>

              </div>

              

              <div className="border-l-4 border-[#16808D] pl-4 transition-all duration-300 hover:border-[#16808D] hover:shadow-md hover:transform hover:translate-x-1 group">

                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#16808D] ${

                  isDarkMode ? 'text-white' : 'text-gray-900'

                }`}>Comprehensive Support Systems</h3>

                <p className={`transition-colors duration-300 ${

                  isDarkMode ? 'text-gray-300' : 'text-gray-600'

                }`}>

                  Beyond basic resources, we provide professional guidance, peer networks, and innovative technology solutions for cognitive accessibility.

                </p>

              </div>

              

              <div className="border-l-4 border-[#16808D] pl-4 transition-all duration-300 hover:border-[#16808D] hover:shadow-md hover:transform hover:translate-x-1 group">

                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#16808D] ${

                  isDarkMode ? 'text-white' : 'text-gray-900'

                }`}>Building Inclusive Communities</h3>

                <p className={`transition-colors duration-300 ${

                  isDarkMode ? 'text-gray-300' : 'text-gray-600'

                }`}>

                  Creating environments where individuals with cognitive disabilities feel valued, respected, and fully included in all aspects of life.

                </p>

              </div>

              

              <div className="border-l-4 border-[#16808D] pl-4 transition-all duration-300 hover:border-[#16808D] hover:shadow-md hover:transform hover:translate-x-1 group">

                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#16808D] ${

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

          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Understanding Section */}

            <div className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${

              isDarkMode ? 'bg-gray-800' : 'bg-white'

            }`}>

              <div className="flex items-center mb-6">

                <Users className="h-12 w-12 text-[#16808D]" />

              </div>

              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${

                isDarkMode ? 'text-white' : 'text-gray-900'

              }`}>Understanding</h2>

              <p className={`leading-relaxed transition-colors duration-300 ${

                isDarkMode ? 'text-gray-300' : 'text-gray-600'

              }`}>

                Cognitive disabilities encompass a range of conditions affecting thinking, learning, and memory, which can significantly impact daily life. 

                Understanding these conditions is the first step toward creating an inclusive and supportive environment.

              </p>

              

              <div className="mt-6 space-y-4">

                <div className="flex items-start space-x-3">

                  <div className="w-8 h-8 bg-[#16808D] rounded-full flex items-center justify-center flex-shrink-0">

                    <span className="text-white font-bold">1</span>

                  </div>

                  <div>

                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                      isDarkMode ? 'text-white' : 'text-gray-900'

                    }`}>Attention & Focus</h3>

                    <p className={`transition-colors duration-300 ${

                      isDarkMode ? 'text-gray-300' : 'text-gray-600'

                    }`}>Difficulty sustaining attention on tasks or conversations</p>

                  </div>

                </div>

                

                <div className="flex items-start space-x-3">

                  <div className="w-8 h-8 bg-[#16808D] rounded-full flex items-center justify-center flex-shrink-0">

                    <span className="text-white font-bold">2</span>

                  </div>

                  <div>

                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                      isDarkMode ? 'text-white' : 'text-gray-900'

                    }`}>Memory & Processing</h3>

                    <p className={`transition-colors duration-300 ${

                      isDarkMode ? 'text-gray-300' : 'text-gray-600'

                    }`}>Challenges with remembering information or following multi-step instructions</p>

                  </div>

                </div>

                

                <div className="flex items-start space-x-3">

                  <div className="w-8 h-8 bg-[#16808D] rounded-full flex items-center justify-center flex-shrink-0">

                    <span className="text-white font-bold">3</span>

                  </div>

                  <div>

                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                      isDarkMode ? 'text-white' : 'text-gray-900'

                    }`}>Executive Function</h3>

                    <p className={`transition-colors duration-300 ${

                      isDarkMode ? 'text-gray-300' : 'text-gray-600'

                    }`}>Difficulty with planning, organizing, or completing tasks</p>

                  </div>

                </div>

                

                <div className="flex items-start space-x-3">

                  <div className="w-8 h-8 bg-[#16808D] rounded-full flex items-center justify-center flex-shrink-0">

                    <span className="text-white font-bold">4</span>

                  </div>

                  <div>

                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                      isDarkMode ? 'text-white' : 'text-gray-900'

                    }`}>Social Communication</h3>

                    <p className={`transition-colors duration-300 ${

                      isDarkMode ? 'text-gray-300' : 'text-gray-600'

                    }`}>Challenges in understanding social cues or maintaining relationships</p>

                  </div>

                </div>

              </div>

            </div>



            {/* Support Section */}

            <div className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${

              isDarkMode ? 'bg-gray-800' : 'bg-white'

            }`}>

              <div className="flex items-center mb-6">

                <Heart className="h-12 w-12 text-red-500" />

              </div>

              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${

                isDarkMode ? 'text-white' : 'text-gray-900'

              }`}>Support</h2>

              <p className={`leading-relaxed transition-colors duration-300 ${

                isDarkMode ? 'text-gray-300' : 'text-gray-600'

              }`}>

                Access professional help, Support groups, and community resources. You can consider accessing professional help, 

                joining Support groups, and utilizing community resources. For emotional distress, 988 Suicide & Crisis Lifeline 

                offers 24/7 confidential support via call, text, or online chat.

              </p>

              

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="text-center">

                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">

                    <Phone className="h-8 w-8 text-red-600" />

                  </div>

                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                    isDarkMode ? 'text-white' : 'text-gray-900'

                  }`}>24/7 Helpline</h3>

                  <p className={`transition-colors duration-300 ${

                    isDarkMode ? 'text-gray-300' : 'text-gray-600'

                  }`}>988 Suicide & Crisis Lifeline</p>

                  <p className={`text-sm transition-colors duration-300 ${

                    isDarkMode ? 'text-gray-400' : 'text-gray-500'

                  }`}>988-988-9882</p>

                </div>

                

                <div className="text-center">

                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">

                    <Users2 className="h-8 w-8 text-blue-600" />

                  </div>

                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                    isDarkMode ? 'text-white' : 'text-gray-900'

                  }`}>Support Groups</h3>

                  <p className="text-gray-600">Connect with others who understand and share similar experiences</p>

                </div>

                

                <div className="text-center">

                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

                    <BookOpen className="h-8 w-8 text-green-600" />

                  </div>

                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                    isDarkMode ? 'text-white' : 'text-gray-900'

                  }`}>Community Resources</h3>

                  <p className={`transition-colors duration-300 ${

                    isDarkMode ? 'text-gray-300' : 'text-gray-600'

                  }`}>Educational materials, assistive technology, and local services</p>

                </div>

              </div>

            </div>



            {/* Education Section */}

            <div className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${

              isDarkMode ? 'bg-gray-800' : 'bg-white'

            }`}>

              <div className="flex items-center mb-6">

                <BookOpen className="h-12 w-12 text-[#16808D]" />

              </div>

              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${

                isDarkMode ? 'text-white' : 'text-gray-900'

              }`}>Education</h2>

              <p className={`leading-relaxed transition-colors duration-300 ${

                isDarkMode ? 'text-gray-300' : 'text-gray-600'

              }`}>

                Educational resources and strategies for learning and development. A comprehensive learning and development (L&D) strategy 

                outlines how an organization develops its workforce, aligning with business goals and addressing employee learning needs.

              </p>

              

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-4">

                  <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${

                    isDarkMode ? 'text-white' : 'text-gray-900'

                  }`}>For Individuals</h3>

                  <ul className="space-y-2 text-gray-600">

                    <li className="flex items-start space-x-2">

                      <ChevronRight className="h-4 w-4 text-[#16808D] mt-1 flex-shrink-0" />

                      <span>Adaptive learning technologies and tools</span>

                    </li>

                    <li className="flex items-start space-x-2">

                      <ChevronRight className="h-4 w-4 text-[#16808D] mt-1 flex-shrink-0" />

                      <span>Cognitive assessment and planning services</span>

                    </li>

                    <li className="flex items-start space-x-2">

                      <ChevronRight className="h-4 w-4 text-[#16808D] mt-1 flex-shrink-0" />

                      <span>Skills training and development programs</span>

                    </li>

                  </ul>

                </div>

                

                <div className="space-y-4">

                  <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${

                    isDarkMode ? 'text-white' : 'text-gray-900'

                  }`}>For Families & Caregivers</h3>

                  <ul className="space-y-2 text-gray-600">

                    <li className="flex items-start space-x-2">

                      <ChevronRight className="h-4 w-4 text-[#16808D] mt-1 flex-shrink-0" />

                      <span>Training and support programs</span>

                    </li>

                    <li className="flex items-start space-x-2">

                      <ChevronRight className="h-4 w-4 text-[#16808D] mt-1 flex-shrink-0" />

                      <span>Respite care services</span>

                    </li>

                    <li className="flex items-start space-x-2">

                      <ChevronRight className="h-4 w-4 text-[#16808D] mt-1 flex-shrink-0" />

                      <span>Information and resource navigation</span>

                    </li>

                  </ul>

                </div>

              </div>

            </div>



            {/* Community Section */}

            <div className={`bg-white rounded-lg shadow-lg p-8 transition-colors duration-300 ${

              isDarkMode ? 'bg-gray-800' : 'bg-white'

            }`}>

              <div className="flex items-center mb-6">

                <Users className="h-12 w-12 text-[#16808D]" />

              </div>

              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${

                isDarkMode ? 'text-white' : 'text-gray-900'

              }`}>Community</h2>

              <p className={`leading-relaxed transition-colors duration-300 ${

                isDarkMode ? 'text-gray-300' : 'text-gray-600'

              }`}>

                Connecting with a community, especially one where individuals share similar experiences, is crucial for well-being. 

                It fosters a sense of belonging, reduces feelings of isolation, and provides mutual Support and understanding.

              </p>

              

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="text-center">

                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">

                    <Users className="h-8 w-8 text-purple-600" />

                  </div>

                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                    isDarkMode ? 'text-white' : 'text-gray-900'

                  }`}>Peer Support Networks</h3>

                  <p className="text-gray-600">Connect with others who understand and share similar experiences</p>

                </div>

                

                <div className="text-center">

                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">

                    <MapPin className="h-8 w-8 text-indigo-600" />

                  </div>

                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                    isDarkMode ? 'text-white' : 'text-gray-900'

                  }`}>Community Events</h3>

                  <p className={`transition-colors duration-300 ${

                    isDarkMode ? 'text-gray-300' : 'text-gray-600'

                  }`}>Inclusive gatherings and activities for all abilities</p>

                </div>

                

                <div className="text-center">

                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">

                    <Heart className="h-8 w-8 text-yellow-600" />

                  </div>

                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${

                    isDarkMode ? 'text-white' : 'text-gray-900'

                  }`}>Volunteer Opportunities</h3>

                  <p className={`transition-colors duration-300 ${

                    isDarkMode ? 'text-gray-300' : 'text-gray-600'

                  }`}>Ways to get involved and make a difference</p>

                </div>

              </div>

            </div>

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
              <p className="text-lg max-w-2xl mx-auto italic leading-relaxed">
                Founded with a deep understanding of challenges faced by individuals with cognitive disabilities, our journey began when passionate professionals and families came together to create comprehensive support services. Through collaboration, innovation, and unwavering dedication, we've grown into a trusted resource that empowers lives and transforms communities through inclusive support and understanding.
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
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-purple-600 pl-6 py-4">
              "Founded with deep understanding and compassion, we've grown into a trusted resource that empowers lives and transforms communities through inclusive support, innovative solutions, and unwavering dedication to cognitive wellness."
            </blockquote>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Through collaboration, innovation, and unwavering dedication, we continue to break barriers and create pathways to independence, dignity, and fulfillment for every individual we serve.
            </p>
          </div>
        </div>
      )}



      {activeSection === 'values' && (

        <div className="text-center py-12 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse"></div>

          <div className="relative z-10">

            <Heart className="h-16 w-16 text-red-500 mx-auto mb-4 animate-pulse" />

            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Our Values</h2>

            <p className="text-lg max-w-2xl mx-auto italic">

              Our core values guide everything we do, ensuring we provide the best possible support and resources for our community members. We believe in compassion, integrity, innovation, and inclusivity as the foundation of our mission. These principles empower individuals with cognitive disabilities to reach their full potential through dedicated service and unwavering support.

            </p>

          </div>

        </div>

      )}



      {activeSection === 'technology' && (

        <div className="text-center py-12 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 animate-pulse"></div>

          <div className="relative z-10">

            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-spin" />

            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Technology</h2>

            <p className="text-lg max-w-2xl mx-auto italic">

              We leverage cutting-edge technology to provide accessible, user-friendly tools and resources that enhance quality of life for individuals with cognitive disabilities. Through innovative solutions and adaptive technologies, we break down barriers and create opportunities, ensuring everyone can access the support they need to thrive in an increasingly digital world.

            </p>

          </div>

        </div>

      )}



      {activeSection === 'team' && (

        <div className="text-center py-12 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 animate-pulse"></div>

          <div className="relative z-10">

            <Users2 className="h-16 w-16 text-green-600 mx-auto mb-4 animate-ping" />

            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Team</h2>

            <p className="text-lg max-w-2xl mx-auto italic">

              Our dedicated team of professionals brings together expertise in healthcare, education, technology, and lived experience to provide comprehensive support. With diverse backgrounds and shared passion, we collaborate to deliver innovative solutions that make a difference in the lives of individuals with cognitive disabilities and families.

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

