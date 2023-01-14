import * as React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import { JobListing } from '../JobListing';

const mockData = {
  job: {
    id: 1,
    company: 'Photosnap',
    logo: 'photosnap.svg',
    isNew: true,
    isFeatured: true,
    new: Boolean,
    featured: Boolean,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS'],
    tools: [],
    tags: ['CSS', 'HTML']
  },
  addFilter: jest.fn(),
  removeFilter: jest.fn(),
  filters: []
};

describe('<JobListing />', () => {
  describe('<Tag />', () => {
    it('renders all tags in the tags array and confirms they do not have the active-tag-color class assigned', () => {
      render(<JobListing {...mockData} />);
      // screen.logTestingPlaygroundURL();

      const CSSTag = screen.getByText(/css/i);
      const HTMLTag = screen.getByText(/html/i);

      expect(CSSTag).toBeInTheDocument();
      expect(CSSTag).not.toHaveClass('active-tag-color');

      expect(HTMLTag).toBeInTheDocument();
      expect(HTMLTag).not.toHaveClass('active-tag-color');
    });
  });
});
