const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firebaseUid: {
    type: String,
    unique: true,
    sparse: true
  },
  authProvider: {
    type: String,
    enum: ['email', 'google', 'twitter', 'github'],
    default: 'email'
  },
  photoURL: {
    type: String,
    default: ''
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  linkedProviders: [{
    type: String,
    enum: ['email', 'google', 'twitter', 'github']
  }],
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  password: {
    type: String,
    required: function() {
      return !this.firebaseUid; // Password required only if not Firebase user
    },
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'therapist', 'caregiver', 'resident'],
    default: 'user'
  },
  profile: {
    age: Number,
    gender: {
      type: String,
      enum: ['male', 'female', 'other', 'prefer_not_to_say']
    },
    phone: String,
    address: String,
    company: String
  },
  cognitiveProfile: {
    conditions: [{
      type: String,
      enum: [
        'learning_disabilities',
        'adhd',
        'autism_spectrum',
        'memory_disorders',
        'developmental_disorders',
        'neurocognitive_disorders',
        'dementia',
        'epilepsy_cerebral_palsy',
        'traumatic_brain_injury',
        'intellectual_disability',
        'speech_language_disorders',
        'specific_learning_disorders',
        'executive_functioning_disorders',
        'anxiety_emotional_disorders',
        'social_communication_disorder'
      ]
    }],
    severity: {
      type: String,
      enum: ['mild', 'moderate', 'severe'],
      default: 'moderate'
    },
    assessmentDate: Date,
    therapistNotes: String
  },
  accessibility: {
    preferences: {
      fontSize: {
        type: String,
        enum: ['small', 'medium', 'large', 'extra_large'],
        default: 'medium'
      },
      highContrast: {
        type: Boolean,
        default: false
      },
      screenReader: {
        type: Boolean,
        default: false
      },
      keyboardNavigation: {
        type: Boolean,
        default: true
      },
      textToSpeech: {
        type: Boolean,
        default: false
      }
    },
    customSettings: {
      colorScheme: String,
      fontType: String,
      animationSpeed: String
    }
  },
  subscription: {
    type: String,
    enum: ['free', 'basic', 'premium'],
    default: 'free'
  },
  lastLogin: Date,
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Encrypt password using bcrypt
userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Update updatedAt field
userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
