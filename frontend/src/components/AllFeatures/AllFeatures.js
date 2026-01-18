import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, Users, MessageSquare, Calendar, Shield, Activity, Heart, Target, Zap, ChevronRight, FileText, Calculator, PenTool, Eye, Clock, AlertTriangle, Stethoscope, Pill, Wrench } from 'lucide-react';

const AllFeatures = () => {
  const allFeatures = [
    {
      featureIcon: BookOpen,
      featureTitle: "Learning Disabilities",
      featureDescription: "Learning disabilities affect reading, writing, math, and information processing. These neurological conditions impact academic performance and daily functioning, requiring specialized educational support and accommodations to help individuals succeed in school and life.",
      featureColor: "#0C4A50",
      featureLink: "/conditions/learning-disabilities"
    },
    {
      featureIcon: Target,
      featureTitle: "ADHD",
      featureDescription: "ADHD is a neurodevelopmental disorder affecting focus, hyperactivity, and impulse control. It impacts academic performance, social relationships, and daily functioning throughout life, requiring behavioral therapy, medication, and coping strategies for successful management.",
      featureColor: "#22C55E",
      featureLink: "/conditions/adhd"
    },
    {
      featureIcon: Users,
      featureTitle: "Autism Spectrum",
      featureDescription: "Autism Spectrum Disorder affects social communication, behavior, and sensory processing. Individuals experience unique challenges with social interaction, communication patterns, and repetitive behaviors, requiring personalized support and understanding to thrive in their environment.",
      featureColor: "#1B9AAA",
      featureLink: "/conditions/autism"
    },
    {
      featureIcon: Brain,
      featureTitle: "Memory Disorders",
      featureDescription: "Memory disorders impair recall and cognitive function, including Alzheimer's, dementia, and amnesia. These conditions affect daily living, independence, and quality of life, requiring medical treatment, cognitive therapy, and caregiver support for optimal management.",
      featureColor: "#142C52",
      featureLink: "/conditions/memory-disorders"
    },
    {
      featureIcon: Activity,
      featureTitle: "Developmental Disorders",
      featureDescription: "Developmental Disorders impact brain development, affecting language, social skills, and learning abilities. These lifelong conditions require early intervention, specialized education, and therapeutic support to maximize potential and improve daily functioning throughout life.",
      featureColor: "#02394A",
      featureLink: "/conditions/developmental-disorders"
    },
    {
      featureIcon: AlertTriangle,
      featureTitle: "Neurocognitive disorders",
      featureDescription: "Neurocognitive disorders cause progressive brain function decline, affecting memory, attention, and language. Conditions like Alzheimer's, stroke, and epilepsy range from mild to severe, impacting independence and requiring medical treatment, cognitive rehabilitation, and long-term care.",
      featureColor: "#4C97A8",
      featureLink: "/conditions/neurocognitive-disorders"
    },
    {
      featureIcon: Clock,
      featureTitle: "Dementia",
      featureDescription: "Dementia causes progressive brain deterioration, severely impairing memory, thinking, and daily functioning. This condition affects reasoning, concentration, and independence, requiring comprehensive care, cognitive support, and medical management to maintain quality of life.",
      featureColor: "#16808D",
      featureLink: "/conditions/dementia"
    },
    {
      featureIcon: Wrench,
      featureTitle: "Traumatic Brain Injury",
      featureDescription: "Traumatic brain injury results from head trauma causing nerve damage. Common causes include falls, accidents, sports injuries, and combat wounds. TBI affects cognitive, physical, and emotional functioning, requiring emergency care, rehabilitation, and long-term support.",
      featureColor: "#178740",
      featureLink: "/conditions/traumatic-brain-injury"
    },
    {
      featureIcon: Brain,
      featureTitle: "Intellectual Disability",
      featureDescription: "Lifelong neurodevelopmental condition affecting reasoning, learning, and problem-solving. Requires simplified interfaces, specialized support tools, and comprehensive educational accommodations for optimal development and independence.",
      featureColor: "#6B46C1",
      featureLink: "/conditions/intellectual-disability"
    },
    {
      featureIcon: MessageSquare,
      featureTitle: "Speech & Language Disorders",
      featureDescription: "Includes apraxia, stuttering, and expressive/receptive language difficulties. Supports PriHub's text-to-speech, chatbot guidance, and communication tools for effective assistance and social integration.",
      featureColor: "#DC2626",
      featureLink: "/conditions/speech-language-disorders"
    },
    {
      featureIcon: FileText,
      featureTitle: "Specific Learning Disorders",
      featureDescription: "Dyslexia, Dyscalculia, Dysgraphia. Tailors educational resources, assistive technologies, and personalized teaching strategies for specific learning challenges and academic success.",
      featureColor: "#059669",
      featureLink: "/conditions/specific-learning-disorders"
    },
    {
      featureIcon: Users,
      featureTitle: "Social Communication Disorder",
      featureDescription: "Affects pragmatic language use and social interaction skills. Complementary to autism spectrum; provides social support features and communication strategies for better integration.",
      featureColor: "#0891B2",
      featureLink: "/conditions/social-communication-disorder"
    },
    {
      featureIcon: Target,
      featureTitle: "Executive Functioning Disorders",
      featureDescription: "Difficulty with planning, organizing, time management, and decision-making. Integrates with PriHub reminders, notes, and task management tools for improved daily functioning and independence.",
      featureColor: "#7C3AED",
      featureLink: "/conditions/executive-functioning-disorders"
    },
    {
      featureIcon: Heart,
      featureTitle: "Anxiety & Emotional Disorders",
      featureDescription: "Anxiety, depression, or stress significantly impact memory, attention, and learning. Supports PriHub's chatbot guidance, emotional support, and mental wellness resources for comprehensive care.",
      featureColor: "#BE123C",
      featureLink: "/conditions/anxiety-emotional-disorders"
    },
    {
      featureIcon: Activity,
      featureTitle: "Epilepsy & Cerebral Palsy",
      featureDescription: "Epilepsy requires medical management and safety protocols. Cerebral Palsy affects motor and cognitive functioning, needing specialized support tools and accessibility features.",
      featureColor: "#EA580C",
      featureLink: "/conditions/epilepsy-cerebral-palsy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#142C52] to-[#16808D] text-white py-16">
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
                <Zap className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">All Cognitive Conditions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our comprehensive collection of 15+ cognitive conditions and specialized support features. 
              Each condition is carefully designed to provide targeted assistance and improve quality of life.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeatures.map((featureDetail, index) => (
            <Link
              key={index}
              to={featureDetail.featureLink}
              className="block"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div 
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="p-3 rounded-full group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${featureDetail.featureColor}20` }}
                  >
                    <featureDetail.featureIcon 
                      className="h-8 w-8"
                      style={{ color: featureDetail.featureColor }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-center">
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
                  >
                    {featureDetail.featureTitle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {featureDetail.featureDescription}
                  </p>
                </div>

                {/* Learn More */}
                <div className="mt-4 text-center">
                  <span 
                    className="inline-flex items-center text-sm font-semibold group-hover:text-blue-600 transition-colors"
                    style={{ color: featureDetail.featureColor }}
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to Home CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore these cognitive conditions and discover how PriHub can provide the specialized support you need. 
              Each condition offers unique features and tools designed to enhance daily living and independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg font-semibold hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center px-6 py-3 border border-[#142C52] text-[#142C52] rounded-lg font-semibold hover:bg-[#142C52] hover:text-white transition-all"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFeatures;
