import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Building, Users, DollarSign, MessageSquare, Calendar, Bell, Wrench, Brain, BookOpen, Target, Heart, Activity, FileText, Clock, AlertTriangle, TrendingUp, CheckCircle, Star, Award, Mail, Phone, Share2, ThumbsUp, Flag, X, MapPin, Globe, User } from 'lucide-react';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentCommunityIndex, setCurrentCommunityIndex] = useState(0);
    const [isCommunityAutoPlaying, setIsCommunityAutoPlaying] = useState(true);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);
    const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
    const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        communityName: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        website: '',
        communityType: '',
        organizationSize: '',
        yearsEstablished: '',
        serviceArea: '',
        primaryServices: '',
        primaryFocus: '',
        units: '',
        residents: '',
        description: '',
        tags: ''
    });
    const [communityFormData, setCommunityFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        occupation: '',
        experienceTitle: '',
        experience: '',
        rating: 5,
        tags: '',
        consent: false
    });
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [dropdownPositions, setDropdownPositions] = useState({});
    
    // State for storing submitted data
    const [submittedPartners, setSubmittedPartners] = useState([]);
    const [submittedReviews, setSubmittedReviews] = useState([]);
    
    // State for storing shuffled arrays
    const [shuffledPartners, setShuffledPartners] = useState([]);
    const [shuffledReviews, setShuffledReviews] = useState([]);

    // Database simulation functions
    const saveToDatabase = (collection, data) => {
        // Simulate database save using localStorage
        const existingData = JSON.parse(localStorage.getItem(collection) || '[]');
        const newData = [...existingData, { ...data, id: Date.now(), timestamp: new Date().toISOString() }];
        localStorage.setItem(collection, JSON.stringify(newData));
        return newData;
    };

    const getFromDatabase = (collection) => {
        // Simulate database get using localStorage
        return JSON.parse(localStorage.getItem(collection) || '[]');
    };

    // Load saved data on component mount
    useEffect(() => {
        setSubmittedPartners(getFromDatabase('communityPartners'));
        setSubmittedReviews(getFromDatabase('communityReviews'));
    }, []);

    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openDropdown && !event.target.closest('.dropdown-container')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    // Close modal when clicking outside
    useEffect(() => {
        const handleModalClickOutside = (event) => {
            // Close Partner Modal if open and click is outside modal content
            if (isPartnerModalOpen && !event.target.closest('.modal-content')) {
                setIsPartnerModalOpen(false);
            }
            // Close Community Modal if open and click is outside modal content
            if (isCommunityModalOpen && !event.target.closest('.modal-content')) {
                setIsCommunityModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleModalClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleModalClickOutside);
        };
    }, [isPartnerModalOpen, isCommunityModalOpen]);

    // Form handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCommunityInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCommunityFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageEdit = () => {
        document.getElementById('image-upload').click();
    };

    const handleImageRemove = () => {
        setUploadedImage(null);
        setImagePreview(null);
    };

    const toggleDropdown = (dropdownName, event) => {
        if (openDropdown === dropdownName) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdownName);
            // Calculate dropdown position
            const buttonRect = event.currentTarget.getBoundingClientRect();
            const spaceBelow = window.innerHeight - buttonRect.bottom;
            const spaceAbove = buttonRect.top;
            const dropdownHeight = 160; // max-h-40 = 160px
            
            let position = 'down';
            if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
                position = 'up';
            }
            
            setDropdownPositions(prev => ({
                ...prev,
                [dropdownName]: position
            }));
        }
    };

    const handleDropdownSelect = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        setOpenDropdown(null);
    };

    const handlePartnerClick = (partnerName) => {
        // Map partner names to their respective routes
        const partnerRoutes = {
            "AI Technology Providers": "/partners/ai-technology-providers",
            "Healthcare Institutions": "/partners/healthcare-institutions",
            "Educational Organizations": "/partners/educational-organizations",
            "Accessibility Standards Bodies": "/partners/accessibility-standards-bodies",
            "Research Institutions": "/partners/research-institutions",
            "Non-Profit Organizations": "/partners/non-profit-organizations",
            "Government Agencies": "/partners/government-agencies",
            "Assistive Tech Companies": "/partners/assistive-tech-companies",
            "Mental Health Providers": "/partners/mental-health-providers",
            "Disability Advocacy Groups": "/partners/disability-advocacy-groups",
            "Software Development Partners": "/partners/software-development-partners",
            "Training & Certification Bodies": "/partners/training-certification-bodies",
            "Cloud Service Providers": "/partners/cloud-service-providers",
            "Security Solutions": "/partners/security-solutions",
            "Mobile App Developers": "/partners/mobile-app-developers",
            "Data Analytics Firms": "/partners/data-analytics-firms",
            "IoT Solution Providers": "/partners/iot-solution-providers"
        };

        const route = partnerRoutes[partnerName];
        if (route) {
            window.location.href = route;
        } else {
            // Fallback to Google search if route not found
            const searchQuery = encodeURIComponent(`${partnerName} cognitive disability support services`);
            const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
            window.open(googleSearchUrl, '_blank');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Partner Application Submitted:', formData);
        
        // Prepare partner data for database
        const partnerData = {
            ...formData,
            logo: imagePreview || `https://picsum.photos/seed/${formData.communityName}/400/400.jpg`,
            status: 'pending',
            submittedAt: new Date().toISOString()
        };
        
        // Save to database
        const savedPartners = saveToDatabase('communityPartners', partnerData);
        setSubmittedPartners(savedPartners);
        setCurrentCommunityIndex(0); // Reset to show new content
        
        // Handle form submission here
        alert('Thank you for your interest! We will contact you soon.');
        setIsPartnerModalOpen(false);
        setFormData({
            communityName: '',
            contactPerson: '',
            email: '',
            phone: '',
            address: '',
            website: '',
            communityType: '',
            organizationSize: '',
            yearsEstablished: '',
            serviceArea: '',
            primaryServices: '',
            primaryFocus: '',
            units: '',
            residents: '',
            description: '',
            tags: ''
        });
        setUploadedImage(null);
        setImagePreview(null);
    };

    const handleCommunitySubmit = (e) => {
        e.preventDefault();
        console.log('Community Experience Submitted:', communityFormData);
        
        // Prepare review data for database
        const reviewData = {
            ...communityFormData,
            avatar: imagePreview || `https://picsum.photos/seed/${communityFormData.name}/400/400.jpg`,
            date: "Just now",
            helpful: 0,
            role: communityFormData.occupation || "Community Member",
            review: communityFormData.experience,
            title: communityFormData.experienceTitle,
            status: 'approved',
            submittedAt: new Date().toISOString()
        };
        
        // Save to database
        const savedReviews = saveToDatabase('communityReviews', reviewData);
        setSubmittedReviews(savedReviews);
        setCurrentReviewIndex(0); // Reset to show new content
        
        // Handle form submission here
        alert('Thank you for sharing your experience! Your story will inspire others.');
        setIsCommunityModalOpen(false);
        setCommunityFormData({
            name: '',
            email: '',
            phone: '',
            age: '',
            occupation: '',
            experienceTitle: '',
            experience: '',
            rating: 5,
            tags: '',
            consent: false
        });
        setUploadedImage(null);
        setImagePreview(null);
    };

    // Customer reviews data
    const customerReviews = [
        {
            name: "Sarah Johnson",
            role: "Parent of Autistic Child",
            rating: 5,
            title: "Life-Changing Platform",
            review: "This platform has been a game-changer for our family. The resources and support community helped us understand and better support our child's needs. We've seen remarkable progress in just a few months.",
            date: "2 weeks ago",
            avatar: "/sarah.jpg",
            helpful: 45,
            tags: ["Family Support", "Autism Resources", "Progress Tracking"]
        },
        {
            name: "Michael Chen",
            role: "Website User",
            rating: 5,
            title: "Amazing Resource",
            review: "I found this platform while searching for cognitive support tools. The user-friendly interface and comprehensive resources made it easy to find exactly what I needed. Highly recommend!",
            date: "1 month ago",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            helpful: 38,
            tags: ["User Friendly", "Comprehensive", "Easy to Use"]
        },
        {
            name: "Emily Rodriguez",
            role: "Regular User",
            rating: 5,
            title: "Best Decision Ever",
            review: "Signing up for this platform was the best decision I made. The daily exercises and progress tracking have helped me stay focused and organized. I feel more confident than ever!",
            date: "3 weeks ago",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            helpful: 52,
            tags: ["Daily Exercises", "Progress Tracking", "Confidence Building"]
        },
        {
            name: "James Thompson",
            role: "Website Member",
            rating: 4,
            title: "Finally Found Help",
            review: "After struggling for many long years, I finally found a platform that truly understands my needs. The tools and community support have been invaluable. I wish I had found this much sooner!",
            date: "2 months ago",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            helpful: 29,
            tags: ["Community Support", "Life Changing", "Highly Recommended"]
        },
        {
            name: "Lisa Park",
            role: "Platform User",
            rating: 5,
            title: "Outstanding Experience",
            review: "The platform exceeded all my expectations. The interactive features and personalized approach made a huge difference in my daily life. Absolutely worth it!",
            date: "1 month ago",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
            helpful: 41,
            tags: ["Interactive Features", "Personalized", "Great Value"]
        },
        {
            name: "David Williams",
            role: "Website Subscriber",
            rating: 5,
            title: "Transformative Tool",
            review: "This platform transformed how I approach daily challenges. The cognitive exercises and supportive community have been game-changers. Can't imagine life without it now!",
            date: "3 weeks ago",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            helpful: 33,
            tags: ["Cognitive Exercises", "Supportive Community", "Life Improvement"]
        },
        {
            name: "Jennifer Martinez",
            role: "Regular Visitor",
            rating: 5,
            title: "User-Friendly Platform",
            review: "I'm not tech-savvy at all, but this platform is so incredibly easy to use! The guided tutorials and very helpful support team made everything simple. Love using it every single day!",
            date: "2 weeks ago",
            avatar: "/jennifer.webp",
            helpful: 47,
            tags: ["Easy to Use", "Great Support", "Daily Use"]
        },
        {
            name: "Robert Anderson",
            role: "Website User",
            rating: 4,
            title: "Helped Me Grow",
            review: "Using this platform has helped me grow both personally and professionally. The tools are extremely practical and the results are very real. Very satisfied with my entire experience!",
            date: "1 month ago",
            avatar: "/robert.jpg",
            helpful: 38,
            tags: ["Personal Growth", "Professional Development", "Real Results"]
        },
        {
            name: "Amanda Foster",
            role: "Platform Member",
            rating: 5,
            title: "Exceeded Expectations",
            review: "I didn't expect such truly amazing results! The platform delivers on all its promises and so much more. The community is incredibly supportive and the resources are absolutely top-notch.",
            date: "4 weeks ago",
            avatar: "/amanda.jpg",
            helpful: 52,
            tags: ["Exceeded Expectations", "Top Quality", "Supportive Community"]
        },
        {
            name: "Thomas Wright",
            role: "Daily User",
            rating: 5,
            title: "Part of My Routine",
            review: "This platform has become an essential part of my daily routine. The exercises and tracking features keep me motivated and focused. Best investment in myself!",
            date: "2 months ago",
            avatar: "/thomas.jpg",
            helpful: 41,
            tags: ["Daily Routine", "Motivation", "Self Investment"]
        },
        {
            name: "Rachel Green",
            role: "Website User",
            rating: 5,
            title: "Life-Changing Experience",
            review: "This platform has completely changed my life! The tools and resources helped me overcome challenges I thought were truly impossible. So grateful for this amazing supportive community!",
            date: "3 weeks ago",
            avatar: "/rachel.webp",
            helpful: 44,
            tags: ["Life Changing", "Overcoming Challenges", "Grateful"]
        },
        {
            name: "Daniel Kim",
            role: "Platform Subscriber",
            rating: 4,
            title: "Worth Every Penny",
            review: "The subscription fee is worth every penny! The value I've received is incredible. The features and support are unmatched. I've tried many platforms but nothing compares to the comprehensive tools.",
            date: "1 month ago",
            avatar: "/daniel.jpg",
            helpful: 36,
            tags: ["Great Value", "Worth Investment", "Premium Features"]
        },
        {
            name: "Sophie Turner",
            role: "Regular User",
            rating: 5,
            title: "Amazing Community",
            review: "The community here is absolutely amazing! Everyone is so incredibly supportive and truly understanding. I've made real deep connections and found genuine helpful support. Highly recommend!",
            date: "5 weeks ago",
            avatar: "/sophie.jpg",
            helpful: 58,
            tags: ["Amazing Community", "Supportive", "Real Connections"]
        },
        {
            name: "Alex Johnson",
            role: "Website Visitor",
            rating: 5,
            title: "Found My Solution",
            review: "I tried so many platforms before finally finding this one. Finally, a solution that actually truly works! The personalized approach and amazing results speak for themselves.",
            date: "2 weeks ago",
            avatar: "/alex.jpg",
            helpful: 35,
            tags: ["Effective Solution", "Personalized", "Proven Results"]
        }
    ];
    
    // Community carousel data
    const communityPartners = [
        {
            communityName: "Special Education Centers",
            description: "Leading educational institutions providing specialized learning environments for students with diverse cognitive needs, utilizing adaptive technologies and personalized teaching methodologies.",
            units: "500+ Centers",
            residents: "10,000+ Students",
            partnerLogo: "/SpecialEducation.jpg",
            tags: ["Specialized Learning", "Adaptive Tech", "Personalized Education"]
        },
        {
            communityName: "Cognitive Therapy Clinics",
            description: "Advanced healthcare facilities offering evidence-based cognitive rehabilitation programs with cutting-edge therapeutic interventions and progressive treatment approaches.",
            units: "300+ Clinics",
            residents: "25,000+ Patients",
            partnerLogo: "/CognitiveBehaviour.webp",
            tags: ["Evidence-Based", "Advanced Therapy", "Progressive Treatment"]
        },
        {
            communityName: "Assisted Living Facilities",
            description: "Comprehensive residential communities providing specialized care and support for individuals requiring assistance with daily living activities and cognitive support.",
            units: "200+ Facilities",
            residents: "8,000+ Residents",
            partnerLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
            tags: ["24/7 Care", "Daily Support", "Residential Living"]
        },
        {
            communityName: "Neurodiversity Support Groups",
            description: "Inclusive community organizations dedicated to supporting neurodiverse individuals through peer support, advocacy, and specialized resource programs.",
            units: "150+ Groups",
            residents: "12,000+ Members",
            partnerLogo: "/NeuroSupportGroups.jpg",
            tags: ["Peer Support", "Advocacy", "Inclusive Programs"]
        },
        {
            communityName: "Rehabilitation Centers",
            description: "Specialized facilities providing comprehensive rehabilitation services combining traditional therapy with innovative cognitive enhancement technologies.",
            units: "400+ Centers",
            residents: "15,000+ Clients",
            partnerLogo: "/NeuroRehabilitationServices.webp",
            tags: ["Traditional Therapy", "Cognitive Tech", "Comprehensive Care"]
        },
        {
            communityName: "Autism Support Networks",
            description: "Dedicated organizations providing comprehensive support services for individuals with autism and their families through specialized programs and community resources.",
            units: "600+ Networks",
            residents: "18,000+ Families",
            partnerLogo: "/AutismSupport.webp",
            tags: ["Family Support", "Specialized Programs", "Community Resources"]
        },
        {
            communityName: "Memory Care Communities",
            description: "Specialized residential communities focused on providing exceptional care and cognitive support for individuals with memory impairments and dementia.",
            units: "250+ Communities",
            residents: "20,000+ Seniors",
            partnerLogo: "/MemoryCare.webp",
            tags: ["Memory Support", "Dementia Care", "Specialized Residence"]
        },
        {
            communityName: "Inclusive Education Schools",
            description: "Progressive educational institutions implementing inclusive learning environments with adaptive technologies and specialized support for diverse learning needs.",
            units: "180+ Schools",
            residents: "15,000+ Students",
            partnerLogo: "/InclusiveEducationSchools.jpeg",
            tags: ["Inclusive Learning", "Adaptive Tech", "Diverse Support"]
        },
        {
            communityName: "Speech Therapy Centers",
            description: "Professional facilities offering comprehensive speech and language therapy services using evidence-based techniques and advanced therapeutic technologies.",
            units: "350+ Centers",
            residents: "22,000+ Clients",
            partnerLogo: "/SpeechTherapyCenters.png",
            tags: ["Language Therapy", "Evidence-Based", "Advanced Tech"]
        },
        {
            communityName: "Occupational Therapy Clinics",
            description: "Specialized clinics providing occupational therapy services focused on enhancing daily living skills and cognitive functional independence.",
            units: "280+ Clinics",
            residents: "16,000+ Patients",
            partnerLogo: "/OccupationalTherapyClinics.jpg",
            tags: ["Daily Skills", "Functional Independence", "Specialized OT"]
        },
        {
            communityName: "ADHD Support Communities",
            description: "Supportive communities offering specialized resources, coaching, and therapeutic interventions for individuals with ADHD and their families.",
            units: "420+ Communities",
            residents: "25,000+ Members",
            partnerLogo: "/ADHDSupportCommunities.jpg",
            tags: ["ADHD Coaching", "Family Resources", "Therapeutic Support"]
        },
        {
            communityName: "Dyslexia Learning Centers",
            description: "Specialized educational centers providing targeted support and innovative learning strategies for individuals with dyslexia and reading difficulties.",
            units: "190+ Centers",
            residents: "8,000+ Students",
            partnerLogo: "/DyslexiaLearningCenters.jpg",
            tags: ["Reading Support", "Innovative Learning", "Targeted Strategies"]
        },
        {
            communityName: "Mental Health Clinics",
            description: "Comprehensive mental health facilities providing psychiatric care, counseling, and therapeutic interventions for various cognitive and emotional conditions.",
            units: "450+ Clinics",
            residents: "30,000+ Patients",
            partnerLogo: "/MentalHealthClinics.jpg",
            tags: ["Psychiatric Care", "Counseling", "Therapeutic Interventions"]
        },
        {
            communityName: "Developmental Disability Centers",
            description: "Specialized centers offering comprehensive support services for individuals with developmental disabilities and their families.",
            units: "320+ Centers",
            residents: "18,000+ Individuals",
            partnerLogo: "/DevelopmentDisabilities.jpg",
            tags: ["Developmental Support", "Family Services", "Comprehensive Care"]
        },
        {
            communityName: "Learning Disability Schools",
            description: "Educational institutions specifically designed to support students with various learning disabilities through specialized curricula and teaching methods.",
            units: "240+ Schools",
            residents: "12,000+ Students",
            partnerLogo: "/Learningdisability.png",
            tags: ["Specialized Curriculum", "Adaptive Teaching", "Learning Support"]
        },
        {
            communityName: "Behavioral Therapy Centers",
            description: "Professional facilities offering applied behavior analysis and behavioral therapy services for individuals with behavioral challenges and developmental disorders.",
            units: "380+ Centers",
            residents: "22,000+ Clients",
            partnerLogo: "/BehavioralTherapyCenters.jpg",
            tags: ["ABA Therapy", "Behavioral Support", "Developmental Disorders"]
        },
        {
            communityName: "Sensory Integration Clinics",
            description: "Specialized clinics providing sensory integration therapy and treatments for individuals with sensory processing disorders and related conditions.",
            units: "160+ Clinics",
            residents: "9,000+ Patients",
            partnerLogo: "/SensoryIntegrationClinics.jpg",
            tags: ["Sensory Therapy", "Processing Disorders", "Integrated Treatment"]
        },
        {
            communityName: "Social Skills Groups",
            description: "Community-focused groups providing social skills training and development programs for individuals with social communication challenges.",
            units: "290+ Groups",
            residents: "14,000+ Members",
            partnerLogo: "/SocialSkillsGroups.webp",
            tags: ["Social Training", "Communication Skills", "Group Programs"]
        },
        {
            communityName: "Cognitive Assessment Centers",
            description: "Professional facilities offering comprehensive cognitive and neuropsychological assessments for diagnosis and treatment planning.",
            units: "140+ Centers",
            residents: "11,000+ Assessments",
            partnerLogo: "/CognitiveAssessmentCenters.jpg",
            tags: ["Neuropsychological Testing", "Cognitive Assessment", "Diagnostic Services"]
        },
        {
            communityName: "Executive Function Coaching Centers",
            description: "Specialized coaching centers providing executive function training, ADHD coaching, and cognitive skill development for improved daily functioning.",
            units: "220+ Centers",
            residents: "13,000+ Clients",
            partnerLogo: "/ExecutiveFunctionCoachingCenters.webp",
            tags: ["Executive Coaching", "ADHD Support", "Cognitive Skills"]
        }
    ];
    
    // Update shuffled arrays when data changes
    useEffect(() => {
        const approvedSubmittedPartners = submittedPartners.filter(partner => partner.status === 'approved' || partner.status === 'pending');
        const allPartners = [...communityPartners, ...approvedSubmittedPartners];
        setShuffledPartners(allPartners.sort(() => Math.random() - 0.5));
    }, [submittedPartners]);

    useEffect(() => {
        const approvedSubmittedReviews = submittedReviews.filter(review => review.status === 'approved');
        const allReviews = [...customerReviews, ...approvedSubmittedReviews];
        setShuffledReviews(allReviews.sort(() => Math.random() - 0.5));
    }, [submittedReviews]);

    // Get current data arrays (now using stable shuffled arrays)
    const currentPartners = shuffledPartners.length > 0 ? shuffledPartners : communityPartners;
    const currentReviews = shuffledReviews.length > 0 ? shuffledReviews : customerReviews;
    
    // Community carousel functions
    const handleNextCommunity = () => {
        setIsCommunityAutoPlaying(false);
        setCurrentCommunityIndex((prevIndex) => 
            prevIndex === currentPartners.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const handlePrevCommunity = () => {
        setIsCommunityAutoPlaying(false);
        setCurrentCommunityIndex((prevIndex) => 
            prevIndex === 0 ? currentPartners.length - 1 : prevIndex - 1
        );
    };

    const handlePrevReview = () => {
        setIsReviewAutoPlaying(false);
        setCurrentReviewIndex((prevIndex) => 
            prevIndex === 0 ? currentReviews.length - 1 : prevIndex - 1
        );
    };

    const handleNextReview = () => {
        setIsReviewAutoPlaying(false);
        setCurrentReviewIndex((prevIndex) => 
            prevIndex === currentReviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Auto-play functionality for community carousel
    useEffect(() => {
        if (!isCommunityAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentCommunityIndex((prevIndex) => 
                prevIndex === currentPartners.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [isCommunityAutoPlaying, currentPartners.length]);

    // Auto-play functionality for reviews
    useEffect(() => {
        if (!isReviewAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => 
                prevIndex === currentReviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isReviewAutoPlaying, currentReviews.length]);

    // Reset community auto-play when user interacts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCommunityAutoPlaying(true);
        }, 10000); // Resume auto-play after 10 seconds of inactivity

        return () => clearTimeout(timer);
    }, [currentCommunityIndex]);

    // Reset review auto-play when user interacts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReviewAutoPlaying(true);
        }, 10000); // Resume auto-play after 10 seconds of inactivity

        return () => clearTimeout(timer);
    }, [currentReviewIndex]);

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
              to="/dashboard"
              className="flex items-center justify-center px-8 py-3 bg-white text-[#1B9AAA] rounded-lg font-semibold hover:bg-gradient-to-r hover:from-[#142C52] hover:to-[#16808D] hover:text-white transition-all transform hover:scale-105 shadow-lg"
            >
              <Brain className="mr-2 h-5 w-5" />
              Explore Prihub
            </Link>
            <Link
              to="/signin"
              className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg font-semibold hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg"
            >
              Get Support
              <Users className="ml-2 h-5 w-5" />
            </Link>
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
        <div className="relative dropdown-container">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch mx-4 sm:mx-8 md:mx-16" style={{ gap: isDarkMode ? '1rem' : undefined }}>
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
                <div key={`first-${index}`} className="flex-shrink-0 bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-200 animate-fade-in">
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
                <div key={`second-${index}`} className="flex-shrink-0 bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-200 animate-fade-in">
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
          transition: all 0.5s ease;
        }
        
        .animate-scroll-x > div:hover {
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          transform: scale(1.10) translateZ(10px);
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
        <div className="relative dropdown-container">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute -left-2 top-[40%] transform -translate-y-[40%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-2 top-[40%] transform -translate-y-[40%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch mx-4 sm:mx-8 md:mx-16" style={{ gap: isDarkMode ? '1rem' : undefined }}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-9xl mx-auto" style={{ gap: isDarkMode ? '1rem' : undefined }}>
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
            <div key={processStep.stepNumber} className={`rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
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
          <p className="text-gray-600 text-base font-medium animate-pulse text-center mb-0 max-w-4xl mx-auto whitespace-nowrap">
            Join thousands of communities that rely on PriHub for seamless management and exceptional resident experiences.
          </p>
        </div>
        
        {/* Community Carousel */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrevCommunity}
            className="absolute -left-2 top-[45%] transform -translate-y-[45%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
            aria-label="Previous community"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextCommunity}
            className="absolute -right-2 top-[45%] transform -translate-y-[45%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
            aria-label="Next community"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Community Display */}
          <div className="flex items-center justify-center p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center max-w-5xl mx-auto" style={{ gap: isDarkMode ? '1rem' : undefined }}>
              {/* Image Column */}
              <div className="order-2 lg:order-1">
                <img 
                  src={currentPartners[currentCommunityIndex].partnerLogo || currentPartners[currentCommunityIndex].logo} 
                  alt={currentPartners[currentCommunityIndex].communityName}
                  className="w-full h-56 lg:h-72 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 object-cover"
                />
              </div>
              
              {/* Content Column */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {currentPartners[currentCommunityIndex].communityName}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                  {currentPartners[currentCommunityIndex].description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentPartners[currentCommunityIndex].tags.map((tag, index) => {
                    const tagColors = [
                      { bg: "bg-[#E0F7FA]", text: "text-[#16808D]" },
                      { bg: "bg-green-50", text: "text-green-700" },
                      { bg: "bg-blue-50", text: "text-blue-700" },
                      { bg: "bg-purple-50", text: "text-purple-700" },
                      { bg: "bg-orange-50", text: "text-orange-700" }
                    ];
                    const color = tagColors[index % tagColors.length];
                    return (
                      <div key={index} className={`inline-flex items-center px-3 py-1 ${color.bg} rounded-full text-sm`}>
                        <span className={`font-semibold ${color.text} text-xs`}>{tag}</span>
                      </div>
                    );
                  })}
                  <div className="inline-flex items-center px-3 py-1 bg-red-50 rounded-full text-sm">
                    <Award className="h-3 w-3 text-red-500 mr-1" />
                    <span className="text-red-700 text-xs font-medium">Verified</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                  <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                    <Building className="h-5 w-5 mr-2" style={{ color: '#16808D' }} />
                    <span className="font-medium">{currentPartners[currentCommunityIndex].units}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                    <Users className="h-5 w-5 mr-2" style={{ color: '#1B9AAA' }} />
                    <span className="font-medium">{currentPartners[currentCommunityIndex].residents}</span>
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
          {currentPartners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsCommunityAutoPlaying(false);
                setCurrentCommunityIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentCommunityIndex === index
                  ? 'bg-[#16808D] w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to community ${index + 1}`}
            />
          ))}
        </div>
        
        {/* 3 Dots with Lines on Both Sides */}
        <div className="flex justify-center items-center mt-6 mb-[-2]">
          <div className="h-0.5 bg-gradient-to-l from-[#142C52] via-[#16808D] to-transparent w-32"></div>
          <div className="flex space-x-2 mx-4">
            <div className="w-2 h-2 bg-[#16808D] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#0C4A50] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#178740] rounded-full animate-pulse"></div>
          </div>
          <div className="h-0.5 bg-gradient-to-r from-[#142C52] via-[#16808D] to-transparent w-32"></div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-4">
            Discover all {currentPartners.length}+ communities already experiencing the PriHub advantage
          </p>
          <button
            onClick={() => setIsPartnerModalOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg font-semibold hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg"
          >
            <Building className="mr-2 h-5 w-5" />
            Become a Partner Community
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      
      {/* Our Valuable Partners Section */}
      <div className="bg-gradient-to-r from-blue-100 via-sky-50 to-cyan-100 rounded-xl shadow-xl p-10 overflow-hidden mb-1">
        <div className="text-center mb-1">
          <h2 className="text-3xl font-bold mb-1">
            <span style={{color: '#16808D'}}>Our Valuable</span>
            <span className="text-black"> Partners</span>
          </h2>
          <p className="text-gray-600 text-base font-medium animate-pulse text-center mb-6 max-w-4xl mx-auto whitespace-nowrap">
            Collaborating with industry leaders and innovators to deliver comprehensive cognitive support solutions.
          </p>
        </div>
        
        {/* Continuous Scrolling List */}
        <div className="relative dropdown-container">
          <div className="flex space-x-6 animate-scroll-x" style={{ width: 'max-content' }}>
            {/* Partners for seamless scrolling */}
            {[
              { 
                communityName: "AI Technology Providers", 
                description: "50+ Solutions",
                stats: "98% Integration",
                rating: "4.9",
                years: "10+ Years",
                image: "/AITechnologyProviders.png",
                growthMetric: "AI Advancement"
              },
              { 
                communityName: "Healthcare Institutions", 
                description: "200+ Hospitals",
                stats: "95% Patient Care",
                rating: "4.8",
                years: "8+ Years",
                image: "/HealthcareInstitutions.webp",
                growthMetric: "Health Progress"
              },
              { 
                communityName: "Educational Organizations", 
                description: "150+ Schools",
                stats: "92% Learning Success",
                rating: "4.7",
                years: "6+ Years",
                image: "/EducationalOrganizations.avif",
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
                image: "/ResearchInstitutions.webp",
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
                image: "/GovernmentAgencies.jpg",
                growthMetric: "Policy Development"
              },
              { 
                communityName: "Assistive Tech Companies", 
                description: "60+ Vendors",
                stats: "97% Device Support",
                rating: "4.8",
                years: "8+ Years",
                image: "/AssistiveTechnology.jpg",
                growthMetric: "Tech Innovation"
              },
              { 
                communityName: "Mental Health Providers", 
                description: "180+ Clinics",
                stats: "91% Wellness Support",
                rating: "4.7",
                years: "6+ Years",
                image: "/MentalHealthProviders.jpg",
                growthMetric: "Wellness Improvement"
              },
              { 
                communityName: "Disability Advocacy Groups", 
                description: "90+ Associations",
                stats: "95% Inclusion Success",
                rating: "4.9",
                years: "11+ Years",
                image: "/DisabilityAdvocacyGroups.jpg",
                growthMetric: "Inclusion Progress"
              },
              { 
                communityName: "Software Development Partners", 
                description: "40+ Companies",
                stats: "98% Platform Sync",
                rating: "4.8",
                years: "7+ Years",
                image: "/SoftwareDevelopmentPartners.png",
                growthMetric: "Digital Growth"
              },
              { 
                communityName: "Training & Certification Bodies", 
                description: "35+ Centers",
                stats: "94% Skill Development",
                rating: "4.6",
                years: "4+ Years",
                image: "/TrainingCertificationBodies.jpg",
                growthMetric: "Career Advancement"
              },
              { 
                communityName: "Cloud Service Providers", 
                description: "20+ Platforms",
                stats: "99% Uptime",
                rating: "4.8",
                years: "6+ Years",
                image: "/CloudServiceProviders.jpg",
                growthMetric: "Cloud Growth"
              },
              { 
                communityName: "Security Solutions", 
                description: "45+ Vendors",
                stats: "98% Data Protection",
                rating: "4.9",
                years: "8+ Years",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                growthMetric: "Security Enhancement"
              },
              { 
                communityName: "Mobile App Developers", 
                description: "80+ Teams",
                stats: "96% App Performance",
                rating: "4.7",
                years: "5+ Years",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
                growthMetric: "Mobile Innovation"
              },
              { 
                communityName: "Data Analytics Firms", 
                description: "55+ Companies",
                stats: "94% Insight Accuracy",
                rating: "4.8",
                years: "7+ Years",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                growthMetric: "Data Intelligence"
              },
              { 
                communityName: "IoT Solution Providers", 
                description: "30+ Specialists",
                stats: "97% Device Sync",
                rating: "4.6",
                years: "4+ Years",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                growthMetric: "IoT Expansion"
              }
            ].map((partner, index) => (
              <div key={`partner-${index}`} className="flex-shrink-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-100 min-w-[320px] max-w-[320px] animate-fade-in cursor-pointer" onClick={() => handlePartnerClick(partner.communityName)}>
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
                      <Shield className="h-3 w-3 text-red-500" />
                      <span className="text-xs text-red-600">Verified</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-[#16808D] hover:text-[#142C52] font-medium text-xs transition-colors">
                      Learn More →
                    </button>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-3 w-3 text-red-500 hover:text-red-600 cursor-pointer transition-colors" />
                      <Share2 className="h-3 w-3 text-gray-500 hover:text-gray-600 cursor-pointer transition-colors" onClick={() => handleShare(partner.communityName)} />
                      <button className="text-[#16808D] hover:text-[#142C52] font-medium text-xs transition-colors" onClick={() => handlePartnerSearch(partner.communityName)}>Search on Google</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {[
              { 
                communityName: "AI Technology Providers", 
                description: "50+ Solutions",
                stats: "98% Integration",
                rating: "4.9",
                years: "10+ Years",
                image: "/AITechnologyProviders.png",
                growthMetric: "AI Advancement"
              },
              { 
                communityName: "Healthcare Institutions", 
                description: "200+ Hospitals",
                stats: "95% Patient Care",
                rating: "4.8",
                years: "8+ Years",
                image: "/HealthcareInstitutions.webp",
                growthMetric: "Health Progress"
              },
              { 
                communityName: "Educational Organizations", 
                description: "150+ Schools",
                stats: "92% Learning Success",
                rating: "4.7",
                years: "6+ Years",
                image: "/EducationalOrganizations.avif",
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
                image: "/ResearchInstitutions.webp",
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
                image: "/GovernmentAgencies.jpg",
                growthMetric: "Policy Development"
              },
              { 
                communityName: "Assistive Tech Companies", 
                description: "60+ Vendors",
                stats: "97% Device Support",
                rating: "4.8",
                years: "8+ Years",
                image: "/AssistiveTechnology.jpg",
                growthMetric: "Tech Innovation"
              },
              { 
                communityName: "Mental Health Providers", 
                description: "180+ Clinics",
                stats: "91% Wellness Support",
                rating: "4.7",
                years: "6+ Years",
                image: "/MentalHealthProviders.jpg",
                growthMetric: "Wellness Improvement"
              },
              { 
                communityName: "Disability Advocacy Groups", 
                description: "90+ Associations",
                stats: "95% Inclusion Success",
                rating: "4.9",
                years: "11+ Years",
                image: "/DisabilityAdvocacyGroups.jpg",
                growthMetric: "Inclusion Progress"
              },
              { 
                communityName: "Software Development Partners", 
                description: "40+ Companies",
                stats: "98% Platform Sync",
                rating: "4.8",
                years: "7+ Years",
                image: "/SoftwareDevelopmentPartners.png",
                growthMetric: "Digital Growth"
              },
              { 
                communityName: "Training & Certification Bodies", 
                description: "35+ Centers",
                stats: "94% Skill Development",
                rating: "4.6",
                years: "4+ Years",
                image: "/TrainingCertificationBodies.jpg",
                growthMetric: "Career Advancement"
              },
              { 
                communityName: "Cloud Service Providers", 
                description: "20+ Platforms",
                stats: "99% Uptime",
                rating: "4.8",
                years: "6+ Years",
                image: "/CloudServiceProviders.jpg",
                growthMetric: "Cloud Growth"
              },
              { 
                communityName: "Security Solutions", 
                description: "45+ Vendors",
                stats: "98% Data Protection",
                rating: "4.9",
                years: "8+ Years",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                growthMetric: "Security Enhancement"
              },
              { 
                communityName: "Mobile App Developers", 
                description: "80+ Teams",
                stats: "96% App Performance",
                rating: "4.7",
                years: "5+ Years",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
                growthMetric: "Mobile Innovation"
              },
              { 
                communityName: "Data Analytics Firms", 
                description: "55+ Companies",
                stats: "94% Insight Accuracy",
                rating: "4.8",
                years: "7+ Years",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                growthMetric: "Data Intelligence"
              },
              { 
                communityName: "IoT Solution Providers", 
                description: "30+ Specialists",
                stats: "97% Device Sync",
                rating: "4.6",
                years: "4+ Years",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                growthMetric: "IoT Expansion"
              }
            ].map((partner, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-100 min-w-[320px] max-w-[320px] animate-fade-in cursor-pointer" onClick={() => handlePartnerClick(partner.communityName)}>
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
                      <Shield className="h-3 w-3 text-red-500" />
                      <span className="text-xs text-red-600">Verified</span>
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
      
      {/* Customer Feedback Section */}
      <div className="py-12 relative">
        {/* Plain White Background */}
        <div className="absolute inset-0 bg-white">
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-1">
            <h2 className="text-3xl font-bold mb-1">
              <span style={{color: '#16808D'}}>What Our</span>
              <span className="text-black"> Community Says</span>
            </h2>
            <p className="text-gray-600 text-base font-medium animate-pulse text-center mb-0 max-w-4xl mx-auto whitespace-nowrap">
              Real feedback from real people who have transformed their cognitive support journey with our platform.
            </p>
          </div>
          
          {/* Feedback Carousel */}
          <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrevReview}
              className="absolute -left-2 top-[50%] transform -translate-y-[50%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNextReview}
              className="absolute -right-2 top-[50%] transform -translate-y-[50%] z-10 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white hover:from-[#16808D] hover:to-[#142C52] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-semibold"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Review Display */}
            <div className="flex items-center justify-center p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-4 lg:gap-8 items-center max-w-5xl mx-auto" style={{ gap: isDarkMode ? '1rem' : undefined }}>
                {/* User Avatar/Image Column */}
                <div className="order-2 lg:order-1">
                  <div className="w-full h-56 lg:h-72 flex items-center justify-center relative">
                    <div className="text-center max-w-full relative">
                      <div className="rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden" style={{width: '260px', height: '260px'}}>
                        <img 
                          src={currentReviews[currentReviewIndex].avatar} 
                          alt={currentReviews[currentReviewIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute" style={{bottom: '130px', right: '0px', transform: 'translateY(50%)'}}>
                        <div className="w-14 h-14 bg-gradient-to-br from-[#16808D] to-[#142C52] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {currentReviews[currentReviewIndex].name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-800 text-xl font-semibold truncate px-2">{currentReviews[currentReviewIndex].name}</div>
                      <div className="text-gray-600 text-sm truncate px-2">{currentReviews[currentReviewIndex].role}</div>
                    </div>
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-4 w-4 ${star <= currentReviews[currentReviewIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{currentReviews[currentReviewIndex].rating}.0</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "{currentReviews[currentReviewIndex].title}"
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                    {currentReviews[currentReviewIndex].review}
                  </p>
                  
                  {/* Tags/Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentReviews[currentReviewIndex].tags.map((tag, index) => {
                      const tagColors = [
                        { bg: "bg-[#E0F7FA]", text: "text-[#16808D]" },
                        { bg: "bg-green-50", text: "text-green-700" },
                        { bg: "bg-blue-50", text: "text-blue-700" },
                        { bg: "bg-purple-50", text: "text-purple-700" }
                      ];
                      const color = tagColors[index % tagColors.length];
                      return (
                        <span key={index} className={`${color.bg} ${color.text} px-3 py-1 rounded-full text-sm font-medium`}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  
                  {/* Review Stats */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                    <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <Calendar className="h-5 w-5 mr-2" style={{ color: '#16808D' }} />
                      <span className="font-medium">{currentReviews[currentReviewIndex].date}</span>
                    </div>
                    <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <ThumbsUp className="h-5 w-5 mr-2" style={{ color: '#1B9AAA' }} />
                      <span className="font-medium">{currentReviews[currentReviewIndex].helpful} Helpful</span>
                    </div>
                  </div>
                  
                  {/* Action Labels */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-[80px]">
                      <span className="text-[#16808D] hover:text-[#142C52] font-medium text-sm transition-colors cursor-pointer">
                        Read Full Review →
                      </span>
                      <span className="text-[#16808D] hover:text-[#142C52] font-medium text-sm transition-colors cursor-pointer">
                        View Profile →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center items-center mt-6">
            {/* Dots Container */}
            <div className="flex flex-col items-center">
              {/* Top Dots Container */}
              <div className="flex space-x-2 mb-6">
                {currentReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentReviewIndex(index);
                      setIsReviewAutoPlaying(false);
                    }}
                    className={`transition-all duration-300 ${
                      index === currentReviewIndex 
                        ? 'w-6 h-2 bg-[#16808D] rounded-full' 
                        : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Bottom Decorative Dots with Lines */}
              <div className="flex justify-center items-center">
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

          {/* Additional Info */}
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-4">
              Join {currentReviews.length}+ satisfied users sharing their success stories
            </p>
            <button
              onClick={() => setIsCommunityModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg font-semibold hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Share Your Own Experience
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Community Partner Application Modal */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 modal-backdrop">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col modal-content">
            {/* Modal Header */}
            <div className="bg-white p-6 rounded-t-2xl flex-shrink-0">
              <div className="relative mb-4">
                <button
                  onClick={() => setIsPartnerModalOpen(false)}
                  className="absolute top-2 -right-1 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="text-justify">
                  <div className="flex items-start justify-start gap-3">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-0.5">Community Partner Application</h2>
                      <p className="text-gray-600">Join our trusted network of leading communities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Circular Image Upload Section */}
              <div className="flex justify-center items-center gap-6">
                <div className="relative dropdown-container">
                  <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 overflow-hidden relative">
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Community logo" 
                        className="w-full h-full rounded-full object-cover"
                        style={{ 
                          imageRendering: 'crisp-edges',
                          transform: 'scale(1.1)'
                        }}
                      />
                    ) : (
                      <div className="text-center mt-3">
                        <User className="h-8 w-8 text-gray-400 mx-auto mb-1" />
                        <span className="text-xs text-gray-500">Upload Image</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom Right Controls */}
                  <div className="absolute -bottom-2 -right-2">
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {imagePreview ? (
                      <div className="flex gap-1">
                        <label
                          htmlFor="image-upload"
                          className="w-7 h-7 bg-white hover:bg-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
                          title="Change image"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </label>
                        <button
                          type="button"
                          onClick={handleImageRemove}
                          className="w-7 h-7 bg-white hover:bg-red-50 text-red-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                          title="Remove image"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="image-upload"
                        className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
                        title="Upload image"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </label>
                    )}
                  </div>
                </div>
                
                {/* Upload Instructions */}
                <div className="text-left">
                  <p className="text-sm text-gray-600 font-medium">
                    Upload Logo
                  </p>
                  <p className="text-xs text-gray-500">
                    Supported formats: JPG, PNG, JPEG
                  </p>
                  <p className="text-xs text-gray-500">
                    Maximum size: 2MB
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
              <div className="p-8 pb-4 pr-6 flex-1" style={{ marginRight: '-8px' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Community Information Grid */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Building className="inline h-4 w-4 mr-1" />
                      Community Name *
                    </label>
                    <input
                      type="text"
                      name="communityName"
                      value={formData.communityName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="Enter your community name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="Full name of contact person"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="contact@community.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Globe className="inline h-4 w-4 mr-1" />
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="https://www.communitywebsite.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Community Type *
                    </label>
                    <div className="relative dropdown-container">
                      <button
                        type="button"
                        onClick={(e) => toggleDropdown('communityType', e)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent text-left bg-white flex justify-between items-center"
                      >
                        <span className={formData.communityType ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.communityType ? 
                            formData.communityType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
                            'Select community type'
                          }
                        </span>
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openDropdown === 'communityType' && (
                        <div className={`absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto ${
                          dropdownPositions.communityType === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
                        }`}>
                          {[
                            { value: '', label: 'Select community type', name: 'communityType' },
                            { value: 'special-education', label: 'Special Education Center', name: 'communityType' },
                            { value: 'cognitive-therapy', label: 'Cognitive Therapy Clinic', name: 'communityType' },
                            { value: 'assisted-living', label: 'Assisted Living Facility', name: 'communityType' },
                            { value: 'neurodiversity', label: 'Neurodiversity Support Group', name: 'communityType' },
                            { value: 'rehabilitation', label: 'Rehabilitation Center', name: 'communityType' },
                            { value: 'autism-support', label: 'Autism Support Network', name: 'communityType' },
                            { value: 'memory-care', label: 'Memory Care Community', name: 'communityType' },
                            { value: 'inclusive-education', label: 'Inclusive Education School', name: 'communityType' },
                            { value: 'speech-therapy', label: 'Speech Therapy Center', name: 'communityType' },
                            { value: 'occupational-therapy', label: 'Occupational Therapy Clinic', name: 'communityType' },
                            { value: 'adhd-support', label: 'ADHD Support Community', name: 'communityType' },
                            { value: 'dyslexia-center', label: 'Dyslexia Learning Center', name: 'communityType' },
                            { value: 'mental-health', label: 'Mental Health Clinic', name: 'communityType' },
                            { value: 'developmental-disability', label: 'Developmental Disability Center', name: 'communityType' },
                            { value: 'learning-disability', label: 'Learning Disability School', name: 'communityType' },
                            { value: 'behavioral-therapy', label: 'Behavioral Therapy Center', name: 'communityType' },
                            { value: 'sensory-integration', label: 'Sensory Integration Clinic', name: 'communityType' },
                            { value: 'social-skills', label: 'Social Skills Group', name: 'communityType' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleDropdownSelect('communityType', option.value)}
                              className={`w-full px-4 py-2 text-left text-gray-900 ${
                                formData.communityType === option.value ? 'bg-[#16808D] text-white hover:bg-[#16808D]' : 'hover:bg-gray-100'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information Dropdowns */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Building className="inline h-4 w-4 mr-1" />
                      Organization Size *
                    </label>
                    <div className="relative dropdown-container">
                      <button
                        type="button"
                        onClick={(e) => toggleDropdown('organizationSize', e)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent text-left bg-white flex justify-between items-center"
                      >
                        <span className={formData.organizationSize ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.organizationSize ? 
                            formData.organizationSize.charAt(0).toUpperCase() + formData.organizationSize.slice(1) : 
                            'Select organization size'
                          }
                        </span>
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openDropdown === 'organizationSize' && (
                        <div className={`absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto ${
                          dropdownPositions.organizationSize === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
                        }`}>
                          {[
                            { value: '', label: 'Select organization size', name: 'organizationSize' },
                            { value: 'small', label: 'Small (1-50 employees)', name: 'organizationSize' },
                            { value: 'medium', label: 'Medium (51-200 employees)', name: 'organizationSize' },
                            { value: 'large', label: 'Large (201-500 employees)', name: 'organizationSize' },
                            { value: 'enterprise', label: 'Enterprise (500+ employees)', name: 'organizationSize' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleDropdownSelect('organizationSize', option.value)}
                              className={`w-full px-4 py-2 text-left text-gray-900 ${
                                formData.organizationSize === option.value ? 'bg-[#16808D] text-white hover:bg-[#16808D]' : 'hover:bg-gray-100'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Years Established *
                    </label>
                    <div className="relative dropdown-container">
                      <button
                        type="button"
                        onClick={(e) => toggleDropdown('yearsEstablished', e)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent text-left bg-white flex justify-between items-center"
                      >
                        <span className={formData.yearsEstablished ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.yearsEstablished || 'Select years established'}
                        </span>
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openDropdown === 'yearsEstablished' && (
                        <div className={`absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto ${
                          dropdownPositions.yearsEstablished === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
                        }`}>
                          {[
                            { value: '', label: 'Select years established', name: 'yearsEstablished' },
                            { value: '0-2', label: '0-2 years', name: 'yearsEstablished' },
                            { value: '3-5', label: '3-5 years', name: 'yearsEstablished' },
                            { value: '6-10', label: '6-10 years', name: 'yearsEstablished' },
                            { value: '11-20', label: '11-20 years', name: 'yearsEstablished' },
                            { value: '20+', label: '20+ years', name: 'yearsEstablished' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleDropdownSelect('yearsEstablished', option.value)}
                              className={`w-full px-4 py-2 text-left text-gray-900 ${
                                formData.yearsEstablished === option.value ? 'bg-[#16808D] text-white hover:bg-[#16808D]' : 'hover:bg-gray-100'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Target className="inline h-4 w-4 mr-1" />
                      Service Area *
                    </label>
                    <div className="relative dropdown-container">
                      <button
                        type="button"
                        onClick={(e) => toggleDropdown('serviceArea', e)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent text-left bg-white flex justify-between items-center"
                      >
                        <span className={formData.serviceArea ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.serviceArea ? 
                            formData.serviceArea.charAt(0).toUpperCase() + formData.serviceArea.slice(1) : 
                            'Select service area'
                          }
                        </span>
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openDropdown === 'serviceArea' && (
                        <div className={`absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto ${
                          dropdownPositions.serviceArea === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
                        }`}>
                          {[
                            { value: '', label: 'Select service area', name: 'serviceArea' },
                            { value: 'local', label: 'Local (City/Region)', name: 'serviceArea' },
                            { value: 'state', label: 'State-wide', name: 'serviceArea' },
                            { value: 'national', label: 'National', name: 'serviceArea' },
                            { value: 'international', label: 'International', name: 'serviceArea' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleDropdownSelect('serviceArea', option.value)}
                              className={`w-full px-4 py-2 text-left text-gray-900 ${
                                formData.serviceArea === option.value ? 'bg-[#16808D] text-white hover:bg-[#16808D]' : 'hover:bg-gray-100'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                    placeholder="Full address of your community"
                  />
                </div>

                {/* Services and Focus Areas Dropdowns */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Heart className="inline h-4 w-4 mr-1" />
                      Primary Services Offered *
                    </label>
                    <div className="relative dropdown-container">
                      <button
                        type="button"
                        onClick={(e) => toggleDropdown('primaryServices', e)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent text-left bg-white flex justify-between items-center"
                      >
                        <span className={formData.primaryServices ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.primaryServices ? 
                            formData.primaryServices.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
                            'Select primary services'
                          }
                        </span>
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openDropdown === 'primaryServices' && (
                        <div className={`absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto ${
                          dropdownPositions.primaryServices === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
                        }`}>
                          {[
                            { value: '', label: 'Select primary services', name: 'primaryServices' },
                            { value: 'educational-support', label: 'Educational Support', name: 'primaryServices' },
                            { value: 'therapy-services', label: 'Therapy Services', name: 'primaryServices' },
                            { value: 'residential-care', label: 'Residential Care', name: 'primaryServices' },
                            { value: 'behavioral-intervention', label: 'Behavioral Intervention', name: 'primaryServices' },
                            { value: 'speech-therapy', label: 'Speech Therapy', name: 'primaryServices' },
                            { value: 'occupational-therapy', label: 'Occupational Therapy', name: 'primaryServices' },
                            { value: 'mental-health', label: 'Mental Health Services', name: 'primaryServices' },
                            { value: 'family-support', label: 'Family Support', name: 'primaryServices' },
                            { value: 'vocational-training', label: 'Vocational Training', name: 'primaryServices' },
                            { value: 'social-skills', label: 'Social Skills Development', name: 'primaryServices' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleDropdownSelect('primaryServices', option.value)}
                              className={`w-full px-4 py-2 text-left text-gray-900 ${
                                formData.primaryServices === option.value ? 'bg-[#16808D] text-white hover:bg-[#16808D]' : 'hover:bg-gray-100'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Brain className="inline h-4 w-4 mr-1" />
                      Primary Focus Area *
                    </label>
                    <div className="relative dropdown-container">
                      <button
                        type="button"
                        onClick={(e) => toggleDropdown('primaryFocus', e)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent text-left bg-white flex justify-between items-center"
                      >
                        <span className={formData.primaryFocus ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.primaryFocus ? 
                            formData.primaryFocus.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
                            'Select primary focus area'
                          }
                        </span>
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openDropdown === 'primaryFocus' && (
                        <div className={`absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto ${
                          dropdownPositions.primaryFocus === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
                        }`}>
                          {[
                            { value: '', label: 'Select primary focus area', name: 'primaryFocus' },
                            { value: 'autism', label: 'Autism Spectrum Disorders', name: 'primaryFocus' },
                            { value: 'adhd', label: 'ADHD/Attention Disorders', name: 'primaryFocus' },
                            { value: 'learning-disabilities', label: 'Learning Disabilities', name: 'primaryFocus' },
                            { value: 'developmental-disabilities', label: 'Developmental Disabilities', name: 'primaryFocus' },
                            { value: 'cognitive-disabilities', label: 'Cognitive Disabilities', name: 'primaryFocus' },
                            { value: 'mental-health', label: 'Mental Health Conditions', name: 'primaryFocus' },
                            { value: 'sensory-processing', label: 'Sensory Processing Disorders', name: 'primaryFocus' },
                            { value: 'speech-language', label: 'Speech & Language Disorders', name: 'primaryFocus' },
                            { value: 'memory-care', label: 'Memory Care & Dementia', name: 'primaryFocus' },
                            { value: 'multiple-disabilities', label: 'Multiple Disabilities', name: 'primaryFocus' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleDropdownSelect('primaryFocus', option.value)}
                              className={`w-full px-4 py-2 text-left text-gray-900 ${
                                formData.primaryFocus === option.value ? 'bg-[#16808D] text-white hover:bg-[#16808D]' : 'hover:bg-gray-100'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Community Stats Grid */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Building className="inline h-4 w-4 mr-1" />
                      Units/Facilities Count *
                    </label>
                    <input
                      type="text"
                      name="units"
                      value={formData.units}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="e.g., 500+ Centers, 300+ Clinics"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Users className="inline h-4 w-4 mr-1" />
                      People Served *
                    </label>
                    <input
                      type="text"
                      name="residents"
                      value={formData.residents}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="e.g., 10,000+ Students, 25,000+ Patients"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="inline h-4 w-4 mr-1" />
                    Community Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                    placeholder="Tell us about your community, mission, and the services you provide..."
                  />
                </div>

                {/* Tags and Logo Grid */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Target className="inline h-4 w-4 mr-1" />
                      Community Tags *
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="e.g., Specialized Learning, Adaptive Tech, Personalized Education"
                    />
                    <p className="text-xs text-gray-500 mt-1">Separate multiple tags with commas</p>
                  </div>

                                  </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
                  <button
                    type="button"
                    onClick={() => setIsPartnerModalOpen(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg"
                  >
                    Submit Application
                    <ChevronRight className="ml-2 h-5 w-5 inline" />
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Community Experience Sharing Modal */}
      {isCommunityModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 modal-backdrop">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col modal-content">
            {/* Modal Header */}
            <div className="bg-white p-6 rounded-t-2xl flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
                    <p className="text-gray-600 mt-1">Inspire others with your journey</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCommunityModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Circular Profile Image Upload Section */}
              <div className="flex justify-center items-center gap-6 pb-4">
                <div className="relative dropdown-container">
                  <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 overflow-hidden relative">
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Profile picture" 
                        className="w-full h-full rounded-full object-cover"
                        style={{ 
                          imageRendering: 'crisp-edges',
                          transform: 'scale(1.1)'
                        }}
                      />
                    ) : (
                      <div className="text-center mt-3">
                        <User className="h-8 w-8 text-gray-400 mx-auto mb-1" />
                        <span className="text-xs text-gray-500">Profile Image</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom Right Controls */}
                  <div className="absolute -bottom-2 -right-2">
                    <input
                      id="community-image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {imagePreview ? (
                      <div className="flex gap-1">
                        <label
                          htmlFor="community-image-upload"
                          className="w-7 h-7 bg-white hover:bg-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
                          title="Change image"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </label>
                        <button
                          type="button"
                          onClick={handleImageRemove}
                          className="w-7 h-7 bg-white hover:bg-red-50 text-red-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                          title="Remove image"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="community-image-upload"
                        className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
                        title="Upload image"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </label>
                    )}
                  </div>
                </div>
              </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleCommunitySubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={communityFormData.name}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={communityFormData.email}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={communityFormData.phone}
                      onChange={handleCommunityInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={communityFormData.age}
                      onChange={handleCommunityInputChange}
                      min="18"
                      max="100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      placeholder="25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building className="inline h-4 w-4 mr-1" />
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={communityFormData.occupation}
                    onChange={handleCommunityInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                    placeholder="Teacher, Software Engineer, Student, etc."
                  />
                </div>

                {/* Experience Details */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Star className="inline h-4 w-4 mr-1" />
                    Experience Title *
                  </label>
                  <input
                    type="text"
                    name="experienceTitle"
                    value={communityFormData.experienceTitle}
                    onChange={handleCommunityInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                    placeholder="Life-Changing Platform, Amazing Resource, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Your Experience *
                  </label>
                  <textarea
                    name="experience"
                    value={communityFormData.experience}
                    onChange={handleCommunityInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                    placeholder="Share your story about how the platform helped you. What challenges did you face? What improvements did you see? How has it impacted your life?"
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 50 characters</p>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Star className="inline h-4 w-4 mr-1" />
                    Overall Rating *
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setCommunityFormData(prev => ({ ...prev, rating: star }))}
                        className="transition-colors"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= communityFormData.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 hover:text-yellow-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {communityFormData.rating}.0 stars
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Target className="inline h-4 w-4 mr-1" />
                    Tags *
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={communityFormData.tags}
                    onChange={handleCommunityInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                    placeholder="User Friendly, Life Changing, Great Support, etc."
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate multiple tags with commas</p>
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={communityFormData.consent}
                      onChange={handleCommunityInputChange}
                      required
                      className="mt-1 h-4 w-4 text-[#16808D] border-gray-300 rounded focus:ring-[#16808D]"
                    />
                    <span className="text-sm text-gray-600">
                      I consent to sharing my experience publicly on the platform. I understand that my name and story may be displayed to help and inspire others in the community.
                    </span>
                  </label>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
                  <button
                    type="button"
                    onClick={() => setIsCommunityModalOpen(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg hover:from-[#16808D] hover:to-[#142C52] transition-all transform hover:scale-105 shadow-lg"
                  >
                    Share Experience
                    <ChevronRight className="ml-2 h-5 w-5 inline" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
