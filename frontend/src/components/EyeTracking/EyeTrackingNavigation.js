import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Eye, EyeOff, Settings, AlertCircle, CheckCircle, Navigation, X } from 'lucide-react';

const EyeTrackingNavigation = ({ onClose }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [calibrationStep, setCalibrationStep] = useState(0);
  const [gazePosition, setGazePosition] = useState({ x: 0, y: 0 });
  const [dwellTime, setDwellTime] = useState(0);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isSupported, setIsSupported] = useState(false);
  const [sensitivity, setSensitivity] = useState(50);
  const [dwellDuration, setDwellDuration] = useState(1500); // 1.5 seconds
  const [showCursor, setShowCursor] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const gazeRef = useRef(null);
  const dwellIntervalRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Check for theme preference
  useEffect(() => {
    const checkTheme = () => {
      // Check multiple sources for theme preference
      const theme = localStorage.getItem('theme') || 
                   localStorage.getItem('darkMode') || 
                   localStorage.getItem('isDarkMode');
      
      // Check if document has dark class
      const hasDarkClass = document.documentElement.classList.contains('dark');
      
      // Set theme based on any available indicator
      const isDark = theme === 'dark' || theme === 'true' || hasDarkClass;
      setIsDarkMode(isDark);
    };

    // Initial check
    checkTheme();
    
    // Listen for theme changes
    window.addEventListener('storage', checkTheme);
    
    // Also check for DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Poll every 500ms as backup
    const interval = setInterval(checkTheme, 500);
    
    return () => {
      window.removeEventListener('storage', checkTheme);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const calibrationPoints = [
    { x: 10, y: 10 }, // Top-left
    { x: 90, y: 10 }, // Top-right
    { x: 50, y: 50 }, // Center
    { x: 10, y: 90 }, // Bottom-left
    { x: 90, y: 90 }, // Bottom-right
  ];

  useEffect(() => {
    // Check if WebGazer is available or if we should use a fallback
    checkEyeTrackingSupport();
    
    return () => {
      // Cleanup
      if (dwellIntervalRef.current) {
        clearInterval(dwellIntervalRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const checkEyeTrackingSupport = async () => {
    try {
      // Check for camera access
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      
      // Check for WebGazer or other eye tracking libraries
      if (typeof window.gaze === 'undefined' && typeof window.webgazer === 'undefined') {
        // Fallback to mouse-based gaze simulation for demo
        console.log('Eye tracking not available, using mouse simulation');
        setIsSupported(true); // We'll use mouse simulation
      } else {
        setIsSupported(true);
      }
    } catch (error) {
      console.error('Eye tracking not supported:', error);
      setError('Camera access denied or eye tracking not supported');
      setIsSupported(false);
    }
  };

  const startCalibration = async () => {
    setIsCalibrating(true);
    setCalibrationStep(0);
    setError('');
    setSuccess('');
    
    try {
      // Initialize eye tracking
      if (window.webgazer) {
        await window.webgazer.setGazeListener((data, elapsedTime) => {
          if (data == null) return;
          
          setGazePosition({ x: data.x, y: data.y });
          updateGazeCursor(data.x, data.y);
        }).begin();
        
        window.webgazer.showVideoPreview(false);
        window.webgazer.showPredictionPoints(false);
      } else {
        // Fallback to mouse simulation
        setupMouseSimulation();
      }
    } catch (error) {
      console.error('Calibration error:', error);
      setError('Failed to start calibration');
      setIsCalibrating(false);
    }
  };

  const setupMouseSimulation = () => {
    const handleMouseMove = (event) => {
      if (!isEnabled) return;
      
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      
      setGazePosition({ x, y });
      updateGazeCursor(event.clientX, event.clientY);
      checkElementSelection(event.clientX, event.clientY);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  };

  const updateGazeCursor = (x, y) => {
    if (gazeRef.current) {
      gazeRef.current.style.left = `${x}px`;
      gazeRef.current.style.top = `${y}px`;
    }
  };

  const checkElementSelection = useCallback((x, y) => {
    const elements = document.querySelectorAll('[data-eye-selectable="true"]');
    let hoveredElement = null;
    
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        hoveredElement = element;
      }
    });
    
    if (hoveredElement !== selectedElement) {
      if (selectedElement) {
        selectedElement.classList.remove('eye-hover');
      }
      
      if (hoveredElement) {
        hoveredElement.classList.add('eye-hover');
        setSelectedElement(hoveredElement);
        startDwellTimer(hoveredElement);
      } else {
        setSelectedElement(null);
        stopDwellTimer();
      }
    }
  }, [selectedElement]);

  const startDwellTimer = (element) => {
    stopDwellTimer();
    
    let dwellProgress = 0;
    const dwellInterval = 50; // Check every 50ms
    
    dwellIntervalRef.current = setInterval(() => {
      dwellProgress += dwellInterval;
      
      if (dwellProgress >= dwellDuration) {
        // Trigger click
        element.click();
        stopDwellTimer();
        showSuccess('Element selected with eye tracking!');
      }
    }, dwellInterval);
  };

  const stopDwellTimer = () => {
    if (dwellIntervalRef.current) {
      clearInterval(dwellIntervalRef.current);
      dwellIntervalRef.current = null;
    }
  };

  const completeCalibrationStep = () => {
    if (calibrationStep < calibrationPoints.length - 1) {
      setCalibrationStep(prev => prev + 1);
    } else {
      // Calibration complete
      setIsCalibrating(false);
      setIsEnabled(true);
      setSuccess('Eye tracking calibration complete! You can now navigate with your eyes.');
    }
  };

  const toggleEyeTracking = async () => {
    if (isEnabled) {
      // Disable eye tracking
      setIsEnabled(false);
      stopDwellTimer();
      if (window.webgazer) {
        window.webgazer.pause();
      }
      setSuccess('Eye tracking disabled');
    } else {
      // Enable eye tracking
      if (!isCalibrated) {
        await startCalibration();
      } else {
        setIsEnabled(true);
        if (window.webgazer) {
          window.webgazer.resume();
        }
        setSuccess('Eye tracking enabled');
      }
    }
  };

  const showSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleCalibrationPointClick = () => {
    completeCalibrationStep();
  };

  const getSensitivityMultiplier = () => {
    return sensitivity / 50; // 0.5x to 2x sensitivity
  };

  // Add eye-selectable attributes to interactive elements
  useEffect(() => {
    const addEyeSelectableAttributes = () => {
      const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
      interactiveElements.forEach(element => {
        element.setAttribute('data-eye-selectable', 'true');
      });
    };
    
    addEyeSelectableAttributes();
    
    // Re-run when navigation happens
    const observer = new MutationObserver(addEyeSelectableAttributes);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]" onClick={onClose}>
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
              onClick={onClose}
              className="p-2 rounded-full transition-colors text-white hover:bg-white hover:bg-opacity-20"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center space-x-2">
            <AlertCircle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>{success}</span>
          </div>
        )}

      {/* Calibration Screen */}
      {isCalibrating && (
        <div className="mb-6">
          <div className="text-center mb-4">
            <h4 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Calibration Step {calibrationStep + 1} of {calibrationPoints.length}
            </h4>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Look at the target and click to continue
            </p>
          </div>
          
          <div className="relative h-64 bg-white rounded-lg overflow-hidden border border-gray-200">
            {calibrationPoints.map((point, index) => (
              <button
                key={index}
                onClick={handleCalibrationPointClick}
                className={`absolute w-8 h-8 rounded-full transform -translate-x-4 -translate-y-4 transition-all ${
                  index === calibrationStep
                    ? 'bg-blue-500 animate-pulse'
                    : index < calibrationStep
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                }}
                aria-label={`Calibration point ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Settings */}
      <div className="space-y-4 mb-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Sensitivity: {sensitivity}%
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={sensitivity}
            onChange={(e) => setSensitivity(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Dwell Time: {dwellDuration}ms
          </label>
          <input
            type="range"
            min="500"
            max="3000"
            step="100"
            value={dwellDuration}
            onChange={(e) => setDwellDuration(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="showCursor"
            checked={showCursor}
            onChange={(e) => setShowCursor(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="showCursor" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Show Gaze Cursor
          </label>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleEyeTracking}
          disabled={!isSupported}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            !isSupported
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isEnabled
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {isEnabled ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          <span>{isEnabled ? 'Disable' : 'Enable'} Eye Tracking</span>
        </button>
        
        {!isCalibrated && isSupported && (
          <button
            onClick={startCalibration}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span>Calibrate</span>
          </button>
        )}
      </div>

      {/* Instructions */}
      <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          How to Use:
        </h4>
        <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <li>1. Click "Calibrate" to set up eye tracking</li>
          <li>2. Follow the calibration points on screen</li>
          <li>3. Look at any button or link for {dwellDuration/1000} seconds to select it</li>
          <li>4. Adjust sensitivity and dwell time as needed</li>
        </ul>
      </div>

      {/* Gaze Cursor */}
      {showCursor && (
        <div
          ref={gazeRef}
          className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-50 transition-all duration-100"
          style={{
            left: '50%',
            top: '45%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-2 bg-blue-500 rounded-full opacity-50 animate-pulse" />
        </div>
      )}

      {/* Hidden video for eye tracking */}
      <video
        ref={videoRef}
        className="hidden"
        autoPlay
        playsInline
      />
      
      <canvas
        ref={canvasRef}
        className="hidden"
      />
    </div>
      </div>
    </div>
  );
};

export default EyeTrackingNavigation;
