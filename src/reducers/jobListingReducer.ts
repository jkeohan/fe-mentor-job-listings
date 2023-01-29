import type { JobData, JobTransformed } from '../types/JobListing';
import {SearchFilterAction} from '../types/JobListing'

export const jobListingReducer = (
  state: JobData,
  action: SearchFilterAction
): JobData => {
  console.log(state, action);
  let searchFilters = state.searchFilters;
  let filteredJobListings = state.filteredJobListings;
  console.log({ state });
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

      console.log({ filteredJobListings });
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
