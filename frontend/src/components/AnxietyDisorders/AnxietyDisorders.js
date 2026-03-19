import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Heart, 
  AlertTriangle, 
  Activity, 
  Users, 
  Shield, 
  Target, 
  BookOpen, 
  MessageCircle,
  Phone,
  Clock,
  TrendingUp,
  ChevronRight,
  ArrowLeft,
  Zap
} from 'lucide-react';

const AnxietyDisorders = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'types', 'symptoms', 'causes', 'diagnosis', 'treatment', 'prevention', 'living-with'];
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#BE123C] to-[#9F1239] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Heart className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Anxiety & Emotional Disorders</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive support for anxiety disorders, stress management, and emotional wellness. 
              Evidence-based approaches combining cognitive behavioral therapy, mindfulness techniques, and professional care for enhanced quality of life.
            </p>
            <p className="text-sm text-white/80 mt-4">
              Learn about symptoms, causes, treatment options, and living with anxiety disorders through PriHub's comprehensive mental health support system.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                to="/contact" 
                className="bg-white text-[#BE123C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Professional Help
              </Link>
              <Link 
                to="/resources" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#BE123C] transition-colors"
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

      {/* Navigation Sidebar */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Overview', icon: Brain },
              { id: 'types', label: 'Types of Anxiety', icon: AlertTriangle },
              { id: 'symptoms', label: 'Symptoms & Causes', icon: Activity },
              { id: 'diagnosis', label: 'Diagnosis & Tests', icon: Shield },
              { id: 'treatment', label: 'Management & Treatment', icon: Heart },
              { id: 'prevention', label: 'Prevention', icon: Target },
              { id: 'living-with', label: 'Living With', icon: BookOpen }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#BE123C] text-white'
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
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Experiencing occasional anxiety is a normal part of life. However, people with anxiety disorders frequently have intense, 
                    excessive and persistent worry and fear about everyday situations. Often, anxiety disorders involve repeated episodes 
                    of sudden feelings of intense anxiety and fear or terror that reach a peak within minutes (panic attacks).
                  </p>
                  <p className="text-lg leading-relaxed">
                    These feelings of anxiety and panic interfere with daily activities, are difficult to control, are out of proportion to 
                    situations, and can last a long time if untreated. An estimated 4.4% of the global population currently 
                    experience an anxiety disorder, making it the most common of all mental disorders.
                  </p>
                  <div className="bg-[#BE123C]/10 border-l-4 border-[#BE123C] p-6 rounded-lg mt-6">
                    <h3 className="font-bold text-[#BE123C] mb-3">Key Facts:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">•</span>
                        <span>Affects 359 million people globally (2021)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">•</span>
                        <span>Women are twice as likely as men to have anxiety disorders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">•</span>
                        <span>Highly effective treatments available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Types Section */}
            <section id="types" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of Anxiety Disorders</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Generalized Anxiety Disorder (GAD)",
                      description: "Excessive, frequent and unrealistic worry about everyday things like job responsibilities, health, or chores."
                    },
                    {
                      name: "Panic Disorder",
                      description: "Multiple unexpected panic attacks that happen without warning and aren't due to another condition."
                    },
                    {
                      name: "Social Anxiety Disorder",
                      description: "Intense fear of being judged negatively and/or watched by others in social situations."
                    },
                    {
                      name: "Specific Phobias",
                      description: "Intense fear of specific objects or situations that consistently disrupts life."
                    },
                    {
                      name: "Agoraphobia",
                      description: "Fear of becoming overwhelmed or unable to escape or get help in certain places."
                    },
                    {
                      name: "Separation Anxiety Disorder",
                      description: "Excessive anxiety when separated from loved ones like primary caregivers."
                    }
                  ].map((type, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-lg text-teal-700 mb-3">{type.name}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Symptoms Section */}
            <section id="symptoms" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Symptoms & Causes</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-lg text-[#BE123C] mb-4">Psychological Symptoms</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-[#BE123C] mr-2">•</span>
                          <span>Feeling panic, fear, dread and uneasiness</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#BE123C] mr-2">•</span>
                          <span>Feeling on edge or irritable</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#BE123C] mr-2">•</span>
                          <span>Uncontrollable, obsessive thoughts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#BE123C] mr-2">•</span>
                          <span>Difficulty concentrating</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#BE123C] mb-4">Physical Symptoms</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-[#BE123C] mr-2">•</span>
                          <span>Restlessness and heart palpitations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#BE123C] mr-2">•</span>
                          <span>Shortness of breath and muscle tension</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#BE123C] mr-2">•</span>
                          <span>Cold or sweaty hands, dry mouth</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#BE123C] mr-2">•</span>
                          <span>Difficulty falling asleep or staying asleep</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-[#BE123C]/10 border-l-4 border-[#BE123C] p-6 rounded-lg mt-6">
                    <h3 className="font-bold text-[#BE123C] mb-3">Common Causes:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">•</span>
                        <span><strong>Chemical imbalances:</strong> Neurotransmitters like serotonin, dopamine, and GABA</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">•</span>
                        <span><strong>Brain changes:</strong> Increased amygdala activity in response to anxiety cues</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">•</span>
                        <span><strong>Genetics:</strong> Family history increases risk factors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">•</span>
                        <span><strong>Environmental factors:</strong> Severe stress and traumatic events</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Diagnosis Section */}
            <section id="diagnosis" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnosis & Tests</h2>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    If you or your child are experiencing symptoms of an anxiety disorder, see a healthcare provider. 
                    They'll start with a medical evaluation, physical exam, and use DSM-5 criteria for diagnosis.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-6">
                    <h3 className="font-bold text-blue-800 mb-3">Diagnostic Process:</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2">1.</span>
                        <span>Medical evaluation and physical exam</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2">2.</span>
                        <span>Discussion of symptoms and daily impact</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2">3.</span>
                        <span>DSM-5 criteria assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2">4.</span>
                        <span>Ruling out physical conditions</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Section */}
            <section id="treatment" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Management & Treatment</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-lg text-[#BE123C] mb-4">Medication</h3>
                      <div className="space-y-3 text-gray-600">
                        <p><strong>Antidepressants:</strong> SSRIs and SNRIs adjust brain chemicals</p>
                        <p><strong>Benzodiazepines:</strong> Quick relief but short-term use only</p>
                        <p><strong>Beta-blockers:</strong> Reduce physical symptoms like rapid heartbeat</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#BE123C] mb-4">Psychotherapy</h3>
                      <div className="space-y-3 text-gray-600">
                        <p><strong>Cognitive Behavioral Therapy (CBT):</strong> Most common approach</p>
                        <p><strong>Exposure Therapy:</strong> Safe confrontation of fears</p>
                        <p><strong>Stress Management:</strong> Relaxation and mindfulness techniques</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#BE123C]/10 border-l-4 border-[#BE123C] p-6 rounded-lg mt-6">
                    <h3 className="font-bold text-[#BE123C] mb-3">Treatment Goals:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">✓</span>
                        <span>Reduce frequency and intensity of anxiety symptoms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">✓</span>
                        <span>Improve daily functioning and quality of life</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#BE123C] mr-2">✓</span>
                        <span>Develop effective coping strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention Section */}
            <section id="prevention" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Prevention</h2>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    While there's no known way to prevent anxiety disorders, you can take steps to reduce risk and manage symptoms:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-bold text-purple-700 mb-4">Lifestyle Strategies</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Regular exercise and stress management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Avoid or limit caffeine and alcohol</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Healthy sleep and eating habits</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="font-bold text-orange-700 mb-4">Early Intervention</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>Seek help at first signs of symptoms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>Join support groups for shared experiences</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>Educate family and friends about condition</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Living With Section */}
            <section id="living-with" className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Living With Anxiety Disorders</h2>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Managing anxiety disorders is possible with the right strategies and support system:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-teal-50 p-6 rounded-lg text-center">
                      <MessageCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-bold text-teal-700 mb-3">Daily Management</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Stress management techniques</li>
                        <li>• Mindfulness and meditation</li>
                        <li>• Regular exercise routine</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-blue-700 mb-3">Support Systems</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Professional healthcare team</li>
                        <li>• Support groups and communities</li>
                        <li>• Family and friend networks</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-green-700 mb-3">Emergency Support</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Crisis hotline: 988</li>
                        <li>• Emergency contacts</li>
                        <li>• Professional intervention plans</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mt-6">
                    <h3 className="font-bold text-yellow-800 mb-3">PriHub Integration:</h3>
                    <p className="text-gray-700">
                      Our platform provides comprehensive support for anxiety management through:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">🤖</span>
                        <span><strong>AI Chatbot Support:</strong> 24/7 emotional assistance and guidance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">📱</span>
                        <span><strong>Mobile Apps:</strong> On-the-go anxiety tracking and management tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">👥</span>
                        <span><strong>Professional Network:</strong> Connect with qualified mental health providers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">📊</span>
                        <span><strong>Progress Tracking:</strong> Monitor symptoms and treatment effectiveness</span>
                      </li>
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
                    className="block w-full text-center px-4 py-2 bg-[#BE123C] text-white rounded-lg hover:bg-[#991B1B] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#BE123C] text-[#BE123C] rounded-lg hover:bg-[#BE123C] hover:text-white transition-colors"
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
                  <li><Link to="/conditions/depression" className="text-[#BE123C] hover:underline">• Depression</Link></li>
                  <li><Link to="/conditions/stress-management" className="text-[#BE123C] hover:underline">• Stress Management</Link></li>
                  <li><Link to="/conditions/panic-disorders" className="text-[#BE123C] hover:underline">• Panic Disorders</Link></li>
                  <li><Link to="/conditions/social-anxiety" className="text-[#BE123C] hover:underline">• Social Anxiety</Link></li>
                  <li><Link to="/conditions/ptsd" className="text-[#BE123C] hover:underline">• PTSD</Link></li>
                  <li><Link to="/conditions/ocd" className="text-[#BE123C] hover:underline">• OCD</Link></li>
                </ul>
              </div>

              {/* Assessment Tools */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-[#BE123C]">Assessment Tools</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-700 mb-2">GAD-7 Scale</h4>
                    <p className="text-sm text-gray-600">Generalized Anxiety Disorder assessment</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-700 mb-2">PHQ-9</h4>
                    <p className="text-sm text-gray-600">Depression screening tool</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-700 mb-2">GAD-2</h4>
                    <p className="text-sm text-gray-600">Anxiety severity screening</p>
                  </div>
                </div>
              </div>

              {/* Key Facts */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-teal-700">Key Facts</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">359 million people affected globally</p>
                      <p className="text-sm text-gray-600">4.4% of world population (2021)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Women 2x more likely than men</p>
                      <p className="text-sm text-gray-600">Hormonal and social factors</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Highly treatable condition</p>
                      <p className="text-sm text-gray-600">Effective therapies available</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Early intervention crucial</p>
                      <p className="text-sm text-gray-600">Better outcomes with timely care</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-red-700">Emergency Support</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-100 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600 mr-3" />
                    <div>
                      <p className="font-bold text-red-700">Crisis Hotline</p>
                      <p className="text-sm font-medium">988 - Suicide & Crisis Lifeline</p>
                      <p className="text-xs text-gray-600">24/7 available, free & confidential</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-orange-100 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-orange-600 mr-3" />
                    <div>
                      <p className="font-bold text-orange-700">Text Support</p>
                      <p className="text-sm font-medium">Text HOME to 988</p>
                      <p className="text-xs text-gray-600">Crisis text support available</p>
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
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-red-600 pl-6 py-4">
            "Anxiety is not a sign of weakness, but a sign that you have been strong for too long. Your mind is trying to protect you, and with the right tools, you can learn to calm the storm within."
          </blockquote>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Recovery is possible, and every step toward managing anxiety is a step toward reclaiming your peace. You are stronger than your anxiety, and you deserve to live a life filled with calm and confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnxietyDisorders;
