import React, { useState } from 'react';
import './App.scss';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import desktopHeaderSvg from './assets/images/bg-header-desktop.svg';
import { SearchFilter } from './components/SearchFilter';
import { JobListings } from './components/JobListings';
import jobDataArr from './data/data.json';
import type { JobTransformed } from './types/JobListing';
import { transformJobListing } from './utilities';

import useMediaQuery from './hooks/useMediaQuery';

const jobData = transformJobListing(jobDataArr);

function App() {
  const [searchFilters, setSearchFilters] = useState<string[]>([]);
  const [filteredJobListings, setFilteredJobListings] = useState<
    JobTransformed[]
  >([]);
  const isBelowBreakpoint = useMediaQuery(1023);

  const handleClearFilter = () => {
    setSearchFilters([]);
    setFilteredJobListings([]);
  };

  const handleRemoveFilter = (term: string) => {
    const searchFilterArr = searchFilters.filter((filter) => filter !== term);
    const jobListingData = filteredJobListings.filter((job) =>
      searchFilterArr.some((filter) => job.tags.includes(filter))
    );
    setSearchFilters(searchFilterArr);
    setFilteredJobListings(jobListingData);
  };

  const handleAddFilter = (term: string) => {
    if (!searchFilters.includes(term)) {
      const searchFilterArr = [...searchFilters, term];
      const jobListingData = jobData.filter((job: JobTransformed) =>
        job.tags.includes(term)
      );
      const allJobListings = new Set([
        ...jobListingData,
        ...filteredJobListings
      ]);
      setSearchFilters(searchFilterArr);
      setFilteredJobListings(Array.from(allJobListings));
    }
  };

  const activeJobListings =
    filteredJobListings.length > 0 ? filteredJobListings : jobData;

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
          <JobListings
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
