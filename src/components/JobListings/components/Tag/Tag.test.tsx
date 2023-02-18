import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JobListingProvider } from '../../../../context';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders the tag in its default state where isActive is false', () => {
    render(<Tag name="CSS" />);

    const CSSTag = screen.getByText(/css/i);
    expect(CSSTag).toBeInTheDocument();
    expect(CSSTag).not.toHaveClass('active-tag-color');
  });

  describe('when toggle function is called', () => {
    it('tests toggling the isActive class when element is clicked 2x', async () => {
      render(
        <JobListingProvider>
          <Tag name="CSS" />
        </JobListingProvider>
      );

      await userEvent.click(screen.getByText(/css/i));
      expect(screen.getByText(/css/i)).toHaveClass('active-tag-color');

      await userEvent.click(screen.getByText(/css/i));
      expect(screen.getByText(/css/i)).not.toHaveClass('active-tag-color');
    });
  });
});
