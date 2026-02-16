import React, { useState, useEffect, useRef } from 'react';
import { FileText, Shield, Gavel, Users, Calendar, CheckCircle, AlertTriangle, Download, Share2, Eye, BookOpen, Clock, ChevronDown, ChevronUp, RefreshCw, Scale, Award, Target, Zap, Activity, Globe, Briefcase, UserCheck, FileCheck, Stamp, Certificate, Lock, Key, Fingerprint, Cpu, Cloud, Database, Network, ShieldCheck, TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';

const Terms = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState('latest');
  const [complianceScore, setComplianceScore] = useState(96);
  const [aiAnalysis, setAiAnalysis] = useState({
    riskLevel: 'low',
    lastReviewed: new Date().toLocaleString(),
    criticalClauses: 3,
    recommendations: 2,
    legalUpdates: 1,
    aiConfidence: 94,
    processingTime: '0.23s',
    documentsAnalyzed: 1247
  });

  const [realTimeCompliance, setRealTimeCompliance] = useState({
    gdprCompliance: 98,
    ccpaCompliance: 95,
    hipaaCompliance: 92,
    accessibilityCompliance: 100,
    lastAudit: '2026-02-15 14:30:00',
    auditScore: 97,
    violationsFound: 0,
    recommendations: 3
  });

  const [legalMetrics, setLegalMetrics] = useState({
    documentComplexity: 78,
    readabilityScore: 85,
    legalRisk: 12,
    complianceCoverage: 94,
    updateFrequency: 30,
    userUnderstanding: 89
  });

  const [interactiveTimeline, setInteractiveTimeline] = useState([
    { date: '2026-02-13', action: 'Terms updated', type: 'update', severity: 'info' },
    { date: '2026-02-10', action: 'GDPR compliance verified', type: 'compliance', severity: 'success' },
    { date: '2026-02-05', action: 'Legal review completed', type: 'review', severity: 'success' },
    { date: '2026-01-28', action: 'User feedback incorporated', type: 'feedback', severity: 'info' }
  ]);

  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeCompliance(prev => ({
        ...prev,
        gdprCompliance: Math.min(100, prev.gdprCompliance + Math.random() * 2 - 1),
        ccpaCompliance: Math.min(100, prev.ccpaCompliance + Math.random() * 2 - 1),
        hipaaCompliance: Math.min(100, prev.hipaaCompliance + Math.random() * 2 - 1)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    localStorage.setItem('termsAccepted', new Date().toISOString());
  };

  const exportTerms = () => {
    const termsData = {
      title: "PriHub Terms of Service",
      version: selectedVersion,
      acceptedDate: new Date().toISOString(),
      sections: ['acceptance', 'license', 'user-conduct', 'intellectual-property', 'liability', 'termination'],
      complianceScore: complianceScore,
      aiAnalysis: aiAnalysis
    };
    
    const dataStr = JSON.stringify(termsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'prihub-terms-service.json';
    link.click();
  };

  const runComplianceCheck = () => {
    setRealTimeCompliance(prev => ({
      ...prev,
      lastAudit: new Date().toLocaleString(),
      auditScore: Math.floor(Math.random() * 5 + 95),
      violationsFound: Math.floor(Math.random() * 3)
    }));
  };

  const termsSections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: CheckCircle,
      color: 'text-green-600',
      description: 'Understanding and agreeing to our service terms',
      content: [
        'By accessing and using PriHub platform, you accept and agree to be bound by these terms and conditions',
        'If you do not agree to these terms, you must not access or use our services',
        'These terms apply to all users, including individuals, caregivers, and institutional partners',
        'We reserve the right to update these terms at any time with reasonable notice',
        'Continued use after changes constitutes acceptance of updated terms',
        'Minor users require parental or guardian consent for agreement'
      ],
      legalBasis: ['Contract Formation', 'Consent', 'Legal Compliance'],
      effectiveDate: '2026-02-13',
      lastUpdated: '2026-02-13',
      jurisdiction: 'International',
      applicableLaw: ['Digital Services Act', 'Consumer Protection Laws']
    },
    {
      id: 'license',
      title: '2. License Agreement',
      icon: FileText,
      color: 'text-blue-600',
      description: 'Terms of use and licensing for our platform',
      content: [
        'PriHub grants you a limited, non-exclusive, non-transferable license to use our platform',
        'This license is subject to these terms and may be terminated by either party',
        'Commercial use requires explicit written permission from PriHub',
        'Educational institutions may obtain institutional licenses for bulk usage',
        'All content and features remain the property of PriHub and its licensors',
        'License is automatically renewed unless terminated by either party'
      ],
      licenseType: 'Limited Non-Exclusive',
      commercialUse: 'Requires Permission',
      educationalUse: 'Institutional License Available',
      territorialScope: 'Global',
      exclusivity: 'Non-Exclusive'
    },
    {
      id: 'user-conduct',
      title: '3. User Conduct & Responsibilities',
      icon: Users,
      color: 'text-purple-600',
      description: 'Expected behavior and responsibilities of platform users',
      content: [
        'Use platform responsibly and in accordance with applicable laws and regulations',
        'Respect privacy and rights of other users and individuals with disabilities',
        'Do not attempt to gain unauthorized access to systems or data of others',
        'Report any security vulnerabilities or misuse immediately to our support team',
        'Maintain confidentiality of account credentials and personal information',
        'Use accessibility features appropriately and for their intended purpose'
      ],
      prohibitedActivities: ['Unauthorized Access', 'Data Mining', 'Spam', 'Harassment', 'Copyright Infringement'],
      enforcementMechanisms: ['Account Suspension', 'Content Removal', 'Legal Action', 'IP Blocking'],
      reportingChannels: ['Support Ticket', 'Email', 'In-App Report', 'Emergency Hotline']
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property Rights',
      icon: Shield,
      color: 'text-orange-600',
      description: 'Protection of intellectual property and content rights',
      content: [
        'All platform content, features, and technology are owned by PriHub or its licensors',
        'Users may not copy, modify, distribute, or create derivative works without permission',
        'PriHub name, logo, and trademarks are protected intellectual property',
        'User-generated content remains property of the user but grants PriHub usage rights',
        'AI algorithms and assistive technologies are proprietary and confidential',
        'Patent applications pending for key technologies and features'
      ],
      ownedIP: ['Platform Technology', 'AI Algorithms', 'Brand Assets', 'Content Database'],
      userRights: ['Content Ownership', 'Usage License', 'Attribution Rights'],
      thirdPartyContent: ['Licensed Materials', 'Open Source Components', 'Partner Integrations']
    },
    {
      id: 'liability',
      title: '5. Limitation of Liability',
      icon: AlertTriangle,
      color: 'text-red-600',
      description: 'Limitation of liability and warranty disclaimers',
      content: [
        'PriHub provides services "as is" without warranties of any kind, express or implied',
        'We are not liable for indirect, incidental, special, or consequential damages',
        'Platform downtime or service interruptions do not entitle users to compensation',
        'User assumes full responsibility for use of AI assistance and recommendations',
        'Maximum liability limited to amount paid for services in preceding 3 months',
        'Some jurisdictions do not allow exclusion of certain warranties'
      ],
      warrantyDisclaimer: 'As Is Service',
      liabilityCap: '3 Months Service Fees',
      excludedDamages: ['Consequential', 'Indirect', 'Punitive', 'Lost Profits'],
      forceMajeure: ['Natural Disasters', 'War', 'Government Actions', 'Infrastructure Failures']
    },
    {
      id: 'termination',
      title: '6. Termination & Suspension',
      icon: Clock,
      color: 'text-indigo-600',
      description: 'Conditions and procedures for account termination',
      content: [
        'PriHub may suspend or terminate accounts for violations of these terms',
        'Users may terminate their account at any time through account settings',
        'Termination does not affect rights accrued before termination date',
        'Data retention policies apply for 30 days after account termination',
        'Institutional licenses have separate termination provisions as per agreement',
        'Refund policy applies to prepaid services with pro-rated calculations'
      ],
      terminationReasons: ['Violation', 'Inactivity', 'User Request', 'Non-Payment', 'Legal Requirements'],
      noticePeriod: '30 Days for Non-Violation',
      dataRetention: '30 Days Post-Termination',
      refundPolicy: 'Pro-Rated for Prepaid Services'
    },
    {
      id: 'dispute-resolution',
      title: '7. Dispute Resolution',
      icon: Gavel,
      color: 'text-teal-600',
      description: 'Process for resolving disputes and legal issues',
      content: [
        'All disputes governed by laws of jurisdiction specified in these terms',
        'Mandatory arbitration clause applies to most commercial disputes',
        'Class action waivers limit collective legal actions against PriHub',
        'Mediation required before formal legal proceedings can commence',
        'Statute of limitations is 1 year from date of dispute occurrence',
        'Severability clause ensures remaining terms remain enforceable'
      ],
      governingLaw: 'International Commercial Law',
      arbitration: 'Required for Commercial Disputes',
      classActionWaiver: 'Applicable',
      mediation: 'Pre-Litigation Requirement',
      statuteOfLimitations: '1 Year'
    },
    {
      id: 'compliance',
      title: '8. Regulatory Compliance',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      description: 'Compliance with applicable laws and regulations',
      content: [
        'Platform complies with GDPR, CCPA, and other privacy regulations',
        'Regular audits ensure ongoing compliance with accessibility standards',
        'Healthcare data handling follows HIPAA and relevant medical regulations',
        'Financial transactions comply with PCI DSS and anti-money laundering laws',
        'Educational use adheres to FERPA and student privacy requirements',
        'International data transfers follow standard contractual clauses'
      ],
      regulations: ['GDPR', 'CCPA', 'HIPAA', 'PCI DSS', 'FERPA', 'WCAG 2.1'],
      auditFrequency: 'Quarterly',
      complianceOfficer: 'Designated DPO',
      certificationBodies: ['ISO 27001', 'SOC 2 Type II', 'HIPAA Compliance']
    }
  ];

  const versions = [
    { id: 'latest', label: 'Latest Version', date: '2026-02-13' },
    { id: 'previous', label: 'Previous Version', date: '2025-12-01' }
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
                <Gavel className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent">Terms of Service</h1>
                <p className="text-sm text-gray-600">AI-Powered Legal Intelligence</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <select
                value={selectedVersion}
                onChange={(e) => setSelectedVersion(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#147783] bg-white/80 backdrop-blur"
              >
                {versions.map(version => (
                  <option key={version.id} value={version.id}>
                    {version.label} ({version.date})
                  </option>
                ))}
              </select>
              <button className="p-2 text-gray-500 hover:text-[#147783] hover:bg-[#CCE7EC] rounded-lg transition-all duration-300">
                <RefreshCw className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-[#147783] hover:bg-[#CCE7EC] rounded-lg transition-all duration-300">
                <Download className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-[#147783] hover:bg-[#CCE7EC] rounded-lg transition-all duration-300">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Ultra-Advanced AI Legal Analysis Dashboard */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent">AI Legal Intelligence</h2>
            <button 
              onClick={runComplianceCheck}
              className="px-6 py-3 bg-gradient-to-r from-[#147783] to-teal-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <ShieldCheck className="h-5 w-5" />
              <span>Run Compliance Check</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-blue-900 mb-2">Risk Level</p>
              <p className="text-3xl font-bold text-blue-900">{aiAnalysis.riskLevel}</p>
              <p className="text-xs text-gray-600 mt-2">Assessment status</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-green-900 mb-2">Critical Clauses</p>
              <p className="text-3xl font-bold text-green-900">{aiAnalysis.criticalClauses}</p>
              <p className="text-xs text-gray-600 mt-2">Key legal points</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-purple-900 mb-2">Recommendations</p>
              <p className="text-3xl font-bold text-purple-900">{aiAnalysis.recommendations}</p>
              <p className="text-xs text-gray-600 mt-2">AI suggestions</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-orange-900 mb-2">AI Confidence</p>
              <p className="text-3xl font-bold text-orange-900">{aiAnalysis.aiConfidence}%</p>
              <p className="text-xs text-gray-600 mt-2">Analysis accuracy</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Processing Metrics</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs text-gray-600">Time: {aiAnalysis.processingTime}</span>
                  <span className="text-xs text-gray-600">Documents: {aiAnalysis.documentsAnalyzed}</span>
                  <span className="text-xs text-gray-600">Last: {aiAnalysis.lastReviewed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Compliance Tracking */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
          <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent mb-8">Real-Time Compliance Monitoring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#147783] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#147783]">{realTimeCompliance.gdprCompliance}%</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#147783] rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-[#147783] mt-2">GDPR</p>
              <p className="text-xs text-gray-500">EU Data Protection</p>
            </div>
            
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#147783] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#147783]">{realTimeCompliance.ccpaCompliance}%</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#147783] rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-[#147783] mt-2">CCPA</p>
              <p className="text-xs text-gray-500">California Privacy</p>
            </div>
            
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#147783] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#147783]">{realTimeCompliance.hipaaCompliance}%</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#147783] rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-[#147783] mt-2">HIPAA</p>
              <p className="text-xs text-gray-500">Healthcare Privacy</p>
            </div>
            
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#147783] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#147783]">{realTimeCompliance.accessibilityCompliance}%</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#147783] rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-[#147783] mt-2">WCAG 2.1</p>
              <p className="text-xs text-gray-500">Accessibility</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-[#CCE7EC]/30 rounded-lg border border-[#147783]/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#147783]" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Last Compliance Audit</p>
                  <p className="text-xs text-gray-600">{realTimeCompliance.lastAudit}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#147783] rounded-full animate-pulse"></div>
                <span className="text-sm text-[#147783] font-medium">Score: {realTimeCompliance.auditScore}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Sections with Image-Style Layout - Left Topics, Right Data */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
          <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent mb-8">Terms of Service Details</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Topics List */}
            <div className="lg:w-2/5">
              <div className="sticky top-8 bg-gradient-to-r from-[#CCE7EC]/30 to-teal-50/30 rounded-xl p-6 border border-[#147783]/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Topics</h3>
                <div className="space-y-2">
                  {termsSections.map((section) => (
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
                <div className="space-y-6">
                  {termsSections.filter(section => section.id === expandedSection).map((section) => (
                    <div key={section.id} className="bg-gradient-to-br from-[#CCE7EC]/30 to-teal-50/30 rounded-2xl p-8 border border-[#147783]/20">
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                              <Gavel className="h-5 w-5 text-blue-600 mr-2" />
                              Legal Basis
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

                        {/* License Details */}
                        {section.licenseType && (
                          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/50">
                            <h4 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                              <FileText className="h-5 w-5 text-purple-600 mr-2" />
                              License Details
                            </h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center p-2 bg-purple-100/50 rounded-lg">
                                <span className="text-purple-800 font-medium text-sm">Type:</span>
                                <span className="text-purple-700 text-sm">{section.licenseType}</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-purple-100/50 rounded-lg">
                                <span className="text-purple-800 font-medium text-sm">Commercial Use:</span>
                                <span className="text-purple-700 text-sm">{section.commercialUse}</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-purple-100/50 rounded-lg">
                                <span className="text-purple-800 font-medium text-sm">Educational Use:</span>
                                <span className="text-purple-700 text-sm">{section.educationalUse}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Prohibited Activities */}
                        {section.prohibitedActivities && (
                          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50">
                            <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                              Prohibited Activities
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.prohibitedActivities.map((activity, index) => (
                                <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                                  {activity}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* IP Rights */}
                        {section.ownedIP && (
                          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50">
                            <h4 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
                              <Shield className="h-5 w-5 text-orange-600 mr-2" />
                              Intellectual Property
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium text-orange-800 mb-2">Owned IP:</p>
                                <div className="flex flex-wrap gap-2">
                                  {section.ownedIP.map((ip, index) => (
                                    <span key={index} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                                      {ip}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-orange-800 mb-2">User Rights:</p>
                                <div className="flex flex-wrap gap-2">
                                  {section.userRights.map((right, index) => (
                                    <span key={index} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                                      {right}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Liability Details */}
                        {section.warrantyDisclaimer && (
                          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50">
                            <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                              Liability & Warranty
                            </h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center p-2 bg-red-100/50 rounded-lg">
                                <span className="text-red-800 font-medium text-sm">Warranty:</span>
                                <span className="text-red-700 text-sm">{section.warrantyDisclaimer}</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-100/50 rounded-lg">
                                <span className="text-red-800 font-medium text-sm">Liability Cap:</span>
                                <span className="text-red-700 text-sm">{section.liabilityCap}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Termination Details */}
                        {section.terminationReasons && (
                          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200/50">
                            <h4 className="text-lg font-semibold text-indigo-900 mb-4 flex items-center">
                              <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                              Termination Details
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium text-indigo-800 mb-2">Reasons:</p>
                                <div className="flex flex-wrap gap-2">
                                  {section.terminationReasons.map((reason, index) => (
                                    <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                                      {reason}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-indigo-100/50 rounded-lg">
                                <span className="text-indigo-800 font-medium text-sm">Notice Period:</span>
                                <span className="text-indigo-700 text-sm">{section.noticePeriod}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Dispute Resolution */}
                        {section.governingLaw && (
                          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200/50">
                            <h4 className="text-lg font-semibold text-teal-900 mb-4 flex items-center">
                              <Gavel className="h-5 w-5 text-teal-600 mr-2" />
                              Dispute Resolution
                            </h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center p-2 bg-teal-100/50 rounded-lg">
                                <span className="text-teal-800 font-medium text-sm">Governing Law:</span>
                                <span className="text-teal-700 text-sm">{section.governingLaw}</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-teal-100/50 rounded-lg">
                                <span className="text-teal-800 font-medium text-sm">Arbitration:</span>
                                <span className="text-teal-700 text-sm">{section.arbitration}</span>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-teal-100/50 rounded-lg">
                                <span className="text-teal-800 font-medium text-sm">Statute of Limitations:</span>
                                <span className="text-teal-700 text-sm">{section.statuteOfLimitations}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Compliance */}
                        {section.regulations && (
                          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200/50">
                            <h4 className="text-lg font-semibold text-emerald-900 mb-4 flex items-center">
                              <ShieldCheck className="h-5 w-5 text-emerald-600 mr-2" />
                              Regulatory Compliance
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium text-emerald-800 mb-2">Regulations:</p>
                                <div className="flex flex-wrap gap-2">
                                  {section.regulations.map((reg, index) => (
                                    <span key={index} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">
                                      {reg}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-emerald-100/50 rounded-lg">
                                <span className="text-emerald-800 font-medium text-sm">Audit Frequency:</span>
                                <span className="text-emerald-700 text-sm">{section.auditFrequency}</span>
                              </div>
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
                    <FileText className="h-10 w-10 text-[#147783]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Topic</h3>
                  <p className="text-gray-600 max-w-md">Choose a topic from the left sidebar to view detailed information about that aspect of our terms of service.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Terms Acceptance Section */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent">Terms Acceptance</h2>
            <div className="flex items-center space-x-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                acceptedTerms 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {acceptedTerms ? 'Accepted' : 'Not Accepted'}
              </span>
              <button
                onClick={handleAcceptTerms}
                disabled={acceptedTerms}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  acceptedTerms
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#147783] to-teal-600 text-white hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {acceptedTerms ? 'Terms Accepted' : 'Accept Terms'}
              </button>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <Eye className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-blue-800">
                <p className="font-semibold text-lg mb-2">Please read these terms carefully before using PriHub.</p>
                <p>By clicking "Accept Terms" or using our services, you acknowledge that you have read, understood, and agree to be bound by this agreement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Export Actions */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-200/50">
          <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-[#147783] to-teal-600 bg-clip-text text-transparent mb-8">Export & Share</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={exportTerms}
              className="flex-1 flex items-center justify-center p-4 bg-gradient-to-r from-[#147783] to-teal-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="h-5 w-5 mr-2" />
              Export Terms as PDF
            </button>
            <button className="flex-1 flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <Share2 className="h-5 w-5 mr-2" />
              Share with Legal Team
            </button>
          </div>
        </div>
      </div>
    </div>);
};

export default Terms;
