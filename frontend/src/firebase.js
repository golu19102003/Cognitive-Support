// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider, 
  TwitterAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  linkWithPopup,
  fetchSignInMethodsForEmail
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxQAl4zP1NUgswxOZRvNT0sMW2J_DwI6E",
  authDomain: "prihub-8196c.firebaseapp.com",
  projectId: "prihub-8196c",
  storageBucket: "prihub-8196c.firebasestorage.app",
  messagingSenderId: "746365105856",
  appId: "1:746365105856:web:9f74924c4180a549aedf25",
  measurementId: "G-XXEFNFZ5WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Email/Password registration function
export const signUpWithEmail = async (email, password, name) => {
  try {
    console.log('🔐 Firebase Registration Attempt:', { email, name, hasPassword: !!password });
    
    // Validate inputs
    if (!email || !password || !name) {
      return { success: false, error: 'Please provide email, password, and name' };
    }
    
    if (password.length < 6) {
      return { success: false, error: 'Password should be at least 6 characters long.' };
    }
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('✅ Firebase User Created:', userCredential.user.uid);
    
    // Update user profile with name
    await updateProfile(userCredential.user, {
      displayName: name
    });
    console.log('✅ Profile Updated with Name:', name);
    
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('❌ Firebase Registration Error:', error.code, error.message);
    
    let errorMessage = error.message;
    
    // Handle specific error messages
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'This email is already registered. Please sign in with your password.';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters long.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Please enter a valid email address.';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your internet connection.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many attempts. Please try again later.';
        break;
      default:
        errorMessage = 'Registration failed. Please try again.';
    }
    
    return { success: false, error: errorMessage, errorCode: error.code };
  }
};

// Email/Password sign in function
export const signInWithEmail = async (email, password) => {
  try {
    console.log('🔐 Firebase Login Attempt:', { email, hasPassword: !!password });
    
    // Validate inputs
    if (!email || !password) {
      return { success: false, error: 'Please provide email and password' };
    }
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('✅ Firebase Login Successful:', userCredential.user.uid);
    console.log('👤 User Email:', userCredential.user.email);
    console.log('👤 User Name:', userCredential.user.displayName);
    
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('❌ Firebase Login Error:', error.code, error.message);
    
    let errorMessage = error.message;
    
    // Handle specific error messages
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email. Please register first.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password. Please try again.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Please enter a valid email address.';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This account has been disabled. Please contact support.';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your internet connection.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many login attempts. Please try again later.';
        break;
      case 'auth/invalid-credential':
        errorMessage = 'Invalid email or password. Please check your credentials.';
        break;
      default:
        errorMessage = 'Login failed. Please check your credentials and try again.';
    }
    
    return { success: false, error: errorMessage, errorCode: error.code };
  }
};

// Token refresh function
export const refreshUserToken = async () => {
  try {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const idToken = await currentUser.getIdToken(true); // Force refresh
      return { success: true, token: idToken, user: currentUser };
    }
    return { success: false, error: 'No user is currently signed in' };
  } catch (error) {
    return { success: false, error: error.message, errorCode: error.code };
  }
};

// Google sign in function
export const signInWithGoogle = async () => {
  try {
    console.log('🔐 Starting Google sign in...');
    
    const provider = new GoogleAuthProvider();
    // Add scopes to get profile photo
    provider.addScope('profile');
    provider.addScope('email');
    
    const result = await signInWithPopup(auth, provider);
    
    console.log('✅ Google sign in successful');
    console.log('👤 Google User Data:', {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
      emailVerified: result.user.emailVerified
    });
    
    // Handle Google profile photo URL
    let photoURL = result.user.photoURL;
    if (photoURL) {
      // Ensure Google photo URL is properly formatted
      if (photoURL.includes('googleusercontent.com')) {
        // Get higher quality image
        photoURL = photoURL.replace('s96-c', 's400-c');
        console.log('🖼️ Enhanced Google Photo URL:', photoURL);
      }
    }
    
    // Update user object with enhanced photo URL
    const enhancedUser = {
      ...result.user,
      photoURL: photoURL
    };
    
    return { success: true, user: enhancedUser };
  } catch (error) {
    console.error('❌ Google sign in error:', error.code, error.message);
    
    let errorMessage = error.message;
    
    // Handle specific error messages
    switch (error.code) {
      case 'auth/user-token-expired':
        errorMessage = 'Your session has expired. Please sign in again.';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This account has been disabled. Please contact support.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many login attempts. Please try again later.';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your internet connection.';
        break;
      case 'auth/popup-closed-by-user':
        errorMessage = 'Sign in was cancelled. Please try again.';
        break;
      case 'auth/popup-blocked':
        errorMessage = 'Pop-up was blocked. Please allow pop-ups and try again.';
        break;
      default:
        errorMessage = 'Google sign in failed. Please try again.';
    }
    
    return { success: false, error: errorMessage, errorCode: error.code };
  }
};

