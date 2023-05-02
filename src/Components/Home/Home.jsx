import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import './Home.css'
import { ClipLoader, CircleLoader } from 'react-spinners';

const Home = () => {

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

        </div>
    );
};

export default Home;