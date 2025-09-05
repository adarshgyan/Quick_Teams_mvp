import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase.js';

// Elements
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const messageBox = document.getElementById('message');

// ----------------- SIGNUP -----------------
if(signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signupEmail.value;
    const password = signupPassword.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      messageBox.innerText = "Signup successful! Redirecting...";
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    } catch (error) {
      console.error(error.message);
      messageBox.innerText = error.message;
    }
  });
}

// ----------------- LOGIN -----------------
if(loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      messageBox.innerText = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    } catch (error) {
      console.error(error.message);
      messageBox.innerText = error.message;
    }
  });
}
