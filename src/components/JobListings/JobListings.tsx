import React from 'react';
import { JobListing } from './components/JobListing';
import { useJobListingContext } from '../../context';
import { JobTransformed } from '../../types/JobListing';

export function JobListings() {
  const {jobData: {jobData, filteredJobListings, searchFilters}}  = useJobListingContext();
  const activeJobListings =
      filteredJobListings.length > 0 ? filteredJobListings : jobData;

  const jobListingsMarkup = activeJobListings.map((job: JobTransformed) => {
    return (
      <JobListing key={job.id} job={job} filters={searchFilters} />
    );
  });
  return <>{jobListingsMarkup}</>
}
