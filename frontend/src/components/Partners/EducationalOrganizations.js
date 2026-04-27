import React, { useState, useEffect } from 'react';
import { ExternalLink, GraduationCap, Users, Star, TrendingUp, Clock, ArrowRight, Search, Filter, Award, Target, Book, School, Shield, Heart, Download, FileText, Printer, BookOpen, Zap } from 'lucide-react';

const EducationalOrganizations = () => {
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
    const certificateNumber = `CERT-EO-${partner.name.replace(/\s+/g, '-').toUpperCase()}-${Date.now().toString().slice(-6)}`;
    
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
            <p class="subtitle">Educational Excellence Alliance</p>
        </div>
        
        <div class="content">
            <p class="body-text">
                This is to certify that <strong>${partner.name}</strong> is officially recognized as a 
                distinguished partner in the PriHub Cognitive Support ecosystem.
            </p>
            
            <div class="recipient">${partner.name}</div>
            
            <p class="body-text">
                In recognition of their outstanding contributions to educational innovation 
                and commitment to advancing learning opportunities for individuals with disabilities.
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
                        <div class="detail-label">Programs:</div>
                        <div class="detail-value">${partner.programs || 'Educational Programs'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Students:</div>
                        <div class="detail-value">${partner.students || 'Global Learners'}</div>
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
                This partnership signifies a shared commitment to educational excellence, learning innovation, and 
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
    communityName: "Educational Organizations",
    description: "200+",
    stats: "95%",
    rating: "4.8",
    years: "12+",
    growthMetric: "Educational Excellence",
    image: "/EducationalOrganizations.webp",
    totalPrograms: "5K+",
    beneficiaries: "2M+",
    volunteers: "100K+",
    countries: "150+"
  };

  const categories = [
    { id: 'all', name: 'All Categories', icon: GraduationCap },
    { id: 'universities', name: 'Universities', icon: School },
    { id: 'schools', name: 'Schools', icon: School },
    { id: 'online', name: 'Online Learning', icon: Book },
    { id: 'specialized', name: 'Specialized', icon: Award },
    { id: 'training', name: 'Training Centers', icon: Target }
  ];

  const directLinks = [
    // Existing Online Learning Platforms
    { name: "Coursera", url: "https://coursera.org", description: "Online courses from top universities", category: 'online', rating: 4.8, students: '100M+', founded: '2012' },
    { name: "edX", url: "https://edx.org", description: "Online courses from top institutions", category: 'online', rating: 4.7, students: '40M+', founded: '2012' },
    { name: "Khan Academy", url: "https://khanacademy.org", description: "Free online education for all", category: 'online', rating: 4.9, students: '120M+', founded: '2008' },
    { name: "Udemy", url: "https://udemy.com", description: "Online learning marketplace", category: 'online', rating: 4.6, students: '50M+', founded: '2010' },
    { name: "LinkedIn Learning", url: "https://linkedin.com/learning", description: "Professional development courses", category: 'online', rating: 4.5, students: '27M+', founded: '2016' },
    { name: "Pluralsight", url: "https://pluralsight.com", description: "Technology skill development", category: 'online', rating: 4.6, students: '15M+', founded: '2004' },
    { name: "Skillshare", url: "https://skillshare.com", description: "Creative and business skills", category: 'online', rating: 4.4, students: '12M+', founded: '2010' },
    { name: "MasterClass", url: "https://masterclass.com", description: "Celebrity-taught online classes", category: 'online', rating: 4.7, students: '2M+', founded: '2015' },
    { name: "Codecademy", url: "https://codecademy.com", description: "Interactive coding lessons", category: 'online', rating: 4.5, students: '50M+', founded: '2011' },
    { name: "freeCodeCamp", url: "https://freecodecamp.org", description: "Free coding bootcamp", category: 'online', rating: 4.8, students: '40M+', founded: '2014' },
    
    // New Indian Online Learning Platforms
    { name: "BYJU'S", url: "https://byjus.com/", description: "India's leading online learning platform", category: 'online', rating: 4.5, students: '150M+', founded: '2011' },
    { name: "Unacademy", url: "https://unacademy.com/", description: "Online learning platform for competitive exams", category: 'online', rating: 4.4, students: '50M+', founded: '2015' },
    { name: "Vedantu", url: "https://www.vedantu.com/", description: "Live online tutoring platform", category: 'online', rating: 4.3, students: '25M+', founded: '2011' },
    { name: "UpGrad", url: "https://www.upgrad.com/", description: "Higher education and professional development", category: 'online', rating: 4.6, students: '10M+', founded: '2015' },
    { name: "Simplilearn", url: "https://www.simplilearn.com/", description: "Professional certification training", category: 'online', rating: 4.5, students: '2M+', founded: '2010' },
    { name: "Great Learning", url: "https://www.mygreatlearning.com/", description: "Professional and higher education", category: 'online', rating: 4.4, students: '5M+', founded: '2013' },
    { name: "Scaler", url: "https://www.scaler.com/", description: "Tech education and career platform", category: 'online', rating: 4.7, students: '1M+', founded: '2019' },
    { name: "Coding Ninjas", url: "https://www.codingninjas.com/", description: "Coding education platform", category: 'online', rating: 4.5, students: '500K+', founded: '2016' },
    { name: "Coding Blocks", url: "https://www.codingblocks.com/", description: "Programming education platform", category: 'online', rating: 4.4, students: '200K+', founded: '2014' },
    { name: "Physics Wallah", url: "https://www.pw.live/", description: "Affordable education platform", category: 'online', rating: 4.6, students: '20M+', founded: '2020' },
    { name: "Testbook", url: "https://testbook.com/", description: "Exam preparation platform", category: 'online', rating: 4.3, students: '10M+', founded: '2014' },
    { name: "Gradeup (BYJU'S Exam Prep)", url: "https://byjusexamprep.com/", description: "Exam preparation platform", category: 'online', rating: 4.2, students: '30M+', founded: '2019' },
    { name: "Adda247", url: "https://www.adda247.com/", description: "Government exam preparation", category: 'online', rating: 4.3, students: '40M+', founded: '2016' },
    { name: "Embibe", url: "https://www.embibe.com/", description: "AI-powered learning platform", category: 'online', rating: 4.4, students: '15M+', founded: '2012' },
    { name: "Toppr", url: "https://www.toppr.com/", description: "K-12 learning platform", category: 'online', rating: 4.3, students: '20M+', founded: '2013' },
    
    // Existing International Universities
    { name: "Harvard University", url: "https://harvard.edu", description: "Ivy League research university", category: 'universities', rating: 4.9, students: '23K+', founded: '1636' },
    { name: "MIT", url: "https://mit.edu", description: "Massachusetts Institute of Technology", category: 'universities', rating: 4.9, students: '11K+', founded: '1861' },
    { name: "Stanford University", url: "https://stanford.edu", description: "Silicon Valley research university", category: 'universities', rating: 4.9, students: '17K+', founded: '1885' },
    { name: "Yale University", url: "https://yale.edu", description: "Ivy League research university", category: 'universities', rating: 4.8, students: '13K+', founded: '1701' },
    { name: "Princeton University", url: "https://princeton.edu", description: "Ivy League research university", category: 'universities', rating: 4.9, students: '8K+', founded: '1746' },
    { name: "Columbia University", url: "https://columbia.edu", description: "Ivy League research university", category: 'universities', rating: 4.8, students: '33K+', founded: '1754' },
    { name: "University of Oxford", url: "https://ox.ac.uk", description: "World's oldest English-speaking university", category: 'universities', rating: 4.9, students: '25K+', founded: '1096' },
    { name: "University of Cambridge", url: "https://cam.ac.uk", description: "World-renowned research university", category: 'universities', rating: 4.9, students: '23K+', founded: '1209' },
    { name: "Imperial College London", url: "https://imperial.ac.uk", description: "Science, engineering, medicine, business", category: 'universities', rating: 4.8, students: '20K+', founded: '1907' },
    { name: "University College London", url: "https://ucl.ac.uk", description: "London's global university", category: 'universities', rating: 4.8, students: '42K+', founded: '1826' },
    
    // New Indian Universities
    { name: "Indian Institute of Science", url: "https://www.iisc.ac.in/", description: "Premier research institution for science and engineering", category: 'universities', rating: 4.9, students: '4K+', founded: '1909' },
    { name: "Indira Gandhi National Open University", url: "http://www.ignou.ac.in/", description: "World's largest open university", category: 'universities', rating: 4.4, students: '4M+', founded: '1985' },
    { name: "University of Delhi", url: "http://www.du.ac.in/", description: "Premier central university", category: 'universities', rating: 4.7, students: '132K+', founded: '1922' },
    { name: "Jawaharlal Nehru University", url: "https://www.jnu.ac.in/", description: "Central university for postgraduate studies", category: 'universities', rating: 4.8, students: '8K+', founded: '1969' },
    { name: "Banaras Hindu University", url: "https://www.bhu.ac.in/", description: "Central university in Varanasi", category: 'universities', rating: 4.6, students: '30K+', founded: '1916' },
    { name: "Aligarh Muslim University", url: "https://www.amu.ac.in/", description: "Central university in Aligarh", category: 'universities', rating: 4.5, students: '28K+', founded: '1875' },
    { name: "Anna University", url: "https://www.annauniv.edu/", description: "Technical university in Tamil Nadu", category: 'universities', rating: 4.4, students: '50K+', founded: '1978' },
    { name: "Jadavpur University", url: "https://www.jadavpuruniversity.in/", description: "State university in Kolkata", category: 'universities', rating: 4.5, students: '10K+', founded: '1955' },
    { name: "Jamia Millia Islamia", url: "https://www.jmi.ac.in/", description: "Central university in Delhi", category: 'universities', rating: 4.6, students: '20K+', founded: '1920' },
    { name: "Pondicherry University", url: "https://www.pondiuni.edu.in/", description: "Central university in Puducherry", category: 'universities', rating: 4.3, students: '6K+', founded: '1985' },
    { name: "University of Hyderabad", url: "https://uohyd.ac.in/", description: "Central university in Hyderabad", category: 'universities', rating: 4.7, students: '5K+', founded: '1974' },
    { name: "Tezpur University", url: "https://www.tezu.ernet.in/", description: "Central university in Assam", category: 'universities', rating: 4.4, students: '3K+', founded: '1994' },
    { name: "North Eastern Hill University", url: "https://www.nehu.ac.in/", description: "Central university in Meghalaya", category: 'universities', rating: 4.3, students: '7K+', founded: '1973' },
    { name: "Assam University", url: "https://www.aus.ac.in/", description: "Central university in Assam", category: 'universities', rating: 4.2, students: '4K+', founded: '1994' },
    { name: "Guru Nanak Dev University", url: "https://www.gndu.ac.in/", description: "State university in Punjab", category: 'universities', rating: 4.4, students: '15K+', founded: '1969' },
    { name: "Savitribai Phule Pune University", url: "https://www.unipune.ac.in/", description: "State university in Maharashtra", category: 'universities', rating: 4.3, students: '500K+', founded: '1949' },
    { name: "University of Mumbai", url: "https://mu.ac.in/", description: "State university in Maharashtra", category: 'universities', rating: 4.4, students: '700K+', founded: '1857' },
    { name: "University of Calcutta", url: "https://www.caluniv.ac.in/", description: "State university in West Bengal", category: 'universities', rating: 4.3, students: '150K+', founded: '1857' },
    { name: "Osmania University", url: "https://www.osmania.ac.in/", description: "State university in Telangana", category: 'universities', rating: 4.3, students: '200K+', founded: '1918' },
    { name: "Andhra University", url: "https://www.andhrauniversity.edu.in/", description: "State university in Andhra Pradesh", category: 'universities', rating: 4.2, students: '30K+', founded: '1926' },
    { name: "Bharathiar University", url: "https://b-u.ac.in/", description: "State university in Tamil Nadu", category: 'universities', rating: 4.1, students: '200K+', founded: '1982' },
    { name: "Bharathidasan University", url: "https://www.bdu.ac.in/", description: "State university in Tamil Nadu", category: 'universities', rating: 4.0, students: '150K+', founded: '1982' },
    { name: "Annamalai University", url: "https://annamalaiuniversity.ac.in/", description: "Private university in Tamil Nadu", category: 'universities', rating: 4.1, students: '50K+', founded: '1929' },
    { name: "Banasthali Vidyapith", url: "https://www.banasthali.org/", description: "Deemed university for women", category: 'universities', rating: 4.3, students: '15K+', founded: '1935' },
    { name: "Rajasthan University", url: "https://www.uniraj.ac.in/", description: "State university in Rajasthan", category: 'universities', rating: 4.2, students: '300K+', founded: '1947' },
    { name: "Guru Gobind Singh Indraprastha University", url: "https://www.ipu.ac.in/", description: "State university in Delhi", category: 'universities', rating: 4.3, students: '100K+', founded: '1998' },
    { name: "Kurukshetra University", url: "https://www.kuk.ac.in/", description: "State university in Haryana", category: 'universities', rating: 4.1, students: '200K+', founded: '1956' },
    { name: "Punjab University", url: "https://puchd.ac.in/", description: "State university in Punjab", category: 'universities', rating: 4.4, students: '30K+', founded: '1882' },
    { name: "Gujarat University", url: "https://www.gujaratuniversity.ac.in/", description: "State university in Gujarat", category: 'universities', rating: 4.2, students: '300K+', founded: '1949' },
    { name: "Kerala University", url: "https://www.keralauniversity.ac.in/", description: "State university in Kerala", category: 'universities', rating: 4.3, students: '150K+', founded: '1937' },
    { name: "Karnataka State Open University", url: "https://ksoumysuru.ac.in/", description: "Open university in Karnataka", category: 'universities', rating: 3.8, students: '100K+', founded: '1996' },
    { name: "Dr. B.R. Ambedkar University", url: "https://aud.ac.in/", description: "State university in Delhi", category: 'universities', rating: 4.2, students: '10K+', founded: '1998' },
    { name: "Nalanda University", url: "https://nalandauniv.edu.in/", description: "International university in Bihar", category: 'universities', rating: 4.0, students: '1K+', founded: '2014' },
    { name: "Tripura University", url: "https://tripurauniv.ac.in/", description: "Central university in Tripura", category: 'universities', rating: 4.1, students: '5K+', founded: '1987' },
    { name: "Manipur University", url: "https://www.manipuruniv.ac.in/", description: "Central university in Manipur", category: 'universities', rating: 4.0, students: '8K+', founded: '1980' },
    { name: "Central University of Rajasthan", url: "https://www.curaj.ac.in/", description: "Central university in Rajasthan", category: 'universities', rating: 4.1, students: '3K+', founded: '2009' },
    { name: "Central University of Punjab", url: "https://cup.edu.in/", description: "Central university in Punjab", category: 'universities', rating: 4.0, students: '2K+', founded: '2009' },
    { name: "Central University of Gujarat", url: "https://www.cug.ac.in/", description: "Central university in Gujarat", category: 'universities', rating: 4.0, students: '3K+', founded: '2009' },
    { name: "Central University of Haryana", url: "https://www.cuh.ac.in/", description: "Central university in Haryana", category: 'universities', rating: 4.1, students: '4K+', founded: '2009' },
    { name: "Central University of Karnataka", url: "https://www.cuk.ac.in/", description: "Central university in Karnataka", category: 'universities', rating: 4.0, students: '3K+', founded: '2009' },
    
    // New Schools & Education Boards
    { name: "Central Board of Secondary Education", url: "https://www.cbse.gov.in/", description: "National education board in India", category: 'schools', rating: 4.5, students: '20M+', founded: '1962' },
    { name: "Council for the Indian School Certificate Examinations", url: "https://cisce.org/", description: "National education board for ICSE/ISC", category: 'schools', rating: 4.4, students: '2M+', founded: '1958' },
    { name: "National Institute of Open Schooling", url: "https://www.nios.ac.in/", description: "Open schooling system in India", category: 'schools', rating: 4.2, students: '2M+', founded: '1989' },
    { name: "Kendriya Vidyalaya Sangathan", url: "https://kvsangathan.nic.in/", description: "Central government school system", category: 'schools', rating: 4.6, students: '1.2M+', founded: '1963' },
    { name: "Navodaya Vidyalaya Samiti", url: "https://navodaya.gov.in/", description: "Residential schools for rural students", category: 'schools', rating: 4.5, students: '400K+', founded: '1986' },
    { name: "Delhi Public School Society", url: "https://www.dpsfamily.org/", description: "Private school chain in India", category: 'schools', rating: 4.4, students: '300K+', founded: '1949' },
    { name: "Ryan International Schools", url: "https://www.ryangroup.org/", description: "Private school chain in India", category: 'schools', rating: 4.3, students: '200K+', founded: '1976' },
    { name: "DAV Schools", url: "https://davcmc.net.in/", description: "Dayanand Anglo Vedic schools", category: 'schools', rating: 4.4, students: '500K+', founded: '1886' },
    { name: "Army Public Schools", url: "https://aps-csb.in/", description: "Army welfare education society schools", category: 'schools', rating: 4.5, students: '150K+', founded: '1983' },
    { name: "Amity International School", url: "https://www.amity.edu/ais/", description: "Private international school chain", category: 'schools', rating: 4.4, students: '100K+', founded: '1991' },
    
    // Existing Schools
    { name: "ABCmouse", url: "https://abcmouse.com", description: "Early learning academy", category: 'schools', rating: 4.5, students: '10M+', founded: '2006' },
    { name: "Reading Eggs", url: "https://readingeggs.com", description: "Learn to read program", category: 'schools', rating: 4.4, students: '5M+', founded: '2006' },
    { name: "Starfall", url: "https://starfall.com", description: "Children's educational games", category: 'schools', rating: 4.6, students: '3M+', founded: '2002' },
    { name: "Funbrain", url: "https://funbrain.com", description: "Educational games for kids", category: 'schools', rating: 4.3, students: '2M+', founded: '1997' },
    { name: "BrainPOP", url: "https://brainpop.com", description: "Animated educational content", category: 'schools', rating: 4.5, students: '25M+', founded: '1999' },
    
    // New Specialized Training Centers
    { name: "NIIT", url: "https://www.niit.com/", description: "IT training and education company", category: 'training', rating: 4.2, students: '35M+', founded: '1981' },
    { name: "Aptech", url: "https://www.aptech-worldwide.com/", description: "Computer education and training", category: 'training', rating: 4.1, students: '7M+', founded: '1986' },
    { name: "Jetking", url: "https://www.jetking.com/", description: "Computer hardware and networking training", category: 'training', rating: 4.0, students: '1M+', founded: '1947' },
    { name: "Arena Animation", url: "https://www.arena-multimedia.com/", description: "Animation and multimedia training", category: 'training', rating: 4.3, students: '400K+', founded: '1996' },
    { name: "MAAC", url: "https://www.maacindia.com/", description: "Maya Academy of Advanced Cinematics", category: 'training', rating: 4.2, students: '30K+', founded: '2001' },
    { name: "Tally Education", url: "https://tallyeducation.com/", description: "Accounting and business software training", category: 'training', rating: 4.1, students: '5M+', founded: '1986' },
    { name: "Frankfinn Institute", url: "https://www.frankfinn.com/", description: "Aviation and hospitality training", category: 'training', rating: 4.0, students: '50K+', founded: '1993' },
    { name: "IMS Learning", url: "https://www.imsindia.com/", description: "Management entrance exam preparation", category: 'training', rating: 4.3, students: '100K+', founded: '1990' },
    { name: "TIME Institute", url: "https://www.time4education.com/", description: "Entrance exam preparation institute", category: 'training', rating: 4.4, students: '200K+', founded: '1992' },
    { name: "Career Launcher", url: "https://www.careerlauncher.com/", description: "Education and career training", category: 'training', rating: 4.3, students: '150K+', founded: '1996' },
    
    // Existing Training
    { name: "Nearpod", url: "https://nearpod.com", description: "Interactive lesson platform", category: 'training', rating: 4.6, students: '7M+', founded: '2012' },
    { name: "Kahoot!", url: "https://kahoot.com", description: "Game-based learning platform", category: 'training', rating: 4.7, students: '50M+', founded: '2013' },
    { name: "Pear Deck", url: "https://peardeck.com", description: "Interactive presentation tool", category: 'training', rating: 4.4, students: '1M+', founded: '2015' },
    { name: "Socrative", url: "https://socrative.com", description: "Student response system", category: 'training', rating: 4.3, students: '3M+', founded: '2011' },
    { name: "Poll Everywhere", url: "https://polleverywhere.com", description: "Live audience polling", category: 'training', rating: 4.5, students: '1M+', founded: '2007' }
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
    if (sortBy === 'students') return b.students.localeCompare(a.students);
    if (sortBy === 'founded') return a.founded.localeCompare(b.founded);
    return 0;
  });

  const displayedLinks = showAll ? sortedLinks : sortedLinks.slice(0, 12);

  useEffect(() => {
    setFeaturedPartners(sortedLinks.slice(0, 6));
  }, [sortedLinks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            <span style={{ color: '#16808D' }}>Educational</span> Organizations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Leading educational institutions providing quality education, specialized training, and academic excellence through innovative teaching methods and comprehensive learning programs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Quality Education</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Specialized Training</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Academic Excellence</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Innovative Teaching</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Learning Programs</span>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-2 mx-auto">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-1">{partnerData.description}</h3>
              <p className="text-xs text-green-600">Institutions</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl mb-2 mx-auto">
                <TrendingUp className="h-5 w-5 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-1">{partnerData.stats}</h3>
              <p className="text-xs text-pink-600">Student Success</p>
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
              <p className="text-xs text-green-600">Active Programs</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-2 mx-auto">
                <Heart className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-1">{partnerData.beneficiaries}</h3>
              <p className="text-xs text-blue-600">Students Served</p>
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
              <Target className="h-5 w-5 mr-2 text-green-600" />
              Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center justify-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
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
                placeholder="Search educational organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="students">Sort by Students</option>
                <option value="founded">Sort by Founded</option>
              </select>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg">
                <Filter className="h-5 w-5 text-green-600" />
                <span className="text-green-700 font-medium">{filteredLinks.length} organizations found</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Links Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ExternalLink className="h-6 w-6 mr-3 text-green-600" />
            Direct Links
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedLinks.map((link, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col">
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
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full shadow-sm border border-green-200 overflow-hidden">
                      <img 
                        src={`https://source.unsplash.com/400x400/?${encodeURIComponent(link.name.toLowerCase().replace(/\s+/g, '+'))},logo,official,education`}
                        alt={link.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://picsum.photos/seed/${link.name}/64/64.jpg`;
                        }}
                      />
                    </div>
                    <div className="absolute -right-2 -bottom-2 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
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
                        <span className="font-semibold text-gray-900">{link.students}</span>
                        <span className="text-xs text-gray-500 ml-1">students</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs rounded-full font-semibold border border-green-200">
                      {categories.find(cat => cat.id === link.category)?.name || 'Education'}
                    </div>
                  </div>
                  
                  {/* Additional Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Award className="h-3 w-3 mr-1 text-green-600" />
                      <span>Accredited</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Shield className="h-3 w-3 mr-1 text-purple-600" />
                      <span>Certified</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <TrendingUp className="h-3 w-3 mr-1 text-orange-600" />
                      <span>Leading</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105"
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
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors transform hover:scale-105"
              >
                {showAll ? 'Show Less' : `Show All ${filteredLinks.length} Organizations`}
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          )}
        </div>

        {/* Growth Metric */}
        <div className="mt-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
          <div className="flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
            <span className="text-lg font-semibold text-gray-900">
              Growth Metric: <span className="text-green-600">{partnerData.growthMetric}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalOrganizations;
