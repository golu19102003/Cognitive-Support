const express = require('express');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// @desc    Send contact message
// @route   POST /api/contact
// @access  Public
router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('phone').optional().isMobilePhone('any').withMessage('Please provide a valid phone number'),
  body('company').optional().isString().withMessage('Company must be a string'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required')
], asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }

  const { name, email, phone, company, subject, message } = req.body;

  // Log the contact message (in production, this would be stored in database and/or sent via email)
  console.log('Contact Message Received:', {
    name,
    email,
    phone,
    company,
    subject,
    message,
    timestamp: new Date().toISOString()
  });

  // Mock response (in production, you would send an email and save to database)
  res.status(200).json({
    success: true,
    message: '✅ Your message has been sent successfully! We will get back to you within 24 hours.',
    data: {
      id: Date.now().toString(),
      name,
      email,
      subject,
      status: 'received',
      timestamp: new Date().toISOString()
    }
  });
}));

// @desc    Get contact messages (admin only)
// @route   GET /api/contact/messages
// @access  Private/Admin
router.get('/messages', asyncHandler(async (req, res) => {
  // Mock messages data
  const messages = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      company: 'Tech Corp',
      subject: 'Learning Disability Support',
      message: 'I need help finding resources for my child who has learning disabilities.',
      status: 'pending',
      timestamp: new Date(Date.now() - 86400000).toISOString()
    },
    {
      id: '2',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      phone: '+0987654321',
      company: 'Health Inc',
      subject: 'ADHD Management',
      message: 'Looking for information about ADHD management strategies.',
      status: 'responded',
      timestamp: new Date(Date.now() - 172800000).toISOString()
    }
  ];

  res.json({
    success: true,
    count: messages.length,
    data: messages
  });
}));

module.exports = router;
