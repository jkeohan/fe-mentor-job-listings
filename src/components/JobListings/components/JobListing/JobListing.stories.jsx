import React from 'react';

import { JobListing } from './JobListing';

export default {
  title: 'JobListings/JobListing',
  component: JobListing,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};

const jobListingData = {
  id: 1,
  company: 'Photosnap',
  logo: 'photosnap.svg',
  new: true,
  featured: true,
  position: 'Senior Frontend Developer',
  role: 'Frontend',
  level: 'Senior',
  postedAt: '1d ago',
  contract: 'Full Time',
  location: 'USA Only',
  languages: ['HTML', 'CSS', 'JavaScript'],
  tools: [],
  isNew: true,
  isFeatured: true,
  tags: ['Senior Frontend Developer', 'Frontend', 'HTML', 'CSS', 'JavaScript']
};

const Template = (args) => <JobListing {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    job: jobListingData,
    filters: []
};
