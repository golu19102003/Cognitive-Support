import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Activity, 
  AlertTriangle, 
  Shield, 
  Target, 
  BookOpen, 
  MessageCircle,
  Phone,
  Clock,
  TrendingUp,
  ChevronRight,
  ArrowLeft,
  Zap,
  Heart
} from 'lucide-react';

const CerebralPalsyEpilepsy = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const sections = ['overview', 'types', 'symptoms', 'causes', 'diagnosis', 'treatment', 'prevention', 'living-with'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element.getBoundingClientRect();
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Activity className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Cerebral Palsy and Epilepsy in Children</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A comprehensive clinical perspective on the common comorbidity of cerebral palsy and epilepsy, 
              exploring prevalence, risk factors, and management strategies for affected children.
            </p>
            <p className="text-sm text-white/80 mt-4">
              Clinical insights from retrospective studies and population-based research findings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                to="/contact" 
                className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Professional Help
              </Link>
              <Link 
                to="/resources" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sidebar */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Overview', icon: Brain },
              { id: 'types', label: 'Types & Classification', icon: Users },
              { id: 'symptoms', label: 'Symptoms & Clinical Features', icon: Activity },
              { id: 'causes', label: 'Risk Factors', icon: AlertTriangle },
              { id: 'diagnosis', label: 'Diagnosis & Assessment', icon: Shield },
              { id: 'treatment', label: 'Management & Treatment', icon: Heart },
              { id: 'prevention', label: 'Prevention Strategies', icon: Target },
              { id: 'living-with', label: 'Living With CP & Epilepsy', icon: BookOpen }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-purple-700 text-white'
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
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Cerebral palsy (CP) is the most common cause of childhood disability, 
                    affecting approximately 2-3 per 1,000 live births. When combined with epilepsy, 
                    this comorbidity presents complex challenges requiring specialized multidisciplinary care.
                  </p>
                  <p>
                    Research indicates that 30-40% of children with CP develop epilepsy, 
                    with higher prevalence in those with more severe motor dysfunction, 
                    particularly spastic quadriplegia and hemiplegia.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mt-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Key Research Findings</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Epilepsy affects 49% of CP children in clinical studies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Earlier seizure onset in CP children (21 months vs 67 months in controls)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Higher risk in severe motor dysfunction (GMFCS IV-V)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Spastic quadriplegia shows highest epilepsy association (46%)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Types & Classification Section */}
            <section id="types" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Types & Classification</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-900 mb-3">Cerebral Palsy Types</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Spastic Quadriplegia (27%):</strong> All four limbs affected, most severe form</li>
                        <li><strong>Spastic Hemiplegia (42%):</strong> One side of body affected</li>
                        <li><strong>Spastic Diplegia (12%):</strong> Lower limbs primarily affected</li>
                        <li><strong>Ataxic/Dyskinetic (15%):</strong> Balance and coordination issues</li>
                        <li><strong>Mixed/Unspecified (15%):</strong> Combination of symptoms</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-indigo-900 mb-3">Epilepsy Types</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Focal Seizures:</strong> Start in one brain area</li>
                        <li><strong>Generalized Seizures:</strong> Affect both brain hemispheres</li>
                        <li><strong>Combined:</strong> Mix of focal and generalized</li>
                        <li><strong>West Syndrome:</strong> Specific pattern in infants</li>
                        <li><strong>Neonatal Seizures:</strong> Occur in first month</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Clinical Classification Systems</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>GMFCS (Gross Motor Function Classification System):</strong> Levels I-V for motor function assessment</p>
                    <p><strong>ICD-10 Coding:</strong> International classification for CP types</p>
                    <p><strong>ILAE Classification:</strong> International standard for epilepsy types</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Symptoms & Clinical Features Section */}
            <section id="symptoms" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Symptoms & Clinical Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">CP Symptoms</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Motor Impairments:</strong> Muscle stiffness, poor coordination, movement difficulties</li>
                      <li><strong>Postural Issues:</strong> Difficulty sitting, standing, walking</li>
                      <li><strong>Speech Problems:</strong> Communication difficulties, articulation issues</li>
                      <li><strong>Associated Conditions:</strong> Learning disabilities, sensory issues</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">Epilepsy Symptoms</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Seizure Types:</strong> Convulsions, loss of consciousness, staring spells</li>
                      <li><strong>Pre-seizure Aura:</strong> Warning signs before seizures</li>
                      <li><strong>Post-seizure:</strong> Confusion, fatigue, headache</li>
                      <li><strong>Comorbidity Effects:</strong> Exacerbated motor issues, increased care complexity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Risk Factors Section */}
            <section id="causes" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Risk Factors</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-orange-900 mb-3">Prenatal Risk Factors</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Prematurity:</strong> Major risk factor for CP</li>
                        <li><strong>Low Birth Weight:</strong> Associated with brain development issues</li>
                        <li><strong>Multiple Gestation:</strong> Increased complication risk</li>
                        <li><strong>Maternal Infections:</strong> TORCH infections during pregnancy</li>
                        <li><strong>Brain Malformations:</strong> Structural brain development issues</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-red-900 mb-3">Perinatal Risk Factors</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Hypoxic-Ischemic Events:</strong> Oxygen deprivation during birth</li>
                        <li><strong>Neonatal Seizures:</strong> Strong predictor of later epilepsy</li>
                        <li><strong>Perinatal Stroke:</strong> Brain injury during birth process</li>
                        <li><strong>Delivery Complications:</strong> Emergency birth situations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Epilepsy Risk Factors in CP</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Severity of Brain Damage:</strong> Extent of cerebral injury</li>
                    <li><strong>CP Subtype:</strong> Spastic quadriplegia highest risk (OR 2.56)</li>
                    <li><strong>Intellectual Disability:</strong> Increased epilepsy likelihood</li>
                    <li><strong>Neonatal Seizures:</strong> Three-fold increased risk</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Diagnosis & Assessment Section */}
            <section id="diagnosis" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnosis & Assessment</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-3">CP Diagnosis</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Clinical Examination:</strong> Motor function assessment, developmental milestones</li>
                        <li><strong>Neuroimaging:</strong> MRI, CT scans for brain structure</li>
                        <li><strong>GMFCS Assessment:</strong> Functional motor ability classification</li>
                        <li><strong>ICD-10 Coding:</strong> Standard diagnostic coding</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Epilepsy Diagnosis</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>EEG (Electroencephalogram):</strong> Gold standard for seizure detection</li>
                        <li><strong>Seizure Description:</strong> Detailed event characterization</li>
                        <li><strong>Video EEG Monitoring:</strong> Prolonged brain activity recording</li>
                        <li><strong>Neuroimaging Correlation:</strong> Brain structure-seizure relationship</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Management & Treatment Section */}
            <section id="treatment" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Management & Treatment</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-900 mb-3">CP Management</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Physical Therapy:</strong> Stretching, strengthening, mobility training</li>
                        <li><strong>Occupational Therapy:</strong> Daily living skills development</li>
                        <li><strong>Speech Therapy:</strong> Communication enhancement strategies</li>
                        <li><strong>Orthotics & Equipment:</strong> Braces, walkers, seating systems</li>
                        <li><strong>Surgical Interventions:</strong> SDR, orthopedic procedures</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-indigo-900 mb-3">Epilepsy Treatment</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Antiepileptic Medications:</strong> ASM therapy, polytherapy common</li>
                        <li><strong>Emergency Protocols:</strong> Seizure management plans</li>
                        <li><strong>Vagus Nerve Stimulation:</strong> Drug-resistant epilepsy option</li>
                        <li><strong>Ketogenic Diet:</strong> Dietary therapy for some cases</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Integrated Care Approach</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Multidisciplinary Team:</strong> Neurologists, therapists, surgeons</li>
                    <li><strong>Individualized Care Plans:</strong> Personalized treatment strategies</li>
                    <li><strong>Family Support:</strong> Education and counseling services</li>
                    <li><strong>School Integration:</strong> Educational accommodations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Prevention Strategies Section */}
            <section id="prevention" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Prevention Strategies</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-orange-900 mb-3">Prenatal Prevention</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Prenatal Care:</strong> Regular maternal health monitoring</li>
                        <li><strong>Infection Prevention:</strong> TORCH screening protocols</li>
                        <li><strong>Risk Factor Management:</strong> Early identification and intervention</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-red-900 mb-3">Perinatal Prevention</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Neonatal Care:</strong> Advanced medical support for preterm infants</li>
                        <li><strong>Delivery Planning:</strong> Skilled birth attendance</li>
                        <li><strong>Early Intervention:</strong> Prompt developmental support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Living With CP & Epilepsy Section */}
            <section id="living-with" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Living With CP & Epilepsy</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                      <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-purple-900 mb-3">Daily Living</h3>
                      <ul className="space-y-2 text-gray-600 text-left">
                        <li><strong>Adaptive Equipment:</strong> Customized mobility devices</li>
                        <li><strong>Home Modifications:</strong> Environmental accessibility</li>
                        <li><strong>Routine Establishment:</strong> Consistent daily schedules</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg text-center">
                      <Activity className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-indigo-900 mb-3">Education & Learning</h3>
                      <ul className="space-y-2 text-gray-600 text-left">
                        <li><strong>IEP Development:</strong> Individualized education plans</li>
                        <li><strong>Accommodations:</strong> Classroom modifications</li>
                        <li><strong>Assistive Technology:</strong> Communication and learning aids</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-900 mb-3">Social & Community</h3>
                      <ul className="space-y-2 text-gray-600 text-left">
                        <li><strong>Support Groups:</strong> Family and peer networks</li>
                        <li><strong>Recreational Activities:</strong> Adaptive sports and programs</li>
                        <li><strong>Mental Health Support:</strong> Counseling and psychological services</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">PriHub Integration</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>AI-Powered Assessment:</strong> Intelligent symptom tracking</li>
                    <li><strong>Virtual Therapy Support:</strong> Remote rehabilitation sessions</li>
                    <li><strong>Resource Connection:</strong> Healthcare provider network</li>
                    <li><strong>Emergency Response:</strong> Crisis intervention protocols</li>
                  </ul>
                </div>
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
                    className="block w-full text-center px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition-colors"
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
                  <li><Link to="/conditions/cerebral-palsy" className="text-purple-700 hover:underline">• Cerebral Palsy Overview</Link></li>
                  <li><Link to="/conditions/epilepsy" className="text-purple-700 hover:underline">• Epilepsy Management</Link></li>
                  <li><Link to="/conditions/pediatric-neurology" className="text-purple-700 hover:underline">• Pediatric Neurology</Link></li>
                  <li><Link to="/conditions/developmental-disabilities" className="text-purple-700 hover:underline">• Developmental Disabilities</Link></li>
                  <li><Link to="/conditions/learning-disabilities" className="text-purple-700 hover:underline">• Learning Disabilities</Link></li>
                  <li><Link to="/conditions/motor-disorders" className="text-purple-700 hover:underline">• Motor Disorders</Link></li>
                  <li><Link to="/conditions/neurodevelopmental" className="text-purple-700 hover:underline">• Neurodevelopmental Disorders</Link></li>
                </ul>
              </div>

              {/* Key Statistics */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">Key Statistics</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">2-3 per 1,000 live births</p>
                      <p className="text-sm text-gray-600">CP prevalence worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">30-40% epilepsy comorbidity</p>
                      <p className="text-sm text-gray-600">In CP patients</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Earlier seizure onset</p>
                      <p className="text-sm text-gray-600">21 months vs 67 months</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Higher motor dysfunction</p>
                      <p className="text-sm text-gray-600">Increased epilepsy risk</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Insights */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Research Insights</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Population Studies</h4>
                    <p className="text-sm text-gray-600">Large-scale analyses reveal prevalence patterns and risk factors</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Clinical Trials</h4>
                    <p className="text-sm text-gray-600">Evidence-based treatment approaches and outcomes</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">Future Directions</h4>
                    <p className="text-sm text-gray-600">Advanced interventions and personalized medicine</p>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Emergency Support</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-100 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600 mr-3" />
                    <div>
                      <p className="font-medium text-red-900">Emergency Services</p>
                      <p className="text-sm text-gray-600">988 - Suicide & Crisis Lifeline</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-orange-100 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-orange-600 mr-3" />
                    <div>
                      <p className="font-medium text-orange-900">Crisis Support</p>
                      <p className="text-sm text-gray-600">Text HOME to 741741</p>
                    </div>
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
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-purple-600 pl-6 py-4">
            "The body may face challenges, but the human spirit knows no bounds. Every movement, every milestone, every moment of progress is a testament to incredible strength and determination."
          </blockquote>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            With comprehensive care, adaptive technologies, and unwavering support, individuals can overcome physical limitations and live full, meaningful lives filled with joy, achievement, and purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CerebralPalsyEpilepsy;
