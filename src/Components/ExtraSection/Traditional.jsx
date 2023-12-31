import React, { useEffect, useState } from 'react';
import ShowTraditional from './ShowExtraSection/ShowTraditional';

const Traditional = () => {

    let [food, setFood] = useState([])

    useEffect(()=>{
        fetch('https://assignment-10-server-sifat-e-sadakin.vercel.app/traditional')
        .then(res=>res.json())
        .then(data => setFood(data))
    },[])
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl font-semibold my-20'>Traditional </h1>

            <div className='grid md:grid-cols-3 gap-7'>
                {
                    food.map(item=> <ShowTraditional key={item.id} item={item}></ShowTraditional>)
                }
            </div>

        </div>
    );
};

export default Traditional;