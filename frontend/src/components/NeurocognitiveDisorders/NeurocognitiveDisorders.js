import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Activity, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope, Pill, Eye, MessageSquare, TrendingUp } from 'lucide-react';

const NeurocognitiveDisorders = () => {
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
      <div className="bg-gradient-to-r from-[#4C97A8] to-[#3A8B9C] text-white py-16">
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
            <h1 className="text-4xl font-bold mb-4">Overview of Neurocognitive Disorders</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Cognitive function is a major determinant of an individual's quality of life. The number of individuals developing a neurocognitive disorder (NCD) 
              is increasing as the population ages, with dementia cases doubling every 20 years and projected to reach over 115 million worldwide by 2050.
            </p>
            <p className="text-sm text-white/80 mt-4">
              Understanding normal aging, identifying vulnerable individuals early, and developing effective interventions are crucial public health priorities.
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
              { id: 'normal-aging', label: 'Normal Aging', icon: Activity },
              { id: 'ncd-overview', label: 'NCD Overview', icon: Users },
              { id: 'diagnosis', label: 'Diagnosis', icon: Stethoscope },
              { id: 'types', label: 'Types', icon: BookOpen },
              { id: 'risk-factors', label: 'Risk Factors', icon: AlertTriangle },
              { id: 'psychiatric', label: 'Psychiatric', icon: Heart },
              { id: 'conclusions', label: 'Conclusions', icon: Target }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#4C97A8] text-white'
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
                  Cognitive function is a major health concern that affects an individual's ability to live independently and is a key determinant 
                  of quality of life. Among older adults, cognitive function varies widely with aging.
                </p>
                
                <p>
                  The number of individuals developing a neurocognitive disorder (NCD) is increasing as the population ages: the number of individuals 
                  with dementia is doubling every 20 years and will reach over 115 million worldwide by 2050. There is a need to identify vulnerable individuals early, 
                  understand the trajectory of their NCD, and intervene with effective treatments.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Statistics</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>35.5 million</strong> people worldwide had dementia in 2010</li>
                  <li>• <strong>65.7 million</strong> projected by 2030</li>
                  <li>• <strong>115.4 million</strong> projected by 2050</li>
                  <li>• Cases double every <strong>20 years</strong></li>
                </ul>
              </div>
            </section>

            {/* Normal Aging */}
            <section id="normal-aging" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Normal Aging</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cognitive Changes with Age</h3>
                  <p className="text-gray-700 mb-4">
                    Generally, some cognitive functions are relatively stable with aging, including vocabulary and knowledge of world events, whereas 
                    other cognitive functions, particularly those that rely on mental processing speed and attention, working memory, executive function, 
                    and verbal recall, decline with age.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3 text-green-900">Stable Functions</h4>
                      <ul className="space-y-2 text-green-800">
                        <li>• Vocabulary</li>
                        <li>• Knowledge of world events</li>
                        <li>• Crystallized intelligence</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3 text-orange-900">Declining Functions</h4>
                      <ul className="space-y-2 text-orange-800">
                        <li>• Mental processing speed</li>
                        <li>• Attention</li>
                        <li>• Working memory</li>
                        <li>• Executive function</li>
                        <li>• Verbal recall</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Neuroanatomic Changes</h3>
                  <p className="text-gray-700 mb-4">
                    These decrements in cognitive functioning with aging have been related to changes in underlying neuroanatomic structures:
                  </p>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Structural Changes</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• Decreases in white matter integrity</li>
                      <li>• Decreased volumes of caudate, cerebellum, hippocampus</li>
                      <li>• Decreased prefrontal cortex volume</li>
                      <li>• Decreased medial temporal lobes</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Brain Plasticity and Cognitive Reserve</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Key Concepts</h4>
                    <p className="text-blue-800 mb-2">
                      The concept of brain plasticity and the development of cognitive reserve are important in understanding the aging process.
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Cognitive reserve</strong> - Compensatory mechanisms in neural networks</li>
                      <li>• <strong>Brain plasticity</strong> - Ability to adapt and reorganize</li>
                      <li>• <strong>Compensatory activation</strong> - Increased prefrontal activation in older adults</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* NCD Overview */}
            <section id="ncd-overview" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Neurocognitive Disorders</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">DSM-5 Classification</h3>
                  <p className="text-gray-700 mb-4">
                    The DSM-5 replaced the four categories of cognitive disorders from DSM-IV with three categories:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-red-900">Delirium</h4>
                      <p className="text-red-800">
                        Acute confusional state, exclusion criterion for other NCDs
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-yellow-900">Mild NCD</h4>
                      <p className="text-yellow-800">
                        Cognitive difficulties beyond normal aging but independent living preserved
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Major NCD</h4>
                      <p className="text-orange-800">
                        Significant decline interfering with everyday activities (dementia)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Cognitive Domains</h3>
                  <p className="text-gray-700 mb-4">
                    The DSM-5 substitutes specific cognitive domains instead of areas of cognitive dysfunction:
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Six Cognitive Domains</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Complex attention</strong> - Maintaining and shifting attention</li>
                      <li>• <strong>Executive function</strong> - Planning, reasoning, problem-solving</li>
                      <li>• <strong>Learning and memory</strong> - Acquiring and recalling new information</li>
                      <li>• <strong>Language</strong> - Speaking, understanding, reading, writing</li>
                      <li>• <strong>Perceptual-motor</strong> - Visual perception and motor coordination</li>
                      <li>• <strong>Social cognition</strong> - Recognizing emotions and social cues</li>
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
                  <h3 className="text-xl font-semibold mb-4">DSM-5 Criteria for Mild and Major NCD</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Core Requirements</h4>
                    <ol className="space-y-3 text-blue-800">
                      <li>
                        <strong>Evidence of cognitive decline</strong> from a previous level in one or more cognitive domains based on:
                        <ul className="mt-2 space-y-1 text-sm text-blue-800">
                          <li>• Concern of individual, informant, or clinician about significant decline</li>
                          <li>• Impairment in cognitive performance (preferably documented by testing)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Interference with independence</strong>:
                        <ul className="mt-2 space-y-1 text-sm text-blue-800">
                          <li>• <strong>Major NCD:</strong> Interferes with everyday activities</li>
                          <li>• <strong>Mild NCD:</strong> Does not interfere with independence (may require accommodations)</li>
                        </ul>
                      </li>
                      <li><strong>Not exclusively in context of delirium</strong></li>
                      <li><strong>Not better explained by another mental disorder</strong></li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Diagnostic Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Assessment Tools</h4>
                      <ul className="space-y-2 text-purple-800">
                        <li>• Standardized neuropsychological testing</li>
                        <li>• Quantified clinical assessment</li>
                        <li>• Bedside cognitive testing</li>
                        <li>• Functional assessment</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Severity Levels</h4>
                      <ul className="space-y-2 text-green-800">
                        <li>• <strong>Mild:</strong> 1-2 SD below norm (instrumental ADL difficulties)</li>
                        <li>• <strong>Moderate:</strong> &gt;2 SD below norm (basic ADL difficulties)</li>
                        <li>• <strong>Severe:</strong> Fully dependent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types */}
            <section id="types" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Major Neurocognitive Disorders</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Most Common NCDs</h3>
                  <p className="text-blue-800 mb-4">
                    The most common major NCDs are Alzheimer's disease, vascular dementia, dementia with Lewy bodies, and frontotemporal dementia.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Alzheimer's Disease (AD)</h4>
                    <ul className="space-y-2 text-green-800 text-sm">
                      <li>• Most common neurodegenerative dementia</li>
                      <li>• Insidious onset, progressive decline</li>
                      <li>• Memory impairment primary in amnestic type</li>
                      <li>• Biomarkers: CSF Aβ42, tau, PET imaging</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">Vascular Dementia (VaD)</h4>
                    <ul className="space-y-2 text-orange-800 text-sm">
                      <li>• ~15% of dementia cases</li>
                      <li>• Abrupt onset, stepwise decline</li>
                      <li>• Cerebrovascular disease evidence</li>
                      <li>• Often mixed with other dementias in older adults</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Dementia with Lewy Bodies (DLB)</h4>
                    <ul className="space-y-2 text-purple-800 text-sm">
                      <li>• Second most common after AD (over 65)</li>
                      <li>• Fluctuating attention, visual hallucinations</li>
                      <li>• Parkinsonian motor features</li>
                      <li>• REM sleep behavior disorder</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Frontotemporal Dementia (FTD)</h4>
                    <ul className="space-y-2 text-red-800 text-sm">
                      <li>• Fourth leading type of dementia</li>
                      <li>• Early onset (70% before age 65)</li>
                      <li>• Behavioral changes, executive dysfunction</li>
                      <li>• Three variants: behavioral, nonfluent, semantic</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Risk Factors */}
            <section id="risk-factors" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Risk Factors</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Nonmodifiable Risk Factors</h3>
                  <p className="text-gray-700 mb-4">
                    These cannot be mitigated by diet or lifestyle changes:
                  </p>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Key Nonmodifiable Factors</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• <strong>Age</strong> - Primary risk factor for AD</li>
                      <li>• <strong>Gender</strong> - Female gender increased risk</li>
                      <li>• <strong>Genetics</strong> - APOE ε4 allele</li>
                      <li>• <strong>Family history</strong> - Genetic predisposition</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Modifiable Risk Factors</h3>
                  <p className="text-gray-700 mb-4">
                    These can be influenced by lifestyle and interventions:
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Protective Factors</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Physical activity</strong> - Aerobic exercise</li>
                      <li>• <strong>Education</strong> - Higher educational attainment</li>
                      <li>• <strong>Mental stimulation</strong> - Cognitive engagement</li>
                      <li>• <strong>Social engagement</strong> - Social activities</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">Risk Factors</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>Smoking</strong> - Vascular damage</li>
                      <li>• <strong>Homocysteine</strong> - Cerebrovascular disease risk</li>
                      <li>• <strong>Depression</strong> - Cognitive decline risk</li>
                      <li>• <strong>Low socioeconomic status</strong> - Limited resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Psychiatric Disorders */}
            <section id="psychiatric" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Cognition and Psychiatric Disorders</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Schizophrenia</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <p className="text-purple-800 mb-2">
                      Cognitive impairment can predict the course of schizophrenia and be independent of psychotic symptoms.
                    </p>
                    <ul className="space-y-2 text-purple-800 text-sm">
                      <li>• Determines functional outcome more than core diagnostic criteria</li>
                      <li>• Distinguishes from affective disorders</li>
                      <li>• Early identification may impact long-term course</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Major Depression</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-2">
                      Associated with cognitive deficits during depressive episodes:
                    </p>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li>• Attention and memory deficits</li>
                      <li>• Psychomotor and processing speed impairment</li>
                      <li>• Executive function deficits</li>
                      <li>• May not normalize even after remission</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Neuroanatomic Changes</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <p className="text-green-800 mb-2">
                      Changes in structures important for both mood and cognition:
                    </p>
                    <ul className="space-y-2 text-green-800 text-sm">
                      <li>• Orbitofrontal cortex</li>
                      <li>• Amygdala</li>
                      <li>• Hippocampus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusions */}
            <section id="conclusions" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Conclusions</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Understanding the role of neuroanatomic structures and neural networks with normal aging is essential to developing strategies 
                  to optimize cognitive function with aging. These strategies could include nonpharmacological interventions (diet, exercise, mental training) 
                  as well as public health policies to improve socioeconomic status and educational attainment.
                </p>
                
                <p>
                  Neurodegenerative disorders are an important global health concern, with approximately 115 million people worldwide expected to receive 
                  a diagnosis of dementia by the year 2050. The DSM-5 has provided a framework for understanding the continuum from mild cognitive 
                  impairment to major NCD.
                </p>
                
                <p>
                  Recognizing cognitive disorders in patients with psychiatric disorders is also important in developing an accurate assessment 
                  of the patient's functional level and long-term prognosis.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Future Directions</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Randomized clinical trials for interventions</li>
                  <li>• Biomarker development for early detection</li>
                  <li>• Targeted treatments for specific NCD types</li>
                  <li>• Cognitive training and rehabilitation programs</li>
                  <li>• Public health initiatives for prevention</li>
                </ul>
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
                    className="block w-full text-center px-4 py-2 bg-[#4C97A8] text-white rounded-lg hover:bg-[#3A8B9C] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#4C97A8] text-[#4C97A8] rounded-lg hover:bg-[#4C97A8] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/alzheimers" className="text-[#4C97A8] hover:underline">• Alzheimer's Disease</Link></li>
                  <li><Link to="/conditions/dementia" className="text-[#4C97A8] hover:underline">• Dementia Overview</Link></li>
                  <li><Link to="/conditions/mild-cognitive-impairment" className="text-[#4C97A8] hover:underline">• Mild Cognitive Impairment</Link></li>
                  <li><Link to="/conditions/vascular-dementia" className="text-[#4C97A8] hover:underline">• Vascular Dementia</Link></li>
                </ul>
              </div>

              {/* DSM-5 Classification */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">DSM-5 Classification</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Delirium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Mild NCD</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Major NCD</span>
                  </div>
                </div>
              </div>

              {/* Cognitive Domains */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Six Cognitive Domains</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Complex attention</li>
                  <li>• Executive function</li>
                  <li>• Learning and memory</li>
                  <li>• Language</li>
                  <li>• Perceptual-motor</li>
                  <li>• Social cognition</li>
                </ul>
              </div>

              {/* Warning Signs */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">When to Seek Help</h3>
                <p className="text-red-800 text-sm mb-3">
                  Seek medical attention if you or a loved one experiences:
                </p>
                <ul className="mt-2 space-y-1 text-red-800">
                  <li>• Memory loss affecting daily life</li>
                  <li>• Difficulty with familiar tasks</li>
                  <li>• Changes in personality or behavior</li>
                  <li>• Problems with language or communication</li>
                  <li>• Confusion about time or place</li>
                </ul>
                <div className="mt-3 space-y-2 text-sm">
                  <p><strong>Emergency:</strong> 911</p>
                  <p><strong>Crisis Hotline:</strong> 988</p>
                </div>
              </div>

              {/* Prevention Tips */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-900">Brain Health Tips</h3>
                <ul className="space-y-2 text-purple-800 text-sm">
                  <li>• Regular aerobic exercise</li>
                  <li>• Mental stimulation and learning</li>
                  <li>• Social engagement</li>
                  <li>• Healthy diet (Mediterranean)</li>
                  <li>• Quality sleep</li>
                  <li>• Stress management</li>
                  <li>• Regular health checkups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeurocognitiveDisorders;
