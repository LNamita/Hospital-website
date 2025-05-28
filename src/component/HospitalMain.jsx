import React, { useState } from 'react';
import { Heart, Share2, Star, ArrowRight, MapPin, Stethoscope } from 'lucide-react';

const HospitalMain = () => {
    const allHospitalCards = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqzPnxNt51e9nRPs97qAplWFBmFcNGvqZsg&s',
            name: 'Future Care Medical Center',
            rating: '5k+ Rating',
            location: 'Noida, UP, INDIA',
            doctorsCount: 50,
            hasParkade: true,
            hasEmergency: true,
            isLiked: false,
        },
        {
            id: 2,
            image: 'https://content.jdmagicbox.com/v2/comp/mumbai/m4/022pxx22.xx22.220106172311.y9m4/catalogue/quantum-hitech-imaging-mira-road-thane-pathology-labs-yt8f41kcst.jpg',
            name: 'Quantam Care Hospital',
            rating: '3k+ Rating',
            location: 'Gurugram Harayana, INDIA',
            doctorsCount: 45,
            hasParkade: false,
            hasEmergency: true,
            isLiked: true,
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k5BIFXaWtIemf3fZePVVkCLMUDx78UNARw&s', // Light Sky Blue
            name: 'Wellness Hospital Group',
            rating: '3.9k+ Rating',
            location: 'Kolkata, INDIA',
            doctorsCount: 40,
            hasParkade: false,
            hasEmergency: true,
            isLiked: false,
        },
        {
            id: 4,
            image: 'https://www.impactguru.com/info/wp-content/uploads/2023/11/Sakra-World-Hospital.jpg', // Light Coral
            name: 'Grand Medical Center',
            rating: '4.8k+ Rating',
            location: 'Pune, INDIA',
            doctorsCount: 65,
            hasParkade: true,
            hasEmergency: true,
            isLiked: false,
        },
    ];

    const [hospitalData, setHospitalData] = useState(allHospitalCards);

    const handleLikeToggle = (id) => {
        setHospitalData((prevData) =>
            prevData.map((hospital) =>
                hospital.id === id ? { ...hospital, isLiked: !hospital.isLiked } : hospital
            )
        );
    };

    const handleShare = (hospitalName) => {
        alert(`Sharing ${hospitalName}!`);
    };

    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 shadow-md rounded-2xl">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {hospitalData.map((hospital) => (
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
                            </div>
                            <div className="p-6 flex flex-col justify-between md:w-1/2">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-green-500 text-white text-lg font-bold px-4 py-2 rounded-md">Hospital</span>
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
            </div>
        </section>
    );
};

export default HospitalMain;
