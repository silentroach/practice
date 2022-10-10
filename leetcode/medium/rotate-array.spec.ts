import { rotateByReverse } from "./rotate-array";

describe.each([
  rotateByReverse,
  // @todo more ways to rotate
])("%p", (rotateFunction) => {
  it("works with empty array", () => {
    const input: number[] = [];
    rotateFunction(input, 5);
    expect(input).toEqual([]);
  });

  it("works with single element array", () => {
    const input = [1];
    rotateFunction(input, 5);
    expect(input).toEqual([1]);
  });

  it("rotates an array", () => {
    const input = [1, 2, 3];
    rotateFunction(input, 1);
    expect(input).toEqual([3, 1, 2]);
  });

  it("simplifies rotate steps bigger than length", () => {
    const input = [1, 2, 3];
    rotateFunction(input, 4); // finally same count as above
    expect(input).toEqual([3, 1, 2]);
  });

  it("keeps array if steps count is the same as length", () => {
    const input = [1, 2, 3];
    rotateFunction(input, 3);
    expect(input).toEqual([1, 2, 3]);
  });

  it("keeps array if steps count is zero", () => {
    const input = [1, 2, 3];
    rotateFunction(input, 0);
    expect(input).toEqual([1, 2, 3]);
  });
});
