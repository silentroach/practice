import { RLEIterator } from "./rle-iterator";

it("throws on uneven input array length", () => {
  expect(() => new RLEIterator([1])).toThrowError();
});

it("works correctly with data", () => {
  const iterator = new RLEIterator([2, 8]);
  expect(iterator.next(2)).toBe(8);
});

it("works with empty spaces", () => {
  const iterator = new RLEIterator([3, 8, 0, 9, 2, 5]);
  expect(iterator.next(2)).toBe(8);
  expect(iterator.next(1)).toBe(8);
  expect(iterator.next(1)).toBe(5);
  expect(iterator.next(2)).toBe(-1);
});

it("return -1 on nothing found", () => {
  const iterator = new RLEIterator([]);
  expect(iterator.next(1)).toBe(-1);
  expect(iterator.next(2)).toBe(-1);
  expect(iterator.next(3)).toBe(-1);
});
