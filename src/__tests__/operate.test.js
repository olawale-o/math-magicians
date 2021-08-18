import operate from '../logic/operate'

describe('#operate', ()=>{
  describe('Passing unknown operation that is not "+, -, X, ÷, %" ', ()=>{
    it('throws an error ', ()=>{
      expect(()=>{
        operate('5', '10', '$');
      }).toThrowError("Unknown operation '$'")
    })
  })
  describe('Plus', ()=> {
    test('Adding two numbers', ()=>{
      expect(operate('5', '10', '+')).toBe('15')
    })
  })
  describe('Minus', ()=> {
    test('Substracting two numbers', ()=>{
      expect(operate('5', '10', '-')).toBe('-5')
    })
  })
  describe('Times', ()=> {
    test('two numbers multiplication', ()=>{
      expect(operate('5', '10', 'x')).toBe('50')
    })
  })
  describe('Division', ()=> {
    test('calculation remainder', ()=>{
      expect(operate('5', '10', '÷')).toBe('0.5')
    })
  })
  describe('modulo', ()=> {
    test('calculation remainder', ()=>{
      expect(operate('5', '10', '%')).toBe('5')
    })
  })


})