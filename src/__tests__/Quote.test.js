import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

describe('Home', () => {
  it('Renders Quote component correctly and create snapshot', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it has a header Element', () => {
    render(<Quote />);

    const quote = screen.getByTestId('quote');

    expect(quote).toBeTruthy();
    expect(quote).toBeInTheDocument();

    expect(quote).toHaveTextContent(
      /Mathematics is not about numbers, equations, computations/i,
    );
  });
});
