import calculate from '../logic/calculate';

describe('Calculate', () => {
  describe('AC', () => {
    test('result should equal {} when obj = {total: "7", next: "", operattion: ""} and buttonName is AC', () => {
      const obj = {
        total: '7',
        next: '',
        operation: '',
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: null, operation: null, next: null });
    });

    test('result should equal {} when obj = {total: "0", next: "", operattion: "*"} and buttonName is AC', () => {
      const obj = {
        total: '0',
        next: '',
        operation: '*',
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: null, operation: null, next: null });
    });

    test('result equal {} when obj = {total: "7", next: "45", operattion: "+"} and buttonName is AC', () => {
      const obj = {
        total: '7',
        next: '45',
        operation: '+',
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: null, operation: null, next: null });
    });

    test('result should equal {} when obj = {total: null, next: "45.", operattion: null} and buttonName is AC', () => {
      const obj = {
        total: null,
        next: '45.',
        operation: null,
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: null, operation: null, next: null });
    });

    test('result should equal {} when obj = {total: 45.2, next: null, operation: "*"} and buttonName is AC', () => {
      const obj = {
        total: '45.2',
        next: null,
        operation: 'x',
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: null, operation: null, next: null });
    });

    test('result should equal {} when obj = {total: 45.2, next: 2, operation: "*"} and buttonName is AC', () => {
      const obj = {
        total: 45.2,
        next: 2,
        operation: 'x',
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: null, operation: null, next: null });
    });
  });

  describe('Number', () => {
    test('result should equal {next: "0", total: null} when obj = {total: null, next: null, operation: null} and buttonName is 0', () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      const buttonName = '0';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ next: '0', total: null });
    });

    test('result should equal {total: "7", operation: "+" next: null} when obj = {total: null, next: "7", operation: null} and buttonName is +', () => {
      const obj = {
        total: null,
        next: '7',
        operation: null,
      };
      const buttonName = '+';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '7', operation: '+', next: null });
    });

    test('result should equal {next: "2"} when obj = {total: "10", next: null, operation: "*"} and buttonName is 2', () => {
      const obj = {
        total: '10',
        next: null,
        operation: '*',
      };
      const buttonName = '2';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ next: '2' });
    });

    test('result should equal {next: "23" total: null} when obj = {total: null, next: 2, operation: null} and buttonName is 3', () => {
      const obj = {
        total: null,
        next: '2',
      };
      const buttonName = '3';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: null, next: '23' });
    });
  });

  describe('Operator', () => {
    test('result should equal {total: "34" next: null, operation: "+"} when obj = {total: null, next: 34, operation: null} and buttonName is +', () => {
      const obj = {
        total: null,
        next: '34',
        operation: null,
      };
      const buttonName = '+';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '34', next: null, operation: '+' });
    });

    test('result should equal {total: "12" next: null, operation: "-"} when obj = {total: null, next: "12", operation: null} and buttonName is -', () => {
      const obj = {
        total: null,
        next: '12',
        operation: null,
      };
      const buttonName = '-';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '12', next: null, operation: '-' });
    });

    test('result should equal {total: "10" next: null, operation: "x"} when obj = {total: null, next: "10", operation: null} and buttonName is x', () => {
      const obj = {
        total: null,
        next: '10',
        operation: null,
      };
      const buttonName = 'x';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '10', next: null, operation: 'x' });
    });

    test('result should equal {total: "9" next: null, operation: "÷"} when obj = {total: null, next: "9", operation: null} and buttonName is ÷', () => {
      const obj = {
        total: null,
        next: '9',
        operation: null,
      };
      const buttonName = '÷';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '9', next: null, operation: '÷' });
    });

    test('result should equal {total: "5" next: null, operation: "%"} when obj = {total: null, next: "5", operation: null} and buttonName is %', () => {
      const obj = {
        total: null,
        next: '5',
        operation: null,
      };
      const buttonName = '%';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '5', next: null, operation: '%' });
    });
  });

  describe('Equal To', () => {
    test('result should equal {total: "36" next: null, operation: null} when obj = {total: 34, next: 2, operation: "+"} and buttonName is =', () => {
      const obj = {
        total: '34',
        next: '2',
        operation: '+',
      };
      const buttonName = '=';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '36', next: null, operation: null });
    });

    test('result should equal {total: "4" next: null, operation: null} when obj = {total: 2, next: 2, operation: "x"} and buttonName is =', () => {
      const obj = {
        total: '2',
        next: '2',
        operation: 'x',
      };
      const buttonName = '=';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '4', next: null, operation: null });
    });

    test('result should equal {total: "9" next: null, operation: null} when obj = {total: 27, next: 3, operation: "÷"} and buttonName is =', () => {
      const obj = {
        total: '27',
        next: '3',
        operation: '÷',
      };
      const buttonName = '=';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '9', next: null, operation: null });
    });

    test('result should equal {total: "45" next: null, operation: null} when obj = {total: 55, next: 10, operation: "-"} and buttonName is =', () => {
      const obj = {
        total: '55',
        next: '10',
        operation: '-',
      };
      const buttonName = '=';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '45', next: null, operation: null });
    });

    test('result should equal {total: "2" next: null, operation: null} when obj = {total: 5, next: 3, operation: "%"} and buttonName is =', () => {
      const obj = {
        total: '5',
        next: '3',
        operation: '%',
      };
      const buttonName = '=';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '2', next: null, operation: null });
    });

    test('result should equal {total: -4, next: null, operation: null} when obj = {total: -7, next: 3, operation: "+"} and buttonName is =', () => {
      const obj = {
        total: '-7',
        next: '3',
        operation: '+',
      };
      const buttonName = '=';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '-4', next: null, operation: null });
    });

    test('result should equal {} when obj = {total: "8" next: null, operation: "+"} and buttonName is =', () => {
      const obj = {
        total: '8',
        next: null,
        operation: '+',
      };
      const buttonName = '=';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({});
    });
  });

  describe('Zero Division', () => {
    test('4 ÷ 0 should throw error', () => {
      const obj = {
        total: '4',
        next: '0',
        operation: '÷',
      };
      const buttonName = '=';
      expect(() => calculate(obj, buttonName)).toThrow('[big.js] Division by zero');
    });

    test('4 % 0 should throw error', () => {
      const obj = {
        total: '4',
        next: '0',
        operation: '%',
      };
      const buttonName = '=';
      expect(() => calculate(obj, buttonName)).toThrow('[big.js] Division by zero');
    });
  });

  describe('Others', () => {
    test('result should equal {} when obj = {total: null, next: null, operation: null} and buttonName is +/-', () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      const buttonName = '+/-';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({});
    });

    test('result should equal {next: "-7"} when obj = {total: null, next: 7, operation: null} and buttonName is +/-', () => {
      const obj = {
        total: null,
        next: '7',
        operation: null,
      };
      const buttonName = '+/-';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ next: '-7' });
    });

    test('result should equal {next: "8"} when obj = {total: null, next: "-8", operation: null} and buttonName is +/-', () => {
      const obj = {
        total: null,
        next: '-8',
        operation: null,
      };
      const buttonName = '+/-';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ next: '8' });
    });

    test('result should equal {total: "-4", next: null, operation: "x"} when obj = {total: null, next: "-4", operation: null} and buttonName is *', () => {
      const obj = {
        total: null,
        next: '-4',
        operation: null,
      };
      const buttonName = 'x';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: '-4', next: null, operation: 'x' });
    });

    test('result should equal {next: "10."} when obj = {total: null, next: "10", operation: null} and buttonName is .', () => {
      const obj = {
        total: null,
        next: '10',
        operation: null,
      };
      const buttonName = '.';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ next: '10.' });
    });

    test('result should equal {next: "10.4"} when obj = {total: null, next: "10.", operation: null} and buttonName is 4', () => {
      const obj = {
        total: null,
        next: '10.',
        operation: null,
      };
      const buttonName = '4';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({ total: null, next: '10.4' });
    });
  });
});
