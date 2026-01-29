import React, { useState, useEffect } from 'react';

import { Users, Brain, Heart, BookOpen, Users2, Shield, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';



const About = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [activeSection, setActiveSection] = useState('mission');



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

                Our Mission

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

        <div className="text-center py-12 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>

          <div className="relative z-10">

            <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" />

            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our Story</h2>

            <p className="text-lg max-w-2xl mx-auto italic">

              Founded with a deep understanding of challenges faced by individuals with cognitive disabilities, our journey began when passionate professionals and families came together to create comprehensive support services. Through collaboration, innovation, and unwavering dedication, we've grown into a trusted resource that empowers lives and transforms communities through inclusive support and understanding.

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

    </div>

  );

};



export default About;

