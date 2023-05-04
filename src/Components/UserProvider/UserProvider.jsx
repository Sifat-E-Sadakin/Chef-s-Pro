import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useNavigate } from 'react-router-dom';


export let userContext= createContext(null);

const UserProvider = ({children}) => {

    // useEffect(()=>{
    //     window.scroll(0,0);
    // },[])

    

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

    let update =(name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo

        })

    }

    let [chefs, setChefs] = useState([])

    useEffect(()=>{
        fetch('https://assignment-10-server-seven-ashy.vercel.app/')
        .then(res=> res.json())
        .then(data=> setChefs(data))
    },[])

    let recoverPassword =email=>{
        return sendPasswordResetEmail(auth, email)
    }


    let newUser={
        user,
        loading,
        createNewUser,
        login,
        logout,
        googlePopUp,
        gitPopUp,
        chefs,
        update,
        recoverPassword
    }



    return (
        <userContext.Provider value={newUser}>
        {children}
       </userContext.Provider>
       
    );
};

export default UserProvider;