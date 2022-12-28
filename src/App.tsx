import React, { useState } from 'react';
import './App.scss';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import { SearchFilter } from './components/SearchFilter';
import { JobListing } from './components/JobListing';
// import { ReactSVG } from 'react-svg';
import jobListings from './data/data.json';

function App() {
  const [searchFilters, setSearchFilters] = useState([
    'Frontend',
    'CSS',
    'JavaScript'
  ]);

  const handleClearFilter = () => setSearchFilters([]);

  const handleRemoveFilter = (term: string) => {
    const searchFilterArr = searchFilters.filter((filter) => filter !== term);
    setSearchFilters(searchFilterArr);
  };

  const handleAddFilter = (term: string) => {
    if (!searchFilters.includes(term)) {
      const searchFilterArr = [...searchFilters, term];
      setSearchFilters(searchFilterArr);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <img src={mobileHeaderSvg} alt="mobile-header" />
      </header>
      {searchFilters.length > 0 && (
        <div className="-mt-10 search-filter">
          <SearchFilter
            filters={searchFilters}
            clearFilter={handleClearFilter}
            removeFilter={handleRemoveFilter}
          />
        </div>
      )}
      <section className="main-content pt-12">
        <section className="job-listings flex flex-col gap-[40px]">
          <JobListing jobsData={jobListings} addFilter={handleAddFilter} />
        </section>
      </section>
    </div>
  );
}

export default App;
