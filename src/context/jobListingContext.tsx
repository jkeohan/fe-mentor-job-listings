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

const JobListingDataContext = createContext<JobData>(defaultValues);
const JobListingDispatcherContext = createContext<
  React.Dispatch<SearchFilterAction>>((action: SearchFilterAction): void => {});
interface Props {
  children: React.ReactNode;
}

export const JobListingProvider: React.FC<Props> = ({ children }) => {
  const [jobData, dispatch] = useReducer(jobListingReducer, defaultValues);

  return (
    <JobListingDispatcherContext.Provider value={dispatch}>
      <JobListingDataContext.Provider value={jobData}>
        {children}
      </JobListingDataContext.Provider>
    </JobListingDispatcherContext.Provider>
  );
};

export const useJobListing = () => {
  const data = useContext(JobListingDataContext);

  if (!data) {
    throw new Error(' useJobListing has to be used within a JobListingProvider.');
   
  }

  return data;
};

export const useJobListingDispatcher = () => {
  const dispatcher = useContext(JobListingDispatcherContext);

  if (!dispatcher) {
    throw new Error(
      'useJobListingDispatcher has to be used within JobListingDispatcherContext'
    );
  }

  return dispatcher;
};
