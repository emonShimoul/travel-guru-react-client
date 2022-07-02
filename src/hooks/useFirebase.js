import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            console.log("Sign Out Successful");
        })
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;