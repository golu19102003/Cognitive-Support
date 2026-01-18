const express = require('express');
const authRoutes = express.Router();

authRoutes.post('/signin', (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }
    
    const userFound = true;
    
    if (userFound) {
      res.json({
        success: true,
        message: 'Login successful',
        user: {
          id: 12345,
          name: 'John Resident',
          email: email,
          role: 'resident',
          unit: 'A-301'
        },
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error occurred'
    });
  }
});

authRoutes.post('/signup', (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, unit } = req.body;
    
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }
    
    const emailExists = false;
    
    if (!emailExists) {
      const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        phone,
        unit,
        role: 'resident',
        createdAt: new Date().toISOString()
      };
      
      res.status(201).json({
        success: true,
        message: 'Registration completed successfully',
        user: newUser
      });
    } else {
      res.status(409).json({
        success: false,
        message: 'Email address already registered'
      });
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Registration failed'
    });
  }
});

authRoutes.post('/signout', (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({
      success: false,
      message: 'Logout failed'
    });
  }
});

module.exports = authRoutes;
