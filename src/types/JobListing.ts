export type Job = {
  id: number;
  company: string;
  logo: string;
  new: Boolean;
  featured: Boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type JobTransformed = Omit<Job, 'new' | 'featured'> & {
  isNew: Boolean;
  isFeatured: Boolean;
  tags: string[];
};

export type JobData = {
  jobData: JobTransformed[];
  searchFilters: string[];
  filteredJobListings: JobTransformed[];
};

export enum SearchFilterActions {
  AddFilter = 'ADD_FILTER',
  RemoveFilter = 'REMOVE_FILTER',
  ClearFilter = 'CLEAR_FILTER'
}

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
      type: 'CLEAR_FILTER';
    };
