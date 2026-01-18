import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, Users, Heart, CheckCircle, AlertTriangle, Clock, Target, Shield, Lightbulb } from 'lucide-react';

const LearningDisabilities = () => {
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
      <div className="bg-gradient-to-r from-[#16808D] to-[#1B9AAA] text-white py-16">
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
            <h1 className="text-4xl font-bold mb-4">Learning Disabilities and Disorders in Children</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Does your child struggle with school? Do they dread reading out loud, writing an essay, or tackling math? 
              Here's how to recognize the signs of different types of learning differences and disorders.
            </p>
            <p className="text-sm text-white/80 mt-4">
              By Gina Kemp, M.A., Melinda Smith, M.A. and Jeanne Segal, Ph.D.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Sidebar */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'What are LD?', icon: Brain },
              { id: 'signs', label: 'Signs & Symptoms', icon: AlertTriangle },
              { id: 'types', label: 'Types of LD', icon: BookOpen },
              { id: 'other', label: 'Other Disorders', icon: Users },
              { id: 'hope', label: 'Hope & Recovery', icon: Heart },
              { id: 'diagnosis', label: 'Diagnosis & Testing', icon: Target },
              { id: 'help', label: 'Getting Help', icon: Shield },
              { id: 'social', label: 'Social & Emotional', icon: Lightbulb }
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
            {/* What are Learning Disabilities */}
            <section id="overview" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What are learning disabilities?</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Learning disabilities or learning disorders are umbrella terms for a wide variety of learning problems. 
                  A learning disability is not a problem with intelligence or motivation and kids with learning disabilities 
                  aren't lazy or dumb. In fact, most are just as smart as everyone else. Their brains are simply wired 
                  differently—and this difference affects how they receive and process information.
                </p>
                
                <p>
                  Simply put, children and adults with learning disabilities see, hear, and understand things differently. 
                  This can lead to trouble with learning new information and skills, and putting them to use. The most 
                  common types of learning disabilities involve problems with reading, writing, math, reasoning, listening, and speaking.
                </p>
                
                <p>
                  While every kid has trouble with homework from time to time, if a certain area of learning is consistently 
                  problematic, it might indicate a learning disorder.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Children with learning disabilities can, and do, succeed</h3>
                <p className="text-blue-800">
                  It can be tough to face the possibility that your child has a learning disorder. No parent wants to see their child suffer. 
                  You may wonder what it could mean for your child's future, or worry about how they will make it through school. 
                  But the important thing to remember is that most kids with learning disabilities are just as smart as everyone else. 
                  They just need to be taught in ways that are tailored to their specific abilities.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Learning Disabilities vs. Learning Differences</h3>
                <p className="text-gray-700">
                  Sometimes, these terms are used interchangeably, but they can have distinct meanings. "Learning difference" is an 
                  inclusive term that acknowledges that each child has a unique way of learning. Learning preferences, strengths, 
                  and weaknesses differ from child to child, so there's no "one-size-fits-all" approach to education.
                </p>
              </div>
            </section>

            {/* Signs and Symptoms */}
            <section id="signs" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Signs and symptoms of learning disabilities and disorders</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Learning disabilities look very different from one child to another. One child may struggle with reading and spelling, 
                  while another loves books but can't understand math. Still another child may have difficulty understanding what others 
                  are saying or communicating out loud. The problems are very different, but they are all learning disorders.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800">
                    <strong>If you're worried, don't wait</strong> - If you suspect that your child's learning difficulties may require 
                    special assistance, please do not delay in finding support. The sooner you move forward, the better your child's 
                    chances for reaching their full potential.
                  </p>
                </div>
              </div>

              {/* Age-specific signs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Preschool age</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Problems pronouncing words</li>
                    <li>• Trouble finding the right word</li>
                    <li>• Difficulty rhyming</li>
                    <li>• Trouble learning the alphabet, numbers, colors, shapes, or days of the week</li>
                    <li>• Difficulty following directions or learning routines</li>
                    <li>• Difficulty controlling crayons, pencils, and scissors</li>
                    <li>• Trouble with buttons, zippers, snaps, or learning to tie shoes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Ages 5-9</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Trouble learning the connection between letters and sounds</li>
                    <li>• Unable to blend sounds to make words</li>
                    <li>• Confuses basic words when reading</li>
                    <li>• Slow to learn new skills</li>
                    <li>• Consistently misspells words and makes frequent errors</li>
                    <li>• Trouble learning basic math concepts</li>
                    <li>• Difficulty telling time and remembering sequences</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Ages 10-13</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Difficulty with reading comprehension or math skills</li>
                    <li>• Trouble with open-ended test questions and word problems</li>
                    <li>• Dislikes reading and writing; avoids reading aloud</li>
                    <li>• Poor handwriting</li>
                    <li>• Poor organizational skills</li>
                    <li>• Trouble following classroom discussions and expressing thoughts aloud</li>
                    <li>• Spells the same word differently in a single document</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Types of Learning Disabilities */}
            <section id="types" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of learning disabilities</h2>
              
              <p className="text-gray-700 mb-6">
                Learning disabilities are often grouped by school-area skill set. If your child is in school, the types of learning 
                disorders that are most conspicuous usually revolve around reading, writing, or math.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                  <thead className="bg-[#16808D] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium">TYPE OF DISORDER</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">CREATES PROBLEMS WITH</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Dyslexia</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Reading, writing, spelling, speaking</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Dyscalculia</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Doing math problems, understanding time, using money</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Dysgraphia</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Handwriting, spelling, organizing ideas</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Dyspraxia (Sensory Integration Disorder)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Hand-eye coordination, balance, manual dexterity</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Dysphasia/Aphasia</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Understanding spoken language, reading comprehension</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Auditory Processing Disorder</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Reading, comprehension, language</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Visual Processing Disorder</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Reading, math, maps, charts, symbols, pictures</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Detailed sections for each type */}
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Dyslexia: Learning disabilities in reading</h3>
                  <p className="text-gray-700">
                    There are two types of learning disabilities in reading. Basic reading problems occur when there is difficulty 
                    understanding the relationship between sounds, letters and words. Reading comprehension problems occur when 
                    there is an inability to grasp the meaning of words, phrases, and paragraphs.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Signs of reading difficulty include problems with:</strong> Letter and word recognition, understanding 
                    words and ideas, reading speed and fluency, general vocabulary skills.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Dyscalculia: Learning disabilities in math</h3>
                  <p className="text-gray-700">
                    Learning disabilities in math vary greatly depending on the child's other strengths and weaknesses. A child's 
                    ability to do math will be affected differently by a language learning disability, a visual disorder, or a 
                    difficulty with sequencing, memory, or organization.
                  </p>
                  <p className="text-gray-700 mt-2">
                    A child with a math-based learning disorder may struggle with memorization and organization of numbers, 
                    operation signs, and number "facts" (like 5+5=10 or 5×5=25). Children with math learning disorders might 
                    also have trouble with counting principles or have difficulty telling time.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Dysgraphia: Learning disabilities in writing</h3>
                  <p className="text-gray-700">
                    Learning disabilities in writing can involve the physical act of writing or the mental activity of comprehending 
                    information. Basic writing disorder refers to physical difficulty forming words and letters. Expressive writing 
                    disability indicates a struggle to organize thoughts on paper.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Symptoms of a written language learning disability revolve around the act of writing:</strong> Neatness 
                    and consistency of writing, accurately copying letters and words, spelling consistency, writing organization 
                    and coherence.
                  </p>
                </div>
              </div>
            </section>

            {/* Other Disorders */}
            <section id="other" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Other disorders that can make learning difficult</h2>
              
              <p className="text-gray-700 mb-6">
                Difficulty in school doesn't always stem from a learning disability. Anxiety, depression, stressful events, 
                emotional trauma, and other conditions affecting concentration make learning more of a challenge.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">ADHD</h3>
                  <p className="text-orange-800">
                    Attention deficit hyperactivity disorder (ADHD), while not considered a learning disability, can certainly 
                    disrupt learning. Children with ADHD often have problems sitting still, staying focused, following instructions, 
                    staying organized, and completing homework. About 45 percent of children with ADHD may have a learning 
                    disability as well.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-900">Autism</h3>
                  <p className="text-indigo-800">
                    Difficulty mastering certain academic skills can stem from pervasive developmental disorders such as autism 
                    and Asperger's syndrome. Children with autism spectrum disorders may have trouble communicating, reading 
                    body language, learning basic skills, making friends, and making eye contact. Around 20 percent of autistic 
                    children may also have a co-occurring learning disability.
                  </p>
                </div>
              </div>
            </section>

            {/* Hope and Recovery */}
            <section id="hope" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Hope for learning disabilities: The brain can change</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Science has made great strides in understanding the inner workings of the brain, and one important discovery 
                  that brings new hope for learning disabilities and disorders is called neuroplasticity. Neuroplasticity refers to 
                  the brain's natural, lifelong ability to change.
                </p>
                
                <p>
                  Throughout life, the brain is able to form new connections and generate new brain cells in response to 
                  experience and learning. This knowledge has led to groundbreaking new treatments for learning disabilities that 
                  take advantage of the brain's ability to change.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">How does understanding the brain help a learning disorder?</h3>
                <p className="text-green-800">
                  Using a telephone analogy, faulty wiring in the brain disrupts normal lines of communication and makes it 
                  difficult to process information easily. If service was down in a certain area of the city, the phone company 
                  might fix the problem by re-wiring the connections. Similarly, under the right learning conditions, the brain 
                  has the ability to reorganize itself by forming new neural connections.
                </p>
              </div>
            </section>

            {/* Diagnosis and Testing */}
            <section id="diagnosis" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnosis and testing for learning disabilities and disorders</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Since diagnosing a learning disability isn't always easy, don't assume you know what your child's problem is, 
                  even if the symptoms seem clear. It's important to have your child tested and evaluated by a qualified professional.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-red-800">
                    <strong>Keep in mind that finding someone who can help may take some time and effort.</strong> Even experts 
                    mix up learning disabilities with ADHD and other behavioral problems sometimes. You may have to look around 
                    a bit or try more than one professional.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Types of specialists who may be able to test for and diagnose learning disabilities:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Clinical psychologists',
                    'School psychologists',
                    'Child psychiatrists',
                    'Educational psychologist',
                    'Developmental psychologist',
                    'Neuropsychologist',
                    'Psychometrist',
                    'Occupational therapist',
                    'Speech and language therapist'
                  ].map((specialist) => (
                    <div key={specialist} className="flex items-center space-x-2 bg-gray-50 p-3 rounded">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{specialist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Getting Help */}
            <section id="help" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Getting help for children with learning disabilities</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">Understand the specifics of your child's learning disability</h3>
                  <p className="text-blue-800">
                    Learn all you can about your child's type of learning disability. Find out how the disability affects the 
                    learning process and what cognitive skills are involved. It's easier to evaluate learning techniques if you 
                    understand how the learning disability affects your child.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">Research treatments, services, and new theories</h3>
                  <p className="text-green-800">
                    Along with knowing about the type of learning disability your child has, educate yourself about the most 
                    effective treatment options available. This can help you advocate for your child at school and pursue 
                    treatment at home.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-purple-900">Pursue treatment and services at home</h3>
                  <p className="text-purple-800">
                    Even if the school doesn't have the resources to treat your child's learning disability optimally, you can 
                    pursue these options on your own at home or with a therapist or tutor.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">Nurture your child's strengths</h3>
                  <p className="text-orange-800">
                    Even though children with learning disabilities struggle in one area of learning, they may excel in another. 
                    Pay attention to your child's interests and passions. Helping children with learning disorders develop their 
                    passions and strengths will probably help them with the areas of difficulty as well.
                  </p>
                </div>
              </div>
            </section>

            {/* Social and Emotional Skills */}
            <section id="social" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Social and emotional skills: How you can help</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Learning disabilities can be extremely frustrating for children. Imagine having trouble with a skill all of your 
                  friends are tackling with ease, worrying about embarrassing yourself in front of the class, or struggling to 
                  express yourself. Things can be doubly frustrating for exceptionally bright children with learning disabilities.
                </p>
                
                <p>
                  Kids with learning disabilities may have trouble expressing their feelings, calming themselves down, and reading 
                  nonverbal cues from others. This can lead to difficulty in the classroom and with their peers. The good news 
                  is that, as a parent, you can have a huge impact in these areas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-3 text-purple-900">Social and emotional skills are the most consistent indicators of success</h3>
                <p className="text-purple-800">
                  Social and emotional skills are the most consistent indicators of success for all children—and that includes kids 
                  with learning disorders. They outweigh everything else, including academic skills, in predicting lifelong 
                  achievement and happiness.
                </p>
              </div>
            </section>

            {/* Finding Support */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Finding support while helping a child with learning disabilities</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  All children can be both exhilarating and exhausting, but it may seem that your child with a learning disability 
                  is especially so. You may experience some frustration trying to work with your child, and it can seem like an 
                  uphill battle when you don't have the information you need.
                </p>
                
                <p>
                  After you learn what their specific learning disability is and how it is affecting their behavior, you will be 
                  able to start addressing the challenges in school and at home. If you can, be sure to reach out to other parents 
                  who are addressing similar challenges as they can be great sources of knowledge and emotional support.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-3">Professional Support</h3>
                <p className="text-gray-700">
                  Consider speaking with a licensed therapist who specializes in learning disabilities. Professional support can 
                  provide both you and your child with strategies and coping mechanisms for dealing with the challenges of 
                  learning disabilities.
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
                    className="block w-full text-center px-4 py-2 bg-[#16808D] text-white rounded-lg hover:bg-[#1B9AAA] transition-colors"
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
                  <li><Link to="/conditions/adhd" className="text-[#16808D] hover:underline">• ADHD</Link></li>
                  <li><Link to="/conditions/autism" className="text-[#16808D] hover:underline">• Autism Spectrum</Link></li>
                  <li><Link to="/conditions/dyslexia" className="text-[#16808D] hover:underline">• Dyslexia</Link></li>
                  <li><Link to="/conditions/executive-function" className="text-[#16808D] hover:underline">• Executive Function</Link></li>
                </ul>
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

export default LearningDisabilities;
