import React, { useState, useEffect } from 'react';
import { Search, Zap, Brain, Eye, Hand, Settings, Cpu, Mic, Camera, Wifi, Shield, Database, Cloud, Star, Download, ArrowRight } from 'lucide-react';

const AdvancedFeatures = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const startX = e.clientX - iconPosition.x;
    const startY = e.clientY - iconPosition.y;

    const handleMouseMove = (e) => {
      setIconPosition({
        x: e.clientX - startX,
        y: e.clientY - startY
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const categories = [
    { id: 'all', name: 'All Features', icon: Zap, color: '#16808D' },
    { id: 'ai-powered', name: 'AI-Powered', icon: Brain, color: '#8B5CF6' },
    { id: 'accessibility', name: 'Accessibility', icon: Eye, color: '#10B981' },
    { id: 'control', name: 'Control Methods', icon: Hand, color: '#F97316' },
    { id: 'enhancement', name: 'Enhancements', icon: Settings, color: '#EF4444' }
  ];

  const features = [
    {
      id: 1,
      title: 'Smart Assistant',
      description: 'AI-powered virtual assistant that learns from user behavior and provides personalized accessibility support.',
      icon: Brain,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
      rating: 4.8,
      downloads: '12.5K',
      action: 'Learn More',
      tags: ['AI', 'Voice Control', 'Learning']
    },
    {
      id: 2,
      title: 'Voice Recognition',
      description: 'Advanced speech-to-text technology with multi-language support and accent recognition.',
      icon: Mic,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
      rating: 4.7,
      downloads: '8.3K',
      action: 'Learn More',
      tags: ['Voice', 'Speech', 'Multi-language']
    },
    {
      id: 3,
      title: 'Screen Reader',
      description: 'Intelligent text-to-speech system with natural voice synthesis and content analysis.',
      icon: Eye,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
      rating: 4.9,
      downloads: '15.2K',
      action: 'Learn More',
      tags: ['Visual', 'Text-to-Speech', 'Navigation']
    },
    {
      id: 4,
      title: 'Eye Tracking',
      description: 'Precision eye-tracking technology for hands-free computer control and communication.',
      icon: Camera,
      category: 'control',
      color: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
      rating: 4.6,
      downloads: '6.7K',
      action: 'Learn More',
      tags: ['Hands-free', 'Tracking', 'Control']
    },
    {
      id: 5,
      title: 'Gesture Control',
      description: 'Motion gesture recognition system for intuitive device interaction.',
      icon: Hand,
      category: 'control',
      color: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
      rating: 4.5,
      downloads: '7.1K',
      action: 'Learn More',
      tags: ['Motion', 'Gestures', 'Touchless']
    },
    {
      id: 6,
      title: 'Performance Optimizer',
      description: 'System performance enhancement for smoother accessibility feature operation.',
      icon: Cpu,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #EC4899 0%, #DB2777 50%, #BE185D 100%)',
      rating: 4.7,
      downloads: '9.4K',
      action: 'Learn More',
      tags: ['Performance', 'Speed', 'Optimization']
    },
    {
      id: 7,
      title: 'Neural Interface',
      description: 'Brain-computer interface for direct neural control of digital devices.',
      icon: Brain,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #4338CA 100%)',
      rating: 4.8,
      downloads: '5.2K',
      action: 'Learn More',
      tags: ['Neural', 'BCI', 'Direct Control']
    },
    {
      id: 8,
      title: 'Predictive Text',
      description: 'AI-powered text prediction with contextual understanding and learning.',
      icon: Brain,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0E7490 100%)',
      rating: 4.6,
      downloads: '8.9K',
      action: 'Learn More',
      tags: ['AI', 'Text', 'Prediction']
    },
    {
      id: 9,
      title: 'Natural Language Processing',
      description: 'Advanced NLP for understanding and processing user commands naturally.',
      icon: Brain,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 50%, #115E59 100%)',
      rating: 4.9,
      downloads: '11.3K',
      action: 'Learn More',
      tags: ['NLP', 'Language', 'AI']
    },
    {
      id: 10,
      title: 'Machine Learning',
      description: 'Adaptive ML algorithms that learn user preferences and patterns.',
      icon: Brain,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #22C55E 0%, #16A34A 50%, #15803D 100%)',
      rating: 4.7,
      downloads: '10.1K',
      action: 'Learn More',
      tags: ['ML', 'Learning', 'Adaptive']
    },
    {
      id: 11,
      title: 'Computer Vision',
      description: 'AI-powered visual recognition for scene understanding and object detection.',
      icon: Camera,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #84CC16 0%, #65A30D 50%, #4D7C0F 100%)',
      rating: 4.8,
      downloads: '7.8K',
      action: 'Learn More',
      tags: ['Vision', 'AI', 'Recognition']
    },
    {
      id: 12,
      title: 'Voice Synthesis',
      description: 'Natural-sounding voice generation with emotional tone and emphasis.',
      icon: Mic,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
      rating: 4.6,
      downloads: '6.4K',
      action: 'Learn More',
      tags: ['Voice', 'Synthesis', 'Audio']
    },
    {
      id: 13,
      title: 'Color Blindness Support',
      description: 'Advanced color correction and enhancement for various types of color blindness.',
      icon: Eye,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 50%, #BE123C 100%)',
      rating: 4.7,
      downloads: '9.2K',
      action: 'Learn More',
      tags: ['Visual', 'Color', 'Accessibility']
    },
    {
      id: 14,
      title: 'Magnification Tool',
      description: 'Intelligent screen magnification with context-aware zoom and tracking.',
      icon: Eye,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #7C3AED 100%)',
      rating: 4.8,
      downloads: '13.5K',
      action: 'Learn More',
      tags: ['Visual', 'Magnification', 'Zoom']
    },
    {
      id: 15,
      title: 'Braille Display',
      description: 'Digital braille output with refreshable tactile display support.',
      icon: Eye,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #0369A1 100%)',
      rating: 4.9,
      downloads: '4.3K',
      action: 'Learn More',
      tags: ['Braille', 'Tactile', 'Display']
    },
    {
      id: 16,
      title: 'Audio Descriptions',
      description: 'Automatic generation of audio descriptions for visual content.',
      icon: Mic,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #C084FC 0%, #A855F7 50%, #9333EA 100%)',
      rating: 4.6,
      downloads: '7.6K',
      action: 'Learn More',
      tags: ['Audio', 'Description', 'Visual']
    },
    {
      id: 17,
      title: 'Closed Captions',
      description: 'Real-time caption generation with accuracy and customization.',
      icon: Mic,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #475569 0%, #334155 50%, #1E293B 100%)',
      rating: 4.8,
      downloads: '11.7K',
      action: 'Learn More',
      tags: ['Captions', 'Real-time', 'Text']
    },
    {
      id: 18,
      title: 'Focus Mode',
      description: 'Distraction-free interface with selective content highlighting.',
      icon: Eye,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #FB7185 0%, #F43F5E 50%, #E11D48 100%)',
      rating: 4.5,
      downloads: '8.1K',
      action: 'Learn More',
      tags: ['Focus', 'Distraction', 'Interface']
    },
    {
      id: 19,
      title: 'Reading Mode',
      description: 'Optimized text layout for improved reading comprehension and speed.',
      icon: Eye,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #1E3A8A 0%, #1E293B 50%, #0F172A 100%)',
      rating: 4.7,
      downloads: '9.8K',
      action: 'Learn More',
      tags: ['Reading', 'Text', 'Layout']
    },
    {
      id: 20,
      title: 'Dyslexia Support',
      description: 'Specialized fonts and formatting for users with dyslexia.',
      icon: Eye,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #65A30D 0%, #4D7C0F 50%, #365314 100%)',
      rating: 4.8,
      downloads: '6.9K',
      action: 'Learn More',
      tags: ['Dyslexia', 'Fonts', 'Reading']
    },
    {
      id: 21,
      title: 'Mind Control',
      description: 'EEG-based brain wave control for hands-free device operation.',
      icon: Brain,
      category: 'control',
      color: 'linear-gradient(135deg, #6D28D9 0%, #5B21B6 50%, #4C1D95 100%)',
      rating: 4.9,
      downloads: '3.2K',
      action: 'Learn More',
      tags: ['EEG', 'Brain', 'Hands-free']
    },
    {
      id: 22,
      title: 'Facial Recognition',
      description: 'Face-based control system for intuitive interaction.',
      icon: Camera,
      category: 'control',
      color: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
      rating: 4.6,
      downloads: '5.7K',
      action: 'Learn More',
      tags: ['Face', 'Recognition', 'Control']
    },
    {
      id: 23,
      title: 'Sip and Puff',
      description: 'Sip and puff technology for precise computer control.',
      icon: Mic,
      category: 'control',
      color: 'linear-gradient(135deg, #B91C1C 0%, #991B1B 50%, #7F1D1D 100%)',
      rating: 4.5,
      downloads: '3.1K',
      action: 'Learn More',
      tags: ['Sip', 'Puff', 'Control']
    },
    {
      id: 24,
      title: 'Touch Interface',
      description: 'Adaptive touch controls with pressure sensitivity and gesture support.',
      icon: Hand,
      category: 'control',
      color: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 50%, #1E3A8A 100%)',
      rating: 4.5,
      downloads: '8.3K',
      action: 'Learn More',
      tags: ['Touch', 'Interface', 'Gesture']
    },
    {
      id: 25,
      title: 'Switch Control',
      description: 'Alternative input methods using switches and adaptive devices.',
      icon: Hand,
      category: 'control',
      color: 'linear-gradient(135deg, #047857 0%, #065F46 50%, #064E3B 100%)',
      rating: 4.6,
      downloads: '6.1K',
      action: 'Learn More',
      tags: ['Switch', 'Alternative', 'Input']
    },
    {
      id: 26,
      title: 'Breath Control',
      description: 'Breath-based input system for users with limited mobility.',
      icon: Mic,
      category: 'control',
      color: 'linear-gradient(135deg, #C2410C 0%, #9A3412 50%, #7C2D12 100%)',
      rating: 4.4,
      downloads: '2.8K',
      action: 'Learn More',
      tags: ['Breath', 'Input', 'Mobility']
    },
    {
      id: 27,
      title: 'Head Tracking',
      description: 'Head movement tracking for cursor and navigation control.',
      icon: Camera,
      category: 'control',
      color: 'linear-gradient(135deg, #9333EA 0%, #8B5CF6 50%, #7C3AED 100%)',
      rating: 4.7,
      downloads: '4.9K',
      action: 'Learn More',
      tags: ['Head', 'Tracking', 'Navigation']
    },
    {
      id: 28,
      title: 'Memory Manager',
      description: 'Intelligent memory optimization for accessibility applications.',
      icon: Cpu,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #BE185D 0%, #DB2777 50%, #EC4899 100%)',
      rating: 4.7,
      downloads: '7.4K',
      action: 'Learn More',
      tags: ['Memory', 'Optimization', 'System']
    },
    {
      id: 29,
      title: 'CPU Accelerator',
      description: 'Hardware acceleration for faster accessibility processing.',
      icon: Cpu,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #4F46E5 0%, #4338CA 50%, #3730A3 100%)',
      rating: 4.8,
      downloads: '5.9K',
      action: 'Learn More',
      tags: ['CPU', 'Hardware', 'Speed']
    },
    {
      id: 30,
      title: 'GPU Enhancement',
      description: 'Graphics processing optimization for visual accessibility features.',
      icon: Cpu,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #0891B2 0%, #0E7490 50%, #155E75 100%)',
      rating: 4.6,
      downloads: '4.2K',
      action: 'Learn More',
      tags: ['GPU', 'Graphics', 'Visual']
    },
    {
      id: 31,
      title: 'Network Optimizer',
      description: 'Bandwidth management for smooth accessibility service delivery.',
      icon: Wifi,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #0F766E 0%, #115E59 50%, #134E4A 100%)',
      rating: 4.5,
      downloads: '6.8K',
      action: 'Learn More',
      tags: ['Network', 'Bandwidth', 'Optimization']
    },
    {
      id: 32,
      title: 'Cloud Sync',
      description: 'Seamless synchronization of accessibility settings across devices.',
      icon: Cloud,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #22C55E 0%, #16A34A 50%, #15803D 100%)',
      rating: 4.9,
      downloads: '12.3K',
      action: 'Learn More',
      tags: ['Cloud', 'Sync', 'Settings']
    },
    {
      id: 33,
      title: 'Security Shield',
      description: 'Advanced security for accessibility data and user privacy.',
      icon: Shield,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #4D7C0F 0%, #365314 50%, #1F2937 100%)',
      rating: 4.8,
      downloads: '9.7K',
      action: 'Learn More',
      tags: ['Security', 'Privacy', 'Protection']
    },
    {
      id: 34,
      title: 'Data Backup',
      description: 'Automatic backup of accessibility preferences and configurations.',
      icon: Database,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)',
      rating: 4.7,
      downloads: '8.5K',
      action: 'Learn More',
      tags: ['Backup', 'Data', 'Recovery']
    },
    {
      id: 35,
      title: 'Emotion Detection',
      description: 'AI-powered emotion recognition for adaptive user interfaces.',
      icon: Brain,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #BE123C 0%, #9F1239 50%, #881337 100%)',
      rating: 4.6,
      downloads: '4.1K',
      action: 'Learn More',
      tags: ['Emotion', 'AI', 'Adaptive']
    },
    {
      id: 36,
      title: 'Context Awareness',
      description: 'Intelligent context understanding for proactive assistance.',
      icon: Brain,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #C026D3 0%, #A21CAF 50%, #86198F 100%)',
      rating: 4.8,
      downloads: '6.3K',
      action: 'Learn More',
      tags: ['Context', 'AI', 'Proactive']
    },
    {
      id: 37,
      title: 'Pattern Recognition',
      description: 'Advanced pattern detection for user behavior analysis.',
      icon: Brain,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #0284C7 0%, #0369A1 50%, #075985 100%)',
      rating: 4.7,
      downloads: '5.8K',
      action: 'Learn More',
      tags: ['Pattern', 'AI', 'Analysis']
    },
    {
      id: 38,
      title: 'Haptic Feedback',
      description: 'Touch-based feedback system for enhanced interaction.',
      icon: Hand,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #7C2D12 0%, #92400E 50%, #B45309 100%)',
      rating: 4.4,
      downloads: '5.1K',
      action: 'Learn More',
      tags: ['Haptic', 'Touch', 'Feedback']
    },
    {
      id: 39,
      title: 'Language Translation',
      description: 'Instant translation for multilingual accessibility support.',
      icon: Mic,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #64748B 0%, #475569 50%, #334155 100%)',
      rating: 4.8,
      downloads: '10.6K',
      action: 'Learn More',
      tags: ['Translation', 'Language', 'Multi']
    },
    {
      id: 40,
      title: 'Visual Guidance',
      description: 'AI-powered visual assistance for navigation and object identification.',
      icon: Camera,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #FF7F50 0%, #FF6B6B 50%, #FF5252 100%)',
      rating: 4.6,
      downloads: '7.2K',
      action: 'Learn More',
      tags: ['Visual', 'Guidance', 'Navigation']
    },
    {
      id: 41,
      title: 'Speech Analysis',
      description: 'Real-time speech pattern analysis for communication enhancement.',
      icon: Mic,
      category: 'ai-powered',
      color: 'linear-gradient(135deg, #4338CA 0%, #3730A3 50%, #312E81 100%)',
      rating: 4.5,
      downloads: '3.9K',
      action: 'Learn More',
      tags: ['Speech', 'Analysis', 'Communication']
    },
    {
      id: 42,
      title: 'Audio Enhancement',
      description: 'Advanced audio processing for clarity and noise reduction.',
      icon: Mic,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #EA580C 0%, #DC2626 50%, #B91C1C 100%)',
      rating: 4.7,
      downloads: '9.3K',
      action: 'Learn More',
      tags: ['Audio', 'Enhancement', 'Clarity']
    },
    {
      id: 43,
      title: 'Visual Alerts',
      description: 'Customizable visual notifications and alert systems.',
      icon: Eye,
      category: 'accessibility',
      color: 'linear-gradient(135deg, #15803D 0%, #166534 50%, #14532D 100%)',
      rating: 4.5,
      downloads: '6.7K',
      action: 'Learn More',
      tags: ['Visual', 'Alerts', 'Notifications']
    },
    {
      id: 44,
      title: 'Voice Commands',
      description: 'Comprehensive voice control for all system functions.',
      icon: Mic,
      category: 'control',
      color: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
      rating: 4.8,
      downloads: '11.4K',
      action: 'Learn More',
      tags: ['Voice', 'Commands', 'Control']
    },
    {
      id: 45,
      title: 'Gesture Recognition',
      description: 'Advanced gesture detection for natural device interaction.',
      icon: Hand,
      category: 'control',
      color: 'linear-gradient(135deg, #7E22CE 0%, #6D28D9 50%, #5B21B6 100%)',
      rating: 4.6,
      downloads: '8.8K',
      action: 'Learn More',
      tags: ['Gesture', 'Recognition', 'Natural']
    },
    {
      id: 46,
      title: 'Motion Detection',
      description: 'Precise motion tracking for accessibility applications.',
      icon: Camera,
      category: 'control',
      color: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1E40AF 100%)',
      rating: 4.7,
      downloads: '7.5K',
      action: 'Learn More',
      tags: ['Motion', 'Detection', 'Tracking']
    },
    {
      id: 47,
      title: 'System Monitor',
      description: 'Real-time system performance monitoring and optimization.',
      icon: Cpu,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #166534 0%, #14532D 50%, #052E16 100%)',
      rating: 4.5,
      downloads: '6.2K',
      action: 'Learn More',
      tags: ['Monitor', 'Performance', 'Real-time']
    },
    {
      id: 48,
      title: 'Resource Manager',
      description: 'Intelligent resource allocation for accessibility features.',
      icon: Database,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 50%, #991B1B 100%)',
      rating: 4.6,
      downloads: '5.4K',
      action: 'Learn More',
      tags: ['Resource', 'Management', 'Allocation']
    },
    {
      id: 49,
      title: 'Update Manager',
      description: 'Automatic updates for accessibility features and improvements.',
      icon: Cloud,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #991B1B 0%, #7F1D1D 50%, #450A0A 100%)',
      rating: 4.7,
      downloads: '8.9K',
      action: 'Learn More',
      tags: ['Updates', 'Automatic', 'Improvement']
    },
    {
      id: 50,
      title: 'Accessibility Analytics',
      description: 'Comprehensive analytics for accessibility usage and optimization.',
      icon: Database,
      category: 'enhancement',
      color: 'linear-gradient(135deg, #DB2777 0%, #BE185D 50%, #9F1239 100%)',
      rating: 4.8,
      downloads: '7.1K',
      action: 'Learn More',
      tags: ['Analytics', 'Usage', 'Optimization']
    }
  ];

  const filteredFeatures = features.filter(feature => {
    const matchesSearch = feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feature.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feature.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || feature.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs with Complex Animation */}
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-30 animate-pulse ${isDarkMode ? 'bg-blue-600' : 'bg-blue-400'} shadow-2xl`}>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20"></div>
        </div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-30 animate-pulse delay-1000 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-400'} shadow-2xl`}>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 delay-1000"></div>
        </div>
        
        {/* Additional Floating Elements */}
        <div className={`absolute top-1/2 left-1/4 w-48 h-48 rounded-full opacity-20 animate-bounce ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-400'} shadow-xl`}></div>
        <div className={`absolute top-1/3 right-1/4 w-36 h-36 rounded-full opacity-25 animate-pulse delay-500 ${isDarkMode ? 'bg-cyan-600' : 'bg-cyan-400'} shadow-lg`}></div>
        
        {/* Moving Gradient Orbs */}
        <div className="absolute top-10 left-1/2 w-64 h-64 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}>
          <div className={`w-full h-full rounded-full bg-gradient-to-r ${isDarkMode ? 'from-blue-600 to-purple-600' : 'from-blue-400 to-purple-400'} shadow-2xl`}></div>
        </div>
        <div className="absolute bottom-10 left-1/3 w-56 h-56 rounded-full opacity-20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${isDarkMode ? 'from-purple-600 to-indigo-600' : 'from-purple-400 to-indigo-400'} shadow-2xl`}></div>
        </div>
        
        {/* Particle Effects */}
        <div className="absolute top-20 right-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-indigo-400 rounded-full opacity-40 animate-pulse delay-700"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-70 animate-ping"></div>
        
        {/* Advanced Features-Themed Elements */}
        <div className="absolute top-32 right-20 w-8 h-8 border-2 border-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 border-2 border-purple-400 rounded-lg opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-indigo-400 rounded opacity-50 animate-bounce delay-500"></div>
        
        {/* Wave Effects */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <div className={`h-full bg-gradient-to-t ${isDarkMode ? 'from-blue-600 to-transparent' : 'from-blue-400 to-transparent'} animate-pulse`}></div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-24 opacity-10">
          <div className={`h-full bg-gradient-to-b ${isDarkMode ? 'from-purple-600 to-transparent' : 'from-purple-400 to-transparent'} animate-pulse delay-500`}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div 
                className="relative group"
                style={{
                  position: 'relative',
                  transform: `translate(${iconPosition.x}px, ${iconPosition.y}px)`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
                <div 
                  className="relative bg-gradient-to-r from-[#142C52] to-[#16808D] p-3 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 cursor-move select-none"
                  onMouseDown={handleMouseDown}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  <Zap className="h-8 w-8 text-white transform transition-all duration-300 group-hover:scale-105" />
                </div>
                {/* Additional hover effect ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                {/* Floating animation when not dragging */}
                <div className={`absolute inset-0 rounded-full ${isDragging ? '' : 'animate-bounce'}`} style={{ animationDuration: '3s' }}></div>
              </div>
              <h1 className="text-4xl font-bold">
                <span style={{ color: '#16808D' }}>Advanced</span>
                <span className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : ''
                }`} style={{ color: isDarkMode ? '#ffffff' : '#000000' }}> Features</span>
              </h1>
            </div>
          </div>
          <p className={`text-xl max-w-3xl mx-auto italic transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover cutting-edge accessibility technologies and AI-powered features designed to transform your digital experience. From smart assistants to voice control and gesture recognition, we're pioneering truly innovative inclusive technology that adapts to your unique needs and empowers revolutionary digital interactions.
          </p>
        </div>

        {/* Search Bar and Categories */}
        <div className="mb-8">
          {/* First Row: Search Bar */}
          <div className="flex justify-center mb-6">
            <div className={`w-full max-w-2xl p-3.5 rounded-xl shadow-lg`}>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4.5 w-4.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search advanced features and accessibility tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-[#16808D] text-white' : 'bg-gray-50 border-[#16808D] text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#16808D] text-base`}
                />
              </div>
            </div>
          </div>

          {/* Second Row: Categories */}
          <div className="grid grid-cols-5 gap-4">
            {/* All Features Category */}
            <div 
              onClick={() => setSelectedCategory('all')}
              className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer h-full ${
                selectedCategory === 'all' ? 'ring-2 ring-[#16808D]' : ''
              } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <Zap className="h-8 w-8 mr-2" style={{ color: '#16808D' }} />
              <h2 className={`text-base font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                All Features
              </h2>
            </div>

            {/* Other Categories */}
            {categories.slice(1).map((category) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center cursor-pointer h-full ${
                    selectedCategory === category.id ? 'ring-2' : ''
                  } ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  style={selectedCategory === category.id ? { '--tw-ring-color': category.color } : {}}
                >
                  <Icon className="h-8 w-8 mr-2" style={{ color: category.color }} />
                  <h2 className={`text-base font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Description Content */}
        <div className="mb-12">
          {selectedCategory === 'all' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#16808D]/10 to-purple-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Zap className="h-16 w-16 text-[#16808D] mx-auto mb-4 animate-bounce" style={{ color: '#16808D' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#16808D] to-purple-600 bg-clip-text text-transparent">
                  <span style={{ color: '#16808D' }}>All Features</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Comprehensive collection of advanced accessibility features including AI-powered technologies, accessibility tools, control methods, and system enhancements. We provide innovative solutions for inclusive digital experiences and adaptive interactions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    AI Technologies
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Accessibility Tools
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Control Methods
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCategory === 'ai-powered' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-bounce" style={{ color: 'purple' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  <span style={{ color: 'purple' }}>AI-Powered Features</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Advanced artificial intelligence technologies including smart assistants, predictive text, voice recognition, and machine learning algorithms. We provide intelligent automation and adaptive learning for personalized accessibility experiences.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Smart Assistants
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Voice Recognition
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Machine Learning
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCategory === 'accessibility' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Eye className="h-16 w-16 text-green-600 mx-auto mb-4 animate-bounce" style={{ color: 'green' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  <span style={{ color: 'green' }}>Accessibility Features</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Comprehensive accessibility tools including screen readers, text-to-speech, visual aids, and cognitive support systems. We ensure inclusive design and equal access for users with diverse abilities and accessibility needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-900/50 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                    Screen Readers
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-teal-900/50 text-teal-300 border border-teal-700' : 'bg-teal-100 text-teal-700 border border-teal-200'}`}>
                    Visual Aids
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                    Cognitive Support
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCategory === 'control' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Hand className="h-16 w-16 text-orange-600 mx-auto mb-4 animate-bounce" style={{ color: 'orange' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  <span style={{ color: 'orange' }}>Control Methods</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Innovative control methods including eye tracking, gesture recognition, voice commands, and adaptive input systems. We provide multiple interaction options for users with mobility or dexterity challenges.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-orange-900/50 text-orange-300 border border-orange-700' : 'bg-orange-100 text-orange-700 border border-orange-200'}`}>
                    Eye Tracking
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'}`}>
                    Gesture Recognition
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                    Voice Commands
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCategory === 'enhancement' && (
            <div className="text-center py-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <Settings className="h-16 w-16 text-red-600 mx-auto mb-4 animate-bounce" style={{ color: 'red' }} />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  <span style={{ color: 'red' }}>System Enhancements</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto italic leading-relaxed mb-4">
                  Advanced system enhancements including performance optimization, memory management, and resource allocation for improved accessibility. We optimize system resources to ensure smooth and responsive accessibility features.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                    Performance Optimization
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-pink-900/50 text-pink-300 border border-pink-700' : 'bg-pink-100 text-pink-700 border border-pink-200'}`}>
                    Memory Management
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                    Resource Allocation
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                style={{
                  transform: hoveredCard === feature.id ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {/* Card Header */}
                <div className={`p-6 text-white relative overflow-hidden`}
                     style={{ background: feature.color }}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-3">{feature.description}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {feature.tags.length > 3 && (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          +{feature.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4 text-blue-500" />
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature.downloads}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-white hover:shadow-lg transform hover:scale-105`}
                          style={{ background: feature.color }}>
                    {feature.action}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inspirational Quote Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-indigo-600 pl-6 py-4">
            "Advanced features are not just about technology, but about human potential. Every innovation in accessibility is a bridge that connects possibility with reality, empowering every individual to navigate their world with dignity, independence, and confidence."
          </blockquote>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            When technology meets compassion, barriers dissolve and possibilities emerge. These advanced features are more than tools—they are pathways to freedom, enabling every person to write their own story of success and independence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures;
