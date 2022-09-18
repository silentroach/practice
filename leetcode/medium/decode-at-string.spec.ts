import { decodeAtIndex } from "./decode-at-string";

it("empty if index is less than zero", () => {
  expect(decodeAtIndex("leet2code3", -5)).toBe("");
});

it("empty on empty string", () => {
  expect(decodeAtIndex("", 5)).toBe("");
});

it("empty on nothing found", () => {
  expect(decodeAtIndex("a2", 5)).toBe("");
});

it("just works", () => {
  expect(decodeAtIndex("leet2code3", 10)).toBe("o");
});

it("lazy evaluates", () => {
  expect(decodeAtIndex("ha22", 5)).toBe("h");
  expect(decodeAtIndex("a2345678999999999999999", 1)).toBe("a");
});

it("test", () => {
  decodeAtIndex("y959q969u3hb22odq595", 222280369);
});
