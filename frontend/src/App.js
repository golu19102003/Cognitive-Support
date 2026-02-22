import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import UserDashboard from './components/UserDashboard/Dashboard'; // Dashboard component for PriHub
import TermsOfService from './components/TermsPage/Terms';
import PrivacyPolicy from './components/PrivacyPage/Privacy';
import HelpCenter from './components/HelpCenter/Support';
import ConditionsPage from './components/ConditionsPage/Conditions';
import LearningDisabilities from './components/LearningDisabilities/LearningDisabilities';
import ADHD from './components/ADHD/ADHD';
import AutismSpectrum from './components/AutismSpectrum/AutismSpectrum';
import MemoryDisorders from './components/MemoryDisorders/MemoryDisorders';
import DevelopmentalDisorders from './components/DevelopmentalDisorders/DevelopmentalDisorders';
import NeurocognitiveDisorders from './components/NeurocognitiveDisorders/NeurocognitiveDisorders';
import Dementia from './components/Dementia/Dementia';
import TraumaticBrainInjury from './components/TraumaticBrainInjury/TraumaticBrainInjury';
import IntellectualDisability from './components/IntellectualDisability/IntellectualDisability';
import SpeechLanguageDisorders from './components/SpeechLanguageDisorders/SpeechLanguageDisorders';
import SpecificLearningDisorders from './components/SpecificLearningDisorders/SpecificLearningDisorders/SpecificLearningDisorders';
import SocialCommunication from './components/SocialCommunication/SocialCommunication';
import ExecutiveFunctioningDisorders from './components/ExecutiveFunctioningDisorders/ExecutiveFunctioningDisorders';
import AnxietyDisorders from './components/AnxietyDisorders/AnxietyDisorders';
import CerebralPalsyEpilepsy from './components/CerebralPalsyEpilepsy/CerebralPalsyEpilepsy';
import AllFeatures from './components/AllFeatures/AllFeatures';
import ResourcesPage from './components/ResourcesPage/Resources';
import './App.css';

function Application() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/genesis" element={<GenesisExplore />} />
          <Route path="/about/community" element={<CommunityExplore />} />
          <Route path="/about/innovation" element={<InnovationExplore />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/residents" element={<UserDashboard />} />
          <Route path="/therapy" element={<UserDashboard />} />
          <Route path="/care-plans" element={<UserDashboard />} />
          <Route path="/ai-assistant" element={<UserDashboard />} />
          <Route path="/accessibility" element={<UserDashboard />} />
          <Route path="/conditions" element={<ConditionsPage />} />
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/help" element={<HelpCenter />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default Application;
