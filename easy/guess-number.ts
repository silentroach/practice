import tap from "tap";

let pick: number;

/**
 * Predefined
 */
const guess = (num: number): -1 | 0 | 1 => {
  if (num > pick) {
    return -1;
  }

  if (num < pick) {
    return 1;
  }

  return 0;
};

const guessNumber = (n: number): number => {
  let end = n;
  let start = 0;

  let result;

  do {
    result = Math.trunc(end - (end - start) / 2);

    switch (guess(result)) {
      case 0:
        return result;
      case -1:
        end = result - 1;
        break;
      case 1:
        start = result + 1;
        break;
    }
  } while (result !== n);

  return result;
};

/**
 * Test helper
 */
const runTest = (n: number, pickTest: number): number => {
  pick = pickTest;

  return guessNumber(n);
};

tap.equal(runTest(10, 6), 6);
tap.equal(runTest(1, 1), 1);
tap.equal(runTest(2, 1), 1);
