import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";

function useLogin() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext()

  const login = (email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch({type:'LOGIN', payload: user})
    })
    .catch((error) => {
      setError(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      console.log(errorCode, errorMessage);
    });
  }


  return {login, user, error}
}

export default useLogin