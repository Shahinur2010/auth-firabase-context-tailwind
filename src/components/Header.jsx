import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className='mx-10' to='/'>Home</Link>
                <Link className='mx-10' to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;