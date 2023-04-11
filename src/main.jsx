import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: 'job_details',
                element: <JobDetails></JobDetails>,
            },
            {
                path: 'applied_jobs',
                element: <AppliedJobs></AppliedJobs>,
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '*',
                element: <div>44444444444440444444444444</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
