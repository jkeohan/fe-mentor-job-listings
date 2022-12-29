import React from 'react';

interface Props {
  tags: string[];
  addFilter: (term: string) => void;
}

export function Tags({ tags, addFilter }: Props) {
  const activeFilters = tags.map((tag, index) => (
    <div className="flex" key={tag}>
      <div
        className="filter flex items-center leading-none py-2 px-3 bg-light-grayish-cyan-background text-desaturated-dark-cyan rounded-t-md rounded-b-md font-bold"
        onClick={() => addFilter(tag)}
      >
        {tag}
      </div>
    </div>
  ));

  return (
    <div className=" flex bg-white pt-4">
      <div className="flex-wrap flex gap-[15px] grow">{activeFilters}</div>
    </div>
  );
}
