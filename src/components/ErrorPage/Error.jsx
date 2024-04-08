import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h1 className='text-9xl font-bold mb-7'>Opps!!</h1>
            <Link to='/' className='text-xl font-semibold'>Go to Home</Link>
        </div>
    );
};

export default Error;