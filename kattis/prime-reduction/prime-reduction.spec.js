const { primeReduction } = require("./prime-reduction");

it("works", () => {
  expect(primeReduction(2)).toEqual([2, 1]);
  expect(primeReduction(76)).toEqual([23, 2]);
  expect(primeReduction(100)).toEqual([5, 5]);
  expect(primeReduction(2001)).toEqual([5, 6]);
});
