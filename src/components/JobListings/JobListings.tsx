import React from 'react';
import { JobListing } from './components/JobListing';
import { JobTransformed } from '../../types/JobListing';

interface Props {
  jobsData: JobTransformed[];
  addFilter: (term: string) => void;
  removeFilter: (term: string) => void;
  filters: string[];
}

export function JobListings({
  jobsData,
  addFilter,
  removeFilter,
  filters
}: Props) {
  const jobListingsMarkup = jobsData.map((job) => {
    return (
        <JobListing
          key={job.id}
          job={job}
          addFilter={addFilter}
          removeFilter={removeFilter}
          filters={filters}
        />
    );
  });
  return <>{jobListingsMarkup}</>
}
