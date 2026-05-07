import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './components/HomePage/Home';
import AboutPage from './components/AboutPage/About';
import GenesisExplore from './components/AboutPage/GenesisExplore';
import CommunityExplore from './components/AboutPage/CommunityExplore';
import InnovationExplore from './components/AboutPage/InnovationExplore';
import ContactPage from './components/ContactPage/Contact';
import SignInPage from './components/AuthPages/Login';
import Register from './components/AuthPages/Register';
import ForgotPassword from './components/AuthPages/ForgotPassword';
import TermsOfService from './components/TermsPage/Terms';
import PrivacyPolicy from './components/PrivacyPage/Privacy';
import HelpCenter from './components/HelpCenter/Support';
import ConditionsPage from './components/ConditionsPage/Conditions';
import LearningDisabilities from './components/Conditions/LearningDisabilities';
import ADHD from './components/Conditions/ADHD';
import AutismSpectrum from './components/Conditions/AutismSpectrum';
import MemoryDisorders from './components/Conditions/MemoryDisorders';
import DevelopmentalDisorders from './components/Conditions/DevelopmentalDisorders';
import NeurocognitiveDisorders from './components/Conditions/NeurocognitiveDisorders';
import Dementia from './components/Conditions/Dementia';
import TraumaticBrainInjury from './components/Conditions/TraumaticBrainInjury';
import IntellectualDisability from './components/Conditions/IntellectualDisability';
import SpeechLanguageDisorders from './components/Conditions/SpeechLanguageDisorders';
import SpecificLearningDisorders from './components/Conditions/SpecificLearningDisorders';
import SocialCommunication from './components/Conditions/SocialCommunication';
import ExecutiveFunctioningDisorders from './components/Conditions/ExecutiveFunctioningDisorders';
import AnxietyDisorders from './components/Conditions/AnxietyDisorders';
import CerebralPalsyEpilepsy from './components/Conditions/CerebralPalsyEpilepsy';
import AllFeatures from './components/AllFeatures/AllFeatures';
import ResourcesPage from './components/ResourcesPage/Resources';
import UserGuide from './components/ResourcesPage/UserGuide';
import TherapySessions from './components/ResourcesPage/TherapySessions';
import VideoTutorials from './components/ResourcesPage/VideoTutorials';
import SupportGroups from './components/ResourcesPage/SupportGroups';
import GamificationTraining from './components/ResourcesPage/GamificationTraining';
import OneToOneCounselling from './components/ResourcesPage/OneToOneCounselling';
import EducationalSupport from './components/ResourcesPage/EducationalSupport';
import AcademicCollaboration from './components/ResourcesPage/AcademicCollaboration';
import NGOPartnerships from './components/ResourcesPage/NGOPartnerships';
import CommunityForum from './components/ResourcesPage/CommunityForum';
import SupportCenter247 from './components/ResourcesPage/SupportCenter247';
import CommunitySupportNetwork from './components/ResourcesPage/CommunitySupportNetwork';
import DigitalInclusionPlatform from './components/ResourcesPage/DigitalInclusionPlatform';
import FocusMode from './components/Gamification/FocusMode';
import EyeTrackingNavigation from './components/EyeTracking/EyeTrackingNavigation';
import MultilingualSupport from './components/Multilingual/MultilingualSupport';
import { MultilingualProvider } from './components/Multilingual/MultilingualSupport';
import FeaturesPage from './components/FeaturesPage/FeaturesPage';
import AdvancedFeatures from './components/AdvancedFeatures/AdvancedFeatures';
import AISmartAssistant from './components/AdvancedFeatures/AISmartAssistant';
import APIDocumentation from './components/AdvancedFeatures/APIDocumentation';
import InclusiveDesignGuidelines from './components/AdvancedFeatures/InclusiveDesignGuidelines';
import CommunityEngagementTools from './components/AdvancedFeatures/CommunityEngagementTools';
import AITechnologyProviders from './components/Partners/AITechnologyProviders';
import HealthcareInstitutions from './components/Partners/HealthcareInstitutions';
import EducationalOrganizations from './components/Partners/EducationalOrganizations';
import AccessibilityStandardsBodies from './components/Partners/AccessibilityStandardsBodies';
import ResearchInstitutions from './components/Partners/ResearchInstitutions';
import NonProfitOrganizations from './components/Partners/NonProfitOrganizations';
import GovernmentAgencies from './components/Partners/GovernmentAgencies';
import AssistiveTechCompanies from './components/Partners/AssistiveTechCompanies';
import MentalHealthProviders from './components/Partners/MentalHealthProviders';
import DisabilityAdvocacyGroups from './components/Partners/DisabilityAdvocacyGroups';
import SoftwareDevelopmentPartners from './components/Partners/SoftwareDevelopmentPartners';
import TrainingCertificationBodies from './components/Partners/TrainingCertificationBodies';
import CloudServiceProviders from './components/Partners/CloudServiceProviders';
import SecuritySolutions from './components/Partners/SecuritySolutions';
import MobileAppDevelopers from './components/Partners/MobileAppDevelopers';
import DataAnalyticsFirms from './components/Partners/DataAnalyticsFirms';
import IoTSolutionProviders from './components/Partners/IoTSolutionProviders';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

// Scroll to top component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

