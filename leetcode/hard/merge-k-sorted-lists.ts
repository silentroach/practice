import tap from "tap";
import { arrayToList, ListNode, listToArray } from "../_predefined/list-node";

/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

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
