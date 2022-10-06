import { TimeMap } from "./time-based-key-value-store";

it("returns nothing on nothing found", () => {
  const map = new TimeMap();
  expect(map.get("test", 0)).toBe("");
});

it("rewrites value with the same timestamp (constantly increased by rules)", () => {
  const map = new TimeMap();

  map.set("test", "value", 1);
  expect(map.get("test", 1)).toBe("value");

  map.set("test", "value2", 1); // rewriting
  expect(map.get("test", 1)).toBe("value2");
});

it("returns nothing on get before first timestamp", () => {
  const map = new TimeMap();
  map.set("test", "value", 10);
  expect(map.get("test", 0)).toBe("");
});

it("return latest by timestamp", () => {
  const map = new TimeMap();
  map.set("test", "value", 10);
  map.set("test", "value", 50);

  expect(map.get("test", 10)).toBe("value");
  expect(map.get("test", 50)).toBe("value");
  expect(map.get("test", 666)).toBe("value"); // there is no value at 666 so returning at 50
});
