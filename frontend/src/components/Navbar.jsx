import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, User } from 'lucide-react';

/**
 * Navbar Component
 * 
 * Displays the main navigation bar for the application.
 * Includes logo, navigation links, and "Book Now" CTA.
 * Responsive design with mobile menu toggle.
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Navigation links configuration
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Our Venues', path: '/venues' },
        { name: 'About Us', path: '/about' },
        { name: 'My Bookings', path: '/my-bookings' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            {/* Placeholder for Logo - In a real app, this would be an img tag */}
                            <div className="w-10 h-10 bg-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-serif font-bold text-xl">
                                S
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-xl text-primary leading-none">Swahili Pot</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Event Booking</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                        ? 'text-primary'
                                        : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA & User */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-gray-600 hover:text-primary p-2">
                            <User size={20} />
                        </Link>
                        <Link
                            to="/venues"
                            className="bg-primary hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2"
                        >
                            <Calendar size={18} />
                            <span>Book Now</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path)
                                        ? 'bg-red-50 text-primary'
                                        : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/venues"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 bg-primary text-white px-4 py-3 rounded-lg font-medium shadow-md"
                        >
                            Book A Venue
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
