# PriHub Cognitive Support Platform - System Architecture

## Table of Contents
1. [System Overview](#system-overview)
2. [Entity Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
3. [Data Flow Diagram (DFD)](#data-flow-diagram-dfd)
4. [Core Algorithms](#core-algorithms)
5. [Technology Stack](#technology-stack)
6. [Security Architecture](#security-architecture)
7. [Performance Architecture](#performance-architecture)
8. [Accessibility Architecture](#accessibility-architecture)

## System Overview

PriHub is a comprehensive cognitive support platform designed to assist individuals with cognitive disabilities through AI-powered tools, accessibility features, and personalized support systems.

### Key Components:
- **Frontend**: React-based web application with accessibility features
- **Backend**: Node.js API with MongoDB database
- **AI Services**: Chatbot with specialized cognitive disability knowledge
- **Accessibility Engine**: Multi-modal support (TTS, eye-tracking, screen reader)
- **Gamification System**: Focus modes and achievement tracking
- **Multilingual Support**: 6 languages with RTL support

## Entity Relationship Diagram (ERD)

### Core Entities

#### User Entity
```sql
User {
  UserID: UUID (Primary Key)
  Name: VARCHAR(100)
  Email: VARCHAR(255) (Unique)
  Password: VARCHAR(255) (Hashed)
  Role: ENUM('user', 'admin', 'therapist', 'caregiver')
  DisabilityType: VARCHAR(50)
  CreatedAt: TIMESTAMP
  UpdatedAt: TIMESTAMP
  LastLogin: TIMESTAMP
  IsActive: BOOLEAN
  EmailVerified: BOOLEAN
}

UserProfile {
  UserID: UUID (Foreign Key -> User.UserID)
  Age: INTEGER
  Gender: ENUM('male', 'female', 'other', 'prefer_not_to_say')
  Phone: VARCHAR(20)
  Address: TEXT
  Company: VARCHAR(100)
  PreferredLanguage: VARCHAR(10)
  TimeZone: VARCHAR(50)
}

CognitiveProfile {
  UserID: UUID (Foreign Key -> User.UserID)
  Conditions: JSON Array
  Severity: ENUM('mild', 'moderate', 'severe')
  AssessmentDate: DATE
  TherapistNotes: TEXT
  LastUpdated: TIMESTAMP
}

AccessibilitySettings {
  UserID: UUID (Foreign Key -> User.UserID)
  FontSize: ENUM('small', 'medium', 'large', 'extra_large')
  HighContrast: BOOLEAN
  ScreenReader: BOOLEAN
  KeyboardNavigation: BOOLEAN
  TextToSpeech: BOOLEAN
  EyeTracking: BOOLEAN
  DyslexiaFont: BOOLEAN
  AnimationSpeed: ENUM('slow', 'normal', 'fast')
  ColorScheme: VARCHAR(20)
}
```

#### Task Entity
```sql
Task {
  TaskID: UUID (Primary Key)
  UserID: UUID (Foreign Key -> User.UserID)
  Title: VARCHAR(200)
  Description: TEXT
  Category: VARCHAR(50)
  Priority: ENUM('low', 'medium', 'high', 'urgent')
  Status: ENUM('pending', 'in_progress', 'completed', 'cancelled')
  DueDate: DATETIME
  ReminderTime: DATETIME
  IsRecurring: BOOLEAN
  RecurrencePattern: JSON
  CreatedAt: TIMESTAMP
  UpdatedAt: TIMESTAMP
  CompletedAt: TIMESTAMP
}

TaskAttachment {
  AttachmentID: UUID (Primary Key)
  TaskID: UUID (Foreign Key -> Task.TaskID)
  FileName: VARCHAR(255)
  FileType: VARCHAR(50)
  FileSize: INTEGER
  FilePath: VARCHAR(500)
  UploadedAt: TIMESTAMP
}
```

#### Chatbot Entity
```sql
ChatbotSession {
  SessionID: UUID (Primary Key)
  UserID: UUID (Foreign Key -> User.UserID)
  StartedAt: TIMESTAMP
  EndedAt: TIMESTAMP
  SessionType: ENUM('general', 'crisis', 'therapy', 'learning')
  SatisfactionRating: INTEGER (1-5)
}

ChatbotMessage {
  MessageID: UUID (Primary Key)
  SessionID: UUID (Foreign Key -> ChatbotSession.SessionID)
  Query: TEXT
  Response: TEXT
  MessageType: ENUM('user', 'bot', 'system')
  Category: VARCHAR(50)
  Confidence: DECIMAL(3,2)
  Timestamp: TIMESTAMP
  IsHelpful: BOOLEAN
}
```

#### Achievement Entity
```sql
Achievement {
  AchievementID: UUID (Primary Key)
  Name: VARCHAR(100)
  Description: TEXT
  Icon: VARCHAR(50)
  Points: INTEGER
  Category: VARCHAR(50)
  UnlockCondition: JSON
  IsHidden: BOOLEAN
  CreatedAt: TIMESTAMP
}

UserAchievement {
  UserAchievementID: UUID (Primary Key)
  UserID: UUID (Foreign Key -> User.UserID)
  AchievementID: UUID (Foreign Key -> Achievement.AchievementID)
  UnlockedAt: TIMESTAMP
  Progress: INTEGER
  IsCompleted: BOOLEAN
}

FocusSession {
  SessionID: UUID (Primary Key)
  UserID: UUID (Foreign Key -> User.UserID)
  SessionType: ENUM('pomodoro', 'short_break', 'long_break')
  Duration: INTEGER (seconds)
  StartTime: TIMESTAMP
  EndTime: TIMESTAMP
  IsCompleted: BOOLEAN
  PointsEarned: INTEGER
  StreakCount: INTEGER
}
```

### Relationships

```
User (1) --- (1) UserProfile
User (1) --- (1) CognitiveProfile
User (1) --- (1) AccessibilitySettings
User (1) --- (*) Task
User (1) --- (*) ChatbotSession
User (1) --- (*) UserAchievement
User (1) --- (*) FocusSession

Task (1) --- (*) TaskAttachment
ChatbotSession (1) --- (*) ChatbotMessage
Achievement (1) --- (*) UserAchievement
```

## Data Flow Diagram (DFD)

### Level 0 - Context Diagram
```
+-----------------+      +-----------------+      +-----------------+
|      User       |<---->|     PriHub      |<---->|   External APIs |
| (Cognitive      |      |     System      |      | (TTS, AI, etc.) |
|  Disability)    |      +-----------------+      +-----------------+
+-----------------+               |
        |                         |
        | Feedback/Support       |
        v                         v
+-----------------+      +-----------------+
|   Caregivers/   |      |   Therapists/   |
|    Family       |      |   Professionals |
+-----------------+      +-----------------+
```

### Level 1 - System Overview
```
+-----------------------------------------------------------------+
|                        PriHub System                           |
|                                                                 |
|  +-------------+  +-------------+  +-------------+  +-----------+ |
|  |   User      |  |  Chatbot    |  | Accessibility|  | Analytics  | |
|  | Management   |  |   Service   |  |   Engine    |  |  Service  | |
|  +-------------+  +-------------+  +-------------+  +-----------+ |
|         |               |               |               |        |
|         v               v               v               v        |
|  +-----------------------------------------------------------+  |
|  |                    Database Layer                         |  |
|  |  +---------+  +-----------+  +------------+  +----------+  |  |
|  |  | Users   |  | Chatbot   |  | Tasks      |  | Sessions  |  |  |
|  |  +---------+  +-----------+  +------------+  +----------+  |  |
|  +-----------------------------------------------------------+  |
|                                                                 |
+-----------------------------------------------------------------+
```

### Level 2 - Detailed Processes

#### Authentication Process
```
+-----------+     +-------------+     +-------------+     +-----------+
|   User    |---->| Auth Service|---->| JWT Handler |---->| Database  |
| Request  |     |             |     |             |     |           |
+-----------+     +-------------+     +-------------+     +-----------+
       |                  |                  |                  |
       | Credentials      | Token            | User Data        | User Record
       v                  v                  v                  v
+-----------+     +-------------+     +-------------+     +-----------+
|   Login   |<----|   Validate   |<----|   Query     |<----|   Users   |
|   Form    |     |   Input     |     |   User      |     |   Table   |
+-----------+     +-------------+     +-------------+     +-----------+
```

#### Chatbot Interaction Process
```
+-----------+     +-------------+     +-------------+     +-----------+
|   User    |---->| Chatbot     |---->| AI Service  |---->| External  |
|  Query   |     |   Handler   |     |   Engine    |     |   APIs    |
+-----------+     +-------------+     +-------------+     +-----------+
       |                  |                  |                  |
       | Message          | Processed        | AI Response     | Enhanced
       v                  v                  v                  v
+-----------+     +-------------+     +-------------+     +-----------+
| Response  |<----|   Format    |<----|   Generate  |<----|   Data    |
| Display  |     |   Output    |     |   Response  |     |   Sources |
+-----------+     +-------------+     +-------------+     +-----------+
```

#### Accessibility Features Process
```
+-----------+     +-------------+     +-------------+     +-----------+
|   User    |---->| Accessibility|---->| Feature     |---->| Browser   |
| Settings |     |   Manager   |     |   Handlers  |     |   APIs    |
+-----------+     +-------------+     +-------------+     +-----------+
       |                  |                  |                  |
       | Preferences      | Configured       | Activated       | Applied
       v                  v                  v                  v
+-----------+     +-------------+     +-------------+     +-----------+
|   UI      |<----|   Update    |<----|   Execute   |<----|   Styles  |
| Updates  |     |   Display   |     |   Features  |     |   Scripts |
+-----------+     +-------------+     +-------------+     +-----------+
```

## Core Algorithms

### 1. Text-to-Speech (TTS) Integration Algorithm

```javascript
const textToSpeechAlgorithm = {
  // Capture Phase
  capture: (element) => {
    const selectedText = window.getSelection().toString();
    const elementText = element.innerText;
    return selectedText || elementText;
  },

  // Initialize Phase
  initialize: (text, userSettings) => {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure based on user preferences
    utterance.rate = userSettings.speechRate || 0.9;
    utterance.pitch = userSettings.speechPitch || 1.0;
    utterance.volume = userSettings.speechVolume || 1.0;
    utterance.lang = userSettings.language || 'en-US';
    
    // Find appropriate voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith(utterance.lang.split('-')[0])
    );
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    return utterance;
  },

  // Execute Phase
  execute: (utterance) => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Start speaking
    window.speechSynthesis.speak(utterance);
    
    // Return control object
    return {
      stop: () => window.speechSynthesis.cancel(),
      pause: () => window.speechSynthesis.pause(),
      resume: () => window.speechSynthesis.resume(),
      isSpeaking: () => window.speechSynthesis.speaking
    };
  }
};
```

### 2. Eye Tracking Navigation Algorithm

```javascript
const eyeTrackingAlgorithm = {
  // Calibration Algorithm
  calibrate: async () => {
    const calibrationPoints = [
      { x: 0.1, y: 0.1 }, // Top-left
      { x: 0.9, y: 0.1 }, // Top-right
      { x: 0.5, y: 0.5 }, // Center
      { x: 0.1, y: 0.9 }, // Bottom-left
      { x: 0.9, y: 0.9 }  // Bottom-right
    ];

    const calibrationData = [];
    
    for (const point of calibrationPoints) {
      const gazeData = await captureGazeData(point);
      calibrationData.push({
        screenPoint: point,
        gazeData: gazeData
      });
      
      // Wait for user to focus on point
      await waitForUserConfirmation();
    }

    // Calculate calibration matrix
    return calculateCalibrationMatrix(calibrationData);
  },

  // Gaze Point Detection
  detectGazePoint: (rawGazeData, calibrationMatrix) => {
    // Apply calibration transformation
    const calibratedPoint = transformGazeData(rawGazeData, calibrationMatrix);
    
    // Apply smoothing filter
    const smoothedPoint = applySmoothingFilter(calibratedPoint);
    
    // Map to screen coordinates
    return {
      x: smoothedPoint.x * window.innerWidth,
      y: smoothedPoint.y * window.innerHeight
    };
  },

  // Dwell Time Detection
  detectDwellTime: (gazePoint, targetElement, dwellThreshold) => {
    const elementBounds = targetElement.getBoundingClientRect();
    
    if (isPointInElement(gazePoint, elementBounds)) {
      const dwellStartTime = Date.now();
      
      return new Promise((resolve) => {
        const dwellInterval = setInterval(() => {
          const currentGazePoint = getCurrentGazePoint();
          
          if (!isPointInElement(currentGazePoint, elementBounds)) {
            clearInterval(dwellInterval);
            resolve(false); // Dwell interrupted
          } else if (Date.now() - dwellStartTime >= dwellThreshold) {
            clearInterval(dwellInterval);
            resolve(true); // Dwell completed
          }
        }, 50); // Check every 50ms
      });
    }
    
    return Promise.resolve(false);
  }
};
```

### 3. Focus Mode Gamification Algorithm

```javascript
const focusModeAlgorithm = {
  // Session Scoring Algorithm
  calculateSessionScore: (sessionData, userProfile) => {
    let baseScore = 0;
    
    // Base points for session completion
    baseScore += Math.floor(sessionData.duration / 60) * 2; // 2 points per minute
    
    // Streak multiplier
    const streakMultiplier = 1 + (userProfile.currentStreak * 0.1);
    baseScore *= streakMultiplier;
    
    // Difficulty bonus
    const difficultyBonus = sessionData.sessionType === 'pomodoro' ? 1.5 : 1.0;
    baseScore *= difficultyBonus;
    
    // Consistency bonus
    const consistencyBonus = userProfile.sessionsThisWeek >= 5 ? 1.2 : 1.0;
    baseScore *= consistencyBonus;
    
    return Math.round(baseScore);
  },

  // Achievement Unlock Algorithm
  checkAchievements: (userProfile, sessionData) => {
    const unlockedAchievements = [];
    
    // First Session Achievement
    if (userProfile.totalSessions === 1) {
      unlockedAchievements.push({
        id: 'first_session',
        name: 'First Focus',
        description: 'Complete your first focus session',
        points: 10
      });
    }
    
    // Streak Achievement
    if (userProfile.currentStreak >= 3 && !userProfile.achievements.includes('streak_3')) {
      unlockedAchievements.push({
        id: 'streak_3',
        name: 'Focus Streak',
        description: 'Complete 3 sessions in a row',
        points: 25
      });
    }
    
    // Time Master Achievement
    if (sessionData.duration >= 1500 && !userProfile.achievements.includes('time_master')) {
      unlockedAchievements.push({
        id: 'time_master',
        name: 'Time Master',
        description: 'Complete a 25-minute session',
        points: 15
      });
    }
    
    return unlockedAchievements;
  },

  // Level Progression Algorithm
  calculateLevelProgress: (totalPoints) => {
    const currentLevel = Math.floor(totalPoints / 100) + 1;
    const currentLevelPoints = (currentLevel - 1) * 100;
    const nextLevelPoints = currentLevel * 100;
    const progress = ((totalPoints - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100;
    
    return {
      currentLevel,
      pointsToNext: nextLevelPoints - totalPoints,
      progressPercentage: Math.min(progress, 100)
    };
  }
};
```

### 4. Multilingual Support Algorithm

```javascript
const multilingualAlgorithm = {
  // Translation Loading Algorithm
  loadTranslations: async (languageCode) => {
    try {
      // Try to load from cache first
      const cachedTranslations = localStorage.getItem(`translations_${languageCode}`);
      if (cachedTranslations) {
        return JSON.parse(cachedTranslations);
      }
      
      // Load from server
      const response = await fetch(`/api/translations/${languageCode}`);
      const translations = await response.json();
      
      // Cache for future use
      localStorage.setItem(`translations_${languageCode}`, JSON.stringify(translations));
      
      return translations;
    } catch (error) {
      console.error('Failed to load translations:', error);
      return fallbackTranslations;
    }
  },

  // Text Direction Detection
  setTextDirection: (languageCode) => {
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    const isRTL = rtlLanguages.includes(languageCode);
    
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = languageCode;
    
    return isRTL;
  },

  // Dynamic Text Replacement
  translatePage: (translations) => {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = translations[key];
      
      if (translation) {
        if (element.tagName === 'INPUT' && element.type === 'placeholder') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  },

  // Speech Language Mapping
  getSpeechLanguage: (languageCode) => {
    const speechLanguageMap = {
      'en': 'en-US',
      'hi': 'hi-IN',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'zh-CN': 'zh-CN',
      'ar': 'ar-SA'
    };
    
    return speechLanguageMap[languageCode] || 'en-US';
  }
};
```

## Technology Stack

### Frontend Technologies
- **React 18.2.0** - UI framework
- **React Router 6.8.0** - Navigation
- **Tailwind CSS 3.2.7** - Styling
- **Framer Motion 10.12.4** - Animations
- **Lucide React** - Icons
- **Axios 1.3.4** - HTTP client
- **Web Speech API** - Text-to-speech
- **WebGazer.js** - Eye tracking (optional)

### Backend Technologies
- **Node.js 16+** - Runtime environment
- **Express.js 4.18.2** - Web framework
- **MongoDB** - Database
- **Mongoose 7.5.0** - ODM
- **JWT** - Authentication
- **Winston** - Logging
- **Helmet** - Security

### Testing & Quality
- **Jest** - Unit testing
- **React Testing Library** - Component testing
- **Axe Core** - Accessibility testing
- **Web Vitals** - Performance monitoring
- **ESLint** - Code quality

## Security Architecture

### Authentication & Authorization
- **JWT Tokens** - Stateless authentication
- **Role-Based Access Control** - User permissions
- **Password Hashing** - bcrypt with salt rounds
- **Session Management** - Secure token storage

### Data Protection
- **Input Validation** - Express validator
- **SQL Injection Prevention** - Mongoose ODM
- **XSS Protection** - Helmet middleware
- **CSRF Protection** - CSRF tokens

### Privacy & Compliance
- **Data Encryption** - Sensitive data encryption
- **GDPR Compliance** - User data rights
- **HIPAA Considerations** - Healthcare data protection
- **Audit Logging** - Access tracking

## Performance Architecture

### Frontend Optimization
- **Code Splitting** - Lazy loading components
- **Image Optimization** - WebP format, lazy loading
- **Bundle Optimization** - Tree shaking, minification
- **Caching Strategy** - Service worker implementation

### Backend Optimization
- **Database Indexing** - Query optimization
- **API Rate Limiting** - DDoS protection
- **Response Compression** - Gzip compression
- **Connection Pooling** - Database connections

### Monitoring & Analytics
- **Performance Metrics** - Core Web Vitals
- **Error Tracking** - Sentry integration
- **User Analytics** - Usage patterns
- **Accessibility Metrics** - WCAG compliance tracking

## Accessibility Architecture

### WCAG 2.1 Compliance
- **Level AA Compliance** - All accessibility features
- **Screen Reader Support** - ARIA labels, semantic HTML
- **Keyboard Navigation** - Full keyboard access
- **Color Contrast** - 4.5:1 ratio minimum

### Multi-Modal Support
- **Visual Support** - High contrast, large text
- **Auditory Support** - Text-to-speech, audio cues
- **Motor Support** - Eye tracking, voice commands
- **Cognitive Support** - Simplified interface, focus modes

### Assistive Technology Integration
- **Screen Readers** - NVDA, JAWS, VoiceOver compatibility
- **Voice Control** - Speech recognition commands
- **Switch Devices** - Alternative input methods
- **Eye Tracking** - Gaze-based navigation

This architecture ensures a robust, scalable, and accessible platform that meets the diverse needs of users with cognitive disabilities while maintaining high performance and security standards.
