import React from 'react';
import Banner from './Banner/Banner';
import JobCatList from './JobCatList/JobCatList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobCategories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <JobCatList jobCategories={jobCategories}></JobCatList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
