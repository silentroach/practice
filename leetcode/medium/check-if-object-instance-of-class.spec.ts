import { checkIfInstanceOf } from "./check-if-object-instance-of-class";

it("example 1", () => {
  expect(checkIfInstanceOf(new Date(), Date)).toBe(true);
});

it("example 2", () => {
  class Animal {}
  class Dog extends Animal {}

  expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true);
});

it("example 3", () => {
  expect(checkIfInstanceOf(Date, Date)).toBe(false);
});

it("example 4", () => {
  expect(checkIfInstanceOf(5, Number)).toBe(true);
});
