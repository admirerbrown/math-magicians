import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Quotes from '../components/Quote';

describe('Test the quote component', () => {
  it('has all snapshots working', () => {
    const tree = renderer.create(<Quotes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has the correct text', () => {
    const { getByText } = render(<Quotes />);
    const quoteText = getByText(/Neil deGrasse Tyson, American astrophysicist and author/i);
    expect(quoteText).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    render(<Quotes />);
  });
});
