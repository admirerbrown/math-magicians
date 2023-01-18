import TestRenderer from 'react-test-renderer';
import CalcDesign from '../components/Calculator';

describe('Testing calcDesign component', () => {
  it('should render the calculator Ui correctly', () => {
    const page = TestRenderer.create(<CalcDesign />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
