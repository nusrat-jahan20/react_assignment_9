import React from 'react';

const JobCat = (jobCategory) => {
    const { name, logo, jobs_available } = jobCategory.jobCategory;

    return (
        <div className='flex flex-col items-start bg-slate-100 py-8 ps-10 pr-20 rounded-lg'>
            <img className='bg-slate-200 p-2 rounded-md' src={logo} alt={name} />
            <h4 className='pt-4 pb-3'>{name}</h4>
            <p>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default JobCat;
