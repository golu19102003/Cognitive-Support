import React, { useState, useEffect, useRef } from 'react';
import { Brain, Target, Timer, Award, Zap, Pause, Play, RotateCcw, Volume2, X } from 'lucide-react';

const FocusMode = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes default
  const [sessionType, setSessionType] = useState('pomodoro'); // pomodoro, short_break, long_break
  const [streak, setStreak] = useState(0);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState([]);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const intervalRef = useRef(null);

  const sessionTypes = {
    pomodoro: { duration: 25 * 60, name: 'Focus Session', color: 'blue' },
    short_break: { duration: 5 * 60, name: 'Short Break', color: 'green' },
    long_break: { duration: 15 * 60, name: 'Long Break', color: 'purple' }
  };

  const achievementsList = [
    { id: 1, name: 'First Focus', description: 'Complete your first focus session', icon: '🎯', points: 10 },
    { id: 2, name: 'Focus Streak', description: 'Complete 3 sessions in a row', icon: '🔥', points: 25 },
    { id: 3, name: 'Time Master', description: 'Complete a 25-minute session', icon: '⏰', points: 15 },
    { id: 4, name: 'Consistency King', description: 'Use focus mode for 7 days', icon: '👑', points: 50 },
    { id: 5, name: 'Break Master', description: 'Take 5 breaks', icon: '☕', points: 20 }
  ];

  useEffect(() => {
    // Load saved data
    const savedStreak = localStorage.getItem('focusStreak');
    const savedPoints = localStorage.getItem('focusPoints');
    const savedLevel = localStorage.getItem('focusLevel');
    const savedAchievements = localStorage.getItem('focusAchievements');
    
    if (savedStreak) setStreak(parseInt(savedStreak));
    if (savedPoints) setPoints(parseInt(savedPoints));
    if (savedLevel) setLevel(parseInt(savedLevel));
    if (savedAchievements) setAchievements(JSON.parse(savedAchievements));
  }, []);

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
    
    // Show reward
    setCurrentReward({
      points: totalPoints,
      streak: streak + 1,
      sessionType: sessionTypes[sessionType].name
    });
    setShowReward(true);
    
    // Save data
    localStorage.setItem('focusStreak', streak + 1);
    localStorage.setItem('focusPoints', points + totalPoints);
    
    // Play completion sound
    playCompletionSound();
    
    // Auto-hide reward after 3 seconds
    setTimeout(() => setShowReward(false), 3000);
  };

  const checkAchievements = () => {
    const newAchievements = [];
    
    // Check First Focus
    if (streak === 0 && !achievements.find(a => a.id === 1)) {
      newAchievements.push(achievementsList[0]);
    }
    
    // Check Focus Streak
    if (streak === 2 && !achievements.find(a => a.id === 2)) {
      newAchievements.push(achievementsList[1]);
    }
    
    // Check Time Master
    if (sessionType === 'pomodoro' && !achievements.find(a => a.id === 3)) {
      newAchievements.push(achievementsList[2]);
    }
    
    if (newAchievements.length > 0) {
      setAchievements(prev => [...prev, ...newAchievements]);
      localStorage.setItem('focusAchievements', JSON.stringify([...achievements, ...newAchievements]));
    }
  };

  const playCompletionSound = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Great job! Focus session completed!');
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const startSession = (type) => {
    setSessionType(type);
    setTimeLeft(sessionTypes[type].duration);
    setIsActive(true);
    setIsPaused(false);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const resetSession = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(sessionTypes[sessionType].duration);
    setStreak(0);
    localStorage.setItem('focusStreak', 0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateLevel = (totalPoints) => {
    return Math.floor(totalPoints / 100) + 1;
  };

  const getProgressToNextLevel = () => {
    const currentLevelPoints = (level - 1) * 100;
    const nextLevelPoints = level * 100;
    const progress = ((points - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100;
    return Math.min(progress, 100);
  };

  return (
    <>
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
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Focus Mode</h2>
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

        <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Focus Mode
        </h3>
        <div className="flex items-center space-x-2">
          <Brain className={`h-6 w-6 text-[#142C52]`} />
          <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Level {level}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Level Progress</span>
          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{points} XP</span>
        </div>
        <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <div 
            className="h-2 rounded-full bg-gradient-to-r from-[#142C52] to-[#16808D] transition-all duration-300"
            style={{ width: `${getProgressToNextLevel()}%` }}
          />
        </div>
      </div>

      {/* Timer Display */}
      <div className="text-center mb-6">
        <div className={`text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {formatTime(timeLeft)}
        </div>
        <div className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {sessionTypes[sessionType].name}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {!isActive ? (
          <button
            onClick={() => startSession(sessionType)}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#142C52] to-[#16808D] text-white rounded-lg hover:from-[#16808D] hover:to-[#142C52] transition-all"
          >
            <Play className="h-5 w-5" />
            <span>Start</span>
          </button>
        ) : (
          <>
            <button
              onClick={togglePause}
              className="flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
            <button
              onClick={resetSession}
              className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Reset</span>
            </button>
          </>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Current Streak
            </span>
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {streak}
          </div>
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center space-x-2 mb-2">
            <Award className="h-5 w-5 text-[#142C52]" />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Total Points
            </span>
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {points}
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      {achievements.length > 0 && (
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h4 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Recent Achievements
          </h4>
          <div className="space-y-2">
            {achievements.slice(-3).map(achievement => (
              <div key={achievement.id} className="flex items-center space-x-3">
                <span className="text-2xl">{achievement.icon}</span>
                <div className="flex-1">
                  <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {achievement.name}
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {achievement.description}
                  </div>
                </div>
                <span className={`text-sm font-medium text-green-500`}>
                  +{achievement.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reward Animation */}
      {showReward && currentReward && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-green-500 text-white p-6 rounded-xl shadow-2xl animate-bounce">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-2" />
              <h3 className="text-xl font-bold mb-2">Session Complete!</h3>
              <p className="mb-2">+{currentReward.points} points earned</p>
              <p className="text-sm">Streak: {currentReward.streak} 🔥</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
</>
  );
};

export default FocusMode;
