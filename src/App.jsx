// import React, { useState } from 'react';
// import { Search, Heart, Share2, Phone, Mail, MapPin, ChevronDown, ChevronRight, Facebook, Twitter, Linkedin, Instagram, Youtube, User, Calendar, Book, Stethoscope, Hospital, FlaskConical, Syringe, Brain, Bone, Eye, Ear, Baby, Scale, HeartPulse } from 'lucide-react';

// // Main App component
// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 font-inter bg-red text-gray-800">
//       <Header />
//       <main>
//         <HeroSection />
//         <SpecialtiesSection />
//         <FeaturedHospitalsSection />
//         <CallbackRequestForm />
//         <TrustedBySection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// // Header Component
// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'About', href: '#' },
//     { name: 'Pages', href: '#', hasDropdown: true },
//     { name: 'Doctors', href: '#', hasDropdown: true },
//     { name: 'Hospitals', href: '#', hasDropdown: true },
//     { name: 'Blog', href: '#', hasDropdown: true },
//     { name: 'Contact', href: '#' },
//   ];

//   return (
//     <header className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
//         {/* Top Contact Info */}
//         <div className="w-full lg:w-auto flex justify-between items-center lg:block mb-4 lg:mb-0">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center text-sm text-gray-600">
//               <Phone className="w-4 h-4 mr-2 text-indigo-600" />
//               Emergency Line: +91 9876543212
//             </div>
//             <div className="flex items-center text-sm text-gray-600">
//               <Mail className="w-4 h-4 mr-2 text-indigo-600" />
//               Support Email: support@aarogya.com
//             </div>
//           </div>
//         </div>

//         {/* Main Navigation */}
//         <nav className="w-full lg:w-auto flex items-center justify-between lg:justify-end">
//           <div className="flex items-center space-x-4">
//             <a href="#" className="flex items-center text-indigo-600 font-bold text-xl">
//               AAROGYA <span className="text-gray-800 ml-1">GLOBAL</span>
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>

//           {/* Desktop Navigation */}
//           <ul className="hidden lg:flex items-center space-x-6 ml-8">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 flex items-center"
//                 >
//                   {link.name} {link.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 flex items-center">
//                 <User className="w-5 h-5 mr-1" /> Login/Register
//               </a>
//             </li>
//             <li>
//               <button className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-220 flex items-center">
//                 <Calendar className="w-4 h-4 mr-2" /> Make An Appointment
//               </button>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden w-full mt-4 bg-gray-50 rounded-md shadow-lg">
//             <ul className="py-2">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between"
//                   >
//                     {link.name} {link.hasDropdown && <ChevronRight className="w-4 h-4" />}
//                   </a>
//                 </li>
//               ))}
//               <li>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
//                   <User className="w-5 h-5 mr-1" /> Login/Register
//                 </a>
//               </li>
//               <li>
//                 <button className="w-full text-left bg-indigo-600 text-white px-4 py-2 mt-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center">
//                   <Calendar className="w-4 h-4 mr-2" /> Make An Appointment
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// // Hero Section Component
// function HeroSection() {
//   return (
//     <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-3xl">
//       <div className="max-w-7xl mx-auto text-center relative z-10">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
//           Caring Today for a Healthier Tomorrow and Forever
//         </h1>
//         <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
//           Find A Doctor, Treatment, or Facility with Ease.
//         </p>

