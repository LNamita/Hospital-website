import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function SearchForm() {
    const [activeCategory, setActiveCategory] = useState('Family Medicine');

    const categories = [
        'Family Medicine',
        'Nerusurgery',
        'Dentist',
        'Pediatrics',
        'Chief Surgeon',
        'Cardiologist',
        'Dermatologist',
        'Neurologist',
    ];

    return (
        <div className="max-w-4xl mx-auto gap-6 p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                    <label className="block text-blue-950 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="Type A Name"
                        className="w-full p-3 bg-gray-100 rounded-md text-gray-600 placeholder-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-blue-950 font-semibold mb-2">Treatment</label>
                    <div className="relative">
                        <select className="w-full appearance-none p-3 bg-gray-100 rounded-md text-gray-600">
                            <option>Select Treatment</option>
                        </select>
                        <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>

                <div>
                    <label className="block text-blue-950 font-semibold mb-2">Facility</label>
                    <div className="relative">
                        <select className="w-full appearance-none p-3 bg-gray-100 rounded-md text-gray-600">
                            <option>Select Facility</option>
                        </select>
                        <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>

                <div>
                    <label className="block text-blue-950 font-semibold mb-2">Location</label>
                    <input
                        type="text"
                        placeholder="Type City Name"
                        className="w-full p-3 bg-gray-100 rounded-md text-gray-600 placeholder-gray-400"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 rounded-full border ${activeCategory === cat
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border-gray-300'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex justify-end p-4"> {/* This flex container pushes content to the end (right) */}
                <button className="flex items-center gap-2 bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-600">
                    Search Now <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
}
