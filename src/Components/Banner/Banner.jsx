import React from 'react';
import banner from './../../../public/2210.i605.033.S.m005.c13.culinary classes illustration.jpg'
import LazyLoad from 'react-lazy-load';
const Banner = () => {
    return (
        <div className=''>
            <div className='text-center my-12'>
                <h1 className='text-3xl lg:text-5xl  font-semibold '>All Chef's Are Pro Here</h1>
                <p className='text-2xl lg:text-3xl'>You can rely on them</p>
            </div>
            <LazyLoad >
            <img src={banner} className='' alt="" />

            </LazyLoad>
            
            
            
        </div>
    );
};

export default Banner;