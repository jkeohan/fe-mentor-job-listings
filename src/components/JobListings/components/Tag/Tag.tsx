import React from 'react';
import { useJobListing, useJobListingDispatcher } from '../../../../context';
import { SearchFilterActions as Action } from '../../../../types/JobListing';

interface Props {
  name: string;
}

export function Tag({ name }: Props) {
  const {
    searchFilters: filters
  } = useJobListing();
  const dispatch = useJobListingDispatcher()
  
  const isActive = filters.includes(name);
  
  return (
    <button
      className={`flex-center tag-color leading-none py-2 pb-1 px-3 rounded-t-md rounded-b-md font-bold  hover:bg-desaturated-dark-cyan hover:text-white hover:cursor-pointer
      ${isActive ? 'active-tag-color' : 'tag-color'}`}
      onClick={() => dispatch({type: Action.ToggleFilter, value: name})}
    >
      {name}
    </button>
  );
}