//         {/* Search Form */}
//         <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Hospital Search</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Type A Name"
//                 className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
//               />
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             </div>
//             <div className="relative">
//               <select className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 appearance-none">
//                 <option>Select Treatment</option>
//                 <option>Cardiology</option>
//                 <option>Neurology</option>
//                 <option>Dermatology</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             </div>
//             <div className="relative">
//               <select className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 appearance-none">
//                 <option>Select Facility</option>
//                 <option>Hospital</option>
//                 <option>Clinic</option>
//                 <option>Lab</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             </div>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Type City Name"
//                 className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
//               />
//               <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             </div>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Hospital"
//                 className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
//               />
//               <Hospital className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             </div>
//             <button className="col-span-1 md:col-span-2 lg:col-span-1 bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200 font-semibold">
//               Search Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Specialties Section Component
// function SpecialtiesSection() {
//   const specialties = [
//     { name: 'Family Medicine', icon: <Stethoscope className="w-12 h-12 text-indigo-600" /> },
//     { name: 'Neurosurgery', icon: <Brain className="w-12 h-12 text-indigo-600" /> },
//     { name: 'Dermatologist', icon: <Eye className="w-12 h-12 text-indigo-600" /> },
//     { name: 'Neurologist', icon: <Syringe className="w-12 h-12 text-indigo-600" /> },
//     { name: 'Dentist', icon: <Bone className="w-12 h-12 text-indigo-600" /> }, // Changed Tooth to Bone
//     { name: 'Pediatrics', icon: <Baby className="w-12 h-12 text-indigo-600" /> },
//     { name: 'Chief Surgeon', icon: <FlaskConical className="w-12 h-12 text-indigo-600" /> },
//     { name: 'Cardiologist', icon: <HeartPulse className="w-12 h-12 text-indigo-600" /> },
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Specialties</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
//           {specialties.map((specialty, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center p-6 rounded-xl bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer text-center"
//             >
//               <div className="mb-4 rounded-full bg-indigo-100 p-4">
//                 {specialty.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">{specialty.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Hospital Card Component
// function HospitalCard({ name, rating, location, doctors, imageUrl }) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
//       <div className="relative h-48 w-full">
//         <img
//           src={imageUrl}
//           alt={name}
//           className="w-full h-full object-cover"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = `https://placehold.co/400x200/E0E7FF/4338CA?text=${name.replace(/\s/g, '+')}`;
//           }}
//         />

//         <div className="absolute top-4 right-4 flex space-x-2">
//           <button className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-indigo-600 transition-colors">
//             <Share2 className="w-5 h-5" />
//           </button>
//           <button className="bg-white p-2 rounded-full shadow-md text-red-500 hover:text-red-600 transition-colors">
//             <Heart className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//       <div className="p-6 flex flex-col flex-grow">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
//         <div className="flex items-center text-yellow-500 mb-2">
//           <span className="font-semibold mr-1">{rating}</span> Rating
//         </div>
//         <p className="text-gray-600 flex items-center mb-4">
//           <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
//           {location}
//         </p>
//         <div className="flex items-center text-gray-700 mb-4">
//           <Stethoscope className="w-4 h-4 mr-2 text-indigo-500" />
//           <span className="font-semibold">{doctors} Doctors</span>
//         </div>
//         <button className="mt-auto bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-200 font-semibold text-lg">
//           Book Today
//         </button>
//       </div>
//     </div>
//   );
// }

