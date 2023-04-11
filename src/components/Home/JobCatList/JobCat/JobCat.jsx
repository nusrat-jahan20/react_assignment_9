import React from 'react';

const JobCat = (jobCategory) => {
    const { name, logo, jobs_available } = jobCategory.jobCategory;

    return (
        <div className='flex flex-col items-start bg-slate-100 p-10 w-72 rounded-lg'>
            <img className='bg-slate-200 p-2 rounded-md mb-4' src={logo} alt={name} />
            <h4 className='font-bold text-2xl'>{name}</h4>
            <p className='mt-4 text-slate-500'>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default JobCat;
