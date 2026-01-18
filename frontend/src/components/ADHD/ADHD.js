import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Activity, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb, BookOpen, Stethoscope } from 'lucide-react';

const ADHD = () => {
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
      <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white py-16">
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
                <Activity className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">ADHD - Attention-Deficit/Hyperactivity Disorder</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              ADHD stands for attention-deficit/hyperactivity disorder. It's a neurodevelopmental disorder that affects how your brain develops. 
              Symptoms begin before age 12 and include fidgeting, difficulty paying attention and losing things.
            </p>
            <p className="text-sm text-white/80 mt-4">
              ADHD is treatable with medications and therapies that manage symptoms and make daily life easier.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Sidebar */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'What is ADHD?', icon: Brain },
              { id: 'types', label: 'ADHD Types', icon: Users },
              { id: 'symptoms', label: 'Symptoms & Causes', icon: AlertTriangle },
              { id: 'diagnosis', label: 'Diagnosis & Tests', icon: Stethoscope },
              { id: 'treatment', label: 'Management & Treatment', icon: Shield },
              { id: 'outlook', label: 'Outlook / Prognosis', icon: Heart }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#22C55E] text-white'
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
            {/* What is ADHD */}
            <section id="overview" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What Is ADHD?</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  ADHD (attention-deficit/hyperactivity disorder) is a condition that affects how your brain works. Despite its name, 
                  ADHD doesn't mean that you lack attention. It means that it's harder for you to control your attention or direct 
                  it to certain tasks. ADHD causes symptoms like difficulty focusing, trouble sitting still and impulsive behaviors. 
                  But it also allows you to "get in the zone" and hyperfocus on things you really enjoy.
                </p>
                
                <p>
                  ADHD symptoms begin in childhood (commonly between ages 3 and 6) and may continue into adulthood. But some people 
                  don't get a diagnosis until they're adults. There's no cure for ADHD, but treatments like medications and behavioral 
                  therapies can help manage symptoms.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Millions of children in the U.S. have an ADHD diagnosis</h3>
                <p className="text-green-800">
                  Around 1 in 10 kids age 3 to 17 have ADHD. If your child has ADHD, take some time to learn the facts — and the myths. 
                  Connecting with other parents whose kids have ADHD can help you find ways to support your child.
                </p>
              </div>
            </section>

            {/* ADHD Types */}
            <section id="types" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">ADHD Types</h2>
              
              <p className="text-gray-700 mb-6">
                There are four types of ADHD that healthcare providers diagnose in children and adults:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-400 pl-6 bg-blue-50 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">Inattentive ADHD</h3>
                  <p className="text-blue-800">
                    This involves difficulty focusing, finishing tasks and staying organized. With this type, you have few or no 
                    hyperactivity symptoms.
                  </p>
                </div>

                <div className="border-l-4 border-orange-400 pl-6 bg-orange-50 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-orange-900">Hyperactive-impulsive ADHD</h3>
                  <p className="text-orange-800">
                    This involves difficulty sitting still or having "quiet time." You have excess energy and are extremely talkative. 
                    You may also interrupt others and act without thinking it through first.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6 bg-purple-50 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-purple-900">Combined presentation</h3>
                  <p className="text-purple-800">
                    This is the most common type of ADHD, and it's what most people associate with the condition. You have many 
                    inattentive symptoms and hyperactive-impulsive symptoms.
                  </p>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 bg-gray-50 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Unspecified presentation</h3>
                  <p className="text-gray-800">
                    This is when you have severe symptoms that interfere with daily life, but your symptoms don't meet the official 
                    criteria for the types listed above.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded">
                <p className="text-gray-700">
                  <strong>Note:</strong> Providers also use the terms mild, moderate and severe to describe how much symptoms 
                  affect your daily life.
                </p>
              </div>
            </section>

            {/* Symptoms and Causes */}
            <section id="symptoms" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Symptoms and Causes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">ADHD Symptoms</h3>
                  <p className="text-gray-700 mb-4">
                    ADHD symptoms fall into two big groups:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3 text-blue-900">Inattention symptoms</h4>
                      <p className="text-blue-800 mb-3">
                        These symptoms affect your ability to focus on a task and complete it from start to finish.
                      </p>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Avoids tasks that require focusing for a long time</li>
                        <li>• Doesn't pay attention to details or makes careless mistakes</li>
                        <li>• Forgets to do things they're supposed to</li>
                        <li>• Gets easily distracted by things going on around them</li>
                        <li>• Has difficulty with organizing things</li>
                        <li>• Has trouble staying focused on tasks</li>
                        <li>• Loses things they need (papers, eyeglasses)</li>
                        <li>• Seems distracted when someone is directly talking to them</li>
                        <li>• Starts tasks easily but gets sidetracked and doesn't finish</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3 text-orange-900">Hyperactivity/impulsivity symptoms</h4>
                      <p className="text-orange-800 mb-3">
                        These symptoms affect your ability to sit still or feel comfortable staying in one place.
                      </p>
                      <ul className="space-y-2 text-sm text-orange-800">
                        <li>• Fidgets or makes small movements with hands or feet</li>
                        <li>• Gets up when they're supposed to stay seated</li>
                        <li>• Has a hard time playing or doing tasks quietly</li>
                        <li>• Has difficulty waiting for their turn</li>
                        <li>• Interrupts what others are doing</li>
                        <li>• Jumps, climbs, runs or feels restless</li>
                        <li>• Seems like they're always "on the go"</li>
                        <li>• Speaks out of turn or finishes others' sentences</li>
                        <li>• Talks more than you'd expect</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">ADHD Causes</h3>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p>
                      <strong>ADHD is genetic.</strong> This means your child is born with certain gene changes that cause differences 
                      in their brain development (neurodivergence). Often, the gene changes that cause ADHD are passed down within 
                      biological families.
                    </p>
                    
                    <p>
                      With ADHD, the frontal lobe of your child's brain is wired in a way that makes it harder for them to use 
                      directed attention. Directed attention is the ability to focus on something you don't find very interesting.
                    </p>
                    
                    <p>
                      On the other hand, your child is better than most neurotypical kids at using automatic attention. This is 
                      the type of attention we use to focus on something we're interested in. It allows for something called 
                      hyperfocus, or the ability to "get in the zone" and do something for hours on end.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-900">Environmental Risk Factors</h4>
                    <p className="text-yellow-800">
                      Experts believe that some people have genes that predispose them to ADHD. Environmental factors include:
                    </p>
                    <ul className="mt-2 space-y-1 text-yellow-800">
                      <li>• Exposure to certain toxins during fetal development (tobacco, alcohol, lead)</li>
                      <li>• Low birth weight (the lower the weight, the higher the risk)</li>
                      <li>• Preterm birth</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Complications of ADHD</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <p className="text-red-800">
                      Without proper treatment, your child may have:
                    </p>
                    <ul className="mt-2 space-y-1 text-red-800">
                      <li>• Low self-esteem</li>
                      <li>• Poor grades and inability to reach their full potential</li>
                      <li>• Difficulty in social situations</li>
                      <li>• Increased risk of developing substance use disorders when older</li>
                      <li>• Frequent driving accidents and injuries</li>
                      <li>• Trouble getting and keeping a job when older</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Diagnosis and Tests */}
            <section id="diagnosis" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnosis and Tests</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">How doctors diagnose ADHD</h3>
                  <p className="text-gray-700 mb-4">
                    Healthcare providers diagnose ADHD based on the presence and absence of certain symptoms. They use the 
                    criteria listed in the DSM-5-TR.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Your child will receive an ADHD diagnosis if all of the following are true:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Has at least six symptoms from one group (inattention or hyperactivity/impulsivity)</li>
                      <li>• Symptoms began before age 12</li>
                      <li>• Symptoms occur in at least two settings (home and school)</li>
                      <li>• Symptoms disrupt daily activities and friendships</li>
                      <li>• Another medical condition isn't responsible for these symptoms</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Diagnosis Process</h3>
                  <p className="text-gray-700 mb-4">
                    There's no lab test that can diagnose ADHD. Instead, healthcare providers do an ADHD assessment. This involves 
                    talking to you, your child and others — like friends, family members and teachers.
                  </p>

                  <p className="text-gray-700">
                    Diagnosis occurs in three steps: Providers identify clusters of behaviors, rule out alternative causes, 
                    and confirm the presence of any co-occurring conditions.
                  </p>

                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Co-occurring Conditions</h4>
                    <p className="text-gray-700 mb-2">
                      Children with ADHD often have other mental health conditions, like:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Anxiety', 'Depression', 'Oppositional defiant disorder', 'Autism', 'Learning disabilities'].map((condition) => (
                        <div key={condition} className="bg-gray-50 p-3 rounded text-center">
                          <span className="text-sm text-gray-700">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Management and Treatment */}
            <section id="treatment" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Management and Treatment</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What should I know about ADHD treatment?</h3>
                  <p className="text-gray-700 mb-4">
                    ADHD treatments fall into two main groups: behavioral interventions (which teach practical skills) and medications. 
                    The exact treatment plan varies according to a person's age and individual needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-green-900">Parent Training</h4>
                      <p className="text-green-800">
                        Therapists teach you how to help your child build on their strengths and improve behaviors that cause 
                        them difficulty. You learn how to establish routines and encourage positive behaviors.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-blue-900">Social Skills Groups</h4>
                      <p className="text-blue-800">
                        Your child may benefit from social skills training groups. These groups meet for one or two hours a week, 
                        typically over a 6-to-12-week period, teaching new skills for interacting with peers.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-purple-900">Medications</h4>
                      <p className="text-purple-800">
                        ADHD medications improve your child's ability to use directed attention, improving symptoms and their 
                        quality of life and relationships. Providers monitor how medicines are working and adjust as needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">How can I help my child at home?</h3>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="text-yellow-800 mb-4">
                      Here are some strategies you can use to help your child (these aren't a substitute for professional treatment):
                    </p>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• <strong>Organize items</strong> - Have a place for everything and keep everything in its place</li>
                      <li>• <strong>Stick to a schedule</strong> - Follow the same routine every day</li>
                      <li>• <strong>Use a calendar or planner</strong> - Create a place to write down important reminders</li>
                      <li>• <strong>"Catch" your child being good</strong> - Point out positive behaviors</li>
                      <li>• <strong>Discipline effectively</strong> - Create a consistent system to reward appropriate behavior</li>
                      <li>• <strong>Pick out a homework area</strong> - Set up a workstation in a quiet area without distractions</li>
                      <li>• <strong>Set a timer</strong> - Have a timeframe for working on homework</li>
                      <li>• <strong>Praise effort and completion</strong> - Reward completed work</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Is ADHD a disability?</h3>
                  <div className="bg-green-50 border-l-4 border-green-400 p-6">
                    <p className="text-green-800">
                      <strong>Yes</strong>, the Americans with Disabilities Act (ADA) considers ADHD a developmental disability. 
                      The condition can affect your child's ability to do their daily activities, including learning at school. 
                      Your child may qualify for special education and/or modified instruction in school.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Outlook */}
            <section id="outlook" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Outlook / Prognosis</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">How long does ADHD last?</h3>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p>
                      ADHD doesn't go away but doesn't have to be an impairing condition. You can't outgrow it, but treatment can 
                      help manage your symptoms. Thanks to effective treatments, some people don't show impairment from ADHD 
                      symptoms once they've reached adulthood. But for others, symptoms still affect their daily life.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">A note from PriHub</h3>
                  <p className="text-gray-800">
                    ADHD is a brain difference, not a deficit. It affects each person a little differently. So, even if you have 
                    the condition yourself, your child might have a different experience. Their symptoms may be milder or more 
                    severe than yours. And their symptoms may change over time.
                  </p>
                  <p className="text-gray-800 mt-2">
                    If you think your child has ADHD or they received a diagnosis, you probably have lots of questions. Keep in mind 
                    that this condition is very common, and healthcare providers are constantly learning more about it. Your child's 
                    providers will answer your questions and help you understand how best to support your child.
                  </p>
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
                    className="block w-full text-center px-4 py-2 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#22C55E] text-[#22C55E] rounded-lg hover:bg-[#22C55E] hover:text-white transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
                <ul className="space-y-2">
                  <li><Link to="/conditions/learning-disabilities" className="text-[#22C55E] hover:underline">• Learning Disabilities</Link></li>
                  <li><Link to="/conditions/autism" className="text-[#22C55E] hover:underline">• Autism Spectrum</Link></li>
                  <li><Link to="/conditions/executive-function" className="text-[#22C55E] hover:underline">• Executive Function</Link></li>
                  <li><Link to="/conditions/anxiety" className="text-[#22C55E] hover:underline">• Anxiety Disorders</Link></li>
                </ul>
              </div>

              {/* When to See a Provider */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-900">When should I see a healthcare provider?</h3>
                <p className="text-orange-800 text-sm mb-3">
                  If you think your child has ADHD, talk to their pediatrician. They'll diagnose (or rule out) ADHD and make sure 
                  your child gets any treatment they need.
                </p>
                <p className="text-orange-800 text-sm">
                  If you think you have symptoms of ADHD, talk to a healthcare provider. They'll walk you through the steps of 
                  getting a diagnosis as an adult.
                </p>
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-red-900">Need Immediate Help?</h3>
                <p className="text-red-800 text-sm mb-3">
                  If your child is in crisis or needs immediate support, don't hesitate to reach out.
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

export default ADHD;
