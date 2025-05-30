
import React, { useState } from 'react';
// import TrustedBySection from './component/TrustedBySection'; // Import the new component
import Footer from './component/Footer'; // Assuming Footer is in Footer.js
import CopyrightBar from './component/CopyrightBar'; // Assuming CopyrightBar is in CopyrightBar.js
import TrustedBySection from './component/TrustedBySection';
// import HospitalSearchSection from './component/HospitalSearchSection';
import HospitalMain from './component/HospitalMain';
import SearchForm from './component/DoctorFeatureSection';
import HeroSection from './component/Herosection';
import Header from './component/Header';
import hospitalJson from './HospitalData.json'

function App() {
  const [searchFilters, setSearchFilters] = useState({
    name: '',
    treatment: '',
    facility: '',
    location: ''
  });


  const [isFilter, setIsFilter] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All");

  const [filterHosData, setFilteredData] = useState(hospitalJson.hospitals)
  const applyFilters = () => {
    let result = [...hospitalJson.hospitals];

    // Apply category filter
    if (activeCategory !== 'All') {
      result = result.filter(hospital =>
        hospital.specialties?.includes(activeCategory)
      );
    }

    // Apply other filters
    if (searchFilters.name) {
      result = result.filter(hospital =>
        hospital.name.toLowerCase().includes(searchFilters.name.toLowerCase())
      );
    }

    if (searchFilters.treatment) {
      result = result.filter(hospital =>
        hospital.treatments?.includes(searchFilters.treatment)
      );
    }

    if (searchFilters.facility) {
      result = result.filter(hospital =>
        hospital.facilities?.includes(searchFilters.facility)
      );
    }

    if (searchFilters.location) {
      result = result.filter(hospital =>
        hospital.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      );
    }
    setIsFilter(!isFilter)
    setFilteredData(result);
  };

  const resetFilters = () => {
    setSearchFilters({
      name: '',
      treatment: '',
      facility: '',
      location: ''
    });
    setIsFilter(!isFilter)
    setActiveCategory('All');
    setFilteredData(hospitalJson.hospitals);
  };


  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      <Header />
      <HeroSection/>
      <SearchForm categories={hospitalJson.filters.categories} facilities={hospitalJson.filters.facilities} treatments={hospitalJson.filters.treatments} searchFilters={searchFilters} setSearchFilters={setSearchFilters} activeCategory={activeCategory}
        applyFilters={applyFilters} setActiveCategory={setActiveCategory} resetFilters={resetFilters} />
      <HospitalMain hospitals={filterHosData} isFilter={isFilter} />
      {/* <HospitalSearchSection hospitals={hospitalJson.hospitals} /> */}
      <TrustedBySection /> {/* Add the TrustedBySection here */}
      <Footer />
      <CopyrightBar />
    </div>
  );
}

export default App;