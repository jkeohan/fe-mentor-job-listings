import React, {useContext} from 'react';
import { JobListing } from './components/JobListing';
import { JobTransformed } from '../../types/JobListing';
import { JobListingContext } from '../../context/jobListingContext';

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
  const context = useContext(JobListingContext)
  // const {jobData} = context
  console.log('JobListings - context', context);

  const jobListingsMarkup = context?.state.jobData.map((job: JobTransformed) => {
    return (
      <JobListing
        key={job.id}
        job={job}
        // addFilter={context?.dispatch}
        // removeFilter={context?.dispatch}
        filters={context?.state.searchFilters}
        // addFilter={addFilter}
        // removeFilter={removeFilter}
        // filters={filters}
      />
    );
  });
  return <>{jobListingsMarkup}</>
}
