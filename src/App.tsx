import React, { useEffect, useState } from 'react';
import './App.scss';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import desktopHeaderSvg from './assets/images/bg-header-desktop.svg';
import { SearchFilter } from './components/SearchFilter';
import { JobListing } from './components/JobListing';
import jobData from './data/data.json';
import { JobListingObj } from './types/JobListingObj';

function App() {
  const [searchFilters, setSearchFilters] = useState<string[]>([]);
  const [filterListings, setFilterListings] = useState<JobListingObj[]>([]);

  // set state for mobile breakpoint for image change
  const [belowBreakpoint, setBelowBreakpoint] = useState<boolean>(false);

  // useEffect to check for breakpoint change
  // if window.innerwidth is less than 376px then set
  // state to true else set to false
  useEffect(() => {
    // if (window.innerWidth < 376) {
    //   setBelowBreakpoint(true);
    // } else {
    //   setBelowBreakpoint(false);
    // }

    const updateBannerImage = () => {
      if (window.innerWidth > 1023) {
        setBelowBreakpoint(true);
      } else {
        setBelowBreakpoint(false);
      }
    };

    window.addEventListener('resize', updateBannerImage);
    return () => window.removeEventListener('resize', updateBannerImage);
  }, []);

  const handleClearFilter = () => {
    setSearchFilters([]);
    setFilterListings([]);
  };

  const handleRemoveFilter = (term: string) => {
    const searchFilterArr = searchFilters.filter((filter) => filter !== term);
    console.log({ searchFilterArr });
    setSearchFilters(searchFilterArr);
    // eslint-disable-next-line array-callback-return
    const removeJobListings = filterListings.filter((job) => {
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

  return (
    <div className="App">
      {/* can remove header className */}
      <header className="header">
        {belowBreakpoint ? (
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
      {searchFilters.length > 0 && (
        <div className="-mt-10 search-filter">
          <SearchFilter
            filters={searchFilters}
            clearFilter={handleClearFilter}
            removeFilter={handleRemoveFilter}
          />
        </div>
      )}
      <section className="main-content pt-12 w-[327px] m-auto md:m-w-[90%] md:w-3/4">
        <section className="job-listings flex flex-col gap-10 md:gap-4">
          {filterListings.length > 0 ? (
            <JobListing jobsData={filterListings} addFilter={handleAddFilter} />
          ) : (
            <JobListing jobsData={jobData} addFilter={handleAddFilter} />
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
