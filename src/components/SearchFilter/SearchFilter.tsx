import React from 'react';
import removeButton from '../../assets/images/remove-icon.svg';
import './styles.scss';

interface Props {
  filters: string[];
  clearFilter: () => void;
  removeFilter: (term: string) => void;
}

export function SearchFilter({ filters, clearFilter, removeFilter }: Props) {
  const activeFilters = filters.map((filter, index) => (
    <div className="filter-item flex" key={filter}>
      <div className="filter flex items-center leading-none py-1 px-2 bg-light-grayish-cyan-background text-desaturated-dark-cyan rounded-t-md rounded-b-md font-bold">
        {filter}
      </div>
      <span className="close">
        <img
          className="w-6 h-6"
          src={removeButton}
          alt="mobile-header"
          onClick={() => removeFilter(filter)}
        />
      </span>
    </div>
  ));

  return (
    <div className="search-filter flex bg-white p-4">
      <div className="flex-wrap flex gap-[15px] grow">{activeFilters}</div>
      <div onClick={clearFilter} className="clear flex">
        Clear
      </div>
    </div>
  );
}
