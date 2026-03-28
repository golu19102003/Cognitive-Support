import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Type, Square, MessageSquare, FileText, X, Contrast, Target, Eye, Settings, Timer, Play, Pause, RotateCcw, Award, Brain, Zap, Volume2, CheckCircle, AlertCircle, StickyNote, PenTool, BookOpen, Edit, Phone, Minus, Plus } from 'lucide-react';

const AccessibilitySidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDyslexiaFont, setIsDyslexiaFont] = useState(false);
  const [isSimplifiedText, setIsSimplifiedText] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [showFocusMode, setShowFocusMode] = useState(false);
  const [showEyeTracking, setShowEyeTracking] = useState(false);
  const [showGeneralSettingsModal, setShowGeneralSettingsModal] = useState(false);
  const [showQuickNotesModal, setShowQuickNotesModal] = useState(false);
  const [quickNotes, setQuickNotes] = useState('');
  
  // Focus Mode State
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes default
  const [sessionType, setSessionType] = useState('focus'); // focus, short_break, long_break
  const [streak, setStreak] = useState(0);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState([]);
  
  // Focus Options State
  const [hideNotifications, setHideNotifications] = useState(false);
  const [dimBackground, setDimBackground] = useState(false);
  const [timerMode, setTimerMode] = useState(false);
  const [blockSocialMedia, setBlockSocialMedia] = useState(false);
  const [simplifyText, setSimplifyText] = useState(false);
  
  // Eye Tracking State
  const [isEnabled, setIsEnabled] = useState(false);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [calibrationStep, setCalibrationStep] = useState(0);
  const [sensitivity, setSensitivity] = useState(50);
  const [dwellDuration, setDwellDuration] = useState(1500);
  const [showCursor, setShowCursor] = useState(true);
  
  // Eye Tracking Features State
  const [gazeSelection, setGazeSelection] = useState(false);
  const [autoScroll, setAutoScroll] = useState(false);
  const [calibration, setCalibration] = useState(false);
  const [eyeDetection, setEyeDetection] = useState(false);
  
  // Supported Features State
  const [clickSelection, setClickSelection] = useState(false);
  const [scrollControl, setScrollControl] = useState(false);
  const [textSelection, setTextSelection] = useState(false);
  
  // Gaze Point State
  const [gazePosition, setGazePosition] = useState({ x: 0, y: 0 });
  const [showGazePoint, setShowGazePoint] = useState(false);
  const [gazeHistory, setGazeHistory] = useState([]);
  const [cameraPermission, setCameraPermission] = useState(false);
  const [calibrationPoints, setCalibrationPoints] = useState([]);
  const [currentCalibrationPoint, setCurrentCalibrationPoint] = useState(0);
  const [dwellStartTime, setDwellStartTime] = useState(null);
  const [isDwelling, setIsDwelling] = useState(false);
  const [clickableElements, setClickableElements] = useState([]);
  const [videoStream, setVideoStream] = useState(null);
  const [trackingAccuracy, setTrackingAccuracy] = useState(0);
  
  const intervalRef = useRef(null);

  // Session Types Configuration
  const sessionTypes = {
    focus: { duration: 25 * 60, name: 'Focus Session', emoji: '🍅', color: 'blue' },
    short_break: { duration: 5 * 60, name: 'Short Break', emoji: '☕', color: 'green' },
    long_break: { duration: 15 * 60, name: 'Long Break', emoji: '🌿', color: 'purple' }
  };

  // Timer Effect
  useEffect(() => {
    if (isActive && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleSessionComplete();
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused, timeLeft]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle session completion
  const handleSessionComplete = () => {
    setIsActive(false);
    setIsPaused(false);
    
    // Calculate points
    const sessionPoints = Math.floor(sessionTypes[sessionType].duration / 60) * 2;
    const totalPoints = sessionPoints + (streak * 5);
    
    setPoints(prev => prev + totalPoints);
    setStreak(prev => prev + 1);
    
    // Check for achievements
    checkAchievements();
    
    // Play completion sound and show notification
    showNotification(`🎯 ${sessionTypes[sessionType].name} completed! +${totalPoints} points`);
    
    // Save data
    localStorage.setItem('focusStreak', streak + 1);
    localStorage.setItem('focusPoints', points + totalPoints);
  };

  // Check achievements
  const checkAchievements = () => {
    const newAchievements = [];
    
    // First Focus achievement
    if (streak === 0 && !achievements.find(a => a.id === 1)) {
      newAchievements.push({ id: 1, name: 'First Focus', icon: '🎯', points: 10 });
    }
    
    // Focus Streak achievement
    if (streak === 2 && !achievements.find(a => a.id === 2)) {
      newAchievements.push({ id: 2, name: 'Focus Streak', icon: '🔥', points: 25 });
    }
    
    if (newAchievements.length > 0) {
      setAchievements(prev => [...prev, ...newAchievements]);
      newAchievements.forEach(achievement => {
        showNotification(`🏆 Achievement Unlocked: ${achievement.name}! +${achievement.points} points`);
      });
    }
  };

  // Timer Controls
  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(sessionTypes[sessionType].duration);
  };

  // Change session type
  const changeSessionType = (type) => {
    setSessionType(type);
    setTimeLeft(sessionTypes[type].duration);
    setIsActive(false);
    setIsPaused(false);
  };

  // Eye Tracking Functions
  const startCalibration = () => {
    setIsCalibrating(true);
    setCalibrationStep(1);
    showNotification('👁️ Eye tracking calibration started...');
    
    // Simulate calibration process
    setTimeout(() => {
      setCalibrationStep(2);
    }, 2000);
    setTimeout(() => {
      setCalibrationStep(3);
    }, 4000);
    setTimeout(() => {
      setCalibrationStep(4);
    }, 6000);
    setTimeout(() => {
      setCalibrationStep(5);
    }, 8000);
    setTimeout(() => {
      setIsCalibrating(false);
      setIsCalibrated(true);
      setCalibrationStep(0);
      showNotification('✅ Eye tracking calibration completed!');
    }, 10000);
  };

  const toggleEyeTracking = () => {
    if (isCalibrated) {
      setIsEnabled(!isEnabled);
      showNotification(isEnabled ? '👁️ Eye tracking disabled' : '👁️ Eye tracking enabled');
    } else {
      startCalibration();
    }
  };

  // Focus Options Functions
  const toggleHideNotifications = () => {
    setHideNotifications(!hideNotifications);
    showNotification(hideNotifications ? '🔕 Notifications shown' : '🔕 Notifications hidden');
  };

  const toggleDimBackground = () => {
    setDimBackground(!dimBackground);
    if (!dimBackground) {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      showNotification('🌑 Background dimmed');
    } else {
      document.body.style.backgroundColor = '';
      showNotification('🌑 Background restored');
    }
  };

  const toggleTimerMode = () => {
    setTimerMode(!timerMode);
    showNotification(timerMode ? '⏱️ Timer mode disabled' : '⏱️ Timer mode enabled');
  };

  const toggleBlockSocialMedia = () => {
    setBlockSocialMedia(!blockSocialMedia);
    showNotification(blockSocialMedia ? '📵 Social media unblocked' : '📵 Social media blocked');
  };

  const toggleSimplifyText = () => {
    setSimplifyText(!simplifyText);
    if (!simplifyText) {
      document.documentElement.classList.add('simplify-text');
      localStorage.setItem('simplifyText', 'enabled');
      showNotification('📝 Simplify text enabled');
    } else {
      document.documentElement.classList.remove('simplify-text');
      localStorage.setItem('simplifyText', 'disabled');
      showNotification('📝 Simplify text disabled');
    }
  };

  // Eye Tracking Features Functions
  const toggleGazeSelection = () => {
    setGazeSelection(!gazeSelection);
    showNotification(gazeSelection ? '👆 Gaze Selection disabled' : '👆 Gaze Selection enabled');
  };

  const toggleAutoScroll = () => {
    setAutoScroll(!autoScroll);
    showNotification(autoScroll ? '📜 Auto Scroll disabled' : '📜 Auto Scroll enabled');
  };

  const toggleCalibration = async () => {
    setCalibration(!calibration);
    if (!calibration) {
      // Start calibration process
      setIsCalibrating(true);
      setCurrentCalibrationPoint(0);
      showNotification('🎯 Calibration process started');
      
      // Generate calibration points and start tracking
      generateCalibrationPoints();
      await startGazeTracking();
    } else {
      // Stop calibration
      setIsCalibrating(false);
      setCurrentCalibrationPoint(0);
      showNotification('🎯 Calibration process stopped');
    }
  };

  const toggleEyeDetection = () => {
    setEyeDetection(!eyeDetection);
    showNotification(eyeDetection ? '👁️ Eye Detection disabled' : '👁️ Eye Detection enabled');
  };

  // Supported Features Functions
  const toggleClickSelection = () => {
    if (isCalibrated) {
      setClickSelection(!clickSelection);
      showNotification(clickSelection ? '🖱️ Click Selection disabled' : '🖱️ Click Selection enabled');
    } else {
      showNotification('👁️ Please complete calibration first');
    }
  };

  const toggleScrollControl = () => {
    if (isCalibrated) {
      setScrollControl(!scrollControl);
      showNotification(scrollControl ? '📜 Scroll Control disabled' : '📜 Scroll Control enabled');
    } else {
      showNotification('👁️ Please complete calibration first');
    }
  };

  const toggleTextSelection = () => {
    if (isCalibrated) {
      setTextSelection(!textSelection);
      showNotification(textSelection ? '📝 Text Selection disabled' : '📝 Text Selection enabled');
    } else {
      showNotification('👁️ Please complete calibration first');
    }
  };

  // Gaze Tracking Functions
  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      setVideoStream(stream);
      setCameraPermission(true);
      showNotification('� Camera permission granted');
      return true;
    } catch (error) {
      console.error('Camera permission denied:', error);
      setCameraPermission(false);
      showNotification('📹 Camera permission denied');
      return false;
    }
  };

  const generateCalibrationPoints = () => {
    const points = [
      { x: window.innerWidth * 0.1, y: window.innerHeight * 0.1, id: 1 },
      { x: window.innerWidth * 0.9, y: window.innerHeight * 0.1, id: 2 },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5, id: 3 },
      { x: window.innerWidth * 0.1, y: window.innerHeight * 0.9, id: 4 },
      { x: window.innerWidth * 0.9, y: window.innerHeight * 0.9, id: 5 }
    ];
    setCalibrationPoints(points);
    return points;
  };

  const generateClickableElements = () => {
    const elements = [
      { x: 100, y: 100, width: 80, height: 40, text: 'Button 1', id: 'btn1' },
      { x: 200, y: 100, width: 80, height: 40, text: 'Button 2', id: 'btn2' },
      { x: 300, y: 100, width: 80, height: 40, text: 'Button 3', id: 'btn3' },
      { x: 400, y: 100, width: 80, height: 40, text: 'Button 4', id: 'btn4' },
      { x: 100, y: 200, width: 120, height: 40, text: 'Link 1', id: 'link1' },
      { x: 240, y: 200, width: 120, height: 40, text: 'Link 2', id: 'link2' },
      { x: 380, y: 200, width: 120, height: 40, text: 'Link 3', id: 'link3' },
      { x: 100, y: 300, width: 100, height: 40, text: 'Menu Item', id: 'menu1' },
      { x: 220, y: 300, width: 100, height: 40, text: 'Menu Item', id: 'menu2' },
      { x: 340, y: 300, width: 100, height: 40, text: 'Menu Item', id: 'menu3' }
    ];
    setClickableElements(elements);
    return elements;
  };

  const simulateEyeTracking = () => {
    // Simulate realistic eye movement patterns
    const time = Date.now();
    const x = window.innerWidth / 2 + Math.sin(time / 1000) * 200;
    const y = window.innerHeight / 2 + Math.cos(time / 1500) * 150;
    
    setGazePosition({ x, y });
    
    setGazeHistory(prev => {
      const newHistory = [...prev, { x, y, timestamp: time }];
      return newHistory.slice(-20);
    });

    // Check for dwell time on calibration points
    if (isCalibrating && calibrationPoints.length > 0) {
      const targetPoint = calibrationPoints[currentCalibrationPoint];
      const distance = Math.sqrt(Math.pow(x - targetPoint.x, 2) + Math.pow(y - targetPoint.y, 2));
      
      if (distance < 50) { // Within 50px of target
        if (!isDwelling) {
          setDwellStartTime(Date.now());
          setIsDwelling(true);
        } else if (Date.now() - dwellStartTime > 1500) { // Dwell for 1.5 seconds
          // Calibration point completed
          setCurrentCalibrationPoint(prev => prev + 1);
          setIsDwelling(false);
          setDwellStartTime(null);
          showNotification(`🎯 Calibration point ${currentCalibrationPoint + 1} completed!`);
          
          if (currentCalibrationPoint >= calibrationPoints.length - 1) {
            // Calibration completed
            setIsCalibrating(false);
            setIsCalibrated(true);
            setTrackingAccuracy(95);
            showNotification('✅ Eye tracking calibration completed!');
          }
        }
      } else {
        setIsDwelling(false);
        setDwellStartTime(null);
      }
    }

    // Check for clicks on clickable elements
    if (clickSelection && clickableElements.length > 0) {
      clickableElements.forEach(element => {
        if (x >= element.x && x <= element.x + element.width &&
            y >= element.y && y <= element.y + element.height) {
          if (!isDwelling) {
            setDwellStartTime(Date.now());
            setIsDwelling(true);
          } else if (Date.now() - dwellStartTime > dwellDuration) {
            // Click detected
            setIsDwelling(false);
            setDwellStartTime(null);
            showNotification(`🖱️ Clicked: ${element.text}`);
            
            // Visual feedback
            const clickEffect = document.createElement('div');
            clickEffect.className = 'fixed pointer-events-none z-[10000]';
            clickEffect.style.left = `${element.x + element.width/2}px`;
            clickEffect.style.top = `${element.y + element.height/2}px`;
            clickEffect.style.transform = 'translate(-50%, -50%)';
            clickEffect.innerHTML = '✓';
            clickEffect.style.color = 'green';
            clickEffect.style.fontSize = '24px';
            clickEffect.style.fontWeight = 'bold';
            clickEffect.style.animation = 'fadeOut 1s ease-out';
            document.body.appendChild(clickEffect);
            
            setTimeout(() => {
              document.body.removeChild(clickEffect);
            }, 1000);
          }
        } else {
          setIsDwelling(false);
          setDwellStartTime(null);
        }
      });
    }
  };

  const startGazeTracking = async () => {
    if (!cameraPermission) {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) return;
    }

    setShowGazePoint(true);
    showNotification('👁️ Eye tracking started');
    
    // Generate calibration points and clickable elements
    generateCalibrationPoints();
    generateClickableElements();
    
    // Start eye tracking simulation
    const gazeInterval = setInterval(simulateEyeTracking, 50);
    window.gazeInterval = gazeInterval;
  };

  const stopGazeTracking = (showNotificationOnStop = true) => {
    setShowGazePoint(false);
    
    if (showNotificationOnStop) {
      showNotification('👁️ Eye tracking stopped');
    }
    
    if (window.gazeInterval) {
      clearInterval(window.gazeInterval);
      window.gazeInterval = null;
    }
    
    // Stop video stream if exists
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
    }
  };

  // Gaze point effect
  useEffect(() => {
    if (showGazePoint && isEnabled) {
      startGazeTracking();
    } else {
      stopGazeTracking(false);
    }
    
    return () => {
      stopGazeTracking(false);
    };
  }, [showGazePoint, isEnabled, cameraPermission]);

  // Load saved settings
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Load high contrast setting
  useEffect(() => {
    const savedHighContrast = localStorage.getItem('highContrast');
    if (savedHighContrast === 'enabled') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  // Load text size setting
  useEffect(() => {
    const savedTextSize = localStorage.getItem('textSize');
    if (savedTextSize) {
      document.documentElement.style.fontSize = savedTextSize + 'px';
    }
  }, []);

  // Load simplify text setting
  useEffect(() => {
    const savedSimplifyText = localStorage.getItem('simplifyText');
    if (savedSimplifyText === 'enabled') {
      setSimplifyText(true);
      document.documentElement.classList.add('simplify-text');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    showNotification(isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode');
  };

  // High contrast toggle
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', !isHighContrast ? 'enabled' : 'disabled');
    showNotification(isHighContrast ? '🎨 Normal Contrast' : '🔳 High Contrast');
  };

  // Dyslexia font toggle
  const toggleDyslexiaFont = () => {
    const newState = !isDyslexiaFont;
    setIsDyslexiaFont(newState);
    if (newState) {
      document.body.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
      localStorage.setItem('dyslexiaFont', 'enabled');
      showNotification('♿ Dyslexia-friendly font enabled');
    } else {
      document.body.style.fontFamily = '';
      localStorage.setItem('dyslexiaFont', 'disabled');
      showNotification('📝 Standard font enabled');
    }
  };

  // Simplified text toggle
  const toggleSimplifiedText = () => {
    const newState = !isSimplifiedText;
    setIsSimplifiedText(newState);
    
    if (newState) {
      document.body.classList.add('simplified-text');
      localStorage.setItem('simplifiedText', 'enabled');
      showNotification('📝 Simplified text enabled');
    } else {
      document.body.classList.remove('simplified-text');
      localStorage.setItem('simplifiedText', 'disabled');
      showNotification('📄 Normal text enabled');
    }
  };

  // Get current translator language
  const getCurrentTranslatorLanguage = () => {
    // Try to get from Google Translate cookie first
    const googtransCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('googtrans='));
    if (googtransCookie) {
      const langValue = googtransCookie.split('=')[1];
      if (langValue && langValue.includes('/')) {
        const langCode = langValue.split('/')[2];
        if (langCode && langCode !== 'en') {
          return langCode;
        }
      }
    }
    
    // Try to get from localStorage
    const savedLang = localStorage.getItem('googtrans');
    if (savedLang && savedLang.includes('/')) {
      const langCode = savedLang.split('/')[2];
      if (langCode && langCode !== 'en') {
        return langCode;
      }
    }
    
    // Try to get from document language
    const docLang = document.documentElement.lang;
    if (docLang && docLang !== 'en') {
      return docLang;
    }
    
    return 'en'; // Default to English
  };

  
  // Show notification
  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Accessibility Sidebar */}
      <div className="accessibility-sidebar fixed left-2 top-[54%] -translate-y-1/2 z-[9998] bg-white rounded-2xl p-2 shadow-2xl border border-gray-200" style={{ position: 'fixed', zIndex: 9998, left: '6px', top: '54%', transform: 'translateY(-50%)', visibility: 'visible', opacity: 1 }}>
        <div className="flex flex-col space-y-2">
          {/* General Settings */}
          <button
            onClick={() => setShowGeneralSettingsModal(true)}
            className="w-11 h-11 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title="General Settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Quick Notes */}
          <button
            onClick={() => setShowQuickNotesModal(true)}
            className="w-11 h-11 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title="Quick Notes"
          >
            <Edit className="w-4 h-4" />
          </button>

          {/* Focus Mode Toggle */}
          <button
            onClick={() => setShowFocusMode(!showFocusMode)}
            className="w-11 h-11 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title={showFocusMode ? 'Close Focus Mode' : 'Open Focus Mode'}
          >
            {showFocusMode ? <X className="w-4 h-4" /> : <Target className="w-4 h-4" />}
          </button>

          {/* Eye Tracking Toggle */}
          <button
            onClick={() => setShowEyeTracking(!showEyeTracking)}
            className="w-11 h-11 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            title={showEyeTracking ? 'Close Eye Tracking' : 'Open Eye Tracking'}
          >
            {showEyeTracking ? <X className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white px-6 py-3 rounded-lg shadow-lg z-[9998] animate-slide-in-right" style={{ position: 'fixed', zIndex: 9998 }}>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {/* General Settings Modal */}
      {showGeneralSettingsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={() => setShowGeneralSettingsModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="relative -mt-8 -mx-8 mb-8">
              <div 
                className="absolute inset-0 rounded-t-2xl"
                style={{ 
                  background: 'linear-gradient(to right, #142C52, #16808D)',
                  zIndex: 0
                }}
              />
              <div className="relative z-10 flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ background: 'linear-gradient(to right, #142C52, #16808D)' }}>
                    <Settings className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">General Settings</h2>
                </div>
                <button 
                  onClick={() => setShowGeneralSettingsModal(false)}
                  className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20" 
                  style={{ backgroundColor: 'transparent' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2 scrollbar-hide">
              <div className="space-y-6">
                {/* Theme Toggle */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Display Theme</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={toggleTheme}>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center mr-3">
                        {isDarkMode ? <Moon className="w-5 h-5 text-white" /> : <Sun className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Dark Mode</p>
                        <p className="text-sm text-gray-600">Switch between light and dark theme</p>
                      </div>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode ? 'bg-[#16808D]' : 'bg-gray-300'
                    }`}>
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                        isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Dyslexia Font */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Reading Preferences</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={toggleDyslexiaFont}>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center mr-3">
                        <Type className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Dyslexia Font</p>
                        <p className="text-sm text-gray-600">Use dyslexia-friendly font</p>
                      </div>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      isDyslexiaFont ? 'bg-[#16808D]' : 'bg-gray-300'
                    }`}>
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                        isDyslexiaFont ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Simplified Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Display</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={toggleSimplifiedText}>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center mr-3">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Simplified Text</p>
                        <p className="text-sm text-gray-600">Show simplified version of text content</p>
                      </div>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      simplifyText ? 'bg-[#16808D]' : 'bg-gray-300'
                    }`}>
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                        simplifyText ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* High Contrast */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Accessibility</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={toggleHighContrast}>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center mr-3">
                        <Contrast className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">High Contrast Mode</p>
                        <p className="text-sm text-gray-600">Increase contrast for better visibility</p>
                      </div>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      isHighContrast ? 'bg-[#16808D]' : 'bg-gray-300'
                    }`}>
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                        isHighContrast ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Text Size Controls */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Text Size</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                        <Type className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Increase or decrease text size</p>
                        <p className="text-sm text-gray-600">Change text size for entire website</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          const currentSize = parseInt(localStorage.getItem('textSize')) || 16;
                          const newSize = Math.max(12, currentSize - 2);
                          localStorage.setItem('textSize', newSize);
                          document.documentElement.style.fontSize = newSize + 'px';
                          showNotification('📉 Text size decreased');
                        }}
                        className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
                        title="Decrease Text Size"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          localStorage.setItem('textSize', 16);
                          document.documentElement.style.fontSize = '16px';
                          showNotification('📏 Text size reset to default');
                        }}
                        className="w-10 h-10 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
                        title="Reset Text Size"
                      >
                        <Type className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          const currentSize = parseInt(localStorage.getItem('textSize')) || 16;
                          const newSize = Math.min(24, currentSize + 2);
                          localStorage.setItem('textSize', newSize);
                          document.documentElement.style.fontSize = newSize + 'px';
                          showNotification('📈 Text size increased');
                        }}
                        className="w-10 h-10 bg-gradient-to-r from-[#142C52] to-[#16808D] hover:from-[#16808D] hover:to-[#142C52] rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
                        title="Increase Text Size"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Notes Modal */}
      {showQuickNotesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={() => setShowQuickNotesModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] flex flex-col transition-all duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="relative -mt-8 -mx-8 mb-8 flex-shrink-0">
              <div 
                className="absolute inset-0 rounded-t-2xl"
                style={{ 
                  background: 'linear-gradient(to right, #142C52, #16808D)',
                  zIndex: 0
                }}
              />
              <div className="relative z-10 flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ background: 'linear-gradient(to right, #142C52, #16808D)' }}>
                    <Edit className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Quick Notes</h2>
                </div>
                <button 
                  onClick={() => setShowQuickNotesModal(false)}
                  className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20" 
                  style={{ backgroundColor: 'transparent' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
              <div className="space-y-6">
                {/* Notes Input */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Edit className="w-4 h-4" />
                    </div>
                    Write Your Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <textarea
                      value={quickNotes}
                      onChange={(e) => setQuickNotes(e.target.value)}
                      placeholder="Type your notes here... You can write reminders, thoughts, or important information."
                      className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#16808D] focus:border-transparent"
                      style={{ backgroundColor: 'white' }}
                    />
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm text-gray-500">
                        {quickNotes.length} characters
                      </span>
                      <button
                        onClick={() => setQuickNotes('')}
                        className="text-sm text-red-600 hover:text-red-700 transition-colors"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Zap className="w-4 h-4" />
                    </div>
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(quickNotes);
                        showNotification('📋 Notes copied to clipboard!');
                      }}
                      className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-blue-900 font-medium">Copy Notes</span>
                    </button>
                    <button
                      onClick={() => {
                        const blob = new Blob([quickNotes], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'quick-notes.txt';
                        a.click();
                        URL.revokeObjectURL(url);
                        showNotification('💾 Notes downloaded successfully!');
                      }}
                      className="flex items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-green-900 font-medium">Download Notes</span>
                    </button>
                  </div>
                </div>

                {/* Note Templates */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Type className="w-4 h-4" />
                    </div>
                    Quick Templates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      onClick={() => setQuickNotes('Meeting Notes:\n\nDate: \nAttendees: \nTopics: \nAction Items: \n\n')}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 text-left"
                    >
                      <p className="font-medium text-gray-900">Meeting Notes</p>
                      <p className="text-sm text-gray-600">Structured meeting format</p>
                    </button>
                    <button
                      onClick={() => setQuickNotes('To-Do List:\n\n☐ \n☐ \n☐ \n☐ \n☐ \n\nPriority Tasks:\n- \n- \n')}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 text-left"
                    >
                      <p className="font-medium text-gray-900">To-Do List</p>
                      <p className="text-sm text-gray-600">Task checklist format</p>
                    </button>
                    <button
                      onClick={() => setQuickNotes('Reminder:\n\nTask: \nDue Date: \nPriority: \nNotes: \n\n')}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 text-left"
                    >
                      <p className="font-medium text-gray-900">Reminder</p>
                      <p className="text-sm text-gray-600">Quick reminder format</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200 flex-shrink-0">
              <button
                onClick={() => setShowQuickNotesModal(false)}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
              <button
                onClick={() => {
                  localStorage.setItem('quickNotes', quickNotes);
                  showNotification('💾 Notes saved successfully!');
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg hover:from-[#16808D] hover:to-[#142C52] transition-all duration-300 transform hover:scale-105"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 24*7 Crisis Support Button */}
      <div className="fixed left-2 top-[84%] -translate-y-1/2 z-[9999]" style={{ position: 'fixed', zIndex: 9999, left: '8px', top: '84%', transform: 'translateY(-50%)', visibility: 'visible', opacity: 1 }}>
        <button
          onClick={() => {
            // Handle crisis support - could open modal, make phone call, or redirect
            window.open('tel:911', '_blank'); // Emergency number
            showNotification('🚨 Crisis support activated - Emergency services contacted!');
          }}
          className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white font-semibold transition-all transform hover:scale-105 shadow-lg animate-pulse"
          title="24*7 Crisis Support - Emergency"
        >
          <Phone className="w-5 h-5" />
        </button>
      </div>

      {/* Focus Mode Modal */}
      {showFocusMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={() => setShowFocusMode(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300" onClick={(e) => e.stopPropagation()}>
            {/* Header with Full-Width Navigation Bar at Top */}
            <div className="relative -mt-8 -mx-8 mb-8">
              {/* Navigation Bar Background - Full Width at Top */}
              <div 
                className="absolute inset-0 rounded-t-2xl"
                style={{ 
                  background: 'linear-gradient(to right, #142C52, #16808D)',
                  zIndex: 0
                }}
              />
              
              {/* Header Content */}
              <div className="relative z-10 flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ background: 'linear-gradient(to right, #142C52, #16808D)' }}>
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Focus Mode</h2>
                </div>
                <button 
                  onClick={() => setShowFocusMode(false)}
                  className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20" 
                  style={{ backgroundColor: 'transparent' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <div className="space-y-6">
                {/* Focus Mode Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Target className="w-4 h-4" />
                    </div>
                    Eliminate Distractions
                  </h3>
                  
                  <div className="bg-gradient-to-r from-[#16808D] to-blue-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold mb-2">🎯 Deep Focus Mode</p>
                        <p className="text-sm opacity-90">Remove all distractions and concentrate on your content</p>
                      </div>
                      <div className="text-4xl">🧘‍♂️</div>
                    </div>
                  </div>
                </div>

                {/* Focus Options */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Eye className="w-4 h-4" />
                    </div>
                    Focus Options
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">🔕</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Hide Notifications</p>
                          <p className="text-sm text-gray-600">Block all alerts</p>
                        </div>
                      </div>
                      <button
                        onClick={toggleHideNotifications}
                        className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          hideNotifications ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          hideNotifications ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">🌑</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Dim Background</p>
                          <p className="text-sm text-gray-600">Reduce visual noise</p>
                        </div>
                      </div>
                      <button
                        onClick={toggleDimBackground}
                        className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          dimBackground ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          dimBackground ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">⏱️</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Timer Mode</p>
                          <p className="text-sm text-gray-600">Set focus duration</p>
                        </div>
                      </div>
                      <button
                        onClick={toggleTimerMode}
                        className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          timerMode ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          timerMode ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">📵</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Block Social Media</p>
                          <p className="text-sm text-gray-600">Prevent distractions</p>
                        </div>
                      </div>
                      <button
                        onClick={toggleBlockSocialMedia}
                        className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          blockSocialMedia ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          blockSocialMedia ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pomodoro Timer */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Timer className="w-4 h-4" />
                    </div>
                    Pomodoro Timer
                  </h3>
                  
                  {/* Session Type Selector */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-3 gap-2">
                      <button 
                        onClick={() => changeSessionType('focus')}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          sessionType === 'focus' 
                            ? 'bg-[#16808D] text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        🍅 Focus
                        <span className="block text-xs opacity-90">25 min</span>
                      </button>
                      <button 
                        onClick={() => changeSessionType('short_break')}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          sessionType === 'short_break' 
                            ? 'bg-[#16808D] text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        ☕ Short Break
                        <span className="block text-xs opacity-90">5 min</span>
                      </button>
                      <button 
                        onClick={() => changeSessionType('long_break')}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          sessionType === 'long_break' 
                            ? 'bg-[#16808D] text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        🌿 Long Break
                        <span className="block text-xs opacity-90">15 min</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold text-[#16808D] mb-2">{formatTime(timeLeft)}</div>
                      <p className="text-gray-600">{sessionTypes[sessionType].name}</p>
                    </div>
                    
                    <div className="flex justify-center space-x-3 mb-4">
                      <button 
                        onClick={startTimer}
                        disabled={isActive && !isPaused}
                        className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                          isActive && !isPaused 
                            ? 'bg-gray-400 text-white cursor-not-allowed' 
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start
                      </button>
                      <button 
                        onClick={pauseTimer}
                        disabled={!isActive}
                        className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                          !isActive 
                            ? 'bg-gray-400 text-white cursor-not-allowed' 
                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                        }`}
                      >
                        <Pause className="w-4 h-4 mr-2" />
                        {isPaused ? 'Resume' : 'Pause'}
                      </button>
                      <button 
                        onClick={resetTimer}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-xs text-gray-600">Streak</p>
                        <p className="text-lg font-bold text-green-600">{streak}</p>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-xs text-gray-600">Points</p>
                        <p className="text-lg font-bold text-blue-600">{points}</p>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-xs text-gray-600">Level</p>
                        <p className="text-lg font-bold text-purple-600">{level}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Award className="w-4 h-4" />
                    </div>
                    Achievements
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      className={`relative bg-gradient-to-br ${
                        achievements.find(a => a.id === 1) 
                          ? 'from-green-50 to-green-100 border-2 border-green-500 shadow-lg' 
                          : 'from-gray-50 to-gray-100 border-2 border-gray-200 opacity-60 hover:opacity-100'
                      } rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]`}
                      onClick={() => {
                        if (!achievements.find(a => a.id === 1) && streak === 0) {
                          // Simulate achievement unlock
                          const newAchievement = { id: 1, name: 'First Focus', icon: '🎯', points: 10 };
                          setAchievements(prev => [...prev, newAchievement]);
                          setPoints(prev => prev + 10);
                          showNotification('🏆 Achievement Unlocked: First Focus! +10 points');
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <span className={`text-3xl mr-3 ${
                            achievements.find(a => a.id === 1) ? 'animate-bounce' : ''
                          }`}>🎯</span>
                          <div>
                            <p className="font-bold text-gray-900">First Focus</p>
                            <p className="text-sm text-gray-600">Complete your first focus session</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                            achievements.find(a => a.id === 1) 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            {achievements.find(a => a.id === 1) ? '✓ Unlocked' : '🔒 Locked'}
                          </div>
                          <div className="text-xs text-gray-500">+10 points</div>
                        </div>
                      </div>
                      {achievements.find(a => a.id === 1) && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div 
                      className={`relative bg-gradient-to-br ${
                        achievements.find(a => a.id === 2) 
                          ? 'from-green-50 to-green-100 border-2 border-green-500 shadow-lg' 
                          : 'from-gray-50 to-gray-100 border-2 border-gray-200 opacity-60 hover:opacity-100'
                      } rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]`}
                      onClick={() => {
                        if (!achievements.find(a => a.id === 2) && streak === 2) {
                          // Simulate achievement unlock
                          const newAchievement = { id: 2, name: 'Focus Streak', icon: '🔥', points: 25 };
                          setAchievements(prev => [...prev, newAchievement]);
                          setPoints(prev => prev + 25);
                          showNotification('🏆 Achievement Unlocked: Focus Streak! +25 points');
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <span className={`text-3xl mr-3 ${
                            achievements.find(a => a.id === 2) ? 'animate-bounce' : ''
                          }`}>🔥</span>
                          <div>
                            <p className="font-bold text-gray-900">Focus Streak</p>
                            <p className="text-sm text-gray-600">Complete 3 sessions in a row</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                            achievements.find(a => a.id === 2) 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            {achievements.find(a => a.id === 2) ? '✓ Unlocked' : '🔒 Locked'}
                          </div>
                          <div className="text-xs text-gray-500">+25 points</div>
                        </div>
                      </div>
                      {achievements.find(a => a.id === 2) && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div 
                      className={`relative bg-gradient-to-br ${
                        points >= 15 
                          ? 'from-green-50 to-green-100 border-2 border-green-500 shadow-lg' 
                          : 'from-gray-50 to-gray-100 border-2 border-gray-200 opacity-60 hover:opacity-100'
                      } rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]`}
                      onClick={() => {
                        if (points >= 15 && !achievements.find(a => a.id === 3)) {
                          // Simulate achievement unlock
                          const newAchievement = { id: 3, name: 'Time Master', icon: '⏰', points: 15 };
                          setAchievements(prev => [...prev, newAchievement]);
                          setPoints(prev => prev + 15);
                          showNotification('🏆 Achievement Unlocked: Time Master! +15 points');
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <span className={`text-3xl mr-3 ${
                            achievements.find(a => a.id === 3) ? 'animate-bounce' : ''
                          }`}>⏰</span>
                          <div>
                            <p className="font-bold text-gray-900">Time Master</p>
                            <p className="text-sm text-gray-600">Complete a 25-minute session</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                            achievements.find(a => a.id === 3) 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            {achievements.find(a => a.id === 3) ? '✓ Unlocked' : '🔒 Locked'}
                          </div>
                          <div className="text-xs text-gray-500">+15 points</div>
                        </div>
                      </div>
                      {achievements.find(a => a.id === 3) && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div 
                      className={`relative bg-gradient-to-br ${
                        level >= 5 
                          ? 'from-green-50 to-green-100 border-2 border-green-500 shadow-lg' 
                          : 'from-gray-50 to-gray-100 border-2 border-gray-200 opacity-60 hover:opacity-100'
                      } rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]`}
                      onClick={() => {
                        if (level >= 5 && !achievements.find(a => a.id === 4)) {
                          // Simulate achievement unlock
                          const newAchievement = { id: 4, name: 'Consistency King', icon: '👑', points: 50 };
                          setAchievements(prev => [...prev, newAchievement]);
                          setPoints(prev => prev + 50);
                          showNotification('🏆 Achievement Unlocked: Consistency King! +50 points');
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <span className={`text-3xl mr-3 ${
                            achievements.find(a => a.id === 4) ? 'animate-bounce' : ''
                          }`}>👑</span>
                          <div>
                            <p className="font-bold text-gray-900">Consistency King</p>
                            <p className="text-sm text-gray-600">Use focus mode for 7 days</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                            achievements.find(a => a.id === 4) 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            {achievements.find(a => a.id === 4) ? '✓ Unlocked' : '🔒 Locked'}
                          </div>
                          <div className="text-xs text-gray-500">+50 points</div>
                        </div>
                      </div>
                      {achievements.find(a => a.id === 4) && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      resetTimer();
                      setShowFocusMode(false);
                    }}
                    className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (!isActive) {
                        startTimer();
                        showNotification('🎯 Focus Mode Activated');
                      }
                      setShowFocusMode(false);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg hover:from-[#16808D] hover:to-[#142C52] transition-all duration-300 transform hover:scale-105"
                  >
                    Activate Focus Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Eye Tracking Modal */}
      {showEyeTracking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={() => setShowEyeTracking(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300" onClick={(e) => e.stopPropagation()}>
            {/* Header with Full-Width Navigation Bar at Top */}
            <div className="relative -mt-8 -mx-8 mb-8">
              {/* Navigation Bar Background - Full Width at Top */}
              <div 
                className="absolute inset-0 rounded-t-2xl"
                style={{ 
                  background: 'linear-gradient(to right, #142C52, #16808D)',
                  zIndex: 0
                }}
              />
              
              {/* Header Content */}
              <div className="relative z-10 flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ background: 'linear-gradient(to right, #142C52, #16808D)' }}>
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Eye Tracking Navigation</h2>
                </div>
                <button 
                  onClick={() => setShowEyeTracking(false)}
                  className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20" 
                  style={{ backgroundColor: 'transparent' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <div className="space-y-6">
                {/* Eye Tracking Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Eye className="w-4 h-4" />
                    </div>
                    Navigate with Your Eyes
                  </h3>
                  
                  <div className="bg-gradient-to-r from-[#16808D] to-blue-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold mb-2">👁️ Hands-Free Navigation</p>
                        <p className="text-sm opacity-90">Control the interface using only your eye movements</p>
                      </div>
                      <div className="text-4xl">🎯</div>
                    </div>
                  </div>
                </div>

                {/* Eye Tracking Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Target className="w-4 h-4" />
                    </div>
                    Eye Tracking Features
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">👆</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Gaze Selection</p>
                          <p className="text-sm text-gray-600">Look to select</p>
                        </div>
                      </div>
                      <button
                        onClick={toggleGazeSelection}
                        className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          gazeSelection ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          gazeSelection ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">📜</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Auto Scroll</p>
                          <p className="text-sm text-gray-600">Scroll with gaze</p>
                        </div>
                      </div>
                      <button
                        onClick={toggleAutoScroll}
                        className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          autoScroll ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          autoScroll ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">🎯</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Calibration</p>
                          <p className="text-sm text-gray-600">Track accuracy</p>
                        </div>
                      </div>
                      <button
                        onClick={toggleCalibration}
                        disabled={isCalibrating}
                        className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          isCalibrating ? 'bg-yellow-500' : calibration ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          isCalibrating ? 'animate-pulse' : calibration ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">👁️</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Eye Detection</p>
                          <p className="text-sm text-gray-600">Track movement</p>
                        </div>
                      </div>
                      <button
                        onClick={toggleEyeDetection}
                        className={`w-12 h-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          eyeDetection ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          eyeDetection ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calibration Status */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Settings className="w-4 h-4" />
                    </div>
                    Calibration Status
                  </h3>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Camera Access</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">✓ Enabled</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Eye Detection</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        isCalibrated 
                          ? 'bg-green-100 text-green-800' 
                          : isCalibrating 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {isCalibrated ? '✓ Calibrated' : isCalibrating ? '⚠ Calibrating...' : '— Not Calibrated'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Tracking Accuracy</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        isCalibrated 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {isCalibrated ? '95%' : '— Not Calibrated'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Eye Tracking Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Settings className="w-4 h-4" />
                    </div>
                    Tracking Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Sensitivity</label>
                        <span className="text-sm text-gray-600">{sensitivity}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sensitivity} 
                        onChange={(e) => setSensitivity(e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Dwell Time</label>
                        <span className="text-sm text-gray-600">{dwellDuration}ms</span>
                      </div>
                      <input 
                        type="range" 
                        min="500" 
                        max="3000" 
                        step="100"
                        value={dwellDuration} 
                        onChange={(e) => setDwellDuration(e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">👁️</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Show Gaze Cursor</p>
                          <p className="text-sm text-gray-600">Display eye tracking indicator</p>
                        </div>
                      </div>
                      <button 
                        onClick={async () => {
                          setShowCursor(!showCursor);
                          if (!showCursor) {
                            // Start full eye tracking system
                            setShowGazePoint(true);
                            setIsEnabled(true);
                            showNotification('👁️ Eye tracking system activated');
                            
                            // Request camera permission and start tracking
                            await startGazeTracking();
                          } else {
                            // Stop eye tracking system
                            setShowGazePoint(false);
                            setIsEnabled(false);
                            showNotification('👁️ Eye tracking system deactivated');
                            stopGazeTracking();
                          }
                        }}
                        className={`w-12 h-6 rounded-full transition-all duration-300 ${
                          showCursor ? 'bg-[#16808D]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          showCursor ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calibration Process */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Target className="w-4 h-4" />
                    </div>
                    Calibration Process
                  </h3>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${
                        isCalibrating ? 'bg-yellow-100' : 'bg-gray-200'
                      }`}>
                        <Target className={`w-8 h-8 ${isCalibrating ? 'text-yellow-600 animate-pulse' : 'text-gray-400'}`} />
                      </div>
                      <p className="text-gray-600 mb-2">
                        {isCalibrating ? 'Calibrating...' : 'Click "Start Calibration" to begin'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {isCalibrating ? `Step ${calibrationStep}/5 - Follow the target` : 'Follow the on-screen targets with your eyes'}
                      </p>
                    </div>

                    <div className="grid grid-cols-5 gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((step) => (
                        <div key={step} className="text-center">
                          <div className={`w-7 h-7 rounded-full mx-auto mb-1 flex items-center justify-center text-xs font-medium ${
                            calibrationStep >= step 
                              ? 'bg-green-100 text-green-800' 
                              : step === calibrationStep + 1 && isCalibrating
                                ? 'bg-yellow-100 text-yellow-800 animate-pulse'
                                : 'bg-gray-200 text-gray-400'
                          }`}>
                            {calibrationStep >= step ? '✓' : step}
                          </div>
                          <p className="text-xs text-gray-500">Point {step}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center">
                        <AlertCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        <p className="text-sm text-gray-600">
                          Make sure you're in a well-lit environment and positioned about 60cm from the screen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supported Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#142C52] to-[#16808D] rounded-full flex items-center justify-center text-white mr-3">
                      <Zap className="w-4 h-4" />
                    </div>
                    Supported Features
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      className={`relative bg-gradient-to-br ${
                        clickSelection 
                          ? 'from-green-50 to-green-100 border-2 border-green-500 shadow-lg' 
                          : 'from-gray-50 to-gray-100 border-2 border-gray-200 opacity-60 hover:opacity-100'
                      } rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]`}
                      onClick={toggleClickSelection}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${
                          clickSelection 
                            ? 'bg-green-100' 
                            : 'bg-gray-200'
                        } rounded-full flex items-center justify-center mr-3`}>
                          <CheckCircle className={`w-4 h-4 ${
                            clickSelection ? 'text-green-600' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <p className={`font-bold text-gray-900`}>Click Selection</p>
                          <p className="text-sm text-gray-600">Dwell to click</p>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                          clickSelection 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {clickSelection ? '✓ Active' : '🔒 Inactive'}
                        </div>
                      </div>
                      {clickSelection && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div 
                      className={`relative bg-gradient-to-br ${
                        scrollControl 
                          ? 'from-green-50 to-green-100 border-2 border-green-500 shadow-lg' 
                          : 'from-gray-50 to-gray-100 border-2 border-gray-200 opacity-60 hover:opacity-100'
                      } rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]`}
                      onClick={toggleScrollControl}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${
                          scrollControl 
                            ? 'bg-green-100' 
                            : 'bg-gray-200'
                        } rounded-full flex items-center justify-center mr-3`}>
                          <CheckCircle className={`w-4 h-4 ${
                            scrollControl ? 'text-green-600' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <p className={`font-bold text-gray-900`}>Scroll Control</p>
                          <p className="text-sm text-gray-600">Gaze scrolling</p>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                          scrollControl 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {scrollControl ? '✓ Active' : '🔒 Inactive'}
                        </div>
                      </div>
                      {scrollControl && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div 
                      className={`relative bg-gradient-to-br ${
                        textSelection 
                          ? 'from-green-50 to-green-100 border-2 border-green-500 shadow-lg' 
                          : 'from-gray-50 to-gray-100 border-2 border-gray-200 opacity-60 hover:opacity-100'
                      } rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]`}
                      onClick={toggleTextSelection}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${
                          textSelection 
                            ? 'bg-green-100' 
                            : 'bg-gray-200'
                        } rounded-full flex items-center justify-center mr-3`}>
                          <CheckCircle className={`w-4 h-4 ${
                            textSelection ? 'text-green-600' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <p className={`font-bold text-gray-900`}>Text Selection</p>
                          <p className="text-sm text-gray-600">Word highlighting</p>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                          textSelection 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {textSelection ? '✓ Active' : '🔒 Inactive'}
                        </div>
                      </div>
                      {textSelection && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="relative bg-gradient-to-br from-yellow-50 to-orange-100 border-2 border-yellow-300 rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] opacity-80">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Voice Control</p>
                          <p className="text-sm text-gray-600">Coming soon</p>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className="px-2 py-1 bg-yellow-300 text-yellow-800 text-xs font-medium rounded-full">
                          🚧 In Development
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center animate-pulse">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setShowEyeTracking(false)}
                    className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (isCalibrated) {
                        toggleEyeTracking();
                      } else {
                        startCalibration();
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg hover:from-[#16808D] hover:to-[#142C52] transition-all duration-300 transform hover:scale-105"
                  >
                    {isCalibrated ? (isEnabled ? 'Disable Eye Tracking' : 'Enable Eye Tracking') : 'Start Calibration'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gaze Point Visualization */}
      {(showGazePoint || isEnabled) && (
        <>
          {/* Main Gaze Point */}
          <div 
            className="fixed pointer-events-none z-[9999] transition-all duration-100"
            style={{
              left: `${gazePosition.x}px`,
              top: `${gazePosition.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-8 h-8 bg-red-500 rounded-full opacity-30 animate-ping"></div>
              {/* Middle ring */}
              <div className="absolute inset-1 w-6 h-6 bg-red-500 rounded-full opacity-50 animate-ping"></div>
              {/* Inner circle */}
              <div className="absolute inset-2 w-4 h-4 bg-red-600 rounded-full shadow-lg"></div>
              {/* Center dot */}
              <div className="absolute inset-3 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Calibration Points */}
          {isCalibrating && calibrationPoints.map((point, index) => (
            <div
              key={point.id}
              className={`fixed pointer-events-none z-[9998] transition-all duration-300 ${
                index === currentCalibrationPoint ? 'animate-pulse' : ''
              }`}
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                index === currentCalibrationPoint 
                  ? 'bg-yellow-400 shadow-2xl' 
                  : index < currentCalibrationPoint
                    ? 'bg-green-500'
                    : 'bg-gray-400'
              }`}>
                {index + 1}
              </div>
              {index === currentCalibrationPoint && (
                <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping"></div>
              )}
            </div>
          ))}

          {/* Clickable Elements */}
          {clickSelection && clickableElements.map((element) => (
            <div
              key={element.id}
              className={`fixed pointer-events-none z-[9997] transition-all duration-200 ${
                isDwelling && 
                gazePosition.x >= element.x && 
                gazePosition.x <= element.x + element.width &&
                gazePosition.y >= element.y && 
                gazePosition.y <= element.y + element.height
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 border border-gray-300'
              } rounded-lg flex items-center justify-center text-sm font-medium`}
              style={{
                left: `${element.x}px`,
                top: `${element.y}px`,
                width: `${element.width}px`,
                height: `${element.height}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {element.text}
            </div>
          ))}

          {/* Gaze Trail */}
          {gazeHistory.map((point, index) => (
            <div
              key={`${point.timestamp}-${index}`}
              className="fixed pointer-events-none z-[9996] transition-all duration-300"
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                transform: 'translate(-50%, -50%)',
                opacity: (index + 1) / gazeHistory.length * 0.3
              }}
            >
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            </div>
          ))}

          {/* Dwell Indicator */}
          {isDwelling && (
            <div 
              className="fixed pointer-events-none z-[10000] transition-all duration-200"
              style={{
                left: `${gazePosition.x}px`,
                top: `${gazePosition.y + 30}px`,
                transform: 'translate(-50%, 0)'
              }}
            >
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Dwell: {Math.round((Date.now() - dwellStartTime) / 100)}/15
              </div>
            </div>
          )}

          {/* Camera Permission Status */}
          <div className="fixed top-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg z-[9995] pointer-events-none">
            <div className="text-xs font-mono">
              <div>📹 Camera: {cameraPermission ? '✅ Granted' : '❌ Not Granted'}</div>
              <div>👁️ Status: {isEnabled ? '🟢 Active' : '🔴 Inactive'}</div>
              <div>🎯 Accuracy: {trackingAccuracy}%</div>
              <div>📍 X: {Math.round(gazePosition.x)}px</div>
              <div>📍 Y: {Math.round(gazePosition.y)}px</div>
              <div>📊 Points: {gazeHistory.length}</div>
            </div>
          </div>

          {/* Calibration Instructions */}
          {isCalibrating && (
            <div className="fixed bottom-4 left-4 bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow-lg z-[9994] pointer-events-none max-w-sm">
              <div className="text-sm font-bold mb-2">🎯 Calibration Instructions</div>
              <div className="text-xs space-y-1">
                <div>• Look at the numbered points</div>
                <div>• Hold your gaze for 1.5 seconds</div>
                <div>• Complete all 5 points</div>
                <div>• Current: {currentCalibrationPoint + 1}/5</div>
              </div>
            </div>
          )}

          {/* Click Mode Instructions */}
          {clickSelection && (
            <div className="fixed bottom-4 left-4 bg-blue-100 text-blue-800 p-4 rounded-lg shadow-lg z-[9994] pointer-events-none max-w-sm">
              <div className="text-sm font-bold mb-2">🖱️ Click Mode Instructions</div>
              <div className="text-xs space-y-1">
                <div>• Look at buttons/links</div>
                <div>• Hold gaze to click</div>
                <div>• Dwell time: {dwellDuration}ms</div>
                <div>• Status: {isDwelling ? '⏳ Dwelling...' : '👁️ Looking'}</div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.55s ease-out;
        }
        
        /* Simplified text styles for better clarity */
        .simplified-text {
          line-height: 1.8 !important;
          font-size: 16px !important;
          letter-spacing: 0.5px !important;
          word-spacing: 2px !important;
        }
        
        .simplified-text p {
          margin-bottom: 1.5em !important;
        }
        
        .simplified-text h1, 
        .simplified-text h2, 
        .simplified-text h3, 
        .simplified-text h4, 
        .simplified-text h5, 
        .simplified-text h6 {
          margin-bottom: 1em !important;
          margin-top: 1.5em !important;
          font-weight: 600 !important;
        }
        
        .simplified-text li {
          margin-bottom: 0.8em !important;
          line-height: 1.6 !important;
        }
        
        /* Dyslexia-friendly font styles */
        .dyslexia-font {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
          font-size: 18px !important;
          line-height: 1.8 !important;
          letter-spacing: 0.1em !important;
          word-spacing: 0.3em !important;
          text-align: left !important;
          color: #000000 !important;
          background-color: #FFFFCC !important;
        }
        
        .dyslexia-font * {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
        }
        
        .dyslexia-font h1, 
        .dyslexia-font h2, 
        .dyslexia-font h3, 
        .dyslexia-font h4, 
        .dyslexia-font h5, 
        .dyslexia-font h6 {
          font-weight: bold !important;
          font-size: 1.3em !important;
          margin-bottom: 1em !important;
          margin-top: 1.5em !important;
          text-decoration: underline !important;
          text-underline-offset: 4px !important;
        }
        
        .dyslexia-font p {
          margin-bottom: 1.2em !important;
          text-indent: 2em !important;
        }
        
        .dyslexia-font a {
          color: #0000FF !important;
          text-decoration: underline !important;
          font-weight: bold !important;
        }
        
        .dyslexia-font a:hover {
          background-color: #FFFF99 !important;
          color: #FF0000 !important;
        }
        
        .dyslexia-font li {
          margin-bottom: 0.8em !important;
          list-style-position: outside !important;
          margin-left: 2em !important;
        }
        
        .dyslexia-font ul, 
        .dyslexia-font ol {
          margin-bottom: 1.2em !important;
        }
        
        .dyslexia-font blockquote {
          border-left: 4px solid #000000 !important;
          padding-left: 1.5em !important;
          margin: 1.5em 0 !important;
          font-style: italic !important;
          background-color: #FFFFF0 !important;
        }
        
        .dyslexia-font code {
          font-family: 'Courier New', monospace !important;
          background-color: #E0E0E0 !important;
          padding: 2px 4px !important;
          border-radius: 3px !important;
        }
        
        .dyslexia-font pre {
          font-family: 'Courier New', monospace !important;
          background-color: #E0E0E0 !important;
          padding: 1em !important;
          border-radius: 5px !important;
          overflow-x: auto !important;
          white-space: pre-wrap !important;
        }
        
        .dyslexia-font table {
          border-collapse: collapse !important;
          margin: 1.5em 0 !important;
          width: 100% !important;
        }
        
        .dyslexia-font th, 
        .dyslexia-font td {
          border: 2px solid #000000 !important;
          padding: 8px !important;
          text-align: left !important;
        }
        
        .dyslexia-font th {
          background-color: #DDDDDD !important;
          font-weight: bold !important;
        }
        
        .dyslexia-font input, 
        .dyslexia-font textarea, 
        .dyslexia-font select {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
          font-size: 16px !important;
          border: 2px solid #000000 !important;
          padding: 8px !important;
          background-color: #FFFFFF !important;
        }
        
        .dyslexia-font button {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
          font-size: 16px !important;
          font-weight: bold !important;
          padding: 10px 15px !important;
          border: 2px solid #000000 !important;
          background-color: #DDDDDD !important;
          cursor: pointer !important;
        }
        
        .dyslexia-font button:hover {
          background-color: #BBBBBB !important;
        }
        
        .dark {
          background-color: #1a1a1a !important;
          color: #ffffff !important;
        }
        
        .dark .bg-white {
          background-color: #2a2a2a !important;
          color: #ffffff !important;
        }
        
        .dark .bg-gray-50 {
          background-color: #1a1a1a !important;
        }
        
        .dark .text-gray-700 {
          color: #e0e0e0 !important;
        }
        
        .dark .text-gray-600 {
          color: #b0b0b0 !important;
        }
        
        .dark .border-gray-200 {
          border-color: #404040 !important;
        }
        
        /* High contrast styles */
        .high-contrast {
          background-color: #000000 !important;
          color: #FFFFFF !important;
        }
        
        .high-contrast .bg-white {
          background-color: #000000 !important;
          color: #FFFFFF !important;
        }
        
        .high-contrast .bg-gray-50 {
          background-color: #000000 !important;
        }
        
        .high-contrast .bg-gray-100 {
          background-color: #1a1a1a !important;
        }
        
        .high-contrast .bg-blue-50 {
          background-color: #000033 !important;
        }
        
        .high-contrast .text-gray-700 {
          color: #FFFFFF !important;
        }
        
        .high-contrast .text-gray-600 {
          color: #FFFFFF !important;
        }
        
        .high-contrast .text-gray-900 {
          color: #FFFFFF !important;
        }
        
        .high-contrast .border-gray-200 {
          border-color: #FFFFFF !important;
        }
        
        .high-contrast .border-blue-200 {
          border-color: #FFFFFF !important;
        }
        
        .high-contrast button {
          border: 2px solid #FFFFFF !important;
        }
        
        .high-contrast input,
        .high-contrast textarea,
        .high-contrast select {
          background-color: #000000 !important;
          color: #FFFFFF !important;
          border: 2px solid #FFFFFF !important;
        }
        
        .high-contrast a {
          color: #FFFF00 !important;
          text-decoration: underline !important;
        }
        
        .high-contrast a:hover {
          color: #00FFFF !important;
        }
        `
      }} />
    </>
  );
};

export default AccessibilitySidebar;
