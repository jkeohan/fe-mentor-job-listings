import React from 'react';
import { useJobListingContext } from '../../../../context';
import {SearchFilterActions as Action } from '../../../../types/JobListing'

interface Props {
  name: string;
}

export function Tag({ name }: Props) {
  const { jobData: {searchFilters: filters}, setJobData } = useJobListingContext();
  const isActive = filters.includes(name);
  const toggleFilter = (name: string) => {
    isActive
      ? setJobData({ type: Action.RemoveFilter, value: name })
      : setJobData({ type: Action.AddFilter, value: name });
  };

  return (
    <button
      className={`flex-center tag-color leading-none py-2 pb-1 px-3 rounded-t-md rounded-b-md font-bold  hover:bg-desaturated-dark-cyan hover:text-white hover:cursor-pointer
        ${isActive && 'active-tag-color'}`}
      onClick={() => toggleFilter(name)}
    >
      {name}
    </button>
  );
}
