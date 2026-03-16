const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// @desc    Get accessibility features usage
// @route   GET /api/accessibility/features
// @access  Private/Admin
router.get('/features', asyncHandler(async (req, res) => {
  const features = [
    { feature: 'Text-to-Speech', usage: 456, icon: 'Volume2', color: '#16808D' },
    { feature: 'Screen Reader', usage: 234, icon: 'Eye', color: '#22C55E' },
    { feature: 'Keyboard Navigation', usage: 789, icon: 'Keyboard', color: '#1B9AAA' },
    { feature: 'High Contrast', usage: 345, icon: 'Settings', color: '#142C52' },
    { feature: 'Large Text', usage: 567, icon: 'FileText', color: '#059669' }
  ];

  res.json({
    success: true,
    data: features
  });
}));

// @desc    Get accessibility compliance
// @route   GET /api/accessibility/compliance
// @access  Private/Admin
router.get('/compliance', asyncHandler(async (req, res) => {
  const compliance = {
    wcag: {
      level: 'AA',
      compliance: 100,
      lastAudit: new Date().toISOString()
    },
    features: [
      { name: 'WCAG 2.1 Compliance', compliance: 100, status: 'excellent' },
      { name: 'Screen Reader Compatibility', compliance: 100, status: 'excellent' },
      { name: 'Keyboard Navigation', compliance: 100, status: 'excellent' },
      { name: 'Color Contrast', compliance: 98, status: 'good' },
      { name: 'Alternative Text', compliance: 95, status: 'good' }
    ]
  };

  res.json({
    success: true,
    data: compliance
  });
}));

module.exports = router;
