import React from 'react';

interface Props {
  tags: string[];
  addFilter: (term: string) => void;
}

export function Tags({ tags, addFilter }: Props) {
  const activeFilters = tags.map((tag, index) => (
    <div
      key={tag}
      className="flex items-center leading-none py-2 pb-1 px-3 bg-light-grayish-cyan-background text-desaturated-dark-cyan rounded-t-md rounded-b-md font-bold hover:bg-desaturated-dark-cyan hover:text-white hover:cursor-pointer"
      onClick={() => addFilter(tag)}
    >
      {tag}
    </div>
  ));

  return (
    <div className="flex flex-wrap md:justify-end gap-[15px] grow bg-white pt-4 md:px-4">
      {activeFilters}
    </div>
  );
}
