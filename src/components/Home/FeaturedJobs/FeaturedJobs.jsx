import React, { useState } from 'react';
import Job from './Job/Job';

const FeaturedJobs = ({ featuredJobs }) => {
    const [showAllJobs, setShowAllJobs] = useState(false);
    const jobsToShow = showAllJobs ? featuredJobs : featuredJobs.slice(0, 4);

    return (
        <div className='my-container flex flex-col items-center justify-between'>
            <div className='text-center'>
                <h1 className='font-bold lg:text-5xl md:text-4xl sm:text-3xl'>Discover the Cosmic Careers at CareerCrate!</h1>
                <p className='text-lg my-9 pb-5'>Browse Our Featured Jobs and Explore the Vastness of Your Career Possibilities!</p>
            </div>
            <div className='grid gap-10 mb-8 lg:grid-cols-2 sm:grid-cols-1'>
                {jobsToShow.map((featuredJob, idx) => (
                    <Job key={idx} featuredJob={featuredJob} />
                ))}
            </div>
            {!showAllJobs && <button className='bg-indigo-500 hover:bg-indigo-700 px-6 py-3 rounded-md text-white font-bold tracking-wide' onClick={() => setShowAllJobs(true)}>See All Jobs</button>}
        </div>
    );
};

export default FeaturedJobs;
