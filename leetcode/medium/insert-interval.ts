/**
 * https://leetcode.com/problems/insert-interval/
 *
 * You are given an array of non-overlapping intervals intervals where intervals[i] =
 * [starti, endi] represent the start and the end of the ith interval and intervals is
 * sorted in ascending order by starti. You are also given an interval newInterval =
 * [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending
 * order by starti and intervals still does not have any overlapping intervals
 * (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 */

type Range = readonly [number, number];

export const insert = (
  intervals: readonly Range[],
  newInterval: Range
): Range[] => {
  const result: Range[] = [];
  let [start, end] = newInterval;
  const length = intervals.length;

  let idx = 0;
  while (idx < length && intervals[idx][1] < start) {
    result.push(intervals[idx++]);
  }

  // skipping overlapping ranges and rewrite end if needed
  while (idx < length && intervals[idx][0] <= end) {
    if (intervals[idx][0] < start) {
      start = intervals[idx][0];
    }
    if (intervals[idx][1] > end) {
      end = intervals[idx][1];
    }

    ++idx;
  }

  result.push([start, end]);

  while (idx < length) {
    result.push(intervals[idx++]);
  }

  return result;
};