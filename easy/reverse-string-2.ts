import tap from "tap";

/**
 * Given a string s and an integer k, reverse the first k characters
 * for every 2k characters counting from the start of the string.
 * If there are fewer than k characters left, reverse all of them.
 * If there are less than 2k but greater than or equal to k characters,
 * then reverse the first k characters and leave the other as original.
 */

const reverseStr = (s: string, k: number): string => {
  const length = s.length;
  const result: string[] = [];
  let i = 0;
  let isReversed = true;

  while (i < length) {
    const part = s.substring(i, i + k);
    result.push(isReversed ? part.split("").reverse().join("") : part);

    isReversed = !isReversed;
    i += k;
  }

  return result.join("");
};

tap.equal(reverseStr("abcdefg", 2), "bacdfeg");
tap.equal(reverseStr("abcd", 2), "bacd");
