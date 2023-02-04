import React from 'react';
import { Tag } from '../Tag/Tag';
import { JobTransformed } from '../../../../types/JobListing';

interface Props {
  job: JobTransformed;
  filters: string[];
}

export function JobListing({ job, filters }: Props) {
  const tagMarkup = job.tags.map((tag) => {
    return <Tag key={tag} name={tag} />;
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
        alt="logo"
        className="-mt-[25px] md:mt-0 w-12 md:w-[80px] md:h-[80px]"
      />
      <div className="flex-[0_1_100%]">
        <div className="flex items-center gap-[10px] my-2">
          <div className="text-xs md:text-base pr-5 md:pr-2.5 text-desaturated-dark-cyan font-bold">
            {job.company}
          </div>
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
        <div className="text-sm md:text-base font-bold hover:text-desaturated-dark-cyan hover:cursor-pointer">
          {job.position}
        </div>
        <div className="flex-center gap-[10px] my-2 text-dark-grayish-cyan">
          <div>{job.postedAt}</div>
          <span className="scale-150 opacity-75">&middot; </span>
          <div>{job.contract}</div>
          <span className="scale-150 opacity-75">&middot;</span>
          <div>{job.location}</div>
        </div>
      </div>
      <hr className="my-2 md:hidden" />
      <div className="flex flex-wrap gap-[15px] grow bg-white p-2 md:p-0 md:justify-end">
        {tagMarkup}
      </div>
    </article>
  );
}
