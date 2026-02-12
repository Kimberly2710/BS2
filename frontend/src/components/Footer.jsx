import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component
 * 
 * Displays the footer section of the application.
 * Matches the official Swahili Pot Hub Foundation design.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a2357] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-black tracking-tighter">SWAHILIPOT</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Empowering youth through technology, arts, and entrepreneurship across East Africa.
                        </p>
                        <div className="flex space-x-5">
                            <a href="https://www.facebook.com/Swahilipothub/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://x.com/swahilipothub" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.instagram.com/swahilipothub/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/swahilipothub/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.youtube.com/@swahilipothubfoundation" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Programs Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Programs</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Mombasa Tourism Innovation Hub</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Arts & Culture</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Entrepreneurship</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Youth Mentorship</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/impact" className="text-gray-300 hover:text-white transition-colors text-sm">Our Impact</Link></li>
                            <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors text-sm">Our Team</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-gray-300 mt-1 shrink-0" />
                                <span className="text-gray-300 leading-snug">Opp. Governor's Office, Butterfly House,<br />Mombasa, Kenya</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-gray-300 shrink-0" />
                                <a href="mailto:info@swahilipothub.co.ke" className="text-gray-300 hover:text-white transition-colors">info@swahilipothub.co.ke</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-gray-300 shrink-0" />
                                <a href="tel:+254114635505" className="text-gray-300 hover:text-white transition-colors">+254 11 4635505</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p className="mb-4 md:mb-0">&copy; {currentYear} Swahili Pot Hub Foundation. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
