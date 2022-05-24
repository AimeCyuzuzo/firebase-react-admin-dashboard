
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyDvVh0DAdlNbgjxgMA-X3D_NsTpPfgce_Y",
  authDomain: "fir-authentication-b4ce3.firebaseapp.com",
  projectId: "fir-authentication-b4ce3",
  storageBucket: "fir-authentication-b4ce3.appspot.com",
  messagingSenderId: "34822576657",
  appId: "1:34822576657:web:18a6903318b99334dbefb0",
  measurementId: "G-SXGSHXPND6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signin(email, password){
    return  signInWithEmailAndPassword(auth, email, password)
}

export function useAuth(){
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser;
}