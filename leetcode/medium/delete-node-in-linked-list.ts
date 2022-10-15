/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 *
 * There is a singly-linked list head and we want to delete a node node in it.
 *
 * All the values of the linked list are unique, and it is guaranteed that
 * the given node node is not the last node in the linked list.
 */

import { ListNode } from "../_predefined/list-node";

export const deleteNode = (root: ListNode | null): void => {
  if (root === null) {
    // nothing to remove
    return;
  }

  if (root.next === null) {
    throw new Error("Given node must not be the last");
  }

  // actually removing the next node
  root.val = root.next.val;
  root.next = root.next.next;
};
