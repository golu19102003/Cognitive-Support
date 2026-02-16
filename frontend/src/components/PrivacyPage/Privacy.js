import React, { useState, useEffect, useRef } from 'react';
import { Shield, Eye, Lock, Database, AlertTriangle, CheckCircle, User, Mail, Phone, MapPin, Calendar, ChevronDown, ChevronUp, RefreshCw, Download, Share2, Settings, Activity, Zap, Globe, Fingerprint, Key, ShieldCheck, Cpu, Wifi, Server, HardDrive, Cloud, UserCheck, FileLock, Camera, Mic, Location, CreditCard, Smartphone, Monitor, Tablet, Watch, Award, Target, Clock, Video, MessageSquare, Users } from 'lucide-react';

const Privacy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [consentGiven, setConsentGiven] = useState({});
  const [dataUsage, setDataUsage] = useState({
    storage: '2.3 GB',
    bandwidth: '156 MB',
    requests: '1,247',
    aiProcessing: '892 MB',
    securityScore: 98,
    lastScan: new Date().toLocaleString(),
    encryptionLevel: 'AES-256',
    backupFrequency: 'Every 6 hours',
    dataRetention: '30 days',
    activeDevices: 5,
    secureConnections: 12,
    blockedThreats: 47,
    dataAnonymized: '89.2%'
  });

  const [aiInsights, setAiInsights] = useState([
    { type: 'security', message: 'AI detected unusual login pattern - 2FA recommended', severity: 'warning', time: '2 mins ago', confidence: 92 },
    { type: 'privacy', message: 'Your data sharing preferences are optimal', severity: 'success', time: '1 hour ago', confidence: 98 },
    { type: 'performance', message: 'AI processing efficiency improved by 12%', severity: 'info', time: '3 hours ago', confidence: 87 },
    { type: 'compliance', message: 'GDPR compliance score: 96%', severity: 'success', time: '6 hours ago', confidence: 95 },
    { type: 'threat', message: 'New zero-day vulnerability detected in system', severity: 'critical', time: '5 mins ago', confidence: 99 }
  ]);

  const [realTimeMonitoring, setRealTimeMonitoring] = useState({
    activeConnections: 3,
    dataTransfers: 0,
    encryptionStatus: 'active',
    threatLevel: 'low',
    lastSecurityUpdate: '2026-02-16 08:00:00',
    networkLatency: '12ms',
    serverUptime: '99.98%',
    activeSessions: 8,
    blockedIPs: 156,
    firewallRules: 42,
    sslCertificates: 3
  });

  const [deviceSecurity, setDeviceSecurity] = useState([
    { device: 'Desktop', status: 'secure', lastScan: '2 hours ago', threats: 0 },
    { device: 'Mobile', status: 'secure', lastScan: '1 hour ago', threats: 0 },
    { device: 'Tablet', status: 'warning', lastScan: '6 hours ago', threats: 1 }
  ]);

  const [privacyMetrics, setPrivacyMetrics] = useState({
    dataMinimization: 94,
    consentManagement: 98,
    anonymizationLevel: 92,
    retentionCompliance: 96,
    accessControl: 99,
    encryptionCoverage: 100
  });

  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMonitoring(prev => ({
        ...prev,
        dataTransfers: Math.floor(Math.random() * 10),
        networkLatency: `${Math.floor(Math.random() * 20 + 5)}ms`,
        activeSessions: Math.floor(Math.random() * 5 + 5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleConsent = (type) => {
    setConsentGiven(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const exportData = () => {
    alert('Your data is being prepared for download...');
  };

  const runSecurityScan = () => {
    setRealTimeMonitoring(prev => ({
      ...prev,
      lastSecurityUpdate: new Date().toLocaleString(),
      blockedThreats: prev.blockedThreats + Math.floor(Math.random() * 5)
    }));
  };

  const privacySections = [
    {
      id: 'data-collection',
      title: '1. Information We Collect',
      icon: Database,
      color: 'text-blue-600',
      description: 'We collect minimal data necessary to provide our cognitive support services',
      content: [
        'Personal identifiers (name, email, contact details)',
        'Health information (with explicit consent)',
        'Usage analytics and interaction patterns',
        'Device and browser information',
        'Accessibility preferences and settings',
        'AI interaction history (anonymized)',
        'Location data (with permission)',
        'Payment information (encrypted)',
        'Communication logs (secure)',
        'Therapy session data (protected)',
        'Emergency contact information',
        'Medication and treatment history'
      ],
      legalBasis: ['Consent', 'Contractual Necessity', 'Legal Obligation', 'Legitimate Interest'],
      retentionPeriod: 'Varies by type (6 months to 7 years)',
      dataSources: ['Direct from user', 'Healthcare providers', 'Device sensors', 'User interactions']
    },
    {
      id: 'data-usage',
      title: '2. How We Use Your Information',
      icon: Settings,
      color: 'text-green-600',
      description: 'Your data is used exclusively for enhancing your cognitive support experience',
      content: [
        'Personalized cognitive support services',
        'AI-driven assistance and recommendations',
        'Therapy session management',
        'Care plan optimization',
        'Accessibility feature enhancement',
        'Research and development (anonymized data)',
        'Legal compliance and reporting',
        'Emergency response coordination',
        'Progress tracking and analytics',
        'Medication reminders and management',
        'Family caregiver coordination',
        'Healthcare provider communication'
      ],
      purposeCategories: ['Service Delivery', 'Personalization', 'Safety', 'Research', 'Compliance'],
      automatedDecisions: ['AI recommendations', 'Risk assessments', 'Personalization algorithms'],
      thirdPartySharing: ['Only with explicit consent', 'Healthcare providers', 'Emergency services']
    },
    {
      id: 'data-protection',
      title: '3. Data Security & Protection',
      icon: Shield,
      color: 'text-purple-600',
      description: 'Enterprise-grade security measures protect your data 24/7',
      content: [
        '256-bit SSL encryption for all transmissions',
        'Firebase security with role-based access',
        'Regular security audits and penetration testing',
        'GDPR and HIPAA compliance measures',
        'Automatic data backups and recovery',
        'Secure API endpoints with rate limiting',
        'Employee background checks and training',
        'Multi-factor authentication required',
        'End-to-end encryption for sensitive data',
        'Zero-knowledge architecture implementation',
        'Regular vulnerability scanning',
        'Incident response procedures in place'
      ],
      securityMeasures: ['Encryption', 'Access Controls', 'Monitoring', 'Backup Systems', 'Training'],
      certifications: ['GDPR', 'HIPAA', 'ISO 27001', 'SOC 2 Type II'],
      incidentResponse: '24-hour response time for security incidents'
    },
    {
      id: 'user-rights',
      title: '4. Your Rights & Controls',
      icon: User,
      color: 'text-orange-600',
      description: 'You have complete control over your personal information',
      content: [
        'Access and download your personal data',
        'Correct inaccurate information',
        'Delete your account and all associated data',
        'Opt-out of marketing communications',
        'Control data sharing preferences',
        'Request data portability',
        'File complaints with regulatory authorities',
        'Restrict processing of sensitive data',
        'Object to automated decision making',
        'Withdraw consent at any time',
        'Request erasure of minor\'s data',
        'Access to transparency reports'
      ],
      exerciseMethods: ['User dashboard', 'Written request', 'Email support', 'Phone support'],
      responseTime: 'Within 30 days for most requests',
      appealProcess: 'Available for denied requests'
    },
    {
      id: 'cookies-tracking',
      title: '5. Cookies & Tracking Technologies',
      icon: Eye,
      color: 'text-indigo-600',
      description: 'We use minimal tracking necessary for service functionality',
      content: [
        'Essential cookies for platform functionality',
        'Performance cookies for analytics',
        'Personalization cookies for user experience',
        'Marketing cookies (with consent)',
        'Third-party analytics (anonymized data)',
        'Session tracking for security',
        'A/B testing for feature improvement',
        'Cross-device synchronization',
        'Preference storage',
        'Security token management',
        'Load balancing optimization',
        'Error tracking and debugging'
      ],
      cookieTypes: ['Essential', 'Performance', 'Functional', 'Targeting', 'Social Media'],
      lifespan: 'Session to 1 year depending on type',
      managementOptions: ['Browser settings', 'Platform preferences', 'Consent management']
    },
    {
      id: 'children-privacy',
      title: '6. Children & Special Protection',
      icon: Lock,
      color: 'text-red-600',
      description: 'Enhanced protection for minors and vulnerable users',
      content: [
        'Parental consent for users under 13',
        'Enhanced privacy for minors',
        'Limited data collection from children',
        'No marketing to underage users',
        'Special educational user protections',
        'Guardian account management',
        'Age-appropriate content filtering',
        'Geolocation restrictions for minors',
        'Enhanced parental controls',
        'School integration safeguards',
        'Special needs accommodations',
        'Emergency override procedures'
      ],
      ageVerification: 'Required for users under 18',
      parentalControls: ['Activity monitoring', 'Content filtering', 'Time restrictions'],
      educationalCompliance: ['FERPA', 'COPPA', 'State education laws']
    },
    {
      id: 'international-data',
      title: '7. International Data Transfers',
      icon: Globe,
      color: 'text-teal-600',
      description: 'Secure international data handling with full compliance',
      content: [
        'Data stored in secure cloud regions',
        'Adequacy decisions for approved countries',
        'Standard Contractual Clauses (SCCs)',
        'Binding Corporate Rules (BCRs)',
        'EU-US Data Privacy Framework compliance',
        'UK International Data Transfer Agreement',
        'Swiss-U.S. Privacy Shield participation',
        'Regional data residency options',
        'Cross-border encryption protocols',
        'International incident coordination',
        'Global privacy management system',
        'Multi-jurisdictional compliance framework'
      ],
      transferMechanisms: ['Adequacy', 'SCCs', 'BCRs', 'Derogations'],
      safeguards: ['Encryption', 'Contractual protections', 'Access controls'],
      jurisdictions: ['EU', 'UK', 'US', 'Canada', 'Switzerland', 'Australia']
    },
    {
      id: 'data-retention',
      title: '8. Data Retention & Deletion',
      icon: Calendar,
      color: 'text-emerald-600',
      description: 'Clear policies for data lifecycle management',
      content: [
        'Minimum necessary retention periods',
        'Automatic deletion of expired data',
        'Legal hold procedures for litigation',
        'Archive policies for inactive accounts',
        'Right to be forgotten implementation',
        'Certified data destruction methods',
        'Retention schedule documentation',
        'Data minimization principles',
        'Secure deletion verification',
        'Backup retention policies',
        'Audit trail maintenance',
        'Compliance reporting systems'
      ],
      retentionSchedule: {
        'User accounts': '7 years after deletion',
        'Health data': 'As required by law',
        'Analytics data': '25 months',
        'Support tickets': '3 years',
        'Financial records': '7 years'
      },
      deletionMethods: ['Cryptographic erasure', 'Physical destruction', 'Overwriting'],
      verificationProcess: 'Automated and manual verification'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#CCE7EC] to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#147783] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#147783] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#147783] opacity-5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#147783] via-teal-600 to-[#147783] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent">Privacy & Security Center</h1>
                <p className="text-sm text-gray-600">Advanced AI-Powered Data Protection</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-500 hover:text-[#147783] hover:bg-[#CCE7EC] rounded-lg transition-all duration-300">
                <RefreshCw className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-[#147783] hover:bg-[#CCE7EC] rounded-lg transition-all duration-300">
                <Download className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-[#147783] hover:bg-[#CCE7EC] rounded-lg transition-all duration-300">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-[#147783] hover:bg-[#CCE7EC] rounded-lg transition-all duration-300">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Ultra-Advanced Security Score Dashboard */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent">AI Security Intelligence</h2>
            <button 
              onClick={runSecurityScan}
              className="px-6 py-3 bg-gradient-to-r from-[#147783] to-teal-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <ShieldCheck className="h-5 w-5" />
              <span>Run Security Scan</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#CCE7EC] to-teal-50 rounded-xl p-6 border border-[#147783]/20 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#147783] to-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-[#147783] mb-2">Security Score</p>
              <p className="text-3xl font-bold text-[#147783]">98%</p>
              <div className="mt-3 flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#147783] to-teal-600 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-blue-800 mb-2">Active Threats</p>
              <p className="text-3xl font-bold text-blue-800">{realTimeMonitoring.blockedThreats}</p>
              <p className="text-xs text-gray-600 mt-2">Blocked this hour</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-green-800 mb-2">Network Latency</p>
              <p className="text-3xl font-bold text-green-800">5ms</p>
              <p className="text-xs text-gray-600 mt-2">Ultra-low latency</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-purple-800 mb-2">Server Uptime</p>
              <p className="text-3xl font-bold text-purple-800">99.98%</p>
              <p className="text-xs text-gray-600 mt-2">99.98% reliability</p>
            </div>
          </div>

          {/* Device Security Matrix */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Security Matrix</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-lg font-semibold text-blue-900 mb-2">Desktop</p>
                <p className="text-sm text-gray-600 mb-3">2 hours ago</p>
                <div className="flex items-center justify-between p-3 bg-blue-100 rounded-lg">
                  <span className="text-sm font-medium text-blue-800">secure</span>
                  <span className="text-sm font-bold text-blue-600">0 threats</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-lg font-semibold text-green-900 mb-2">Mobile</p>
                <p className="text-sm text-gray-600 mb-3">1 hour ago</p>
                <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg">
                  <span className="text-sm font-medium text-green-800">secure</span>
                  <span className="text-sm font-bold text-green-600">0 threats</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Tablet className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-lg font-semibold text-purple-900 mb-2">Tablet</p>
                <p className="text-sm text-gray-600 mb-3">6 hours ago</p>
                <div className="flex items-center justify-between p-3 bg-purple-100 rounded-lg">
                  <span className="text-sm font-medium text-purple-800">warning</span>
                  <span className="text-sm font-bold text-purple-600">1 threats</span>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Compliance Metrics */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Compliance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-900">Data Minimization</span>
                  <span className="text-2xl font-bold text-blue-900">94%</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" style={{width: '94%'}}></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-green-900">Consent Management</span>
                  <span className="text-2xl font-bold text-green-900">98%</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000" style={{width: '98%'}}></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-900">Anonymization Level</span>
                  <span className="text-2xl font-bold text-purple-900">92%</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000" style={{width: '92%'}}></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-orange-900">Retention Compliance</span>
                  <span className="text-2xl font-bold text-orange-900">96%</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-1000" style={{width: '96%'}}></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-red-900">Access Control</span>
                  <span className="text-2xl font-bold text-red-900">99%</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000" style={{width: '99%'}}></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-teal-900">Encryption Coverage</span>
                  <span className="text-2xl font-bold text-teal-900">100%</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full transition-all duration-1000" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Privacy Controls */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent">Advanced Privacy Controls</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Real-time Protection</span>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#147783] to-teal-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Manage All Settings</span>
              </button>
            </div>
          </div>

          {/* Privacy Control Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Privacy Control Center</h3>
                <p className="text-blue-700 text-sm">Granular control over your data and privacy preferences</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-800">Active Controls</p>
                <p className="text-2xl font-bold text-blue-700">{Object.keys(consentGiven).length}</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-800">Enabled</p>
                <p className="text-2xl font-bold text-green-600">{Object.values(consentGiven).filter(Boolean).length}</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-800">Security Level</p>
                <p className="text-2xl font-bold text-blue-700">98%</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-800">Last Scan</p>
                <p className="text-sm text-blue-700">2 mins ago</p>
              </div>
            </div>
          </div>

          {/* Privacy Control Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Data Collection Controls */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-700 font-medium">Active</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Data Collection</h3>
              <p className="text-sm text-blue-700 mb-4">Control what data we collect</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Usage Analytics</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('analytics')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.analytics ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.analytics ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Personalization</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('personalization')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.personalization ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.personalization ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Location Data</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('location')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.location ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.location ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Communication Controls */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-700 font-medium">Active</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Communication</h3>
              <p className="text-sm text-green-700 mb-4">Manage your communication preferences</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Email Updates</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('email')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.email ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.email ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">SMS Notifications</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('sms')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.sms ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.sms ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Push Notifications</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('push')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.push ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.push ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Security Controls */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-purple-700 font-medium">Active</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Security</h3>
              <p className="text-sm text-purple-700 mb-4">Enhance your account security</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Key className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Two-Factor Auth</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('2fa')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven['2fa'] ? 'bg-purple-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven['2fa'] ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Fingerprint className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Biometric Login</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('biometric')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.biometric ? 'bg-purple-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.biometric ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Session Timeout</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('timeout')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.timeout ? 'bg-purple-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.timeout ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Data Sharing Controls */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Share2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-orange-700 font-medium">Limited</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Data Sharing</h3>
              <p className="text-sm text-orange-700 mb-4">Control how your data is shared</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Database className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">Research Data</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('research')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.research ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.research ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">Third-party Apps</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('thirdparty')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.thirdparty ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.thirdparty ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">Public Profile</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('public')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.public ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.public ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* AI & Machine Learning Controls */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-700 font-medium">Active</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">AI & Learning</h3>
              <p className="text-sm text-red-700 mb-4">Control AI and machine learning features</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-gray-700">AI Recommendations</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('ai')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.ai ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.ai ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Mic className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-gray-700">Voice Recognition</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('voice')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.voice ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.voice ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-gray-700">Behavioral Analysis</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('behavioral')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.behavioral ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.behavioral ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Advertising Controls */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-teal-700 font-medium">Active</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-teal-900 mb-2">Advertising</h3>
              <p className="text-sm text-teal-700 mb-4">Manage advertising preferences</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-teal-600" />
                    <span className="text-sm font-medium text-gray-700">Personalized Ads</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('personalizedAds')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.personalizedAds ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.personalizedAds ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-teal-600" />
                    <span className="text-sm font-medium text-gray-700">Interest-based Ads</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('interestAds')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.interestAds ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.interestAds ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-teal-600" />
                    <span className="text-sm font-medium text-gray-700">Cross-device Tracking</span>
                  </div>
                  <button 
                    onClick={() => handleConsent('crossDevice')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      consentGiven.crossDevice ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      consentGiven.crossDevice ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing Preferences */}
          <div className="bg-gradient-to-r from-[#CCE7EC]/30 to-teal-50/30 rounded-xl p-6 border border-[#147783]/20 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Sharing Preferences</h3>
            <div className="flex flex-col md:flex-row gap-4">
              {[
                { id: 'improvement', label: 'Feature improvement data', checked: true, description: 'Allow us to use data to improve platform features', color: 'blue' },
                { id: 'marketing', label: 'Marketing communications', checked: false, description: 'Receive updates about new features and services', color: 'green' },
                { id: 'feedback', label: 'Feedback sharing', checked: true, description: 'Share anonymous feedback for product improvement', color: 'purple' }
              ].map(item => (
                <div key={item.id} className={`flex-1 bg-gradient-to-br ${
                  item.color === 'blue' ? 'from-blue-50 to-indigo-50 border-blue-200/50' :
                  item.color === 'green' ? 'from-green-50 to-emerald-50 border-green-200/50' :
                  'from-purple-50 to-violet-50 border-purple-200/50'
                } rounded-xl p-4 border hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium text-sm ${
                      item.color === 'blue' ? 'text-blue-900' :
                      item.color === 'green' ? 'text-green-900' :
                      'text-purple-900'
                    }`}>{item.label}</span>
                    <button
                      onClick={() => handleConsent(item.id)}
                      className={`w-12 h-6 rounded-full transition-all duration-300 ${
                        consentGiven[item.id] ? 
                        (item.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                         item.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                         'bg-gradient-to-r from-purple-500 to-purple-600') 
                        : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                        consentGiven[item.id] ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                  <p className={`text-xs ${
                    item.color === 'blue' ? 'text-blue-700' :
                    item.color === 'green' ? 'text-green-700' :
                    'text-purple-700'
                  }`}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Management Buttons - Single Line */}
          <div className="bg-gradient-to-r from-[#CCE7EC]/30 to-teal-50/30 rounded-xl p-6 border border-[#147783]/20">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={exportData}
                className="flex-1 flex items-center justify-center p-4 bg-gradient-to-r from-[#147783] to-teal-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-3" />
                Export All My Data
              </button>
              <button className="flex-1 flex items-center justify-center p-4 bg-red-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <AlertTriangle className="h-5 w-5 mr-3" />
                Delete My Account
              </button>
              <button className="flex-1 flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <Key className="h-5 w-5 mr-3" />
                Enable 2FA Authentication
              </button>
            </div>
          </div>

          {/* Privacy Summary Dashboard */}
          <div className="bg-gradient-to-r from-[#CCE7EC]/30 to-teal-50/30 rounded-xl p-6 border border-[#147783]/20 mt-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Privacy Summary</h4>
                <p className="text-sm text-gray-600">You have control over {Object.keys(consentGiven).length} different privacy settings</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#147783]">
                  {Object.values(consentGiven).filter(Boolean).length}/{Object.keys(consentGiven).length}
                </p>
                <p className="text-sm text-gray-600">Settings Enabled</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-[#147783] to-teal-600 h-3 rounded-full transition-all duration-500" 
                  style={{width: `${(Object.values(consentGiven).filter(Boolean).length / Object.keys(consentGiven).length) * 100}%`}}
                ></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Data Collection:</span>
                  <span className="text-sm text-green-600 font-medium">Optimized</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Security Level:</span>
                  <span className="text-sm text-green-600 font-medium">High</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Last Update:</span>
                  <span className="text-sm text-green-600 font-medium">Just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Sections with Image-Style Layout - Left Topics, Right Data */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
          <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent mb-8">Privacy Policy Details</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 h-full">
            {/* Left Side - Topics List */}
            <div className="lg:w-2/5">
              <div className="sticky top-8 bg-gradient-to-r from-[#CCE7EC]/30 to-teal-50/30 rounded-xl p-6 border border-[#147783]/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Topics</h3>
                <div className="space-y-2">
                  {privacySections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => toggleSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                        expandedSection === section.id
                          ? 'bg-gradient-to-r from-[#147783] to-teal-600 text-white shadow-lg'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <section.icon className={`h-5 w-5 ${expandedSection === section.id ? 'text-white' : section.color}`} />
                        <span className={`font-medium ${expandedSection === section.id ? 'text-white' : section.color}`}>
                          {section.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Detailed Content */}
            <div className="lg:w-3/5 flex items-center h-full overflow-y-auto">
              {expandedSection ? (
                <div className="w-full h-full">
                  {privacySections.filter(section => section.id === expandedSection).map((section) => (
                    <div key={section.id} className="bg-gradient-to-br from-[#CCE7EC]/30 to-teal-50/30 rounded-2xl p-8 border border-[#147783]/20 h-full overflow-y-auto">
                      {/* Section Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${section.color === 'text-blue-600' ? 'bg-blue-100' : section.color === 'text-green-600' ? 'bg-green-100' : section.color === 'text-purple-600' ? 'bg-purple-100' : section.color === 'text-orange-600' ? 'bg-orange-100' : section.color === 'text-red-600' ? 'bg-red-100' : 'bg-teal-100'}`}>
                          <section.icon className={`h-6 w-6 ${section.color}`} />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${section.color}`}>{section.title}</h3>
                          <p className="text-gray-600 text-sm">{section.description}</p>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="space-y-6">
                        {/* Key Points */}
                        <div>
                          <h4 className={`text-lg font-semibold ${section.color} mb-4 flex items-center`}>
                            <CheckCircle className={`h-5 w-5 ${section.color} mr-2`} />
                            Key Points
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {section.content.map((item, index) => (
                              <div key={index} className="flex items-start space-x-2 p-3 bg-white/60 rounded-lg">
                                <CheckCircle className={`h-4 w-4 ${section.color} mt-0.5 flex-shrink-0`} />
                                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Legal Basis */}
                        {section.legalBasis && (
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
                            <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                              <Shield className="h-5 w-5 text-blue-600 mr-2" />
                              Legal Basis for Processing
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.legalBasis.map((basis, index) => (
                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                  {basis}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Data Sources */}
                        {section.dataSources && (
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50">
                            <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                              <Database className="h-5 w-5 text-green-600 mr-2" />
                              Data Sources
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.dataSources.map((source, index) => (
                                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                  {source}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Retention Period */}
                        {section.retentionPeriod && (
                          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50">
                            <h4 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
                              <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                              Data Retention
                            </h4>
                            <p className="text-orange-800 font-medium">{section.retentionPeriod}</p>
                          </div>
                        )}

                        {/* Purpose Categories */}
                        {section.purposeCategories && (
                          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50">
                            <h4 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                              <Settings className="h-5 w-5 text-purple-600 mr-2" />
                              Purpose Categories
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.purposeCategories.map((category, index) => (
                                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Security Measures */}
                        {section.securityMeasures && (
                          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50">
                            <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                              <ShieldCheck className="h-5 w-5 text-red-600 mr-2" />
                              Security Measures
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.securityMeasures.map((measure, index) => (
                                <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                                  {measure}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Certifications */}
                        {section.certifications && (
                          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200/50">
                            <h4 className="text-lg font-semibold text-teal-900 mb-4 flex items-center">
                              <Award className="h-5 w-5 text-teal-600 mr-2" />
                              Certifications & Compliance
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.certifications.map((cert, index) => (
                                <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                                  {cert}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Exercise Methods */}
                        {section.exerciseMethods && (
                          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200/50">
                            <h4 className="text-lg font-semibold text-indigo-900 mb-4 flex items-center">
                              <User className="h-5 w-5 text-indigo-600 mr-2" />
                              How to Exercise Your Rights
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.exerciseMethods.map((method, index) => (
                                <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                                  {method}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Transfer Mechanisms */}
                        {section.transferMechanisms && (
                          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200/50">
                            <h4 className="text-lg font-semibold text-cyan-900 mb-4 flex items-center">
                              <Globe className="h-5 w-5 text-cyan-600 mr-2" />
                              International Transfer Mechanisms
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.transferMechanisms.map((mechanism, index) => (
                                <span key={index} className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                                  {mechanism}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Retention Schedule */}
                        {section.retentionSchedule && (
                          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200/50">
                            <h4 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
                              <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                              Retention Schedule
                            </h4>
                            <div className="space-y-2">
                              {Object.entries(section.retentionSchedule).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center p-2 bg-amber-100/50 rounded-lg">
                                  <span className="text-amber-800 font-medium text-sm">{key}:</span>
                                  <span className="text-amber-700 text-sm">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Cookie Types */}
                        {section.cookieTypes && (
                          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200/50">
                            <h4 className="text-lg font-semibold text-indigo-900 mb-4 flex items-center">
                              <Eye className="h-5 w-5 text-indigo-600 mr-2" />
                              Cookie Types
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.cookieTypes.map((type, index) => (
                                <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                                  {type}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Age Verification */}
                        {section.ageVerification && (
                          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50">
                            <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                              <Lock className="h-5 w-5 text-red-600 mr-2" />
                              Age Verification & Protection
                            </h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center p-2 bg-red-100/50 rounded-lg">
                                <span className="text-red-800 font-medium text-sm">Age Verification:</span>
                                <span className="text-red-700 text-sm">{section.ageVerification}</span>
                              </div>
                              {section.parentalControls && (
                                <div>
                                  <p className="text-sm font-medium text-red-800 mb-2">Parental Controls:</p>
                                  <div className="flex flex-wrap gap-2">
                                    {section.parentalControls.map((control, index) => (
                                      <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                                        {control}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center mx-auto mt-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#CCE7EC] to-teal-50 rounded-full flex items-center justify-center mb-6">
                    <Eye className="h-10 w-10 text-[#147783]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Privacy Topic</h3>
                  <p className="text-gray-600 max-w-md">Choose a topic from the left sidebar to view detailed information about that aspect of our privacy policy.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Advanced Contact Privacy Team Section */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-200/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent">Contact Privacy Team</h2>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Available 24/7</span>
            </div>
          </div>

          {/* Privacy Team Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Dedicated Privacy Team</h3>
                <p className="text-blue-700 text-sm">Certified privacy professionals ready to assist you</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-800">Response Time</p>
                <p className="text-blue-700">Within 24 hours</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-800">Languages</p>
                <p className="text-blue-700">English, Hindi, Spanish</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-800">Certifications</p>
                <p className="text-blue-700">GDPR, ISO 27001</p>
              </div>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Email Contact */}
            <div className="bg-gradient-to-br from-[#CCE7EC]/30 to-teal-50/30 rounded-xl p-6 border border-[#147783]/20 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#147783] to-teal-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h4>
              <p className="text-gray-700 text-sm mb-4">privacy@prihub.com</p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#147783] to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Send Email
                </button>
                <p className="text-xs text-gray-600 text-center">Response within 24 hours</p>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-green-900 mb-2">Phone Support</h4>
              <p className="text-green-700 text-sm mb-4">+91 9680211602</p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Call Now
                </button>
                <p className="text-xs text-gray-600 text-center">Mon-Fri, 9AM-6PM IST</p>
              </div>
            </div>

            {/* Video Consultation */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Video className="h-5 w-5 text-white" />
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-purple-900 mb-2">Video Consultation</h4>
              <p className="text-purple-700 text-sm mb-4">Schedule a video call</p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Schedule Call
                </button>
                <p className="text-xs text-gray-600 text-center">Available by appointment</p>
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Live Chat</h4>
              <p className="text-blue-700 text-sm mb-4">Chat with privacy expert</p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Start Chat
                </button>
                <p className="text-xs text-gray-600 text-center">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Privacy Team Members */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200/50 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 text-gray-700 mr-2" />
              Privacy Team Members
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#147783] to-teal-600 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Privacy Officer</p>
                    <p className="text-sm text-gray-600">Lead Privacy Expert</p>
                  </div>
                </div>
                <p className="text-xs text-gray-700">GDPR certified, 10+ years experience</p>
              </div>
              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#147783] to-teal-600 rounded-full flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Data Protection Lead</p>
                    <p className="text-sm text-gray-600">Security Specialist</p>
                  </div>
                </div>
                <p className="text-xs text-gray-700">ISO 27001 certified, 8+ years experience</p>
              </div>
              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#147783] to-teal-600 rounded-full flex items-center justify-center">
                    <Lock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Compliance Manager</p>
                    <p className="text-sm text-gray-600">Regulatory Expert</p>
                  </div>
                </div>
                <p className="text-xs text-gray-700">Legal background, 12+ years experience</p>
              </div>
            </div>
          </div>

          {/* Office Location & Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50">
              <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                Office Location
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">PriHub Privacy Office</p>
                    <p className="text-gray-700 text-sm">123 Tech Park, Jaipur</p>
                    <p className="text-gray-700 text-sm">Rajasthan, India - 302020</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200/50">
              <h3 className="text-lg font-semibold text-teal-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-teal-600 mr-2" />
                Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-teal-100/50 rounded-lg">
                  <span className="text-teal-800 font-medium text-sm">Monday - Friday:</span>
                  <span className="text-teal-700 text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-teal-100/50 rounded-lg">
                  <span className="text-teal-800 font-medium text-sm">Saturday:</span>
                  <span className="text-teal-700 text-sm">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-teal-100/50 rounded-lg">
                  <span className="text-teal-800 font-medium text-sm">Sunday:</span>
                  <span className="text-teal-700 text-sm">Emergency Only</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-teal-100/50 rounded-lg">
                  <span className="text-teal-800 font-medium text-sm">Time Zone:</span>
                  <span className="text-teal-700 text-sm">IST (UTC+5:30)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50 mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-900">Emergency Privacy Contact</h3>
                  <p className="text-red-700 text-sm">For urgent privacy matters</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-800 font-medium">+91 98765 43211</span>
                <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Emergency Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
