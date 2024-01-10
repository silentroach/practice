/**
 * https://leetcode.com/problems/text-justification
 *
 * Given an array of strings words and a width maxWidth, format the text such
 * that each line has exactly maxWidth characters and is fully (left and right)
 * justified.
 */

function* generateRowsByMaxWidth(
  words: string[],
  maxWidth: number
): Generator<string[]> {
  let length = 0;
  let row: string[] = [];

  for (const word of words) {
    if (length + word.length > maxWidth) {
      yield row;

      length = 0;
      row = [];
    }

    length += word.length + 1;
    row.push(word);
  }

  if (row.length > 0) {
    yield row;
  }
}

const justifyRow = (words: string[], maxWidth: number): string => {
  const length = words.length;
  let spaces = maxWidth - words.join("").length;

  return words
    .reduce((all, word, idx) => {
      // no extra spaces after last word
      if (idx === length - 1) {
        return all.concat(word);
      }

      // using maximum available spaces
      const useSpaces = Math.ceil(spaces / (words.length - 1 - idx));
      spaces -= useSpaces;

      return all.concat(word, " ".repeat(useSpaces));
    }, [] as string[])
    .join("");
};

export const fullJustify = (words: string[], maxWidth: number): string[] => {
  const rows = Array.from(generateRowsByMaxWidth(words, maxWidth));
  const rowsCount = rows.length;

  return rows.map((row, idx) => {
    if (row.length === 1 || idx === rowsCount - 1) {
      return row.join(" ").padEnd(maxWidth, " ");
    }

    return justifyRow(row, maxWidth);
  });
};
