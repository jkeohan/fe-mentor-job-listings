import type { JobData, JobTransformed } from '../types/JobListing';
import { SearchFilterAction } from '../types/JobListing';

export const jobListingReducer = (
  state: JobData,
  action: SearchFilterAction
): JobData => {
  switch (action.type) {
    case 'CLEAR_FILTER':
      return {
        ...state,
        filteredJobListings: [],
        searchFilters: []
      };
    case 'TOGGLE_FILTER':
      return toggleFilter(state, action.value);
    default:
      return state;
  }
};

function toggleFilter(state: JobData, filterName: string) {
  let { searchFilters, filteredJobListings } = state;

  if (state.searchFilters.includes(filterName)) {
    searchFilters = state.searchFilters.filter(
      (filter) => filter !== filterName
    );
    filteredJobListings = state.filteredJobListings.filter((job) =>
      searchFilters.some((filter) => job.tags.includes(filter))
    );
  } else {
      searchFilters = [...searchFilters, filterName];
      const jobListingData = state.jobData.filter((job: JobTransformed) =>
        job.tags.includes(filterName)
      );
      const allJobListings = new Set([
        ...jobListingData,
        ...filteredJobListings
      ]);
      filteredJobListings = Array.from(allJobListings);
  }

  return {
    ...state,
    searchFilters,
    filteredJobListings
  };
}
