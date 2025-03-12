// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPcLfAPvyM63jpq0l5swY5xESVZq3GQ-M",
  authDomain: "puzzle-with-friends-5308d.firebaseapp.com",
  projectId: "puzzle-with-friends-5308d",
  storageBucket: "puzzle-with-friends-5308d.firebasestorage.app",
  messagingSenderId: "115437220134",
  appId: "1:115437220134:web:0708a4b0cc4e9dcde851e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
