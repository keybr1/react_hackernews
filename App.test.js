import React from 'react';
import { render } from '@testing-library/react';
import Hnews from './hnews';

test('renders learn react link', () => {
  const { getByText } = render(<Hnews />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
