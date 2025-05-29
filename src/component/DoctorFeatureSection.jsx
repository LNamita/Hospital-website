import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function SearchForm() {
    const [activeCategory, setActiveCategory] = useState('Family Medicine');

    const categories = [
        'Family Medicine',
        'Neurosurgery',
        'Dentist',
        'Pediatrics',
        'Chief Surgeon',
        'Cardiologist',
        'Dermatologist',
        'Neurologist',
    ];

    return (
        <div className="gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-md mx-2 sm:mx-4 md:mx-8 lg:mx-10 my-3 sm:my-4 md:my-5">
            {/* Search Fields - responsive grid layout */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                <div className="col-span-1">
                    <label className="block text-blue-950 font-medium text-xs xs:text-sm sm:text-base mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Type Name"
                        className="w-full p-2 sm:p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 text-xs xs:text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="col-span-1">
                    <label className="block text-blue-950 font-medium text-xs xs:text-sm sm:text-base mb-1">Treatment</label>
                    <div className="relative">
                        <select className="w-full p-2 sm:p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-600 text-xs xs:text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                            <option>Select Treatment</option>
                        </select>
                        <ChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                </div>

                <div className="col-span-1">
                    <label className="block text-blue-950 font-medium text-xs xs:text-sm sm:text-base mb-1">Facility</label>
                    <div className="relative">
                        <select className="w-full p-2 sm:p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-600 text-xs xs:text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                            <option>Select Facility</option>
                        </select>
                        <ChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                </div>

                <div className="col-span-1">
                    <label className="block text-blue-950 font-medium text-xs xs:text-sm sm:text-base mb-1">Location</label>
                    <input
                        type="text"
                        placeholder="City Name"
                        className="w-full p-2 sm:p-2.5 md:p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 text-xs xs:text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Category Buttons - scrollable on small screens */}
            <div className="mb-3 sm:mb-4 md:mb-6">
                <div className="relative">
                    <div className="flex overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full border text-xs xs:text-sm sm:text-base mx-1 sm:mx-0 transition-colors ${activeCategory === cat
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Search Button - full width on mobile, right-aligned on larger screens */}
            <div className="flex justify-center sm:justify-end">
                <button className="w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg transition-colors duration-200 active:scale-95">
                    <span>Search Now</span>
                    <ArrowRight size={16} className="hidden xs:inline-block" />
                </button>
            </div>
        </div>
    );
}