const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// Mock resources data
const resourcesData = [
  {
    id: '1',
    title: 'Understanding Learning Disabilities',
    type: 'article',
    category: 'learning_disabilities',
    description: 'Comprehensive guide to understanding and supporting learning disabilities',
    url: 'https://example.com/learning-disabilities-guide',
    downloadUrl: 'https://example.com/learning-disabilities-guide.pdf',
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'ADHD Management Strategies',
    type: 'video',
    category: 'adhd',
    description: 'Expert tips for managing ADHD in daily life',
    url: 'https://example.com/adhd-strategies-video',
    duration: '15:30',
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Autism Support Resources',
    type: 'tool',
    category: 'autism',
    description: 'Interactive tools for autism spectrum support',
    url: 'https://example.com/autism-tools',
    featured: false,
    createdAt: new Date().toISOString()
  }
];

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
  const { category, type, featured } = req.query;
  
  let filteredResources = resourcesData;
  
  if (category) {
    filteredResources = filteredResources.filter(r => r.category === category);
  }
  
  if (type) {
    filteredResources = filteredResources.filter(r => r.type === type);
  }
  
  if (featured === 'true') {
    filteredResources = filteredResources.filter(r => r.featured);
  }

  res.json({
    success: true,
    count: filteredResources.length,
    data: filteredResources
  });
}));

// @desc    Get resource by ID
// @route   GET /api/resources/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
  const resource = resourcesData.find(r => r.id === req.params.id);
  
  if (!resource) {
    return res.status(404).json({
      success: false,
      message: 'Resource not found'
    });
  }

  res.json({
    success: true,
    data: resource
  });
}));

module.exports = router;
