/**
 * https://leetcode.com/problems/min-stack/
 *
 * Design a stack that supports push, pop, top, and
 * retrieving the minimum element in constant time.
 *
 * Methods pop, top and getMin operations will always be
 * called on non-empty stacks.
 */

interface IMinStack {
  push(val: number): void;
  pop(): void;
  top(): number;
  getMin(): number;
}

class StackItem {
  constructor(public readonly value: number, public readonly minimum: number) {}
}

export class MinStack implements IMinStack {
  private tail?: StackItem;
  constructor(private readonly stack: StackItem[] = []) {}

  public push(val: number): void {
    this.tail = new StackItem(val, Math.min(this.tail?.minimum ?? val, val));
    this.stack.push(this.tail);
  }

  public pop(): void {
    this.stack.pop();
    this.tail = this.stack.at(-1);
  }

  public top(): number {
    return this.tail!.value;
  }

  public getMin(): number {
    return this.tail!.minimum;
  }
}
