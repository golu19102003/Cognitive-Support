import React from 'react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-lg text-gray-600">Helpful resources and documentation for Support System users</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Guide */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">User Guide</h3>
            </div>
            <p className="text-gray-600 mb-4">Complete guide on how to use Support System features and services.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Read More →</button>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">FAQ</h3>
            </div>
            <p className="text-gray-600 mb-4">Frequently asked questions and answers about Support System.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">View FAQ →</button>
          </div>

          {/* Video Tutorials */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Video Tutorials</h3>
            </div>
            <p className="text-gray-600 mb-4">Step-by-step video guides for all Support System features.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Watch Videos →</button>
          </div>

          {/* API Documentation */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">API Documentation</h3>
            </div>
            <p className="text-gray-600 mb-4">Technical documentation for developers using Support System API.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">View Docs →</button>
          </div>

          {/* Community Forum */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Community Forum</h3>
            </div>
            <p className="text-gray-600 mb-4">Connect with other Support System users and share experiences.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Join Forum →</button>
          </div>

          {/* Support Center */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Support Center</h3>
            </div>
            <p className="text-gray-600 mb-4">Get help from our support team for any issues or questions.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Get Support →</button>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Downloads</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:text-blue-700">Mobile App (iOS)</a></li>
                <li><a href="#" className="text-blue-600 hover:text-blue-700">Mobile App (Android)</a></li>
                <li><a href="#" className="text-blue-600 hover:text-blue-700">Desktop Application</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:text-blue-700">System Requirements</a></li>
                <li><a href="#" className="text-blue-600 hover:text-blue-700">Security Features</a></li>
                <li><a href="#" className="text-blue-600 hover:text-blue-700">Integration Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
