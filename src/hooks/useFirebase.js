import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in with google 
    const SignInGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)  
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            alert('successfully logout!!')
            setUser({})
          })
        .finally( () => setIsLoading(false));
    }
    // auth state changed observer
    useEffect( () => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return unSubscribed;
    }, [auth]) 
   
      
    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        logOut,
        SignInGoogle
    }
}


export default useFirebase