import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Building, Users, DollarSign, MessageSquare, Calendar, Bell, Wrench, Brain, BookOpen, Target, Heart, Activity, FileText, Clock, AlertTriangle, TrendingUp, CheckCircle, Star, Award, Mail, Phone } from 'lucide-react';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    // Check for theme preference
    useEffect(() => {
        const checkTheme = () => {
            const theme = localStorage.getItem('theme') || 
                         localStorage.getItem('darkMode') || 
                         localStorage.getItem('isDarkMode');
            setIsDarkMode(theme === 'dark' || theme === 'true');
        };

        checkTheme();
        
        // Listen for theme changes
        window.addEventListener('storage', checkTheme);
        window.addEventListener('themechange', checkTheme);
        window.addEventListener('darkModeChange', checkTheme);
        
        // Poll every 500ms as backup
        const interval = setInterval(checkTheme, 500);
        
        return () => {
            window.removeEventListener('storage', checkTheme);
            window.removeEventListener('themechange', checkTheme);
            window.removeEventListener('darkModeChange', checkTheme);
            clearInterval(interval);
        };
    }, []);
    const taglines = [
    { prefix: "We Provide Cognitive Support for", resource: "Learning Disabilities" },
    { prefix: "We Provide Cognitive Support for", resource: "ADHD" }, 
    { prefix: "We Provide Cognitive Support for", resource: "Autism Spectrum" },
    { prefix: "We Provide Cognitive Support for", resource: "Memory Disorders" },
    { prefix: "We Provide", resource: "Learning Resources" },
    { prefix: "We Provide", resource: "Community Support" }, 
    { prefix: "We Provide", resource: "Professional Help" },
    { prefix: "We Provide", resource: "Expert Support" }
  ];

  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => 
        prev === allFeatures.length - 3 ? 0 : prev + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate platform highlights every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlightIndex((prev) => (prev + 3) % platformHighlights.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
      featureColor: "#DC2626",
      featureLink: "/conditions/adhd"
    },
    {
      featureIcon: Users,
      featureTitle: "Autism Spectrum",
      featureDescription: "Autism Spectrum Disorder affects social communication, behavior, and sensory processing. Individuals experience unique challenges with social interaction, communication patterns, and repetitive behaviors, requiring personalized support and understanding to thrive in their environment.",
      featureColor: "#7C3AED",
      featureLink: "/conditions/autism"
    },
    {
      featureIcon: Brain,
      featureTitle: "Memory Disorders",
      featureDescription: "Memory disorders impair recall and cognitive function, including Alzheimer's, dementia, and amnesia. These conditions affect daily living, independence, and quality of life, requiring medical treatment, cognitive therapy, and caregiver support for optimal management.",
      featureColor: "#059669",
      featureLink: "/conditions/memory-disorders"
    },
    {
      featureIcon: Activity,
      featureTitle: "Developmental Disorders",
      featureDescription: "Developmental Disorders impact brain development, affecting language, social skills, and learning abilities. These lifelong conditions require early intervention, specialized education, and therapeutic support to maximize potential and improve daily functioning throughout life.",
      featureColor: "#EA580C",
      featureLink: "/conditions/developmental-disorders"
    },
    {
      featureIcon: AlertTriangle,
      featureTitle: "Neurocognitive disorders",
      featureDescription: "Neurocognitive disorders cause progressive brain function decline, affecting memory, attention, and language. Conditions like Alzheimer's, stroke, and epilepsy range from mild to severe, impacting independence and requiring medical treatment, cognitive rehabilitation, and long-term care.",
      featureColor: "#BE123C",
      featureLink: "/conditions/neurocognitive-disorders"
    },
    {
      featureIcon: Clock,
      featureTitle: "Dementia",
      featureDescription: "Dementia causes progressive brain deterioration, severely impairing memory, thinking, and daily functioning. This condition affects reasoning, concentration, and independence, requiring comprehensive care, cognitive support, and medical management to maintain quality of life.",
      featureColor: "#0891B2",
      featureLink: "/conditions/dementia"
    },
    {
      featureIcon: Wrench,
      featureTitle: "Traumatic Brain Injury",
      featureDescription: "Traumatic brain injury results from head trauma causing nerve damage. Common causes include falls, accidents, sports injuries, and combat wounds. TBI affects cognitive, physical, and emotional functioning, requiring emergency care, rehabilitation, and long-term support.",
      featureColor: "#6B46C1",
      featureLink: "/conditions/traumatic-brain-injury"
    },
    {
      featureIcon: Brain,
      featureTitle: "Intellectual Disability",
      featureDescription: "Lifelong neurodevelopmental condition affecting reasoning, learning, and problem-solving. Requires simplified interfaces, specialized support tools, and comprehensive educational accommodations for optimal development and independence.",
      featureColor: "#4C97A8",
      featureLink: "/conditions/intellectual-disability"
    },
    {
      featureIcon: MessageSquare,
      featureTitle: "Speech & Language Disorders",
      featureDescription: "Includes apraxia, stuttering, and expressive/receptive language difficulties. Supports PriHub's text-to-speech, chatbot guidance, and communication tools for effective assistance and social integration.",
      featureColor: "#02394A",
      featureLink: "/conditions/speech-language-disorders"
    },
    {
      featureIcon: FileText,
      featureTitle: "Specific Learning Disorders",
      featureDescription: "Dyslexia, Dyscalculia, Dysgraphia. Tailors educational resources, assistive technologies, and personalized teaching strategies for specific learning challenges and academic success.",
      featureColor: "#178740",
      featureLink: "/conditions/specific-learning-disorders"
    },
    {
      featureIcon: Users,
      featureTitle: "Social Communication Disorder",
      featureDescription: "Affects pragmatic language use and social interaction skills. Complementary to autism spectrum; provides social support features and communication strategies for better integration.",
      featureColor: "#1B9AAA",
      featureLink: "/conditions/social-communication-disorder"
    },
    {
      featureIcon: Target,
      featureTitle: "Executive Functioning Disorders",
      featureDescription: "Difficulty with planning, organizing, time management, and decision-making. Integrates with PriHub reminders, notes, and task management tools for improved daily functioning and independence.",
      featureColor: "#16808D",
      featureLink: "/conditions/executive-functioning-disorders"
    },
    {
      featureIcon: Heart,
      featureTitle: "Anxiety & Emotional Disorders",
      featureDescription: "Anxiety, depression, or stress significantly impact memory, attention, and learning. Supports PriHub's chatbot guidance, emotional support, and mental wellness resources for comprehensive care.",
      featureColor: "#22C55E",
      featureLink: "/conditions/anxiety-emotional-disorders"
    },
    {
      featureIcon: Activity,
      featureTitle: "Epilepsy & Cerebral Palsy",
      featureDescription: "Epilepsy requires medical management and safety protocols. Cerebral Palsy affects motor and cognitive functioning, needing specialized support tools and accessibility features.",
      featureColor: "#142C52",
      featureLink: "/conditions/epilepsy-cerebral-palsy"
    }
  ];

  const displayedFeatures = allFeatures.slice(currentFeatureIndex, currentFeatureIndex + 3);

  const handlePrevious = () => {
    setCurrentFeatureIndex((prev) => 
      prev === 0 ? allFeatures.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentFeatureIndex((prev) => 
      prev === allFeatures.length - 3 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const communityOverviewData = [
    {
      metricLabel: "Active Users",
      metricValue: "156",
      metricIcon: Users,
      metricColor: "#0C4A50",
      metricTrend: "+12% growth",
      trendDirection: "up"
    },
    {
      metricLabel: "AI Interactions", 
      metricValue: "8",
      metricIcon: MessageSquare,
      metricColor: "#22C55E",
      metricTrend: "2.5min response",
      trendDirection: "stable"
    },
    {
      metricLabel: "Daily Sessions",
      metricValue: "23", 
      metricIcon: Shield,
      metricColor: "#1B9AAA",
      metricTrend: "Accessibility enabled",
      trendDirection: "safe"
    },
    {
      metricLabel: "Tasks Completed",
      metricValue: "192",
      metricIcon: Target,
      metricColor: "#142C52",
      metricTrend: "Support activities",
      trendDirection: "tasks"
    },
    {
      metricLabel: "User Satisfaction",
      metricValue: "94%",
      metricIcon: Star,
      metricColor: "#178740",
      metricTrend: "Experience Index",
      trendDirection: "satisfaction"
    },
    {
      metricLabel: "AI Response Time",
      metricValue: "1.2s",
      metricIcon: Brain,
      metricColor: "#DC2626",
      metricTrend: "Real-time processing",
      trendDirection: "fast"
    },
    {
      metricLabel: "Memory Exercises",
      metricValue: "1,247",
      metricIcon: Activity,
      metricColor: "#059669",
      metricTrend: "+28% this week",
      trendDirection: "up"
    },
    {
      metricLabel: "Accessibility Used",
      metricValue: "8/12",
      metricIcon: Shield,
      metricColor: "#7C3AED",
      metricTrend: "Full compliance",
      trendDirection: "compliant"
    },
    {
      metricLabel: "Support Groups",
      metricValue: "45",
      metricIcon: Users,
      metricColor: "#0891B2",
      metricTrend: "Active members",
      trendDirection: "growing"
    },
    {
      metricLabel: "Consultations",
      metricValue: "328",
      metricIcon: Award,
      metricColor: "#BE123C",
      metricTrend: "Expert sessions",
      trendDirection: "professional"
    },
    {
      metricLabel: "Emergency Response",
      metricValue: "12",
      metricIcon: AlertTriangle,
      metricColor: "#EA580C",
      metricTrend: "Quick response",
      trendDirection: "responsive"
    },
    {
      metricLabel: "Cognitive Training",
      metricValue: "24/7",
      metricIcon: Brain,
      metricColor: "#8B5CF6",
      metricTrend: "AI-driven programs",
      trendDirection: "personalized"
    },
    {
      metricLabel: "Support Assistance",
      metricValue: "24/7",
      metricIcon: Users,
      metricColor: "#10B981",
      metricTrend: "Always available",
      trendDirection: "support"
    },
    {
      metricLabel: "System Performance",
      metricValue: "99.9%",
      metricIcon: Activity,
      metricColor: "#F59E0B", 
      metricTrend: "Excellent uptime",
      trendDirection: "excellent"
    },
    {
      metricLabel: "Platform Security",
      metricValue: "100%",
      metricIcon: Shield,
      metricColor: "#06B6D4",
      metricTrend: "Private access",
      trendDirection: "secure"
    }
  ];

  const platformHighlights = [
    {
      highlightTitle: "Learning Resources", 
      highlightDescription: "Advanced adaptive educational platform with AI-powered personalized learning paths and cognitive development tools",
      highlightIcon: BookOpen,
      highlightColor: "#0C4A50",
      features: ["AI-Driven Adaptive Content", "Interactive Cognitive Exercises", "Real-Time Progress Analytics", "Multi-Sensory Learning"]
    },
    {
      highlightTitle: "Memory Support", 
      highlightDescription: "Comprehensive memory enhancement system with cognitive exercises and personalized memory training programs",
      highlightIcon: Brain,
      highlightColor: "#6B46C1",
      features: ["Memory Training Exercises", "Cognitive Recall Games", "Personalized Memory Plans", "Memory Performance Tracking"]
    },
    {
      highlightTitle: "Community Support", 
      highlightDescription: "Vibrant inclusive ecosystem with peer mentoring, expert-led workshops, and comprehensive support networks",
      highlightIcon: Users,
      highlightColor: "#178740",
      features: ["24/7 Peer Support Groups", "Expert-Led Community Events", "Resource Sharing Platform", "Mentorship Programs"]
    },
    {
      highlightTitle: "Professional Help", 
      highlightDescription: "Elite team of cognitive specialists providing evidence-based interventions and personalized care plans",
      highlightIcon: Award,
      highlightColor: "#1B9AAA", 
      features: ["Board-Certified Experts", "Personalized Care Plans", "Evidence-Based Interventions", "Telehealth Consultations"]
    },
    {
      highlightTitle: "AI Assistant", 
      highlightDescription: "Next-generation AI companion with emotional intelligence and predictive cognitive support capabilities",
      highlightIcon: Zap,
      highlightColor: "#DC2626",
      features: ["Emotional Intelligence AI", "Predictive Support System", "Multi-Language Processing", "Crisis Detection & Response"]
    },
    {
      highlightTitle: "Task Management", 
      highlightDescription: "Intelligent cognitive task system with adaptive scheduling and automated assistance for complex daily routines",
      highlightIcon: Target,
      highlightColor: "#059669", 
      features: ["AI-Powered Task Prioritization", "Adaptive Scheduling System", "Voice-Controlled Commands", "Automated Progress Tracking"]
    },
    {
      highlightTitle: "Accessibility Features", 
      highlightDescription: "Cutting-edge accessibility suite with universal design and advanced assistive technology integration",
      highlightIcon: Shield,
      highlightColor: "#7C3AED", 
      features: ["Advanced Screen Reader", "Dynamic Contrast Adjustment", "Eye-Gaze Tracking", "Switch Device Support"]
    },
    {
      highlightTitle: "Progress Analytics", 
      highlightDescription: "Comprehensive monitoring system with predictive insights and personalized improvement recommendations",
      highlightIcon: TrendingUp,
      highlightColor: "#BE123C", 
      features: ["Cognitive Performance Metrics", "Predictive Analytics", "Personalized Insights", "Progress Reporting Dashboard"]
    },
    {
      highlightTitle: "Communication Tools", 
      highlightDescription: "Advanced communication suite with speech-to-text, visual aids, and multi-modal interaction support",
      highlightIcon: MessageSquare,
      highlightColor: "#0891B2", 
      features: ["Real-Time Speech-to-Text", "Visual Communication Aids", "Multi-Language Support", "Gesture Recognition"]
    },
    {
      highlightTitle: "Safety & Security", 
      highlightDescription: "Enterprise-grade security with emergency response systems and comprehensive safety monitoring",
      highlightIcon: AlertTriangle,
      highlightColor: "#EA580C", 
      features: ["24/7 Safety Monitoring", "Emergency Alert System", "Secure Data Encryption", "Caregiver Notifications"]
    },
    {
      highlightTitle: "Cognitive Exercises", 
      highlightDescription: "Scientifically-designed brain training activities for memory enhancement and cognitive skill development",
      highlightIcon: Activity,
      highlightColor: "#4C97A8", 
      features: ["Brain Training Games", "Cognitive Skill Development", "Memory Enhancement Exercises", "Neuroplasticity Programs"]
    },
    {
      highlightTitle: "Emotional Support", 
      highlightDescription: "Comprehensive emotional wellness platform with mood tracking and mental health resources",
      highlightIcon: Heart,
      highlightColor: "#22C55E", 
      features: ["Emotional Regulation Tools", "Mood Tracking System", "Stress Management Resources", "Mental Health Support"]
    }
  ];

  const getTrendIndicator = (direction) => {
    const trendConfig = {
      up: { icon: TrendingUp, color: "text-green-600", label: "Growing" },
      stable: { icon: Clock, color: "text-orange-600", label: "Stable" },
      safe: { icon: CheckCircle, color: "text-blue-600", label: "Secure" },
      excellent: { icon: Star, color: "text-green-600", label: "Excellent" },
      tasks: { icon: Target, color: "text-purple-600", label: "Active" },
      satisfaction: { icon: Heart, color: "text-pink-600", label: "Happy" },
      fast: { icon: Zap, color: "text-yellow-600", label: "Fast" },
      compliant: { icon: Shield, color: "text-indigo-600", label: "Compliant" },
      growing: { icon: Users, color: "text-teal-600", label: "Growing" },
      professional: { icon: Award, color: "text-blue-600", label: "Expert" },
      responsive: { icon: AlertTriangle, color: "text-red-600", label: "Quick" },
      personalized: { icon: Brain, color: "text-purple-600", label: "Custom" },
      support: { icon: Users, color: "text-green-600", label: "Available" },
      secure: { icon: Shield, color: "text-gray-600", label: "Protected" }
    };
    return trendConfig[direction] || trendConfig.stable;
  };

  return (
    <div className="space-y-6">
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0,
            transform: translateX(20px);
          }
          to {
            opacity: 1,
            transform: translateX(0);
          }
        }
        
        .tagline-animation {
          display: inline-block;
          transition: all 1s ease-out;
        }
      `}</style>
      {/* Hero Section with Enhanced Design */}
      <div 
        className="text-white relative overflow-hidden"
        style={{
          backgroundImage: 'url(/back.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          top: '-35px'
        }}
      >
        <div className="max-w-4xl mx-auto text-center p-12" style={{ paddingTop: '100px' }}>
          <div className="flex justify-center mb-6">
            <img 
              src="/short_logo.png" 
              alt="Prihub Logo" 
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{color: '#071426'}}>Welcome to PriHub!</h1>
          <p className="text-xl mb-4" style={{color: '#000000'}}>Support System for Cognitive Disabilities</p>
          <p className="text-xl mb-8 font-bold">
            <span 
              className={`tagline-animation transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'
              }`}
            >
              <span style={{ color: '#000000' }}>{taglines[currentTagline].prefix}</span>{' '}
              <span style={{ color: '#16808D' }}>{taglines[currentTagline].resource}</span>
            </span>
          </p>
          
          <p className="text-lg mb-8 italic" style={{color: '#666666'}}>
            Empowering individuals with cognitive disabilities through accessible technology, AI-powered assistance, comprehensive support tools, understanding resources, and inclusive community to make a transformative change in their lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="flex items-center justify-center px-8 py-3 bg-white text-[#1B9AAA] rounded-lg font-semibold hover:bg-gradient-to-r hover:from-[#142C52] hover:to-[#16808D] hover:text-white transition-all transform hover:scale-105 shadow-lg"
            >
              <Brain className="mr-2 h-5 w-5" />
              Explore Prihub
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg font-semibold hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg">
              Get Support
              <Users className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Platform Highlights Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span style={{color: '#16808D'}}>Platform</span>
          <span style={{color: '#000000'}}> Highlights</span>
        </h2>
        <p className="text-gray-600 text-lg font-medium animate-pulse text-center mb-8">Advanced cognitive support features and accessibility tools for enhanced user experience </p>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentHighlightIndex((prev) => prev === 0 ? platformHighlights.length - 3 : prev - 3)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => setCurrentHighlightIndex((prev) => (prev + 3) % platformHighlights.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Features Grid - Show only 3 at a time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mx-8">
            {platformHighlights.slice(currentHighlightIndex, currentHighlightIndex + 3).map((highlight, index) => (
              <div key={index} className={`rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex justify-center mb-4">
                  <highlight.highlightIcon className="h-12 w-12" style={{ color: highlight.highlightColor }} />
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>{highlight.highlightTitle}</h3>
                <p className={`mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{highlight.highlightDescription}</p>
                <div className="space-y-2">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`flex items-center justify-center text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <CheckCircle className="h-3 w-3 mr-2" style={{ color: highlight.highlightColor }} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(platformHighlights.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHighlightIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentHighlightIndex / 3) === index
                    ? 'bg-[#142C52]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced PriHub at a Glance Section */}
      <div className="bg-gradient-to-r from-[#E0F7FA] to-[#D4DBE9] rounded-lg shadow-lg p-8 overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span style={{color: '#16808D'}}>Prihub</span>
            <span style={{color: '#000000'}}> at a glance</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium animate-pulse">Real-time cognitive disability support platform metrics and performance indicators</p>
        </div>
        
        {/* Animated Single Line Grid */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-4 animate-scroll-x" style={{ width: 'max-content' }}>
            {/* First set of metrics */}
            {communityOverviewData.map((metric, index) => {
              const trend = getTrendIndicator(metric.trendDirection);
              const TrendIcon = trend.icon;
              
              return (
                <div key={`first-${index}`} className="flex-shrink-0 bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-100 animate-fade-in">
                  <div className="flex flex-col items-center text-center min-w-[220px]">
                    <div className="flex justify-center mb-4">
                      <div className="p-5 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-md animate-pulse-slow">
                        <metric.metricIcon className="h-12 w-12" style={{ color: metric.metricColor }} />
                      </div>
                    </div>
                    <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-number-grow" style={{color: metric.metricColor}}>
                      {metric.metricValue}
                    </div>
                    <div className="text-gray-700 font-bold mb-4 text-base uppercase tracking-wide leading-tight">{metric.metricLabel}</div>
                    <div className={`flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm animate-glow mb-3`} style={{color: metric.metricColor}}>
                      <TrendIcon className="h-6 w-6 mr-3" />
                      <span className="text-base font-bold">{metric.metricTrend}</span>
                    </div>
                    <div className="mt-2 text-base text-gray-500 font-medium">
                      {trend.label}
                    </div>
                    <div className="mt-3 text-base text-gray-600 italic">
                      {metric.metricLabel.includes('Training') ? 'AI-powered adaptive learning' : 
                       metric.metricLabel.includes('Support') ? 'Dedicated assistance team' :
                       metric.metricLabel.includes('Security') ? 'End-to-end encryption' :
                       metric.metricLabel.includes('Users') ? 'Active community members' :
                       metric.metricLabel.includes('Performance') ? 'System reliability' :
                       metric.metricLabel.includes('Satisfaction') ? 'User experience rating' :
                       metric.metricLabel.includes('Memory') ? 'Cognitive exercises completed' :
                       metric.metricLabel.includes('Accessibility') ? 'WCAG compliance features' :
                       metric.metricLabel.includes('Consultations') ? 'Expert sessions conducted' :
                       metric.metricLabel.includes('Emergency') ? 'Crisis response events' :
                       metric.metricLabel.includes('Tasks') ? 'Daily activities completed' :
                       metric.metricLabel.includes('Sessions') ? 'Platform engagement' :
                       metric.metricLabel.includes('Interactions') ? 'AI conversations' :
                       metric.metricLabel.includes('Response') ? 'Processing speed' :
                       'Real-time monitoring'}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Duplicate set for seamless scrolling */}
            {communityOverviewData.map((metric, index) => {
              const trend = getTrendIndicator(metric.trendDirection);
              const TrendIcon = trend.icon;
              
              return (
                <div key={`second-${index}`} className="flex-shrink-0 bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-100 animate-fade-in">
                  <div className="flex flex-col items-center text-center min-w-[220px]">
                    <div className="flex justify-center mb-4">
                      <div className="p-5 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-md animate-pulse-slow">
                        <metric.metricIcon className="h-12 w-12" style={{ color: metric.metricColor }} />
                      </div>
                    </div>
                    <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-number-grow" style={{color: metric.metricColor}}>
                      {metric.metricValue}
                    </div>
                    <div className="text-gray-700 font-bold mb-4 text-base uppercase tracking-wide leading-tight">{metric.metricLabel}</div>
                    <div className={`flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm animate-glow mb-3`} style={{color: metric.metricColor}}>
                      <TrendIcon className="h-6 w-6 mr-3" />
                      <span className="text-base font-bold">{metric.metricTrend}</span>
                    </div>
                    <div className="mt-2 text-base text-gray-500 font-medium">
                      {trend.label}
                    </div>
                    <div className="mt-3 text-base text-gray-600 italic">
                      {metric.metricLabel.includes('Training') ? 'AI-powered adaptive learning' : 
                       metric.metricLabel.includes('Support') ? 'Dedicated assistance team' :
                       metric.metricLabel.includes('Security') ? 'End-to-end encryption' :
                       metric.metricLabel.includes('Users') ? 'Active community members' :
                       metric.metricLabel.includes('Performance') ? 'System reliability' :
                       metric.metricLabel.includes('Satisfaction') ? 'User experience rating' :
                       metric.metricLabel.includes('Memory') ? 'Cognitive exercises completed' :
                       metric.metricLabel.includes('Accessibility') ? 'WCAG compliance features' :
                       metric.metricLabel.includes('Consultations') ? 'Expert sessions conducted' :
                       metric.metricLabel.includes('Emergency') ? 'Crisis response events' :
                       metric.metricLabel.includes('Tasks') ? 'Daily activities completed' :
                       metric.metricLabel.includes('Sessions') ? 'Platform engagement' :
                       metric.metricLabel.includes('Interactions') ? 'AI conversations' :
                       metric.metricLabel.includes('Response') ? 'Processing speed' :
                       'Real-time monitoring'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-x {
          animation: scroll-x 12s linear infinite;
        }
        
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        @keyframes number-grow {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1);
          }
        }
        
        .animate-number-grow {
          animation: number-grow 0.8s ease-out;
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(0,0,0,0.2);
          }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Enhanced visibility during transition */
        .animate-scroll-x > div {
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          transition: all 0.3s ease;
        }
        
        .animate-scroll-x > div:hover {
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          transform: scale(1.1) translateZ(10px);
          z-index: 10;
        }
      `}</style>

      {/* Enhanced Call-to-Action Section */}
      <div className="bg-gradient-to-r from-[#16808D] to-[#142C52] rounded-lg shadow-lg p-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of individuals already experiencing the PriHub advantage for cognitive support through accessible technology, AI-powered assistance, and comprehensive disability resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="flex items-center justify-center px-8 py-3 bg-white text-[#142C52] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Started Now
            </Link>
            <Link
              to="/demo"
              className="flex items-center justify-center px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-[#142C52] transition-all"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Try AI Assistant
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Features Showcase */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span style={{color: '#16808D'}}>Cognitive Conditions</span>
          <span className={`transition-colors duration-300 ${
            isDarkMode ? 'text-white' : ''
          }`} style={{color: isDarkMode ? '#ffffff' : '#000000'}}> & Support Features</span>
        </h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            style={{ backgroundColor: '#142C52' }}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            style={{ backgroundColor: '#142C52' }}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mx-8">
            {displayedFeatures.map((featureDetail, index) => (
              <Link
                key={index}
                to={featureDetail.featureLink}
                className="block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div 
                  className={`group relative rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border h-full flex flex-col ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                      : 'bg-gradient-to-br from-gray-50 to-white border-gray-100'
                  }`}
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
                      className={`text-xl font-bold mb-3 transition-colors group-hover:!text-blue-600 ${
                        isDarkMode ? 'text-white' : ''
                      }`}
                      style={{ color: isDarkMode ? '#ffffff' : featureDetail.featureColor }}
                    >
                      {featureDetail.featureTitle}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {featureDetail.featureDescription}
                    </p>
                  </div>

                  {/* Learn More */}
                  <div className="mt-4 text-center">
                    <span 
                      className={`inline-flex items-center text-sm font-semibold transition-colors group-hover:!text-blue-600 ${
                        isDarkMode ? 'text-white' : ''
                      }`}
                      style={{ color: isDarkMode ? '#ffffff' : featureDetail.featureColor }}
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(allFeatures.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeatureIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentFeatureIndex / 3) === index
                    ? 'bg-[#142C52]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Additional Features CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Discover all 15+ cognitive conditions and specialized support features
          </p>
          <Link
            to="/all-features"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg font-semibold hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Zap className="mr-2 h-5 w-5" />
            Explore All Conditions
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* How PriHub Works Section */}
      <div className="bg-gradient-to-br from-[#E0F7FA] to-[#D4DBE9] rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span style={{color: '#16808D'}}>How PriHub</span>
          <span style={{color: '#000000'}}> Supports Cognitive Disabilities</span>
        </h2>
        <div className="grid grid-cols-4 gap-4 max-w-9xl mx-auto">
          {[
            {
              stepNumber: 1,
              stepTitle: "Create Your Account",
              stepDescription: "Sign up with accessibility-first registration process",
              stepIcon: Users,
              stepColor: isDarkMode ? "#60A5FA" : "#142C52"
            },
            {
              stepNumber: 2,
              stepTitle: "Personalize Accessibility",
              stepDescription: "Configure your preferred accessibility settings",
              stepIcon: Shield,
              stepColor: "#178740"
            },
            {
              stepNumber: 3,
              stepTitle: "Access AI Assistant",
              stepDescription: "Get personalized cognitive support and guidance",
              stepIcon: Brain,
              stepColor: "#1B9AAA"
            },
            {
              stepNumber: 4,
              stepTitle: "Manage Daily Tasks",
              stepDescription: "Use structured tools for cognitive support",
              stepIcon: Target,
              stepColor: "#142C52"
            }
          ].map((processStep) => (
            <div key={processStep.stepNumber} className={`rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center mb-3">
                  <div 
                    className="p-2 rounded-full shadow-sm"
                    style={{ backgroundColor: processStep.stepColor }}
                  >
                    <processStep.stepIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold mb-2" style={{color: processStep.stepColor}}>
                  {processStep.stepNumber}
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  {processStep.stepTitle}
                </h3>
                <p className={`text-base transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{processStep.stepDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Plans Section */}
      <div className="bg-gradient-to-br from-[#E0F7FA] to-[#D4DBE9] rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#071426'}}>
          Choose Your Support Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              planName: "Basic",
              monthlyPrice: "Free",
              billingPeriod: "forever",
              planFeatures: [
                "Essential accessibility features",
                "Basic AI chatbot support",
                "Task management (up to 10 tasks)",
                "Community support access"
              ],
              primaryColor: "#142C52",
              isPopular: false
            },
            {
              planName: "Premium",
              monthlyPrice: "$19",
              billingPeriod: "month",
              planFeatures: [
                "Full accessibility customization",
                "Advanced AI assistant",
                "Unlimited tasks and reminders",
                "Priority caregiver access",
                "Progress tracking analytics"
              ],
              primaryColor: "#178740",
              isPopular: true
            },
            {
              planName: "Professional",
              monthlyPrice: "$49",
              billingPeriod: "month",
              planFeatures: [
                "All premium features included",
                "Multiple user profiles",
                "Custom accessibility configurations",
                "Dedicated support specialist",
                "Integration with assistive devices"
              ],
              primaryColor: "#1B9AAA",
              isPopular: false
            }
          ].map((pricingPlan) => (
            <div 
              key={pricingPlan.planName}
              className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ${
                pricingPlan.isPopular ? 'ring-2' : ''
              }`}
              style={{ 
                borderColor: pricingPlan.isPopular ? pricingPlan.primaryColor : 'transparent',
                borderWidth: pricingPlan.isPopular ? '2px' : '0px'
              }}
            >
              {pricingPlan.isPopular && (
                <div 
                  className="text-center text-sm font-semibold mb-2 px-3 py-1 rounded-full"
                  style={{ backgroundColor: pricingPlan.primaryColor, color: 'white' }}
                >
                  MOST POPULAR CHOICE
                </div>
              )}
              <div className="text-center mb-4">
                <div className="text-4xl font-bold" style={{color: pricingPlan.primaryColor}}>
                  {pricingPlan.monthlyPrice}
                </div>
                <div className="text-gray-600">per {pricingPlan.billingPeriod}</div>
              </div>
              <ul className="space-y-3 mb-6">
                {pricingPlan.planFeatures.map((featureItem, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" style={{color: pricingPlan.primaryColor}} />
                    <span className="text-gray-700">{featureItem}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: pricingPlan.primaryColor,
                  color: 'white'
                }}
              >
                Get Started Today
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Communities Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#071426'}}>
          Trusted by Leading Communities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {[
            { communityName: "Green Valley Estates", partnerLogo: "/partner1.png" },
            { communityName: "Sunset Apartments Complex", partnerLogo: "/partner2.png" },
            { communityName: "Riverside Community Living", partnerLogo: "/partner3.png" },
            { communityName: "Mountain View Residences", partnerLogo: "/partner4.png" },
            { communityName: "Lakeside Gardens Society", partnerLogo: "/partner5.png" },
            { communityName: "Urban Heights Community", partnerLogo: "/partner6.png" },
            { communityName: "Coastal Living Properties", partnerLogo: "/partner7.png" },
            { communityName: "Forest Park Homes Association", partnerLogo: "/partner8.png" }
          ].map((communityPartner, index) => (
            <div key={index} className="text-center">
              <img 
                src={communityPartner.partnerLogo} 
                alt={communityPartner.communityName}
                className="h-16 w-auto mx-auto mb-2 grayscale hover:grayscale-0 transition-all"
              />
              <p className="text-sm text-gray-600">{communityPartner.communityName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive FAQ Section */}
      <div className="bg-gradient-to-r from-[#D4DBE9] to-[#E0F7FA] rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#071426'}}>
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              questionText: "How quickly can I set up PriHub for my community?",
              answerText: "Most communities are fully operational within 24-48 hours. Our dedicated onboarding team guides you through every step of the setup process."
            },
            {
              questionText: "Can I customize the platform for our specific community needs?",
              answerText: "Absolutely! PriHub is highly customizable with custom modules, integrations, and workflows tailored specifically to your community's unique requirements."
            },
            {
              questionText: "What kind of customer support do you provide?",
              answerText: "We offer 24/7 email support for all plans, with phone support available for Professional and Enterprise plans for immediate assistance."
            },
            {
              questionText: "How secure is our community data with PriHub?",
              answerText: "Your data security is our top priority. We use bank-level encryption, conduct regular security audits, and comply with all data protection regulations."
            },
            {
              questionText: "Can we migrate from our current management system?",
              answerText: "Yes, we provide free migration services and comprehensive data import tools to ensure a seamless transition from your existing system."
            }
          ].map((faqItem, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 flex items-center" style={{color: '#071426'}}>
                <MessageSquare className="h-5 w-5 mr-2" style={{color: '#142C52'}} />
                {faqItem.questionText}
              </h3>
              <p className="text-gray-700 leading-relaxed">{faqItem.answerText}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#071426'}}>
          Get in Touch With Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{color: '#142C52'}}>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" style={{color: '#142C52'}} />
                <span className="text-gray-700">support@society360.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" style={{color: '#142C52'}} />
                <span className="text-gray-700">1-800-SOCIETY</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3" style={{color: '#142C52'}} />
                <span className="text-gray-700">24/7 Support Available</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{color: '#142C52'}}>
              Quick Access Links
            </h3>
            <div className="space-y-3">
              <Link to="/demo" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Request a Live Demo →
              </Link>
              <Link to="/pricing" className="block text-blue-600 hover:text-blue-800 transition-colors">
                View Detailed Pricing Plans →
              </Link>
              <Link to="/documentation" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Read Complete Documentation →
              </Link>
              <Link to="/support" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Visit Support Center →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
