import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container'>
            <h1 className='py-8 text-slate-600 font-bolder text-3xl text-center'>Some Important Questions:</h1>

            <div className='bg-slate-100 py-8 px-10 rounded-md mb-8'>
                <h1 className='font-semibold text-2xl tracking-wider text-slate-600'><span className='font-bold text-slate-600'>Question:</span> When should we use context API?</h1>
                <p className='pt-5 pb-2'>
                    <span className='font-bold text-xl tracking-wider text-slate-600'>Answer:</span> {' '}
                    The Context API in React should be used when you need to pass data from a parent component to many levels of nested child components without having to pass props down manually at every level. We can use the Context API to create a context object that stores the shared data, and then provide it to the components that need it using a Provider component. The child components can then access the data using a Consumer component or the useContext hook.
                </p>
            </div>

            <div className='bg-slate-100 py-8 px-10 rounded-md mb-8'>
                <h1 className='font-semibold text-2xl tracking-wider text-slate-600'><span className='font-bold text-slate-600'>Question:</span> What is custom hook in react?</h1>
                <p className='pt-5 pb-2'>
                    <span className='font-bold text-xl tracking-wider text-slate-600'>Answer:</span> {' '}
                    A custom hook in React is a JavaScript function that starts with the prefix "use" and allows you to extract reusable logic from a component. Custom hooks let you reuse stateful logic across multiple components, without having to write the same code multiple times.

                    Custom hooks can be used to encapsulate functionality such as handling API requests, managing forms, handling authentication, or anything else that involves complex logic that is likely to be reused across multiple components.
                </p>
            </div>

            <div className='bg-slate-100 py-8 px-10 rounded-md mb-8'>
                <h1 className='font-semibold text-2xl tracking-wider text-slate-600'><span className='font-bold text-slate-600'>Question:</span> What is the use of useRef?</h1>
                <p className='pt-5 pb-2'>
                    <span className='font-bold text-xl tracking-wider text-slate-600'>Answer:</span> {' '}
                    The useRef hook in React is used to create a mutable reference to a DOM element or a value that persists across re-renders of a component. It can also be used to store any mutable value that you want to persist across re-renders, such as a previous state or a timer ID.
                </p>
            </div>

            <div className='bg-slate-100 py-8 px-10 rounded-md mb-8'>
                <h1 className='font-semibold text-2xl tracking-wider text-slate-600'><span className='font-bold text-slate-600'>Question:</span> What is the use of useMemo?</h1>
                <p className='pt-5 pb-2'>
                    <span className='font-bold text-xl tracking-wider text-slate-600'>Answer:</span> {' '}
                    The useMemo hook in React is used to memoize the result of a function call, which means that it caches the result of a function and returns the cached value if the inputs to the function have not changed. This can improve performance by avoiding unnecessary re-renders of components that depend on the result of the function.
                </p>
            </div>

        </div>
    );
};

export default Blogs;