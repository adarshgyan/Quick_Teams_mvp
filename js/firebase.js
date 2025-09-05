// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhmkrHFQhSz1mzUZFBNQRUuZvnPcgF4lU",
  authDomain: "quick-teams-29685.firebaseapp.com",
  projectId: "quick-teams-29685",
  storageBucket: "quick-teams-29685.appspot.com",
  messagingSenderId: "814121228704",
  appId: "1:814121228704:web:eb0bf19efef1e7ded56cc5",
  measurementId: "G-Y1EY57N7BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Export auth functions to use in other files
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
