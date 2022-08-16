const capitalize = require('../js/capitalize');

describe('capitalize', () => {
   test('return the first letter of string capitalized', () => {
      expect(capitalize("anthony")).toBe("Anthony")
   });
})