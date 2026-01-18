import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Activity, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope, MessageSquare, Eye } from 'lucide-react';

const DevelopmentalDisorders = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#02394A] to-[#0F172A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/" className="inline-flex items-center text-white hover:text-gray-200 transition-colors mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Brain className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">A Brief Guide to Developmental Disorders</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Developmental disorders are neurological conditions that affect brain development and interfere with skills such as learning, 
              communication, behavior, and social interaction. These conditions usually begin in childhood and often continue throughout a person's lifetime.
            </p>
            <p className="text-sm text-white/80 mt-4">
              Early understanding, support, and intervention can significantly improve quality of life and independence.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Sidebar */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'What it is', icon: Brain },
              { id: 'types', label: 'Types', icon: Users },
              { id: 'symptoms', label: 'Symptoms', icon: AlertTriangle },
              { id: 'causes', label: 'Causes', icon: Activity },
              { id: 'diagnosis', label: 'Diagnosis', icon: Stethoscope },
              { id: 'treatment', label: 'Treatment', icon: Shield },
              { id: 'prevention', label: 'Prevention', icon: Heart },
              { id: 'outlook', label: 'Outlook', icon: Target }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#02394A] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* What it is */}
            <section id="overview" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What it is</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Developmental disorders are conditions that arise due to atypical brain development. They affect how a person thinks, 
                  learns, communicates, behaves, and interacts with others. These disorders can impact daily functioning at school, 
                  work, and in social environments and often require long-term support.
                </p>
                
                <p>
                  These conditions usually begin in childhood and often continue throughout a person's lifetime. Early understanding, 
                  support, and intervention can significantly improve quality of life and independence.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Point</h3>
                <p className="text-blue-800">
                  Developmental disorders are neurological conditions that interfere with skills such as learning, communication, 
                  behavior, and social interaction. They require ongoing support but can improve with intervention.
                </p>
              </div>
            </section>

            {/* Types */}
            <section id="types" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Types</h2>
              
              <p className="text-gray-700 mb-6">
                Common types of developmental disorders include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">Autism Spectrum Disorder (ASD)</h3>
                  <p className="text-green-800">
                    Affects social interaction, communication, and behavior
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">Attention-Deficit/Hyperactivity Disorder (ADHD)</h3>
                  <p className="text-blue-800">
                    Characterized by inattention, impulsivity, and hyperactivity
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-900">Learning Disabilities</h3>
                  <p className="text-yellow-800">
                    Such as dyslexia, dyscalculia, and dysgraphia
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">Intellectual Disability</h3>
                  <p className="text-orange-800">
                    Limitations in intellectual functioning and adaptive behavior
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-purple-900">Speech and Language Disorders</h3>
                  <p className="text-purple-800">
                    Difficulty in speech production or understanding language
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-red-900">Developmental Coordination Disorder</h3>
                  <p className="text-red-800">
                    Affects motor skills and coordination
                  </p>
                </div>
              </div>
            </section>

            {/* Symptoms */}
            <section id="symptoms" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Symptoms</h2>
              
              <p className="text-gray-700 mb-6">
                Symptoms vary depending on the specific disorder and severity. Common signs include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-red-900">Communication & Learning</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Delayed speech or language development</li>
                    <li>• Difficulty with learning, reading, or problem-solving</li>
                    <li>• Trouble following instructions or routines</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">Social & Behavioral</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Challenges in social interaction or communication</li>
                    <li>• Poor attention span or impulsive behavior</li>
                    <li>• Difficulty with motor skills or coordination</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 text-yellow-900">Important Note</h3>
                <p className="text-yellow-800">
                  Not all individuals experience the same symptoms. The presentation and severity vary widely depending on the 
                  specific disorder and individual factors.
                </p>
              </div>
            </section>

            {/* Causes */}
            <section id="causes" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Causes</h2>
              
              <p className="text-gray-700 mb-6">
                Developmental disorders may result from a combination of factors, including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">Biological Factors</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• <strong>Genetic conditions</strong> - Inherited factors</li>
                    <li>• <strong>Prenatal factors</strong> - Exposure to infections, alcohol, or drugs</li>
                    <li>• <strong>Birth complications</strong> - Problems during delivery</li>
                    <li>• <strong>Brain injuries</strong> - During early development</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">Environmental Factors</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• <strong>Environmental exposures</strong> - Toxins or pollutants</li>
                    <li>• <strong>Nutritional factors</strong> - Prenatal nutrition</li>
                    <li>• <strong>Social environment</strong> - Early stimulation</li>
                    <li>• <strong>Access to healthcare</strong> - Early intervention</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Unknown Causes</h3>
                <p className="text-gray-800">
                  In many cases, the exact cause is unknown. Developmental disorders often result from complex interactions 
                  between multiple genetic and environmental factors.
                </p>
              </div>
            </section>

            {/* Diagnosis */}
            <section id="diagnosis" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnosis</h2>
              
              <p className="text-gray-700 mb-6">
                Diagnosis usually involves:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Diagnostic Process</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>Developmental screenings</strong> - Early detection tools</li>
                  <li>• <strong>Behavioral assessments</strong> - Observation and evaluation</li>
                  <li>• <strong>Psychological testing</strong> - Cognitive and emotional assessment</li>
                  <li>• <strong>Medical evaluations</strong> - Physical and neurological exams</li>
                  <li>• <strong>Input from caregivers</strong> - Parents, teachers observations</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Early Diagnosis Importance</h3>
                <p className="text-green-800">
                  Early diagnosis is crucial for effective intervention and support planning. The earlier a developmental disorder 
                  is identified, the sooner appropriate interventions can begin, leading to better outcomes.
                </p>
              </div>
            </section>

            {/* Treatment */}
            <section id="treatment" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Treatment</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Treatment Approaches</h3>
                  <p className="text-gray-700 mb-4">
                    There is no single cure for developmental disorders, but treatment focuses on improving skills and daily functioning. 
                    Common approaches include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Therapeutic Interventions</h4>
                      <ul className="space-y-2 text-purple-800">
                        <li>• <strong>Behavioral therapy</strong> - Skill development</li>
                        <li>• <strong>Speech and language therapy</strong> - Communication skills</li>
                        <li>• <strong>Occupational therapy</strong> - Daily living skills</li>
                        <li>• <strong>Physical therapy</strong> - Motor skills</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-blue-900">Educational & Medical Support</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• <strong>Educational support</strong> - Individualized learning plans</li>
                        <li>• <strong>Special education services</strong> - Accommodations</li>
                        <li>• <strong>Medication</strong> - For specific symptoms</li>
                        <li>• <strong>Assistive technology</strong> - Adaptive tools</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-900">Medication Considerations</h3>
                  <p className="text-yellow-800">
                    In some cases, medication may be prescribed to manage symptoms such as attention problems, anxiety, or behavioral 
                    challenges. Medication is always used as part of a comprehensive treatment plan.
                  </p>
                </div>
              </div>
            </section>

            {/* Prevention */}
            <section id="prevention" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Prevention</h2>
              
              <p className="text-gray-700 mb-6">
                Not all developmental disorders can be prevented, but risk can be reduced by:
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Risk Reduction Strategies</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>Proper prenatal care</strong> - Regular medical checkups</li>
                  <li>• <strong>Avoiding harmful substances</strong> - No alcohol, drugs, or smoking during pregnancy</li>
                  <li>• <strong>Early childhood health screenings</strong> - Regular developmental monitoring</li>
                  <li>• <strong>Supportive environment</strong> - Stimulating and nurturing care</li>
                  <li>• <strong>Adequate nutrition</strong> - Healthy diet during pregnancy and early childhood</li>
                </ul>
              </div>
            </section>

            {/* Outlook */}
            <section id="outlook" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Outlook</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  With early intervention, therapy, and ongoing support, many individuals with developmental disorders can lead 
                  fulfilling and productive lives. Progress varies depending on the type and severity of the disorder, but 
                  skill development and independence often improve over time.
                </p>
                
                <p>
                  The key to positive outcomes includes early identification, appropriate interventions, family support, 
                  educational accommodations, and community inclusion.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Factors for Success</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Early diagnosis and intervention</li>
                  <li>• Consistent therapeutic support</li>
                  <li>• Family and community involvement</li>
                  <li>• Educational accommodations</li>
                  <li>• Focus on strengths and abilities</li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQ</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Are developmental disorders lifelong?</h3>
                  <p className="text-gray-700">
                    Most developmental disorders last throughout life, but symptoms and challenges can improve with support.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Can adults have developmental disorders?</h3>
                  <p className="text-gray-700">
                    Yes. Although they begin in childhood, many individuals continue to experience them into adulthood.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Are developmental disorders hereditary?</h3>
                  <p className="text-gray-700">
                    Some have a genetic component, but not all are inherited.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Can early intervention help?</h3>
                  <p className="text-gray-700">
                    Yes. Early diagnosis and therapy greatly improve outcomes.
                  </p>
                </div>
              </div>
            </section>

            {/* Takeaway */}
            <section className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Takeaway</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  Developmental disorders affect how the brain grows and functions, influencing learning, communication, and social skills. 
                  While these conditions are often lifelong, early diagnosis, personalized support, and inclusive environments can help 
                  individuals achieve independence, confidence, and a better quality of life.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-2 bg-[#02394A] text-white rounded-lg hover:bg-[#0F172A] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#02394A] text-[#02394A] rounded-lg hover:bg-[#02394A] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/autism" className="text-[#02394A] hover:underline">• Autism Spectrum</Link></li>
                  <li><Link to="/conditions/adhd" className="text-[#02394A] hover:underline">• ADHD</Link></li>
                  <li><Link to="/conditions/learning-disabilities" className="text-[#02394A] hover:underline">• Learning Disabilities</Link></li>
                  <li><Link to="/conditions/intellectual-disability" className="text-[#02394A] hover:underline">• Intellectual Disability</Link></li>
                </ul>
              </div>

              {/* Early Signs */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-900">Early Signs to Watch For</h3>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Speech delays by 2 years</li>
                  <li>• Difficulty with social interaction</li>
                  <li>• Learning problems in school</li>
                  <li>• Behavioral challenges</li>
                  <li>• Motor skill difficulties</li>
                </ul>
                <p className="text-orange-800 text-sm mt-3">
                  If you notice these signs, consult a healthcare provider.
                </p>
              </div>

              {/* Support Resources */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Support Resources</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Early intervention programs</li>
                  <li>• Special education services</li>
                  <li>• Parent support groups</li>
                  <li>• Occupational therapy</li>
                  <li>• Speech therapy services</li>
                </ul>
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">Need Immediate Help?</h3>
                <p className="text-red-800 text-sm mb-3">
                  If your child shows severe developmental delays or concerning behaviors, seek professional help immediately.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Emergency:</strong> 911</p>
                  <p><strong>Crisis Hotline:</strong> 988</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentalDisorders;
