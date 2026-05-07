const express = require('express');
const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// Temporary: Skip Firebase Admin verification for development
// TODO: Configure proper Firebase service account key
const verifyFirebaseToken = (token) => {
  try {
    // For development, just decode the JWT (not secure for production)
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    return null;
  }
};

// @desc    Firebase user registration
// @route   POST /api/firebase-auth/register
// @access  Public
router.post('/register', asyncHandler(async (req, res) => {
  const { uid, email, displayName, photoURL, authProvider } = req.body;

  try {
    // Check if user already exists in our database
    const User = require('../models/User');
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    // Create user in our database
    const user = await User.create({
      firebaseUid: uid,
      email,
      name: displayName,
      photoURL: photoURL || '',
      authProvider: authProvider,
      emailVerified: true,
      role: 'resident',
      unit: 'TBD',
      createdAt: new Date()
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user._id,
        firebaseUid: uid,
        email: user.email,
        name: user.name,
        photoURL: user.photoURL,
        authProvider: user.authProvider
      }
    });
  } catch (error) {
    console.error('Firebase registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration'
    });
  }
}));

// @desc    Firebase user login
// @route   POST /api/firebase-auth/login
// @access  Public
router.post('/login', asyncHandler(async (req, res) => {
  const { uid, email, displayName, photoURL, authProvider, idToken } = req.body;

  try {
    // Log incoming request data
    console.log('🔐 Firebase login attempt:', { 
      uid, 
      email, 
      displayName, 
      photoURL: photoURL ? 'has-photo' : 'no-photo', 
      authProvider, 
      hasToken: !!idToken 
    });
    
    // Validate required fields
    if (!uid || !email || !authProvider) {
      console.error('❌ Missing required fields:', { uid, email, authProvider });
      return res.status(400).json({
        success: false,
        message: 'Missing required authentication data'
      });
    }
    
    // Temporary: Skip Firebase token verification for development
    // TODO: Add proper Firebase Admin verification
    const decodedToken = verifyFirebaseToken(idToken);
    
    if (!decodedToken && !idToken) {
      console.error('❌ Invalid token verification');
      return res.status(401).json({
        success: false,
        message: 'Invalid authentication token'
      });
    }

    const User = require('../models/User');
    
    // Find or create user in our database
    let user = await User.findOne({ firebaseUid: uid });
    
    if (!user) {
      console.log('👤 Creating new user:', { email, authProvider });
      
      // Create new user if doesn't exist
      try {
        user = await User.create({
          firebaseUid: uid,
          email,
          name: displayName || email.split('@')[0],
          photoURL: photoURL || '',
          authProvider: authProvider,
          emailVerified: true,
          role: 'resident',
          unit: 'TBD',
          createdAt: new Date(),
          lastLogin: new Date()
        });
        console.log('✅ User created successfully:', user._id);
      } catch (createError) {
        console.error('❌ User creation error:', createError);
        return res.status(500).json({
          success: false,
          message: 'Failed to create user account'
        });
      }
    } else {
      console.log('🔄 Updating existing user:', user._id);
      
      // Update last login
      try {
        user.lastLogin = new Date();
        if (photoURL) user.photoURL = photoURL;
        await user.save();
        console.log('✅ User updated successfully');
      } catch (updateError) {
        console.error('❌ User update error:', updateError);
        // Continue with existing user data
      }
    }

    // Generate JWT token for our backend
    const jwt = require('jsonwebtoken');
    
    // Check if JWT_SECRET is set
    if (!process.env.JWT_SECRET) {
      console.error('❌ JWT_SECRET not set in environment variables');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error'
      });
    }
    
    const generateToken = (id) => {
      try {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE || '7d',
        });
      } catch (tokenError) {
        console.error('❌ Token generation error:', tokenError);
        throw new Error('Failed to generate authentication token');
      }
    };

    try {
      const token = generateToken(user._id);
      console.log('🎫 JWT token generated successfully');
    } catch (tokenError) {
      console.error('❌ Token generation failed:', tokenError);
      return res.status(500).json({
        success: false,
        message: 'Failed to generate authentication token'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token: token,
      user: {
        id: user._id,
        firebaseUid: uid,
        email: user.email,
        name: user.name,
        photoURL: user.photoURL,
        authProvider: user.authProvider,
        role: user.role,
        unit: user.unit
      }
    });
  } catch (error) {
    console.error('Firebase login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
}));

// @desc    Link additional provider to existing user
// @route   POST /api/firebase-auth/link-provider
// @access  Private
router.post('/link-provider', asyncHandler(async (req, res) => {
  const { uid, email, displayName, photoURL, authProvider } = req.body;
  const userId = req.user.id; // From JWT middleware

  try {
    const User = require('../models/User');
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Add additional provider info
    if (!user.linkedProviders) {
      user.linkedProviders = [];
    }
    
    if (!user.linkedProviders.includes(authProvider)) {
      user.linkedProviders.push(authProvider);
      await user.save();
    }

    res.status(200).json({
      success: true,
      message: 'Provider linked successfully',
      linkedProviders: user.linkedProviders
    });
  } catch (error) {
    console.error('Link provider error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during provider linking'
    });
  }
}));

// @desc    Get user profile
// @route   GET /api/firebase-auth/profile
// @access  Private
router.get('/profile', asyncHandler(async (req, res) => {
  try {
    const User = require('../models/User');
    const user = await User.findById(req.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        firebaseUid: user.firebaseUid,
        email: user.email,
        name: user.name,
        photoURL: user.photoURL,
        authProvider: user.authProvider,
        linkedProviders: user.linkedProviders || [],
        role: user.role,
        unit: user.unit,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}));

module.exports = router;
