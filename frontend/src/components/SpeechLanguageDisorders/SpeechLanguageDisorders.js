import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Activity, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope, Pill, Eye, TrendingUp, FileText, Wrench, Car, Brain } from 'lucide-react';

const SpeechLanguageDisorders = () => {
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
      <div className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white py-16">
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
                <MessageSquare className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Speech & Language Disorders</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive guide to childhood speech and language disorders, including assessment, diagnosis, 
              causes, prevalence, and treatment approaches for communication challenges in children.
            </p>
            <p className="text-sm text-white/80 mt-4">
              Based on peer-reviewed medical literature and clinical guidelines
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Sidebar */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Overview', icon: MessageSquare },
              { id: 'differentiating', label: 'Speech vs Language', icon: Brain },
              { id: 'development', label: 'Development', icon: Activity },
              { id: 'speech-disorders', label: 'Speech Disorders', icon: MessageSquare },
              { id: 'language-disorders', label: 'Language Disorders', icon: BookOpen },
              { id: 'diagnosis', label: 'Diagnosis', icon: Stethoscope },
              { id: 'causes', label: 'Causes & Risk Factors', icon: AlertTriangle },
              { id: 'prevalence', label: 'Prevalence', icon: TrendingUp }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#DC2626] text-white'
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
                  Speech and language disorders in children include a variety of conditions that disrupt children's ability to communicate. 
                  Severe speech and language disorders are particularly serious, preventing or impeding children's participation in family and community, 
                  school achievement, and eventual employment.
                </p>
                
                <p>
                  This comprehensive guide addresses current standards of care for assessing and diagnosing speech and language disorders, 
                  their causes and risk factors, prevalence, and common comorbidities with other conditions.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Key Impact Areas</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• <strong>Family participation</strong> - Communication barriers affect family relationships</li>
                  <li>• <strong>School achievement</strong> - Academic performance and learning outcomes</li>
                  <li>• <strong>Social integration</strong> - Community participation and peer relationships</li>
                  <li>• <strong>Employment prospects</strong> - Future career opportunities and independence</li>
                </ul>
              </div>
            </section>

            {/* Differentiating Language from Speech */}
            <section id="differentiating" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Differentiating Language from Speech</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Language Definition</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      Language refers to the code, or symbol system, for transforming unobservable mental events, such as thoughts and memories, 
                      into events that can be perceived by other people.
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Expressive language</strong> - Ability to encode ideas into language forms and symbols</li>
                      <li>• <strong>Receptive language</strong> - Ability to understand meanings expressed by others</li>
                      <li>• <strong>Multiple modalities</strong> - Speaking, listening, reading, writing, signing</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Speech Definition</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <p className="text-green-800 mb-4">
                      Speech has a narrower meaning than language and refers specifically to sounds produced by the oral mechanism, 
                      including the lips, tongue, vocal cords, and related structures.
                    </p>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Observable directly</strong> - Unlike language, speech can be directly observed</li>
                      <li>• <strong>Most common transmission</strong> - Primary way to transmit language</li>
                      <li>• <strong>Separate from language</strong> - Can occur independently or together</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Important Distinctions</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>Speech disorder only</strong> - Poor articulation with intact language skills</li>
                      <li>• <strong>Language disorder only</strong> - Poor comprehension with normal speech production</li>
                      <li>• <strong>Both disorders</strong> - Combined speech and language difficulties</li>
                      <li>• <strong>Early challenges</strong> - Difficult to differentiate in very young children</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Speech and Language Development */}
            <section id="development" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Speech and Language Development</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Prenatal Foundations</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800">
                      The foundations for speech and language development begin in utero, with growth of anatomical structures 
                      and physiological processes that will eventually support sensory, motor, attention, memory, and learning skills.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Early Development (0-12 months)</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Birth to 3 months:</strong> Special attention to human faces and voices</li>
                      <li>• <strong>3-6 months:</strong> Nonlinguistic communication through gestures</li>
                      <li>• <strong>6-12 months:</strong> Nonspeech sounds (cooing, squealing), babbling</li>
                      <li>• <strong>Pattern recognition:</strong> Begin to recognize speech patterns</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Preschool Development (1-5 years)</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>12-18 months:</strong> First words, basic comprehension</li>
                      <li>• <strong>2-3 years:</strong> Vocabulary expansion, simple sentences</li>
                      <li>• <strong>3-4 years:</strong> Complex sentences, grammar development</li>
                      <li>• <strong>4-5 years:</strong> Stories, conversations, metalinguistic awareness</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">School Age Foundation</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <p className="text-purple-800">
                      By school entry, speech and language skills provide the foundation for reading and writing. 
                      These literacy skills are critical for learning and social development through the school years and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Speech Disorders */}
            <section id="speech-disorders" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Speech Disorders</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Definition and Components</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      Speech requires coordinating breathing (respiration) with movements that produce voice (phonation) 
                      and sounds (articulation). Speech disorders are deficits that may prevent speech from being produced at all, 
                      or result in speech that cannot be understood or is abnormal in some other way.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Main Subtypes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Speech Sound Disorders</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• <strong>Articulation disorders</strong> - Individual sound production</li>
                        <li>• <strong>Phonological disorders</strong> - Sound patterns and sequences</li>
                        <li>• <strong>Dysarthria</strong> - Muscle/nerve impairment</li>
                        <li>• <strong>Childhood apraxia</strong> - Planning/programming difficulties</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Voice Disorders</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• <strong>Dysphonia</strong> - Hoarse or breathy voice</li>
                        <li>• <strong>Aphonia</strong> - Complete inability to produce sound</li>
                        <li>• <strong>Causes</strong> - Growth, allergies, paralysis, infection</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Fluency Disorders</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• <strong>Stuttering</strong> - Repetitions, blocks, dysfluency</li>
                        <li>• <strong>Disruptions</strong> - Involuntary breaks in speech flow</li>
                        <li>• <strong>Secondary behaviors</strong> - Physical and emotional responses</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Speech Sound Disorder Details</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Types and Causes</h4>
                    <ul className="space-y-2 text-gray-800">
                      <li>• <strong>Articulation disorders</strong> - Inadequate planning, control, or coordination</li>
                      <li>• <strong>Dysarthria</strong> - Medical conditions impairing muscles/nerves (stroke, CP, trauma)</li>
                      <li>• <strong>Apraxia</strong> - Difficulty planning and programming speech movements</li>
                      <li>• <strong>Normal variations</strong> - Dialects and non-native speech (not disorders unless impairing)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Language Disorders */}
            <section id="language-disorders" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Language Disorders</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Definition and Types</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      Language disorders interfere with a child's ability to understand the code, to produce the code, or both. 
                      They may affect various modalities including hearing, speaking, reading, writing, and manual communication.
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Expressive disorders</strong> - Difficulty formulating ideas using language</li>
                      <li>• <strong>Receptive disorders</strong> - Difficulty understanding messages in language</li>
                      <li>• <strong>Mixed disorders</strong> - Both understanding and production difficulties</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Language Subsystems</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Pragmatics</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Social reciprocity</li>
                        <li>• Turn-taking</li>
                        <li>• Social appropriateness</li>
                        <li>• Understanding idioms, metaphors</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Semantics</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Vocabulary knowledge</li>
                        <li>• Word finding</li>
                        <li>• Meaning relationships</li>
                        <li>• Concept understanding</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Grammar</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• Sentence structure</li>
                        <li>• Word endings</li>
                        <li>• Complex sentences</li>
                        <li>• Grammatical rules</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Impact on Learning</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <p className="text-red-800">
                      Language disorders first identified in the preschool period have been linked to learning disabilities 
                      when children enter school. Early language disorders increase the risk of poor literacy, mental health, 
                      and employment outcomes well into adulthood.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Diagnosis */}
            <section id="diagnosis" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnosing Speech and Language Disorders</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Complex Assessment Process</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      Diagnosing speech and language disorders requires assessing not only speech and language skills but also 
                      cognitive, perceptual, motor, and socioemotional development; biological, medical, and socioeconomic circumstances; 
                      and cultural and linguistic environments.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Assessment Methods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Norm-Referenced Testing</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Scores compared to age-matched samples</li>
                        <li>• Standardized tests with cutoff values</li>
                        <li>• Severity levels based on standard deviations</li>
                        <li>• <strong>Severe:</strong> 2+ SD below mean (2.14% of children)</li>
                        <li>• <strong>Profound:</strong> 3+ SD below mean (0.13% of children)</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Criterion-Referenced Measures</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Used for children too young for formal testing</li>
                        <li>• Parent checklists and observations</li>
                        <li>• Developmental milestone comparisons</li>
                        <li>• Percentage delay calculations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Best Practice Guidelines</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>Multiple domains</strong> - Assess across all developmental areas</li>
                      <li>• <strong>Multiple sources</strong> - Combine professional and caregiver input</li>
                      <li>• <strong>Cultural considerations</strong> - Account for linguistic and cultural background</li>
                      <li>• <strong>Functional assessment</strong> - Consider real-world communication abilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Causes and Risk Factors */}
            <section id="causes" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Causes and Risk Factors</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Known Causes</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      A variety of congenital and acquired conditions may result in abnormal speech and/or language development:
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Hearing impairment</strong> - Deaf or hard of hearing</li>
                      <li>• <strong>Genetic syndromes</strong> - Down, fragile X, Williams syndrome</li>
                      <li>• <strong>Brain malformations</strong> - Hydrocephalus, cortical dysplasia</li>
                      <li>• <strong>Toxic exposures</strong> - Lead, alcohol, medications</li>
                      <li>• <strong>Nutritional deficiencies</strong> - Hypothyroidism, malnutrition</li>
                      <li>• <strong>Injuries</strong> - Traumatic brain injury, stroke</li>
                      <li>• <strong>Epilepsy</strong> - Especially Landau-Kleffner syndrome</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Risk Factors for Unknown Causes</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Associated Risk Factors</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Male sex</strong> - Higher prevalence in boys</li>
                      <li>• <strong>Family history</strong> - Familial aggregation and heritability</li>
                      <li>• <strong>Low socioeconomic status</strong> - Reduced resources and support</li>
                      <li>• <strong>Parental education</strong> - Lower maternal/paternal education levels</li>
                      <li>• <strong>Cumulative risk</strong> - Multiple factors increase odds significantly</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Environmental Factors</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>Stimulus deprivation</strong> - Limited language exposure</li>
                      <li>• <strong>Excess media exposure</strong> - Television and screen time</li>
                      <li>• <strong>Poor sleep hygiene</strong> - Inadequate sleep patterns</li>
                      <li>• <strong>Poverty-related stress</strong> - Multiple adverse conditions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevalence */}
            <section id="prevalence" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Prevalence</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Overall Prevalence</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      Speech and language disorders affect between 3 and 16 percent of U.S. children. 
                      Approximately 2 percent have severe disorders according to clinical standards.
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Challenges in measurement</strong> - Varying diagnostic criteria and tools</li>
                      <li>• <strong>Age-related differences</strong> - Prevalence varies by developmental stage</li>
                      <li>• <strong>No single reference standard</strong> - Different studies use different criteria</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Speech Disorders Prevalence</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Speech Sound Disorders</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Overall:</strong> 8.2-10% prevalence</li>
                      <li>• <strong>Age 3:</strong> 15-16% prevalence</li>
                      <li>• <strong>Age 6:</strong> 4% prevalence</li>
                      <li>• <strong>Gender ratio:</strong> 2-3:1 (boys:girls) in preschool, 1.2:1 by age 6</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Language Disorders Prevalence</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">Specific Language Impairment</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>1.25 SD below mean:</strong> 7.4% of kindergarten children</li>
                      <li>• <strong>2 SD below mean:</strong> 1.12% of kindergarten children</li>
                      <li>• <strong>Gender difference:</strong> 8% boys vs 6% girls</li>
                      <li>• <strong>Racial/ethnic differences:</strong> Higher rates in some minority groups</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Stuttering Prevalence</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>Lifetime incidence:</strong> 5%</li>
                      <li>• <strong>Population prevalence:</strong> Just under 1%</li>
                      <li>• <strong>Natural recovery:</strong> Up to 85% recover before age 6</li>
                      <li>• <strong>Comorbidity:</strong> 60% co-occur with other speech/language disorders</li>
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
                    className="block w-full text-center px-4 py-2 bg-[#DC2626] text-white rounded-lg hover:bg-[#B91C1C] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#DC2626] text-[#DC2626] rounded-lg hover:bg-[#DC2626] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/autism" className="text-[#DC2626] hover:underline">• Autism Spectrum</Link></li>
                  <li><Link to="/conditions/intellectual-disability" className="text-[#DC2626] hover:underline">• Intellectual Disability</Link></li>
                  <li><Link to="/conditions/learning-disabilities" className="text-[#DC2626] hover:underline">• Learning Disabilities</Link></li>
                  <li><Link to="/conditions/adhd" className="text-[#DC2626] hover:underline">• ADHD</Link></li>
                </ul>
              </div>

              {/* Disorder Types */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Disorder Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Speech Sound Disorders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Voice Disorders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Fluency Disorders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Language Disorders</span>
                  </div>
                </div>
              </div>

              {/* Assessment Tools */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Assessment Tools</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Standardized Speech Tests</li>
                  <li>• Language Evaluation Measures</li>
                  <li>• Parent Report Inventories</li>
                  <li>• Developmental Checklists</li>
                </ul>
              </div>

              {/* Early Signs */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-900">Early Warning Signs</h3>
                <ul className="space-y-1 text-sm text-orange-800">
                  <li>• Limited babbling by 12 months</li>
                  <li>• No words by 18 months</li>
                  <li>• No word combinations by 24 months</li>
                  <li>• Poor speech clarity</li>
                  <li>• Difficulty understanding directions</li>
                </ul>
              </div>

              {/* Treatment Approaches */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-900">Treatment Approaches</h3>
                <ul className="space-y-1 text-sm text-purple-800">
                  <li>• Speech Therapy</li>
                  <li>• Language Intervention</li>
                  <li>• Family Education</li>
                  <li>• School Support Services</li>
                </ul>
              </div>

              {/* Emergency Signs */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">When to Seek Help</h3>
                <p className="text-red-800 text-sm mb-3">
                  Contact healthcare provider for:
                </p>
                <ul className="space-y-1 text-red-800">
                  <li>• No speech by 18 months</li>
                  <li>• Sudden loss of speech</li>
                  <li>• Voice changes</li>
                  <li>• Severe stuttering</li>
                </ul>
                <div className="mt-3 space-y-2 text-sm">
                  <p><strong>Emergency:</strong> 911</p>
                  <p><strong>Helpline:</strong> 1-800-627-8646</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechLanguageDisorders;
