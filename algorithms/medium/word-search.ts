import tap from "tap";

// @todo why so slow? check simple dfs

/**
 * https://leetcode.com/problems/word-search/
 *
 * Given an m x n grid of characters board and a string word, return true if word exists
 * in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent
 * cells are horizontally or vertically neighboring. The same letter cell may not be used
 * more than once.
 */

type Position = [row: number, column: number];
type LetterPositions = ReadonlyMap<string, readonly Position[]>;

const isNeighbors = (pos1: Position, pos2: Position): boolean => {
  if (pos1[0] === pos2[0]) {
    // same row
    return Math.abs(pos2[1] - pos1[1]) == 1;
  }

  if (pos1[1] === pos2[1]) {
    // same column
    return Math.abs(pos2[0] - pos1[0]) == 1;
  }

  return false;
};

// region isNeighbors tests
tap.equal(isNeighbors([0, 0], [1, 0]), true);
tap.equal(isNeighbors([0, 0], [1, 1]), false);
tap.equal(isNeighbors([0, 0], [0, 1]), true);
// endregion

const lookup = (
  positions: LetterPositions,
  used: Set<Position>,
  letters: readonly string[],
  idx = 0,
  current?: Position
): boolean => {
  const letter = letters[idx];
  if (letter === undefined) {
    // no more letters, bingo!
    return true;
  }

  const variants = positions
    .get(letter)!
    .filter(
      (letterPosition) =>
        !used.has(letterPosition) &&
        (!current || isNeighbors(current, letterPosition))
    );

  for (const variant of variants) {
    used.add(variant);

    if (lookup(positions, used, letters, idx + 1, variant)) {
      return true;
    }

    used.delete(variant);
  }

  return false;
};

const exist = (board: readonly string[][], word: string): boolean => {
  const letters = word.split("");

  // collect unique letters in word to filter useless cells
  const unique = new Set(letters);

  // collecting positions for all word letters
  const positions: LetterPositions = board.reduce(
    (positions, row, rowIndex) => {
      row.forEach((letter, columnIndex) => {
        if (unique.has(letter)) {
          positions.get(letter)!.push([rowIndex, columnIndex]);
        }
      });

      return positions;
    },
    new Map<string, Position[]>([...unique].map((letter) => [letter, []]))
  );

  return lookup(positions, new Set(), letters);
};

tap.equal(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  ),
  true
);

tap.equal(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  ),
  false
);
