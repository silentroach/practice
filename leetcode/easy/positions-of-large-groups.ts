/**
 * https://leetcode.com/problems/positions-of-large-groups/description/
 *
 * In a string s of lowercase letters, these letters form consecutive
 * groups of the same character.
 *
 * For example, a string like s = "abbxxxxzyy" has the groups "a", "bb",
 *  "xxxx", "z", and "yy".
 *
 * A group is identified by an interval [start, end], where start and
 * end denote the start and end indices (inclusive) of the group. In
 * the above example, "xxxx" has the interval [3,6].
 *
 * A group is considered large if it has 3 or more characters.
 *
 * Return the intervals of every large group sorted in increasing order
 * by start index.
 */

export const largeGroupPositions = (s: string): number[][] => {
  const result: number[][] = [];

  let current: string;
  let position: number;

  const letters = s.split("");
  letters.push(""); // fake last element

  letters.forEach((letter, idx) => {
    if (current !== letter) {
      if (position !== undefined && idx - position > 2) {
        result.push([position, idx - 1]);
      }

      position = idx;
      current = letter;
    }
  });

  return result;
};
