import React from 'react';
import JobCat from './JobCat/JobCat';

const JobCatList = (jobCategories) => {
    return (
        <div>
            <div>
                <h1>Explore CareerCrate's Job Universe!</h1>
                <p>Find Your Dream Job in Our Multiverse of Opportunities!</p>
            </div>
            <div>
                {jobCategories.jobCategories.map((jobCategory, idx) => (
                    <JobCat key={idx} jobCategory={jobCategory}></JobCat>
                ))}
            </div>
        </div>
    );
};

export default JobCatList;
