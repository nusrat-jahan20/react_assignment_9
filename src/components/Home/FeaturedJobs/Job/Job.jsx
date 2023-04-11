import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';

const Job = (featuredJob) => {
    // console.log(featuredJob.featuredJob.company_logo);
    return (
        <div>
            <img
                src={featuredJob.featuredJob.companyLogo}
                alt={featuredJob.featuredJob.companyName}
            />
            <h4>{featuredJob.featuredJob.jobTitle}</h4>
            <span>{featuredJob.featuredJob.companyName}</span>
            <div>
                <span>{featuredJob.featuredJob.remoteOrOnsite}</span>
                <span>{featuredJob.featuredJob.fulltimeOrParttime}</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{featuredJob.featuredJob.location}</span>
                <FontAwesomeIcon icon={faCircleDollarToSlot} />
                <span>{featuredJob.featuredJob.salary}</span>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default Job;
