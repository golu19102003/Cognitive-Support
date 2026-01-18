import React from 'react';

const Conditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conditions</h1>
          <p className="text-lg text-gray-600">Terms and conditions for using ResidentialHub</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Terms of Use</h2>
            <p className="text-gray-600 mb-4">
              Welcome to ResidentialHub. By using our services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1. Acceptance of Terms</h3>
            <p className="text-gray-600 mb-4">
              By accessing and using ResidentialHub, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Use License</h3>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials on ResidentialHub for personal, non-commercial transitory viewing only.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3. Disclaimer</h3>
            <p className="text-gray-600 mb-4">
              The materials on ResidentialHub are provided on an 'as is' basis. ResidentialHub makes no warranties, expressed or implied.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4. Limitations</h3>
            <p className="text-gray-600 mb-4">
              In no event shall ResidentialHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit).
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5. Privacy Policy</h3>
            <p className="text-gray-600 mb-4">
              Your Privacy Policy regarding the collection and use of your information is detailed in our Privacy Policy page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
