// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ITOI0AR_5Di1iWe8CqAKKavlNI4R48w",
  authDomain: "react-first-project-d1c2b.firebaseapp.com",
  projectId: "react-first-project-d1c2b",
  storageBucket: "react-first-project-d1c2b.firebasestorage.app",
  messagingSenderId: "482305301872",
  appId: "1:482305301872:web:5bcf30c2ca1a36f404c3b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}