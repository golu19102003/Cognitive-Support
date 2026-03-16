const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// @desc    Get platform analytics
// @route   GET /api/analytics/overview
// @access  Private/Admin
router.get('/overview', asyncHandler(async (req, res) => {
  // Mock analytics data
  const analytics = {
    users: {
      total: 1247,
      active: 892,
      new: 156,
      growth: 12.5
    },
    engagement: {
      dailySessions: 456,
      averageSessionDuration: 24.5,
      pageViews: 8923,
      bounceRate: 32.1
    },
    chatbot: {
      totalQueries: 3247,
      averageResponseTime: 1.2,
      satisfaction: 94.5,
      topCategories: [
        { category: 'learning_disabilities', count: 234 },
        { category: 'adhd', count: 189 },
        { category: 'autism', count: 156 }
      ]
    },
    accessibility: {
      featuresUsed: {
        textToSpeech: 456,
        screenReader: 234,
        keyboardNavigation: 789,
        highContrast: 345,
        largeText: 567
      },
      complianceRate: 100
    },
    performance: {
      uptime: 99.9,
      responseTime: 1.2,
      errorRate: 0.1,
      loadTime: 2.3
    }
  };

  res.json({
    success: true,
    data: analytics,
    lastUpdated: new Date().toISOString()
  });
}));

// @desc    Get user demographics
// @route   GET /api/analytics/demographics
// @access  Private/Admin
router.get('/demographics', asyncHandler(async (req, res) => {
  const demographics = [
    { category: 'Learning Disabilities', count: 234, percentage: 18.8, color: '#16808D' },
    { category: 'ADHD', count: 189, percentage: 15.2, color: '#22C55E' },
    { category: 'Autism Spectrum', count: 156, percentage: 12.5, color: '#1B9AAA' },
    { category: 'Memory Disorders', count: 123, percentage: 9.9, color: '#142C52' },
    { category: 'Visual Impairments', count: 98, percentage: 7.9, color: '#059669' },
    { category: 'Other', count: 447, percentage: 35.7, color: '#6B46C1' }
  ];

  res.json({
    success: true,
    data: demographics
  });
}));

module.exports = router;
