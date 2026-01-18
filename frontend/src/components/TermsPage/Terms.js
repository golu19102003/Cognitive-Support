import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Users, Shield, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const Terms = () => {
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
            <img src="/short_logo.png" alt="PriHub Logo" className="h-12 w-auto mr-4" />
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-gray-600 mb-4">
            Last updated: January 2026
          </p>
          <p className="text-gray-700">
            Welcome to Support System. These Terms of Service govern your use of our smart support management platform 
            and services provided by Cognitive Disabilities platform. By accessing or using Support System, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Acceptance of Terms */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Acceptance of Terms</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>By accessing and using PriHub, you accept and agree to be bound by these terms and conditions.</p>
              <p>If you do not agree to abide by the above, please do not use this service.</p>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">User Responsibilities</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Account Security:</strong> Maintain the confidentiality of your account credentials</p>
              <p><strong>Accurate Information:</strong> Provide accurate and complete information when registering</p>
              <p><strong>Lawful Use:</strong> Use the service for lawful purposes only</p>
              <p><strong>Respect Others:</strong> Respect the privacy and rights of other residents</p>
              <p><strong>Report Issues:</strong> Report any security vulnerabilities or issues immediately</p>
            </div>
          </div>

          {/* Privacy and Data Protection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Privacy and Data Protection</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information.</p>
              <p>By using PriHub, you consent to the collection and use of information as described in our Privacy Policy.</p>
            </div>
          </div>

          {/* Service Availability */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Service Availability</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>We strive to maintain high availability of PriHub services.</p>
              <p>However, we cannot guarantee uninterrupted service and may temporarily suspend services for maintenance, updates, or other technical reasons.</p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Limitation of Liability</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>PriHub is provided "as is" without warranties of any kind.</p>
              <p>We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the service.</p>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Termination</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>We reserve the right to suspend or terminate your access to PriHub at any time, with or without cause.</p>
              <p>Termination may occur with or without notice.</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#1B9AAA] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <p><strong>Email:</strong> info@supportsystem.com</p>
              <p><strong>Phone:</strong> +91 9680211602</p>
              <p><strong>Address:</strong> Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2026 PriHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
