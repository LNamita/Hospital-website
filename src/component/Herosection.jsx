function HeroSection() {
  return (
    <div className="relative h-[16rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] rounded-lg overflow-hidden mx-2 sm:mx-4 md:mx-6 lg:mx-auto max-w-7xl">
      {/* Responsive image with multiple sources for optimization */}
      <picture>
        <source media="(min-width: 1024px)" srcSet="/docter.png" />
        <source media="(min-width: 768px)" srcSet="/docter.png" />
        <source media="(min-width: 640px)" srcSet="/docter.png" />
        <img
          src="/docter.png"
          alt="Hospital Staff"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </picture>

      {/* Overlay content with responsive sizing */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Hospital Search
        </h2>
        <div className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base">
          <span className="text-gray-200">Home</span> /{" "}
          <span className="text-emerald-400 font-medium">Hospital Search</span>
        </div>

        {/* Optional: Add a search component for larger screens */}
        <div className="hidden md:block w-full max-w-2xl mt-6 lg:mt-8">
          <div className="bg-white bg-opacity-90 rounded-lg p-2 shadow-lg">
            <div className="flex">
              <input
                type="text"
                placeholder="Search hospitals, locations..."
                className="flex-grow px-4 py-3 rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-r-md transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;