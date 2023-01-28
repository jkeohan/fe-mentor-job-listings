import React from 'react';
import removeButton from '../../assets/images/remove-icon.svg';
import { useJobListingContext } from '../../context';

interface Props {
  clearFilter: () => void;
  removeFilter: (term: string) => void;
  filters?: string[];  // set as optional to avoid typescript errors
}

export function SearchFilter({ filters = [], clearFilter, removeFilter }: Props) {
  const {searchFilters} = useJobListingContext()
  console.log(searchFilters, filters)
  const activeFilters = searchFilters.map((filter, index) => (
    <div className="flex" key={filter}>
      <div
        className="flex-center tag-color leading-none py-2 pb-1 px-2 rounded-l-md font-bold"
      >
        {filter}
      </div>

      <div
        className="cursor-pointer text-white bg-desaturated-dark-cyan hover:bg-black rounded-r-md 
     p-[2px]"
      >
        <img
          className="w-6 h-6"
          src={removeButton}
          alt="mobile-header"
          onClick={() => removeFilter(filter)}
        />
      </div>
    </div>
  ));

  return (
    <div className="flex bg-white p-4 w-[327px] md:m-w-[90%] md:w-3/4 m-auto relative">
      <div className="flex-wrap flex gap-[15px] grow">{activeFilters}</div>
      <div
        onClick={clearFilter}
        className="flex-center text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:cursor-pointer"
      >
        Clear
      </div>
    </div>
  );
}
