import tap from "tap";

/**
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

// region predefined
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// endregion

const reverseList = (head: ListNode | null): ListNode | null => {
  let node = null;
  let newHead = head;

  while (newHead !== null) {
    node = new ListNode(newHead.val, node);
    newHead = newHead.next;
  }

  return node;
};

// region test helpers
const arrayToList = (data: readonly number[]): ListNode | null => {
  if (data.length === 0) {
    return null;
  }

  const [first, ...other] = data;
  return new ListNode(first, arrayToList(other));
};

const listToArray = (list: ListNode | null): number[] => {
  if (list === null) {
    return [];
  }

  const result = [];
  if (list?.next) {
    result.push(...listToArray(list.next));
  }

  return [list.val, ...result];
};
// endregion

// region tests
tap.same(
  listToArray(reverseList(arrayToList([1, 2, 3, 4, 5]))),
  [5, 4, 3, 2, 1]
);
// endregion
