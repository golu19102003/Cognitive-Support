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
  GitBranch,
  Zap,
  Settings,
  Calendar,
  Timer,
  Shield
} from 'lucide-react';

const ExecutiveFunctioningDisorders = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'types', 'symptoms', 'causes', 'diagnosis', 'treatment', 'strategies', 'resources'];
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Target className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Executive Functioning Disorders</h1>
            <p className="text-xl mb-8 text-indigo-100">
              Difficulty with planning, organizing, time management, and decision-making. 
              Integrates with PriHub reminders, notes, and task management tools for improved daily functioning and independence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Professional Help
              </Link>
              <Link 
                to="/resources" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {['overview', 'types', 'symptoms', 'causes', 'diagnosis', 'treatment', 'strategies', 'resources'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeSection === section
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* OVERVIEW */}
            <section id="overview" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Brain className="h-8 w-8 mr-3 text-indigo-600" />
                  What is Executive Function?
                </h2>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg mb-6">
                    Executive function refers to mental processes (executive functioning skills) that help you set and carry out goals. 
                    You use these skills to solve problems, make plans and manage emotions. Research suggests strong executive 
                    functioning skills make a difference in your mental and physical health and quality of life.
                  </p>

                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-indigo-900">Key Insight</h3>
                    <p className="text-indigo-800">
                      Poor executive function skills can affect your ability to do well in school, find and keep a job, 
                      or have strong social connections.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-gray-900">The Three Main Executive Functions</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                      <h4 className="text-lg font-semibold mb-2 text-blue-900 flex items-center">
                        <Brain className="h-5 w-5 mr-2" />
                        Working Memory
                      </h4>
                      <p className="text-blue-800">
                        You rely on working memory to make sense of information that you receive or events that happen over time. 
                        This function develops during childhood and adolescence and reaches its peak in your early 30s.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                      <h4 className="text-lg font-semibold mb-2 text-green-900 flex items-center">
                        <Settings className="h-5 w-5 mr-2" />
                        Cognitive Flexibility
                      </h4>
                      <p className="text-green-800">
                        Cognitive flexibility comes into play when you need to adapt to change. You use this skill when 
                        multitasking, showing empathy, or changing course when solving problems.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900 flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Inhibition Control
                      </h4>
                      <p className="text-purple-800">
                        This skill focuses on how well you control your thoughts, emotions and focus. You use it to 
                        manage reactions to situations and resist impulses.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-yellow-900">Development Timeline</h4>
                    <ul className="text-yellow-800 space-y-1">
                      <li>• Working memory: Peaks in early 30s, declines after age 35</li>
                      <li>• Cognitive flexibility: Develops from age 3, continues improving until age 29</li>
                      <li>• Inhibition control: Begins in infancy, starts declining in your 60s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* TYPES */}
            <section id="types" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <GitBranch className="h-8 w-8 mr-3 text-indigo-600" />
                  Types of Executive Function Disorders
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-red-900">ADHD - Attention-Deficit/Hyperactivity Disorder</h3>
                    <p className="text-red-800 mb-3">
                      ADHD is characterized by persistent patterns of inattention and/or hyperactivity-impulsivity that 
                      interfere with functioning or development.
                    </p>
                    <ul className="text-red-700 space-y-1">
                      <li>• Affects approximately 5% of children and 2.5% of adults</li>
                      <li>• Up to 67% continue to exhibit symptoms in adulthood</li>
                      <li>• Often co-occurs with other mental health conditions</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-orange-900">PTSD - Post-Traumatic Stress Disorder</h3>
                    <p className="text-orange-800 mb-3">
                      PTSD occurs in people who have experienced or witnessed a traumatic event and is characterized 
                      by re-experiencing, avoidance, and hyperarousal symptoms.
                    </p>
                    <ul className="text-orange-700 space-y-1">
                      <li>• Lifetime risk: 8.7% by age 75</li>
                      <li>• Annual prevalence: 3.5% among US adults</li>
                      <li>• 80% more likely to have comorbid mental disorders</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-indigo-900">Other Neurodevelopmental Disorders</h3>
                    <ul className="text-indigo-800 space-y-2">
                      <li>• <strong>Autism Spectrum Disorder:</strong> Affects social communication and behavior</li>
                      <li>• <strong>Specific Learning Disorders:</strong> Impact academic achievement</li>
                      <li>• <strong>Neurocognitive Disorders:</strong> Include dementia and brain injuries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Activity className="h-8 w-8 mr-3 text-indigo-600" />
                  Common Symptoms
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-red-900">Working Memory Issues</h3>
                    <ul className="text-red-800 space-y-2">
                      <li>• Difficulty remembering multi-step instructions</li>
                      <li>• Trouble holding information in mind while working</li>
                      <li>• Forgetfulness in daily activities</li>
                      <li>• Problems following conversations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-orange-900">Cognitive Flexibility Problems</h3>
                    <ul className="text-orange-800 space-y-2">
                      <li>• Difficulty adapting to change</li>
                      <li>• Trouble switching between tasks</li>
                      <li>• Rigid thinking patterns</li>
                      <li>• Problems seeing different perspectives</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-purple-900">Inhibition Control Difficulties</h3>
                    <ul className="text-purple-800 space-y-2">
                      <li>• Impulsive decision-making</li>
                      <li>• Difficulty controlling emotions</li>
                      <li>• Trouble resisting temptations</li>
                      <li>• Inappropriate social responses</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Planning & Organization</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Poor time management</li>
                      <li>• Difficulty organizing tasks</li>
                      <li>• Problems setting priorities</li>
                      <li>• Trouble meeting deadlines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CAUSES */}
            <section id="causes" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Stethoscope className="h-8 w-8 mr-3 text-indigo-600" />
                  Causes and Risk Factors
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Neurobiological Factors</h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Frontal lobe dysfunction</li>
                      <li>• Neurotransmitter imbalances (dopamine, serotonin)</li>
                      <li>• Brain structural differences</li>
                      <li>• Genetic predisposition</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-900">Environmental Factors</h3>
                    <ul className="text-indigo-800 space-y-2">
                      <li>• Traumatic experiences</li>
                      <li>• Chronic stress</li>
                      <li>• Sleep deprivation</li>
                      <li>• Lack of exercise</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-red-900">Developmental Factors</h3>
                    <ul className="text-red-800 space-y-2">
                      <li>• Early childhood adversity</li>
                      <li>• Prenatal complications</li>
                      <li>• Brain injuries</li>
                      <li>• Neurodevelopmental disruptions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Lifestyle Factors</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Poor nutrition</li>
                      <li>• Substance use</li>
                      <li>• Social isolation</li>
                      <li>• Chronic medical conditions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* DIAGNOSIS */}
            <section id="diagnosis" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <FileText className="h-8 w-8 mr-3 text-indigo-600" />
                  Diagnosis and Assessment
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Clinical Evaluation</h3>
                    <p className="text-blue-800 mb-3">
                      Diagnosis must be mainly clinical, as there is no single neurobiological marker. 
                      Healthcare providers use multiple assessment methods.
                    </p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Comprehensive medical history</li>
                      <li>• Standardized questionnaires</li>
                      <li>• Behavioral observations</li>
                      <li>• Functional impairment assessment</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Neuropsychological Testing</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• <strong>Stroop Test:</strong> Evaluates inhibition control</li>
                      <li>• <strong>Working Memory Tasks:</strong> Assess information retention</li>
                      <li>• <strong>Cognitive Flexibility Tests:</strong> Measure adaptability</li>
                      <li>• <strong>Planning Tests:</strong> Evaluate organizational skills</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-purple-900">Neuroimaging</h3>
                    <p className="text-purple-800 mb-3">
                      Advanced imaging techniques help identify structural and functional differences:
                    </p>
                    <ul className="text-purple-700 space-y-1">
                      <li>• MRI for brain structure</li>
                      <li>• fMRI for brain activity patterns</li>
                      <li>• PET for neurotransmitter function</li>
                      <li>• EEG for electrical activity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Pill className="h-8 w-8 mr-3 text-indigo-600" />
                  Treatment Approaches
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-900">Medication</h3>
                    <ul className="text-indigo-800 space-y-2">
                      <li>• Stimulants for ADHD (methylphenidate, amphetamines)</li>
                      <li>• Non-stimulants (atomoxetine, guanfacine)</li>
                      <li>• Antidepressants for comorbid conditions</li>
                      <li>• Anti-anxiety medications for PTSD</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Cognitive Behavioral Therapy</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• CBT for ADHD and PTSD</li>
                      <li>• Executive function coaching</li>
                      <li>• Skills training for organization</li>
                      <li>• Mindfulness-based interventions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Neurofeedback Training</h3>
                    <p className="text-blue-800 mb-2">
                      Early research shows neurofeedback may improve cognitive flexibility and executive control.
                    </p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Real-time brain activity monitoring</li>
                      <li>• Self-regulation training</li>
                      <li>• Personalized protocols</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-purple-900">Computerized Training</h3>
                    <p className="text-purple-800 mb-2">
                      Research shows some children with learning disabilities benefit from cognitive training.
                    </p>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Working memory exercises</li>
                      <li>• Attention training programs</li>
                      <li>• Adaptive difficulty levels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* STRATEGIES */}
            <section id="strategies" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Lightbulb className="h-8 w-8 mr-3 text-indigo-600" />
                  Daily Living Strategies
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-900 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Time Management & Organization
                    </h3>
                    <ul className="text-indigo-800 space-y-2">
                      <li>• Use digital calendars and reminder systems</li>
                      <li>• Break large tasks into smaller steps</li>
                      <li>• Set specific time blocks for activities</li>
                      <li>• Use visual schedules and checklists</li>
                      <li>• Prioritize tasks using the Eisenhower matrix</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-green-900 flex items-center">
                      <Timer className="h-5 w-5 mr-2" />
                      Focus & Attention Strategies
                    </h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Pomodoro Technique (25-minute focus sessions)</li>
                      <li>• Minimize distractions in work environment</li>
                      <li>• Use noise-canceling headphones</li>
                      <li>• Practice mindfulness meditation</li>
                      <li>• Take regular movement breaks</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900 flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      Emotional Regulation
                    </h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Practice deep breathing exercises</li>
                      <li>• Use grounding techniques during stress</li>
                      <li>• Keep an emotion journal</li>
                      <li>• Develop coping statements</li>
                      <li>• Seek regular physical exercise</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-purple-900 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      PriHub Integration
                    </h3>
                    <ul className="text-purple-800 space-y-2">
                      <li>• Use PriHub reminders for medication and appointments</li>
                      <li>• Leverage note-taking features for organization</li>
                      <li>• Utilize task management tools for daily planning</li>
                      <li>• Set up automated progress tracking</li>
                      <li>• Connect with support communities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* RESOURCES */}
            <section id="resources" className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <BookOpen className="h-8 w-8 mr-3 text-indigo-600" />
                  Resources and Support
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-900">Professional Resources</h3>
                    <ul className="text-indigo-800 space-y-2">
                      <li>• <strong>Neurologists:</strong> Medical diagnosis and treatment</li>
                      <li>• <strong>Neuropsychologists:</strong> Comprehensive assessment</li>
                      <li>• <strong>Executive Function Coaches:</strong> Skills development</li>
                      <li>• <strong>Occupational Therapists:</strong> Daily living strategies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Support Organizations</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• CHADD (Children and Adults with ADHD)</li>
                      <li>• National Center for PTSD</li>
                      <li>• Brain Injury Association of America</li>
                      <li>• Learning Disabilities Association of America</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Digital Tools</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• <strong>PriHub:</strong> Integrated support platform</li>
                      <li>• <strong>Focus apps:</strong> Time management and distraction blocking</li>
                      <li>• <strong>Organizational software:</strong> Task and calendar management</li>
                      <li>• <strong>Mindfulness apps:</strong> Emotional regulation support</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-3 text-purple-900">Educational Resources</h3>
                    <ul className="text-purple-800 space-y-2">
                      <li>• Books on executive function strategies</li>
                      <li>• Online courses and webinars</li>
                      <li>• Support groups and forums</li>
                      <li>• Research publications and studies</li>
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
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    to="/contact" 
                    className="block w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center"
                  >
                    Get Professional Help
                  </Link>
                  <Link 
                    to="/resources" 
                    className="block w-full border-2 border-indigo-600 text-indigo-600 px-4 py-3 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors text-center"
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
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Topics</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/conditions/adhd" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                      • ADHD
                    </Link>
                  </li>
                  <li>
                    <Link to="/conditions/autism" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                      • Autism Spectrum Disorder
                    </Link>
                  </li>
                  <li>
                    <Link to="/conditions/dementia" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                      • Dementia
                    </Link>
                  </li>
                  <li>
                    <Link to="/conditions/traumatic-brain-injury" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                      • Traumatic Brain Injury
                    </Link>
                  </li>
                  <li>
                    <Link to="/conditions/specific-learning-disorders" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                      • Learning Disorders
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Assessment Tools */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Assessment Tools</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Stroop Test:</strong> Inhibition control</li>
                  <li>• <strong>Trail Making Test:</strong> Cognitive flexibility</li>
                  <li>• <strong>Digit Span:</strong> Working memory</li>
                  <li>• <strong>Tower of London:</strong> Planning skills</li>
                </ul>
              </div>

              {/* Key Facts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Key Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <BarChart3 className="h-4 w-4 mr-2 text-indigo-600 mt-0.5" />
                    <span className="text-gray-700">5% of children have ADHD</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-4 w-4 mr-2 text-indigo-600 mt-0.5" />
                    <span className="text-gray-700">8.7% lifetime PTSD risk</span>
                  </div>
                  <div className="flex items-start">
                    <Brain className="h-4 w-4 mr-2 text-indigo-600 mt-0.5" />
                    <span className="text-gray-700">Frontal lobe governs EF</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-indigo-600 mt-0.5" />
                    <span className="text-gray-700">Treatable with therapy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveFunctioningDisorders;
