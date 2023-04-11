import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import JobCatList from './JobCatList/JobCatList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobCategories = useLoaderData();
    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(() => {
        fetch('featured_jobs.json')
            .then((res) => res.json())
            .then((data) => setFeaturedJobs(data));
    }, []);

    return (
        <div>
            <Banner></Banner>
            <JobCatList jobCategories={jobCategories}></JobCatList>
            <FeaturedJobs featuredJobs={featuredJobs}></FeaturedJobs>
        </div>
    );
};

export default Home;
