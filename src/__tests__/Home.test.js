import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home', () => {
  it('Renders Home component correctly and create snapshot', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it has a header Element', () => {
    render(<Home />);

    const headerEle = screen.getByRole('heading', {
      name: 'Welcome to our page!',
    });

    expect(headerEle).toBeTruthy();
  });
});
