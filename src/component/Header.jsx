// // "use client";
// // import { useState } from "react";
// // import { Mail, MapPin, PhoneCall, ArrowRight } from "lucide-react";

// // export default function Header() {
// //     const [active, setActive] = useState("Home");

// //     const navItems = ["Home", "About", "Pages", "Doctors", "Hospitals", "Blog", "Contact"];

// //     return (
// //         <div className="w-full">
// //             {/* Top Bar */}
// //             <div className="bg-blue-900 text-white text-sm py-2 px-4 flex justify-between items-center">
// //                 <span>Caring Today for a Healthier Tomorrow and Forever</span>
// //                 <button className="flex items-center space-x-1 hover:underline">
// //                     <span>Find A Doctor</span>
// //                     <ArrowRight size={16} />
// //                 </button>
// //             </div>

// //             {/* Header Section */}
// //             <div className="flex flex-wrap justify-between items-center p-4 border-b">
// //                 <div className="flex items-center space-x-2">
// //                     <img src="https://aarogya.com/logo.png" alt="Logo" className="w-10 h-10" />
// //                     <h1 className="text-2xl font-bold text-blue-900">AAROGYA GLOBAL</h1>
// //                 </div>

// //                 <div className="hidden md:flex space-x-8 text-sm text-blue-900">
// //                     <div className="flex items-center space-x-2">
// //                         <PhoneCall size={16} />
// //                         <span>+91 9876543212</span>
// //                     </div>
// //                     <div className="flex items-center space-x-2">
// //                         <Mail size={16} />
// //                         <span>support@aarogya.com</span>
// //                     </div>
// //                     <div className="flex items-center space-x-2">
// //                         <MapPin size={16} />
// //                         <span>Innov8 Orchid Center India, 122001</span>
// //                     </div>
// //                 </div>

// //                 <div className="flex items-center space-x-4 mt-2 md:mt-0">
// //                     <a href="/login" className="text-blue-900 font-semibold hover:underline">
// //                         Login/Register
// //                     </a>
// //                     <button className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 flex items-center gap-1">
// //                         Make An Appointment <ArrowRight size={16} />
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* Nav Bar */}
// //             <nav className="flex flex-wrap justify-center space-x-6 py-3 text-blue-900 font-semibold text-sm border-b">
// //                 {navItems.map((item) => (
// //                     <div
// //                         key={item}
// //                         onClick={() => setActive(item)}
// //                         className={`cursor-pointer hover:text-emerald-500 ${active === item ? "text-emerald-600" : ""}`}
// //                     >
// //                         {item}
// //                     </div>
// //                 ))}
// //             </nav>

// //             {/* Hero Section */}
// //             <div className="relative w-full h-[30rem] overflow-hidden">
// //                 <img
// //                     src="https://www.praktischarzt.de/wp-content/uploads/2023/03/Becoming-a-medical-doctor-or-physician-in-Germany.jpg"
// //                     alt="Hospital Staff"
// //                     className="w-full h-full object-cover rounded-b-xl"
// //                 />
// //                 <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
// //                     <h2 className="text-3xl font-bold">Hospital Search</h2>
// //                     <div className="mt-2 text-sm">
// //                         <span className="text-gray-300">Home</span> / <span className="text-emerald-400">Hospital Search</span>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { FiUser } from "react-icons/fi";

// function App() {
//   return (
//     <div className="font-sans">
//       {/* Top blue strip */}
//       <div className="bg-[#020c3d] text-white text-sm py-2 px-4 flex justify-between items-center">
//         <p>Caring Today for a Healthier Tomorrow and Forever</p>
//         <div className="flex items-center gap-2">
//           <span className="font-semibold">Find A Doctor</span>
//           <span>➡️</span>
//         </div>
//       </div>

//       {/* Logo + Contact Info */}
//       <div className="bg-white py-4 px-6 shadow-sm">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//           {/* Logo */}
//           <div className="text-3xl font-bold text-blue-900">AAROGYA <span className="text-gray-600">GLOBAL</span></div>

//           {/* Contact Info */}
//           <div className="flex flex-wrap gap-6 justify-center md:justify-end text-sm text-gray-700">
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt className="text-blue-600" />
//               <div>
//                 <div className="font-medium">Emergency Line</div>
//                 <div className="font-semibold text-blue-900">+91 9876543212</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaEnvelope className="text-blue-600" />
//               <div>
//                 <div className="font-medium">Support Email</div>
//                 <div className="font-semibold text-blue-900">support@aarogya.com</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaMapMarkerAlt className="text-blue-600" />
//               <div>
//                 <div className="font-medium">Visit Us On</div>
//                 <div className="font-semibold text-blue-900">Innov8 Orchid Center India, 122001</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <div className="border-t border-gray-200 bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
//           {/* Menu Links */}
//           <div className="flex flex-wrap gap-6 text-sm font-semibold text-blue-900">
//             <a href="#">Home +</a>
//             <a href="#">About</a>
//             <a href="#">Pages +</a>
//             <a href="#">Doctors +</a>
//             <a href="#" className="text-green-500">Hospitals +</a>
//             <a href="#">Blog +</a>
//             <a href="#">Contact</a>
//           </div>

//           {/* Right Buttons */}
//           <div className="flex items-center gap-4 mt-4 md:mt-0">
//             <a href="#" className="flex items-center gap-1 text-sm text-blue-900 font-semibold">
//               <FiUser /> Login/Register
//             </a>
//             <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
//               Make An Appointment ➡️
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

function Header() {
  return (
    <div className="font-sans">
      {/* Top blue strip */}
      <div className="bg-[#020c3d] text-white text-sm py-2 px-4 flex justify-between items-center">
        <p>Caring Today for a Healthier Tomorrow and Forever</p>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Find A Doctor</span>
          <span>➡️</span>
        </div>
      </div>

      {/* Logo + Contact Info */}
      <div className="bg-white py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-3xl font-bold text-blue-900">
            AAROGYA <span className="text-gray-600">GLOBAL</span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-end text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" />
              <div>
                <div className="font-medium">Emergency Line</div>
                <div className="font-semibold text-blue-900">+91 9876543212</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <div>
                <div className="font-medium">Support Email</div>
                <div className="font-semibold text-blue-900">support@aarogya.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <div>
                <div className="font-medium">Visit Us On</div>
                <div className="font-semibold text-blue-900">Innov8 Orchid Center India, 122001</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
          {/* Menu Links */}
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-blue-900">
            <a href="#">Home +</a>
            <a href="#">About</a>
            <a href="#">Pages +</a>
            <a href="#">Doctors +</a>
            <a href="#" className="text-green-500">Hospitals +</a>
            <a href="#">Blog +</a>
            <a href="#">Contact</a>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="flex items-center gap-1 text-sm text-blue-900 font-semibold">
              <FiUser /> Login/Register
            </a>
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
              Make An Appointment ➡️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
