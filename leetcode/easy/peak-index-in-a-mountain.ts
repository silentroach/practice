import tap from "tap";

/**
 * Let's call an array arr a mountain if the following properties hold:
 *
 * - arr.length >= 3
 * - There exists some i with 0 < i < arr.length - 1 such that:
 *   - arr[0] < arr[1] < ... arr[i-1] < arr[i]
 *   - arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 *
 * Given an integer array arr that is guaranteed to be a mountain, return
 * any i such that
 * arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
 */

// treating as sorted array of true -> true -> true (peak) -> false -> false
// so we can use binary search
const peakIndexInMountainArray = (arr: number[]): number => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const position = Math.trunc(start + (end - start) / 2);

    if (arr[position] < arr[position + 1]) {
      start = position + 1;
    } else {
      end = position;
    }
  }

  return start;
};

tap.equal(peakIndexInMountainArray([0, 1, 0]), 1);
tap.equal(peakIndexInMountainArray([0, 2, 1, 0]), 1);
tap.equal(peakIndexInMountainArray([0, 2, 3, 10, 5, 2]), 3);
