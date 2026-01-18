import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Activity, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope, Pill, Eye, MessageSquare } from 'lucide-react';

const MemoryDisorders = () => {
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
      <div className="bg-gradient-to-r from-[#142C52] to-[#0F172A] text-white py-16">
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
            <h1 className="text-4xl font-bold mb-4">A Brief Guide to Memory Disorders</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Memory disorders change your ability to make and recall memories. They can be caused by physical and mental health conditions, 
              traumas, injuries, substances, or medications. Some last a few minutes. Others last a lifetime.
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
                    ? 'bg-[#142C52] text-white'
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
            {/* What is a Memory Disorder */}
            <section id="overview" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What it is</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  A memory disorder is any change in your brain structures that interferes with your ability to make, keep, or recall memories. 
                  The term "memory disorder" doesn't usually refer to day-to-day forgetfulness. It generally means memory loss that 
                  keeps you from functioning safely and effectively.
                </p>
                
                <p>
                  Memory is among the most powerful and important brain functions. It enables you to recall your life's most meaningful 
                  experiences. And it makes it possible for you to check off the simplest items on your to-do list every day.
                </p>
                
                <p>
                  Because memories are made, stored, and retrieved by structures throughout the brain, any number of brain changes 
                  can disrupt it. This article explores some of the most common memory disorders, what causes them, and how health experts 
                  diagnose and treat them.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Point</h3>
                <p className="text-blue-800">
                  Memory disorders can be temporary, permanent, or progressive, depending on the underlying cause and severity 
                  of the brain changes.
                </p>
              </div>
            </section>

            {/* Types */}
            <section id="types" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Types</h2>
              
              <p className="text-gray-700 mb-6">
                Memory disorders are often classified according to how long they last. Memory loss could be temporary, permanent, or progressive.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">Temporary</h3>
                  <p className="text-green-800 mb-2">
                    Lasts for a limited time, such as amnesia after a mild brain injury.
                  </p>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Concussion-related memory loss</li>
                    <li>• Medication side effects</li>
                    <li>• Alcohol-induced blackouts</li>
                    <li>• Sleep deprivation effects</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-900">Permanent</h3>
                  <p className="text-yellow-800 mb-2">
                    Lasts indefinitely, such as memory loss following a stroke.
                  </p>
                  <ul className="space-y-1 text-sm text-yellow-800">
                    <li>• Severe traumatic brain injury</li>
                    <li>• Stroke-related memory loss</li>
                    <li>• Certain types of dementia</li>
                    <li>• Brain tumor damage</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">Progressive</h3>
                  <p className="text-orange-800 mb-2">
                    Worsens over time, such as the gradual memory loss associated with dementia.
                  </p>
                  <ul className="space-y-1 text-sm text-orange-800">
                    <li>• Alzheimer's disease</li>
                    <li>• Vascular dementia</li>
                    <li>• Lewy-body dementia</li>
                    <li>• Frontotemporal dementia</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Classification by Memory Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded">
                    <h4 className="text-md font-semibold mb-2 text-purple-900">Retrograde Amnesia</h4>
                    <p className="text-purple-800 text-sm">
                      Trouble remembering what happened immediately before the event that caused memory loss.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="text-md font-semibold mb-2 text-blue-900">Anterograde Amnesia</h4>
                    <p className="text-blue-800 text-sm">
                      Difficulty remembering new information after an event that causes memory loss.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="text-md font-semibold mb-2 text-green-900">Dissociative Amnesia</h4>
                    <p className="text-green-800 text-sm">
                      Inability to recall parts of one's own history or aspects of identity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Symptoms */}
            <section id="symptoms" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Symptoms</h2>
              
              <p className="text-gray-700 mb-6">
                The symptoms of memory disorders vary depending on what's causing the disorder. People with a memory disorder may have trouble with:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-red-900">Cognitive Symptoms</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Recalling events, facts, words, or details</li>
                    <li>• Remembering the steps of a process</li>
                    <li>• Forming new memories or learning new information</li>
                    <li>• Recognizing routes, places, or people</li>
                    <li>• Expressing thoughts through speech or writing</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">Behavioral Symptoms</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Repeating questions</li>
                    <li>• Behaving in ways that cause relationship problems</li>
                    <li>• Feeling confused or agitated</li>
                    <li>• Getting lost in familiar places</li>
                    <li>• Difficulty with daily tasks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 text-yellow-900">Important Note</h3>
                <p className="text-yellow-800">
                  Not everyone with a memory disorder will experience all these symptoms. The specific symptoms depend on the underlying cause 
                  and severity of the memory impairment.
                </p>
              </div>
            </section>

            {/* Causes */}
            <section id="causes" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Causes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Reversible Causes</h3>
                  <p className="text-gray-700 mb-4">
                    You may be able to reverse memory loss if it developed from one of these causes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Medical & Substance-Related</h4>
                      <ul className="space-y-2 text-green-800">
                        <li>• <strong>Medications</strong> - Some drugs affect memory</li>
                        <li>• <strong>Alcohol</strong> - Can cause blackouts and impairments</li>
                        <li>• <strong>Drug use</strong> - Substance-induced memory problems</li>
                        <li>• <strong>Vitamin B12 deficiency</strong> - Affects thinking skills</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-blue-900">Health Conditions</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• <strong>Mental health</strong> - Anxiety, depression</li>
                        <li>• <strong>Sleep disorders</strong> - Including sleep apnea</li>
                        <li>• <strong>Infections</strong> - HSV, West Nile virus</li>
                        <li>• <strong>Thyroid problems</strong> - Affect cognition</li>
                        <li>• <strong>Autoimmune conditions</strong> - Can impact brain</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Nonreversible Causes</h3>
                  <p className="text-gray-700 mb-4">
                    Memory loss can sometimes be permanent when caused by these conditions:
                  </p>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Permanent Brain Damage</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• <strong>Severe brain injury</strong> - Repeated concussions</li>
                      <li>• <strong>Stroke</strong> - Up to 50x higher dementia risk</li>
                      <li>• <strong>Dementia</strong> - Vascular, Lewy-body, frontotemporal</li>
                      <li>• <strong>Alzheimer's disease</strong> - Most common dementia cause</li>
                      <li>• <strong>Neurodegenerative diseases</strong> - Progressive brain damage</li>
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
                  <h3 className="text-xl font-semibold mb-4">Diagnostic Process</h3>
                  <p className="text-gray-700 mb-4">
                    Health professionals use a variety of tools to help them diagnose memory disorders. Your doctor may ask questions about your symptoms 
                    to find out when memory loss started and how it's affecting your life.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Diagnostic Tools</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Cognitive testing</strong> - Memory and thinking skills assessment</li>
                      <li>• <strong>Physical examination</strong> - Check for underlying conditions</li>
                      <li>• <strong>Lab tests</strong> - Blood work, vitamin levels</li>
                      <li>• <strong>Brain imaging</strong> - MRI, CT scans</li>
                      <li>• <strong>Neurological evaluation</strong> - Specialist assessment</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">When to See a Specialist</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <p className="text-orange-800 mb-3">
                      You may need to see a neurologist who specializes in brain function if you experience:
                    </p>
                    <ul className="mt-2 space-y-1 text-orange-800">
                      <li>• Progressive memory loss</li>
                      <li>• Memory problems affecting daily life</li>
                      <li>• Memory loss after head injury</li>
                      <li>• Sudden severe memory changes</li>
                      <li>• Memory problems with other neurological symptoms</li>
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
                  <h3 className="text-xl font-semibold mb-4">Treatment Approaches</h3>
                  <p className="text-gray-700 mb-4">
                    Treatment for a memory disorder depends on what's causing it. In some cases, treating the underlying condition is enough to restore memory.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Reversible Conditions</h4>
                    <p className="text-green-800 mb-2">
                      For treatable causes, addressing the underlying issue often restores memory function:
                    </p>
                    <ul className="space-y-1 text-green-800">
                      <li>• Discontinuing problematic medications</li>
                      <li>• Treating mental health conditions</li>
                      <li>• Correcting nutritional deficiencies</li>
                    <li>• Managing sleep disorders</li>
                      <li>• Treating infections</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Progressive Conditions</h3>
                  <p className="text-gray-700 mb-4">
                    There are not yet treatments that can reverse Alzheimer's or dementia, but some treatments can help with symptoms:
                  </p>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Medications</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>Cholinesterase inhibitors</strong> - Help with memory functions</li>
                      <li>• <strong>Memantine</strong> - For moderate to severe Alzheimer's</li>
                      <li>• <strong>Antidepressants</strong> - For mood-related memory issues</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-blue-900">Therapy Approaches</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• <strong>Occupational therapy</strong> - Daily routine strategies</li>
                        <li>• <strong>Speech therapy</strong> - Communication skills</li>
                        <li>• <strong>Cognitive stimulation</strong> - Memory exercises</li>
                        <li>• <strong>Reminiscence therapy</strong> - Life review activities</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Supportive Care</h4>
                      <ul className="space-y-2 text-orange-800">
                        <li>• <strong>Validation therapy</strong> - Emotional support</li>
                        <li>• <strong>Cognitive rehabilitation</strong> - Skill building</li>
                        <li>• <strong>Support groups</strong> - Peer connection</li>
                        <li>• <strong>Family education</strong> - Caregiver training</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention */}
            <section id="prevention" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Prevention</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Brain Injury Prevention</h3>
                  <p className="text-gray-700 mb-4">
                    The Centers for Disease Control and Prevention (CDC) recommends these strategies:
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Safety Measures</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Wear your seatbelt when traveling in a car</li>
                      <li>• Use protective gear (helmets) during risky activities</li>
                      <li>• Minimize tripping and falling hazards</li>
                      <li>• Use proper sports techniques</li>
                      <li>• Avoid substance use when engaging in activities</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text font-semibold mb-4">Dementia Risk Reduction</h3>
                  <p className="text-gray-700 mb-4">
                    To lower your risk of dementia, the CDC recommends:
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Lifestyle Factors</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Exercise regularly</li>
                      <li>• Avoid smoking</li>
                      <li>• Limit alcohol consumption</li>
                      <li>• Maintain moderate weight</li>
                      <li>• Treat high blood pressure and diabetes</li>
                      <li>• Correct hearing loss</li>
                      <li>• Stay socially engaged</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Outlook */}
            <section id="outlook" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Outlook</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Recovery Possibilities</h3>
                  <p className="text-gray-700 mb-4">
                    If a memory disorder stems from a treatable condition, or if it results from a mild head injury, recovery may be possible.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-4">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Good Prognosis</h4>
                    <p className="text-green-800">
                      Conditions that may allow for recovery include:
                    </p>
                    <ul className="mt-2 space-y-1 text-green-800">
                      <li>• Mild traumatic brain injury</li>
                      <li>• Medication side effects</li>
                      <li>• Temporary infections</li>
                      <li>• Nutritional deficiencies</li>
                      <li>• Sleep-related memory issues</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Challenges</h3>
                  <p className="text-gray-700 mb-4">
                    If the memory centers in the brain have been more severely injured, memory loss may be permanent. And if a memory disorder is the result of dementia, it's likely that memory loss will become more severe over time.
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-4">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Progressive Conditions</h4>
                    <p className="text-red-800">
                      Conditions with worsening outlook include:
                    </p>
                    <ul className="mt-2 space-y-1 text-red-800">
                      <li>• Alzheimer's disease</li>
                      <li>• Vascular dementia</li>
                      <li>• Lewy-body dementia</li>
                      <li>• Frontotemporal dementia</li>
                      <li>• Other progressive neurodegenerative diseases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Can you prevent a memory disorder by playing brain games?</h3>
                  <p className="text-gray-700">
                    Brain games can improve your mood and stimulate your mind. They may help build thinking skills and slow memory loss if you already have dementia. 
                    Right now, there's not enough evidence to say that playing games can prevent a memory disorder.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Is dementia hereditary?</h3>
                  <p className="text-gray-700">
                    Genes that raise your risk of dementia can run in families. Even so, only one type of dementia is passed down directly: 
                    Familial Alzheimer's disease, which represents about 20% of all Alzheimer's cases.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Can taking vitamins help to prevent a memory disorder?</h3>
                  <p className="text-gray-700">
                    A recent study showed that older adults who took a multivitamin daily had improved memory after three years. 
                    B-complex vitamins have been shown to delay or prevent cognitive decline.
                  </p>
                </div>
              </div>
            </section>

            {/* Takeaway */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Takeaway</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  A memory disorder can interfere with your ability to make, store, and recall your memories. It can happen as the result of a medication, 
                  infection, health condition, or brain injury.
                </p>
                <p>
                  Mild memory changes may be part of the aging process, but when memory loss disrupts your life, it may be time to seek help.
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
                    className="block w-full text-center px-4 py-2 bg-[#142C52] text-white rounded-lg hover:bg-[#0F172A] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#142C52] text-[#142C52] rounded-lg hover:bg-[#142C52] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/alzheimers" className="text-[#142C52] hover:underline">• Alzheimer's Disease</Link></li>
                  <li><Link to="/conditions/dementia" className="text-[#142C52] hover:underline">• Dementia Overview</Link></li>
                  <li><Link to="/conditions/brain-injury" className="text-[#142C52] hover:underline">• Brain Injury</Link></li>
                  <li><Link to="/conditions/cognitive-health" className="text-[#142C52] hover:underline">• Cognitive Health</Link></li>
                </ul>
              </div>

              {/* Warning Signs */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">When to Seek Help</h3>
                <p className="text-red-800 text-sm mb-3">
                  Seek immediate medical attention if you experience:
                </p>
                <ul className="mt-2 space-y-1 text-red-800">
                  <li>• Sudden severe memory loss</li>
                  <li>• Memory loss after head injury</li>
                  <li>• Confusion plus memory problems</li>
                  <li>• Memory loss affecting daily functioning</li>
                </ul>
                <div className="mt-3 space-y-2 text-sm">
                  <p><strong>Emergency:</strong> 911</p>
                  <p><strong>Crisis Hotline:</strong> 988</p>
                </div>
              </div>

              {/* Prevention Tips */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Memory Protection Tips</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Stay physically active</li>
                  <li>• Get adequate sleep</li>
                  <li>• Eat a balanced diet</li>
                  <li>• Stay socially engaged</li>
                  <li>• Manage chronic conditions</li>
                  <li>• Limit alcohol intake</li>
                  <li>• Protect your head from injury</li>
                </ul>
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">Need Immediate Help?</h3>
                <p className="text-red-800 text-sm mb-3">
                  If you or someone you know is experiencing severe memory problems or confusion, don't wait to seek help.
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

export default MemoryDisorders;
