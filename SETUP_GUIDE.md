# PriHub Cognitive Support Platform - Complete Setup Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Database Setup](#database-setup)
6. [Testing Setup](#testing-setup)
7. [Deployment Setup](#deployment-setup)
8. [Verification](#verification)
9. [Troubleshooting](#troubleshooting)

## Prerequisites

### System Requirements
- **Node.js**: 16.0.0 or higher
- **npm**: 8.0.0 or higher
- **MongoDB**: 5.0 or higher
- **Git**: Latest version

### Development Tools
- **VS Code** or any modern IDE
- **Chrome** or **Firefox** browser
- **Postman** or similar API testing tool

### Optional Tools
- **MongoDB Compass** - Database GUI
- **React Developer Tools** - Browser extension
- **Web Developer Tools** - Browser extension

## Environment Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Cognitive-Support
```

### 2. Install Node.js
```bash
# Verify Node.js installation
node --version
npm --version

# If not installed, download from https://nodejs.org
```

### 3. Install MongoDB
```bash
# Windows: Download and install from https://www.mongodb.com
# macOS: brew install mongodb-community
# Ubuntu: sudo apt-get install mongodb

# Start MongoDB service
# Windows: Start MongoDB service from Services
# macOS: brew services start mongodb-community
# Ubuntu: sudo systemctl start mongod
```

## Backend Setup

### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your configuration
```

#### Environment Variables (.env)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/cognitive_support
MONGODB_TEST_URI=mongodb://localhost:27017/cognitive_support_test

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Firebase Configuration
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email

# Security
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=uploads/

# CORS Configuration
FRONTEND_URL=http://localhost:3000

# Logging
LOG_LEVEL=info
LOG_FILE=logs/app.log

# AI Services
OPENAI_API_KEY=your_openai_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# Analytics
ANALYTICS_API_KEY=your_analytics_api_key_here
```

### 4. Create Required Directories
```bash
mkdir logs
mkdir uploads
```

### 5. Start Backend Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Frontend Setup

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
# Create .env file
touch .env

# Add environment variables
```

#### Frontend Environment Variables (.env)
```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000

# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Analytics
REACT_APP_GA_TRACKING_ID=your_google_analytics_id

# Feature Flags
REACT_APP_ENABLE_EYE_TRACKING=true
REACT_APP_ENABLE_MULTILINGUAL=true
REACT_APP_ENABLE_GAMIFICATION=true
```

### 4. Start Frontend Development Server
```bash
npm start
```

## Database Setup

### 1. MongoDB Setup
```bash
# Connect to MongoDB
mongosh

# Create database
use cognitive_support

# Create collections
db.createCollection("users");
db.createCollection("chatbotsessions");
db.createCollection("tasks");
db.createCollection("achievements");
db.createCollection("focussessions");
```

### 2. Seed Data (Optional)
```bash
# Navigate to backend directory
cd backend

# Run seed script
npm run seed
```

### 3. Verify Database Connection
```bash
# Check if backend can connect to database
curl http://localhost:5000/health
```

## Testing Setup

### 1. Backend Testing
```bash
cd backend

# Run all tests
npm test

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:coverage
```

### 2. Frontend Testing
```bash
cd frontend

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run accessibility tests
npm run test:a11y

# Run performance tests
npm run test:performance
```

### 3. End-to-End Testing
```bash
# Install Playwright
npm install -D @playwright/test

# Run E2E tests
npx playwright test
```

## Deployment Setup

### 1. Backend Deployment (Production)

#### Environment Setup
```bash
# Set production environment
export NODE_ENV=production

# Update .env for production
# - Use production database URL
# - Use strong JWT secrets
# - Configure production email service
# - Set up SSL certificates
```

#### Build and Deploy
```bash
# Install production dependencies
npm ci --only=production

# Start production server
npm start
```

#### PM2 Setup (Process Manager)
```bash
# Install PM2
npm install -g pm2

# Start application with PM2
pm2 start server.js --name "prihub-backend"

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
pm2 startup
```

### 2. Frontend Deployment (Production)

#### Build for Production
```bash
cd frontend

# Create production build
npm run build

# Test build locally
serve -s build
```

#### Deploy to Static Hosting
```bash
# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=build

# Deploy to Vercel
npm install -g vercel
vercel --prod

# Deploy to GitHub Pages
npm run deploy
```

### 3. Database Deployment

#### MongoDB Atlas (Cloud)
```bash
# 1. Create account at https://www.mongodb.com/atlas
# 2. Create cluster
# 3. Configure network access
# 4. Create database user
# 5. Get connection string
# 6. Update .env with connection string
```

#### MongoDB Self-Hosted
```bash
# Configure mongod.conf
# Set up authentication
# Configure replication (optional)
# Set up backup strategy
```

## Verification

### 1. Health Checks
```bash
# Backend health
curl http://localhost:5000/health

# Frontend accessibility
npm run test:a11y

# Performance metrics
npm run test:performance
```

### 2. Manual Testing Checklist

#### Backend Functionality
- [ ] User registration and login
- [ ] JWT authentication
- [ ] Chatbot API responses
- [ ] Database operations
- [ ] File uploads
- [ ] Email notifications

#### Frontend Functionality
- [ ] Page navigation
- [ ] Form submissions
- [ ] Accessibility features
- [ ] Responsive design
- [ ] Dark/light mode
- [ ] Text-to-speech
- [ ] Multilingual support

#### Integration Testing
- [ ] Frontend-backend communication
- [ ] Real-time features
- [ ] Error handling
- [ ] Loading states
- [ ] Offline functionality

### 3. Accessibility Testing
```bash
# Run automated accessibility tests
npm run test:a11y

# Manual screen reader testing
# - NVDA (Windows)
# - VoiceOver (macOS)
# - TalkBack (Android)

# Keyboard navigation testing
# - Tab navigation
# - Enter/Space activation
# - Arrow key navigation
# - Escape key functionality
```

### 4. Performance Testing
```bash
# Core Web Vitals
npm run test:performance

# Bundle size analysis
npm run analyze

# Load testing
# - Use artillery.io or k6
# - Test concurrent users
# - Test API endpoints
```

## Troubleshooting

### Common Issues

#### Backend Issues
```bash
# Port already in use
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Database connection failed
# - Check MongoDB service
# - Verify connection string
# - Check network connectivity

# JWT errors
# - Verify JWT_SECRET
# - Check token expiration
# - Verify token format
```

#### Frontend Issues
```bash
# Module not found
npm install
npm cache clean --force

# CORS errors
# - Check backend CORS configuration
# - Verify frontend API URL
# - Check proxy configuration

# Build failures
# - Check Node.js version
# - Clear npm cache
# - Delete node_modules and reinstall
```

#### Database Issues
```bash
# Connection refused
# - Check MongoDB service
# - Verify port (27017)
# - Check firewall settings

# Authentication failed
# - Create database user
# - Check credentials
# - Verify user permissions
```

#### Accessibility Issues
```bash
# Screen reader not working
# - Check ARIA labels
# - Verify semantic HTML
# - Test with different screen readers

# Keyboard navigation issues
# - Check tabIndex values
# - Verify focus management
# - Test with keyboard only
```

### Performance Issues
```bash
# Slow loading
# - Check bundle size
# - Optimize images
# - Enable lazy loading
# - Use caching

# Memory leaks
# - Check component cleanup
# - Verify event listener removal
# - Monitor memory usage
```

### Development Tips

#### Backend Development
```bash
# Use nodemon for auto-restart
npm install -D nodemon

# Enable debug logging
DEBUG=* npm run dev

# Use environment variables
# - Never hardcode secrets
# - Use .env for local development
# - Use .env.example for documentation
```

#### Frontend Development
```bash
# Use React Developer Tools
# - Component inspector
# - Performance profiler
# - State debugging

# Use browser DevTools
# - Network tab for API calls
# - Console for errors
# - Elements for DOM inspection
```

#### Database Development
```bash
# Use MongoDB Compass
# - Visual database browser
# - Query builder
# - Performance monitoring

# Use mongosh
# - Command-line interface
# - Script execution
# - Database administration
```

## Next Steps

1. **Development**: Start building features
2. **Testing**: Implement comprehensive test suite
3. **Documentation**: Create user guides and API docs
4. **Deployment**: Set up production environment
5. **Monitoring**: Implement logging and analytics
6. **Maintenance**: Regular updates and security patches

## Support

For additional support:
- Check the [GitHub Issues](https://github.com/your-repo/issues)
- Review the [Documentation](./docs/)
- Contact the development team
- Join the community forum

---

**Note**: This setup guide is for development purposes. For production deployment, please refer to the deployment documentation and follow security best practices.
