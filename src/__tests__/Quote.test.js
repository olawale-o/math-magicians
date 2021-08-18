import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Quote from '../components/Quote';

describe('Home', () => {
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
