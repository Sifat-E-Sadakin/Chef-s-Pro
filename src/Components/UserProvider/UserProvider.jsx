import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export let userContext= createContext(null);

const UserProvider = ({children}) => {

    let [user, setUser]= useState(null);

    let [loading, setLoading]= useState(true);

    let googleProvider = new GoogleAuthProvider();

    let auth = getAuth(app);



    let createNewUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        let unsubscribe = onAuthStateChanged(auth, userInfo=>{
            
                setUser(userInfo);
                setLoading(false)
                console.log("onAuth change", userInfo);
            

        })

        return ()=>{
            unsubscribe();
        } 
    },[])

    let logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    let googlePopUp =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    let newUser={
        user,
        loading,
        createNewUser,
        login,
        logout,
        googlePopUp
    }



    return (
        <userContext.Provider value={newUser}>
        {children}
       </userContext.Provider>
       
    );
};

export default UserProvider;