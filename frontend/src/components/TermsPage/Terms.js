import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using PriHub, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-600 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on PriHub for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials on PriHub are provided on an 'as is' basis. PriHub makes no warranties, expressed or implied.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall PriHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PriHub.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your Privacy Policy is incorporated into this Agreement by reference. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Revisions and Errata</h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials appearing on PriHub could include technical, typographical, or photographic errors. PriHub does not promise that any of the materials on its web site are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or locality.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
