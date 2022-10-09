export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const arrayToList = (data: readonly number[]): ListNode | null => {
  if (data.length === 0) {
    return null;
  }

  const [first, ...other] = data;
  return new ListNode(first, arrayToList(other));
};

export const listToArray = (list: ListNode | null): number[] => {
  if (list === null) {
    return [];
  }

  const result = [];
  if (list?.next) {
    result.push(...listToArray(list.next));
  }

  return [list.val, ...result];
};
