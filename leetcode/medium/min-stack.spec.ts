import { MinStack } from "./min-stack";

it("works in simple one element case", () => {
  const stack = new MinStack();
  stack.push(5);

  expect(stack.top()).toBe(5);
  expect(stack.getMin()).toBe(5);
});

it("tracks minimum", () => {
  const stack = new MinStack();
  stack.push(5);
  expect(stack.getMin()).toBe(5);

  stack.push(3);
  expect(stack.getMin()).toBe(3);

  stack.push(4);
  expect(stack.getMin()).toBe(3);

  stack.pop(); // removing 4
  expect(stack.getMin()).toBe(3);

  stack.pop(); // removing 3
  expect(stack.getMin()).toBe(5);
  expect(stack.top()).toBe(5);
});
