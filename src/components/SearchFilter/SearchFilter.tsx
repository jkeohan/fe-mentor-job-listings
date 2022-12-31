import React from 'react';
import removeButton from '../../assets/images/remove-icon.svg';

interface Props {
  filters: string[];
  clearFilter: () => void;
  removeFilter: (term: string) => void;
}

export function SearchFilter({ filters, clearFilter, removeFilter }: Props) {
  const activeFilters = filters.map((filter, index) => (
    <div className="flex" key={filter}>
      <div
        key={filter}
        className="flex items-center leading-none py-2 pb-1 px-2 bg-light-grayish-cyan-background text-desaturated-dark-cyan rounded-l-md font-bold"
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
        className="flex items-center text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:cursor-pointer"
      >
        Clear
      </div>
    </div>
  );
}
