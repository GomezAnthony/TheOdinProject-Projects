const {add, subtract, divide, multiply, } = require('../js/calculator');


describe('Add', () => {
   test('add 1 + 2 to equal 3', () => {
      expect(add(1, 2)).toBe(3);
   })
})
describe('Subtract', () => {
   test('subtract 5 - 3 to equal to 2', () => {
      expect(subtract(5, 3)).toBe(2);
   })
})
describe('Divide', () => {
   test('divide 10 / 2 to equal to 5', () => {
      expect(divide(10, 2)).toBe(5);
   })
})
describe('Multiply', () => {
   test('multiply 2 * 2 to equal to 4', () => {
      expect(multiply(2, 2)).toBe(4);
   })
})