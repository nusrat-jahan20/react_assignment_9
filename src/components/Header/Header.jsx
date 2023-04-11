import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  CubeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          <CubeIcon className='h-6 w-6 text-blue-500' />
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
            JobBox
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}>
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/applied_jobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}>
              Applied Jobs            
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blogs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}>
              Blogs          
            </NavLink>
          </li>
        </ul>

        {/* start applying button */}
        <button className='bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded-md text-white font-bold tracking-wide'>Start Applying</button>

        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}>
            <Bars3Icon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <CubeIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                          JobBox
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/applied_jobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blogs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </nav>
                <button className='bg-indigo-400 hover:bg-indigo-700 px-4 py-2 rounded-md text-white font-bold tracking-wide mt-3 '>Start Applying</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default Header;