// Twitter sign in function
export const signInWithTwitter = async () => {
  try {
    const provider = new TwitterAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    let errorMessage = error.message;
    
    // Handle specific error messages
    switch (error.code) {
      case 'auth/user-token-expired':
        errorMessage = 'Your session has expired. Please sign in again.';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This account has been disabled. Please contact support.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many login attempts. Please try again later.';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your internet connection.';
        break;
      default:
        errorMessage = 'Twitter sign in failed. Please try again.';
    }
    
    return { success: false, error: errorMessage, errorCode: error.code };
  }
};

// Github sign in function
export const signInWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    provider.addScope('user:email');
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    let errorMessage = error.message;
    
    // Handle specific error for existing account with different credential
    if (error.code === 'auth/account-exists-with-different-credential') {
      const email = error.customData?.email;
      return { 
        success: false, 
        error: `This email is already registered with Google. Please sign in with Google instead.`,
        errorCode: error.code,
        email: email
      };
    }
    
    // Handle other specific errors
    switch (error.code) {
      case 'auth/user-token-expired':
        errorMessage = 'Your session has expired. Please sign in again.';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This account has been disabled. Please contact support.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many login attempts. Please try again later.';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your internet connection.';
        break;
      default:
        errorMessage = 'GitHub sign in failed. Please try again.';
    }
    
    return { success: false, error: errorMessage, errorCode: error.code };
  }
};

// Link additional provider to existing user
export const linkAdditionalProvider = async (providerName) => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      return { success: false, error: 'No user is currently signed in' };
    }

    let provider;
    
    switch(providerName) {
      case 'google':
        provider = new GoogleAuthProvider();
        break;
      case 'twitter':
        provider = new TwitterAuthProvider();
        break;
      case 'github':
        provider = new GithubAuthProvider();
        provider.addScope('user:email');
        break;
      default:
        throw new Error('Invalid provider');
    }
    
    const result = await linkWithPopup(currentUser, provider);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message, errorCode: error.code };
  }
};

// Smart signin with account linking
export const smartSignIn = async (providerName) => {
  try {
    const currentUser = auth.currentUser;
    
    // If user is already signed in, link the new provider
    if (currentUser) {
      return await linkAdditionalProvider(providerName);
    }
    
    // If no user is signed in, do normal signin
    let provider;
    
    switch(providerName) {
      case 'google':
        provider = new GoogleAuthProvider();
        break;
      case 'twitter':
        provider = new TwitterAuthProvider();
        break;
      case 'github':
        provider = new GithubAuthProvider();
        provider.addScope('user:email');
        break;
      default:
        throw new Error('Invalid provider');
    }
    
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error) {
    // Handle account exists with different credential
    if (error.code === 'auth/account-exists-with-different-credential') {
      const email = error.customData?.email;
      return { 
        success: false, 
        error: `This email is already registered. Please sign in with your existing method first, then link this account.`,
        errorCode: error.code,
        email: email,
        needsLinking: true
      };
    }
    return { success: false, error: error.message, errorCode: error.code };
  }
};

// Export auth and providers
export { 
  auth, 
  GoogleAuthProvider, 
  TwitterAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword
};

export default app;
