// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpvuiAvENk7-ge7t-FdEf3Mg4u8k-rKME",
  authDomain: "ecommerce-e4afb.firebaseapp.com",
  projectId: "ecommerce-e4afb",
  storageBucket: "ecommerce-e4afb.appspot.com",
  messagingSenderId: "250116170587",
  appId: "1:250116170587:web:6ba57213fd39190cf6b07e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;