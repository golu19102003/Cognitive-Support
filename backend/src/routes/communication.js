const express = require('express');
const communicationRoutes = express.Router();

let communityAnnouncements = [
  {
    id: 1,
    title: 'Water Supply Maintenance',
    content: 'Water supply will be temporarily interrupted tomorrow from 10 AM to 2 PM for maintenance work.',
    type: 'Notice',
    date: '2024-01-07T00:00:00Z',
    priority: 'High',
    author: 'Management Office',
    status: 'Active',
    views: 245,
    createdAt: '2024-01-07T08:00:00Z'
  },
  {
    id: 2,
    title: 'Society Meeting Schedule',
    content: 'Monthly society meeting will be held on January 15th at 6 PM in the community hall.',
    type: 'Meeting',
    date: '2024-01-06T00:00:00Z',
    priority: 'Medium',
    author: 'Secretary Office',
    status: 'Active',
    views: 189,
    createdAt: '2024-01-06T09:00:00Z'
  },
  {
    id: 3,
    title: 'Festival Celebration',
    content: 'Join us for the annual society festival celebration on January 20th at 7 PM.',
    type: 'Event',
    date: '2024-01-05T00:00:00Z',
    priority: 'Low',
    author: 'Cultural Committee',
    status: 'Active',
    views: 312,
    createdAt: '2024-01-05T10:00:00Z'
  }
];

let discussionForums = [
  {
    id: 1,
    title: 'Parking Issues in Block A',
    content: 'Residents are facing parking issues in Block A. Please share your experiences and suggestions.',
    author: 'John Doe',
    authorRole: 'Resident',
    category: 'General',
    replies: 12,
    views: 156,
    lastActivity: '2024-01-15T14:30:00Z',
    createdAt: '2024-01-14T09:15:00Z',
    status: 'Active',
    tags: ['parking', 'block-a', 'issues']
  },
  {
    id: 2,
    title: 'Suggestion for Garden Improvement',
    content: 'I think we should improve the community garden with better lighting and seating arrangements.',
    author: 'Jane Smith',
    authorRole: 'Resident',
    category: 'Suggestions',
    replies: 8,
    views: 98,
    lastActivity: '2024-01-15T11:45:00Z',
    createdAt: '2024-01-13T16:20:00Z',
    status: 'Active',
    tags: ['garden', 'improvement', 'suggestion']
  },
  {
    id: 3,
    title: 'Security Camera Installation',
    content: 'Discussion about installing additional security cameras in common areas.',
    author: 'Mike Wilson',
    authorRole: 'Security',
    category: 'Security',
    replies: 15,
    views: 234,
    lastActivity: '2024-01-14T18:20:00Z',
    createdAt: '2024-01-12T10:30:00Z',
    status: 'Active',
    tags: ['security', 'cameras', 'safety']
  }
];

let notificationQueue = [];

communicationRoutes.get('/announcements', (req, res) => {
  try {
    const { type, priority, page = 1, limit = 10 } = req.query;
    
    let filteredAnnouncements = communityAnnouncements;
    
    if (type && type !== 'all') {
      filteredAnnouncements = filteredAnnouncements.filter(ann => ann.type.toLowerCase() === type.toLowerCase());
    }
    
    if (priority && priority !== 'all') {
      filteredAnnouncements = filteredAnnouncements.filter(ann => ann.priority.toLowerCase() === priority.toLowerCase());
    }
    
    const startIndex = (page - 1) * limit;
    const paginatedAnnouncements = filteredAnnouncements.slice(startIndex, startIndex + parseInt(limit));
    
    res.json({
      success: true,
      data: {
        announcements: paginatedAnnouncements,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(filteredAnnouncements.length / limit),
          totalAnnouncements: filteredAnnouncements.length,
          hasNext: startIndex + limit < filteredAnnouncements.length,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Error fetching announcements:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve announcements'
    });
  }
});

communicationRoutes.post('/announcements', (req, res) => {
  try {
    const { title, content, type, priority, targetAudience } = req.body;
    
    const validationErrors = {};
    
    if (!title || !title.trim()) {
      validationErrors.title = 'Announcement title is required';
    }
    
    if (!content || !content.trim()) {
      validationErrors.content = 'Announcement content is required';
    }
    
    if (!type) {
      validationErrors.type = 'Announcement type must be specified';
    }
    
    if (!priority) {
      validationErrors.priority = 'Priority level must be specified';
    }
    
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }
    
    const newAnnouncement = {
      id: Math.max(...communityAnnouncements.map(a => a.id)) + 1,
      title: title.trim(),
      content: content.trim(),
      type: type,
      priority: priority,
      targetAudience: targetAudience || 'all',
      author: req.headers['x-user-name'] || 'System Administrator',
      status: 'Active',
      views: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    communityAnnouncements.unshift(newAnnouncement);
    
    res.status(201).json({
      success: true,
      message: 'Announcement published successfully',
      data: newAnnouncement
    });
  } catch (error) {
    console.error('Error creating announcement:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create announcement'
    });
  }
});

