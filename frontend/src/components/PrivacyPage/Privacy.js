import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, UserCheck, Lock, MessageSquare } from 'lucide-react';

const Privacy = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-[#1B9AAA] hover:text-[#4C97A8] mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <img 
              src={isDarkMode ? "/image.png" : "/short_logo.png"} 
              alt="PriHub Logo" 
              className="h-12 w-auto mr-4 transition-all duration-300"
            />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 mb-4">
            Last updated: January 8, 2026
          </p>
          <p className="text-gray-700">
            At PriHub, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy outlines how we collect, use, and protect your data when you use our residential management system.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Information We Collect */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Personal Information:</strong> Name, contact details, address, and identification documents</p>
              <p><strong>Residential Data:</strong> Unit number, parking details, and family member information</p>
              <p><strong>Usage Data:</strong> Login times, pages visited, and features used</p>
              <p><strong>Communication Data:</strong> Messages, notices, and service requests</p>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>• To provide and maintain residential management services</p>
              <p>• To process service requests and complaints</p>
              <p>• To communicate important notices and updates</p>
              <p>• To ensure security and access control</p>
              <p>• To improve our services and user experience</p>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Data Protection</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>We implement industry-standard security measures including:</p>
              <p>• SSL encryption for data transmission</p>
              <p>• Secure servers with regular security updates</p>
              <p>• Access controls and authentication systems</p>
              <p>• Regular security audits and vulnerability assessments</p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <UserCheck className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>• Access to your personal information</p>
              <p>• Correction of inaccurate data</p>
              <p>• Deletion of your account and data</p>
              <p>• Opt-out of non-essential communications</p>
              <p>• Data portability upon request</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <p><strong>Email:</strong> privacy@society360.com</p>
              <p><strong>Phone:</strong> +91 9680211602</p>
              <p><strong>Address:</strong> Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
