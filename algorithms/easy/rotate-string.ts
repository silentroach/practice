import tap from "tap";

/**
 * https://leetcode.com/problems/rotate-string/
 *
 * Given two strings s and goal, return true if and only if s can become
 * goal after some number of shifts on s.
 *
 * A shift on s consists of moving the leftmost character of s to the
 * rightmost position.
 *
 * For example, if s = "abcde", then it will be "bcdea" after one shift.
 */

const rotateString = (s: string, goal: string): boolean => {
  const length = goal.length;
  if (length === 0 || s.length !== length) {
    return false;
  }

  let pos = 0;
  const firstGoal = goal.at(0)!;

  while (true) {
    const probe = s.indexOf(firstGoal, pos);
    if (probe < 0) {
      return false;
    }

    if (
      s.substring(probe) === goal.substring(0, length - probe) &&
      s.substring(0, probe) === goal.substring(length - probe)
    ) {
      return true;
    }

    pos = probe + 1;
  }
};

// region tests
tap.equal(rotateString("abcde", "cdeab"), true);
tap.equal(rotateString("abcde", "abced"), false);
tap.equal(rotateString("gcmbf", "fgcmb"), true);
// endregion
