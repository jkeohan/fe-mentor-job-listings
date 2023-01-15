import React from 'react';

interface Props {
  name: string;
  addFilter: (term: string) => void;
  removeFilter: (term: string) => void;
  isActive: boolean;
}

export function Tag({ name, addFilter, removeFilter, isActive}: Props) {
  
    const toggleFilter = (name: string) => {
      isActive ? removeFilter(name) : addFilter(name);
    };

    return (
      <button
        className={`flex-center tag-color leading-none py-2 pb-1 px-3 rounded-t-md rounded-b-md font-bold  hover:bg-desaturated-dark-cyan hover:text-white hover:cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white
        ${isActive && 'active-tag-color'}`}
        onClick={() => toggleFilter(name)}
      >
        {name}
      </button>
    );
};
