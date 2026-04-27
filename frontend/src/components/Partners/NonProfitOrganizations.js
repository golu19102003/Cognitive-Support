import React, { useState, useEffect } from 'react';
import { ExternalLink, Heart, Users, Star, TrendingUp, Clock, ArrowRight, Search, Filter, Zap, Award, Shield, Download, FileText, Printer, HelpingHand, Target, Globe, Hand } from 'lucide-react';

const NonProfitOrganizations = () => {
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
    const certificateNumber = `CERT-NPO-${partner.name.replace(/\s+/g, '-').toUpperCase()}-${Date.now().toString().slice(-6)}`;
    
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
            <p class="subtitle">Social Impact Alliance</p>
        </div>
        
        <div class="content">
            <p class="body-text">
                This is to certify that <strong>${partner.name}</strong> is officially recognized as a 
                distinguished partner in the PriHub Cognitive Support ecosystem.
            </p>
            
            <div class="recipient">${partner.name}</div>
            
            <p class="body-text">
                In recognition of their outstanding contributions to social impact innovation 
                and commitment to advancing community services for individuals with disabilities.
            </p>
            
            <div class="partnership-details">
                <h3 style="margin: 0 0 15px 0; color: #2c3e50;">Partnership Details</h3>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="detail-label">Partner Name:</div>
                        <div class="detail-value">${partner.name}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Mission:</div>
                        <div class="detail-value">${partner.description}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Focus:</div>
                        <div class="detail-value">${partner.focus || 'Community Services'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Impact:</div>
                        <div class="detail-value">${partner.impact || 'Global Reach'}</div>
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
                This partnership signifies a shared commitment to social impact, community service, and 
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
    communityName: "Non-Profit Organizations",
    description: "120+",
    stats: "88%",
    rating: "4.6",
    years: "5+",
    growthMetric: "Community Impact",
    image: "/NonProfitOrganizations.webp",
    totalPrograms: "500+",
    beneficiaries: "10M+",
    volunteers: "2M+",
    countries: "150+"
  };

  const categories = [
    { id: 'all', name: 'All Categories', icon: Heart },
    { id: 'health', name: 'Health', icon: Heart },
    { id: 'education', name: 'Education', icon: Award },
    { id: 'environment', name: 'Environment', icon: Globe },
    { id: 'social', name: 'Social Services', icon: HelpingHand },
    { id: 'community', name: 'Community', icon: Hand }
  ];

  const directLinks = [
    { name: "Red Cross", url: "https://redcross.org", description: "Humanitarian aid organization", category: 'health', rating: 4.9, volunteers: '14M+', founded: '1881' },
    { name: "UNICEF", url: "https://unicef.org", description: "Children's rights organization", category: 'social', rating: 4.8, volunteers: '36K+', founded: '1946' },
    { name: "World Wildlife Fund", url: "https://wwf.org", description: "Wildlife conservation", category: 'environment', rating: 4.7, volunteers: '5M+', founded: '1961' },
    { name: "Doctors Without Borders", url: "https://doctorswithoutborders.org", description: "Medical humanitarian aid", category: 'health', rating: 4.8, volunteers: '40K+', founded: '1971' },
    { name: "Habitat for Humanity", url: "https://habitat.org", description: "Housing charity", category: 'social', rating: 4.6, volunteers: '2M+', founded: '1976' },
    { name: "Save the Children", url: "https://savethechildren.org", description: "Children's rights organization", category: 'social', rating: 4.7, volunteers: '25K+', founded: '1919' },
    { name: "Oxfam", url: "https://oxfam.org", description: "Poverty alleviation", category: 'community', rating: 4.5, volunteers: '20K+', founded: '1942' },
    { name: "Greenpeace", url: "https://greenpeace.org", description: "Environmental activism", category: 'environment', rating: 4.6, volunteers: '3M+', founded: '1971' },
    { name: "Salvation Army", url: "https://salvationarmy.org", description: "Social services organization", category: 'social', rating: 4.4, volunteers: '3.5M+', founded: '1865' },
    { name: "United Way", url: "https://unitedway.org", description: "Community impact network", category: 'community', rating: 4.5, volunteers: '2.9M+', founded: '1887' },
    { name: "CARE International", url: "https://care.org", description: "Humanitarian organization", category: 'community', rating: 4.6, volunteers: '10K+', founded: '1945' },
    { name: "World Vision", url: "https://worldvision.org", description: "Children's charity", category: 'social', rating: 4.5, volunteers: '100K+', founded: '1950' },
    { name: "Amnesty International", url: "https://amnesty.org", description: "Human rights organization", category: 'social', rating: 4.7, volunteers: '10M+', founded: '1961' },
    { name: "Nature Conservancy", url: "https://nature.org", description: "Environmental conservation", category: 'environment', rating: 4.8, volunteers: '1M+', founded: '1951' },
    { name: "Bill & Melinda Gates Foundation", url: "https://gatesfoundation.org", description: "Global health and development", category: 'health', rating: 4.9, volunteers: '1.5K+', founded: '2000' },
    { name: "Make-A-Wish Foundation", url: "https://wish.org", description: "Children's wish granting", category: 'social', rating: 4.8, volunteers: '40K+', founded: '1980' },
    { name: "St. Jude Children's Research", url: "https://stjude.org", description: "Pediatric cancer research", category: 'health', rating: 4.9, volunteers: '1M+', founded: '1962' },
    { name: "Feeding America", url: "https://feedingamerica.org", description: "Hunger relief organization", category: 'community', rating: 4.4, volunteers: '2M+', founded: '1979' },
    { name: "National Audubon Society", url: "https://audubon.org", description: "Bird conservation", category: 'environment', rating: 4.5, volunteers: '500K+', founded: '1905' },
    { name: "American Cancer Society", url: "https://cancer.org", description: "Cancer research and support", category: 'health', rating: 4.6, volunteers: '2M+', founded: '1913' },
    { name: "American Heart Association", url: "https://heart.org", description: "Heart health organization", category: 'health', rating: 4.7, volunteers: '1M+', founded: '1924' },
    { name: "NAACP", url: "https://naacp.org", description: "Civil rights organization", category: 'social', rating: 4.5, volunteers: '500K+', founded: '1909' },
    { name: "Urban League", url: "https://nul.org", description: "Civil rights and urban advocacy", category: 'social', rating: 4.4, volunteers: '200K+', founded: '1910' },
    { name: "La Raza", url: "https://unidosus.org", description: "Latino civil rights organization", category: 'social', rating: 4.3, volunteers: '300K+', founded: '1968' },
    { name: "Asian American Justice Center", url: "https://advancingjustice-aajc.org", description: "Asian American civil rights", category: 'social', rating: 4.4, volunteers: '100K+', founded: '1991' },
    { name: "Native American Rights Fund", url: "https://narf.org", description: "Native American legal rights", category: 'social', rating: 4.5, volunteers: '50K+', founded: '1970' },
    { name: "Lambda Legal", url: "https://lambdalegal.com", description: "LGBTQ+ legal advocacy", category: 'social', rating: 4.6, volunteers: '75K+', founded: '1973' },
    { name: "Disability Rights Legal Center", url: "https://disabilityrightslegalcenter.org", description: "Disability rights advocacy", category: 'social', rating: 4.3, volunteers: '25K+', founded: '1979' },
    { name: "Innocence Project", url: "https://innocenceproject.org", description: "Wrongful conviction advocacy", category: 'community', rating: 4.7, volunteers: '10K+', founded: '1992' },
    { name: "Equal Justice Initiative", url: "https://eji.org", description: "Criminal justice reform", category: 'community', rating: 4.8, volunteers: '15K+', founded: '1989' },
    { name: "Brennan Center", url: "https://brennancenter.org", description: "Justice and public policy", category: 'community', rating: 4.4, volunteers: '5K+', founded: '1993' }
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
    if (sortBy === 'volunteers') return b.volunteers.localeCompare(a.volunteers);
    if (sortBy === 'founded') return a.founded.localeCompare(b.founded);
    return 0;
  });

  const displayedLinks = showAll ? sortedLinks : sortedLinks.slice(0, 12);

  useEffect(() => {
    setFeaturedPartners(sortedLinks.slice(0, 6));
  }, [sortedLinks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
            <HelpingHand className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            <span style={{ color: '#16808D' }}>Non-Profit</span> Organizations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Leading non-profit organizations dedicated to social impact, humanitarian aid, and community development through charitable programs and advocacy work.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Social Impact</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Humanitarian Aid</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Community Development</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Charitable Programs</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Advocacy Work</span>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl mb-2 mx-auto">
                <Heart className="h-5 w-5 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-1">{partnerData.description}</h3>
              <p className="text-xs text-pink-600">Organizations</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-2 mx-auto">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-1">{partnerData.stats}</h3>
              <p className="text-xs text-purple-600">Social Impact</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl mb-2 mx-auto">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-yellow-700 mb-1">{partnerData.rating}</h3>
              <p className="text-xs text-yellow-600">Rating</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-2 mx-auto">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-1">{partnerData.years}</h3>
              <p className="text-xs text-green-600">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-2 mx-auto">
                <Target className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-1">{partnerData.totalPrograms}</h3>
              <p className="text-xs text-orange-600">Active Programs</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-2 mx-auto">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-1">{partnerData.beneficiaries}</h3>
              <p className="text-xs text-blue-600">Beneficiaries Served</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-2 mx-auto">
                <Award className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-1">{partnerData.volunteers}</h3>
              <p className="text-xs text-red-600">Volunteers</p>
            </div>
          </div>
        </div>

        {/* Advanced Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-orange-600" />
              Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center justify-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-orange-600 text-white border-orange-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'
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
                placeholder="Search non-profit organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="volunteers">Sort by Volunteers</option>
                <option value="founded">Sort by Founded</option>
              </select>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-lg">
                <Filter className="h-5 w-5 text-orange-600" />
                <span className="text-orange-700 font-medium">{filteredLinks.length} organizations found</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Links Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ExternalLink className="h-6 w-6 mr-3 text-orange-600" />
            Direct Links
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedLinks.map((link, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col">
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
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full shadow-sm border border-orange-200 overflow-hidden">
                      <img 
                        src={`https://source.unsplash.com/400x400/?${encodeURIComponent(link.name.toLowerCase().replace(/\s+/g, '+'))},logo,official,nonprofit`}
                        alt={link.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://picsum.photos/seed/${link.name}/64/64.jpg`;
                        }}
                      />
                    </div>
                    <div className="absolute -right-2 -bottom-2 w-7 h-7 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
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
                        <span className="font-semibold text-gray-900">{link.volunteers}</span>
                        <span className="text-xs text-gray-500 ml-1">volunteers</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 text-xs rounded-full font-semibold border border-orange-200">
                      {categories.find(cat => cat.id === link.category)?.name || 'Non-Profit'}
                    </div>
                  </div>
                  
                  {/* Additional Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Award className="h-3 w-3 mr-1 text-green-600" />
                      <span>Charitable</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Shield className="h-3 w-3 mr-1 text-purple-600" />
                      <span>Verified</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <TrendingUp className="h-3 w-3 mr-1 text-orange-600" />
                      <span>Impactful</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105"
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
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors transform hover:scale-105"
              >
                {showAll ? 'Show Less' : `Show All ${filteredLinks.length} Organizations`}
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          )}
        </div>

        {/* Growth Metric */}
        <div className="mt-8 text-center bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
          <div className="flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-pink-600 mr-3" />
            <span className="text-lg font-semibold text-gray-900">
              Growth Metric: <span className="text-pink-600">{partnerData.growthMetric}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonProfitOrganizations;
