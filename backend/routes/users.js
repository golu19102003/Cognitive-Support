const express = require('express');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
router.get('/', asyncHandler(async (req, res) => {
  // Mock data for demonstration
  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
      profile: { company: 'Tech Corp' },
      cognitiveProfile: {
        conditions: ['learning_disabilities'],
        severity: 'moderate'
      },
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      role: 'user',
      profile: { company: 'Health Inc' },
      cognitiveProfile: {
        conditions: ['adhd'],
        severity: 'mild'
      },
      createdAt: new Date().toISOString()
    }
  ];

  res.json({
    success: true,
    count: users.length,
    data: users
  });
}));

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private
router.get('/:id', asyncHandler(async (req, res) => {
  // Mock user data
  const user = {
    id: req.params.id,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    profile: {
      age: 25,
      gender: 'male',
      phone: '+1234567890',
      company: 'Tech Corp'
    },
    cognitiveProfile: {
      conditions: ['learning_disabilities'],
      severity: 'moderate',
      assessmentDate: new Date().toISOString()
    },
    accessibility: {
      preferences: {
        fontSize: 'medium',
        highContrast: false,
        screenReader: false,
        keyboardNavigation: true,
        textToSpeech: true
      }
    },
    subscription: 'basic',
    lastLogin: new Date().toISOString()
  };

  res.json({
    success: true,
    data: user
  });
}));

// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private
router.put('/:id', asyncHandler(async (req, res) => {
  const updatedUser = {
    id: req.params.id,
    ...req.body,
    updatedAt: new Date().toISOString()
  };

  res.json({
    success: true,
    message: 'User profile updated successfully',
    data: updatedUser
  });
}));

module.exports = router;
