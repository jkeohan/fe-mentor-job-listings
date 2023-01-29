import React, { createContext, useContext, useReducer } from 'react';
import jobDataArr from '../data/data.json';
// import { JobTransformed } from '../types/JobListing';
import { transformJobListing } from '../utilities';
import type { JobData, SearchFilterAction} from '../types/JobListing';
import {jobListingReducer} from '../reducers/jobListingReducer';
const jobDataTransformed = transformJobListing(jobDataArr);

const defaultValues: JobData = {
  jobData: jobDataTransformed,
  searchFilters: [],
  filteredJobListings: []
};

const jobContext = {
  jobData: defaultValues,
  setJobData: (action: SearchFilterAction): void => {}
};

const JobListingContext =
  createContext<{
    jobData: JobData;
    setJobData: React.Dispatch<SearchFilterAction>;
  }>(jobContext);

interface Props {
  children: React.ReactNode;
}

export const JobListingProvider: React.FC<Props> = ({ children }) => {
  const [jobData, setJobData] = useReducer(jobListingReducer, defaultValues);

  return (
    <JobListingContext.Provider value={{ jobData, setJobData }}>
      {children}
    </JobListingContext.Provider>
  );
};

export const useJobListingContext = () => {
  const jobListingContext = useContext(JobListingContext);

  if (!jobListingContext) {
    throw new Error(
      'jobListingContext has to be used withing <JobListingContext.Provider>'
    );
  }

  return jobListingContext;
};
