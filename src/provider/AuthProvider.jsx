import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // const authInfo ={name:'Juliana'}
    const [user, setUser] = useState(null)

    //createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    };

    //signIN
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

  //logout  
  const logout=()=>{
    return signOut(auth)
     }

       //for update profile
   const updateUserProfile =(profile)=>{
    return updateProfile(auth.currentUser, profile)
}


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('currentUser',currentUser)
            setUser(currentUser);
        
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authInfo = { user, createUser,signIn,logout,updateUserProfile }

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