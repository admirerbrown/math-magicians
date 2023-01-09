/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders learn react link', () => {
  render(< App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
