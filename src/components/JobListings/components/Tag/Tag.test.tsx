// import * as React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import { Tag } from './Tag';

// const mockData = {
//   name: 'CSS',
//   addFilter: jest.fn(),
//   removeFilter: jest.fn(),
//   isActive: false
// };

// describe('Tag', () => {
//   // screen.logTestingPlaygroundURL();
//   it('renders the tag in its default state where isActive is false', () => {
//     render(<Tag {...mockData} />);

//     const CSSTag = screen.getByText(/css/i);
//     expect(CSSTag).toBeInTheDocument();
//     expect(CSSTag).not.toHaveClass('active-tag-color');
//   });

//   it('renders the tag with the active-tag-color class when isActive is true', () => {
//     const tagIsActive = {
//       ...mockData,
//       isActive: true
//     };

//     render(<Tag {...tagIsActive} />);
//     expect(screen.getByText(/css/i)).toHaveClass('active-tag-color');
//   });

//   it('tests clicking a tag calls the addFilter function', async () => {
//     const mockAddFilter = jest.fn();
//     render(<Tag {...mockData} addFilter={mockAddFilter} />);

//     await userEvent.click(screen.getByText(/css/i));
//     expect(mockAddFilter).toHaveBeenCalled();
//   });

//   it('tests clicking an active tag will call the removeFilter function', async () => {
//     const mockRemoveFilter = jest.fn();
//     const dataWithActiveFilter = { ...mockData, isActive:true };

//     render(
//       <Tag {...{ ...dataWithActiveFilter }} removeFilter={mockRemoveFilter} />
//     );

//     await userEvent.click(screen.getByText(/css/i));
//     expect(mockRemoveFilter).toHaveBeenCalled();
//   });
// });
