import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // const authInfo ={name:'Juliana'}
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider =new GoogleAuthProvider()

    //createUser
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    };

    //signIN
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //googleSignIN
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)

    }

    //for update profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }

    //logout  
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser', currentUser)
            setUser(currentUser);

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { user, loading, createUser, signIn, logout, updateUserProfile, googleSignIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}