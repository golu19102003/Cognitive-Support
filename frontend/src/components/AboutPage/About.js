import React from 'react';
import { Users, Brain, Heart, BookOpen, Users2, Shield, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4">
            <img src="/short_logo.png" alt="Prihub Logo" className="h-16 w-auto mr-3" />
            <h1 className="text-4xl font-bold">
              <span style={{ color: '#16808D' }}>About</span>
              <span style={{ color: '#000000' }}> Cognitive Disabilities</span>
            </h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
          Cognitive disabilities affect how a person learns, remembers, processes information, and makes decisions. 
          We're here to provide Support, understanding, and resources for individuals and families affected by cognitive disabilities.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Understanding Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Users className="h-12 w-12 text-[#16808D]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding</h2>
          <p className="text-gray-600 leading-relaxed">
            Cognitive disabilities encompass a range of conditions affecting thinking, learning, and memory, which can significantly impact daily life. 
            Understanding these conditions is the first step toward creating an inclusive and supportive environment.
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#16808D] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Attention & Focus</h3>
                <p className="text-gray-600">Difficulty sustaining attention on tasks or conversations</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#16808D] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Memory & Processing</h3>
                <p className="text-gray-600">Challenges with remembering information or following multi-step instructions</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#16808D] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Executive Function</h3>
                <p className="text-gray-600">Difficulty with planning, organizing, or completing tasks</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#16808D] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Social Communication</h3>
                <p className="text-gray-600">Challenges in understanding social cues or maintaining relationships</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Heart className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support</h2>
          <p className="text-gray-600 leading-relaxed">
            Access professional help, Support groups, and community resources. You can consider accessing professional help, 
            joining Support groups, and utilizing community resources. For emotional distress, 988 Suicide & Crisis Lifeline 
            offers 24/7 confidential support via call, text, or online chat.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">24/7 Helpline</h3>
              <p className="text-gray-600">988 Suicide & Crisis Lifeline</p>
              <p className="text-sm text-gray-500">988-988-9882</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Support Groups</h3>
              <p className="text-gray-600">Connect with others who understand and share similar experiences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Community Resources</h3>
              <p className="text-gray-600">Educational materials, assistive technology, and local services</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-12 w-12 text-[#16808D]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-600 leading-relaxed">
            Educational resources and strategies for learning and development. A comprehensive learning and development (L&D) strategy 
            outlines how an organization develops its workforce, aligning with business goals and addressing employee learning needs.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">For Individuals</h3>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">For Families & Caregivers</h3>
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
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Users className="h-12 w-12 text-[#16808D]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Community</h2>
          <p className="text-gray-600 leading-relaxed">
            Connecting with a community, especially one where individuals share similar experiences, is crucial for well-being. 
            It fosters a sense of belonging, reduces feelings of isolation, and provides mutual Support and understanding.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Peer Support Networks</h3>
              <p className="text-gray-600">Connect with others who understand and share similar experiences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Community Events</h3>
              <p className="text-gray-600">Inclusive gatherings and activities for all abilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Volunteer Opportunities</h3>
              <p className="text-gray-600">Ways to get involved and make a difference</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#16808D] to-[#142C52] rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Supportive Community</h2>
          <p className="text-xl mb-6">
            Whether you're seeking Support, looking to understand cognitive disabilities better, or want to help others, 
            Prihub is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#16808D] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Get Support
            </button>
            <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-[#16808D] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
     </div>  
  );
};

export default About;
