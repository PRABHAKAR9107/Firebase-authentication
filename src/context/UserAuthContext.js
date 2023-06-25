import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

// Create a context for user authentication
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  // Log the current user
  console.log(user, "user");

  // Function to log in a user with email and password
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Function to sign up a new user with email and password
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Function to send a password reset email to a user
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  // Function to log out the current user
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    // Set up an observer for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });

    // Clean up the observer when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, resetPassword }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

// Custom hook to access the user authentication context
export function useUserAuth() {
  return useContext(userAuthContext);
}
