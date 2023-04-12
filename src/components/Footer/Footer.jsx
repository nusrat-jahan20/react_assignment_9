import React from 'react';
import SocialMedia from '../../assets/Icons/Group 9969.png'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className="my-container">
                <div className="grid lg:grid-cols-6 sm:grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="col-span-2">
                        <h1 className='font-bold text-3xl mb-6'>JobBox</h1>
                        <p className='text-slate-400 mb-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img src={SocialMedia} alt="" />
                    </div>
                    <div>
                        <h3 className='font-medium text-xl mb-6'>Company</h3>
                        <ul className='text-slate-400'>
                            <li className='cursor-pointer mb-4'>About Us</li>
                            <li className='cursor-pointer mb-4'>Work</li>
                            <li className='cursor-pointer mb-4'>Latest News</li>
                            <li className='cursor-pointer mb-4'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-medium text-xl mb-6'>Product</h3>
                        <ul className='text-slate-400'>
                            <li className='cursor-pointer mb-4'>Prototype</li>
                            <li className='cursor-pointer mb-4'>Plans & Pricing</li>
                            <li className='cursor-pointer mb-4'>Customers</li>
                            <li className='cursor-pointer mb-4'>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-medium text-xl mb-6'>Support</h3>
                        <ul className='text-slate-400'>
                            <li className='cursor-pointer mb-4'>Help Desk</li>
                            <li className='cursor-pointer mb-4'>Sales</li>
                            <li className='cursor-pointer mb-4'>Become a Partner</li>
                            <li className='cursor-pointer mb-4'>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-medium text-xl mb-6'>Contact</h3>
                        <ul className='text-slate-400'>
                            <li className='cursor-pointer mb-4'>524 Broadway , NYC</li>
                            <li className='cursor-pointer mb-4'>+1 777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>
                <hr className='my-14' />
                <div className='flex justify-between text-slate-500'>
                    <div>
                        <p>@2023 CareerHub. All Rights Reserved</p>
                    </div>
                    <div>
                        <p>Powered by CareerHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;