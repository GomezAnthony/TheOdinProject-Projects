const reverseString = require('../js/reverseString');

describe('reverseString', () => {
   test('Accept a string and return it reversed', () => {
      expect(reverseString('anthony')).toBe('ynohtna')
   });
})