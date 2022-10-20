import {
  missingNumberBySorting,
  missingNumberBySum,
  missingNumberByReduce,
} from "./missing-number";

describe.each([
  missingNumberBySorting,
  missingNumberBySum,
  missingNumberByReduce,
])("%p", (missingNumber) => {
  it("throws on wrong empty input", () => {
    expect(() => missingNumber([])).toThrow();
  });

  it("returns length on last 'valid' array", () => {
    expect(missingNumber([0, 1, 2, 3, 4, 5])).toBe(6);
  });

  it("returns 0 on missing first zero", () => {
    expect(missingNumber([1])).toBe(0);
  });

  it("returns missing number", () => {
    expect(missingNumber([0, 1, 3])).toBe(2);
  });
});
