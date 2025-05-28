import React from 'react';

const TrustedCompaniesSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-20"> {/* Increased py and mt for more vertical space */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-12"> {/* Increased text size and mb */}
          TRUSTED BY MORE THAN <span className="text-blue-600 font-bold">100+</span> COMPANIES WORLDWIDE
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20"> {/* Increased gap between logos */}
          {/* Replace src with your actual logo image paths */}
          <div className="flex items-center justify-center">
            {/* Increased width and height for bigger logos */}
            <img src="/logo1.png" alt="Medixo" className="w-12 h-auto object-contain" />
            {/* Added text back if you want it big, adjusted font size */}
            <span className="ml-3 text-gray-500 text-xl font-medium">Medixo</span>
          </div>
          <div className="flex items-center justify-center">
            <img src="/logo2.png" alt="Mediweb" className="w-12 h-auto object-contain" />
            <span className="ml-3 text-gray-500 text-xl font-medium">Mediweb</span>
          </div>
          <div className="flex items-center justify-center">
            <img src="/logo3.png" alt="Labtox" className="w-12 h-auto object-contain" />
            <span className="ml-3 text-gray-500 text-xl font-medium">Labtox</span>
          </div>
          <div className="flex items-center justify-center">
            <img src="/logo4.png" alt="Patholab" className="w-12 h-auto object-contain" />
            <span className="ml-3 text-gray-500 text-xl font-medium">Patholab</span>
          </div>
          <div className="flex items-center justify-center">
            <img src="/logo5.png" alt="Medox" className="w-12 h-auto object-contain" />
            <span className="ml-3 text-gray-500 text-xl font-medium">Medox</span>
          </div>
          <div className="flex items-center justify-center">
            <img src="/logo6.png" alt="Medicross" className="w-12 h-auto object-contain" />
            <span className="ml-3 text-gray-500 text-xl font-medium">Medicross</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;