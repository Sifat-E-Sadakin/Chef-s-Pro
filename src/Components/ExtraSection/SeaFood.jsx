import React, { useEffect, useState } from 'react';
import ShowSeaFood from './ShowExtraSection/ShowSeaFood';

const SeaFood = () => {

    
    let [food, setFood] = useState([])

    useEffect(()=>{
        fetch('./seafood.json')
        .then(res=>res.json())
        .then(data => setFood(data))
    },[])

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl font-semibold my-20'>From The Sea</h1>
            <div className='grid lg:grid-cols-3 gap-7'>
                {
                    food.map(item=> <ShowSeaFood item={item}></ShowSeaFood>)
                }
            </div>
            
        </div>
    );
};

export default SeaFood;