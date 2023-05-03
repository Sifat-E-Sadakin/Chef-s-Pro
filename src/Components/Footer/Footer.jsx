import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10  bg-primary text-black py-20'>

            <div className='container mx-auto  grid grid-cols-2 gap-5 p-2 md:flex md:justify-between'>
                <div>
                    <h2 className='text-2xl py-2 font-semibold'>Chef's Pro</h2>
                    <p className='text-sm   py-2'>You can rely on them</p>
                    <div>
                        <img src="/public/assets/Icons/Group 9969.png" alt="" />
                    </div>


                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Company</h2>
                    <p className='text-sm my-2'>About Us</p>
                    <p className='text-sm my-2'>Work</p>
                    <p className='text-sm my-2'>Latest News</p>
                    <p className='text-sm my-2'>Careers</p>



                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Product</h2>
                    <p className='text-sm my-2'>Prototype</p>
                    <p className='text-sm my-2'>Plan & Pricing</p>
                    <p className='text-sm my-2'>Customers</p>
                    <p className='text-sm my-2'>Integrations</p>

                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Support</h2>
                    <p className='text-sm my-2'>Help Desk</p>
                    <p className='text-sm my-2'>Sales</p>
                    <p className='text-sm my-2'>Become a Partner</p>
                    <p className='text-sm my-2'>Developers</p>

                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Contact</h2>
                    <p className='text-sm my-2'>Near Your Home, 24/7</p>
                    <p className='text-sm my-2'>+8801791507027</p>
                    <p className='text-sm my-2'>+8801644997904</p>
                    <p className='text-sm my-2'>sifat.e.sadakin@g.bracu.ac.bd</p>

                </div>



            </div>
            <hr className='text-white bg-white my-5 container mx-auto' />

            <div className='container mx-auto md:flex justify-between'>
                <p><small>@ <b>Chef's Pro.</b> All Right Reserved</small></p>
                <p>Powered by <b>Sifat-E-Sadakin</b></p>
            </div>


        </div>
    );
};

export default Footer;