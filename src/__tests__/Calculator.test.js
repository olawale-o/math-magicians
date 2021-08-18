import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('Renders Calculator component correctly and create snapshot', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders Calculator component and add 2 + 3 = 5', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('5'));
  });

  test('Renders Calculator component and multiply 10 * 3 = 30', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('30'));
  });

  test('Renders Calculator component and divide 55 ÷ 5 = 11', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('11'));
  });

  test('Renders Calculator component and subtract 100 - 20 = 80', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('80'));
  });

  test('Renders Calculator component and reset input = 0', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('AC'));
    expect(screen.getByDisplayValue('0'));
  });

  test('Renders Calculator component and multiple -10 x 5 = -50', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('+/-'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('-50'));
  });

  test('Renders Calculator component and modulo of 7 % 5 = 2', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('2'));
  });

  test('Renders Calculator component and perform multiple operation 5 + 3 x 2 ÷ 4 % 3 = 1', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('1'));
  });
});
