import tap from "tap";

/**
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 */

const longestCommonPrefix = (strs: readonly string[]): string => {
  const limit = strs[0].length;
  let i = -1;

  mainloop: while (i++ < limit) {
    let char;

    for (const str of strs) {
      const current = str[i];

      if (char === undefined) {
        char = current;
        continue;
      }

      if (char !== current) {
        break mainloop;
      }
    }
  }

  return strs[0].substring(0, i);
};

tap.equal(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
tap.equal(longestCommonPrefix(["dog", "racecar", "car"]), "");
