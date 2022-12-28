import React, {useState} from 'react';
import './App.scss';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import insure from './assets/images/insure.svg';
import {SearchFilter} from './components/SearchFilter'
import {Tags} from './components/Tags'


function App() {
  const [searchFilters, setSearchFilters] = useState(['Frontend', 'CSS', 'JavaScript'])

  const jobTags = ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript']

  return (
    <div className="App">
      <header className="header">
        <img src={mobileHeaderSvg} alt="mobile-header" />
      </header>
      <section className="main-content">
        <SearchFilter filters={searchFilters} />

        <section className="job-listings">
          <article className="job-listing p-4 pt-0 text-left">
            <img className="-mt-[25px] w-11" src={insure} alt="company-logo" />
            <div>
              <div className="flex items-center gap-[10px] my-2">
                <div className="text-xs pr-5 text-desaturated-dark-cyan font-bold">
                  Photosnap
                </div>
                <div className="text-sm p-2 leading-none bg-desaturated-dark-cyan text-white rounded-full">
                  NEW!
                </div>
                <div className="text-sm p-2 leading-tight bg-black text-white rounded-full">
                  FEATURED
                </div>
              </div>
              <div className="text-sm">Senior Frontend Developer</div>
              <div className="flex items-center gap-[10px] my-2 text-dark-grayish-cyan">
                <div>1 day ago</div>
                <span text-lg>&middot; </span>
                <div>Full Time</div>
                <span>&middot;</span>
                <div>USA Only</div>
              </div>
            </div>

            <hr className="my-2" />

            <Tags tags={jobTags} />
          </article>
          <article className="job-listing">job listing</article>
          <article className="job-listing">job listing</article>
        </section>
      </section>
    </div>
  );
}

export default App;
