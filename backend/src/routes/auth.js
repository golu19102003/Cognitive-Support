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

authRoutes.post('/google-signin', (req, res) => {
  try {
    console.log('🔍 Google sign-in request received:', req.body);
    
    const { uid, email, displayName, photoURL, emailVerified } = req.body;
    
    if (!uid || !email) {
      console.error('❌ Missing UID or email in Google sign-in request');
      return res.status(400).json({
        success: false,
        message: 'Google authentication data is incomplete'
      });
    }
    
    console.log('✅ Google user data validated:', { uid, email, displayName, emailVerified });
    
    // Check if user exists in database (for now, simulate user creation)
    const userExists = false; // In real app, check database
    
    if (!userExists) {
      // Create new user from Google data
      const newUser = {
        id: uid,
        name: displayName || email.split('@')[0],
        email: email,
        photoURL: photoURL || '',
        role: 'resident',
        unit: 'TBD', // To be assigned
        authProvider: 'google',
        emailVerified: emailVerified,
        createdAt: new Date().toISOString()
      };
      
      console.log('👤 Created new Google user:', newUser);
      
      // In real app, save to database
      
      const token = `google-token-${uid}-${Date.now()}`;
      console.log('🔑 Generated token for Google user');
      
      res.json({
        success: true,
        message: 'Google sign-in successful',
        user: newUser,
        token: token
      });
    } else {
      // Return existing user
      console.log('🔄 Returning existing Google user');
      res.json({
        success: true,
        message: 'Welcome back!',
        user: {
          id: uid,
          name: displayName || email.split('@')[0],
          email: email,
          role: 'resident'
        },
        token: `google-token-${uid}-${Date.now()}`
      });
    }
  } catch (error) {
    console.error('🔥 Google sign-in backend error:', error);
    res.status(500).json({
      success: false,
      message: 'Google authentication failed'
    });
  }
});

authRoutes.post('/twitter-signin', (req, res) => {
  try {
    console.log('🐦 Twitter sign-in request received:', req.body);
    
    const { uid, email, displayName, photoURL, username } = req.body;
    
    if (!uid) {
      console.error('❌ Missing UID in Twitter sign-in request');
      return res.status(400).json({
        success: false,
        message: 'Twitter authentication data is incomplete'
      });
    }
    
    console.log('✅ Twitter user data validated:', { uid, email, displayName, username });
    
    // Check if user exists in database (for now, simulate user creation)
    const userExists = false; // In real app, check database
    
    if (!userExists) {
      // Create new user from Twitter data
      const newUser = {
        id: uid,
        name: displayName || username || 'Twitter User',
        email: email || `${username || uid}@twitter.com`,
        photoURL: photoURL || '',
        role: 'resident',
        unit: 'TBD', // To be assigned
        authProvider: 'twitter',
        username: username,
        createdAt: new Date().toISOString()
      };
      
      console.log('👤 Created new Twitter user:', newUser);
      
      // In real app, save to database
      
      const token = `twitter-token-${uid}-${Date.now()}`;
      console.log('🔑 Generated token for Twitter user');
      
      res.json({
        success: true,
        message: 'Twitter sign-in successful',
        user: newUser,
        token: token
      });
    } else {
      // Return existing user
      console.log('🔄 Returning existing Twitter user');
      res.json({
        success: true,
        message: 'Welcome back!',
        user: {
          id: uid,
          name: displayName || username || 'Twitter User',
          email: email || `${username}@twitter.com`,
          role: 'resident'
        },
        token: `twitter-token-${uid}-${Date.now()}`
      });
    }
  } catch (error) {
    console.error('🔥 Twitter sign-in backend error:', error);
    res.status(500).json({
      success: false,
      message: 'Twitter authentication failed'
    });
  }
});

authRoutes.post('/github-signin', (req, res) => {
  try {
    console.log('🚀 GitHub sign-in request received:', req.body);
    
    const { uid, email, displayName, photoURL, username } = req.body;
    
    if (!uid) {
      console.error('❌ Missing UID in GitHub sign-in request');
      return res.status(400).json({
        success: false,
        message: 'GitHub authentication data is incomplete'
      });
    }
    
    console.log('✅ GitHub user data validated:', { uid, email, displayName, username });
    
    // Check if user exists in database (for now, simulate user creation)
    const userExists = false; // In real app, check database
    
    if (!userExists) {
      // Create new user from GitHub data
      const newUser = {
        id: uid,
        name: displayName || username || 'GitHub User',
        email: email || `${username || uid}@github.com`,
        photoURL: photoURL || '',
        role: 'resident',
        unit: 'TBD', // To be assigned
        authProvider: 'github',
        username: username,
        createdAt: new Date().toISOString()
      };
      
      console.log('👤 Created new GitHub user:', newUser);
      
      // In real app, save to database
      
      const token = `github-token-${uid}-${Date.now()}`;
      console.log('🔑 Generated token for GitHub user');
      
      res.json({
        success: true,
        message: 'GitHub sign-in successful',
        user: newUser,
        token: token
      });
    } else {
      // Return existing user
      console.log('🔄 Returning existing GitHub user');
      res.json({
        success: true,
        message: 'Welcome back!',
        user: {
          id: uid,
          name: displayName || username || 'GitHub User',
          email: email || `${username}@github.com`,
          role: 'resident'
        },
        token: `github-token-${uid}-${Date.now()}`
      });
    }
  } catch (error) {
    console.error('🔥 GitHub sign-in backend error:', error);
    res.status(500).json({
      success: false,
      message: 'GitHub authentication failed'
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
