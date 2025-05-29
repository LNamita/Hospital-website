import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-[#121D38] text-white pt-12 md:pt-24 pb-12 md:pb-20 mt-8 md:mt-[2rem] rounded-t-2xl">
            {/* Top Section - Contact Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-1 md:-mt-20">
                <div className="bg-[#b7ab9b] rounded-2xl px-6 py-8 md:px-12 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg text-gray-800">
                    {/* Emergency Line */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-2 md:p-3 rounded-full text-white">
                            <Phone className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-base md:text-lg">Emergency Line</p>
                            <p className="text-gray-600 text-sm md:text-base">+91 9876543212</p>
                        </div>
                    </div>

                    {/* Support Email */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-2 md:p-3 rounded-full text-white">
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-base md:text-lg">Support Email</p>
                            <p className="text-gray-600 text-sm md:text-base">support@aarogya.com</p>
                        </div>
                    </div>

                    {/* Visit Us */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-indigo-600 p-2 md:p-3 rounded-full text-white">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-base md:text-lg">Visit Us On</p>
                            <p className="text-gray-600 text-sm md:text-base">Innov8 Orchid Center India, 122001</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {/* Aarogya Global Section */}
                <div className="flex flex-col items-start">
                    <a href="#" className="flex items-center text-white font-bold text-xl md:text-2xl mb-3 md:mb-4">
                        AAROGYA <span className="text-white ml-1">GLOBAL</span>
                    </a>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                        We strive to create a welcoming environment where patients feel valued, respected, and well-informed about their health.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 md:mb-6">
                        <p className="text-white text-xs md:text-sm font-bold">Follow us:</p>
                        <div className="flex space-x-2 md:space-x-3">
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Instagram, label: "Instagram" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    className="bg-gray-700 hover:bg-indigo-600 p-2 rounded-full transition-colors duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-base md:text-lg font-bold mb-4 relative pb-2">
                        Quick Links
                        <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#28b075]"></span>
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                        {['Medical Directory', 'Top Doctors', 'Latest News', 'Why Choose Us', 'Contact'].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-200">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-base md:text-lg font-bold mb-4 relative pb-2">
                        Useful Links
                        <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#28b075]"></span>
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                        {['Featured Hospitals', 'How It Works', 'Find A Location', 'Doctors Search', 'Telemedicine Services'].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-200">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Subscribe Newsletter */}
                <div>
                    <h3 className="text-base md:text-lg font-bold mb-4 relative pb-2">
                        Subscribe Newsletter
                        <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#28b075]"></span>
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                        Sign up for our newsletter to latest weekly updates & news
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-grow p-2 md:p-3 rounded-l-full bg-[#1e2a4a] border border-gray-700 text-white placeholder-gray-400 text-sm md:text-base focus:outline-none focus:border-indigo-600"
                            aria-label="Email address for newsletter subscription"
                        />
                        <button
                            className="bg-[#28b075] p-2 md:p-3 rounded-r-full hover:bg-[#229a65] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#28b075]"
                            aria-label="Subscribe to newsletter"
                        >
                            <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </button>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;