import React from 'react';
import { Tag } from '../Tag/Tag';
import { JobTransformed } from '../../../../types/JobListing';

interface Props {
  job: JobTransformed;
  addFilter: (term: string) => void;
  removeFilter: (term: string) => void;
  filters: string[];
}

export function JobListing({ job, addFilter, removeFilter, filters }: Props) {
  const tagMarkup = job.tags.map((tag) => {
    const isActive = filters.includes(tag);
    return (
      <Tag
        key={tag}
        name={tag}
        addFilter={addFilter}
        removeFilter={removeFilter}
        isActive={isActive}
      />
    );
  });
  const ariaLabel = `job listing ${job.position}`;

  return (
    <article
      aria-label={ariaLabel}
      className="job-listing bg-white p-4 pt-0 md:pt-4 text-left rounded-md shadow-xl shadow-desaturated-dark-cyan/30 md:flex md:items-center md:justify-center md:gap-5"
      key={job.id}
    >
      <img
        src={`../assets/images/${job.logo}`}
        alt={`${job.company} logo `}
        className="-mt-[25px] md:mt-0 w-12 md:w-[80px] md:h-[80px]"
      />
      <div>
        <div className="flex items-center gap-[10px] my-2">
          <h2 className="text-xs md:text-base pr-5 md:pr-2.5 text-desaturated-dark-cyan font-bold">
            {job.company}
          </h2>
          {/* add sr to the span to say featured or new posting */}
          {job.isNew && (
            <span className="text-sm p-2 pb-1 leading-none text-white rounded-full bg-desaturated-dark-cyan ">
              NEW!
            </span>
          )}
          {job.isFeatured && (
            <span className="text-sm p-2 pb-1 leading-none text-white rounded-full bg-black ">
              FEATURED
            </span>
          )}
        </div>
        {/* case to make it h3  */}
        <div className="text-sm md:text-base font-bold hover:text-desaturated-dark-cyan hover:cursor-pointer">
          {job.position}
        </div>
        <div className="flex-center gap-[10px] my-2 text-dark-grayish-cyan">
          <div>{job.postedAt}</div>
          {/* replace dot with svg and give it aria-role=image and blank alt text */}
          <span className="scale-150 opacity-75">&middot; </span>
          <div>{job.contract}</div>
          <span className="scale-150 opacity-75">&middot;</span>
          <div>{job.location}</div>
        </div>
      </div>
      {/* why is this hr hear... aria-role="presentation" */}
      <hr className="my-2" />
      {/* add new section element/text to say these are filters aria-label="filter by" */}
      {/* click button provides no feedback
        select a filter option 
        aria-liveregion so that anytime button is activated there is an alert 
      */}
      <div className="flex flex-wrap gap-[15px] grow bg-white pt-4 md:px-4 md:justify-end">
        {tagMarkup}
      </div>
    </article>
  );
}
