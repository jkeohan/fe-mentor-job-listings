import { JobTransformed } from '../types/JobListing';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Add = 'ADD_FILTER',
  Remove = 'REMOVE_FILTER',
  Clear = 'CLEAR_FILTER'
}

type FilterType = {
  name: string;
};


type FilterPayload = {
  [Types.Add]: {
    name: string;
  };
  [Types.Remove]: {
    name: string;
  };
};

export type FilterActions =
  ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];

export const filterReducer = (
  state: FilterType,
  action: FilterActions 
) => {
  switch (action.type) {
    case Types.Add:
      return []
    case Types.Remove:
      return []
    default:
      return state;
  }
};

// function jobListingReducer(state: any, action: { type: string; value: string }) {
// export function jobListingReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_FILTER': {
//       const value = action.value;
//       if (state.searchFilters.includes(value)) {
//         const searchFilterArr = [...state.searchFilters, value];
//         const jobListingData = state.jobData.filter((job: JobTransformed) =>
//           job.tags.includes(value)
//         );
//         const allJobListings = new Set([
//           ...jobListingData,
//           ...state.filteredJobListings
//         ]);
//         return {
//           ...state,
//           searchFilterArr,
//           filteredJobListings: Array.from(allJobListings)
//         };
//       }
//     }
//     // case 'REMOVE': {
//     //   return { ...state, searchFilters: [], filteredJobListings: [] };
//     // }
//     // case 'CLEAR': {
//     //   return { ...state, searchFilters: [], filteredJobListings: [] };
//     // }
//     // eslint-disable-next-line no-fallthrough
//     default: {
//       return { ...state, searchFilters: [], filteredJobListings: [] };
//     }
//   }
// }
