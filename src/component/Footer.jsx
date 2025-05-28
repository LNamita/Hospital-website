import React from 'react';
// Assuming these icons are imported from a library like 'lucide-react' or similar
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-[#121D38] text-white pt-24 pb-20 mt-[2rem] rounded-2xl">            {/* Top Section - Contact Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  relative z-10">
                {/* Changes here: increased vertical padding 'py-16' to 'py-20' or 'py-24' as needed */}
                <div className="bg-[#bbafd3] rounded-2xl px-8 py-20 md:px-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg text-gray-800">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-3 rounded-full text-white">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Emergency Line</p>
                            <p className="text-gray-600">+91 9876543212</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-3 rounded-full text-white">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Support Email</p>
                            <p className="text-gray-600">support@aarogya.com</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-3 rounded-full text-white">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Visit Us On</p>
                            <p className="text-gray-600">Innov8 Orchid Center India, 122001</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Aarogya Global Section */}
                <div className="flex flex-col items-start">
                    <a href="#" className="flex items-center text-white font-bold text-2xl mb-4">
                        AAROGYA <span className="text-white ml-1">GLOBAL</span>
                    </a>
                    <p className="text-white text-base leading-relaxed mb-6">
                        We strive to create a welcoming environment where patients feel valued, respected, and well-informed about their health.
                    </p>
                    <div className="flex space-x-4 mb-6">
                        <div>
                            <p className="text-white text-sm font-bold mt-2">Follow us:</p>
                        </div>
                        <div className="flex space-x-3">
                            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-200">
                                <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-200">
                                <Twitter className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-200">
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-200">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-5 relative">
                        Quick Links
                        <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-[#28b075]"></span> {/* Green underline */}
                    </h3>
                    <ul className="space-y-3 text-white">
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Medical Directory</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Top Doctors</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Latest News</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Why Choose Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-bold mb-5 relative">
                        Useful Links
                        <span className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-[#28b075]"></span> {/* Green underline */}
                    </h3>
                    <ul className="space-y-3 text-white">
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Featured Hospitals</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">How It Works</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Find A Location</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Doctors Search</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Telemedicine Services</a></li>
                    </ul>
                </div>

                {/* Subscribe Newsletter */}
                <div>
                    <h3 className="text-lg font-bold mb-5 relative">
                        Subscribe Newsletter
                        <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-[#28b075]"></span> {/* Green underline */}
                    </h3>
                    <p className="text-white text-base mb-4">
                        Sign up for our newsletter to latest weekly updates & news
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow p-3 rounded-l-full bg-[#1e2a4a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-600"
                        />
                        <button className="bg-[#28b075] p-3 rounded-r-full hover:bg-[#229a65] transition-colors duration-200">
                            <Send className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                {/* Add copyright text here if desired */}
                <p>&copy; {new Date().getFullYear()} Aarogya Global. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;