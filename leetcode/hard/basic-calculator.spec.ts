import { calculate } from "./basic-calculator";

it("example 1", () => {
  expect(calculate("1 + 1")).toBe(2);
});

it("example 2", () => {
  expect(calculate(" 2-1 + 2 ")).toBe(3);
});

it("example 3", () => {
  expect(calculate("(1+(4+5+2)-3)+(6+8)")).toBe(23);
});

it("works correctly with minus before brackets", () => {
  expect(calculate("-(3+5) + 3")).toBe(-5);
});

it("will throw on unmatched closing bracket", () => {
  expect(() => calculate("( 1 + 3))")).toThrow();
});

it("will throw on unexpected end of input", () => {
  expect(() => calculate("( 1 + 3 ")).toThrow();
});
