import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../UserProvider/UserProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {

    let { user, logout } = useContext(userContext);
    // console.log(user && user.photoURL);


    return (
        <div className='bg-gray-100  sticky top-0 z-10'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/signUp'>SignUp</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Chef's Pro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/recipes'>Chef Details</ActiveLink>

                        <ActiveLink to='/login'>Login</ActiveLink>
                        <ActiveLink to='/signUp'>SignUp</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>

                        {user && <button onClick={logout} >Sing Out</button>}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <img title={user.displayName} src={user.photoURL} className='rounded-full w-12'></img> : <Link className='btn btn-primary' to='/login'>Login</Link>}

                </div>
            </div>
        </div>
    );
};

export default Navbar;