import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Heart,
  AlertTriangle,
  Target,
  Shield,
  Lightbulb,
  FileText,
} from "lucide-react";

const SpecificLearningDisorders = () => {
  const [activeSection, setActiveSection] = useState("overview");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FileText className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Specific Learning Disorders (SpLD)
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              A comprehensive clinical guide to understanding Dyslexia,
              Dysgraphia, and Dyscalculia under DSM-5.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                to="/contact" 
                className="bg-white text-[#9333EA] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Professional Help
              </Link>
              <Link 
                to="/resources" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#9333EA] transition-colors"
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

      {/* NAVIGATION */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-6 overflow-x-auto py-4">
            {[
              { id: "overview", label: "Overview", icon: Brain },
              { id: "types", label: "Types", icon: BookOpen },
              { id: "symptoms", label: "Symptoms", icon: AlertTriangle },
              { id: "causes", label: "Causes", icon: Target },
              { id: "diagnosis", label: "Diagnosis", icon: Shield },
              { id: "treatment", label: "Treatment", icon: Lightbulb },
              { id: "social", label: "Living With", icon: Heart },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#9333EA] text-white'
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

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-3 space-y-12">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What are Specific Learning Disorders?
              </h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4 mb-6">
                <p>
                  "Specific learning disorder" is term Diagnostic and Statistical Manual of Mental Disorders uses to describe neurodevelopmental disorders that involve consistent difficulty in at least one of three major areas:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-blue-600">Reading</strong></li>
                  <li><strong className="text-green-600">Writing</strong></li>
                  <li><strong className="text-purple-600">Math</strong></li>
                </ul>
                <p>
                  The merging of three separate learning disorders into one diagnostic category under Specific Learning Disorder (SLD) in DSM-5 required three different specifiers to identify area(s) of academic weakness.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">10% of people affected</h3>
                <p className="text-blue-800">
                  Learning disabilities affect about 10% of people in the U.S. Dyslexia is the most common, accounting for at least 80% of all learning disabilities.
                </p>
              </div>
            </section>

            {/* TYPES */}
            <section id="types" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Types of Specific Learning Disorders
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6 bg-blue-50 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">
                    With Impairment in Reading (Dyslexia)
                  </h3>
                  <p className="text-blue-800">
                    The specifier "with impairment in reading" is added to SLD diagnosis when a person demonstrates significant impairment in one or more of reading subskills including word reading accuracy, reading rate or fluency, and/or reading comprehension.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-6 bg-green-50 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-green-900">
                    With Impairment in Written Expression (Dysgraphia)
                  </h3>
                  <p className="text-green-800">
                    An impairment in writing skills is assigned to specifier "with impairment in written expression" and refers to those children with impaired spelling and problems with writing.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6 bg-purple-50 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-purple-900">
                    With Impairment in Mathematics (Dyscalculia)
                  </h3>
                  <p className="text-purple-800">
                    The third SLD specifier "with impairment in mathematics" is for individuals who demonstrate significantly below average skills in number sense, memorization of arithmetic facts, accurate or fluent calculation.
                  </p>
                </div>
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Symptoms and Signs</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-orange-900">General Signs</h3>
                  <p className="text-orange-800 text-sm">
                    The main sign of any learning disability is when there's a difference between a child's academic potential and their academic performance.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-red-900">Behavior Symptoms</h3>
                  <p className="text-red-800 text-sm">
                    Learning disorders often affect your child's self-esteem and how they feel about school. They may also feel frustrated that their performance doesn't match their peers'.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-900 mb-2">Academic Signs:</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Identifying letters, numbers, colors</li>
                    <li>• Counting and expanding vocabulary</li>
                    <li>• Rhyming and sounding out words</li>
                    <li>• Organizing assignments and thoughts</li>
                    <li>• Memory and coordination issues</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900 mb-2">Emotional Signs:</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Not wanting to go to school</li>
                    <li>• Avoiding reading aloud or math problems</li>
                    <li>• Complaining about teachers</li>
                    <li>• "Acting out" in social situations</li>
                    <li>• Self-critical statements</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CAUSES */}
            <section id="causes" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Causes and Risk Factors</h2>
              
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Complex Origins</h3>
                <p className="text-purple-800">
                  Researchers still have a lot to learn about learning disabilities and their causes. Currently, they think LDs result from a combination of genetic and environmental factors.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-900">Risk Factors</h3>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Biological family history of LDs</li>
                    <li>• Premature birth</li>
                    <li>• Fetal exposure to alcohol/substances</li>
                    <li>• Speech and language developmental delay</li>
                    <li>• Malnutrition</li>
                    <li>• Environmental toxins (lead)</li>
                    <li>• Adverse childhood experiences (ACEs)</li>
                    <li>• Traumatic brain injury (TBI)</li>
                  </ul>
                </div>

                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-pink-900">Co-occurring Disorders</h3>
                  <p className="text-pink-800 text-sm mb-2">LDs often exist alongside other disorders:</p>
                  <ul className="text-sm text-pink-800 space-y-1">
                    <li>• Attention-deficit/hyperactivity disorder (ADHD)</li>
                    <li>• Anxiety</li>
                    <li>• Bipolar disorder</li>
                    <li>• Depression</li>
                    <li>• Obsessive-compulsive disorder (OCD)</li>
                    <li>• Oppositional defiant disorder (ODD)</li>
                  </ul>
                  <p className="text-pink-800 text-sm mt-2 font-semibold">
                    20% to 70% of children with psychiatric conditions have LDs
                  </p>
                </div>
              </div>
            </section>

            {/* DIAGNOSIS */}
            <section id="diagnosis" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Diagnosis and Tests</h2>
              
              <p className="text-gray-700 mb-6">
                Caregivers and teachers typically suspect learning disabilities once a child is in school. Your child will need to go through special assessments and tests so that a professional can make a diagnosis.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Types of Evaluations</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Medical evaluation:</strong> Physical exam and neurological exam to rule out underlying medical conditions</li>
                  <li><strong>Educational assessment:</strong> Teacher observations and academic performance evaluation</li>
                  <li><strong>Cognitive evaluation:</strong> Verbal and nonverbal intelligence (IQ) testing</li>
                  <li><strong>Psychological evaluation:</strong> Assessment for ADHD, anxiety, depression, and confidence issues</li>
                  <li><strong>Neuropsychological assessment:</strong> How brain conditions affect behavior and cognitive skills</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">School Evaluation Process</h3>
                <p className="text-gray-700">
                  If you think your child has a learning disorder, you should formally request testing through their school system. Schools are required to evaluate a child (age 3 to 21) if they're suspected of having a disability that affects their learning or educational performance.
                </p>
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">
                Management and Treatment
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Early Intervention</h3>
                  <p className="text-gray-700">
                    Though there is no "cure," specific learning disorders can be successfully managed throughout one's life. Early intervention is key for people with a SLD.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Educational Interventions</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Systematic, intensive and individualized instruction</li>
                    <li>Multisensory structured teaching approaches</li>
                    <li>Individualized Education Plans (IEPs)</li>
                    <li>Special education services</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Accommodations</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Additional time for tests and written assignments</li>
                    <li>Using computers for typing rather than writing by hand</li>
                    <li>Smaller class sizes</li>
                    <li>Assistive technology</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Medication</h3>
                  <p className="text-gray-700">
                    Currently, there are no FDA approved medications for specific learning disorders. However, medications may be prescribed for co-occurring disorders such as ADHD and anxiety.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Legal Rights</h3>
                  <p className="text-gray-700">
                    Under federal law, per Individuals with Disabilities Education Act (IDEA), students with learning disorders are eligible for special education services and free appropriate public education (FAPE).
                  </p>
                </div>
              </div>
            </section>

            {/* LIVING WITH */}
            <section id="social" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Living With Learning Disabilities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-green-900">How to Help Your Child</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Monitor your child's progress with their IEP</li>
                    <li>• Foster communication between specialists, school personnel and pediatrician</li>
                    <li>• Provide an atmosphere of encouragement and support at home</li>
                    <li>• Seek mental health support if needed</li>
                    <li>• Take care of yourself as a caregiver</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">Outlook and Prognosis</h3>
                  <p className="text-blue-800 text-sm mb-2">
                    Even though children don't outgrow learning disabilities, they can learn to adapt and improve their skills. Children who receive early diagnoses and interventions are more likely to overcome challenges while maintaining a positive self-image.
                  </p>
                  <p className="text-blue-800 text-sm">
                    They may also build on personal strengths that tend to come with learning disorders. For example, people with dyslexia are often especially creative. Children with learning disabilities can grow to become very productive and successful adults.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2 text-yellow-900">Prevention</h3>
                <p className="text-yellow-800">
                  Learning disabilities aren't preventable, but they're often manageable with different strategies. This is most beneficial if your child receives early intervention.
                </p>
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-2 bg-[#9333EA] text-white rounded-lg hover:bg-[#7C3AED] transition-colors"
                  >
                    Get Professional Help
                  </Link>
                  <Link
                    to="/resources"
                    className="block w-full text-center px-4 py-2 border border-[#9333EA] text-[#9333EA] rounded-lg hover:bg-[#9333EA] hover:text-white transition-colors"
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
                  <li><Link to="/conditions/adhd" className="text-[#9333EA] hover:underline">• ADHD</Link></li>
                  <li><Link to="/conditions/autism" className="text-[#9333EA] hover:underline">• Autism Spectrum</Link></li>
                  <li><Link to="/conditions/learning-disabilities" className="text-[#9333EA] hover:underline">• Learning Disabilities</Link></li>
                  <li><Link to="/conditions/memory-disorders" className="text-[#9333EA] hover:underline">• Memory Disorders</Link></li>
                  <li><Link to="/conditions/developmental-disorders" className="text-[#9333EA] hover:underline">• Developmental Disorders</Link></li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-red-900 font-semibold">
                  Need Immediate Help?
                </h3>
                <p className="text-sm text-red-800 mt-2">
                  Crisis Hotline: 988 <br /> Emergency: 911
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-blue-900 font-semibold mb-3">
                  Did You Know?
                </h3>
                <p className="text-sm text-blue-800">
                  Learning disabilities affect about 10% of people in the U.S. Dyslexia is the most common, accounting for at least 80% of all learning disabilities.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Inspirational Quote Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-purple-600 pl-6 py-4">
            "Specific learning disorders are not barriers to intelligence, but different pathways to knowledge. The brain that learns differently often sees the world through a unique lens that can lead to extraordinary insights and innovations."
          </blockquote>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            When we embrace diverse learning styles, we discover that academic challenges can become creative strengths. With the right support and understanding, every individual can unlock their unique potential and find their own path to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecificLearningDisorders;
