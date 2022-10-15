import { arrayToList, listToArray } from "../_predefined/list-node";
import { deleteNode } from "./delete-node-in-linked-list";

it("works on nothing", () => {
  deleteNode(null);
  // and there is nothing to check )
});

it("will throw on attempt to delete the last node", () => {
  const data = arrayToList([1, 2]);
  expect(() => deleteNode(data?.next ?? null)).toThrow();
});

it('"removes" non-last node', () => {
  const data = arrayToList([1, 2, 3, 4, 5]);
  deleteNode(data?.next?.next ?? null);
  expect(listToArray(data)).toEqual([1, 2, /* 3 is removed */ 4, 5]);
});
