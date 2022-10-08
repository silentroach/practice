/**
 * https://leetcode.com/problems/merge-intervals/
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals that
 * cover all the intervals in the input.
 */

type Interval = [number, number];

export const merge = (
  intervals: readonly Readonly<Interval>[]
): readonly Interval[] => {
  const result: Interval[] = [];

  const length = intervals.length;
  if (length === 0) {
    return result;
  }

  const ordered = [...intervals].sort((int1, int2) => int1[0] - int2[0]);

  let idx = 0;

  const [start, end] = ordered[idx++];

  // keeping pointer to the latest element to extend it with overlapped
  let last: Interval = [start, end];
  result.push(last);

  while (idx < length) {
    const [start, end] = ordered[idx++];

    if (last[1] < start) {
      last = [start, end];
      result.push(last);
    } else {
      // merging overlapped
      if (last[1] < end) {
        last[1] = end;
      }
    }
  }

  return result;
};
