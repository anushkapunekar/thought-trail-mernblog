// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f7951.firebaseapp.com",
  projectId: "mern-blog-f7951",
  storageBucket: "mern-blog-f7951.appspot.com",
  messagingSenderId: "896157653457",
  appId: "1:896157653457:web:1f8c084f43ad39365ee8f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
