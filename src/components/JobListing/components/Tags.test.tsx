import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tags } from './Tags';

const mockData = {
  tags: ['HTML', 'CSS'],
  addFilter: jest.fn(),
  removeFilter: jest.fn(),
  filters: []
};

describe('Tags', () => {
  // screen.logTestingPlaygroundURL();
  it('renders all tags in the tags array and confirms they do not have the active-tag-color class assigned', () => {
    render(<Tags {...mockData} />);

    const CSSTag = screen.getByText(/css/i);
    const HTMLTag = screen.getByText(/html/i);

    expect(CSSTag).toBeInTheDocument();
    expect(CSSTag).not.toHaveClass('active-tag-color');

    expect(HTMLTag).toBeInTheDocument();
    expect(HTMLTag).not.toHaveClass('active-tag-color');
  });

  it('assigns the active-tag-color class to all tags in the filters array', () => {
    const dataWithActiveFilter = {
      ...mockData,
      tags: ['HTML', 'CSS', 'Sass'],
      filters: ['CSS', 'HTML']
    };

    render(<Tags {...dataWithActiveFilter} />);
    expect(screen.getByText(/css/i)).toHaveClass('active-tag-color');
    expect(screen.getByText(/html/i)).toHaveClass('active-tag-color');
    expect(screen.getByText(/sass/i)).not.toHaveClass('active-tag-color');
  });

  it('tests clicking a tag calls the addFilter function', async () => {
    const mockAddFilter = jest.fn();

    render(<Tags {...mockData} addFilter={mockAddFilter} />);

    await userEvent.click(screen.getByText(/css/i));
    expect(mockAddFilter).toHaveBeenCalled();
  });

  it('tests clicking an active tag will call the removeFilter function', async () => {
    const mockRemoveFilter = jest.fn();
    const dataWithActiveFilter = {...mockData,filters: ['CSS']};

    render(
      <Tags {...{ ...dataWithActiveFilter }} removeFilter={mockRemoveFilter} />
    );

    await userEvent.click(screen.getByText(/css/i));
    expect(mockRemoveFilter).toHaveBeenCalled();
  });
});
