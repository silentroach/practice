import tap from "tap";

/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 *
 * Given the head of a singly linked list, return the middle node of the linked list.
 *
 * If there are two middle nodes, return the second middle node.
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

const middleNode = (head: ListNode | null): ListNode | null => {
  let middle = head;

  while (head?.next) {
    middle = middle!.next;
    head = head?.next?.next;
  }

  return middle;
};

// region tests
tap.equal(middleNode(null), null);

tap.equal(middleNode(new ListNode(1))?.val, 1);

tap.equal(
  middleNode(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
  )?.val,
  3
);

tap.equal(
  middleNode(
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    )
  )?.val,
  4
);
// endregion
