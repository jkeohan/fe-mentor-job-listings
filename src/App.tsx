import React, { useState, useMemo } from 'react';
import './App.scss';
import mobileHeaderSvg from './assets/images/bg-header-mobile.svg';
import * as logos from './assets/images';
import { SearchFilter } from './components/SearchFilter';
import { JobListing } from './components/JobListing';
import { Tags } from './components/JobListing/components/Tags';
// import { ReactSVG } from 'react-svg';
import jobListings from './data/data.json';

console.log(logos);

function App() {
  const [searchFilters, setSearchFilters] = useState([
    'Frontend',
    'CSS',
    'JavaScript'
  ]);

  const handleClearFilter = () => setSearchFilters([])

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
          />
        </div>
      )}
      <section className="main-content pt-12">
        <section className="job-listings flex flex-col gap-[40px]">
          <JobListing jobsData={jobListings} />
        </section>
      </section>
    </div>
  );
}

export default App;

// {
//   "id": 2,
//   "company": "Manage",
//   "logo": "manage.svg",
//   "new": true,
//   "featured": true,
//   "position": "Fullstack Developer",
//   "role": "Fullstack",
//   "level": "Midweight",
//   "postedAt": "1d ago",
//   "contract": "Part Time",
//   "location": "Remote",
//   "languages": ["Python"],
//   "tools": ["React"]
// },
// {
//   "id": 3,
//   "company": "Account",
//   "logo": "account.svg",
//   "new": true,
//   "featured": false,
//   "position": "Junior Frontend Developer",
//   "role": "Frontend",
//   "level": "Junior",
//   "postedAt": "2d ago",
//   "contract": "Part Time",
//   "location": "USA Only",
//   "languages": ["JavaScript"],
//   "tools": ["React", "Sass"]
// },
// {
//   "id": 4,
//   "company": "MyHome",
//   "logo": "myhome.svg",
//   "new": false,
//   "featured": false,
//   "position": "Junior Frontend Developer",
//   "role": "Frontend",
//   "level": "Junior",
//   "postedAt": "5d ago",
//   "contract": "Contract",
//   "location": "USA Only",
//   "languages": ["CSS", "JavaScript"],
//   "tools": []
// },
// {
//   "id": 5,
//   "company": "Loop Studios",
//   "logo": "loop-studios.svg",
//   "new": false,
//   "featured": false,
//   "position": "Software Engineer",
//   "role": "Fullstack",
//   "level": "Midweight",
//   "postedAt": "1w ago",
//   "contract": "Full Time",
//   "location": "Worldwide",
//   "languages": ["JavaScript"],
//   "tools": ["Ruby", "Sass"]
// },
// {
//   "id": 6,
//   "company": "FaceIt",
//   "logo": "faceit.svg",
//   "new": false,
//   "featured": false,
//   "position": "Junior Backend Developer",
//   "role": "Backend",
//   "level": "Junior",
//   "postedAt": "2w ago",
//   "contract": "Full Time",
//   "location": "UK Only",
//   "languages": ["Ruby"],
//   "tools": ["RoR"]
// },
// {
//   "id": 7,
//   "company": "Shortly",
//   "logo": "shortly.svg",
//   "new": false,
//   "featured": false,
//   "position": "Junior Developer",
//   "role": "Frontend",
//   "level": "Junior",
//   "postedAt": "2w ago",
//   "contract": "Full Time",
//   "location": "Worldwide",
//   "languages": ["HTML", "JavaScript"],
//   "tools": ["Sass"]
// },
// {
//   "id": 8,
//   "company": "Insure",
//   "logo": "insure.svg",
//   "new": false,
//   "featured": false,
//   "position": "Junior Frontend Developer",
//   "role": "Frontend",
//   "level": "Junior",
//   "postedAt": "2w ago",
//   "contract": "Full Time",
//   "location": "USA Only",
//   "languages": ["JavaScript"],
//   "tools": ["Vue", "Sass"]
// },
// {
//   "id": 9,
//   "company": "Eyecam Co.",
//   "logo": "eyecam-co.svg",
//   "new": false,
//   "featured": false,
//   "position": "Full Stack Engineer",
//   "role": "Fullstack",
//   "level": "Midweight",
//   "postedAt": "3w ago",
//   "contract": "Full Time",
//   "location": "Worldwide",
//   "languages": ["JavaScript", "Python"],
//   "tools": ["Django"]
// },
// {
//   "id": 10,
//   "company": "The Air Filter Company",
//   "logo": "the-air-filter-company.svg",
//   "new": false,
//   "featured": false,
//   "position": "Front-end Dev",
//   "role": "Frontend",
//   "level": "Junior",
//   "postedAt": "1mo ago",
//   "contract": "Part Time",
//   "location": "Worldwide",
//   "languages": ["JavaScript"],
//   "tools": ["React", "Sass"]
// }


          
            /* {jobListings.map((job, index) => {
            const tags = [job.role, job.level, ...job.languages, ...job.tools];
            const svgPath = `./assets/images/${job.logo}`;

            return (
              <article className="job-listing p-4 pt-0 text-left" key={index}>
                <img
                  src={logos.photosnap}
                  alt="logo"
                  className="-mt-[25px] w-12 "
                />
                <div>
                  <div className="flex items-center gap-[10px] my-2">
                    <div className="text-xs pr-5 text-desaturated-dark-cyan font-bold">
                      {job.company}
                    </div>
                    {job.new && (
                      <div className="text-sm p-2 leading-none bg-desaturated-dark-cyan text-white rounded-full">
                        NEW!
                      </div>
                    )}
                    {job.featured && (
                      <div className="text-sm p-2 leading-tight bg-black text-white rounded-full">
                        FEATURED
                      </div>
                    )}
                  </div>
                  <div className="text-sm">{job.position}</div>
                  <div className="flex items-center gap-[10px] my-2 text-dark-grayish-cyan">
                    <div>{job.postedAt}</div>
                    <span text-lg>&middot; </span>
                    <div>{job.contract}</div>
                    <span>&middot;</span>
                    <div>{job.location}</div>
                  </div>
                </div>

                <hr className="my-2" />

                <Tags tags={tags} />
              </article>
            );
          })} */
          