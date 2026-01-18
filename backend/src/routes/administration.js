const express = require('express');
const adminRoutes = express.Router();

let systemUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Resident',
    unit: 'A-101',
    status: 'Active',
    phone: '9876543210',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-01-15T09:30:00Z'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Management',
    unit: 'Admin',
    status: 'Active',
    phone: '9876543211',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-01-15T08:45:00Z'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike@example.com',
    role: 'Staff',
    unit: 'Security',
    status: 'Active',
    phone: '9876543212',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-01-14T22:15:00Z'
  }
];

const systemMetrics = {
  totalUsers: 156,
  activeUnits: 120,
  systemUptime: '99.9%',
  reportsGenerated: 45,
  lastUpdated: new Date().toISOString()
};

adminRoutes.get('/dashboard', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        metrics: systemMetrics,
        recentActivity: systemUsers.slice(0, 5),
        systemHealth: {
          database: 'operational',
          api: 'operational',
          authentication: 'operational',
          storage: 'operational'
        }
      }
    });
  } catch (error) {
    console.error('Error fetching admin dashboard:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to load dashboard data'
    });
  }
});

adminRoutes.get('/users', (req, res) => {
  try {
    const { search, role, status, page = 1, limit = 10 } = req.query;
    
    let filteredUsers = systemUsers;
    
    if (search) {
      filteredUsers = filteredUsers.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (role && role !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.role === role);
    }
    
    if (status && status !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.status === status);
    }
    
    const startIndex = (page - 1) * limit;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + parseInt(limit));
    
    res.json({
      success: true,
      data: {
        users: paginatedUsers,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(filteredUsers.length / limit),
          totalUsers: filteredUsers.length,
          hasNext: startIndex + limit < filteredUsers.length,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve user list'
    });
  }
});

adminRoutes.post('/users', (req, res) => {
  try {
    const { name, email, password, role, unit, phone } = req.body;
    
    const validationErrors = {};
    
    if (!name || !name.trim()) {
      validationErrors.name = 'Name is required';
    }
    
    if (!email || !email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }
    
    if (!password || password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }
    
    if (!role) {
      validationErrors.role = 'Role must be specified';
    }
    
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }
    
    if (systemUsers.some(user => user.email === email)) {
      return res.status(409).json({
        success: false,
        message: 'Email address already exists in the system'
      });
    }
    
    const newUser = {
      id: Math.max(...systemUsers.map(u => u.id)) + 1,
      name: name.trim(),
      email: email.trim(),
      role: role,
      unit: unit || 'N/A',
      phone: phone || 'N/A',
      status: 'Active',
      createdAt: new Date().toISOString(),
      lastLogin: null,
      createdBy: req.headers['x-user-id'] || 'system'
    };
    
    systemUsers.push(newUser);
    
    res.status(201).json({
      success: true,
      message: 'User account created successfully',
      data: newUser
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      success: false,
      message: 'User creation failed due to server error'
    });
  }
});

adminRoutes.put('/users/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role, unit, phone, status } = req.body;
    
    const userIndex = systemUsers.findIndex(user => user.id === parseInt(id));
    
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'User not found in the system'
      });
    }
    
    if (email && email !== systemUsers[userIndex].email) {
      if (systemUsers.some(user => user.email === email && user.id !== parseInt(id))) {
        return res.status(409).json({
          success: false,
          message: 'Email address is already assigned to another user'
        });
      }
    }
    
    const updatedUser = {
      ...systemUsers[userIndex],
      name: name || systemUsers[userIndex].name,
      email: email || systemUsers[userIndex].email,
      role: role || systemUsers[userIndex].role,
      unit: unit || systemUsers[userIndex].unit,
      phone: phone || systemUsers[userIndex].phone,
      status: status || systemUsers[userIndex].status,
      updatedAt: new Date().toISOString(),
      updatedBy: req.headers['x-user-id'] || 'system'
    };
    
    systemUsers[userIndex] = updatedUser;
    
    res.json({
      success: true,
      message: 'User information updated successfully',
      data: updatedUser
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      success: false,
      message: 'User update failed due to server error'
    });
  }
});

adminRoutes.delete('/users/:id', (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = systemUsers.findIndex(user => user.id === parseInt(id));
    
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'User not found in the system'
      });
    }
    
    const deletedUser = systemUsers[userIndex];
    systemUsers.splice(userIndex, 1);
    
    res.json({
      success: true,
      message: 'User account removed successfully',
      data: deletedUser
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      success: false,
      message: 'User deletion failed due to server error'
    });
  }
});

adminRoutes.get('/reports', (req, res) => {
  try {
    const { type, startDate, endDate } = req.query;
    
    const reports = {
      userActivity: {
        totalLogins: 1245,
        activeUsers: 89,
        newRegistrations: 12,
        period: 'Last 30 days'
      },
      systemUsage: {
        apiCalls: 15420,
        dataTransferred: '2.3 GB',
        averageResponseTime: '120ms',
        period: 'Last 30 days'
      },
      security: {
        failedLogins: 23,
        blockedAttempts: 156,
        securityAlerts: 3,
        period: 'Last 30 days'
      }
    };
    
    res.json({
      success: true,
      data: reports,
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error generating reports:', error);
    res.status(500).json({
      success: false,
      message: 'Report generation failed'
    });
  }
});

module.exports = adminRoutes;
