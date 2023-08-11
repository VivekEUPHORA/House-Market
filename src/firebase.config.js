// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChbzIwqKtFf2MamQNxuALjTMlPvzerDew",
  authDomain: "house-market-3c1bf.firebaseapp.com",
  projectId: "house-market-3c1bf",
  storageBucket: "house-market-3c1bf.appspot.com",
  messagingSenderId: "178253091907",
  appId: "1:178253091907:web:9d86e1add0b164e169f0f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
