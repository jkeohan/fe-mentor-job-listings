import React from 'react';
import { Tags } from './components/Tags';
import * as logos from '../../assets/images/';
import './styles.scss';
import { JobListingObj } from '../../types/JobListingObj';

interface Props {
  jobsData: JobListingObj[];
  addFilter: (term: string) => void;
}

export function JobListing({ jobsData, addFilter }: Props) {
  const jobListingsMarkup = jobsData.map((job, index) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    return (
      <article className="job-listing p-4 pt-0 text-left" key={job.id}>
        {/* <ReactSVG src={svgPath} /> */}
        <img src={logos.photosnap} alt="logo" className="w-12 " />
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
