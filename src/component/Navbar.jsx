import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../slice/auth';
import { removeItem } from './helpers/Helpers';

function Navbar(props) {
    const {loggedIn, user} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const logoutHandler = () => {
        dispatch(logoutUser())
       removeItem('token')
       navigate('/login')
    }
    return (
<div className="flex flex-col items-center justify-center" x-cloak x-data="appData()" x-init="appInit()">
    <div className="flex flex-col">
        {/* <!-- Page Scroll Progress --> */}
        <div className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5
            bg-blue-500"></div>

        {/* // <!-- Navbar --> */}
        <nav className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10">

            {/* <!-- Logo Container --> */}
            <div className="flex items-center">
                {/* <!-- Logo --> */}
                <Link className="cursor-pointer">
                    <h3 className="text-2xl font-medium text-blue-500">
                        <img className="h-10 object-cover"
                            src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" alt="Store Logo" />
                    </h3>
                </Link>
            </div>

            {/* <!-- Links Section --> */}
            <div className="items-center hidden space-x-8 lg:flex">
                <Link to={'/'} className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Home
                </Link>
                {loggedIn ? 
            (
                <>
                <p className='flex text-gray-600 hover:text-blue-500
                cursor-pointer transition-colors duration-300'>{user.username}</p>
                <button className="py-1 px-3 border-red-400 text-red-400 hover:bg-red-300 hover:text-white rounded-md border" onClick={logoutHandler}>SignUp</button>
                </>
            ) : (
              <>
               <Link to={'/login'} className="flex text-gray-600 
                cursor-pointer transition-colors duration-300
                font-semibold
                Themes">Login
            </Link>

            <Link to={'/register'} className="flex text-gray-600 hover:text-blue-500
                cursor-pointer transition-colors duration-300">
                Register
            </Link>
              </>
            )    
            }
            </div>
        </nav>
    </div>
    </div>
    );
}

export default Navbar;