import React, { useState } from 'react';
import Job from './Job/Job';

const FeaturedJobs = ({ featuredJobs }) => {
    const [showAllJobs, setShowAllJobs] = useState(false);
    const jobsToShow = showAllJobs ? featuredJobs : featuredJobs.slice(0, 4);

    return (
        <div>
            <div>
                <h1>Discover the Cosmic Careers at CareerCrate!</h1>
                <p>
                    Browse Our Featured Jobs and Explore the Vastness of Your Career Possibilities!
                </p>
            </div>
            <div>
                {jobsToShow.map((featuredJob, idx) => (
                    <Job key={idx} featuredJob={featuredJob} />
                ))}
            </div>
            {!showAllJobs && <button onClick={() => setShowAllJobs(true)}>See All Jobs</button>}
        </div>
    );
};

export default FeaturedJobs;
