const express = require('express');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// Mock AI responses for cognitive support
const cognitiveResponses = {
  'learning disabilities': [
    "Learning disabilities affect how people process information. Common types include dyslexia (reading), dysgraphia (writing), and dyscalculia (math).",
    "People with learning disabilities often have average or above-average intelligence but struggle with specific academic skills.",
    "Strategies for learning disabilities include: breaking tasks into smaller steps, using visual aids, allowing extra time, and using assistive technology."
  ],
  'adhd': [
    "ADHD (Attention-Deficit/Hyperactivity Disorder) affects focus, hyperactivity, and impulse control. It's a neurodevelopmental condition.",
    "Common ADHD symptoms include difficulty sustaining attention, excessive talking, fidgeting, and acting without thinking.",
    "Management strategies include: structured routines, breaking tasks into chunks, regular physical activity, and sometimes medication."
  ],
  'autism': [
    "Autism Spectrum Disorder affects social communication, behavior, and sensory processing. It's a spectrum condition.",
    "Common autism traits include difficulty with social cues, repetitive behaviors, and sensory sensitivities.",
    "Support strategies include: clear communication, predictable routines, sensory accommodations, and social skills training."
  ],
  'memory disorders': [
    "Memory disorders affect the ability to store, retain, and recall information. Common causes include aging, injury, and disease.",
    "Types include short-term memory loss, long-term memory loss, and working memory difficulties.",
    "Management strategies include: memory aids, routines, cognitive exercises, and sometimes medication."
  ],
  'default': [
    "I'm here to help you understand cognitive conditions and find appropriate support resources.",
    "Cognitive disabilities affect how people think, learn, and process information. Each person's experience is unique.",
    "Support is available through therapy, assistive technology, educational accommodations, and community resources."
  ]
};

// @desc    Get chatbot response
// @route   POST /api/chatbot/message
// @access  Public
router.post('/message', [
  body('message').notEmpty().withMessage('Message is required'),
  body('userId').optional().isMongoId().withMessage('Invalid user ID')
], asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }

  const { message, userId } = req.body;
  const lowerMessage = message.toLowerCase();

  // Find relevant response based on keywords
  let response = cognitiveResponses.default[0];
  let category = 'general';

  Object.keys(cognitiveResponses).forEach(key => {
    if (key !== 'default' && lowerMessage.includes(key)) {
      response = cognitiveResponses[key][Math.floor(Math.random() * cognitiveResponses[key].length)];
      category = key;
    }
  });

  // Log the interaction (in production, this would be stored in database)
  console.log(`Chatbot interaction - User: ${userId || 'anonymous'}, Message: ${message}, Category: ${category}`);

  res.json({
    success: true,
    response: response,
    category: category,
    timestamp: new Date().toISOString(),
    suggestions: [
      "Tell me more about your specific concerns",
      "What kind of support are you looking for?",
      "Would you like information about resources?",
      "Do you need help with accessibility features?"
    ]
  });
}));

// @desc    Get chat history
// @route   GET /api/chatbot/history/:userId
// @access  Private
router.get('/history/:userId', asyncHandler(async (req, res) => {
  const { userId } = req.params;

  // Mock chat history (in production, this would come from database)
  const mockHistory = [
    {
      id: 1,
      message: "What are learning disabilities?",
      response: "Learning disabilities affect how people process information...",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      category: 'learning disabilities'
    },
    {
      id: 2,
      message: "How can I help someone with ADHD?",
      response: "ADHD affects focus, hyperactivity, and impulse control...",
      timestamp: new Date(Date.now() - 1800000).toISOString(),
      category: 'adhd'
    }
  ];

  res.json({
    success: true,
    history: mockHistory,
    total: mockHistory.length
  });
}));

// @desc    Get chatbot stats
// @route   GET /api/chatbot/stats
// @access  Private
router.get('/stats', asyncHandler(async (req, res) => {
  // Mock stats (in production, this would come from database analytics)
  const stats = {
    totalConversations: 1247,
    averageResponseTime: 1.2,
    topCategories: [
      { category: 'learning disabilities', count: 234 },
      { category: 'adhd', count: 189 },
      { category: 'autism', count: 156 },
      { category: 'memory disorders', count: 123 }
    ],
    userSatisfaction: 94.5,
    dailyActiveUsers: 89
  };

  res.json({
    success: true,
    stats
  });
}));

module.exports = router;
