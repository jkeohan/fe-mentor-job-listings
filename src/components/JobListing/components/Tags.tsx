import React from 'react';

interface Props {
  tags: string[];
  addFilter: (term: string) => void;
  removeFilter: (term: string) => void;
  filters: string[];
}

export function Tags({ tags, addFilter, removeFilter, filters }: Props) {
  const tagMarkup = tags.map((tag, index) => {
    const isActiveTag = filters.includes(tag);

    const toggleFilter = (tag: string) => {
      isActiveTag ? removeFilter(tag) : addFilter(tag);
    };

    return (
      <div
        key={tag}
        className={`flex-center tag-color leading-none py-2 pb-1 px-3 rounded-t-md rounded-b-md font-bold    hover:bg-desaturated-dark-cyan hover:text-white hover:cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white
        ${isActiveTag && 'active-tag-color'}`}
        onClick={() => toggleFilter(tag)}
      >
        {tag}
      </div>
    );
  });

  return (
    <div className="flex flex-wrap gap-[15px] grow bg-white pt-4 md:px-4 md:justify-end">
      {tagMarkup}
    </div>
  );
}
