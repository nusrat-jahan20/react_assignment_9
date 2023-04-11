import React from 'react';
import Banner from './Banner/Banner';
import JobCatList from './JobCatList/JobCatList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCatList></JobCatList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;