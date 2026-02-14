import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At PriHub, we are committed to protecting your privacy. This policy explains how we collect, use, and protect your information when you use our cognitive disability support platform.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Personal information (name, email, contact details)</li>
                  <li>Health information (with explicit consent)</li>
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services for cognitive disability support.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>To provide personalized cognitive support services</li>
                  <li>To communicate with users about their care plans</li>
                  <li>To improve our AI assistant and therapy features</li>
                  <li>To ensure platform security and prevent fraud</li>
                  <li>To comply with legal obligations</li>
                  <li>To analyze usage patterns for service improvement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Healthcare providers (with user consent)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Service providers who help operate our platform</li>
                  <li>Analytics providers (aggregated, anonymous data only)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on privacy protection</li>
                  <li>Compliance with healthcare data standards</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have certain rights regarding your personal information under applicable privacy laws.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                  <li>Complaint filing with regulatory authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our platform.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Essential cookies for platform functionality</li>
                  <li>Performance cookies for analytics</li>
                  <li>Personalization cookies for user experience</li>
                  <li>You can control cookies through browser settings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our platform is designed to support individuals with cognitive disabilities, including minors. We take extra precautions to protect children's privacy.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Parental consent for users under 13</li>
                  <li>Limited data collection from minors</li>
                  <li>No marketing to children without parental consent</li>
                  <li>Special protections for educational users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@prihub.com<br />
                    <strong>Phone:</strong> +91 9680211602<br />
                    <strong>Address:</strong> Jaipur, Rajasthan, India
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                This Privacy Policy is effective as of the date listed above and may be updated by PriHub at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
