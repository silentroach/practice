import { atm } from "./atm";

it("empty on empty input", () => {
  expect(atm([10], 0)).toMatchInlineSnapshot(`Map {}`);
});

it("throws error on banknotes found", () => {
  expect(() => atm([10], 55)).toThrow();
});

it("works", () => {
  expect(atm([10, 50, 100, 200, 500, 1000, 2000, 5000], 15080))
    .toMatchInlineSnapshot(`
    Map {
      5000 => 3,
      50 => 1,
      10 => 3,
    }
  `);
});
