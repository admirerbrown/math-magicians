import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';

describe('Test the navbar component', () => {
  it('has all snapshots working', () => {
    const tree = renderer.create(<Navbar />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    render(<Navbar />);
  });
});
