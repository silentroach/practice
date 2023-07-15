/**
 * https://leetcode.com/problems/design-linked-list/
 *
 * Design your implementation of the linked list. You can choose to use a singly
 * or doubly linked list.
 */

interface PredefinedMyLinkedListInterface {
  get(index: number): number;
  addAtHead(val: number): void;
  addAtTail(val: number): void;
  addAtIndex(index: number, val: number): void;
  deleteAtIndex(index: number): void;
}

class Node {
  constructor(
    public readonly value: number,
    public next?: Node,
    public previous?: Node,
  ) {}
}

export class MyLinkedList implements PredefinedMyLinkedListInterface {
  private size = 0;
  private tail?: Node;
  private head?: Node;

  private getNode(index: number): Node | undefined {
    if (index < 0 || this.tail === undefined || index >= this.size) {
      return;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.size - 1) {
      return this.tail;
    }

    let result = this.head!;

    if (index > this.size / 2) {
      // reversed search from tail
      index = this.size - index - 1;
      result = this.tail;

      while (index-- > 0) {
        result = result.previous!;
      }
    } else {
      while (index-- > 0) {
        result = result.next!;
      }
    }

    return result;
  }

  get(index: number): number {
    return this.getNode(index)?.value ?? -1;
  }

  addAtHead(val: number): void {
    this.head = new Node(val, this.head);

    if (this.head.next !== undefined) {
      this.head.next.previous = this.head;
    } else {
      this.tail = this.head;
    }

    ++this.size;
  }

  addAtTail(val: number): void {
    this.tail = new Node(val, undefined, this.tail);

    if (this.tail.previous !== undefined) {
      this.tail.previous.next = this.tail;
    } else {
      this.head = this.tail;
    }

    ++this.size;
  }

  addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    const next = this.getNode(index);
    const node = new Node(val, next, next?.previous);

    if (node.previous) {
      node.previous.next = node;
    }

    if (node.next) {
      node.next.previous = node;
    }

    ++this.size;
  }

  deleteAtIndex(index: number): void {
    const node = this.getNode(index);
    if (node === undefined) {
      return;
    }

    if (node.previous === undefined) {
      // it was head
      this.head = node.next;
    } else {
      node.previous.next = node.next;
    }

    if (node.next === undefined) {
      // it was tail
      this.tail = node.previous;
    } else {
      node.next.previous = node.previous;
    }

    --this.size;
  }

  toString(): string {
    const left: number[] = [];
    const right: number[] = [];

    let current = this.head;
    while (current !== undefined) {
      left.push(current.value);
      current = current.next;
    }

    current = this.tail;
    while (current !== undefined) {
      right.unshift(current.value);
      current = current.previous;
    }

    return [left.join(" › "), right.join(" ‹ ")].join("\n");
  }
}
