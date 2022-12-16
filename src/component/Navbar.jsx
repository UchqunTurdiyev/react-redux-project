import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
<div class="flex flex-col items-center justify-center" x-cloak x-data="appData()" x-init="appInit()">
    <div class="flex flex-col">
        {/* <!-- Page Scroll Progress --> */}
        <div class="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5
            bg-blue-500"></div>

        {/* // <!-- Navbar --> */}
        <nav class="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10">

            {/* <!-- Logo Container --> */}
            <div class="flex items-center">
                {/* <!-- Logo --> */}
                <Link class="cursor-pointer">
                    <h3 class="text-2xl font-medium text-blue-500">
                        <img class="h-10 object-cover"
                            src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" alt="Store Logo" />
                    </h3>
                </Link>
            </div>

            {/* <!-- Links Section --> */}
            <div class="items-center hidden space-x-8 lg:flex">
                <Link to={'/'} class="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                    Home
                </Link>

                <Link to={'/login'} class="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                    font-semibold
                    Themes">Login
                </Link>

                <Link to={'/register'} class="flex text-gray-600 hover:text-blue-500
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