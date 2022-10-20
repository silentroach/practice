/**
 * https://leetcode.com/problems/matchsticks-to-square/
 *
 * You are given an integer array matchsticks where matchsticks[i]
 * is the length of the ith matchstick. You want to use all the
 * matchsticks to make one square. You should not break any stick,
 * but you can link them up, and each matchstick must be used exactly
 * one time.
 * Return true if you can make this square and false otherwise.
 */

export const makesquare = (matchsticks: number[]): boolean => {
  const length = matchsticks.length;
  if (length < 4) {
    // we need at least 4 sticks
    return false;
  }

  const perimeter = matchsticks.reduce(
    (perimeter, length) => perimeter + length
  );

  if (perimeter % 4 !== 0) {
    // should be dividable by 4 on equal parts
    return false;
  }

  const sideLength = perimeter / 4;
  if (matchsticks.some((length) => length > sideLength)) {
    // every sticks length should be less than side length
    return false;
  }

  const sides = Array.from({ length: 4 }, () => sideLength);

  // will start with longest sticks
  matchsticks.sort((a, b) => b - a);

  const dfs = (idx: number): boolean => {
    if (idx === length) {
      return sides.every((length) => length === 0);
    }

    const current = matchsticks[idx];

    // lets try to add it to every side
    for (let i = 0; i < 4; ++i) {
      if (sides[i] - current >= 0) {
        sides[i] -= current;

        if (dfs(idx + 1)) {
          return true;
        }

        sides[i] += current;
      }
    }

    return false;
  };

  return dfs(0);
};
