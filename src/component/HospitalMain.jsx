import React, { useState } from 'react';

import {
    Heart,
    Share2,
    Star,
    ArrowRight,
    MapPin,
    Stethoscope,
} from 'lucide-react';

const HospitalCard = ({ hospital, onLike, onShare }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="md:w-1/2 relative">
                <div className='h-full p-2 rounded-lg'>

                    <img
                        src={hospital.image}
                        alt={`${hospital.name} image`}
                        className="w-full rounded-xl  object-cover md:h-full"
                    />
                </div>
                <div className="absolute top-4 left-4 flex space-x-2">
                    <button
                        aria-label={`Share ${hospital.name}`}
                        onClick={() => onShare(hospital.name)}
                        className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-indigo-600"
                    >
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button
                        aria-label={`Like ${hospital.name}`}
                        onClick={() => onLike(hospital.id)}
                        className={`bg-white p-2 rounded-full shadow-md transition-colors duration-200 ${hospital.isLiked
                            ? 'text-red-500'
                            : 'text-gray-600 hover:text-red-500'
                            }`}
                    >
                        <Heart
                            className="w-5 h-5"
                            fill={hospital.isLiked ? 'currentColor' : 'none'}
                        />
                    </button>
                </div>
            </div>
            <div className="p-6 flex flex-col justify-between md:w-1/2">
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-green-500 text-white text-md font-bold px-3 py-2 rounded-md">
                        Hospital
                    </span>
                    <div className="flex items-center text-gray-600 text-base">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                        <span>{hospital.rating}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{hospital.name}</h3>

                <p className="text-gray-600 text-md flex items-center mb-2">
                    <MapPin className="w-6 h-6 mr-2 text-gray-500" />
                    {hospital.location}
                </p>

                <div className="flex gap-2 mb-4">
                    {hospital.hasEmergency && (
                        <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                            Emergency
                        </span>
                    )}
                    {hospital.hasParkade && (
                        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                            Parking
                        </span>
                    )}
                </div>

                <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-indigo-600 flex items-center space-x-2 hover:text-indigo-800 bg-indigo-100 rounded-lg p-2"
                    >
                        <span className="font-semibold text-sm md:text-md">Book Today</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-gray-600 text-xs md:text-sm flex items-center gap-2">
                        <Stethoscope className="w-6 h-6 text-gray-500" />
                        <span>{hospital.doctorsCount} Doctors</span>
                    </p>
                </div>
            </div>
        </div>
    );
};




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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k5BIFXaWtIemf3fZePVVkCLMUDx78UNARw&s',
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
        image: 'https://www.impactguru.com/info/wp-content/uploads/2023/11/Sakra-World-Hospital.jpg',
        name: 'Grand Medical Center',
        rating: '4.8k+ Rating',
        location: 'Pune, INDIA',
        doctorsCount: 65,
        hasParkade: true,
        hasEmergency: true,
        isLiked: false,
    },
];

const HospitalMain = () => {
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
        <section className="gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-md mx-2 sm:mx-4 md:mx-8 lg:mx-10 my-3 sm:my-4 md:my-5">
            <div className="max-w-7xl mx-auto">
                {hospitalData.length === 0 ? (
                    <p className="text-center text-gray-500">No hospitals found.</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {hospitalData.map((hospital) => (
                            <HospitalCard
                                key={hospital.id}
                                hospital={hospital}
                                onLike={handleLikeToggle}
                                onShare={handleShare}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HospitalMain;
