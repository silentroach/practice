import tap from "tap";

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 */

class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};

// ---

// @todo split test helpers?

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

tap.same(
  listToArray(mergeTwoLists(arrayToList([1, 2, 4]), arrayToList([1, 3, 4]))),
  [1, 1, 2, 3, 4, 4]
);

tap.same(listToArray(mergeTwoLists(arrayToList([]), arrayToList([]))), []);

tap.same(listToArray(mergeTwoLists(arrayToList([]), arrayToList([0]))), [0]);
