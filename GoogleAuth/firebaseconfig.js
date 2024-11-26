// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeA2mhYaYQLpWdeXfaU9vG9THjcoQpD74",
  authDomain: "auth-f5030.firebaseapp.com",
  projectId: "auth-f5030",
  storageBucket: "auth-f5030.firebasestorage.app",
  messagingSenderId: "632960169111",
  appId: "1:632960169111:web:3ecc22c85f13e00797e5d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
