import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import HomePage from '../components/Home';

describe('Testing homepage component', () => {
  it('should render correctly', () => {
    const page = TestRenderer.create(<HomePage />).toJSON();
    expect(page).toMatchSnapshot();
  });
  it('should have a heading displaying welcome to our page', async () => {
    render(<HomePage />);
    const title = await screen.findByRole('heading');
    expect(title).toHaveTextContent('Welcome to our page');
  });
});