// // Featured Hospitals Section
// function FeaturedHospitalsSection() {
//   const hospitals = [
//     {
//       name: "Elite Urology Specialists",
//       rating: "1k+",
//       location: "Gurugram Harayana, INDIA",
//       doctors: 60,
//       imageUrl: "https://placehold.co/400x200/E0E7FF/4338CA?text=Elite+Urology"
//     },
//     {
//       name: "Rejuvenete Wellness Center",
//       rating: "3k+",
//       location: "Noida, UP, INDIA",
//       doctors: 34,
//       imageUrl: "https://placehold.co/400x200/E0E7FF/4338CA?text=Rejuvenete+Wellness"
//     },
//     {
//       name: "Percision Pain Management",
//       rating: "2k+",
//       location: "Delhi, INDIA",
//       doctors: 80,
//       imageUrl: "https://placehold.co/400x200/E0E7FF/4338CA?text=Percision+Pain"
//     },
//     {
//       name: "Wellness Path Chiropractor",
//       rating: "4k+",
//       location: "Gurugram Harayana, INDIA",
//       doctors: 30,
//       imageUrl: "https://placehold.co/400x200/E0E7FF/4338CA?text=Wellness+Path"
//     },
//     {
//       name: "Future Care Medical Center",
//       rating: "5k+",
//       location: "Noida, UP, INDIA",
//       doctors: 50,
//       imageUrl: "https://placehold.co/400x200/E0E7FF/4338CA?text=Future+Care"
//     },
//     {
//       name: "Quantam Care Hospital",
//       rating: "3k+",
//       location: "Gurugram Harayana, INDIA",
//       doctors: 45,
//       imageUrl: "https://placehold.co/400x200/E0E7FF/4338CA?text=Quantam+Care"
//     },
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Featured Hospitals</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {hospitals.map((hospital, index) => (
//             <HospitalCard key={index} {...hospital} />
//           ))}
//         </div>
//         <div className="flex justify-center mt-12 space-x-4">
//           <button className="p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
//             &lt;
//           </button>
//           <span className="p-3 rounded-full bg-indigo-600 text-white font-semibold">2</span>
//           <button className="p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
//             &gt;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Callback Request Form Component
// function CallbackRequestForm() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl bg-gray-50 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8">Can't find what you are looking for?</h2>
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
//           <div className="md:col-span-1">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
//             />
//           </div>
//           <div className="md:col-span-1">
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
//             />
//           </div>
//           <div className="md:col-span-2">
//             <input
//               type="email"
//               placeholder="Email (Optional)"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
//             />
//           </div>
//           <button className="md:col-span-2 bg-indigo-600 text-white py-3 rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-200 font-semibold text-lg flex items-center justify-center">
//             Request Callback <ChevronRight className="w-5 h-5 ml-2" />
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// // Trusted By Section Component
// function TrustedBySection() {
//   const logos = [
//     "https://placehold.co/150x50/E0E7FF/4338CA?text=Medixo",
//     "https://placehold.co/150x50/E0E7FF/4338CA?text=Mediweb",
//     "https://placehold.co/150x50/E0E7FF/4338CA?text=Labtox",
//     "https://placehold.co/150x50/E0E7FF/4338CA?text=Patholab",
//     "https://placehold.co/150x50/E0E7FF/4338CA?text=Medox",
//     "https://placehold.co/150x50/E0E7FF/4338CA?text=Medicross",
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-10">TRUSTED BY MORE THAN 100+ COMPANIES WORLDWIDE</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
//           {logos.map((logo, index) => (
//             <img
//               key={index}
//               src={logo}
//               alt={`Company Logo ${index + 1}`}
//               className="mx-auto h-12 object-contain rounded-md"
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// // Footer Component
// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//         {/* About Section */}
//         <div>
//           <a href="#" className="flex items-center text-white font-bold text-2xl mb-4">
//             AAROGYA <span className="text-indigo-400 ml-1">GLOBAL</span>
//           </a>
//           <p className="text-sm leading-relaxed mb-4">
//             We strive to create a welcoming environment where patients feel valued, respected, and well-informed about their health.
//           </p>
//           <div className="flex items-center text-sm mb-2">
//             <Phone className="w-4 h-4 mr-2 text-indigo-400" />
//             Emergency Line: +91 9876543212
//           </div>
//           <div className="flex items-center text-sm mb-2">
//             <Mail className="w-4 h-4 mr-2 text-indigo-400" />
//             Support Email: support@aarogya.com
//           </div>
//           <div className="flex items-center text-sm">
//             <MapPin className="w-4 h-4 mr-2 text-indigo-400" />
//             Visit Us On: Innov8 Orchid Center India, 122001
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
//           <ul className="space-y-3">
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Medical Directory</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Top Doctors</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Latest News</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Why Choose Us</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Contact</a></li>
//           </ul>
//         </div>

//         {/* Useful Links */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-6">Useful Links</h3>
//           <ul className="space-y-3">
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">How It Works</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Find A Location</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Doctors Search</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Telemedicine Services</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Terms & Conditions</a></li>
//           </ul>
//         </div>

//         {/* Subscribe Newsletter */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-6">Subscribe Newsletter</h3>
//           <p className="text-sm mb-4">Sign up for our newsletter to get latest weekly updates & news.</p>
//           <form className="flex flex-col sm:flex-row gap-2">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="flex-grow p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400"
//             />
//             <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200 font-semibold">
//               <Mail className="w-5 h-5" />
//             </button>
//           </form>
//           <div className="mt-8">
//             <h3 className="text-white font-semibold mb-3">Follow Us:</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
//                 <Facebook className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
//                 <Twitter className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
//                 <Linkedin className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
//                 <Instagram className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
//                 <Youtube className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
//         &copy; {new Date().getFullYear()} Aarogya Global. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default App;




// App.js (Updated)
import React from 'react';
// import TrustedBySection from './component/TrustedBySection'; // Import the new component
import Footer from './component/Footer'; // Assuming Footer is in Footer.js
import CopyrightBar from './component/CopyrightBar'; // Assuming CopyrightBar is in CopyrightBar.js
import TrustedBySection from './component/TrustedBySection';
import HospitalSearchSection from './component/HospitalSearchSection';
import HospitalMain from './component/HospitalMain';
import DoctorFeatureSection from './component/DoctorFeatureSection';
import SearchForm from './component/DoctorFeatureSection';
import HeroSection from './component/Herosection';
import Header from './component/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      <Header />
      <HeroSection/>
      <SearchForm />
      <HospitalMain />
      <HospitalSearchSection />
      <TrustedBySection /> {/* Add the TrustedBySection here */}
      <Footer />
      <CopyrightBar />
    </div>
  );
}

export default App;