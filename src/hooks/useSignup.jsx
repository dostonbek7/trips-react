import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch({ type: "LOGIN", payload: user });
        setUser(user);
      })
      .catch((error) => {
        setError(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };
  return { user, error, signup };
}

export default useSignup;
