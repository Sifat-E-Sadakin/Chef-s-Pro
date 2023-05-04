import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import Traditional from '../ExtraSection/Traditional';
import SeaFood from '../ExtraSection/SeaFood';
import ShowStreetFood from '../ExtraSection/ShowExtraSection/ShowStreetFood';
import StreetFood from '../ExtraSection/StreetFood';

const HomePage = () => {

    useEffect(()=>{
        window.scroll(0,0);
    },[])
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Traditional></Traditional>
            <SeaFood></SeaFood>
            <StreetFood></StreetFood>
            
        </div>
    );
};

export default HomePage;