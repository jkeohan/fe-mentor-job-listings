import React from 'react';
import { Tags } from './components/Tags';
import * as logos from '../../assets/images/';
import './styles.scss';
import { JobListingObj } from '../../types/JobListingObj';
import { ReactSVG } from 'react-svg';

interface Props {
  jobsData: JobListingObj[];
  addFilter: (term: string) => void;
}

export function JobListing({ jobsData, addFilter }: Props) {
  const jobListingsMarkup = jobsData.map((job, index) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    const svgPath = `./assets/images/${job.logo}`;

    return (
      <article
        className="job-listing p-4 pt-0 md:pt-4 text-left rounded-md shadow-xl shadow-desaturated-dark-cyan/30 md:flex md:items-center md:justify-center md:gap-5"
        key={job.id}
      >
        {/* <ReactSVG src={svgPath} /> */}
        <img
          src={svgPath}
          alt="logo"
          className="-mt-[25px] md:mt-0 w-12 md:w-[80px] md:h-[80px]"
        />
        {/* <ReactSVG
          src={svgPath}
          // style={svgStyle}
          // className="w-[50px] h-[50px]"
          beforeInjection={(svg) => {
            // svg.classList.add('svg-class-name');
            // svg.setAttribute('style', 'viewBox = “0 0 100 100"');
            svg.setAttribute('style', 'width: 50px!important');
            // const [firstGElement] = [...svg.querySelectorAll('g')];
            // firstGElement.setAttribute('fill', 'blue');
          }}
        /> */}
        <div>
          <div className="flex items-center gap-[10px] my-2">
            <div className="text-xs md:text-base pr-5 md:pr-2.5 text-desaturated-dark-cyan font-bold">
              {job.company}
            </div>
            {job.new && (
              <div className="text-sm p-2 leading-none bg-desaturated-dark-cyan text-white rounded-full">
                NEW!
              </div>
            )}
            {job.featured && (
              <div className="text-sm p-2 leading-none bg-black text-white rounded-full">
                FEATURED
              </div>
            )}
          </div>
          <div className="text-sm md:text-base font-bold hover:text-desaturated-dark-cyan hover:cursor-pointer">
            {job.position}
          </div>
          <div className="flex items-center gap-[10px] my-2 text-dark-grayish-cyan">
            <div>{job.postedAt}</div>
            <span>&middot; </span>
            <div>{job.contract}</div>
            <span>&middot;</span>
            <div>{job.location}</div>
          </div>
        </div>
        <hr className="my-2" />
        <Tags tags={tags} addFilter={addFilter} />
      </article>
    );
  });
  return <>{jobListingsMarkup}</>;
}
