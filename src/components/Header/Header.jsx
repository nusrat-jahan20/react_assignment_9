import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
            <ActiveLink to="/job_details">Job details</ActiveLink>
            <ActiveLink to="/applied_jobs">Applied Jobs</ActiveLink>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
        </nav>
    );
};

export default Header;