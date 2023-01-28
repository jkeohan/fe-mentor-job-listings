import {createContext, useContext} from "react";
import jobDataArr from '../data/data.json';
import { JobTransformed } from '../types/JobListing';
import { transformJobListing } from '../utilities';
const jobData = transformJobListing(jobDataArr);

interface JobDataContext {
  jobData: JobTransformed[];
  searchFilters: string[];
  filteredJobListings: JobTransformed[];
}

const initialState = {
  jobData,
  searchFilters: [],
  filteredJobListings: []
};

export const JobListingContext = createContext<JobDataContext>(initialState)

export const useJobListingContext = () => {
  const jobListingContext = useContext(JobListingContext);

  if(!jobListingContext) {
    throw new Error("jobListingContext has to be used withing <JobListingContext.Provider>")
  }

  return jobListingContext
}