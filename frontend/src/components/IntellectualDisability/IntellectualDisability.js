import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Activity, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope, Pill, Eye, MessageSquare, TrendingUp, FileText, Wrench, Car } from 'lucide-react';

const IntellectualDisability = () => {
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
      <div className="bg-gradient-to-r from-[#6B46C1] to-[#553C9A] text-white py-16">
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
            <h1 className="text-4xl font-bold mb-4">Intellectual Disability</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Neurodevelopmental deficits characterized by limitations in intellectual functioning and adaptive behavior. 
              These disabilities originate at birth and manifest before age 22, requiring comprehensive evaluation and management.
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
              { id: 'overview', label: 'Overview', icon: Brain },
              { id: 'intellectual-functioning', label: 'Intellectual Functioning', icon: Activity },
              { id: 'adaptive-behavior', label: 'Adaptive Behavior', icon: Users },
              { id: 'etiology', label: 'Etiology', icon: Stethoscope },
              { id: 'epidemiology', label: 'Epidemiology', icon: TrendingUp },
              { id: 'evaluation', label: 'Evaluation', icon: FileText },
              { id: 'treatment', label: 'Treatment', icon: Pill },
              { id: 'prognosis', label: 'Prognosis', icon: Target }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#6B46C1] text-white'
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
                  Individuals with an intellectual disability have neurodevelopmental deficits characterized by limitations in intellectual functioning and adaptive behavior. 
                  These disabilities originate at birth and manifest before the age of 22 and can be associated with a considerable number of related and co-occurring problems.
                </p>
                
                <p>
                  Associated conditions include mental health disorders (e.g., depression and anxiety), neurodevelopmental disorders (e.g., autism spectrum disorders and ADHD), 
                  as well as neurological conditions (e.g., infantile cerebral palsy) and medical conditions (e.g., meningitis).
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Key Features</h3>
                <ul className="space-y-2 text-purple-800">
                  <li>• <strong>Neurodevelopmental origin</strong> - Present from birth</li>
                  <li>• <strong>Early manifestation</strong> - Before age 22</li>
                  <li>• <strong>Multiple domains affected</strong> - Intellectual and adaptive functioning</li>
                  <li>• <strong>Comorbid conditions common</strong> - Mental health, neurological, medical</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Functioning */}
            <section id="intellectual-functioning" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Intellectual Functioning</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Definition and Components</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      Intellectual functioning is generally called intelligence and includes a wide range of mental activities, such as:
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Logical reasoning</strong> and practical intelligence (problem-solving)</li>
                      <li>• <strong>Learning ability</strong> and information processing</li>
                      <li>• <strong>Verbal skills</strong> and language comprehension</li>
                      <li>• <strong>Global ability</strong> to understand and interact with reality</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">IQ Measurement</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Intelligence Quotient (IQ) Scale</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Median score:</strong> 100</li>
                      <li>• <strong>Standard deviation:</strong> 15</li>
                      <li>• <strong>Intellectual disability threshold:</strong> 70 or below (2 SD below median)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Severity Classification</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">IQ-Based Severity Levels</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>Mild:</strong> IQ 50-70 (85% of cases)</li>
                      <li>• <strong>Moderate:</strong> IQ 35-50 (10% of cases)</li>
                      <li>• <strong>Severe:</strong> IQ 20-35 (4% of cases)</li>
                      <li>• <strong>Profound:</strong> IQ below 20 (1% of cases)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Adaptive Behavior */}
            <section id="adaptive-behavior" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Adaptive Behavior</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Definition</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800">
                      These disabilities are expressed as lacking competence in social, conceptual, and practical skills. 
                      These skills are learned throughout development and performed in response to common problems and tasks.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Skill Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Social Skills</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Interpersonal skills</li>
                        <li>• Social responsibility</li>
                        <li>• Self-esteem</li>
                        <li>• Problem resolution</li>
                        <li>• Following rules</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Conceptual Skills</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Understanding time</li>
                        <li>• Financial concepts</li>
                        <li>• Language skills</li>
                        <li>• Abstract thinking</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Practical Skills</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• Tool usage</li>
                        <li>• Daily living activities</li>
                        <li>• Social interaction</li>
                        <li>• Self-care</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Etiology */}
            <section id="etiology" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Etiology</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Main Categories</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      While many causes are not known, the etiology is mainly divided into:
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Genetic abnormalities</strong> - Single gene mutations, copy number variations, chromosomal abnormalities</li>
                      <li>• <strong>Environmental exposure</strong> - Maternal toxins, infections, medical conditions, delivery complications</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Common Causes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Preventable Environmental</h4>
                      <p className="text-green-800">
                        <strong>Fetal alcohol syndrome</strong> - Most common preventable cause
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Chromosomal</h4>
                      <p className="text-orange-800">
                        <strong>Down syndrome</strong> - Most common chromosomal cause
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Genetic</h4>
                      <p className="text-purple-800">
                        <strong>Fragile X syndrome</strong> - Most common genetic cause
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-red-900">Metabolic</h4>
                      <p className="text-red-800">
                        <strong>Phenylketonuria (PKU)</strong> - Inborn error of metabolism
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Genetic Causes</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Types of Genetic Abnormalities</h4>
                    <ul className="space-y-2 text-gray-800">
                      <li>• <strong>Inborn errors of metabolism</strong> - PKU, Lesch-Nyhan syndrome, galactosemia</li>
                      <li>• <strong>Neurodevelopmental defects</strong> - Fragile X syndrome, neurofibromatosis type 1</li>
                      <li>• <strong>Neurodegeneration</strong> - Rett syndrome</li>
                      <li>• <strong>Chromosomal abnormalities</strong> - Down syndrome, 22q11.2 deletion syndrome</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Environmental Causes</h3>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-900">Environmental Exposures</h4>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• <strong>Toxic substances</strong> - Alcohol, opioids, cocaine, teratogenic medications</li>
                      <li>• <strong>Infectious agents</strong> - Rubella, HIV, cytomegalic inclusion disease, syphilis, toxoplasmosis</li>
                      <li>• <strong>Maternal conditions</strong> - Hypertension, diabetes, obesity, urinary tract infections</li>
                      <li>• <strong>Birth complications</strong> - Pre-term delivery, anoxia, placental issues</li>
                      <li>• <strong>Early childhood</strong> - Infections, head trauma, asphyxia, malnutrition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Epidemiology */}
            <section id="epidemiology" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Epidemiology</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Prevalence</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Global Statistics</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Developing countries:</strong> 10-15 per 1000 children</li>
                      <li>• <strong>Western populations:</strong> 1-3% prevalence</li>
                      <li>• <strong>Mild cases:</strong> 85% of identified cases</li>
                      <li>• <strong>Peak age:</strong> 10-14 years</li>
                      <li>• <strong>Gender ratio:</strong> 1.5 times more prevalent in males</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Challenges in Measurement</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <p className="text-orange-800">
                      Incidence is challenging to calculate accurately as mild disabilities may be under-recognized until later in childhood. 
                      Many children with mild levels may not get identified until school age.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Evaluation */}
            <section id="evaluation" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Evaluation</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">DSM-5 Diagnostic Criteria</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Required Components</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Deficits in intellectual function</strong> - IQ ≤ 70</li>
                      <li>• <strong>Deficits in adaptive function</strong> - Social, conceptual, practical skills</li>
                      <li>• <strong>Onset before age 22</strong> - Developmental period</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Assessment Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Intellectual Function</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Stanford-Binet Intelligence Scales</li>
                        <li>• Wechsler Intelligence Scales</li>
                        <li>• Standardized IQ tests</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-orange-900">Adaptive Function</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Adaptive Behaviour Assessment System</li>
                        <li>• Vineland Adaptive Behavior Scales</li>
                        <li>• Communication and social participation measures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Diagnostic Testing</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Medical Evaluation</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>Chromosomal analysis</strong> - Amniocentesis, chorionic villi sampling, cell-free fetal DNA</li>
                      <li>• <strong>Metabolic screening</strong> - Urine and blood tests for inborn errors</li>
                      <li>• <strong>Neuroimaging</strong> - CT, MRI for structural abnormalities</li>
                      <li>• <strong>EEG</strong> - For seizure detection</li>
                      <li>• <strong>Sensory testing</strong> - Vision and hearing assessments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment */}
            <section id="treatment" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Treatment / Management</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Management Goals</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-blue-800">
                      <li>• Prevent further worsening</li>
                      <li>• Minimize symptoms of disability</li>
                      <li>• Improve quality of everyday life</li>
                      <li>• Promote independence and self-sufficiency</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Educational Support</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Special Education Components</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Academic modifications</strong> - Individualized education plans</li>
                      <li>• <strong>Transition planning</strong> - Childhood to adulthood</li>
                      <li>• <strong>Skills training</strong> - Behavioral, vocational, communication, functional living</li>
                      <li>• <strong>Least restrictive environment</strong> - General classroom integration when possible</li>
                      <li>• <strong>Monitoring progress</strong> - Regular assessment and adjustment</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Behavioral Intervention</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">Therapeutic Approaches</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>Behavioral therapy</strong> - Positive reinforcement, benign punishments</li>
                      <li>• <strong>Cognitive therapy</strong> - Adjust negative thoughts and emotional stress</li>
                      <li>• <strong>Trigger avoidance</strong> - Identify and manage negative demeanor triggers</li>
                      <li>• <strong>Redirection techniques</strong> - Prevent or curtail troublesome behavior</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Vocational Training</h3>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Skills Development</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>Interprofessional team</strong> - Social worker, occupational therapist, teacher, counselor, psychologist</li>
                      <li>• <strong>Self-care skills</strong> - Personal hygiene, appropriate clothing</li>
                      <li>• <strong>Responsibility training</strong> - Task completion and accountability</li>
                      <li>• <strong>Work preparation</strong> - Labor market entry skills</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Family Education</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Support Services</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• <strong>Understanding the condition</strong> - Definition, management, prognosis</li>
                      <li>• <strong>Placement decisions</strong> - Appropriate services and equipment</li>
                      <li>• <strong>Caregiver training</strong> - Skills for home support</li>
                      <li>• <strong>Psychosocial support</strong> - Address family stress and emotions</li>
                      <li>• <strong>Resource connection</strong> - Local and national support organizations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Pharmacological Interventions</h3>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-900">Medication Management</h4>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• <strong>Behavioral abnormalities</strong> - Risperidone, aripiprazole for aggression</li>
                      <li>• <strong>Comorbid ADHD</strong> - Methylphenidate, clonidine, atomoxetine</li>
                      <li>• <strong>Depressive symptoms</strong> - SSRIs (fluoxetine, paroxetine, sertraline)</li>
                      <li>• <strong>Obsessive-compulsive symptoms</strong> - SSRIs for stereotyped movements</li>
                      <li>• <strong>Caution with polypharmacy</strong> - Lower dosages often needed</li>
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
                  <h3 className="text-xl font-semibold mb-4">Severity-Based Outcomes</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Expected Functioning by Severity</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Mild:</strong> May achieve adequate language and social competency, live independently, raise families</li>
                      <li>• <strong>Moderate:</strong> Academic level ≤ 2nd grade, can communicate needs, work under supervision</li>
                      <li>• <strong>Severe:</strong> Difficulty acquiring language, alternative communication skills, supervised living</li>
                      <li>• <strong>Profound:</strong> Significant communication and social functioning difficulties</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Prognostic Factors</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Key Determinants</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Severity of cognitive impairment</strong> - Primary factor</li>
                      <li>• <strong>Supportive environment</strong> - Family and community resources</li>
                      <li>• <strong>Early intervention</strong> - Prompt diagnosis and treatment</li>
                      <li>• <strong>Comorbid conditions</strong> - Additional medical or psychiatric issues</li>
                      <li>• <strong>Access to services</strong> - Educational, vocational, medical support</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Permanent Nature</h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <p className="text-orange-800">
                      The cognitive deficit of intellectual disability is permanent damage. However, with adequate support, 
                      individuals can achieve significant improvements in functioning and quality of life.
                    </p>
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
                    className="block w-full text-center px-4 py-2 bg-[#6B46C1] text-white rounded-lg hover:bg-[#553C9A] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#6B46C1] text-[#6B46C1] rounded-lg hover:bg-[#6B46C1] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/developmental-disorders" className="text-[#6B46C1] hover:underline">• Developmental Disorders</Link></li>
                  <li><Link to="/conditions/learning-disabilities" className="text-[#6B46C1] hover:underline">• Learning Disabilities</Link></li>
                  <li><Link to="/conditions/autism" className="text-[#6B46C1] hover:underline">• Autism Spectrum</Link></li>
                  <li><Link to="/conditions/adhd" className="text-[#6B46C1] hover:underline">• ADHD</Link></li>
                </ul>
              </div>

              {/* IQ Scale Reference */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">IQ Severity Scale</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Mild (50-70)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Moderate (35-50)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Severe (20-35)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Profound (&lt;20)</span>
                  </div>
                </div>
              </div>

              {/* Common Genetic Causes */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-900">Common Causes</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• <strong>Fetal Alcohol Syndrome</strong> (Preventable)</li>
                  <li>• <strong>Down Syndrome</strong> (Chromosomal)</li>
                  <li>• <strong>Fragile X</strong> (Genetic)</li>
                  <li>• <strong>PKU</strong> (Metabolic)</li>
                </ul>
              </div>

              {/* Assessment Tools */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-900">Assessment Tools</h3>
                <ul className="space-y-1 text-sm text-purple-800">
                  <li>• Stanford-Binet IQ Test</li>
                  <li>• Adaptive Behavior Assessment</li>
                  <li>• Chromosomal Analysis</li>
                  <li>• Metabolic Screening</li>
                </ul>
              </div>

              {/* Support Resources */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-900">Support Resources</h3>
                <ul className="space-y-1 text-sm text-orange-800">
                  <li>• Special Education Programs</li>
                  <li>• Vocational Training</li>
                  <li>• Family Support Services</li>
                  <li>• Government Benefits</li>
                </ul>
              </div>

              {/* Emergency Signs */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">When to Seek Help</h3>
                <p className="text-red-800 text-sm mb-3">
                  Contact healthcare provider for:
                </p>
                <ul className="space-y-1 text-red-800">
                  <li>• Developmental delays</li>
                  <li>• Learning difficulties</li>
                  <li>• Behavioral concerns</li>
                  <li>• Social skill problems</li>
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

export default IntellectualDisability;
