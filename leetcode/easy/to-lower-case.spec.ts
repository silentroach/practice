import { toLowerCase } from "./to-lower-case";

it("works", () => {
  expect(toLowerCase("LOVELY")).toBe("lovely");
});

it("lower cased symbols not modified", () => {
  expect(toLowerCase("something")).toBe("something");
});

it("keeps non-letters as is", () => {
  expect(toLowerCase("123))--==/")).toBe("123))--==/");
});
