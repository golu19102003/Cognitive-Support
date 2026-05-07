import React, { createContext, useContext, useRef } from 'react';

// Create the context
const AccessibilityContext = createContext();

// Custom hook to use the accessibility context
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

// Provider component
export const AccessibilityProvider = ({ children }) => {
  // Refs to store accessibility functions
  const accessibilityFunctions = useRef({
    openGeneralSettings: () => {},
    openQuickNotes: () => {},
    openFocusMode: () => {},
    openEyeTracking: () => {},
    openAISettings: () => {},
    openMultilingualSettings: () => {},
    openTextToSpeechSettings: () => {},
    openVoiceAssistantSettings: () => {}
  });

  // Method to register accessibility functions
  const registerAccessibilityFunctions = (functions) => {
    accessibilityFunctions.current = { ...accessibilityFunctions.current, ...functions };
  };

  // Method to trigger specific accessibility features
  const triggerAccessibilityFeature = (feature) => {
    switch (feature) {
      case 'ai-assistant':
        accessibilityFunctions.current.openAISettings();
        break;
      case 'focus-mode':
        accessibilityFunctions.current.openFocusMode();
        break;
      case 'eye-tracking':
        accessibilityFunctions.current.openEyeTracking();
        break;
      case 'multilingual':
        accessibilityFunctions.current.openMultilingualSettings();
        break;
      case 'text-to-speech':
        accessibilityFunctions.current.openTextToSpeechSettings();
        break;
      case 'voice-assistant':
        accessibilityFunctions.current.openVoiceAssistantSettings();
        break;
      case 'general-settings':
        accessibilityFunctions.current.openGeneralSettings();
        break;
      case 'quick-notes':
        accessibilityFunctions.current.openQuickNotes();
        break;
      default:
        console.warn(`Unknown accessibility feature: ${feature}`);
    }
  };

  const value = {
    registerAccessibilityFunctions,
    triggerAccessibilityFeature
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityContext;
