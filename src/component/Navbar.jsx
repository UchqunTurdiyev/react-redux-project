import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
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

                <Link to={'/login'} className="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                    font-semibold
                    Themes">Login
                </Link>

                <Link to={'/register'} className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Register
                </Link>
            </div>
        </nav>
    </div>
    </div>
    );
}

export default Navbar;