import { checkRecord } from "./student-attendance-record";

it("ok when just one absence", () => {
  expect(checkRecord("A")).toBe(true);
});

it("two absences is not ok", () => {
  expect(checkRecord("AA")).toBe(false);
});

it("two absences is not ok even if it is not consecutive", () => {
  expect(checkRecord("ALPA")).toBe(false);
});

it("ok when late twice", () => {
  expect(checkRecord("LL")).toBe(true);
});

it("three times late is not ok", () => {
  expect(checkRecord("LLL")).toBe(false);
  expect(checkRecord("AALLLPPP")).toBe(false);
});

it("ok when multiple late but not consecutive", () => {
  expect(checkRecord("LPLPL")).toBe(true);
  expect(checkRecord("LPPL")).toBe(true);
});
