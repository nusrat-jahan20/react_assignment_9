import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';

const Job = (featuredJob) => {
    // console.log(featuredJob.featuredJob.company_logo);
    return (
        <div className='w-full outline outline-2 outline-slate-200 py-10 px-16 rounded-md tracking-wide'>
            <img className='h-16 mb-3'
                src={featuredJob.featuredJob.companyLogo}
                alt={featuredJob.featuredJob.companyName}
            />
            <h4 className='text-3xl font-bold py-3'>{featuredJob.featuredJob.jobTitle}</h4>
            <span className='text-slate-500'>{featuredJob.featuredJob.companyName}</span>
            <div className='my-5 cursor-pointer'>
                <span className='outline outline-1 outline-indigo-500 px-5 py-2 rounded-md text-indigo-500 font-bold mr-7'>{featuredJob.featuredJob.remoteOrOnsite}</span>
                <span className='outline outline-1 outline-indigo-500 px-5 py-2 rounded-md text-indigo-500 font-bold'>{featuredJob.featuredJob.fulltimeOrParttime}</span>
            </div>
            <div className='text-slate-500 pt-2 pb-4'>
                <FontAwesomeIcon className='text-slate-400 pr-3' icon={faLocationDot} />
                <span className='pr-5'>{featuredJob.featuredJob.location}</span>
                <FontAwesomeIcon className='text-slate-400 pr-3' icon={faCircleDollarToSlot} />
                <span>{featuredJob.featuredJob.salary}</span>
            </div>
            <button className='bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded-md text-white font-bold tracking-wide'>View Details</button>
        </div>
    );
};

export default Job;
