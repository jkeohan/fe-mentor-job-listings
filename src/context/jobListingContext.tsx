import React, { createContext, useContext, useReducer } from 'react';
import jobDataArr from '../data/data.json';
import { JobTransformed } from '../types/JobListing';
import { transformJobListing } from '../utilities';
const jobDataTransformed = transformJobListing(jobDataArr);

export enum SearchFilterActions {
  AddFilter = 'ADD_FILTER',
  RemoveFilter = 'REMOVE_FILTER',
  ClearFilter = 'CLEAR_FILTER'
}

type JobData = {
  jobData: JobTransformed[];
  searchFilters: string[];
  filteredJobListings: JobTransformed[];
};

export type SearchFilterAction =
  | {
      type: 'ADD_FILTER';
      value: string;
    }
  | {
      type: 'REMOVE_FILTER';
      value: string;
    }
  | {
      type: 'CLEAR_FILTER'
    };

const jobListingReducer = (
  state: JobData,
  action: SearchFilterAction
): JobData => {
  console.log(state,action);
  let searchFilters = state.searchFilters;
  let filteredJobListings = state.filteredJobListings;
  console.log({state})
  switch (action.type) {
    case 'CLEAR_FILTER':
      return { 
        ...state,
        filteredJobListings: [],
        searchFilters: []
      };
    case 'ADD_FILTER':
      if (!searchFilters.includes(action.value)) {
        searchFilters = [...searchFilters, action.value];
        const jobListingData = state.jobData.filter((job: JobTransformed) =>
          job.tags.includes(action.value)
        );
        const allJobListings = new Set([
          ...jobListingData,
          ...filteredJobListings
        ]);
        filteredJobListings = Array.from(allJobListings);
      }

      console.log({filteredJobListings})
      return {
        ...state,
        searchFilters,
        filteredJobListings
      };
    case 'REMOVE_FILTER':
      searchFilters = state.searchFilters.filter(
        (filter) => filter !== action.value
      );
      filteredJobListings = state.filteredJobListings.filter((job) =>
        searchFilters.some((filter) => job.tags.includes(filter))
      );
      return {
        ...state,
        searchFilters,
        filteredJobListings
      };
    default:
      return state;
  }
};

const defaultValues: JobData = {
  jobData: jobDataTransformed,
  searchFilters: [],
  filteredJobListings: []
};

const myJobData = {
  jobData: defaultValues,
  setJobData: (action: SearchFilterAction): void => {}
};

export const JobListingContext =
  createContext<{
    jobData: JobData;
    setJobData: React.Dispatch<SearchFilterAction>;
  }>(myJobData);

interface Props {
  children: React.ReactNode;
}

export const JobListingProvider: React.FC<Props> = ({ children }) => {
  const [jobData, setJobData] = useReducer(jobListingReducer, defaultValues);
  console.log('this is jobData', jobData);

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

// function handleAddFilter(
//   term: string,
//   searchFilters: [],
//   jobData: [],
//   jobListingData: [],
//   filteredJobListings: []
// ) {
//   if (!searchFilters.includes(term)) {
//     const searchFilterArr = [...searchFilters, term];
//     const jobListingData = jobData.filter((job: JobTransformed) =>
//       job.tags.includes(term)
//     );
//     const allJobListings = new Set([
//       ...jobListingData,
//       ...filteredJobListings
//     ]);
//     return {

//     }
//     setSearchFilters(searchFilterArr);
//     setFilteredJobListings(Array.from(allJobListings));
//   }
// };
