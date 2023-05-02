import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import './Home.css'

const Home = () => {

    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div className='place-content-center load'>
                { navigation.state === "loading" ?  <progress className="progress w-56"></progress> : ""}
               

            </div>

            <Outlet></Outlet>

        </div>
    );
};

export default Home;