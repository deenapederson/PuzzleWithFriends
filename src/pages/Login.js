import React, { useState } from "react";
import { auth } from "../firebase"; // Ensure you have firebase config in src/firebase.js
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  // 🔹 Sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful");
    } catch (error) {
      console.error("Error signing in with Google: ", error.message);
    }
  };

  // 🔹 Sign in with Email/Password
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Email/Password Sign-In successful");
    } catch (error) {
      console.error("Error signing in: ", error.message);
    }
  };

  // 🔹 Register a new user
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error signing up: ", error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleEmailSignIn}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <br />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegister} style={{ marginTop: "10px" }}>Register</button>
      <br />
      <button onClick={handleGoogleSignIn} style={{ marginTop: "10px" }}>Sign in with Google</button>
    </div>
  );
}
