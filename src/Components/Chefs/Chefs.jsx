import React, { useContext } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import ChefsCard from '../ChefsCard/ChefsCard';

const Chefs = () => {

    let {chefs} = useContext(userContext);


    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl font-semibold my-5'>Professional Chefs</h1>

            <div className='grid lg:grid-cols-2 gap-10'>
                {
                    chefs.map(chef=> <ChefsCard chef={chef}></ChefsCard>)
                }
            </div>
            
        </div>
    );
};

export default Chefs;