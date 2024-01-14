/**
 * https://leetcode.com/problems/decode-the-message
 *
 * You are given the strings key and message, which represent a cipher key
 * and a secret message, respectively.
 */

const makeDictionary = (key: string): Map<string, string> => {
  const result = new Map<string, string>([[" ", " "]]);

  let idx = "a".charCodeAt(0) - 1;
  for (const letter of key) {
    if (letter === " " || result.has(letter)) continue;

    result.set(letter, String.fromCharCode(++idx));
  }

  return result;
};

export const decodeMessage = (key: string, message: string): string => {
  const dictionary = makeDictionary(key);

  return message
    .split("")
    .reduce((all, letter) => {
      all.push(dictionary.get(letter) ?? "");
      return all;
    }, [] as string[])
    .join("");
};
