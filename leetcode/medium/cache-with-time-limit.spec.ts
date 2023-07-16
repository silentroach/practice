import { TimeLimitedCache } from "./cache-with-time-limit";
import { setTimeout } from "node:timers/promises";

it("get returns the value", () => {
  const cache = new TimeLimitedCache();

  cache.set(1, 10, 500);
  expect(cache.get(1)).toBe(10);
});

it("get returns -1 if value not found", () => {
  const cache = new TimeLimitedCache();

  cache.set(1, 10, 500);
  expect(cache.get(5)).toBe(-1);
});

it("get returns -1 if value is expired", async () => {
  const cache = new TimeLimitedCache();

  cache.set(1, 10, 50);

  await setTimeout(100);

  expect(cache.get(1)).toBe(-1);
});

it("returns count", async () => {
  const cache = new TimeLimitedCache();

  cache.set(1, 10, 50);
  expect(cache.count()).toBe(1);

  await setTimeout(100);
  expect(cache.count()).toBe(0);
});
