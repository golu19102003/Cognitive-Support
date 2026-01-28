import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Headphones, MessageSquare, Clock, Mail, Phone, Users } from 'lucide-react';

const Support = () => {
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
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-[#1B9AAA] hover:text-[#4C97A8] mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <img 
              src={isDarkMode ? "/image.png" : "/short_logo.png"} 
              alt="PriHub Logo" 
              className="h-12 w-auto mr-4 transition-all duration-300"
            />
            <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          </div>
          <p className="text-gray-600 mb-4">
            Last updated: January 2026
          </p>
          <p className="text-gray-700">
            Welcome to PriHub Support Center. We're here to help you with any questions, issues, or concerns 
            about our residential management system. Our dedicated support team is committed to providing you with 
            the best possible assistance.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Contact Methods</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Email Support:</strong> Get help via email for detailed inquiries</p>
              <p><strong>Phone Support:</strong> Call us for immediate assistance</p>
              <p><strong>Live Chat:</strong> Real-time support during business hours</p>
              <p><strong>Support Tickets:</strong> Track your support requests online</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Support Hours</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
              <p><strong>Holidays:</strong> Support may be limited during major holidays</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Common Issues</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Login Problems:</strong> Password reset, account access issues</p>
              <p><strong>Visitor Management:</strong> Gate access, visitor registration</p>
              <p><strong>Maintenance Requests:</strong> Service requests, tracking status</p>
              <p><strong>Payment Issues:</strong> Fee payments, invoice questions</p>
              <p><strong>Communication:</strong> Notices, announcements, messaging</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Response Times</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Email:</strong> Within 24 hours during business days</p>
              <p><strong>Phone:</strong> Immediate during support hours</p>
              <p><strong>Live Chat:</strong> Immediate during support hours</p>
              <p><strong>Emergency Issues:</strong> Priority response within 2 hours</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Headphones className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Getting Started</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>User Guide:</strong> Comprehensive documentation available</p>
              <p><strong>Video Tutorials:</strong> Step-by-step video guides</p>
              <p><strong>FAQ Section:</strong> Answers to frequently asked questions</p>
              <p><strong>Onboarding Support:</strong> Personalized setup assistance</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>If you need immediate assistance, please reach out to us:</p>
              <p><strong>Email:</strong> support@society360.com</p>
              <p><strong>Phone:</strong> +91 9680211602</p>
              <p><strong>Emergency:</strong> +91 98765 43211</p>
              <p><strong>Address:</strong> Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2026 PriHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
