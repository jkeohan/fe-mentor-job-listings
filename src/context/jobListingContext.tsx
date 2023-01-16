import React, { createContext, useReducer, Dispatch } from 'react';
import jobDataArr from '../data/data.json';
import { Job, JobTransformed} from '../types/JobListing';
import { transformJobListing } from '../utilities';
// import { jobListingReducer } from './jobListingReducer';
import {filterReducer, FilterActions} from './jobListingReducer'
const jobData = transformJobListing(jobDataArr);

const initialState = {
  jobDataArr,
  jobData,
  searchFilters: [],
  filteredJobListings: []
};

// type Action = { type: 'ADD' } | { type: 'REMOVE' } | { type: 'RESET' };
// type Dispatch = (action: Action) => void;
// type State = {
//   jobDataArr: Job[];
//   jobData: [];
//   searchFilters: [];
//   filteredJobListings: [];
// };

// const context = {
//   state: initialState,
//   dispatch: (action: Action) => void;
// }
// type CountProviderProps = { children: React.ReactNode };

// const CountStateContext =
//   React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
//     undefined
//   );

// function countReducer(state: State, action: Action) {

type JobContextType = {
  jobDataArr: Job[];
  jobData: JobTransformed[];
  searchFilters: string[];
  filteredJobListings: JobTransformed[];
};


// export const JobListingContext = createContext<JobContextType>(initialState);
const JobListingContext = createContext<{
  state: JobContextType;
  dispatch: Dispatch<FilterActions>;
  // dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

// export const JobListingContext = createContext<{ state: State; dispatch: Dispatch} | undefined>(undefined);

// https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
interface Props {
  children: React.ReactNode;
}

// https://stackoverflow.com/questions/57242264/cannot-find-namespace-ctx-error-when-creating-context-with-react-typescript
const JobListingProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  // console.log('state', state, dispatch);

  return (
    <JobListingContext.Provider
      // value={{ ...state, dispatch }}
      value={{ state, dispatch }}
    >
      {children}
    </JobListingContext.Provider>
    // <div>test</div>
  );
};

export { JobListingProvider, JobListingContext};


// const initialState: {jobDataArr: Job[], jobData: JobTransformed[], searchFilters: string[], filteredJobListings:JobTransformed[]} = {
//   jobData: [],
//   jobDataArr: [],
//   searchFilters: [],
//   filteredJobListings: []
// }

// export type JobContextType = {
//   jobDataArr: Job[];
//   jobData: JobTransformed[];
//   searchFilters: string[];
//   filteredJobListings: JobTransformed[];
// };

// const removeFilter() => {}
// const addFilter() => {}
// const clearFilter => {}
