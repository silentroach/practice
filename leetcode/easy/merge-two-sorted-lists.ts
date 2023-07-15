import tap from "tap";
import { arrayToList, ListNode, listToArray } from "../_predefined/list-node";

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

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null,
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

tap.same(
  listToArray(mergeTwoLists(arrayToList([1, 2, 4]), arrayToList([1, 3, 4]))),
  [1, 1, 2, 3, 4, 4],
);

tap.same(listToArray(mergeTwoLists(arrayToList([]), arrayToList([]))), []);

tap.same(listToArray(mergeTwoLists(arrayToList([]), arrayToList([0]))), [0]);
