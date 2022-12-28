import React from 'react';
import { Tags } from './components/Tags';
import { JobListingObj } from '../../types/JobListingObj';
import { photosnap } from '../../assets/images';


interface Props {
  jobsData: JobListingObj[];
  addFilter: (term: string) => void;
}

export function JobListing({ jobsData, addFilter }: Props) {
  const jobListingsMarkup = jobsData.map((job, index) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    // const svgPath = `./assets/images/${job.logo}`;
    // https://create-react-app.dev/docs/using-the-public-folder#adding-assets-outside-of-the-module-system
    const svgLogoPath = `${process.env.PUBLIC_URL}/assets/images/${job.logo}`;
    console.log({ svgLogoPath });

    return (
      <article
        className="job-listing p-4 pt-0 md:pt-4 text-left rounded-md shadow-xl shadow-desaturated-dark-cyan/30 md:flex md:items-center md:justify-center md:gap-5"
        key={job.id}
      >
        <img src={`../assets/images/${job.logo}`} alt="logo" className="-mt-[25px] md:mt-0 w-12 md:w-[80px] md:h-[80px]"/>
        <div>
          <div className="flex items-center gap-[10px] my-2">
            <div className="text-xs md:text-base pr-5 md:pr-2.5 text-desaturated-dark-cyan font-bold">
              {job.company}
            </div>
            {job.new && (
              <span className="text-sm p-2 pb-1 leading-none text-white rounded-full bg-desaturated-dark-cyan ">
                NEW!
              </span>
            )}
            {job.featured && (
              <span className="text-sm p-2 pb-1 leading-none text-white rounded-full bg-black ">
                FEATURED
              </span>
            )}
          </div>
          <div className="text-sm md:text-base font-bold hover:text-desaturated-dark-cyan hover:cursor-pointer">
            {job.position}
          </div>
          <div className="flex-center gap-[10px] my-2 text-dark-grayish-cyan">
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
