import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Building, Users, DollarSign, MessageSquare, Calendar, Bell, Wrench, Brain, BookOpen, Target, Heart, Activity, FileText, Clock, AlertTriangle, TrendingUp, CheckCircle, Star, Award, Mail, Phone, Share2 } from 'lucide-react';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentCommunityIndex, setCurrentCommunityIndex] = useState(0);
    const [isCommunityAutoPlaying, setIsCommunityAutoPlaying] = useState(true);
    
    // Community carousel data
    const communityPartners = [
        {
            communityName: "Special Education Centers",
            description: "Leading educational institutions providing specialized learning environments for students with diverse cognitive needs, utilizing adaptive technologies and personalized teaching methodologies.",
            units: "500+ Centers",
            residents: "10,000+ Students",
            partnerLogo: "https://images.unsplash.com/photo-1574982386585-ce56553aebfa?w=600&h=400&fit=crop"
        },
        {
            communityName: "Cognitive Therapy Clinics",
            description: "Advanced healthcare facilities offering evidence-based cognitive rehabilitation programs with cutting-edge therapeutic interventions and progressive treatment approaches.",
            units: "300+ Clinics",
            residents: "25,000+ Patients",
            partnerLogo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
        },
        {
            communityName: "Assisted Living Facilities",
            description: "Comprehensive residential communities providing specialized care and support for individuals requiring assistance with daily living activities and cognitive support.",
            units: "200+ Facilities",
            residents: "8,000+ Residents",
            partnerLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
        },
        {
            communityName: "Neurodiversity Support Groups",
            description: "Inclusive community organizations dedicated to supporting neurodiverse individuals through peer support, advocacy, and specialized resource programs.",
            units: "150+ Groups",
            residents: "12,000+ Members",
            partnerLogo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
        },
        {
            communityName: "Rehabilitation Centers",
            description: "Specialized facilities providing comprehensive rehabilitation services combining traditional therapy with innovative cognitive enhancement technologies.",
            units: "400+ Centers",
            residents: "15,000+ Clients",
            partnerLogo: "https://images.unsplash.com/photo-1551190822-a9333d879b1c?w=600&h=400&fit=crop"
        },
        {
            communityName: "Autism Support Networks",
            description: "Dedicated organizations providing comprehensive support services for individuals with autism and their families through specialized programs and community resources.",
            units: "600+ Networks",
            residents: "18,000+ Families",
            partnerLogo: "https://images.unsplash.com/photo-1584999734482-03fc1b8b7b6a?w=600&h=400&fit=crop"
        },
        {
            communityName: "Memory Care Communities",
            description: "Specialized residential communities focused on providing exceptional care and cognitive support for individuals with memory impairments and dementia.",
            units: "250+ Communities",
            residents: "20,000+ Seniors",
            partnerLogo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
        },
        {
            communityName: "Inclusive Education Schools",
            description: "Progressive educational institutions implementing inclusive learning environments with adaptive technologies and specialized support for diverse learning needs.",
            units: "180+ Schools",
            residents: "15,000+ Students",
            partnerLogo: "https://images.unsplash.com/photo-1503676260788-f1bcd00f72c7?w=600&h=400&fit=crop"
        },
        {
            communityName: "Speech Therapy Centers",
            description: "Professional facilities offering comprehensive speech and language therapy services using evidence-based techniques and advanced therapeutic technologies.",
            units: "350+ Centers",
            residents: "22,000+ Clients",
            partnerLogo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
        },
        {
            communityName: "Occupational Therapy Clinics",
            description: "Specialized clinics providing occupational therapy services focused on enhancing daily living skills and cognitive functional independence.",
            units: "280+ Clinics",
            residents: "16,000+ Patients",
            partnerLogo: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop"
        },
        {
            communityName: "ADHD Support Communities",
            description: "Supportive communities offering specialized resources, coaching, and therapeutic interventions for individuals with ADHD and their families.",
            units: "420+ Communities",
            residents: "25,000+ Members",
            partnerLogo: "https://images.unsplash.com/photo-1611095556553-792097274a58?w=600&h=400&fit=crop"
        },
        {
            communityName: "Dyslexia Learning Centers",
            description: "Specialized educational centers providing targeted support and innovative learning strategies for individuals with dyslexia and reading difficulties.",
            units: "190+ Centers",
            residents: "8,000+ Students",
            partnerLogo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
        }
    ];
    
    // Community carousel functions
    const handleNextCommunity = () => {
        setIsCommunityAutoPlaying(false);
        setCurrentCommunityIndex((prevIndex) => 
            prevIndex === communityPartners.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const handlePrevCommunity = () => {
        setIsCommunityAutoPlaying(false);
        setCurrentCommunityIndex((prevIndex) => 
            prevIndex === 0 ? communityPartners.length - 1 : prevIndex - 1
        );
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isCommunityAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentCommunityIndex((prevIndex) => 
                prevIndex === communityPartners.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [isCommunityAutoPlaying, communityPartners.length]);

    // Reset auto-play when user interacts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCommunityAutoPlaying(true);
        }, 10000); // Resume auto-play after 10 seconds of inactivity

        return () => clearTimeout(timer);
    }, [currentCommunityIndex]);
    
    // Share functionality
    const handleShare = (partnerName) => {
        const subject = encodeURIComponent(`Amazing Partnership Opportunity with ${partnerName} - PriHub Cognitive Support Platform`);
        const body = encodeURIComponent(`Hello,

I wanted to share an incredible partnership opportunity I found on PriHub - a comprehensive cognitive support platform.

🌟 **Partner Details:**
• Partner: ${partnerName}
• Platform: PriHub Cognitive Support System
• Industry: Healthcare & Cognitive Technology Solutions

🚀 **About PriHub:**
PriHub is a cutting-edge cognitive support platform dedicated to enhancing the quality of life for individuals with cognitive challenges through innovative technology solutions.

✨ **Key Features:**
• AI-powered cognitive assessments
• Personalized support programs
• Real-time monitoring and analytics
• Community engagement tools
• Professional healthcare integration
• 24/7 support availability

🎯 **Impact & Reach:**
• 1000+ communities served
• 50,000+ residents supported
• 98% integration success rate
• Award-winning platform
• Certified by leading healthcare organizations

🔗 **Visit Us:**
• Website: https://prihub-cognitive-support.com
• Live Demo: https://prihub-cognitive-support.com/demo
• Documentation: https://prihub-cognitive-support.com/docs

💼 **Partnership Benefits:**
• Access to cutting-edge cognitive technology
• Revenue sharing opportunities
• Professional development resources
• Community impact initiatives
• Premium support and training

This partnership represents a unique opportunity to be part of the cognitive healthcare revolution while making a meaningful difference in people's lives.

Would love to discuss this further with you!

Best regards,
[Your Name]
[Your Contact Information]

---
PriHub - Empowering Cognitive Excellence
🌐 https://prihub-cognitive-support.com
📧 support@prihub.com
📞 1-800-PRIHUB`);
        
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${subject}&body=${body}`;
        
        // Simple and reliable Gmail open
        window.open(gmailUrl, '_blank', 'width=800,height=600');
    };
    
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
    { prefix: "We Provide Support for", resource: "Learning Disabilities" },
    { prefix: "We Provide Support for", resource: "ADHD" },
    { prefix: "We Provide Support for", resource: "Autism Spectrum" },
    { prefix: "We Provide Support for", resource: "Memory Disorders" },
    { prefix: "We Provide Support for", resource: "Developmental Disorders" },
    { prefix: "We Provide Support for", resource: "Neurocognitive Disorders" },
    { prefix: "We Provide Support for", resource: "Dementia" },
    { prefix: "We Provide Support for", resource: "Traumatic Brain Injury" },
    { prefix: "We Provide Support for", resource: "Intellectual Disability" },
    { prefix: "We Provide Support for", resource: "Speech & Language Disorders" },
    { prefix: "We Provide Support for", resource: "Specific Learning Disorders" },
    { prefix: "We Provide Support for", resource: "Social Communication Disorder" },
    { prefix: "We Provide Support for", resource: "Executive Functioning Disorders" },
    { prefix: "We Provide Support for", resource: "Anxiety & Emotional Disorders" },
    { prefix: "We Provide Support for", resource: "Epilepsy & Cerebral Palsy" },
    { prefix: "We Provide Support for", resource: "Active Users Support" },
    { prefix: "We Provide Support for", resource: "AI Assistant Interactions" },
    { prefix: "We Provide Support for", resource: "Daily Active Sessions" },
    { prefix: "We Provide Support for", resource: "Support Assistance" },
    { prefix: "We Provide Support for", resource: "Task Completion Support" },
    { prefix: "We Provide Support for", resource: "User Satisfaction Tracking" },
    { prefix: "We Provide Support for", resource: "Fast AI Response System" },
    { prefix: "We Provide Support for", resource: "Memory Exercise Programs" },
    { prefix: "We Provide Support for", resource: "Accessibility Features" },
    { prefix: "We Provide Support for", resource: "Community Support Groups" },
    { prefix: "We Provide Support for", resource: "Professional Consultations" },
    { prefix: "We Provide Support for", resource: "Emergency Response Services" },
    { prefix: "We Provide Support for", resource: "Personalized Cognitive Training" },
    { prefix: "We Provide Support for", resource: "Secure & Private Platform Access" }
  ];

  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => 
        prev === cognitiveFeatures.length - 3 ? 0 : prev + 1
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

  const cognitiveFeatures = [
    {
      featureIcon: BookOpen,
      featureTitle: "Learning Disabilities",
      featureDescription: "Learning disabilities affect reading, writing, math, and information processing. These neurological conditions impact academic performance and daily functioning, requiring specialized educational support and accommodations for success.",
      featureColor: "#16808D",
      featureLink: "/conditions/learning-disabilities"
    },
    {
      featureIcon: Target,
      featureTitle: "ADHD",
      featureDescription: "ADHD is a neurodevelopmental disorder affecting focus, hyperactivity, and impulse control. It impacts academic performance, social relationships, and daily functioning throughout life, requiring behavioral therapy and coping strategies.",
      featureColor: "#22C55E",
      featureLink: "/conditions/adhd"
    },
    {
      featureIcon: Users,
      featureTitle: "Autism Spectrum",
      featureDescription: "Autism Spectrum Disorder affects social communication, behavior, and sensory processing. Individuals experience unique challenges with social interaction, communication patterns, and repetitive behaviors, requiring personalized support.",
      featureColor: "#1B9AAA",
      featureLink: "/conditions/autism"
    },
    {
      featureIcon: Brain,
      featureTitle: "Memory Disorders",
      featureDescription: "Memory disorders impair recall and cognitive function, including Alzheimer's, dementia, and amnesia. These conditions affect daily living, independence, and quality of life, requiring medical treatment, cognitive therapy, and caregiver support.",
      featureColor: "#142C52",
      featureLink: "/conditions/memory-disorders"
    },
    {
      featureIcon: Activity,
      featureTitle: "Developmental Disorders",
      featureDescription: "Developmental Disorders impact brain development, affecting language, social skills, and learning abilities. These lifelong conditions require early intervention, specialized education, and therapeutic support to maximize potential and improve daily functioning.",
      featureColor: "#059669",
      featureLink: "/conditions/developmental-disorders"
    },
    {
      featureIcon: AlertTriangle,
      featureTitle: "Neurocognitive disorders",
      featureDescription: "Neurocognitive disorders cause progressive brain function decline, affecting memory, attention, and language. Conditions like Alzheimer's, stroke, and epilepsy range from mild to severe, impacting independence and requiring medical treatment and cognitive rehabilitation.",
      featureColor: "#4C97A8",
      featureLink: "/conditions/neurocognitive-disorders"
    },
    {
      featureIcon: Clock,
      featureTitle: "Dementia",
      featureDescription: "Dementia causes progressive brain deterioration, severely impairing memory, thinking, and daily functioning. This condition affects reasoning, concentration, and independence, requiring comprehensive care, cognitive support, and medical management to maintain quality of life.",
      featureColor: "#DC2626",
      featureLink: "/conditions/dementia"
    },
    {
      featureIcon: Activity,
      featureTitle: "Epilepsy & Cerebral Palsy",
      featureDescription: "Epilepsy requires medical management and safety protocols. Cerebral Palsy affects motor and cognitive functioning, needing specialized support tools and accessibility features. Both conditions require comprehensive care and therapeutic interventions.",
      featureColor: "#7C3AED",
      featureLink: "/conditions/epilepsy-cerebral-palsy"
    },
    {
      featureIcon: Wrench,
      featureTitle: "Traumatic Brain Injury",
      featureDescription: "Traumatic brain injury results from head trauma causing nerve damage. Common causes include falls, accidents, sports injuries, and combat wounds. TBI affects cognitive, physical, and emotional functioning, requiring emergency care and rehabilitation.",
      featureColor: "#178740",
      featureLink: "/conditions/traumatic-brain-injury"
    },
    {
      featureIcon: Brain,
      featureTitle: "Intellectual Disability",
      featureDescription: "Lifelong neurodevelopmental condition affecting reasoning, learning, and problem-solving. Requires simplified interfaces, specialized support tools, and comprehensive educational accommodations for optimal development and independence throughout life.",
      featureColor: "#DB2777",
      featureLink: "/conditions/intellectual-disability"
    },
    {
      featureIcon: MessageSquare,
      featureTitle: "Speech & Language Disorders",
      featureDescription: "Includes apraxia, stuttering, and expressive/receptive language difficulties. Supports PriHub's text-to-speech, chatbot guidance, and communication tools for effective assistance and social integration in daily life and educational settings.",
      featureColor: "#F97316",
      featureLink: "/conditions/speech-language-disorders"
    },
    {
      featureIcon: FileText,
      featureTitle: "Specific Learning Disorders",
      featureDescription: "Dyslexia, Dyscalculia, Dysgraphia. Tailors educational resources, assistive technologies, and personalized teaching strategies for specific learning challenges and academic success in school and professional environments.",
      featureColor: "#9333EA",
      featureLink: "/conditions/specific-learning-disorders"
    },
    {
      featureIcon: Target,
      featureTitle: "Executive Functioning Disorders",
      featureDescription: "Difficulty with planning, organizing, time management, and decision-making. Integrates with PriHub reminders, notes, and task management tools for improved daily functioning and independence in personal and professional life.",
      featureColor: "#4F46E5",
      featureLink: "/conditions/executive-functioning-disorders"
    },
    {
      featureIcon: Heart,
      featureTitle: "Anxiety & Emotional Disorders",
      featureDescription: "Anxiety, depression, or stress significantly impact memory, attention, and learning. Supports PriHub's chatbot guidance, emotional support, and mental wellness resources for comprehensive care and improved quality of life.",
      featureColor: "#BE123C",
      featureLink: "/conditions/anxiety-emotional-disorders"
    },
    {
      featureIcon: Users,
      featureTitle: "Social Communication Disorder",
      featureDescription: "Affects pragmatic language use and social interaction skills. Complementary to autism spectrum; provides social support features and communication strategies for better integration in social and educational environments throughout life.",
      featureColor: "#0891B2",
      featureLink: "/conditions/social-communication-disorder"
    }
  ];

  const displayedFeatures = cognitiveFeatures.slice(currentFeatureIndex, currentFeatureIndex + 3);

  const handlePrevious = () => {
    setCurrentFeatureIndex((prev) => 
      prev === 0 ? cognitiveFeatures.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentFeatureIndex((prev) => 
      prev === cognitiveFeatures.length - 3 ? 0 : prev + 1
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
      metricColor: "#9333EA",
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
      metricLabel: "Support Assistance",
      metricValue: "24/7",
      metricIcon: Users,
      metricColor: "#10B981",
      metricTrend: "Always available",
      trendDirection: "support"
    },
    {
      metricLabel: "Tasks Completed",
      metricValue: "192",
      metricIcon: Target,
      metricColor: "#F97316",
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
      metricColor: "#6366F1",
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
      highlightTitle: "AI-Powered Cognitive Assistant",
      highlightDescription: "Intelligent chatbot with natural language processing, contextual awareness, and personalized support recommendations",
      highlightIcon: Brain,
      highlightColor: "#1B9AAA",
      features: ["Natural Language Processing", "Contextual Awareness", "Personalized Support Recommendations", "Emotional Intelligence"]
    },
    {
      highlightTitle: "Smart Task Management",
      highlightDescription: "AI-driven task scheduling with cognitive load balancing, priority optimization, and automated reminders",
      highlightIcon: Target,
      highlightColor: "#142C52",
      features: ["AI-Driven Task Prioritization", "Cognitive Load Balancing", "Priority Optimization", "Automated Reminders"]
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
          top: '-35px',
          marginBottom: '-16px'
        }}
      >
        <div className="max-w-4xl mx-auto text-center p-12" style={{ paddingTop: '120px' }}>
          <div className="flex justify-center mb-6">
            <img 
              src="/short_logo.png" 
              alt="Prihub Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 transition-all duration-300 hover:scale-105 hover:text-[#16808D] cursor-pointer" style={{color: '#071426'}}>Welcome to PriHub!</h1>
          <p className="text-xl mb-4 transition-all duration-300 hover:scale-105 hover:text-[#142C52] cursor-pointer" style={{color: '#000000'}}>Support System for Cognitive Disabilities</p>
          <p className="text-xl mb-4 font-bold">
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
              to="/conditions"
              className="flex items-center justify-center px-8 py-3 bg-white text-[#1B9AAA] rounded-lg font-semibold hover:bg-gradient-to-r hover:from-[#142C52] hover:to-[#16808D] hover:text-white transition-all transform hover:scale-105 shadow-lg"
            >
              <Brain className="mr-2 h-5 w-5" />
              Explore Prihub
            </Link>
            <button className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg font-semibold hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg">
              Get Support
              <Users className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Platform Highlights Section */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-3xl font-bold text-center mb-1">
          <span style={{color: '#16808D'}}>Platform</span>
          <span style={{color: '#000000'}}> Highlights</span>
        </h2>
        <p className="text-gray-600 text-base font-medium animate-pulse text-center mb-2">Advanced cognitive support features and accessibility tools for enhanced user experience</p>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentHighlightIndex((prev) => prev === 0 ? platformHighlights.length - 3 : prev - 3)}
            className="absolute left-1 top-[35%] transform -translate-y-[35%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => setCurrentHighlightIndex((prev) => (prev + 3) % platformHighlights.length)}
            className="absolute right-1 top-1/3 transform -translate-y-1/3 z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Features Grid - Show only 3 at a time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mx-16">
            {platformHighlights.slice(currentHighlightIndex, currentHighlightIndex + 3).map((highlight, index) => (
              <div key={index} className={`rounded-lg shadow-lg p-3 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex justify-center mb-3">
                  <highlight.highlightIcon className="h-10 w-10" style={{ color: highlight.highlightColor }} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>{highlight.highlightTitle}</h3>
                <p className={`mb-4 text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{highlight.highlightDescription}</p>
                <div className="space-y-2">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`flex items-center justify-center text-xs transition-colors duration-300 ${
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
                className={`${
                  Math.floor(currentHighlightIndex / 3) === index
                    ? 'w-6 h-2 animate-pulse'
                    : 'w-2 h-2'
                } rounded-full transition-all duration-300 ${
                  Math.floor(currentHighlightIndex / 3) === index
                    ? 'bg-[#16808D]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Additional Design Element - 3 Dots with Lines on Both Sides */}
          <div className="flex justify-center items-center mt-6">
            <div className="h-0.5 bg-gradient-to-l from-[#142C52] via-[#16808D] to-transparent w-32"></div>
            <div className="flex space-x-2 mx-4">
              <div className="w-2 h-2 bg-[#16808D] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#0C4A50] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#178740] rounded-full animate-pulse"></div>
            </div>
            <div className="h-0.5 bg-gradient-to-r from-[#142C52] via-[#16808D] to-transparent w-32"></div>
          </div>
        </div>
      </div>

      {/* Enhanced PriHub at a Glance Section */}
      <div className="bg-gradient-to-r from-[#E0F7FA] to-[#D4DBE9] rounded-lg shadow-lg p-6 overflow-hidden">
        <div className="text-center mb-1">
          <h2 className="text-3xl font-bold mb-1">
            <span style={{color: '#16808D'}}>Prihub</span>
            <span style={{color: '#000000'}}> at a glance</span>
          </h2>
          <p className="text-gray-600 text-base font-medium animate-pulse text-center mb-4">Real-time community insights and comprehensive support metrics for enhanced cognitive care management</p>
        </div>
        
        {/* Animated Single Line Grid */}
        <div className="relative overflow-visible">
          <div className="flex space-x-4 animate-scroll-x" style={{ width: 'max-content' }}>
            {/* First set of metrics */}
            {communityOverviewData.map((metric, index) => {
              const trend = getTrendIndicator(metric.trendDirection);
              const TrendIcon = trend.icon;
              
              return (
                <div key={`first-${index}`} className="flex-shrink-0 bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-125 border border-gray-200 animate-fade-in">
                  <div className="flex flex-col items-center text-center min-w-[180px]">
                    <div className="flex justify-center mb-3">
                      <div className="p-4 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-md animate-pulse-slow">
                        <metric.metricIcon className="h-10 w-10" style={{ color: metric.metricColor }} />
                      </div>
                    </div>
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-number-grow" style={{color: metric.metricColor}}>
                      {metric.metricValue}
                    </div>
                    <div className="text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide leading-tight">{metric.metricLabel}</div>
                    <div className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm animate-glow mb-2`} style={{color: metric.metricColor}}>
                      <TrendIcon className="h-5 w-5 mr-2" />
                      <span className="text-sm font-bold">{metric.metricTrend}</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 font-medium">
                      {trend.label}
                    </div>
                    <div className="mt-2 text-sm text-gray-600 italic">
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
                <div key={`second-${index}`} className="flex-shrink-0 bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-125 border border-gray-200 animate-fade-in">
                  <div className="flex flex-col items-center text-center min-w-[180px]">
                    <div className="flex justify-center mb-3">
                      <div className="p-4 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-md animate-pulse-slow">
                        <metric.metricIcon className="h-10 w-10" style={{ color: metric.metricColor }} />
                      </div>
                    </div>
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-number-grow" style={{color: metric.metricColor}}>
                      {metric.metricValue}
                    </div>
                    <div className="text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide leading-tight">{metric.metricLabel}</div>
                    <div className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm animate-glow mb-2`} style={{color: metric.metricColor}}>
                      <TrendIcon className="h-5 w-5 mr-2" />
                      <span className="text-sm font-bold">{metric.metricTrend}</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 font-medium">
                      {trend.label}
                    </div>
                    <div className="mt-2 text-sm text-gray-600 italic">
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
          <p className="text-base mb-6 opacity-90">
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
      <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-1">
        <h2 className="text-3xl font-bold text-center mb-1">
          <span style={{color: '#16808D'}}>Explore</span>
          <span style={{color: '#000000'}}> Cognitive Conditions</span>
        </h2>
        <p className="text-center text-gray-600 mb-2 max-w-3xl mx-auto">
          Comprehensive support for 15+ cognitive conditions with specialized AI-powered features, accessibility tools, and personalized assistance for enhanced quality of life and independence.
        </p>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-1 top-[40%] transform -translate-y-[40%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-1 top-[40%] transform -translate-y-[40%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mx-16">
            {displayedFeatures.map((featureDetail, index) => (
              <Link
                key={index}
                to={featureDetail.featureLink}
                className="block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div 
                  className={`group relative rounded-lg p-3 shadow-md hover:shadow-blue-200 transition-all duration-300 transform hover:scale-105 cursor-pointer border h-full flex flex-col ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                      : 'bg-gradient-to-br from-gray-50 to-white border-gray-100'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div 
                      className="p-3 rounded-full group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: `${featureDetail.featureColor}20` }}
                    >
                      <div 
                        className="absolute inset-0 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: '#E0F2FE' }}
                      >
                        <featureDetail.featureIcon 
                          className="h-8 w-8 transition-colors duration-300"
                          style={{ color: '#2563EB' }}
                        />
                      </div>
                      <featureDetail.featureIcon 
                        className="h-8 w-8 group-hover:!text-sky-600 transition-colors duration-300"
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
            {Array.from({ length: Math.ceil(cognitiveFeatures.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeatureIndex(index * 3)}
                className={`${
                  Math.floor(currentFeatureIndex / 3) === index
                    ? 'w-6 h-2 animate-pulse'
                    : 'w-2 h-2'
                } rounded-full transition-all duration-300 ${
                  Math.floor(currentFeatureIndex / 3) === index
                    ? 'bg-[#16808D]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Additional Design Element - 3 Dots with Lines on Both Sides */}
          <div className="flex justify-center items-center mt-6 mb-[-2]">
            <div className="h-0.5 bg-gradient-to-l from-[#142C52] via-[#16808D] to-transparent w-32"></div>
            <div className="flex space-x-2 mx-4">
              <div className="w-2 h-2 bg-[#16808D] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#0C4A50] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#178740] rounded-full animate-pulse"></div>
            </div>
            <div className="h-0.5 bg-gradient-to-r from-[#142C52] via-[#16808D] to-transparent w-32"></div>
          </div>
        </div>
        
        {/* Additional Features CTA */}
        <div className="mt-4 text-center">
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
      <div className="bg-gradient-to-br from-[#E0F7FA] to-[#D4DBE9] rounded-lg shadow-lg p-8 text-center mb-1">
        <h2 className="text-3xl font-bold text-center mb-1">
          <span style={{color: '#16808D'}}>Advanced PriHub</span>
          <span style={{color: '#000000'}}> Cognitive Support System</span>
        </h2>
        <p className="text-gray-600 text-base font-medium animate-pulse text-center mb-2">Revolutionary AI-powered platform with comprehensive disability support features and personalized cognitive assistance</p>
        <div className="grid grid-cols-4 gap-3 max-w-9xl mx-auto">
          {[
            {
              stepNumber: 1,
              stepTitle: "Intelligent Account Setup Process",
              stepDescription: "AI-guided accessibility-first registration with biometric authentication and adaptive interface configuration for seamless onboarding.",
              stepIcon: Users,
              stepColor: isDarkMode ? "#60A5FA" : "#142C52"
            },
            {
              stepNumber: 2,
              stepTitle: "Advanced Accessibility Customization",
              stepDescription: "Personalized WCAG 2.1 compliance with dynamic font sizing, color contrast adjustment, and screen reader optimization",
              stepIcon: Shield,
              stepColor: "#178740"
            },
            {
              stepNumber: 3,
              stepTitle: "AI-Powered Cognitive Assistant",
              stepDescription: "Intelligent chatbot with natural language processing, contextual awareness, and personalized support recommendations",
              stepIcon: Brain,
              stepColor: "#1B9AAA"
            },
            {
              stepNumber: 4,
              stepTitle: "Smart Task Management System",
              stepDescription: "AI-driven task scheduling with cognitive load balancing, priority optimization, and automated reminders productivity daily living support.",
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
                    className="p-2 rounded-full shadow-sm animate-pulse"
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
                }`}>{processStep.stepTitle}</h3>
                <p className={`text-sm leading-relaxed transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{processStep.stepDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* Trusted Communities Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-1">
          <h2 className="text-3xl font-bold mb-1">
            <span style={{color: '#16808D'}}>Trusted by</span>
            <span className="text-black"> Leading Communities</span>
          </h2>
          <p className="text-gray-600 text-base font-medium animate-pulse text-center mb-4 max-w-4xl mx-auto whitespace-nowrap">
            Join thousands of communities that rely on PriHub for seamless management and exceptional resident experiences.
          </p>
        </div>
        
        {/* Community Carousel */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrevCommunity}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 lg:-translate-x-3 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:bg-[#16808D] hover:border-[#16808D] group"
            aria-label="Previous community"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextCommunity}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 lg:translate-x-3 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:bg-[#16808D] hover:border-[#16808D] group"
            aria-label="Next community"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          {/* Community Display */}
          <div className="flex items-center justify-center p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
              {/* Image Column */}
              <div className="order-2 lg:order-1">
                <img 
                  src={communityPartners[currentCommunityIndex].partnerLogo} 
                  alt={communityPartners[currentCommunityIndex].communityName}
                  className="w-full h-56 lg:h-72 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 object-cover"
                />
              </div>
              
              {/* Content Column */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {communityPartners[currentCommunityIndex].communityName}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                  {communityPartners[currentCommunityIndex].description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-[#E0F7FA] rounded-full text-sm">
                    <span className="font-semibold text-[#16808D]">Certified</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-50 rounded-full text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-green-700 text-xs font-medium">Premium</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-sm">
                    <Award className="h-3 w-3 text-blue-500 mr-1" />
                    <span className="text-blue-700 text-xs font-medium">Verified</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                  <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                    <Building className="h-5 w-5 mr-2" style={{ color: '#16808D' }} />
                    <span className="font-medium">{communityPartners[currentCommunityIndex].units}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                    <Users className="h-5 w-5 mr-2" style={{ color: '#1B9AAA' }} />
                    <span className="font-medium">{communityPartners[currentCommunityIndex].residents}</span>
                  </div>
                </div>
                
                {/* Star Rating and View Details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-2">5.0</span>
                  </div>
                  <button className="text-[#16808D] hover:text-[#142C52] font-medium text-sm transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {communityPartners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsCommunityAutoPlaying(false);
                setCurrentCommunityIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentCommunityIndex === index
                  ? 'bg-[#142C52] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to community ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Middle Connecting Element */}
        <div className="flex items-center justify-center mt-6">
          <div className="flex items-center space-x-4">
            <div className="h-0.5 bg-gradient-to-r from-transparent to-[#16808D] w-32"></div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-[#16808D] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#1B9AAA] rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-[#142C52] rounded-full animate-pulse delay-150"></div>
            </div>
            <div className="h-0.5 bg-gradient-to-r from-[#16808D] to-transparent w-32"></div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-4">
            Discover all {communityPartners.length}+ communities already experiencing the PriHub advantage
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg font-semibold hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg"
          >
            <Building className="mr-2 h-5 w-5" />
            Become a Partner Community
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      
      {/* Our Valuable Partners Section */}
      <div className="bg-gradient-to-r from-blue-100 via-sky-50 to-cyan-100 rounded-xl shadow-xl p-10 overflow-hidden">
        <div className="text-center mb-1">
          <h2 className="text-3xl font-bold mb-1">
            <span style={{color: '#16808D'}}>Our Valuable</span>
            <span className="text-black"> Partners</span>
          </h2>
          <p className="text-gray-600 text-base font-medium animate-pulse text-center mb-4 max-w-4xl mx-auto whitespace-nowrap">
            Collaborating with industry leaders and innovators to deliver comprehensive cognitive support solutions.
          </p>
        </div>
        
        {/* Continuous Scrolling List */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll-x" style={{ width: 'max-content' }}>
            {/* First set of partners */}
            {[
              { 
                communityName: "AI Technology Providers", 
                description: "50+ Solutions",
                stats: "98% Integration",
                rating: "4.9",
                years: "10+ Years",
                image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
                growthMetric: "AI Advancement"
              },
              { 
                communityName: "Healthcare Institutions", 
                description: "200+ Hospitals",
                stats: "95% Patient Care",
                rating: "4.8",
                years: "8+ Years",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
                growthMetric: "Health Progress"
              },
              { 
                communityName: "Educational Organizations", 
                description: "150+ Schools",
                stats: "92% Learning Success",
                rating: "4.7",
                years: "6+ Years",
                image: "https://images.unsplash.com/photo-1503676260788-f1bcd00f72c7?w=400&h=300&fit=crop",
                growthMetric: "Knowledge Growth"
              },
              { 
                communityName: "Accessibility Standards Bodies", 
                description: "30+ Organizations",
                stats: "99% Compliance",
                rating: "4.9",
                years: "12+ Years",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
                growthMetric: "Access Expansion"
              },
              { 
                communityName: "Research Institutions", 
                description: "80+ Universities",
                stats: "94% Innovation",
                rating: "4.8",
                years: "7+ Years",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
                growthMetric: "Research Impact"
              },
              { 
                communityName: "Non-Profit Organizations", 
                description: "120+ NGOs",
                stats: "96% Social Impact",
                rating: "4.7",
                years: "9+ Years",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
                growthMetric: "Social Growth"
              },
              { 
                communityName: "Government Agencies", 
                description: "25+ Departments",
                stats: "93% Policy Support",
                rating: "4.6",
                years: "5+ Years",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop",
                growthMetric: "Policy Development"
              },
              { 
                communityName: "Assistive Tech Companies", 
                description: "60+ Vendors",
                stats: "97% Device Support",
                rating: "4.8",
                years: "8+ Years",
                image: "https://images.unsplash.com/photo-1551190822-a9333d879b2c?w=400&h=300&fit=crop",
                growthMetric: "Tech Innovation"
              },
              { 
                communityName: "Mental Health Providers", 
                description: "180+ Clinics",
                stats: "91% Wellness Support",
                rating: "4.7",
                years: "6+ Years",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                growthMetric: "Wellness Improvement"
              },
              { 
                communityName: "Disability Advocacy Groups", 
                description: "90+ Associations",
                stats: "95% Inclusion Success",
                rating: "4.9",
                years: "11+ Years",
                image: "https://images.unsplash.com/photo-1611095556553-792097274a58?w=400&h=300&fit=crop",
                growthMetric: "Inclusion Progress"
              },
              { 
                communityName: "Software Development Partners", 
                description: "40+ Companies",
                stats: "98% Platform Integration",
                rating: "4.8",
                years: "7+ Years",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
                growthMetric: "Digital Growth"
              },
              { 
                communityName: "Training & Certification Bodies", 
                description: "35+ Centers",
                stats: "94% Skill Development",
                rating: "4.6",
                years: "4+ Years",
                image: "https://images.unsplash.com/photo-1515378791036-0646a3e77ba8?w=400&h=300&fit=crop",
                growthMetric: "Career Advancement"
              }
            ].map((partner, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-125 border border-gray-100 min-w-[320px] max-w-[320px] animate-fade-in">
                {/* Partner Image */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img 
                    src={partner.image} 
                    alt={partner.communityName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-medium">Active</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{partner.communityName}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-white" />
                        <span className="text-white text-sm font-medium">{partner.years} Partnership</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">{partner.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Partner Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-[#16808D]" />
                      <span className="text-gray-600 text-sm font-medium">{partner.description}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-gray-600">{partner.growthMetric}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    <div className="inline-flex items-center px-1 py-0.5 bg-[#E0F7FA] rounded-full">
                      <span className="font-semibold text-[#16808D] text-xs">{partner.stats}</span>
                    </div>
                    <div className="inline-flex items-center px-1 py-0.5 bg-green-50 rounded-full">
                      <CheckCircle className="h-2 w-2 text-green-500 mr-0.5" />
                      <span className="text-green-700 text-xs">Certified</span>
                    </div>
                    <div className="inline-flex items-center px-1 py-0.5 bg-blue-50 rounded-full">
                      <Award className="h-2 w-2 text-blue-500 mr-0.5" />
                      <span className="text-blue-700 text-xs">Premium</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        <div className="w-5 h-5 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs">A+</span>
                        </div>
                        <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs">B+</span>
                        </div>
                        <div className="w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs">C+</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">Expert Team</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="h-3 w-3 text-purple-500" />
                      <span className="text-xs text-gray-600">Verified</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-[#16808D] hover:text-[#142C52] font-medium text-xs transition-colors">
                      Learn More →
                    </button>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-3 w-3 text-red-500 hover:text-red-600 cursor-pointer transition-colors" />
                      <Share2 className="h-3 w-3 text-gray-500 hover:text-gray-600 cursor-pointer transition-colors" onClick={() => handleShare(partner.communityName)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
