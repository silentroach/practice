import tap from "tap";

/**
 * https://leetcode.com/problems/first-bad-version/
 *
 * You are a product manager and currently leading a team
 * to develop a new product. Unfortunately, the latest version
 * of your product fails the quality check. Since each version is
 * developed based on the previous version, all the versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find
 * out the first bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether
 * version is bad. Implement a function to find the first bad version.
 * You should minimize the number of calls to the API.
 */

// The knows API is defined in the parent class Relation.
type IsBadVersion = (version: number) => boolean;

const solution =
  (isBadVersion: IsBadVersion) =>
  (n: number): number => {
    let end = n;
    let start = 1;

    while (end >= start) {
      const middle = Math.trunc(end - (end - start) / 2);

      if (isBadVersion(middle)) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return start;
  };

// region tests
const mockedBadVersion =
  (bad: number): IsBadVersion =>
  (version: number) =>
    version >= bad;

tap.equal(solution(mockedBadVersion(4))(5), 4);
tap.equal(solution(mockedBadVersion(12))(40), 12);
tap.equal(solution(mockedBadVersion(1))(40), 1);
tap.equal(solution(mockedBadVersion(1))(1), 1);
// endregion
