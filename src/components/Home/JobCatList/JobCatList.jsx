import React from 'react';
import JobCat from './JobCat/JobCat';

const JobCatList = (jobCategories) => {
    return (
        <div className='my-container flex flex-col items-center justify-between sm:mt-44 md:mt-80 lg:mt-0'>
            <div className='text-center'>
                <h1 className='font-bold lg:text-5xl md:text-4xl sm:text-3xl'>Explore JobBox's Job Universe!</h1>
                <p className='text-base my-9'>Find Your Dream Job in Our Multiverse of Opportunities!</p>
            </div>
            <div className='grid gap-20 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
                {jobCategories.jobCategories.map((jobCategory, idx) => (
                    <JobCat key={idx} jobCategory={jobCategory}></JobCat>
                ))}
            </div>
        </div>
    );
};

export default JobCatList;
