import { MyLinkedList } from "./design-linked-list";

it("get returns -1 on no head yet", () => {
  const list = new MyLinkedList();
  expect(list.get(0)).toBe(-1);
});

it("get returns -1 on out of bounds", () => {
  const list = new MyLinkedList();
  list.addAtHead(1);
  list.addAtHead(2);

  expect(list.get(-5)).toBe(-1);
  expect(list.get(2)).toBe(-1);
});

it("get works from the tail too", () => {
  const list = new MyLinkedList();
  list.addAtHead(5);
  list.addAtHead(4);
  list.addAtHead(3);
  list.addAtHead(2);
  list.addAtHead(1);

  expect(list.get(3)).toBe(4);
});

it("add at head works as expected", () => {
  const list = new MyLinkedList();
  list.addAtHead(3);
  list.addAtHead(2);
  list.addAtHead(1);

  expect(list.get(0)).toBe(1);
  expect(list.get(1)).toBe(2);
  expect(list.get(2)).toBe(3);

  expect(String(list)).toMatchInlineSnapshot(`
    "1 › 2 › 3
    1 ‹ 2 ‹ 3"
  `);
});

it("add at tail works as expected", () => {
  const list = new MyLinkedList();
  list.addAtTail(1);
  list.addAtTail(2);
  list.addAtTail(3);

  expect(list.get(0)).toBe(1);
  expect(list.get(1)).toBe(2);
  expect(list.get(2)).toBe(3);

  expect(String(list)).toMatchInlineSnapshot(`
    "1 › 2 › 3
    1 ‹ 2 ‹ 3"
  `);
});

it("add at index works as expected", () => {
  const list = new MyLinkedList();
  list.addAtIndex(0, 1); // head
  list.addAtIndex(1, 3); // tail
  list.addAtIndex(1, 2); // middle

  expect(list.get(0)).toBe(1);
  expect(list.get(1)).toBe(2);
  expect(list.get(2)).toBe(3);

  expect(String(list)).toMatchInlineSnapshot(`
    "1 › 2 › 3
    1 ‹ 2 ‹ 3"
  `);
});

it("delete works fine", () => {
  const list = new MyLinkedList();
  list.addAtHead(5);
  list.addAtHead(4);
  list.addAtHead(3);
  list.addAtHead(2);
  list.addAtHead(1);

  list.deleteAtIndex(500); // out of bounds, do nothing

  list.deleteAtIndex(0); // removing head
  list.deleteAtIndex(3); // removing tail
  list.deleteAtIndex(1); // removing middle

  expect(String(list)).toMatchInlineSnapshot(`
    "2 › 4
    2 ‹ 4"
  `);
});
