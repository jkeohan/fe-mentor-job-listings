import React, { useState } from 'react';
import './App.scss';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import { SearchFilter } from './components/SearchFilter';
import { JobListing } from './components/JobListing';
import jobData from './data/data.json';
import { JobListingObj } from './types/JobListingObj';

function App() {
  const [searchFilters, setSearchFilters] = useState<string[]>([]);
  const [filteredJobListings, setFilteredJobListings] = useState<
    JobListingObj[]
  >([]);

  const handleClearFilter = () => {
    setSearchFilters([]);
    setFilteredJobListings([]);
  };

  const handleRemoveFilter = (term: string) => {
    const searchFilterArr = searchFilters.filter((filter) => filter !== term);
    console.log({ searchFilterArr });
    setSearchFilters(searchFilterArr);
    // eslint-disable-next-line array-callback-return
    const removeJobListings = filteredJobListings.filter((job) => {
      if (
        searchFilterArr.includes(job.role) ||
        searchFilterArr.includes(job.level)
      ) {
        return job;
      }

      for (var lang of job.languages) {
        if (searchFilterArr.includes(lang)) return job;
      }

      for (var tool of job.tools) {
        if (searchFilterArr.includes(tool)) return job;
      }
    });
    setFilteredJobListings(removeJobListings);
  };

  const handleAddFilter = (term: string) => {
    if (!searchFilters.includes(term)) {
      const searchFilterArr = [...searchFilters, term];
      setSearchFilters(searchFilterArr);

      const jobListingData = jobData.filter((job) => {
        return (
          job.role === term ||
          job.level === term ||
          job.languages.includes(term) ||
          job.tools.includes(term)
        );
      });
      const allJobListings = new Set([
        ...jobListingData,
        ...filteredJobListings
      ]);
      setFilteredJobListings(Array.from(allJobListings));
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
          {filteredJobListings.length > 0 ? (
            <JobListing
              jobsData={filteredJobListings}
              addFilter={handleAddFilter}
            />
          ) : (
            <JobListing jobsData={jobData} addFilter={handleAddFilter} />
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
