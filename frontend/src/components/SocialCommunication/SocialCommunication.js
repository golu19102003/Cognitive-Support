import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Brain, 
  Users, 
  MessageCircle, 
  Heart, 
  BookOpen, 
  Stethoscope, 
  Pill, 
  FileText,
  TrendingUp,
  Target,
  Activity,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  UserCheck,
  BarChart3,
  GitBranch
} from 'lucide-react';

const SocialCommunication = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'symptoms', 'diagnosis', 'differences', 'treatment', 'strategies', 'resources'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-[#0891B2] to-[#0C4A6E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <MessageCircle className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Social (Pragmatic) Communication Disorder
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Understanding challenges in social language use and developing effective communication strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                to="/contact" 
                className="bg-white text-[#0891B2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Professional Help
              </Link>
              <Link 
                to="/resources" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0891B2] transition-colors"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'overview', label: 'Overview', icon: Brain },
              { id: 'symptoms', label: 'Symptoms', icon: Activity },
              { id: 'diagnosis', label: 'Diagnosis', icon: Stethoscope },
              { id: 'differences', label: 'SCD vs ASD', icon: Users },
              { id: 'treatment', label: 'Treatment', icon: Pill },
              { id: 'strategies', label: 'Strategies', icon: Lightbulb },
              { id: 'resources', label: 'Resources', icon: BookOpen }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#0E7490] text-white'
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

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* CONTENT AREA */}
          <div className="lg:col-span-3 space-y-12">
            {/* OVERVIEW */}
            <section id="overview" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Brain className="h-8 w-8 mr-3 text-[#0891B2]" />
                  What is Social (Pragmatic) Communication Disorder?
                </h2>
                
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Social (Pragmatic) Communication Disorder (SCD) is a condition recognized in DSM-5 that specifically affects the social use of language and communication skills. It was added as a distinct diagnosis in 2013, separate from autism spectrum disorder (ASD).
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-blue-900">Key Definition</h3>
                    <p className="text-blue-800">
                      SCD involves persistent difficulties in effectively using verbal and nonverbal communication cues in social contexts, without the restricted and repetitive behaviors characteristic of autism.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                      <h4 className="font-semibold text-green-900 mb-2">What SCD Affects</h4>
                      <ul className="text-green-800 space-y-1 text-sm">
                        <li>• Understanding social cues</li>
                        <li>• Maintaining conversations</li>
                        <li>• Using appropriate language</li>
                        <li>• Non-verbal communication</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                      <h4 className="font-semibold text-purple-900 mb-2">What SCD Does NOT Include</h4>
                      <ul className="text-purple-800 space-y-1 text-sm">
                        <li>• Restricted behaviors</li>
                        <li>• Repetitive behaviors</li>
                        <li>• Sensory sensitivities</li>
                        <li>• Intense special interests</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Activity className="h-8 w-8 mr-3 text-[#0891B2]" />
                  Symptoms and Early Signs
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-orange-900">Communication Challenges</h3>
                    <ul className="text-orange-800 space-y-2">
                      <li>• Difficulty responding to others</li>
                      <li>• Limited use of gestures</li>
                      <li>• Trouble taking turns in conversation</li>
                      <li>• Challenges discussing emotions</li>
                      <li>• Difficulty staying on topic</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-red-900">Social Difficulties</h3>
                    <ul className="text-red-800 space-y-2">
                      <li>• Trouble adjusting speech to different situations</li>
                      <li>• Difficulty asking relevant questions</li>
                      <li>• Challenges making and keeping friends</li>
                      <li>• Problems understanding non-literal language</li>
                      <li>• Social awkwardness in groups</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-900">When Symptoms Typically Appear</h3>
                  <p className="text-yellow-800">
                    Symptoms usually become evident in early childhood, often before age five, and can impact academic progress, social development, and later occupational success.
                  </p>
                </div>
              </div>
            </section>

            {/* DIAGNOSIS */}
            <section id="diagnosis" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Stethoscope className="h-8 w-8 mr-3 text-[#0891B2]" />
                  Diagnostic Criteria and Assessment
                </h2>
                
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">DSM-5 Diagnostic Criteria</h3>
                  <p>
                    The DSM-5 outlines specific criteria for SCD diagnosis:
                  </p>
                  
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                    <h4 className="font-semibold text-indigo-900 mb-2">Core Requirements:</h4>
                    <ul className="text-indigo-800 space-y-1">
                      <li>• Persistent difficulties in social use of verbal and nonverbal communication</li>
                      <li>• Challenges with greeting, sharing information, adjusting communication to context</li>
                      <li>• Difficulty following conversation rules and understanding nonliteral language</li>
                      <li>• Symptoms present from early childhood</li>
                      <li>• Significant impairment in social participation, academics, or work</li>
                      <li>• Not better explained by autism spectrum disorder, intellectual disability, or other medical conditions</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded">
                      <h4 className="font-semibold text-teal-900 mb-2">Assessment Methods</h4>
                      <ul className="text-teal-800 space-y-1 text-sm">
                        <li>• Parent and teacher reports</li>
                        <li>• Direct observation of interactions</li>
                        <li>• Standardized pragmatic language tests</li>
                        <li>• Social language samples</li>
                        <li>• Ecological assessments</li>
                      </ul>
                    </div>
                    
                    <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
                      <h4 className="font-semibold text-pink-900 mb-2">Assessment Tools</h4>
                      <ul className="text-pink-800 space-y-1 text-sm">
                        <li>• Children's Communication Checklist (CCC-2)</li>
                        <li>• Social Language Development Scale</li>
                        <li>• Pragmatic Language Observation Scale</li>
                        <li>• Clinical Evaluation of Language Fundamentals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DIFFERENCES */}
            <section id="differences" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Users className="h-8 w-8 mr-3 text-[#0891B2]" />
                  SCD vs Autism Spectrum Disorder
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Autism Spectrum Disorder (ASD)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Social Communication Disorder (SCD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Restricted/Repetitive Behaviors</td>
                        <td className="border border-gray-300 px-4 py-2">Present (e.g., hand flapping, routines)</td>
                        <td className="border border-gray-300 px-4 py-2">Absent</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Social Interaction Challenges</td>
                        <td className="border border-gray-300 px-4 py-2">Severe, often with sensory issues</td>
                        <td className="border border-gray-300 px-4 py-2">Moderate, focused on pragmatics</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Communication Style</td>
                        <td className="border border-gray-300 px-4 py-2">Can include echolalia, idiosyncratic language</td>
                        <td className="border border-gray-300 px-4 py-2">Clear speech but pragmatic deficits</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Cognitive & Behavioral Traits</td>
                        <td className="border border-gray-300 px-4 py-2">Wide range, may include savant skills</td>
                        <td className="border border-gray-300 px-4 py-2">Typically normal cognitive functioning</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">Key Differentiating Factor</h3>
                  <p className="text-blue-800">
                    The presence of restricted, repetitive behaviors and intense interests is a major distinguishing feature of ASD. SCD focuses solely on pragmatic language difficulties without these additional behavioral patterns.
                  </p>
                </div>
              </div>
            </section>

            {/* COMPARISON */}
            <section id="comparison" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <GitBranch className="h-8 w-8 mr-3 text-[#0891B2]" />
                  SCD vs Developmental Language Disorder
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Social Communication Disorder</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Developmental Language Disorder</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Language Structure</td>
                        <td className="border border-gray-300 px-4 py-2">Clear speech, pragmatic deficits</td>
                        <td className="border border-gray-300 px-4 py-2">Simplified grammar, vocabulary issues</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Social Pragmatic Skills</td>
                        <td className="border border-gray-300 px-4 py-2">Moderate difficulties</td>
                        <td className="border border-gray-300 px-4 py-2">Moderate difficulties</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Repetitive Behaviors</td>
                        <td className="border border-gray-300 px-4 py-2">Absent</td>
                        <td className="border border-gray-300 px-4 py-2">Absent</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Core Features</td>
                        <td className="border border-gray-300 px-4 py-2">Social communication only</td>
                        <td className="border border-gray-300 px-4 py-2">Language structure + social aspects</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Research Findings</td>
                        <td className="border border-gray-300 px-4 py-2">Lower scores than TLD</td>
                        <td className="border border-gray-300 px-4 py-2">Higher scores than ASD (99.70 vs 47.00)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-orange-900">Key Research Insights</h3>
                  <div className="text-orange-800 space-y-2">
                    <p><strong>Parent Reports:</strong> Children with DLD scored significantly higher than ASD (99.70 vs 47.00)</p>
                    <p><strong>Teacher Reports:</strong> DLD group showed higher scores than ASD (82.00 vs 56.80)</p>
                    <p><strong>Key Finding:</strong> Both DLD and ASD show more pragmatic difficulties than typical development, but DLD children generally demonstrate better social performance than ASD children.</p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">Developmental Language Disorder Characteristics</h3>
                  <div className="text-blue-800 space-y-2">
                    <p><strong>Language Features:</strong> Speech onset after second year, simplified grammar, limited vocabulary, poor short-term memory</p>
                    <p><strong>Assessment:</strong> Delayed performance in language tests, normal hearing, cognitive performance ≥85</p>
                    <p><strong>Impact:</strong> Affects academic performance and social participation, becomes more evident with development</p>
                  </div>
                </div>
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Pill className="h-8 w-8 mr-3 text-[#0891B2]" />
                  Treatment Strategies and Interventions
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Speech-Language Therapy</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Pragmatic language skills development</li>
                      <li>• Social communication training</li>
                      <li>• Non-verbal communication improvement</li>
                      <li>• Conversational skills practice</li>
                      <li>• Context-appropriate language use</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-purple-900">Behavioral Interventions</h3>
                    <ul className="text-purple-800 space-y-2">
                      <li>• Social skills groups</li>
                      <li>• Social stories and scripts</li>
                      <li>• Video modeling</li>
                      <li>• Peer-mediated interventions</li>
                      <li>• Role-playing activities</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-orange-900">Family and Environmental Support</h3>
                  <ul className="text-orange-800 space-y-1">
                    <li>• Parent training and coaching</li>
                    <li>• Home-based practice activities</li>
                    <li>• Visual supports and schedules</li>
                    <li>• Teacher collaboration</li>
                    <li>• Structured social opportunities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* STRATEGIES */}
            <section id="strategies" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Lightbulb className="h-8 w-8 mr-3 text-[#0891B2]" />
                  Strategies for Home and School
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Home Strategies</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• <strong>Turn-taking activities:</strong> Ball games, conversation practice</li>
                      <li>• <strong>Reading and discussion:</strong> Ask open-ended questions about stories</li>
                      <li>• <strong>Feelings talk:</strong> Discuss emotions in books and real life</li>
                      <li>• <strong>Prediction skills:</strong> "What do you think happens next?"</li>
                      <li>• <strong>Structured playdates:</strong> Planned activities with time limits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">School Strategies</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• <strong>Visual supports:</strong> Picture cues for conversation turns</li>
                      <li>• <strong>Social skills groups:</strong> Peer interaction practice</li>
                      <li>• <strong>Teacher collaboration:</strong> Consistent strategies across settings</li>
                      <li>• <strong>Structured opportunities:</strong> Guided group activities</li>
                      <li>• <strong>Clear expectations:</strong> Explicit social rules and routines</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-900">Visual Supports Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <div className="text-yellow-800">
                      <strong>Conversation Cue Cards:</strong> Visual reminders for taking turns
                    </div>
                    <div className="text-yellow-800">
                      <strong>Social Stories:</strong> Written guides for social situations
                    </div>
                    <div className="text-yellow-800">
                      <strong>Emotion Charts:</strong> Visual aids for identifying feelings
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* RESOURCES */}
            <section id="resources" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <BookOpen className="h-8 w-8 mr-3 text-[#0891B2]" />
                  Additional Resources and Support
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-teal-900">Professional Organizations</h3>
                    <ul className="text-teal-800 space-y-2">
                      <li>• American Speech-Language-Hearing Association (ASHA)</li>
                      <li>• Autism Speaks Autism Treatment Network</li>
                      <li>• Social Thinking Publishing</li>
                      <li>• Pragmatic Organization Dynamic Display</li>
                    </ul>
                  </div>
                  
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-pink-900">Helpful Resources</h3>
                    <ul className="text-pink-800 space-y-2">
                      <li>• Social Communication Disorder Resource Guide</li>
                      <li>• Visual Supports Tool Kit</li>
                      <li>• Parent Training Programs</li>
                      <li>• Online Support Communities</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Key Takeaway</h3>
                  <p className="text-gray-800">
                    Early identification and intervention for Social Communication Disorder can significantly improve social outcomes and quality of life. With appropriate support and targeted strategies, individuals with SCD can develop effective communication skills and meaningful social relationships.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-2 bg-[#0E7490] text-white rounded-lg hover:bg-[#0891B2] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#0E7490] text-[#0E7490] rounded-lg hover:bg-[#0E7490] hover:text-white transition-colors"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/autism" className="text-[#0E7490] hover:underline">• Autism Spectrum Disorder</Link></li>
                  <li><Link to="/conditions/adhd" className="text-[#0E7490] hover:underline">• ADHD</Link></li>
                  <li><Link to="/conditions/specific-learning-disorders" className="text-[#0E7490] hover:underline">• Specific Learning Disorders</Link></li>
                  <li><Link to="/conditions/developmental-language-disorder" className="text-[#0E7490] hover:underline">• Developmental Language Disorder</Link></li>
                </ul>
              </div>

              {/* Assessment Tools */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Assessment Tools</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Children's Communication Checklist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Social Language Development Scale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Pragmatic Language Observation</span>
                  </div>
                </div>
              </div>

              {/* Key Statistics */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Key Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Added to DSM-5 in 2013</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Lower prevalence than ASD</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Affects social language use only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inspirational Quote Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-cyan-700 pl-6 py-4">
            "Communication is not just about words, but about connection. Every person has a unique voice that deserves to be heard, understood, and valued, regardless of how they choose to express themselves."
          </blockquote>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Social communication challenges are not barriers to relationships, but invitations to find new ways of connecting. With patience, creativity, and understanding, we can build bridges of communication that honor every individual's unique way of sharing their world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialCommunication;
