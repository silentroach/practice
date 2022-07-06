import tap from "tap";

/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

/**
 * predefined
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  let minIdx = -1;

  lists.forEach((list, idx) => {
    if (list === null) {
      return;
    }

    if (minIdx < 0 || list.val < lists[minIdx]!.val) {
      minIdx = idx;
    }
  });

  if (minIdx < 0) {
    return null;
  }

  const minimum = lists[minIdx]!;
  lists[minIdx] = minimum.next;

  minimum.next = mergeKLists(lists);

  return minimum;
};

// region helpers
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
  listToArray(
    mergeKLists([
      arrayToList([1, 4, 5]),
      arrayToList([1, 3, 4]),
      arrayToList([2, 6]),
    ])
  ),
  [1, 1, 2, 3, 4, 4, 5, 6]
);
