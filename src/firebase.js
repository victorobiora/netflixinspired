
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "n-inspired.firebaseapp.com",
  projectId: "n-inspired",
  storageBucket: "n-inspired.appspot.com",
  messagingSenderId: "13027551607",
  appId: "1:13027551607:web:c65ac600b3dcd77605d972",
  measurementId: "G-RFX7JN4GEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);