communicationRoutes.get('/discussions', (req, res) => {
  try {
    const { category, author, page = 1, limit = 10 } = req.query;
    
    let filteredDiscussions = discussionForums;
    
    if (category && category !== 'all') {
      filteredDiscussions = filteredDiscussions.filter(disc => 
        disc.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (author) {
      filteredDiscussions = filteredDiscussions.filter(disc => 
        disc.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    
    const startIndex = (page - 1) * limit;
    const paginatedDiscussions = filteredDiscussions.slice(startIndex, startIndex + parseInt(limit));
    
    res.json({
      success: true,
      data: {
        discussions: paginatedDiscussions,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(filteredDiscussions.length / limit),
          totalDiscussions: filteredDiscussions.length,
          hasNext: startIndex + limit < filteredDiscussions.length,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Error fetching discussions:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve discussions'
    });
  }
});

communicationRoutes.post('/discussions', (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    
    const validationErrors = {};
    
    if (!title || !title.trim()) {
      validationErrors.title = 'Discussion title is required';
    }
    
    if (!content || !content.trim()) {
      validationErrors.content = 'Discussion content is required';
    }
    
    if (!category) {
      validationErrors.category = 'Category must be specified';
    }
    
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }
    
    const newDiscussion = {
      id: Math.max(...discussionForums.map(d => d.id)) + 1,
      title: title.trim(),
      content: content.trim(),
      category: category,
      tags: tags || [],
      author: req.headers['x-user-name'] || 'Anonymous User',
      authorRole: req.headers['x-user-role'] || 'Resident',
      replies: 0,
      views: 0,
      lastActivity: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      status: 'Active'
    };
    
    discussionForums.unshift(newDiscussion);
    
    res.status(201).json({
      success: true,
      message: 'Discussion started successfully',
      data: newDiscussion
    });
  } catch (error) {
    console.error('Error creating discussion:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create discussion'
    });
  }
});

communicationRoutes.post('/discussions/:id/reply', (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    
    if (!content || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Reply content is required'
      });
    }
    
    const discussionIndex = discussionForums.findIndex(disc => disc.id === parseInt(id));
    
    if (discussionIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Discussion not found'
      });
    }
    
    const newReply = {
      id: Date.now(),
      content: content.trim(),
      author: req.headers['x-user-name'] || 'Anonymous User',
      authorRole: req.headers['x-user-role'] || 'Resident',
      createdAt: new Date().toISOString(),
      likes: 0
    };
    
    if (!discussionForums[discussionIndex].replies) {
      discussionForums[discussionIndex].replies = [];
    }
    
    discussionForums[discussionIndex].replies.push(newReply);
    discussionForums[discussionIndex].lastActivity = new Date().toISOString();
    
    res.status(201).json({
      success: true,
      message: 'Reply posted successfully',
      data: newReply
    });
  } catch (error) {
    console.error('Error posting reply:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to post reply'
    });
  }
});

communicationRoutes.post('/notifications/broadcast', (req, res) => {
  try {
    const { message, recipients, priority, channels } = req.body;
    
    const validationErrors = {};
    
    if (!message || !message.trim()) {
      validationErrors.message = 'Notification message is required';
    }
    
    if (!recipients || recipients.length === 0) {
      validationErrors.recipients = 'At least one recipient must be specified';
    }
    
    if (!priority) {
      validationErrors.priority = 'Priority level must be specified';
    }
    
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }
    
    const notification = {
      id: Date.now(),
      message: message.trim(),
      recipients: recipients,
      priority: priority,
      channels: channels || ['app', 'email', 'sms'],
      status: 'Pending',
      createdAt: new Date().toISOString(),
      createdBy: req.headers['x-user-id'] || 'system'
    };
    
    notificationQueue.push(notification);
    
    setTimeout(() => {
      notification.status = 'Sent';
      notification.sentAt = new Date().toISOString();
    }, 2000);
    
    res.status(201).json({
      success: true,
      message: 'Notification broadcast initiated successfully',
      data: notification
    });
  } catch (error) {
    console.error('Error broadcasting notification:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to broadcast notification'
    });
  }
});

module.exports = communicationRoutes;
