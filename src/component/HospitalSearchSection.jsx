// HospitalSearchSection.js
import React, { useState } from 'react';
import { Heart, Share2, Star, ArrowRight, Users, MapPin, Thermometer, Stethoscope } from 'lucide-react';

function HospitalSearchSection() {
    const allHospitalCards = [
        {
            id: 1,
            image: 'https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=', // Light Blue
            name: 'Future Care Medical Center',
            rating: '5k+ Rating',
            location: 'Noida, UP, INDIA',
            doctorsCount: 50,
            hasParkade: true,
            hasEmergency: true,
            isLiked: false, // Initial like state
        },
        {
            id: 2,
            image: 'https://content.jdmagicbox.com/v2/comp/mumbai/m4/022pxx22.xx22.220106172311.y9m4/catalogue/quantum-hitech-imaging-mira-road-thane-pathology-labs-yt8f41kcst.jpg', // Light Green
            name: 'Quantam Care Hospital',
            rating: '3k+ Rating',
            location: 'Gurugram Harayana, INDIA',
            doctorsCount: 45,
            hasParkade: false, // Example: this hospital doesn't have Parkade
            hasEmergency: true,
            isLiked: true, // Example: this one is liked by default
        },
        {
            id: 3,
            image: 'https://peacemedicaltourism.com/assets/uploads/editor/Apollo_Hospital_in_Delhi1.jpg', // Light Sea Green
            name: 'City General Hospital',
            rating: '4.5k+ Rating',
            location: 'Delhi, INDIA',
            doctorsCount: 60,
            hasParkade: true,
            hasEmergency: false, // Example: this one doesn't have Emergency
            isLiked: false,
        },
        {
            id: 4,
            image: 'https://content.jdmagicbox.com/v2/comp/mumbai/m4/022pxx22.xx22.220106172311.y9m4/catalogue/quantum-hitech-imaging-mira-road-thane-pathology-labs-yt8f41kcst.jpg', // Light Green
            name: 'Health Plus Clinic',
            rating: '2.8k+ Rating',
            location: 'Mumbai, INDIA',
            doctorsCount: 30,
            hasParkade: false,
            hasEmergency: true,
            isLiked: false,
        },
        {
            id: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiC8IkC2ddcsP3pNE_WMlbmi-Kg8r8oXL8g&s', // Orchid
            name: 'Aarogya Care Center',
            rating: '5.2k+ Rating',
            location: 'Bangalore, INDIA',
            doctorsCount: 70,
            hasParkade: true,
            hasEmergency: true,
            isLiked: false,
        },
        {
            id: 6,
            image: 'https://www.impactguru.com/info/wp-content/uploads/2023/11/Sakra-World-Hospital.jpg', // Light Coral
            name: 'Hope Medical Institute',
            rating: '4.1k+ Rating',
            location: 'Chennai, INDIA',
            doctorsCount: 55,
            hasParkade: true,
            hasEmergency: false,
            isLiked: true,
        },
        {
            id: 7,
            image: 'https://peacemedicaltourism.com/assets/uploads/editor/Apollo_Hospital_in_Delhi1.jpg', // Light Sea Green
            name: 'Wellness Hospital Group',
            rating: '3.9k+ Rating',
            location: 'Kolkata, INDIA',
            doctorsCount: 40,
            hasParkade: false,
            hasEmergency: true,
            isLiked: false,
        },
        {
            id: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k5BIFXaWtIemf3fZePVVkCLMUDx78UNARw&s', // Light Sky Blue
            name: 'Grand Medical Center',
            rating: '4.8k+ Rating',
            location: 'Pune, INDIA',
            doctorsCount: 65,
            hasParkade: true,
            hasEmergency: true,
            isLiked: false,
        },
    ];


    const [currentPage, setCurrentPage] = useState(1);
    const [hospitalData, setHospitalData] = useState(allHospitalCards); // State to manage liked status
    const cardsPerPage = 2; // As per the image, two cards per row/page

    const totalPages = Math.ceil(hospitalData.length / cardsPerPage);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = hospitalData.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleLikeToggle = (id) => {
        setHospitalData((prevData) =>
            prevData.map((hospital) =>
                hospital.id === id ? { ...hospital, isLiked: !hospital.isLiked } : hospital
            )
        );
    };

    const handleShare = (hospitalName) => {
        alert(`Sharing ${hospitalName}! (This would open a share dialog)`);
        // In a real app, you'd use navigator.share or a custom share modal
    };

    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 shadow-md rounded-2xl">
            <div className="max-w-7xl mx-auto">
                {/* "Can't find what you are looking for?" section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Can't find what you are looking for?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div>
                            <label htmlFor="name" className="block text-gray-800 text-lg font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Type A Name"
                                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none bg-blue-50 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-800 text-lg font-medium mb-2">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                placeholder="Type A Phone Number"
                                className="w-full px-4 py-4 border border-gray-300 rounded-lg  bg-blue-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Email (Optional)</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Type Email"
                                className="w-full px-4 py-4 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <a
                            href="tel:+919876543210" // Replace with the actual phone number you want to call
                            className="bg-indigo-950 text-white py-4 px-4 font-bold text-lg rounded-lg hover:bg-indigo-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            <span>Request Callback</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Hospital Cards Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {currentCards.map((hospital) => (
                        <div key={hospital.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/2 relative">
                                <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover md:h-full" />
                                <div className="absolute top-4 left-4 flex space-x-2">
                                    <button
                                        onClick={() => handleShare(hospital.name)}
                                        className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-indigo-600"
                                    >
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleLikeToggle(hospital.id)}
                                        className={`bg-white p-2 rounded-full shadow-md transition-colors duration-200 ${hospital.isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                                            }`}
                                    >
                                        <Heart className="w-5 h-5" fill={hospital.isLiked ? 'currentColor' : 'none'} />
                                    </button>
                                </div>
                                {/* Specific image overlay text (e.g., Parkade, Emergency) */}
                                {/* <div className="absolute bottom-4 left-4 text-white text-base font-semibold flex items-center space-x-2">
                                    {hospital.hasEmergency && (
                                        <span className="bg-blue-600 px-3 py-1 rounded">EMERGENCY</span>
                                    )}
                                    {hospital.hasEmergency && hospital.hasParkade && (
                                        <span className="text-lg">&leftarrow;</span>
                                    )}
                                    {hospital.hasParkade && (
                                        <span className="bg-green-600 px-3 py-1 rounded">PARKADE</span>
                                    )}
                                </div> */}
                            </div>
                            <div className="p-6 flex flex-col justify-between md:w-1/2">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-green-500 text-white text-lg font-bold   px-4 py-2 rounded-md">Hospital</span>
                                    <div className="flex items-center text-gray-600 text-base">
                                        <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                                        <span>{hospital.rating}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{hospital.name}</h3>
                                <p className="text-gray-600 text-base flex items-center mb-4"> {/* Increased text size to 'base' */}
                                    <MapPin className="w-6 h-6 mr-2 text-gray-500" /> {/* Increased size to w-6 h-6 */}
                                    {hospital.location}
                                </p>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="text-indigo-600 font-semibold flex items-center space-x-2 hover:text-indigo-800 bg-indigo-100 rounded-lg p-4">
                                        <span className='font-bold text-lg'>Book Today</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <p className="text-gray-600 text-base flex items-center">
                                        <Stethoscope className="w-6 h-6  text-gray-500" /> {/* Stethoscope icon, size w-6 h-6 */}
                                        <span>{hospital.doctorsCount} Doctors</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-4 mt-12">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`text-gray-500 hover:text-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ArrowRight className="w-5 h-5 rotate-180" /> {/* Left arrow */}
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${currentPage === i + 1
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`text-gray-500 hover:text-gray-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ArrowRight className="w-5 h-5" /> {/* Right arrow */}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HospitalSearchSection;