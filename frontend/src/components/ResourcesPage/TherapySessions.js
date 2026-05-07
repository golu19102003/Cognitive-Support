import React, { useState, useEffect } from 'react';
import { 
  Users, Video, Phone, Calendar, Clock, Star, 
  ExternalLink, Shield, Heart, MessageCircle, Globe,
  ChevronRight, Award, CheckCircle, Headphones
} from 'lucide-react';

const TherapySessions = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookingModal, setBookingModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: 'video',
    concern: '',
    emergency: false
  });

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setIsDarkMode(theme === 'dark');
    };

    checkTheme();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(checkTheme);

    return () => mediaQuery.removeListener(checkTheme);
  }, []);

  const therapyCategories = [
    { id: 'online-therapy', name: 'Online Therapy', icon: Video, color: 'from-blue-500 to-blue-600' },
    { id: 'counselling', name: 'Counselling', icon: MessageCircle, color: 'from-green-500 to-green-600' },
    { id: 'psychiatry', name: 'Psychiatry', icon: Users, color: 'from-purple-500 to-purple-600' },
    { id: 'specialized', name: 'Specialized Care', icon: Heart, color: 'from-pink-500 to-pink-600' }
  ];

  const therapyResources = [
    {
      category: 'online-therapy',
      name: 'BetterHelp',
      url: 'https://www.betterhelp.com',
      description: 'World\'s largest counseling service with professional therapists',
      features: ['24/7 Access', 'Video/Phone/Chat', 'Licensed Therapists', 'Affordable Plans'],
      rating: 4.8,
      icon: Video
    },
    {
      category: 'online-therapy',
      name: 'Talkspace',
      url: 'https://www.talkspace.com',
      description: 'Online therapy platform with licensed mental health professionals',
      features: ['Text Therapy', 'Video Sessions', 'Psychiatry Services', 'Insurance Accepted'],
      rating: 4.7,
      icon: MessageCircle
    },
    {
      category: 'online-therapy',
      name: '7 Cups',
      url: 'https://www.7cups.com',
      description: 'Free emotional support and counseling from trained listeners',
      features: ['Free Support', '24/7 Availability', 'Anonymous Chat', 'Trained Listeners'],
      rating: 4.6,
      icon: Heart
    },
    {
      category: 'online-therapy',
      name: 'Online-Therapy.com',
      url: 'https://www.online-therapy.com',
      description: 'Comprehensive online therapy with worksheets and live sessions',
      features: ['CBT Therapy', 'Worksheets', 'Live Sessions', 'Self-Help Tools'],
      rating: 4.5,
      icon: Users
    },
    {
      category: 'counselling',
      name: 'TherapyRoute',
      url: 'https://www.therapyroute.com',
      description: 'Directory of mental health professionals and therapy services',
      features: ['Therapist Directory', 'Specializations', 'Reviews', 'Online Booking'],
      rating: 4.4,
      icon: Globe
    },
    {
      category: 'counselling',
      name: 'Psychology Today',
      url: 'https://www.psychologytoday.com',
      description: 'Find therapists, psychiatrists, and treatment centers',
      features: ['Professional Directory', 'Articles', 'Self-Tests', 'Expert Advice'],
      rating: 4.9,
      icon: Users
    },
    {
      category: 'psychiatry',
      name: 'MyTherapist',
      url: 'https://www.mytherapist.com',
      description: 'Online therapy and counseling with licensed professionals',
      features: ['Licensed Therapists', 'Video Sessions', 'Secure Platform', 'Flexible Scheduling'],
      rating: 4.6,
      icon: Video
    },
    {
      category: 'psychiatry',
      name: 'TherapyDen',
      url: 'https://www.therapyden.com',
      description: 'Inclusive therapy directory with diverse mental health professionals',
      features: ['Inclusive Platform', 'Diverse Therapists', 'Specialized Care', 'Affordable Options'],
      rating: 4.7,
      icon: Heart
    },
    {
      category: 'specialized',
      name: 'OpenPath Collective',
      url: 'https://www.openpathcollective.org',
      description: 'Affordable mental health care for low-income individuals',
      features: ['Low-Cost Therapy', '$30-60 Sessions', 'Licensed Therapists', 'Nationwide Network'],
      rating: 4.8,
      icon: Shield
    },
    {
      category: 'specialized',
      name: 'Regain',
      url: 'https://www.regain.us',
      description: 'Online counseling for couples and relationship issues',
      features: ['Couples Therapy', 'Relationship Counseling', 'Licensed Therapists', 'Private Sessions'],
      rating: 4.7,
      icon: Heart
    },
    {
      category: 'specialized',
      name: 'Teen Counseling',
      url: 'https://www.teencounseling.com',
      description: 'Online therapy and counseling services for teenagers',
      features: ['Teen-Focused', 'Parental Involvement', 'Licensed Therapists', 'Safe Environment'],
      rating: 4.6,
      icon: Users
    },
    {
      category: 'psychiatry',
      name: 'Ginger',
      url: 'https://www.ginger.com',
      description: 'On-demand mental health care and coaching',
      features: ['24/7 Support', 'Coaching', 'Psychiatry', 'Medication Management'],
      rating: 4.5,
      icon: Phone
    },
    {
      category: 'psychiatry',
      name: 'Amwell',
      url: 'https://www.amwell.com',
      description: 'Telehealth services including mental health and therapy',
      features: ['Video Visits', 'Board-Certified Doctors', 'Insurance Accepted', 'Prescription Services'],
      rating: 4.4,
      icon: Video
    },
    {
      category: 'psychiatry',
      name: 'Doctor On Demand',
      url: 'https://www.doctorondemand.com',
      description: 'Virtual medical and mental health care services',
      features: ['Video Visits', 'Urgent Care', 'Therapy', 'Psychiatry'],
      rating: 4.6,
      icon: Phone
    },
    {
      category: 'psychiatry',
      name: 'Lyra Health',
      url: 'https://www.lyrahealth.com',
      description: 'Evidence-based mental health care for employees',
      features: ['Evidence-Based', 'Employee Programs', 'Global Coverage', 'Quality Care'],
      rating: 4.7,
      icon: Shield
    },
    {
      category: 'specialized',
      name: 'Headspace Therapy',
      url: 'https://www.headspace.com/therapy',
      description: 'Meditation and mindfulness with therapy options',
      features: ['Meditation', 'Mindfulness', 'Coaching', 'Therapy Integration'],
      rating: 4.8,
      icon: Headphones
    },
    {
      category: 'psychiatry',
      name: 'Cerebral',
      url: 'https://www.cerebral.com',
      description: 'Online mental health care and medication management',
      features: ['Medication Management', 'Therapy', 'Care Coordination', 'Insurance Accepted'],
      rating: 4.5,
      icon: Users
    },
    {
      category: 'psychiatry',
      name: 'MDLive',
      url: 'https://www.mdlive.com',
      description: 'Virtual healthcare including mental health services',
      features: ['Virtual Visits', 'Mental Health', 'Prescriptions', '24/7 Access'],
      rating: 4.4,
      icon: Video
    },
    {
      category: 'counselling',
      name: 'Zocdoc Psychiatrists',
      url: 'https://www.zocdoc.com/psychiatrists',
      description: 'Find and book appointments with psychiatrists',
      features: ['Appointment Booking', 'Reviews', 'Insurance Check', 'Real Availability'],
      rating: 4.6,
      icon: Calendar
    },
    {
      category: 'counselling',
      name: 'Practo Consult',
      url: 'https://www.practo.com/consult',
      description: 'Online doctor consultations including mental health',
      features: ['Instant Consultation', 'Specialist Doctors', 'Digital Prescriptions', 'Follow-up Care'],
      rating: 4.5,
      icon: Phone
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? therapyResources 
    : therapyResources.filter(resource => resource.category === selectedCategory);

  const handleBookSession = (platformName) => {
    setSelectedPlatform(platformName);
    setBookingModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', { ...formData, platform: selectedPlatform });
    alert(`Booking request submitted for ${selectedPlatform}! We'll contact you soon.`);
    setBookingModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      sessionType: 'video',
      concern: '',
      emergency: false
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold text-white ml-4">Therapy Sessions</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Connect with licensed therapists and mental health professionals through secure online platforms
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">20+ Platforms</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Licensed Professionals</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">24/7 Support</span>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Find a Therapist
            </button>
          </div>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Services
          </button>
          {therapyCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Therapy Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            const categoryColor = therapyCategories.find(c => c.id === resource.category)?.color || 'from-blue-500 to-blue-600';
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
                }`}
              >
                {/* Card Header with Gradient Border */}
                <div className={`h-2 bg-gradient-to-r ${categoryColor}`}></div>
                
                {/* Card Content */}
                <div className="p-8">
                  {/* Icon and Rating */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${categoryColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold text-yellow-700">
                          {resource.rating}
                        </span>
                      </div>
                      <span className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors duration-300`}>
                    {resource.name}
                  </h3>
                  
                  {/* Description */}
                  <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {resource.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {resource.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0`}>
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Visit Platform</span>
                    </a>
                    <button
                      onClick={() => handleBookSession(resource.name)}
                      className={`flex-1 inline-flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg' 
                          : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg'
                      }`}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Session</span>
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* How It Works Section */}
        <div className={`mt-16 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              How Therapy Sessions Work
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Get started with professional mental health support in just a few simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Choose Platform</h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Select from our curated list of licensed therapy platforms
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Book Session</h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Schedule your appointment at your preferred time and date
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Attend Session</h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Connect with your therapist via video, phone, or chat
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get Support</h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Receive ongoing care and track your mental health journey
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Benefits of Online Therapy
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Flexible Scheduling</h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Book sessions at times that work for you, including evenings and weekends
              </p>
            </div>
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <Shield className="h-8 w-8 text-green-600 mb-4" />
              <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Complete Privacy</h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                HIPAA-compliant platforms ensure your sessions are completely confidential
              </p>
            </div>
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <Users className="h-8 w-8 text-purple-600 mb-4" />
              <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Licensed Professionals</h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                All therapists are verified, licensed, and experienced in mental health care
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Support Section */}
        <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Emergency Mental Health Support
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              If you're in crisis or need immediate help, these resources are available 24/7
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="tel:988"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-red-900/50 text-red-300 hover:bg-red-900/70' : 'bg-red-50 text-red-700 hover:bg-red-100'
                }`}
              >
                <Phone className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">988 Suicide & Crisis Lifeline</div>
                <div className="text-sm">Call or Text 988</div>
              </a>
              <a
                href="https://www.crisistextline.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-900/70' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">Crisis Text Line</div>
                <div className="text-sm">Text HOME to 741741</div>
              </a>
              <a
                href="https://www.nimh.nih.gov/health/find-help"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-purple-900/50 text-purple-300 hover:bg-purple-900/70' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                <Globe className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold">NIMH Help Resources</div>
                <div className="text-sm">Find Local Help</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {bookingModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setBookingModal(false)}
        >
          <div 
            className={`w-full max-w-2xl rounded-3xl ${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-2xl max-h-[85vh] flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`px-8 py-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center`}>
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Book Your Session
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Platform: {selectedPlatform}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setBookingModal(false)}
                  className={`p-3 rounded-xl transition-all ${
                    isDarkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <ChevronRight className="h-5 w-5 rotate-180" />
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <form onSubmit={handleFormSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Session Type *
                      </label>
                      <select
                        name="sessionType"
                        value={formData.sessionType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        }`}
                      >
                        <option value="video">Video Call</option>
                        <option value="phone">Phone Call</option>
                        <option value="chat">Text Chat</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Scheduling Section */}
                <div>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Schedule Your Session
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        }`}
                      >
                        <option value="">Select a time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Additional Information
                  </h4>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      What brings you to therapy? (Optional)
                    </label>
                    <textarea
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                      placeholder="Briefly describe what you'd like to work on..."
                    />
                  </div>

                  <div className="mt-6 p-4 rounded-xl border ${
                    isDarkMode 
                      ? 'bg-red-900/20 border-red-800/50' 
                      : 'bg-red-50 border-red-200'
                  }">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="emergency"
                        id="emergency"
                        checked={formData.emergency}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500 mt-0.5"
                      />
                      <label htmlFor="emergency" className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="font-semibold text-red-600">Emergency Situation</span>
                        <br />
                        <span className="text-xs">Check this if you need immediate assistance</span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer - Fixed */}
            <div className={`px-8 py-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setBookingModal(false)}
                  className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all ${
                    isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="flex-1 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Booking Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TherapySessions;
