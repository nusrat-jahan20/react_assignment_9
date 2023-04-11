import React from 'react';

const JobCat = (jobCategory) => {
    const { name, logo, jobs_available } = jobCategory.jobCategory;

    return (
        <div>
            <div>
                <img src={logo} alt={name} />
                <h4>{name}</h4>
                <p>{jobs_available} Jobs Available</p>
            </div>
        </div>
    );
};

export default JobCat;
