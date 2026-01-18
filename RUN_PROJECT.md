# 🚀 How to Run Society360 Project

## 📋 Prerequisites

### Required Software
1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **MongoDB** (Local or Cloud)
   - **Option 1 - Local**: Install MongoDB Community Server
     - Download: https://www.mongodb.com/try/download/community
     - Install and start MongoDB service
   - **Option 2 - Cloud**: Use MongoDB Atlas
     - Sign up: https://www.mongodb.com/atlas
     - Create free cluster and get connection string

3. **Git** (for version control)
   - Download: https://git-scm.com/

## 🛠️ Installation Steps

### 1. Install Dependencies
```bash
# Navigate to project root
cd "c:\Users\hp\OneDrive\Desktop\My Projects\Civora X Internship Project\FSD120-golu19102003"

# Install all dependencies (backend + frontend)
npm run install-all
```

### 2. Environment Setup

#### Backend Environment
```bash
# Navigate to backend folder
cd backend

# Copy environment template
copy .env.example .env

# Edit .env file with your configuration
notepad .env
```

**Backend .env Configuration:**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/society360
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_secret_key_here_change_in_production
JWT_REFRESH_EXPIRE=30d
BCRYPT_ROUNDS=12
```

#### Frontend Environment
```bash
# Navigate to frontend folder
cd frontend

# Copy environment template
copy .env.example .env

# Edit .env file
notepad .env
```

**Frontend .env Configuration:**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

### 3. Start MongoDB

#### Option A - Local MongoDB
```bash
# Start MongoDB service (Windows)
net start MongoDB

# Or run MongoDB directly
mongod
```

#### Option B - MongoDB Atlas
1. Go to https://cloud.mongodb.com/
2. Create free cluster
3. Get connection string
4. Update `MONGODB_URI` in backend/.env

### 4. Run the Application

#### Option 1 - Development Mode (Recommended)
```bash
# From project root
npm run dev
```
This will start both backend and frontend simultaneously.

#### Option 2 - Separate Terminals
**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

## 🌐 Access URLs

After successful startup:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## 🧪 Testing the Application

### 1. Test Backend Health
Open browser and navigate to:
```
http://localhost:5000/api/health
```
**Expected Response:**
```json
{
  "success": true,
  "message": "Society360 Backend API is running",
  "timestamp": "2026-01-06T...",
  "version": "1.0.0"
}
```

### 2. Test User Registration
1. Open http://localhost:3000
2. Click "Don't have an account? Sign up"
3. Fill registration form:
   - Name: Test User
   - Email: test@example.com
   - Password: Test123456
   - Phone: 9876543210
   - Role: Resident
4. Click "Create account"

### 3. Test Login
1. Use credentials: test@example.com / Test123456
2. Click "Sign in"
3. Should redirect to dashboard

### 4. Test Visitor Management
1. Navigate to "Visitors" from sidebar
2. Click "Add Visitor" button
3. Fill visitor details and submit
4. Test visitor status updates

## 🔧 Troubleshooting

### Common Issues & Solutions

#### 1. MongoDB Connection Error
**Error**: `Database connection failed`
**Solution**:
- Ensure MongoDB is running
- Check MONGODB_URI in backend/.env
- Verify MongoDB service status

#### 2. Port Already in Use
**Error**: `Port 5000 already in use`
**Solution**:
```bash
# Find process using port
netstat -ano | findstr :5000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

#### 3. Frontend Not Starting
**Error**: `Something is already running on port 3000`
**Solution**:
```bash
# Kill Node processes
taskkill /F /IM node.exe
```

#### 4. Environment Variables Not Working
**Error**: `undefined variables`
**Solution**:
- Verify .env files exist in both backend/ and frontend/
- Check variable names match exactly
- Restart application after .env changes

#### 5. CORS Errors
**Error**: `CORS policy error`
**Solution**:
- Check FRONTEND_URL in backend/.env
- Ensure it matches frontend URL (http://localhost:3000)

### Debug Mode

#### Backend Debug
```bash
cd backend
npm run dev
# Look for console logs and error messages
```

#### Frontend Debug
1. Open browser Developer Tools (F12)
2. Check Console tab for errors
3. Check Network tab for failed API calls

## 📱 Development Workflow

### Daily Development Commands
```bash
# Start development servers
npm run dev

# Install new dependencies
cd backend && npm install <package>
cd frontend && npm install <package>

# Run tests (when implemented)
npm test
```

### Git Commands
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to repository
git push origin main
```

## 🎯 Next Steps After Setup

1. **Create Test Users** - Register users with different roles
2. **Test Visitor Flow** - Complete visitor lifecycle
3. **Explore Features** - Test all implemented modules
4. **Check Permissions** - Verify role-based access
5. **Review Database** - Check MongoDB collections

## 📞 Support

If you encounter issues:

1. **Check Console Logs** - Both frontend and backend
2. **Verify Environment** - All variables set correctly
3. **Check Network** - MongoDB and API connectivity
4. **Review Documentation** - README.md and this guide

**Civora Nexus Support:**
- 📧 Email: info@civoranexus.com
- 📱 Phone: +91-7350 675192

---

**Happy Coding! 🎉**