// Location aware wrapper to force re-rendering
const LocationAwareWrapper = ({ children }) => {
  const location = useLocation();
  return <div key={location.pathname}>{children}</div>;
};

function App() {
  return (
    <MultilingualProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MainLayout>
          <ScrollToTop />
          <LocationAwareWrapper>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/genesis" element={<GenesisExplore />} />
            <Route path="/about/community" element={<CommunityExplore />} />
            <Route path="/about/innovation" element={<InnovationExplore />} />
            <Route path="/conditions" element={<AllFeatures />} />
            <Route path="/conditions/learning-disabilities" element={<LearningDisabilities />} />
            <Route path="/conditions/adhd" element={<ADHD />} />
            <Route path="/conditions/autism" element={<AutismSpectrum />} />
            <Route path="/conditions/memory-disorders" element={<MemoryDisorders />} />
            <Route path="/conditions/developmental-disorders" element={<DevelopmentalDisorders />} />
            <Route path="/conditions/neurocognitive-disorders" element={<NeurocognitiveDisorders />} />
            <Route path="/conditions/dementia" element={<Dementia />} />
            <Route path="/conditions/traumatic-brain-injury" element={<TraumaticBrainInjury />} />
            <Route path="/conditions/intellectual-disability" element={<IntellectualDisability />} />
            <Route path="/conditions/speech-language-disorders" element={<SpeechLanguageDisorders />} />
            <Route path="/conditions/anxiety-emotional-disorders" element={<AnxietyDisorders />} />
            <Route path="/conditions/specific-learning-disorders" element={<SpecificLearningDisorders />} />
            <Route path="/conditions/social-communication-disorder" element={<SocialCommunication />} />
            <Route path="/conditions/executive-functioning-disorders" element={<ExecutiveFunctioningDisorders />} />
            <Route path="/conditions/epilepsy-cerebral-palsy" element={<CerebralPalsyEpilepsy />} />
            <Route path="/all-features" element={<AllFeatures />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/user-guide" element={<UserGuide />} />
            <Route path="/resources/therapy-sessions" element={<TherapySessions />} />
            <Route path="/resources/video-tutorials" element={<VideoTutorials />} />
            <Route path="/resources/support-groups" element={<SupportGroups />} />
            <Route path="/resources/gamification-training" element={<GamificationTraining />} />
            <Route path="/resources/one-to-one-counselling" element={<OneToOneCounselling />} />
            <Route path="/resources/educational-support" element={<EducationalSupport />} />
            <Route path="/resources/academic-collaboration" element={<AcademicCollaboration />} />
            <Route path="/resources/ngo-partnerships" element={<NGOPartnerships />} />
            <Route path="/resources/community-forum" element={<CommunityForum />} />
            <Route path="/resources/support-center-247" element={<SupportCenter247 />} />
            <Route path="/resources/community-support-network" element={<CommunitySupportNetwork />} />
            <Route path="/resources/digital-inclusion-platform" element={<DigitalInclusionPlatform />} />
            <Route path="/advanced-features" element={<AdvancedFeatures />} />
            <Route path="/advanced-features/ai-smart-assistant" element={<AISmartAssistant />} />
            <Route path="/advanced-features/api-documentation" element={<APIDocumentation />} />
            <Route path="/advanced-features/inclusive-design-guidelines" element={<InclusiveDesignGuidelines />} />
            <Route path="/advanced-features/community-engagement-tools" element={<CommunityEngagementTools />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/help" element={<HelpCenter />} />
            
            {/* New Feature Routes */}
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/multilingual" element={<MultilingualSupport />} />
            
            {/* Partner Pages */}
            <Route path="/partners/ai-technology-providers" element={<AITechnologyProviders />} />
            <Route path="/partners/healthcare-institutions" element={<HealthcareInstitutions />} />
            <Route path="/partners/educational-organizations" element={<EducationalOrganizations />} />
            <Route path="/partners/accessibility-standards-bodies" element={<AccessibilityStandardsBodies />} />
            <Route path="/partners/research-institutions" element={<ResearchInstitutions />} />
            <Route path="/partners/non-profit-organizations" element={<NonProfitOrganizations />} />
            <Route path="/partners/government-agencies" element={<GovernmentAgencies />} />
            <Route path="/partners/assistive-tech-companies" element={<AssistiveTechCompanies />} />
            <Route path="/partners/mental-health-providers" element={<MentalHealthProviders />} />
            <Route path="/partners/disability-advocacy-groups" element={<DisabilityAdvocacyGroups />} />
            <Route path="/partners/software-development-partners" element={<SoftwareDevelopmentPartners />} />
            <Route path="/partners/training-certification-bodies" element={<TrainingCertificationBodies />} />
            <Route path="/partners/cloud-service-providers" element={<CloudServiceProviders />} />
            <Route path="/partners/security-solutions" element={<SecuritySolutions />} />
            <Route path="/partners/mobile-app-developers" element={<MobileAppDevelopers />} />
            <Route path="/partners/data-analytics-firms" element={<DataAnalyticsFirms />} />
            <Route path="/partners/iot-solution-providers" element={<IoTSolutionProviders />} />
          </Routes>
          </LocationAwareWrapper>
        </MainLayout>
      </Router>
    </MultilingualProvider>
  );
}

export default App;
