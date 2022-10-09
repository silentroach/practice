import tap from "tap";
import { arrayToList, ListNode, listToArray } from "../_predefined/list-node";

/**
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

const reverseList = (head: ListNode | null): ListNode | null => {
  let node = null;
  let newHead = head;

  while (newHead !== null) {
    node = new ListNode(newHead.val, node);
    newHead = newHead.next;
  }

  return node;
};

// region tests
tap.same(
  listToArray(reverseList(arrayToList([1, 2, 3, 4, 5]))),
  [5, 4, 3, 2, 1]
);
// endregion
