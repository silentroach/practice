import tap from "tap";

/**
 * Given two strings s and t, return true if they are equal when both
 * are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 */

const backtype = (input: string): (() => string | undefined) => {
  let pos = input.length - 1;
  let skip = 0;

  return () => {
    while (pos >= 0) {
      const char = input[pos--];
      if (char === "#") {
        ++skip;
      } else if (skip > 0) {
        --skip;
      } else {
        return char;
      }
    }
  };
};

const backspaceCompare = (s: string, t: string): boolean => {
  const spop = backtype(s);
  const tpop = backtype(t);

  let letter: string | undefined;
  do {
    letter = spop();

    if (letter !== tpop()) {
      return false;
    }
  } while (letter !== undefined);

  return true;
};

tap.equal(backspaceCompare("ab#c", "ad#c"), true);
tap.equal(backspaceCompare("ab##", "c#d#"), true);
tap.equal(backspaceCompare("a#c", "b"), false);
