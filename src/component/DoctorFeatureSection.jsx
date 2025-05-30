import { ChevronDown, ArrowRight } from 'lucide-react';

export default function SearchForm({ categories, treatments, facilities, searchFilters, setSearchFilters, setActiveCategory, activeCategory, applyFilters, resetFilters }) {


    const handleOnChange = (e) => {
        setSearchFilters((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-md mx-2 sm:mx-4 md:mx-8 lg:mx-10 my-3 sm:my-4 md:my-5">
            {/* Search Fields - responsive grid layout */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                <div className="col-span-1">
                    <label className="block text-blue-950 font-medium text-xs xs:text-sm sm:text-base mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Type A Name"
                        className="w-full p-3 bg-gray-100 rounded-md text-gray-600 placeholder-gray-400"
                    />
                </div>

                <div className="col-span-1">
                    <label className="block text-blue-950 font-medium text-xs xs:text-sm sm:text-base mb-1">Treatment</label>
                    <div className="relative">
                        <select className="w-full appearance-none p-3 bg-gray-100 rounded-md text-gray-600">
                            <option>Select Treatment</option>
                            {treatments?.map((ele, index) => {
                                return <option value={ele} key={index}>{ele}</option>
                            })}
                        </select>
                        <ChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                </div>

                <div className="col-span-1">
                    <label className="block text-blue-950 font-medium text-xs xs:text-sm sm:text-base mb-1">Facility</label>
                    <div className="relative">
                        <select className="w-full appearance-none p-3 bg-gray-100 rounded-md text-gray-600">
                            <option>Select Facility</option>
                            {facilities?.map((ele, index) => {
                                return <option value={ele} key={index}>{ele}</option>
                            })}
                        </select>
                        <ChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                </div>

                <div className="col-span-1">
                    <label className="block text-blue-950 font-medium text-xs xs:text-sm sm:text-base mb-1">Location</label>
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