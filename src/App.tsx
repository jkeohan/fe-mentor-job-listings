import React from 'react';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import desktopHeaderSvg from './assets/images/bg-header-desktop.svg';
import { SearchFilter } from './components/SearchFilter';
import { JobListings } from './components/JobListings';
import { JobListingProvider } from './context';
import useMediaQuery from './hooks/useMediaQuery';
import './App.scss';

function App() {
  const isBelowBreakpoint = useMediaQuery(1023);
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
      <JobListingProvider>
        <SearchFilter />
        <section className="py-12 main-content md:pt-14 w-[327px] m-auto md:m-w-[90%] md:w-3/4">
          <section className="job-listings flex flex-col gap-10 md:gap-4">
            <JobListings />
          </section>
        </section>
      </JobListingProvider>
    </div>
  );
}

export default App;
