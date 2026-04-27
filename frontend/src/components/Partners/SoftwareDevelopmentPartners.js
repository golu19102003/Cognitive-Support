import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Users, Star, TrendingUp, Clock, ArrowRight, Search, Filter, Zap, Award, Shield, Download, FileText, Printer, Monitor, Database, Cloud, Cpu, Globe, Target, Heart } from 'lucide-react';

const SoftwareDevelopmentPartners = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [featuredPartners, setFeaturedPartners] = useState([]);

  // Generate certificate content for partner
  const generateCertificateContent = (partner) => {
    const currentYear = new Date().getFullYear();
    
    // Generate a random partnership date in the past within the current year
    const partnershipDate = new Date(currentYear - 1, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const formattedDate = partnershipDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const certificateNumber = `CERT-SDP-${partner.name.replace(/\s+/g, '-').toUpperCase()}-${Date.now().toString().slice(-6)}`;
    
    // Random signature names for partner representatives
    const partnerSignatures = [
      "Alex Thompson", "Sarah Chen", "Michael Brown", "Emily Davis", "David Wilson",
      "Jessica Martinez", "Robert Anderson", "Lisa Garcia", "William Taylor", "Maria Rodriguez"
    ];
    const randomPartnerSignature = partnerSignatures[Math.floor(Math.random() * partnerSignatures.length)];
    
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Certificate of Partnership</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans:wght@400;600&display=swap');
        
        body {
            margin: 0;
            padding: 20px;
            font-family: 'Open Sans', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .certificate {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border: 8px solid #gold;
            border-image: linear-gradient(45deg, #FFD700, #FFA500, #FFD700) 1;
            position: relative;
        }
        
        .certificate::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
            z-index: -1;
            border-radius: 15px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .title {
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            color: #2c3e50;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .subtitle {
            font-size: 18px;
            color: #7f8c8d;
            margin: 10px 0 0 0;
            font-style: italic;
        }
        
        .content {
            text-align: center;
            margin: 40px 0;
        }
        
        .recipient {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            color: #2c3e50;
            margin: 20px 0;
            font-weight: bold;
            border-bottom: 2px solid #3498db;
            display: inline-block;
            padding: 0 20px 10px 20px;
        }
        
        .body-text {
            font-size: 16px;
            line-height: 1.6;
            color: #34495e;
            margin: 20px 0;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .partnership-details {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 30px 0;
            border-left: 4px solid #3498db;
        }
        
        .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 15px;
        }
        
        .detail-item {
            text-align: left;
        }
        
        .detail-label {
            font-weight: 600;
            color: #2c3e50;
            font-size: 14px;
        }
        
        .detail-value {
            color: #34495e;
            font-size: 14px;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #ecf0f1;
        }
        
        .signatures {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
        }
        
        .signature {
            text-align: center;
            width: 200px;
        }
        
        .signature-line {
            border-bottom: 2px solid #2c3e50;
            margin-bottom: 5px;
            height: 40px;
            position: relative;
        }
        
        .signature-line::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #34495e 20%, #34495e 80%, transparent 100%);
            border-radius: 1px;
        }
        
        .signature-title {
            font-size: 12px;
            color: #7f8c8d;
            font-family: 'Brush Script MT', cursive;
            font-style: italic;
        }
        
        .signature-subtitle {
            font-size: 10px;
            color: #95a5a6;
            font-family: Arial, sans-serif;
            font-style: normal;
        }
        
        .certificate-number {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 12px;
            color: #95a5a6;
            font-weight: 600;
        }
        
        .logo {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 24px;
        }
        
        @media print {
            @page {
                size: A4;
                margin: 0.3cm;
            }
            
            body { 
                margin: 0; 
                padding: 0;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                height: 100vh;
                overflow: hidden;
            }
            
            .certificate { 
                box-shadow: none; 
                border: 6px solid #FFD700;
                margin: 0 auto;
                max-width: 95%;
                padding: 15px;
                page-break-inside: avoid;
                page-break-after: avoid;
                height: 95vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                box-sizing: border-box;
            }
            
            .certificate::before {
                display: none;
            }
            
            .header {
                margin-bottom: 10px;
            }
            
            .content {
                margin: 15px 0;
            }
            
            .footer {
                margin-top: 10px;
            }
            
            .title {
                font-size: 24px !important;
                line-height: 1.1 !important;
            }
            
            .subtitle {
                font-size: 14px !important;
                margin: 5px 0 0 0 !important;
            }
            
            .recipient {
                font-size: 20px !important;
                margin: 10px 0;
                padding: 0 15px 8px 15px;
            }
            
            .body-text {
                font-size: 12px !important;
                margin: 8px 0;
                line-height: 1.3 !important;
            }
            
            .partnership-details {
                padding: 12px;
                margin: 20px 0;
            }
            
            .details-grid {
                gap: 8px;
            }
            
            .detail-label, .detail-value {
                font-size: 11px !important;
            }
            
            .signatures {
                margin-top: 20px;
            }
            
            .signature {
                width: 180px;
            }
            
            .logo {
                width: 60px;
                height: 60px;
                font-size: 20px;
                margin: 0 auto 15px;
            }
        }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="certificate-number">Certificate No: ${certificateNumber}</div>
        
        <div class="header">
            <div class="logo">PH</div>
            <h1 class="title">Certificate of Partnership</h1>
            <p class="subtitle">Software Development Alliance</p>
        </div>
        
        <div class="content">
            <p class="body-text">
                This is to certify that <strong>${partner.name}</strong> is officially recognized as a 
                distinguished partner in the PriHub Cognitive Support ecosystem.
            </p>
            
            <div class="recipient">${partner.name}</div>
            
            <p class="body-text">
                In recognition of their outstanding contributions to software development innovation 
                and commitment to advancing digital solutions for individuals with disabilities.
            </p>
            
            <div class="partnership-details">
                <h3 style="margin: 0 0 15px 0; color: #2c3e50;">Partnership Details</h3>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="detail-label">Partner Name:</div>
                        <div class="detail-value">${partner.name}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Expertise:</div>
                        <div class="detail-value">${partner.description}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Technologies:</div>
                        <div class="detail-value">${partner.technologies || 'Modern Development'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Innovation:</div>
                        <div class="detail-value">${partner.innovation || 'Cutting-edge Solutions'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Rating:</div>
                        <div class="detail-value">${partner.rating || '5.0'}/5.0 ⭐</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Founded:</div>
                        <div class="detail-value">${partner.founded || 'N/A'}</div>
                    </div>
                </div>
            </div>
            
            <p class="body-text">
                This partnership signifies a shared commitment to software excellence, development innovation, and 
                advancement in serving the cognitive support community during ${currentYear}.
            </p>
        </div>
        
        <div class="footer">
            <p style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px;">
                Partnership established on ${formattedDate}
            </p>
            
            <div class="signatures">
                <div class="signature">
                    <div class="signature-title">Pranjal Khandelwal</div>
                    <div class="signature-subtitle">CEO, PriHub</div>
                </div>
                <div class="signature">
                    <div class="signature-title">${randomPartnerSignature}</div>
                    <div class="signature-subtitle">Partner Representative</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
  };

  // Handle certificate generation and download
  const handleGenerateCertificate = (partner) => {
    const certificateContent = generateCertificateContent(partner);
    
    // Create blob and download
    const blob = new Blob([certificateContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Certificate-of-Partnership-${partner.name.replace(/\s+/g, '-')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Handle certificate print
  const handlePrintCertificate = (partner) => {
    const certificateContent = generateCertificateContent(partner);
    const printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=no');
    printWindow.document.write(certificateContent);
    printWindow.document.close();
    printWindow.focus();
    
    // Wait for content to load, then print with proper settings
    printWindow.onload = () => {
      setTimeout(() => {
        // Set print dialog to show only one page
        printWindow.print();
        // Close window after printing
        setTimeout(() => {
          printWindow.close();
        }, 1000);
      }, 500);
    };
  };

  const partnerData = {
    communityName: "Software Development Partners",
    description: "55+",
    stats: "96%",
    rating: "4.8",
    years: "10+",
    growthMetric: "Software Excellence",
    image: "/SoftwareDevelopmentPartners.webp",
    totalPrograms: "1K+",
    beneficiaries: "10M+",
    volunteers: "5M+",
    countries: "150+"
  };

  const categories = [
    { id: 'all', name: 'All Categories', icon: Code },
    { id: 'enterprise', name: 'Enterprise', icon: Monitor },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'analytics', name: 'Analytics', icon: Cpu },
    { id: 'global', name: 'Global', icon: Globe }
  ];

  const directLinks = [
    { name: "Microsoft", url: "https://microsoft.com", description: "Enterprise software and cloud solutions", category: 'enterprise', rating: 4.8, developers: '10M+', founded: '1975' },
    { name: "Google", url: "https://google.com", description: "Cloud computing and AI development", category: 'cloud', rating: 4.7, developers: '5M+', founded: '1998' },
    { name: "Amazon Web Services", url: "https://aws.amazon.com", description: "Cloud infrastructure and development", category: 'cloud', rating: 4.8, developers: '2M+', founded: '2006' },
    { name: "IBM", url: "https://ibm.com", description: "Enterprise software and AI solutions", category: 'enterprise', rating: 4.6, developers: '1M+', founded: '1911' },
    { name: "Oracle", url: "https://oracle.com", description: "Database and enterprise software", category: 'database', rating: 4.5, developers: '500K+', founded: '1977' },
    { name: "SAP", url: "https://sap.com", description: "Enterprise resource planning software", category: 'enterprise', rating: 4.4, developers: '100K+', founded: '1972' },
    { name: "Salesforce", url: "https://salesforce.com", description: "CRM and cloud-based solutions", category: 'cloud', rating: 4.6, developers: '2M+', founded: '1999' },
    { name: "Adobe", url: "https://adobe.com", description: "Creative and digital experience software", category: 'enterprise', rating: 4.5, developers: '3M+', founded: '1982' },
    { name: "Intuit", url: "https://intuit.com", description: "Financial software and solutions", category: 'enterprise', rating: 4.4, developers: '100K+', founded: '1983' },
    { name: "VMware", url: "https://vmware.com", description: "Virtualization and cloud infrastructure", category: 'cloud', rating: 4.5, developers: '50K+', founded: '1998' },
    { name: "Cisco", url: "https://cisco.com", description: "Networking and security solutions", category: 'security', rating: 4.4, developers: '75K+', founded: '1984' },
    { name: "Dell Technologies", url: "https://delltechnologies.com", description: "IT infrastructure and solutions", category: 'enterprise', rating: 4.3, developers: '150K+', founded: '1984' },
    { name: "Hewlett Packard Enterprise", url: "https://hpe.com", description: "Enterprise technology solutions", category: 'enterprise', rating: 4.2, developers: '60K+', founded: '2015' },
    { name: "Red Hat", url: "https://redhat.com", description: "Open source software solutions", category: 'global', rating: 4.6, developers: '1M+', founded: '1993' },
    { name: "Canonical", url: "https://canonical.com", description: "Ubuntu and open source solutions", category: 'global', rating: 4.5, developers: '500K+', founded: '2004' },
    { name: "SUSE", url: "https://suse.com", description: "Enterprise Linux and open source", category: 'global', rating: 4.4, developers: '100K+', founded: '1992' },
    { name: "MongoDB", url: "https://mongodb.com", description: "Database and data platform", category: 'database', rating: 4.7, developers: '2M+', founded: '2007' },
    { name: "PostgreSQL", url: "https://postgresql.org", description: "Open source relational database", category: 'database', rating: 4.8, developers: '1M+', founded: '1996' },
    { name: "MySQL", url: "https://mysql.com", description: "Open source database management", category: 'database', rating: 4.6, developers: '5M+', founded: '1995' },
    { name: "Redis Labs", url: "https://redis.com", description: "In-memory data structure store", category: 'database', rating: 4.5, developers: '1M+', founded: '2011' },
    { name: "Elastic", url: "https://elastic.co", description: "Search and analytics platform", category: 'analytics', rating: 4.6, developers: '500K+', founded: '2012' },
    { name: "Confluent", url: "https://confluent.io", description: "Event streaming platform", category: 'analytics', rating: 4.4, developers: '100K+', founded: '2014' },
    { name: "Databricks", url: "https://databricks.com", description: "Unified analytics platform", category: 'analytics', rating: 4.7, developers: '200K+', founded: '2013' },
    { name: "Snowflake", url: "https://snowflake.com", description: "Cloud data platform", category: 'cloud', rating: 4.8, developers: '10K+', founded: '2012' },
    { name: "Tableau", url: "https://tableau.com", description: "Data visualization and analytics", category: 'analytics', rating: 4.6, developers: '1M+', founded: '2003' },
    { name: "Power BI", url: "https://powerbi.microsoft.com", description: "Business intelligence and analytics", category: 'analytics', rating: 4.5, developers: '5M+', founded: '2013' },
    { name: "Looker", url: "https://looker.com", description: "Data platform and analytics", category: 'analytics', rating: 4.4, developers: '100K+', founded: '2011' },
    { name: "Qlik", url: "https://qlik.com", description: "Data analytics and business intelligence", category: 'analytics', rating: 4.3, developers: '40K+', founded: '1993' },
    { name: "Alteryx", url: "https://alteryx.com", description: "Analytics automation platform", category: 'analytics', rating: 4.5, developers: '50K+', founded: '2010' },
    { name: "KNIME", url: "https://knime.com", description: "Open source data analytics platform", category: 'analytics', rating: 4.4, developers: '100K+', founded: '2004' },
    { name: "RapidMiner", url: "https://rapidminer.com", description: "Data science platform", category: 'analytics', rating: 4.3, developers: '80K+', founded: '2006' },
    { name: "DataRobot", url: "https://datarobot.com", description: "Automated machine learning platform", category: 'analytics', rating: 4.4, developers: '50K+', founded: '2012' }
  ];

  const filteredLinks = directLinks.filter(link => {
    const matchesSearch = link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         link.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || link.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedLinks = [...filteredLinks].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'developers') return b.developers.localeCompare(a.developers);
    if (sortBy === 'founded') return a.founded.localeCompare(b.founded);
    return 0;
  });

  const displayedLinks = showAll ? sortedLinks : sortedLinks.slice(0, 12);

  useEffect(() => {
    setFeaturedPartners(sortedLinks.slice(0, 6));
  }, [sortedLinks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            <span style={{ color: '#16808D' }}>Software Development</span> Partners
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Leading software development partners offering enterprise solutions, database management, cloud services, and security platforms through cutting-edge software engineering technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Enterprise Solutions</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Database Management</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Cloud Services</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Security Platforms</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Analytics Platforms</span>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-2 mx-auto">
                <Code className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-1">{partnerData.description}</h3>
              <p className="text-xs text-red-600">Partners</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl mb-2 mx-auto">
                <TrendingUp className="h-5 w-5 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-1">{partnerData.stats}</h3>
              <p className="text-xs text-pink-600">Project Success</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl mb-2 mx-auto">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-yellow-700 mb-1">{partnerData.rating}</h3>
              <p className="text-xs text-yellow-600">Rating</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-2 mx-auto">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-1">{partnerData.years}</h3>
              <p className="text-xs text-purple-600">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-2 mx-auto">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-1">{partnerData.totalPrograms}</h3>
              <p className="text-xs text-green-600">Software Products</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-2 mx-auto">
                <Heart className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-1">{partnerData.beneficiaries}</h3>
              <p className="text-xs text-blue-600">Software Engineers</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-2 mx-auto">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-1">{partnerData.volunteers}</h3>
              <p className="text-xs text-orange-600">Volunteers</p>
            </div>
          </div>
        </div>

        {/* Advanced Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-indigo-600" />
              Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center justify-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-400'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search software development partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="developers">Sort by Developers</option>
                <option value="founded">Sort by Founded</option>
              </select>
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg">
                <Filter className="h-5 w-5 text-indigo-600" />
                <span className="text-indigo-700 font-medium">{filteredLinks.length} partners found</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Links Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ExternalLink className="h-6 w-6 mr-3 text-indigo-600" />
            Direct Links
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedLinks.map((link, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col">
                {/* Header with Rating and External Link */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight min-h-[3rem] flex items-center">{link.name}</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-yellow-700 ml-1">{link.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-xs font-medium">Since {link.founded}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full shadow-sm border border-indigo-200 overflow-hidden">
                      <img 
                        src={`https://source.unsplash.com/400x400/?${encodeURIComponent(link.name.toLowerCase().replace(/\s+/g, '+'))},logo,official,software`}
                        alt={link.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://picsum.photos/seed/${link.name}/64/64.jpg`;
                        }}
                      />
                    </div>
                    <div className="absolute -right-2 -bottom-2 w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
                      {link.name.charAt(0).toUpperCase()}{link.name.charAt(link.name.length - 1).toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{link.description}</p>

                {/* Enhanced Stats Section */}
                <div className="space-y-3 mb-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">{link.developers}</span>
                        <span className="text-xs text-gray-500 ml-1">developers</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs rounded-full font-semibold border border-indigo-200">
                      {categories.find(cat => cat.id === link.category)?.name || 'Software'}
                    </div>
                  </div>
                  
                  {/* Additional Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Award className="h-3 w-3 mr-1 text-green-600" />
                      <span>Agile</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Shield className="h-3 w-3 mr-1 text-purple-600" />
                      <span>Scalable</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <TrendingUp className="h-3 w-3 mr-1 text-orange-600" />
                      <span>Modern</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <span className="text-center">Visit Website</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                  
                  <div className="relative group">
                    <button
                      onClick={() => handleGenerateCertificate(link)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <span className="text-center">Certificate</span>
                      <FileText className="h-4 w-4 ml-2" />
                    </button>
                    
                    {/* Hover dropdown for download/print options */}
                    <div className="absolute bottom-full left-0 right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                        <button
                          onClick={() => handleGenerateCertificate(link)}
                          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </button>
                        <button
                          onClick={() => handlePrintCertificate(link)}
                          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Printer className="h-4 w-4 mr-2" />
                          Print Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLinks.length > 12 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors transform hover:scale-105"
              >
                {showAll ? 'Show Less' : `Show All ${filteredLinks.length} Partners`}
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          )}
        </div>

        {/* Growth Metric */}
        <div className="mt-8 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <div className="flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-indigo-600 mr-3" />
            <span className="text-lg font-semibold text-gray-900">
              Growth Metric: <span className="text-indigo-600">{partnerData.growthMetric}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentPartners;
