# Firebase Authentication Setup

This project uses Firebase Authentication for social login functionality.

## Setup Instructions

1. **Firebase Console Configuration**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project: `society360-64ab7`
   - Enable Authentication in the Authentication section
   - Enable the following sign-in methods:
     - Google (requires OAuth 2.0 client ID)
     - Twitter (requires API key and secret)
     - GitHub (requires OAuth app configuration)

2. **Environment Variables**
   - The Firebase configuration is already set in `src/firebase.js`
   - For production, consider using environment variables for sensitive data

3. **Dependencies**
   - Firebase SDK is installed via `npm install firebase`
   - Authentication providers are imported from `firebase/auth`

## Features

- **Google Sign-In**: Uses GoogleAuthProvider
- **Twitter Sign-In**: Uses TwitterAuthProvider  
- **GitHub Sign-In**: Uses GithubAuthProvider
- **Popup Authentication**: All social logins use popup-based authentication

## Usage

The social login buttons are integrated into the Login component (`src/components/Auth/Login.js`):

```javascript
import { auth, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithPopup } from '../../firebase';

// Handle social sign-ins
const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  navigate('/dashboard');
};
```

## Security Notes

- Firebase handles OAuth flow securely
- Tokens are managed automatically by Firebase SDK
- User sessions are maintained by Firebase Auth
- No sensitive credentials are exposed in the frontend
