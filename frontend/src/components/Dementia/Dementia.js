import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Activity, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope, Pill, Eye, MessageSquare, TrendingUp, FileText } from 'lucide-react';

const Dementia = () => {
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
      <div className="bg-gradient-to-r from-[#16808D] to-[#0C4A50] text-white py-16">
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
            <h1 className="text-4xl font-bold mb-4">Dementia and Cognitive Impairment</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Epidemiology, Diagnosis, and Treatment - A comprehensive guide to understanding dementia, 
              mild cognitive impairment, and their impact on individuals and society.
            </p>
            <p className="text-sm text-white/80 mt-4">
              By Julie Hugo, Mary Ganguli - Clinical Geriatric Medicine
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
              { id: 'impact', label: 'Impact', icon: AlertTriangle },
              { id: 'epidemiology', label: 'Epidemiology', icon: Users },
              { id: 'risk-factors', label: 'Risk Factors', icon: Activity },
              { id: 'assessment', label: 'Assessment', icon: Stethoscope },
              { id: 'types', label: 'Types', icon: BookOpen },
              { id: 'treatment', label: 'Treatment', icon: Pill },
              { id: 'summary', label: 'Summary', icon: FileText }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#16808D] text-white'
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  When older patients and their families report symptoms of "memory loss," experienced clinicians know that these concerns 
                  refer to a range of cognitive abilities or to general cognitive decline, and not just memory. However, some degree 
                  of cognitive slowing is typical of normal aging.
                </p>
                
                <p>
                  The clinician's first challenge is to identify the cognitive changes that are clinically significant. Dementia is typically 
                  diagnosed when acquired cognitive impairment has become severe enough to compromise social and/or occupational functioning. 
                  Mild cognitive impairment (MCI) is a state intermediate between normal cognition and dementia, with essentially preserved functional abilities.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">DSM-5 Framework</h3>
                <p className="text-blue-800">
                  We describe these entities using the framework of the DSM-5:
                </p>
                <ul className="mt-2 space-y-2 text-blue-800">
                  <li>• <strong>Major Neurocognitive Disorder</strong> - corresponds to dementia</li>
                  <li>• <strong>Mild Neurocognitive Disorder</strong> - corresponds to MCI</li>
                  <li>• Requires substantial impairment in one or more cognitive domains</li>
                  <li>• Must interfere with independence in everyday activities</li>
                </ul>
              </div>
            </section>

            {/* Impact */}
            <section id="impact" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Impact of Dementia</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Individual and Societal Impact</h3>
                  <p className="text-gray-700 mb-4">
                    Neurocognitive disorders, particularly major neurocognitive disorders (dementias), have tremendous consequences for individuals, 
                    their families, the healthcare system, and the economy.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-red-900">Healthcare Impact</h4>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li>• Leading cause of death in the US</li>
                        <li>• Major cause of hospital admissions</li>
                        <li>• Skilled nursing facility admissions</li>
                        <li>• Home health care utilization</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Economic Impact</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• High healthcare service costs</li>
                        <li>• Unpaid caregiving costs</li>
                        <li>• Family caregiver emotional stress</li>
                        <li>• Caregiver health problems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Global Statistics</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Worldwide Prevalence</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>2010:</strong> 35.6 million people living with dementia</li>
                      <li>• <strong>2050:</strong> Projected 115.4 million people</li>
                      <li>• Cases doubling every 20 years</li>
                      <li>• Rapid aging in low- and middle-income countries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Epidemiology */}
            <section id="epidemiology" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Dementia in the Population</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Prevalence</h3>
                  <p className="text-gray-700 mb-4">
                    Prevalence increases exponentially with increasing age and doubles every five years after age 65.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Key Prevalence Data</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>65+ years:</strong> 5-10% in higher income countries</li>
                      <li>• <strong>Gender:</strong> Higher in women (longer life expectancy)</li>
                      <li>• <strong>US demographics:</strong> Higher in African American and Latino populations</li>
                      <li>• <strong>Global variation:</strong> Lower in sub-Saharan Africa, higher in Latin America</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Incidence</h3>
                  <p className="text-gray-700 mb-4">
                    The incidence of dementia increases steadily until age 85-90, then continues to rise but less rapidly.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Age-Specific Rates</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>60-64 years:</strong> 0.1% annually</li>
                      <li>• <strong>85+ years:</strong> 8.6% annually</li>
                      <li>• Similar in men and women or slightly higher in women</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Risk Factors */}
            <section id="risk-factors" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Risk and Protective Factors</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Demographic Risk Factors</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Primary Risk Factors</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• <strong>Age</strong> - Strongest risk factor, only consistent after eighth decade</li>
                      <li>• <strong>Gender</strong> - Higher prevalence in women (longer life expectancy)</li>
                      <li>• <strong>Education</strong> - Lower education associated with higher prevalence</li>
                      <li>• <strong>Race/Ethnicity</strong> - Higher in African American and Latino populations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Genetic Factors</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Key Genetic Markers</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>APOE*4 allele</strong> - Increases risk of AD, PD, DLB, VaD, FTD</li>
                      <li>• <strong>APOE*2 allele</strong> - Appears to have protective effect</li>
                      <li>• <strong>Autosomal dominant mutations</strong> - Rare early-onset familial AD</li>
                      <li>• <strong>Effect wears off</strong> after eighth decade for APOE*4</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Medical Risk Factors</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">Cardiovascular Factors</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>Heart disease</strong> - Associated with AD and vascular dementia</li>
                      <li>• <strong>Midlife risk factors</strong> - Hypertension, high cholesterol, BMI, diabetes</li>
                      <li>• <strong>Heart failure & atrial fibrillation</strong> - Risk factors for cognitive impairment</li>
                      <li>• <strong>Inflammation</strong> - Altered inflammatory markers in AD and VaD</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Protective Factors</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Cognitive Reserve</h4>
                    <p className="text-green-800 mb-2">
                      The concept of "reserve" explains why some individuals remain cognitively intact despite neuropathology:
                    </p>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Brain reserve</strong> - Structural capacity and integrity</li>
                      <li>• <strong>Cognitive reserve</strong> - Functional capacity and compensatory strategies</li>
                      <li>• <strong>Education</strong> - Higher education associated with lower prevalence</li>
                      <li>• <strong>Bilingualism</strong> - Delayed onset of dementia</li>
                      <li>• <strong>Cognitive activity</strong> - Stimulating leisure activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Clinical Assessment */}
            <section id="assessment" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Clinical Assessment</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Subjective Assessment</h3>
                  <p className="text-gray-700 mb-4">
                    History should be obtained from both patient and family member/caregiver when possible.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Focus Areas</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Changes in cognitive functioning in everyday activities</li>
                      <li>• Early deficits in managing finances and medications</li>
                      <li>• Problems with problem-solving, multi-tasking, new situations</li>
                      <li>• Over-learned activities may be preserved</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Objective Assessment</h3>
                  <p className="text-gray-700 mb-4">
                    Requires standardized testing, preferably neuropsychological assessment.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Assessment Tools</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Neuropsychological assessment</strong> - Preferred for detecting mild impairments</li>
                      <li>• <strong>MMSE</strong> - Mini-Mental State Examination</li>
                      <li>• <strong>MoCA</strong> - Montreal Cognitive Assessment</li>
                      <li>• <strong>Mini-Cog</strong> - Brief screening tool</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Cognitive Domains</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Key Domains</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• Complex attention</li>
                        <li>• Executive functioning</li>
                        <li>• Learning and memory</li>
                        <li>• Language</li>
                        <li>• Perceptual-motor function</li>
                        <li>• Social cognition</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Functional Examples</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Tasks take longer, easily distracted</li>
                        <li>• Difficulty with multi-stage tasks, planning</li>
                        <li>• Trouble recalling recent events, misplacing objects</li>
                        <li>• Word-finding difficulty, comprehension problems</li>
                        <li>• Getting lost, difficulty using tools</li>
                        <li>• Disinhibition, loss of empathy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types */}
            <section id="types" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Etiologic Subtypes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Alzheimer's Disease</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Characteristics</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Most common neurodegenerative disease</li>
                      <li>• Progressive loss of synapses and neurons</li>
                      <li>• Amyloid plaques and neurofibrillary tangles</li>
                      <li>• Prominent cholinergic deficits</li>
                      <li>• Typically diagnosed in 8th-9th decades</li>
                      <li>• Average survival ~10 years after onset</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Vascular Dementia</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Characteristics</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Second most common cause of dementia</li>
                      <li>• Frequently present in combination with AD</li>
                      <li>• Results from large and small vessel disease</li>
                      <li>• Location of lesions more important than volume</li>
                      <li>• Variable presentation and time course</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Frontotemporal Dementia</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Characteristics</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Third most prevalent degenerative dementia</li>
                      <li>• Prominent atrophy of frontal and temporal lobes</li>
                      <li>• Mean onset in sixth decade</li>
                      <li>• Common cause of early-onset dementia</li>
                      <li>• Survival 6-11 years after symptom onset</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Dementia with Lewy Bodies</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Characteristics</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• Second most common neurodegenerative dementia</li>
                      <li>• Alpha-synuclein misfolding and aggregation</li>
                      <li>• Onset between sixth and ninth decades</li>
                      <li>• Average survival 5-7 years</li>
                      <li>• Core features: fluctuating cognition, visual hallucinations, parkinsonism</li>
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
                  <h3 className="text-xl font-semibold mb-4">Etiology-Specific Treatment</h3>
                  <p className="text-gray-700 mb-4">
                    If neurocognitive disorder is due to treatable condition, specific treatment is first line of defense. 
                    Currently, no disease-modifying therapies are available for neurodegenerative diseases.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Symptomatic Treatment</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Cholinesterase Inhibitors</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Available drugs:</strong> Donepezil, Rivastigmine, Galantamine</li>
                      <li>• <strong>Indications:</strong> Dementia due to AD, Parkinson's disease dementia</li>
                      <li>• <strong>Effects:</strong> Modest improvements in cognition and daily functioning</li>
                      <li>• <strong>Limitations:</strong> Mixed evidence for long-term outcomes</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">NMDA Receptor Antagonist</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Memantine</strong> - Approved for moderate to severe AD</li>
                      <li>• <strong>Mechanism:</strong> Neuroprotective against excitoxicity</li>
                      <li>• <strong>Benefits:</strong> Small beneficial effect on cognition at 6 months</li>
                      <li>• <strong>Tolerability:</strong> Well tolerated</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Other Treatments</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>SSRI antidepressants</strong> - Benefits for behavioral symptoms in FTD</li>
                      <li>• <strong>Antipsychotics</strong> - Use with caution, consider cerebrovascular risks</li>
                      <li>• <strong>Benzodiazepines</strong> - Generally avoided, except for REM Sleep Disorder in DLB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Summary */}
            <section id="summary" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Summary</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Clinicians should be knowledgeable about the various neurocognitive disorders which are common and devastating in older adults. 
                  Diagnosis requires careful history-taking and skilled clinical assessment, followed by appropriate laboratory investigations.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Key Points</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li>• <strong>Diagnosis</strong> requires careful history-taking and skilled clinical assessment</li>
                    <li>• <strong>Diagnostic imaging</strong> can be useful when interpreted by experts</li>
                    <li>• <strong>Biomarkers</strong> for most disorders are still being validated</li>
                    <li>• <strong>Referral to specialists</strong> valuable for specific purposes</li>
                    <li>• <strong>Drug treatments</strong> at present provide symptomatic relief</li>
                    <li>• <strong>Psychosocial and supportive therapies</strong> are essential</li>
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
                    className="block w-full text-center px-4 py-2 bg-[#16808D] text-white rounded-lg hover:bg-[#0C4A50] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#16808D] text-[#16808D] rounded-lg hover:bg-[#16808D] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/alzheimers" className="text-[#16808D] hover:underline">• Alzheimer's Disease</Link></li>
                  <li><Link to="/conditions/mild-cognitive-impairment" className="text-[#16808D] hover:underline">• Mild Cognitive Impairment</Link></li>
                  <li><Link to="/conditions/vascular-dementia" className="text-[#16808D] hover:underline">• Vascular Dementia</Link></li>
                  <li><Link to="/conditions/lewy-body" className="text-[#16808D] hover:underline">• Lewy Body Dementia</Link></li>
                </ul>
              </div>

              {/* DSM-5 Criteria */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">DSM-5 Criteria</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Major NCD (Dementia)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Mild NCD (MCI)</span>
                  </div>
                </div>
                <p className="text-blue-800 text-sm mt-3">
                  Requires substantial impairment in one or more cognitive domains.
                </p>
              </div>

              {/* Assessment Tools */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Assessment Tools</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• MMSE (Mini-Mental State)</li>
                  <li>• MoCA (Montreal Cognitive)</li>
                  <li>• Mini-Cog</li>
                  <li>• Neuropsychological testing</li>
                </ul>
              </div>

              {/* Risk Factors */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-900">Major Risk Factors</h3>
                <ul className="space-y-1 text-sm text-orange-800">
                  <li>• Age (strongest factor)</li>
                  <li>• APOE*4 genotype</li>
                  <li>• Cardiovascular disease</li>
                  <li>• Lower education</li>
                  <li>• Head injury</li>
                </ul>
              </div>

              {/* Warning Signs */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">When to Seek Help</h3>
                <p className="text-red-800 text-sm mb-3">
                  Seek medical attention for:
                </p>
                <ul className="mt-2 space-y-1 text-red-800">
                  <li>• Memory loss affecting daily life</li>
                  <li>• Difficulty with familiar tasks</li>
                  <li>• Changes in personality/behavior</li>
                  <li>• Language/communication problems</li>
                  <li>• Confusion about time/place</li>
                </ul>
                <div className="mt-3 space-y-2 text-sm">
                  <p><strong>Emergency:</strong> 911</p>
                  <p><strong>Crisis Hotline:</strong> 988</p>
                </div>
              </div>

              {/* Treatment Options */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-900">Treatment Options</h3>
                <ul className="space-y-1 text-sm text-purple-800">
                  <li>• Cholinesterase inhibitors</li>
                  <li>• NMDA receptor antagonists</li>
                  <li>• Antidepressants (for behavioral symptoms)</li>
                  <li>• Cognitive rehabilitation</li>
                  <li>• Supportive therapies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dementia;
