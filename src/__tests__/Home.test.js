import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  test('it has a header Element', () => {
    render(<Home />);

    const headerEle = screen.getByRole('heading', {
      name: 'Welcome to our page!',
    });

    expect(headerEle).toBeTruthy();
  });
});
