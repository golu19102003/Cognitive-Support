import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, Users, Target, ChevronRight, FileText, Activity, AlertTriangle, Shield } from 'lucide-react';

const SpecificLearningDisorders = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#142C52] to-[#16808D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/all-features" className="inline-flex items-center text-white hover:text-gray-200 transition-colors mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to All Conditions
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FileText className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Specific Learning Disorders</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Dyslexia, Dyscalculia, Dysgraphia. Tailors educational resources, assistive technologies, and personalized teaching strategies for specific learning challenges and academic success.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - What is SpLD */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What is a Specific Learning Disability (SpLD)?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Specific Learning Disabilities (SpLDs) refer to a group of specific lifelong cognitive impairments identified through unexpected underachievement in a range of learning processes involving skills of listening, speaking, spelling, written expression, mathematics, understanding, or reading including decoding and comprehension (American Psychiatric Association, 2013; IDEA, 2004; Hammill, 1990).
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Key facts about SpLDs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>SpLDs are distinct from intellectual disabilities in that they are specific and not global impairments. This means that SpLDs will only impact particular areas of learning such as spelling or memory whereas an intellectual disability (global impairment) will impact every aspect of an individual's cognitive functioning.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Dyslexia is the most common SpLD comprising 80% of all diagnosed SpLDs. Dyslexia relates primarily to barriers in the acquisition of reading and writing skills (Lerner, 2006).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Aside from academic barriers, people with SpLDs can also experience barriers in time management, organisational skills, social perception and social interaction.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>SpLDs have a variety of presentations and range in severity.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>The experience of SpLD varies from person to person and can be more disabling when there are greater barriers in the learning environment (Snowling, 2012).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>As a hidden disability, the prevalence of SpLDs is frequently underestimated. International estimates indicate that SpLDs impact approximately 10% of the population (Firth, 2008).</span>
                </li>
              </ul>
            </div>

            {/* Types of SpLDs */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Types of SpLDs</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                SpLDs typically comprise of dyslexia, impacting reading and writing, dyscalculia, impacting processing of numbers and maths, and dysgraphia impacting the mechanics of hand writing.
              </p>
            </div>

            {/* Individual Disorders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Dyslexia */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#17874020' }}>
                    <BookOpen className="h-8 w-8" style={{ color: '#178740' }} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#178740' }}>Dyslexia</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Dyslexia is associated with specific barriers in reading, writing, spelling or comprehension. Dyslexia is the most common SpLD, affecting approximately 80% of people with an SpLD (Lee, 2008; Mather and Wendling, 2012; Kalanje, 2011; International Dyslexia Association, 2012). Because dyslexia is related to literacy skills, it is most evident in educational settings. Students with dyslexia can experience barriers in one or a collection of the below:
                  </p>
                  <ul className="text-left text-gray-600 text-sm space-y-2">
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-green-600" />
                      <span>Visual perception of letters and words and their corresponding sounds and phonemes</span>
                    </li>
                    <li className="flex items-center">
                      <Brain className="h-4 w-4 mr-2 text-purple-600" />
                      <span>Memory</span>
                    </li>
                    <li className="flex items-center">
                      <Activity className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Vocabulary</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-orange-600" />
                      <span>Spelling of spoken words</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-red-600" />
                      <span>Comprehension</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dyscalculia */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#05966920' }}>
                    <Target className="h-8 w-8" style={{ color: '#059669' }} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#059669' }}>Dyscalculia</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Dyscalculia is associated with barriers in understanding numbers and mathematical concepts. Dyscalculia is estimated to occur in up to 3% of the population. For individuals with dyscalculia, it may be difficult to visualize patterns, different parts of a maths problem or identify critical information needed to solve equations and more complex problems. Dyscalculia can affect a person's ability to think quantitatively, do arithmetic, understand and measure time and space, remember times tables and perform basic calculations.
                  </p>
                </div>
              </div>

              {/* Dysgraphia */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#DC262620' }}>
                    <FileText className="h-8 w-8" style={{ color: '#DC2626' }} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#DC2626' }}>Dysgraphia</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Dysgraphia is associated with restrictions in handwriting tasks. Dysgraphia can affect skills associated with holding a pen or pencil such as drawing shapes, numbers or letters. Dysgraphia is a neurological disorder that typically appears when using complex collection of motor and information processing skills involved in the activity of writing. Not only does it require the ability to organize and express ideas in the mind. It also requires the ability to get the muscles in the hands and fingers to form those ideas, letter by letter, on paper. A person with dysgraphia may write their letters in reverse, have trouble recalling how letters are formed, or when to use lower or upper case letters.
                  </p>
                </div>
              </div>
            </div>

            {/* SpLD Terminology */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">SpLD terminology</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A range of terms are applied to SpLDs including learning disabilities, dyslexia, specific learning disorders, language disorders and learning difficulties. Variations in SpLD nomenclature is thought to expound the difficulty in understanding defining features of an SpLD. In addition, non-diagnostic terms such as reading disorder or learning difficulty do not provide definitive information about processing barriers for students with SpLDs. This can result in inappropriate support for students with SpLDs (Glazzard, 2010; Macdonald, 2009). As a result, generic non-diagnostic labelling of students with SpLDs is discouraged and students are advised to source an SpLD diagnosis to acquire the most detailed understanding of their strengths, weaknesses and processing preferences.
              </p>
            </div>
          </div>

          {/* Right Column - Resources */}
          <div className="space-y-6">
            {/* Teaching Strategies */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#22C55E20' }}>
                  <Brain className="h-8 w-8" style={{ color: '#22C55E' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#22C55E' }}>Teaching Strategies</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Teaching strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Study skills</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Universal design solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Impact of a specific learning disability</span>
                </li>
              </ul>
            </div>

            {/* PriHub Support Features */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#1B9AAA20' }}>
                  <Users className="h-8 w-8" style={{ color: '#1B9AAA' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#1B9AAA' }}>PriHub Support Features</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Text-to-speech functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Adaptive learning paths</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Personalized teaching strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Assistive technology integration</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Progress tracking and analytics</span>
                </li>
              </ul>
            </div>

            {/* Back to All Features */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Link
                to="/all-features"
                className="block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="text-center">
                  <div className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Conditions
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificLearningDisorders;
