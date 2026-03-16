const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// Mock conditions data
const conditionsData = [
  {
    id: 'learning_disabilities',
    title: 'Learning Disabilities',
    description: 'Learning disabilities affect reading, writing, math, and information processing.',
    icon: 'BookOpen',
    color: '#16808D',
    link: '/conditions/learning-disabilities',
    features: [
      'AI-Driven Adaptive Content',
      'Interactive Cognitive Exercises',
      'Real-Time Progress Analytics',
      'Multi-Sensory Learning'
    ],
    symptoms: [
      'Difficulty with reading and writing',
      'Problems with math concepts',
      'Poor organizational skills',
      'Trouble following instructions'
    ],
    support: [
      'Specialized educational programs',
      'Assistive technology tools',
      'Individualized education plans',
      'Therapeutic interventions'
    ]
  },
  {
    id: 'adhd',
    title: 'ADHD',
    description: 'ADHD is a neurodevelopmental disorder affecting focus, hyperactivity, and impulse control.',
    icon: 'Target',
    color: '#22C55E',
    link: '/conditions/adhd',
    features: [
      'Focus Enhancement Tools',
      'Activity Tracking',
      'Medication Reminders',
      'Behavioral Therapy Support'
    ],
    symptoms: [
      'Difficulty sustaining attention',
      'Excessive talking or movement',
      'Impulsive decision making',
      'Trouble with organization'
    ],
    support: [
      'Behavioral therapy',
      'Medication management',
      'Lifestyle modifications',
      'Educational accommodations'
    ]
  },
  {
    id: 'autism',
    title: 'Autism Spectrum',
    description: 'Autism Spectrum Disorder affects social communication, behavior, and sensory processing.',
    icon: 'Users',
    color: '#1B9AAA',
    link: '/conditions/autism',
    features: [
      'Social Skills Training',
      'Communication Support',
      'Sensory Integration Tools',
      'Routine Management'
    ],
    symptoms: [
      'Difficulty with social interaction',
      'Repetitive behaviors',
      'Sensory sensitivities',
      'Communication challenges'
    ],
    support: [
      'Applied Behavior Analysis',
      'Speech therapy',
      'Occupational therapy',
      'Social skills groups'
    ]
  },
  {
    id: 'memory_disorders',
    title: 'Memory Disorders',
    description: 'Memory disorders impair recall and cognitive function, including Alzheimer\'s and dementia.',
    icon: 'Brain',
    color: '#142C52',
    link: '/conditions/memory-disorders',
    features: [
      'Memory Training Exercises',
      'Cognitive Recall Games',
      'Personalized Memory Plans',
      'Progress Tracking'
    ],
    symptoms: [
      'Memory loss that disrupts daily life',
      'Difficulty planning or solving problems',
      'Trouble completing familiar tasks',
      'Confusion with time or place'
    ],
    support: [
      'Cognitive rehabilitation',
      'Memory aids and tools',
      'Medication management',
      'Caregiver support programs'
    ]
  }
];

// @desc    Get all conditions
// @route   GET /api/conditions
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
  res.json({
    success: true,
    count: conditionsData.length,
    data: conditionsData
  });
}));

// @desc    Get condition by ID
// @route   GET /api/conditions/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
  const condition = conditionsData.find(c => c.id === req.params.id);
  
  if (!condition) {
    return res.status(404).json({
      success: false,
      message: 'Condition not found'
    });
  }

  res.json({
    success: true,
    data: condition
  });
}));

// @desc    Search conditions
// @route   GET /api/conditions/search/:query
// @access  Public
router.get('/search/:query', asyncHandler(async (req, res) => {
  const { query } = req.params;
  const results = conditionsData.filter(condition => 
    condition.title.toLowerCase().includes(query.toLowerCase()) ||
    condition.description.toLowerCase().includes(query.toLowerCase())
  );

  res.json({
    success: true,
    count: results.length,
    data: results
  });
}));

module.exports = router;
