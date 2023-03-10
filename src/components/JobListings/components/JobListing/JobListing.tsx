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

  const getNewAndFeaturedAriaLabelText = () => {
    const { isNew, isFeatured } = job;
    if (isNew && isFeatured) {
      return 'This job has been recently posted and is featured';
    }
    if (isNew) return 'This job has been recently posted';
    if (isFeatured) return 'This job is featured';

    return '';
  };

  const newAndFeaturedAriaLabelText = getNewAndFeaturedAriaLabelText();

  const jobPostingSpecifics = `job posted ${job.postedAt} for position ${job.contract} and location is ${job.location}`;

  return (
    <article
      aria-label="job listing"
      className="job-listing bg-white p-4 pt-0 md:pt-4 text-left rounded-md shadow-xl shadow-desaturated-dark-cyan/30 md:flex md:items-center md:justify-center md:gap-5"
      key={job.id}
    >
      <h2 aria-label={`${job.position} for ${job.company}`}>
        <span className="hidden">{`${job.position} for ${job.company}`}</span>
      </h2>
      <img
        aria-label={`${job.company} company logo`}
        src={`../assets/images/${job.logo}`}
        alt="logo"
        className="-mt-[25px] md:mt-0 w-12 md:w-[80px] md:h-[80px]"
      />
      <div className="flex-[0_1_100%]">
        <div
          aria-label={newAndFeaturedAriaLabelText}
          className="flex items-center gap-[10px] my-2"
        >
          <div
            aria-hidden="true"
            className="text-xs md:text-base pr-5 md:pr-2.5 text-desaturated-dark-cyan font-bold"
          >
            {job.company}
          </div>
          {job.isNew && (
            <span
              aria-hidden="true"
              className="text-sm p-2 pb-1 leading-none text-white rounded-full bg-desaturated-dark-cyan "
            >
              NEW!
            </span>
          )}
          {job.isFeatured && (
            <span
              aria-hidden="true"
              className="text-sm p-2 pb-1 leading-none text-white rounded-full bg-black "
            >
              FEATURED
            </span>
          )}
        </div>
        <div className="text-sm md:text-base font-bold hover:text-desaturated-dark-cyan hover:cursor-pointer">
          {job.position}
        </div>
        <div aria-label={jobPostingSpecifics}>
          <div
            aria-hidden="true"
            className="flex-center gap-[10px] my-2 text-dark-grayish-cyan"
          >
            <div aria-label={`job posted ${job.postedAt}`}>{job.postedAt}</div>
            <span aria-hidden="true" className="scale-150 opacity-75">
              &middot;{' '}
            </span>
            <div aria-label={`position is ${job.contract}`}>{job.contract}</div>
            <span aria-hidden="true" className="scale-150 opacity-75">
              &middot;
            </span>
            <div aria-label={`location is ${job.location}`}>{job.location}</div>
          </div>
        </div>
      </div>
      <hr className="my-2 md:hidden" />
      <div className="flex flex-wrap gap-[15px] grow bg-white p-2 md:p-0 md:justify-end">
        {tagMarkup}
      </div>
    </article>
  );
}
