import React, { useState } from 'react';
import './App.scss';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import desktopHeaderSvg from './assets/images/bg-header-desktop.svg';
import { SearchFilter } from './components/SearchFilter';
import { JobListing } from './components/JobListing';
import jobData from './data/data.json';
import { JobListingObj } from './types/JobListingObj';

import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [searchFilters, setSearchFilters] = useState<string[]>([]);
  const [filterListings, setFilterListings] = useState<JobListingObj[]>([]);
  const isBelowBreakpoint = useMediaQuery(1023);

  const handleClearFilter = () => {
    setSearchFilters([]);
    setFilterListings([]);
  };

  const handleRemoveFilter = (term: string) => {
    const searchFilterArr = searchFilters.filter((filter) => filter !== term);
    console.log({ searchFilterArr });
    setSearchFilters(searchFilterArr);
    const removeJobListings = filterListings.filter((job) => {
      if (
        searchFilterArr.includes(job.role) ||
        searchFilterArr.includes(job.level)
      ) {
        return true;
      }

      for (var lang of job.languages) {
        if (searchFilterArr.includes(lang)) return true;
      }

      for (var tool of job.tools) {
        if (searchFilterArr.includes(tool)) return true;
      }

      return false
    });
    setFilterListings(removeJobListings);
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
      const allJobListings = new Set([...jobListingData, ...filterListings]);
      setFilterListings(Array.from(allJobListings));
    }
  };

  const activeJobListings =
    filterListings.length > 0 ? filterListings : jobData;

  return (
    <div className="App">
      <header>
        {isBelowBreakpoint ? (
          <img
            className="h-36 w-full bg-desaturated-dark-cyan"
            src={desktopHeaderSvg}
            alt="desktop-header"
          />
        ) : (
          <img
            className="w-full h-36 bg-desaturated-dark-cyan"
            src={mobileHeaderSvg}
            alt="mobile-header"
          />
        )}
      </header>
      <div
        className={
          searchFilters.length > 0
            ? '-mt-8 opacity-100'
            : '-mt-8 opacity-0 pb-[4px]'
        }
      >
        <SearchFilter
          filters={searchFilters}
          clearFilter={handleClearFilter}
          removeFilter={handleRemoveFilter}
        />
      </div>
      <section className="py-12 main-content md:pt-14 w-[327px] m-auto md:m-w-[90%] md:w-3/4">
        <section className="job-listings flex flex-col gap-10 md:gap-4">
          <JobListing
            jobsData={activeJobListings}
            addFilter={handleAddFilter}
            removeFilter={handleRemoveFilter}
            filters={searchFilters}
          />
        </section>
      </section>
    </div>
  );
}

export default App;
