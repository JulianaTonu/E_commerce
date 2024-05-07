import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // const authInfo ={name:'Juliana'}
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
const axiosPublic =useAxiosPublic()
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
            if(currentUser){
                //get token and store client
                const userInfo = {email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);

        })
        return () => {
            unsubscribe()
        }
    }, [axiosPublic])

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