import { maximumTime } from "./latest-time-hidden-digits";

it.each([
  ["1?:00", "19:00"],
  ["2?:00", "23:00"],
  ["?9:00", "19:00"],
  ["?3:00", "23:00"],
  ["??:00", "23:00"],
  ["??:??", "23:59"],
  ["??:???", "23:59?"], // just for default case
])("%s => %s", (original, expected) => {
  expect(maximumTime(original)).toBe(expected);
});
