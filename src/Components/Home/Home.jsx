import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import './Home.css'
import { ClipLoader, CircleLoader } from 'react-spinners';
import Footer from '../Footer/Footer';

const Home = () => {

    // useEffect(()=>{
    //     window.scroll(0,0);
    // },[])

    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div className='place-content-center load'>
                {navigation.state === "loading" ?
                    <CircleLoader
                        color='#000000'
                        loading="true"
                        cssOverride=''
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> : ""}


            </div>

            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Home;