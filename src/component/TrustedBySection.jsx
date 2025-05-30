import React from 'react';

const TrustedCompaniesSection = () => {
  return (
    <section className="gap-3 sm:gap-4 p-3 sm:p-4 md:p-6  mx-2 sm:mx-4 md:mx-8 lg:mx-10 my-3 sm:my-4 md:my-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-12">
          TRUSTED BY MORE THAN <span className="text-blue-600 font-bold">100+</span> COMPANIES WORLDWIDE
        </h2>

        {/* Logo slider container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-16 animate-scroll whitespace-nowrap">
            {[
              { src: '/logo1.png', name: 'Medixo' },
              { src: '/logo2.png', name: 'Mediweb' },
              { src: '/logo3.png', name: 'Labtox' },
              { src: '/logo4.png', name: 'Patholab' },
              { src: '/logo5.png', name: 'Medox' },
              { src: '/logo6.png', name: 'Medicross' },
              // Duplicate for infinite scroll illusion
              { src: '/logo1.png', name: 'Medixo' },
              { src: '/logo2.png', name: 'Mediweb' },
              { src: '/logo3.png', name: 'Labtox' },
              { src: '/logo4.png', name: 'Patholab' },
              { src: '/logo5.png', name: 'Medox' },
              { src: '/logo6.png', name: 'Medicross' },
            ].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center mx-4"
              >
                <img
                  src={company.src}
                  alt={company.name}
                  className="w-14 h-auto object-contain"
                />
                <span className="ml-2 text-gray-500 text-lg font-medium whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedCompaniesSection;
