import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'), 
  authDomain: "blogs-website-9546d.firebaseapp.com",
  projectId: "blogs-website-9546d",
  storageBucket: "blogs-website-9546d.firebasestorage.app",
  messagingSenderId: "400300594091",
  appId: "1:400300594091:web:5eb870949dfc152f16b8ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}