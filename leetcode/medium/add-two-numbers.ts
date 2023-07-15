import tap from "tap";
import { arrayToList, ListNode, listToArray } from "../_predefined/list-node";

/**
 * You are given two non-empty linked lists representing
 * two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit. Add the two
 * numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading
 * zero, except the number 0 itself.
 */

const addTwoNumbersInner = (
  l1?: ListNode | null,
  l2?: ListNode | null,
  remains: number = 0, // can be 0 or 1
): ListNode | null => {
  if (!l1 && !l2) {
    if (remains > 0) {
      return new ListNode(remains);
    }

    return null;
  }

  const sum = remains + (l1?.val ?? 0) + (l2?.val ?? 0);

  return new ListNode(
    sum % 10,
    addTwoNumbersInner(l1?.next, l2?.next, sum >= 10 ? 1 : 0),
  );
};

/**
 * Using original signature
 */
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  return addTwoNumbersInner(l1, l2);
};

// ---

tap.same(
  listToArray(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4]))),
  [7, 0, 8],
);

tap.same(listToArray(addTwoNumbers(arrayToList([0]), arrayToList([0]))), [0]);

tap.same(
  listToArray(
    addTwoNumbers(
      arrayToList([9, 9, 9, 9, 9, 9, 9]),
      arrayToList([9, 9, 9, 9]),
    ),
  ),
  [8, 9, 9, 9, 0, 0, 0, 1],
);
