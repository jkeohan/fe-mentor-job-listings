import React from 'react';
import './App.scss';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import removeButton from './assets/images/remove-icon.svg';
import insure from './assets/images/insure.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={mobileHeaderSvg} alt="mobile-header" />
      </header>
      <section className="main-content">
        <div className="search-filter flex">
          <div className="filters grow">
            <div className="filter-item">
              <div className="filter">Frontend</div>
              <span className="close">
                <img
                  className="w-6 h-6"
                  src={removeButton}
                  alt="mobile-header"
                />
              </span>
            </div>
            <div className="filter-item">
              <span className="filter">CSS</span>
              <span className="close">
                <img
                  className="w-6 h-6"
                  src={removeButton}
                  alt="mobile-header"
                />
              </span>
            </div>
            <div className="filter-item">
              <span className="filter">JavaScript</span>
              <span className="close">
                <img
                  className="w-6 h-6"
                  src={removeButton}
                  alt="mobile-header"
                />
              </span>
            </div>
          </div>
          <div className="clear flex">Clear</div>
        </div>
        <section className="job-listings">
          <article className="job-listing p-4 pt-0 text-left">
            <img className="-mt-[25px] w-11" src={insure} alt="company-logo" />
            <div>
              <div className="flex items-center gap-[10px] my-2">
                <div className="text-xs">Photosnap</div>
                <div className="text-sm p-2 leading-none bg-desaturated-dark-cyan text-white rounded-full">
                  NEW!
                </div>
                <div className="text-sm p-1 bg-black text-white rounded-full">
                  FEATURED
                </div>
              </div>
              <div className="text-sm">Senior Frontend Developer</div>
              <div className="flex gap-[10px] my-2">
                <div>1 day ago</div>
                <span>&middot;</span>
                <div>Full Time</div>
                <span>&middot;</span>
                <div>USA Only</div>
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex items-center gap-[10px] my-2">
              <span className="bg-light-grayish-cyan-background leading-none">
                HTML
              </span>
              <div>JavaScript</div>
              <div>HTML</div>
              <div className="search-filter flex">
                <div className="filters grow">
                  <div className="filter-item">
                    <span className="filter">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="job-listing">job listing</article>
          <article className="job-listing">job listing</article>
        </section>
      </section>
    </div>
  );
}

export default App;
