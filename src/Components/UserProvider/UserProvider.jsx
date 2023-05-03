import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export let userContext= createContext(null);

const UserProvider = ({children}) => {

    

    let [user, setUser]= useState(null);

    let [loading, setLoading]= useState(true);

    let googleProvider = new GoogleAuthProvider();

    const gitProvider = new GithubAuthProvider();

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

    let gitPopUp =()=>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider);
    }

    let [chefs, setChefs] = useState([])

    useEffect(()=>{
        fetch('https://assignment-10-server-seven-ashy.vercel.app/')
        .then(res=> res.json())
        .then(data=> setChefs(data))
    },[])


    let newUser={
        user,
        loading,
        createNewUser,
        login,
        logout,
        googlePopUp,
        gitPopUp,
        chefs
    }



    return (
        <userContext.Provider value={newUser}>
        {children}
       </userContext.Provider>
       
    );
};

export default UserProvider;