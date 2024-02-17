/**
 * Shortest Word Distance III
 * https://leetcode.com/problems/shortest-word-distance-iii/
 *
 * Given an array of strings wordsDict and two strings that already exist in
 * the array word1 and word2, return the shortest distance between the
 * occurrence of these two words in the list.
 */

export const shortestWordDistance = (
  wordsDict: readonly string[],
  word1: string,
  word2: string
): number => {
  const word1idx: number[] = [];
  const word2idx: number[] = [];

  wordsDict.forEach((word, idx) => {
    if (word === word1) {
      word1idx.push(idx);
    }
    // word1 can be word2 so there is no else
    if (word === word2) {
      word2idx.push(idx);
    }
  });

  if (word1idx.length === 0 || word2idx.length === 0) {
    return -1;
  }

  let minDistance = Infinity;
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < word1idx.length && idx2 < word2idx.length) {
    const distance = Math.abs(word1idx[idx1] - word2idx[idx2]);

    if (distance > 0) {
      minDistance = Math.min(minDistance, distance);
    }

    if (word1idx[idx1] < word2idx[idx2]) {
      ++idx1;
    } else {
      ++idx2;
    }
  }

  return minDistance;
};
