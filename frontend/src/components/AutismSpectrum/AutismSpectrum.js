import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope, Activity, Eye, MessageSquare } from 'lucide-react';

const AutismSpectrum = () => {
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
      <div className="bg-gradient-to-r from-[#1B9AAA] to-[#16808D] text-white py-16">
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
            <h1 className="text-4xl font-bold mb-4">Autism Spectrum Disorder (ASD)</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A neurodevelopmental condition characterized by significant and persistent challenges in social communication, 
              social interaction, and the presence of restricted, repetitive behaviors, interests, or activities.
            </p>
            <p className="text-sm text-white/80 mt-4">
              These symptoms appear in early childhood and vary in severity, creating a heterogeneous presentation across individuals.
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
              { id: 'diagnosis', label: 'Diagnosis', icon: Stethoscope },
              { id: 'etiology', label: 'Etiology', icon: Activity },
              { id: 'epidemiology', label: 'Epidemiology', icon: Users },
              { id: 'treatment', label: 'Treatment', icon: Shield },
              { id: 'prognosis', label: 'Prognosis', icon: Heart }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#1B9AAA] text-white'
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
                  Autism spectrum disorder (ASD) is a multifaceted neurodevelopmental disorder. According to the Diagnostic and Statistical 
                  Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR), ASD affects critical areas of functioning, 
                  including social and occupational domains, and its impact is lifelong.
                </p>
                
                <p>
                  Early recognition and intervention are essential to mitigate challenges, improve outcomes, and enhance 
                  the quality of life for individuals with ASD.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Diagnostic Criteria</h3>
                <p className="text-blue-800">
                  The DSM-5-TR diagnostic criteria for ASD include:
                </p>
                <ul className="mt-2 space-y-2 text-blue-800">
                  <li>• Pervasive difficulties in social communication across multiple contexts</li>
                  <li>• Restricted, repetitive patterns of behavior, interests, or activities</li>
                  <li>• Symptoms present in early developmental period</li>
                  <li>• Clinically significant impairment in social, occupational, or other important areas</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Neurodiversity</h3>
                <p className="text-green-800">
                  According to the Centers for Disease Control and Prevention, 15% to 20% of the world's population exhibits 
                  some form of neurodivergence. Neurodiversity embraces the concept that differences need not be viewed as deficits.
                </p>
              </div>
            </section>

            {/* Diagnosis */}
            <section id="diagnosis" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnosis and Evaluation</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Diagnostic Process</h3>
                  <p className="text-gray-700 mb-4">
                    The American Academy of Pediatrics (AAP) recommends screening all children for ASD, as early intervention 
                    may influence outcomes. Diagnosing ASD involves identifying and reporting behavioral clinical symptoms using 
                    the DSM-5-TR diagnostic criteria.
                  </p>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-900">Evaluation Components</h4>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• Comprehensive past medical, developmental, social, and family history</li>
                      <li>• Complete physical examination including neurological examination</li>
                      <li>• Hearing and vision tests</li>
                      <li>• Structural behavioral observation</li>
                      <li>• Validated questionnaires and observation tools</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Red Flags for Early Detection</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded">
                      <p className="text-red-800 font-medium">By 12 months:</p>
                      <ul className="mt-2 space-y-1 text-sm text-red-800">
                        <li>• Not responding to their name</li>
                        <li>• Not pointing at objects to show interest</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded">
                      <p className="text-orange-800 font-medium">By 14 months:</p>
                      <ul className="mt-2 space-y-1 text-sm text-orange-800">
                        <li>• Not pointing at objects to show interest</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded">
                      <p className="text-purple-800 font-medium">By 18 months:</p>
                      <ul className="mt-2 space-y-1 text-sm text-purple-800">
                        <li>• Not "pretend playing"</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="text-blue-800 font-medium">General red flags:</p>
                      <ul className="mt-2 space-y-1 text-sm text-blue-800">
                        <li>• Avoids eye contact</li>
                        <li>• Delayed speech and language skills</li>
                        <li>• Repetitive movements</li>
                        <li>• Unusual reactions to sensory stimuli</li>
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
                  <h3 className="text-xl font-semibold mb-4">Genetic Factors</h3>
                  <p className="text-gray-700 mb-4">
                    ASD is most likely caused by the interplay between genetic predispositions and environmental factors. 
                    Monozygotic twins, siblings, and families have a high concordance of ASD, suggesting a significant genetic component, 
                    with heritability estimated to be about 50%.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Genetic Mechanisms</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Multigenic and heterogeneous etiology</li>
                      <li>• Hundreds of risk genes identified</li>
                      <li>• Two broad classes of proteins: synapse formation and transcriptional regulation</li>
                      <li>• De novo gene variations and copy number variations</li>
                      <li>• Overlap with other neuropsychiatric disorders</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Environmental Factors</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Associated Risk Factors</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-green-800 font-medium">Prenatal exposures:</p>
                        <ul className="mt-1 space-y-1 text-sm text-green-800">
                          <li>• Rubella, influenza, cytomegalovirus infections</li>
                          <li>• Maternal obesity and gestational diabetes</li>
                          <li>• Certain medications (antidepressants, antiepileptics)</li>
                          <li>• Phthalates, air pollutants, heavy metals</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-green-800 font-medium">Other factors:</p>
                        <ul className="mt-1 space-y-1 text-sm text-green-800">
                          <li>• Advanced maternal or paternal age</li>
                          <li>• Assisted reproductive technologies</li>
                          <li>• Maternal nutritional status</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-6">
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Important Note: No Vaccine Link</h4>
                    <p className="text-red-800">
                      Numerous robust scientific studies have found no links between vaccines and autism. The components of vaccines 
                      (thimerosal or mercury) or multiple vaccines are not associated with the development of autism.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Epidemiology */}
            <section id="epidemiology" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Epidemiology</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Prevalence Rates</h3>
                  <p className="text-gray-700 mb-4">
                    According to the Centers for Disease Control and Prevention, in 2020, approximately 1 in 36 children 
                    aged 8 years in the United States was diagnosed with ASD (approximately 4% of boys and 1% of girls).
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Global Prevalence</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• North America: 1.01%</li>
                      <li>• Europe: 0.73%</li>
                      <li>• Asia: 0.41%</li>
                      <li>• United States: 1.12% (highest)</li>
                      <li>• Taiwan: 0.11% (lowest)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Gender Differences</h3>
                  <p className="text-gray-700">
                    Girls with autism may be underdiagnosed or misdiagnosed and only diagnosed later. The proportion of girls 
                    diagnosed with autism increased steadily from 2000 to 2021, which may reflect recognition that autism may 
                    manifest differently in girls and women.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Historical Context</h3>
                  <p className="text-gray-700">
                    The term "autism" was coined by Eugen Bleuler in 1911. Leo Kanner used the term in 1943 to describe 
                    children with language abnormalities. In 2013, the DSM-V replaced pervasive developmental disorder with 
                    autism spectrum disorder and established today's diagnostic criteria.
                  </p>
                </div>
              </div>
            </section>

            {/* Treatment */}
            <section id="treatment" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Treatment and Management</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Individualized Approach</h3>
                  <p className="text-gray-700">
                    ASD requires an individualized and comprehensive approach tailored to each child and adult's age and 
                    specific strengths and weaknesses. Laws such as the Individuals with Disabilities Education Improvement Act 
                    ensure children with ASD can access free and evidence-based interventions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Evidence-Based Interventions</h3>
                  <p className="text-gray-700 mb-4">
                    There are 28 focused intervention practices that meet the criteria for evidence-based practice, addressing 
                    13 different outcomes across age groups:
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Key Intervention Categories</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-green-800 font-medium">Communication & Social:</p>
                        <ul className="mt-1 space-y-1 text-sm text-green-800">
                          <li>• Augmentative and alternative communication</li>
                          <li>• Social skills training</li>
                          <li>• Social narratives</li>
                          <li>• Peer-based instruction</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-green-800 font-medium">Behavioral & Cognitive:</p>
                        <ul className="mt-1 space-y-1 text-sm text-green-800">
                          <li>• Applied behavior analysis</li>
                          <li>• Cognitive behavioral strategies</li>
                          <li>• Functional communication training</li>
                          <li>• Self-management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Pharmacological Interventions</h3>
                  <p className="text-gray-700 mb-4">
                    No medications rectify the core symptoms of ASD. Medications are used to manage co-occurring conditions 
                    such as ADHD, anxiety, or challenging behaviors when behavioral interventions are insufficient.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Common Target Symptoms</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <strong>Hyperactivity/Inattention:</strong> Psychostimulants, atomoxetine, clonidine</li>
                      <li>• <strong>Irritability/Aggression:</strong> Atypical antipsychotics, SRIs</li>
                      <li>• <strong>Anxiety/Depression:</strong> SRIs, clonidine, atypical antipsychotics</li>
                      <li>• <strong>Repetitive Behaviors:</strong> Atypical antipsychotics, valproic acid</li>
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
                  <h3 className="text-xl font-semibold mb-4">Variable Outcomes</h3>
                  <p className="text-gray-700">
                    The prognosis of ASD varies significantly among individuals, making it challenging to predict outcomes, 
                    especially at the time of diagnosis. While some children may exhibit improvements in core symptoms, 
                    favorable prognostic factors include:
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Favorable Prognostic Factors</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Higher cognitive skills at 2 years of age</li>
                      <li>• Participation in earlier intervention services</li>
                      <li>• Decreased repetitive behaviors</li>
                      <li>• Increased tested verbal intelligence quotient</li>
                      <li>• Presence of family and community supports</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-900">Challenges</h4>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• Executive function difficulties associated with poorer outcomes</li>
                      <li>• Significantly increased risk of all-cause mortality</li>
                      <li>• Higher burden of medical and psychiatric conditions</li>
                      <li>• 74% of individuals have at least one comorbidity</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Co-occurring Conditions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="text-blue-800 font-medium">Common Comorbidities:</p>
                      <ul className="mt-2 space-y-1 text-sm text-blue-800">
                        <li>• Intellectual disability (30%)</li>
                        <li>• Minimally verbal (30%)</li>
                        <li>• Sleep disorders (50-80%)</li>
                        <li>• Epilepsy (up to 30%)</li>
                        <li>• ADHD, anxiety, mood disorders</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded">
                      <p className="text-orange-800 font-medium">Medical Issues:</p>
                      <ul className="mt-2 space-y-1 text-sm text-orange-800">
                        <li>• Motor abnormalities (79%)</li>
                        <li>• Gastrointestinal problems (up to 70%)</li>
                        <li>• Obesity</li>
                        <li>• Behavioral disorders</li>
                      </ul>
                    </div>
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
                    className="block w-full text-center px-4 py-2 bg-[#1B9AAA] text-white rounded-lg hover:bg-[#16808D] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#1B9AAA] text-[#1B9AAA] rounded-lg hover:bg-[#1B9AAA] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* SPACE Model */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">SPACE Model</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Framework for meeting autistic needs in healthcare:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Eye className="h-4 w-4 text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Sensory</p>
                      <p className="text-xs text-gray-600">Sensory sensitivities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-green-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Predictability</p>
                      <p className="text-xs text-gray-600">Routine and structure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-4 w-4 text-purple-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Acceptance</p>
                      <p className="text-xs text-gray-600">Understanding</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="h-4 w-4 text-orange-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Communication</p>
                      <p className="text-xs text-gray-600">Alternative methods</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 text-red-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Empathy</p>
                      <p className="text-xs text-gray-600">Hyper-empathy awareness</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/adhd" className="text-[#1B9AAA] hover:underline">• ADHD</Link></li>
                  <li><Link to="/conditions/learning-disabilities" className="text-[#1B9AAA] hover:underline">• Learning Disabilities</Link></li>
                  <li><Link to="/conditions/executive-function" className="text-[#1B9AAA] hover:underline">• Executive Function</Link></li>
                  <li><Link to="/conditions/anxiety" className="text-[#1B9AAA] hover:underline">• Anxiety Disorders</Link></li>
                </ul>
              </div>

              {/* When to See a Provider */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-900">When to See a Provider</h3>
                <p className="text-orange-800 text-sm mb-3">
                  If you think your child shows signs of ASD, talk to their pediatrician. Early screening 
                  and intervention are crucial for better outcomes.
                </p>
                <p className="text-orange-800 text-sm">
                  For adults with suspected ASD, seek evaluation from healthcare providers 
                  experienced in neurodevelopmental disorders.
                </p>
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">Need Immediate Help?</h3>
                <p className="text-red-800 text-sm mb-3">
                  If your child is in crisis or shows severe behavioral changes, don't hesitate to seek help.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Crisis Hotline:</strong> 988</p>
                  <p><strong>Emergency:</strong> 911</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutismSpectrum;
