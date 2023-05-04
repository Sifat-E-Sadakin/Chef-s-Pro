import React, { useEffect, useState } from 'react';
import ShowStreetFood from './ShowExtraSection/ShowStreetFood';

const StreetFood = () => {

    let [food, setFood] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-server-sifat-e-sadakin.vercel.app/streetFood')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl font-semibold my-20'>From The Street </h1>

            <div className='grid md:grid-cols-3 gap-7'>
                {
                    food.map(item => <ShowStreetFood key={item.id} item={item}></ShowStreetFood>)
                }
            </div>

        </div>
    );
};

export default StreetFood;