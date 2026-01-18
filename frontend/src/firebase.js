// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  GoogleAuthProvider, 
  TwitterAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup 
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

// Export auth and providers
export { 
  auth, 
  GoogleAuthProvider, 
  TwitterAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup 
};

export default app;
