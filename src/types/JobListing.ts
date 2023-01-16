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

export interface JobContextType {
  jobDataArr: Job[];
  jobData: JobTransformed[];
  searchFilters: string[];
  filteredJobListings: JobTransformed[];
  dispatch: () => void;
};
