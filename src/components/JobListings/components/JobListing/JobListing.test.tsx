import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
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
    tags: ['CSS', 'HTML', 'Senior Frontend Developer', 'Frontend']
  },
  addFilter: jest.fn(),
  removeFilter: jest.fn(),
  filters: []
};

describe('<JobListing />', () => {
  it('renders a job listing component with both new and featured tags', () => {
    render(<JobListing {...mockData} />);

    const article = screen.getByRole('article', {name: /job listing/i})

    expect(within(article).getByRole('img', {hidden:true})).toBeInTheDocument();
    expect(within(article).getByText(/photosnap/i)).toBeInTheDocument()
    expect(within(article).getByText(/new/i)).toBeInTheDocument();
    expect(within(article).getByText(/featured/i)).toBeInTheDocument();
    // expect(within(article).getByText(/senior frontend developer/i)).toBeInTheDocument();
    expect(within(article).getByText(/1d ago/i)).toBeInTheDocument();
    expect(within(article).getByText(/full time/i)).toBeInTheDocument();
    expect(within(article).getByText(/usa only/i)).toBeInTheDocument();
  })

  describe('<Tag />', () => {
    it('renders all tags in the tags array and confirms they do not have the active-tag-color class assigned', () => {
      render(<JobListing {...mockData} />);
      // screen.logTestingPlaygroundURL();

      const allTags = screen.queryAllByLabelText(/filter tag/i);
      expect(allTags.length).toBe(4)

      const CSSTag = screen.getByText(/css/i);

      expect(CSSTag).toBeInTheDocument();
      expect(CSSTag).not.toHaveClass('active-tag-color');
    });
  });
});
