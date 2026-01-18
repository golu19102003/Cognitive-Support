import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Activity, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope, Pill, Eye, MessageSquare, TrendingUp, FileText, Wrench, Car } from 'lucide-react';

const TraumaticBrainInjury = () => {
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
      <div className="bg-gradient-to-r from-[#178740] to-[#145A32] text-white py-16">
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
            <h1 className="text-4xl font-bold mb-4">Traumatic Brain Injury</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A comprehensive guide to understanding traumatic brain injury (TBI), including causes, symptoms, 
              diagnosis, treatment, and recovery. TBI is a major cause of death and disability worldwide, 
              especially in children and young adults.
            </p>
            <p className="text-sm text-white/80 mt-4">
              Also known as intracranial injury or physically induced brain injury
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Sidebar */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Overview', icon: Brain },
              { id: 'classification', label: 'Classification', icon: FileText },
              { id: 'symptoms', label: 'Symptoms', icon: AlertTriangle },
              { id: 'causes', label: 'Causes', icon: Car },
              { id: 'mechanism', label: 'Mechanism', icon: Activity },
              { id: 'diagnosis', label: 'Diagnosis', icon: Stethoscope },
              { id: 'treatment', label: 'Treatment', icon: Pill },
              { id: 'prognosis', label: 'Prognosis', icon: Target }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#178740] text-white'
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
            {/* Overview */}
            <section id="overview" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  A traumatic brain injury (TBI), also known as an intracranial injury, is an injury to the brain caused by an external force. 
                  TBI can be classified based on severity ranging from mild traumatic brain injury (mTBI/concussion) to severe traumatic brain injury.
                </p>
                
                <p>
                  TBI can result in physical, cognitive, social, emotional and behavioral symptoms, and outcomes can range from complete recovery 
                  to permanent disability or death. Causes include falls, vehicle collisions, and violence. Brain trauma occurs as a consequence of 
                  a sudden acceleration or deceleration of the brain within the skull or by a complex combination of both movement and sudden impact.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Key Facts</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>Major cause</strong> of death and disability worldwide</li>
                  <li>• <strong>Especially affects</strong> children and young adults</li>
                  <li>• <strong>Gender difference:</strong> Males sustain TBIs twice as often as females</li>
                  <li>• <strong>20th century advances</strong> decreased death rates and improved outcomes</li>
                </ul>
              </div>
            </section>

            {/* Classification */}
            <section id="classification" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Classification</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Severity Classification</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Glasgow Coma Scale (GCS)</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Severity</th>
                            <th className="text-left py-2">GCS Score</th>
                            <th className="text-left py-2">PTA</th>
                            <th className="text-left py-2">LOC</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 font-semibold">Mild</td>
                            <td className="py-2">13–15</td>
                            <td className="py-2">&lt;1 day</td>
                            <td className="py-2">0–30 minutes</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-semibold">Moderate</td>
                            <td className="py-2">9–12</td>
                            <td className="py-2">&gt;1 to &lt;7 days</td>
                            <td className="py-2">&gt;30 min to &lt;24 hours</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-semibold">Severe</td>
                            <td className="py-2">3–8</td>
                            <td className="py-2">&gt;7 days</td>
                            <td className="py-2">&gt;24 hours</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Mechanism Classification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Closed (Non-penetrating)</h4>
                      <p className="text-green-800">
                        Brain is not exposed. Most common type of TBI.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Penetrating (Open)</h4>
                      <p className="text-orange-800">
                        Object pierces skull and breaches dura mater.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Pathological Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Extra-axial Lesions</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• Epidural hematoma</li>
                        <li>• Subdural hematoma</li>
                        <li>• Subarachnoid hemorrhage</li>
                        <li>• Intraventricular hemorrhage</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-red-900">Intra-axial Lesions</h4>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li>• Intracerebral hemorrhage</li>
                        <li>• Cerebral contusion</li>
                        <li>• Cerebral laceration</li>
                        <li>• Diffuse axonal injury</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Signs and Symptoms */}
            <section id="symptoms" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Signs and Symptoms</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Mild TBI Symptoms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-blue-900">Physical Symptoms</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• Headache</li>
                        <li>• Vomiting or nausea</li>
                        <li>• Lack of motor coordination</li>
                        <li>• Dizziness</li>
                        <li>• Blurred vision</li>
                        <li>• Ringing in ears</li>
                        <li>• Fatigue or lethargy</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Cognitive Symptoms</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Behavioral or mood changes</li>
                        <li>• Confusion</li>
                        <li>• Trouble with memory</li>
                        <li>• Concentration problems</li>
                        <li>• Attention difficulties</li>
                        <li>• Thinking problems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Moderate to Severe TBI Symptoms</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Serious Symptoms</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Headache that does not go away</li>
                      <li>• Repeated vomiting or nausea</li>
                      <li>• Convulsions or seizures</li>
                      <li>• Inability to awaken</li>
                      <li>• Dilation of one or both pupils</li>
                      <li>• Slurred speech</li>
                      <li>• Weakness or numbness in limbs</li>
                      <li>• Loss of coordination</li>
                      <li>• Confusion, restlessness, or agitation</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Long-term Symptoms</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">Chronic Effects</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• Changes in appropriate social behavior</li>
                      <li>• Deficits in social judgment</li>
                      <li>• Problems with sustained attention</li>
                      <li>• Processing speed difficulties</li>
                      <li>• Executive functioning problems</li>
                      <li>• Alexithymia (difficulty identifying emotions) - occurs in 60.9% of individuals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Causes */}
            <section id="causes" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Causes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Common Causes in the U.S.</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-blue-900">Primary Causes</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Violence</li>
                        <li>• Transportation accidents</li>
                        <li>• Construction site mishaps</li>
                        <li>• Sports injuries</li>
                        <li>• Motor vehicle accidents</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Age-Specific Causes</h4>
                      <ul className="space-y-2 text-green-800">
                        <li>• <strong>Children 2-4:</strong> Falls are most common</li>
                        <li>• <strong>Older children:</strong> Traffic accidents compete with falls</li>
                        <li>• <strong>Child abuse:</strong> 19% of pediatric brain trauma</li>
                        <li>• <strong>Domestic violence:</strong> Significant cause</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Military and Combat</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Combat-Related TBI</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Firearms and blast injuries</li>
                      <li>• Leading cause of death and disability in war zones</li>
                      <li>• "Signature injury" of wars in Iraq and Afghanistan</li>
                      <li>• Explosions and penetrating wounds common</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Mechanism */}
            <section id="mechanism" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Mechanism</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Physical Forces</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Types of Forces</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Angular forces</strong> - Rotational movement</li>
                      <li>• <strong>Rotational forces</strong> - Twisting motion</li>
                      <li>• <strong>Shear forces</strong> - Sliding forces</li>
                      <li>• <strong>Translational forces</strong> - Linear movement</li>
                    </ul>
                    <p className="text-blue-800 mt-2">
                      Most cases involve a combination of impact and acceleration forces.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Primary and Secondary Injury</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Primary Injury</h4>
                      <p className="text-green-800">
                        Damage that occurs at the moment of trauma when tissues and blood vessels are stretched, compressed, and torn.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Secondary Injury</h4>
                      <p className="text-orange-800">
                        Complex set of cellular processes and biochemical cascades that occur in minutes to days following trauma.
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Secondary Injury Processes</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Damage to blood-brain barrier</li>
                      <li>• Release of inflammatory factors</li>
                      <li>• Free radical overload</li>
                      <li>• Excessive glutamate release (excitotoxicity)</li>
                      <li>• Calcium and sodium ion influx</li>
                      <li>• Mitochondrial dysfunction</li>
                      <li>• Changes in cerebral blood flow and pressure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Diagnosis */}
            <section id="diagnosis" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnosis</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Clinical Assessment</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Diagnostic Methods</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Neurological examination</strong> - Pupil response, reflexes</li>
                      <li>• <strong>Glasgow Coma Scale</strong> - Level of consciousness assessment</li>
                      <li>• <strong>Medical history</strong> - Circumstances of injury</li>
                      <li>• <strong>DSM-5</strong> - Can diagnose TBI and psychiatric sequelae</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Neuroimaging</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Computed Tomography (CT)</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Preferred in emergency setting</li>
                        <li>• Quick, accurate, widely available</li>
                        <li>• Detects bleeds and fractures</li>
                        <li>• Used for moderate to severe TBI</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Magnetic Resonance Imaging (MRI)</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Shows more detail than CT</li>
                        <li>• Better for long-term prognosis</li>
                        <li>• Detects diffuse axonal injury</li>
                        <li>• Not used in emergency setting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Other Diagnostic Tools</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Additional Methods</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>Neuropsychological assessment</strong> - Cognitive function evaluation</li>
                      <li>• <strong>Angiography</strong> - Blood vessel pathology</li>
                      <li>• <strong>Functional imaging</strong> - Cerebral blood flow and metabolism</li>
                      <li>• <strong>Diffusion tensor imaging (DTI)</strong> - White matter tracts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment */}
            <section id="treatment" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Treatment</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Acute Stage Treatment</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Emergency Management</h4>
                    <p className="text-blue-800 mb-2">
                      Begin treatment within the "golden hour" following injury.
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Oxygen supply</strong> - Ensure proper oxygenation</li>
                      <li>• <strong>Blood flow</strong> - Maintain adequate cerebral perfusion</li>
                      <li>• <strong>Intracranial pressure (ICP)</strong> - Control raised ICP</li>
                      <li>• <strong>Seizure prevention</strong> - Anti-convulsant medications</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">ICP Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Medical Management</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Head positioning</li>
                        <li>• Sedatives and analgesics</li>
                        <li>• Hypertonic saline</li>
                        <li>• Mannitol (osmotic diuretic)</li>
                        <li>• Hyperventilation (short-term)</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Surgical Management</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Hematoma evacuation</li>
                        <li>• Contusion removal</li>
                        <li>• Decompressive craniectomy</li>
                        <li>• Foreign body removal</li>
                        <li>• Fracture repair</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Rehabilitation</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Chronic Stage Treatment</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>Physical therapy</strong> - Strength and mobility</li>
                      <li>• <strong>Speech therapy</strong> - Communication skills</li>
                      <li>• <strong>Occupational therapy</strong> - Daily living skills</li>
                      <li>• <strong>Cognitive rehabilitation</strong> - Memory and attention</li>
                      <li>• <strong>Vision therapy</strong> - Visual processing</li>
                      <li>• <strong>Counseling</strong> - Emotional support</li>
                      <li>• <strong>Vocational rehabilitation</strong> - Return to work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Prognosis */}
            <section id="prognosis" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Prognosis</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Recovery Outcomes</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">By Severity</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Mild TBI:</strong> Most resolve within 3 weeks, 90% return to work</li>
                      <li>• <strong>Moderate TBI:</strong> 90% live independently, some need assistance</li>
                      <li>• <strong>Severe TBI:</strong> Either die or recover enough for independent living</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Factors Affecting Prognosis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Positive Factors</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Younger age</li>
                        <li>• Higher education</li>
                        <li>• Good pre-injury health</li>
                        <li>• Strong social support</li>
                        <li>• Access to rehabilitation</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-red-900">Negative Factors</h4>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li>• Age over 60 or under 2</li>
                        <li>• Substance abuse</li>
                        <li>• Medical complications</li>
                        <li>• High intracranial pressure</li>
                        <li>• Severe initial injury</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Long-term Complications</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">Potential Complications</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>Post-traumatic epilepsy</strong> - Recurrent seizures</li>
                      <li>• <strong>Chronic headaches</strong> - Persistent pain</li>
                      <li>• <strong>Cognitive deficits</strong> - Memory, attention problems</li>
                      <li>• <strong>Emotional changes</strong> - Depression, anxiety</li>
                      <li>• <strong>Behavioral changes</strong> - Personality changes</li>
                      <li>• <strong>Motor deficits</strong> - Weakness, coordination problems</li>
                    </ul>
                  </div>
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
                    className="block w-full text-center px-4 py-2 bg-[#178740] text-white rounded-lg hover:bg-[#145A32] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#178740] text-[#178740] rounded-lg hover:bg-[#178740] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/concussion" className="text-[#178740] hover:underline">• Concussion</Link></li>
                  <li><Link to="/conditions/brain-injury" className="text-[#178740] hover:underline">• Brain Injury</Link></li>
                  <li><Link to="/conditions/post-concussion-syndrome" className="text-[#178740] hover:underline">• Post-Concussion Syndrome</Link></li>
                  <li><Link to="/conditions/chronic-traumatic-encephalopathy" className="text-[#178740] hover:underline">• CTE</Link></li>
                </ul>
              </div>

              {/* Severity Scale */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">GCS Severity Scale</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Mild (13-15)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Moderate (9-12)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Severe (3-8)</span>
                  </div>
                </div>
              </div>

              {/* Emergency Signs */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">Emergency Signs</h3>
                <p className="text-red-800 text-sm mb-3">
                  Seek immediate medical care for:
                </p>
                <ul className="mt-2 space-y-1 text-red-800">
                  <li>• Loss of consciousness</li>
                  <li>• Unequal pupil size</li>
                  <li>• Severe headache</li>
                  <li>• Repeated vomiting</li>
                  <li>• Seizures</li>
                  <li>• Clear fluid from nose/ears</li>
                </ul>
                <div className="mt-3 space-y-2 text-sm">
                  <p><strong>Emergency:</strong> 911</p>
                  <p><strong>Helpline:</strong> 1-800-627-8646</p>
                </div>
              </div>

              {/* Prevention Tips */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Prevention Tips</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Wear seat belts</li>
                  <li>• Use helmets for sports</li>
                  <li>• Fall prevention at home</li>
                  <li>• Don't drink and drive</li>
                  <li>• Follow safety rules</li>
                  <li>• Child safety measures</li>
                </ul>
              </div>

              {/* Recovery Timeline */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-900">Recovery Timeline</h3>
                <ul className="space-y-1 text-sm text-purple-800">
                  <li>• <strong>0-3 months:</strong> Rapid recovery</li>
                  <li>• <strong>3-6 months:</strong> Continued improvement</li>
                  <li>• <strong>6-12 months:</strong> Slower progress</li>
                  <li>• <strong>1-2 years:</strong> Plateau phase</li>
                  <li>• <strong>2+ years:</strong> Long-term adaptation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraumaticBrainInjury;
