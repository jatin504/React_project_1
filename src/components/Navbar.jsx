import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between py-4 px-10">
            
            <div className="cursor-pointer">
                <img src="/images/brand_logo.png" alt="Brand Logo" className="h-8 w-auto sm:h-11" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center justify-center gap-8 text-1xl font-semibold">
                <li className="cursor-pointer">Menu</li>
                <li className="cursor-pointer">Location</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            
            <button className="bg-red-600 px-3 py-2 rounded-lg text-white hidden md:block">
                Login
            </button>

          
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-100 md:hidden flex flex-col items-center space-y-4 py-4">
                    <a href="#" className="text-lg font-semibold">Menu</a>
                    <a href="#" className="text-lg font-semibold">Location</a>
                    <a href="#" className="text-lg font-semibold">About</a>
                    <a href="#" className="text-lg font-semibold">Contact</a>
                    <button className="bg-red-600 px-3 py-2 rounded-lg text-white">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
