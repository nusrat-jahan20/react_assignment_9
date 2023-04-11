import React from 'react';
import MyImage from '../../../assets/All_Images/big_man_pic.png';
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
            {/* Banner Text */}
            <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                <div className='max-w-xl mb-6 lg:mt-8'>
                    <h2 className='max-w-lg mb-6 font-sans lg:text-5xl text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none md:leading-9'>
                        One Step <br className='hidden md:block' /> Closer To Your <br className='hidden md:block' />
                        <span className='inline-block text-indigo-500'>Dream Job</span>
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <button className='bg-indigo-500 hover:bg-indigo-700  px-4 py-2 rounded-md text-white font-bold tracking-wide'>Get Started</button>
                </div>
            </div>
            {/* Banner Image*/}
            <div className='lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto lg:h-auto  sm:h-64'>
                <img src={MyImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;

