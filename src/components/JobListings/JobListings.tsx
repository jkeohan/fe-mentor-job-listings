import React from 'react';
import { JobListing } from './components/JobListing';
import { useJobListingContext } from '../../context';

interface Props {
  addFilter: (term: string) => void;
  removeFilter: (term: string) => void;
}

export function JobListings({
  addFilter,
  removeFilter,
}: Props) {
  const {jobData, searchFilters}  = useJobListingContext();

  const jobListingsMarkup = jobData.map((job) => {
    return (
        <JobListing
          key={job.id}
          job={job}
          addFilter={addFilter}
          removeFilter={removeFilter}
          filters={searchFilters}
        />
    );
  });
  return <>{jobListingsMarkup}</>
}
