// // HospitalSearchSection.js
// import React, { useState } from 'react';
// import { Heart, Share2, Star, ArrowRight, Users, MapPin, Thermometer, Stethoscope } from 'lucide-react';

// const HospitalCard = ({ hospital, onLike, onShare }) => {
//     return (
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
//             <div className="md:w-1/2 relative">
//                 <div className='h-full p-2 rounded-lg'>

//                     <img
//                         src={hospital.image}
//                         alt={`${hospital.name} image`}
//                         className="w-full rounded-xl  object-cover md:h-full"
//                     />
//                 </div>
//                 <div className="absolute top-4 left-4 flex space-x-2">
//                     <button
//                         aria-label={`Share ${hospital.name}`}
//                         onClick={() => onShare(hospital.name)}
//                         className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-indigo-600"
//                     >
//                         <Share2 className="w-5 h-5" />
//                     </button>
//                     <button
//                         aria-label={`Like ${hospital.name}`}
//                         onClick={() => onLike(hospital.id)}
//                         className={`bg-white p-2 rounded-full shadow-md transition-colors duration-200 ${hospital.isLiked
//                             ? 'text-red-500'
//                             : 'text-gray-600 hover:text-red-500'
//                             }`}
//                     >
//                         <Heart
//                             className="w-5 h-5"
//                             fill={hospital.isLiked ? 'currentColor' : 'none'}
//                         />
//                     </button>
//                 </div>
//             </div>
//             <div className="p-6 flex flex-col justify-between md:w-1/2">
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="bg-green-500 text-white text-md font-bold px-3 py-2 rounded-md">
//                         Hospital
//                     </span>
//                     <div className="flex items-center text-gray-600 text-base">
//                         <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
//                         <span>{hospital.rating}</span>
//                     </div>
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{hospital.name}</h3>

//                 <p className="text-gray-600 text-md flex items-center mb-2">
//                     <MapPin className="w-6 h-6 mr-2 text-gray-500" />
//                     {hospital.location}
//                 </p>

//                 <div className="flex gap-2 mb-4">
//                     {hospital.hasEmergency && (
//                         <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
//                             Emergency
//                         </span>
//                     )}
//                     {hospital.hasParkade && (
//                         <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
//                             Parking
//                         </span>
//                     )}
//                 </div>

//                 <div className="flex justify-between items-center">
//                     <a
//                         href="#"
//                         className="text-indigo-600 flex items-center space-x-2 hover:text-indigo-800 bg-indigo-100 rounded-lg p-2"
//                     >
//                         <span className="font-semibold text-sm md:text-md">Book Today</span>
//                         <ArrowRight className="w-4 h-4" />
//                     </a>
//                     <p className="text-gray-600 text-xs md:text-sm flex items-center gap-2">
//                         <Stethoscope className="w-6 h-6 text-gray-500" />
//                         <span>{hospital.doctorsCount} Doctors</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };


// function HospitalSearchSection({hospitals}) {


  

//     const handleLikeToggle = (id) => {
//         setHospitalData((prevData) =>
//             prevData.map((hospital) =>
//                 hospital.id === id ? { ...hospital, isLiked: !hospital.isLiked } : hospital
//             )
//         );
//     };

//     const handleShare = (hospitalName) => {
//         alert(`Sharing ${hospitalName}! (This would open a share dialog)`);
//         // In a real app, you'd use navigator.share or a custom share modal
//     };

//     return (
//         <section className="gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-md mx-2 sm:mx-4 md:mx-8 lg:mx-10 my-3 sm:my-4 md:my-5">
           
//         </section>
//     );
// }

// export default HospitalSearchSection;