import tap from "tap";

/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */

const ClosingBracketMap: ReadonlyMap<string, string> = new Map([
  ["}", "{"],
  [")", "("],
  ["]", "["],
]);

const isValid = (s: string): boolean => {
  const max = s.length;

  const stack = [];
  let stackLength = 0;

  for (let i = 0; i < max; ++i) {
    const bracket = s[i];

    const openingBracketPair = ClosingBracketMap.get(bracket);
    if (openingBracketPair !== undefined) {
      // we got closing bracket, so check the stack
      if (stackLength === 0) {
        // nothing to close
        return false;
      }

      if (stack[stackLength - 1] !== openingBracketPair) {
        // invalid pair of brackets
        return false;
      }

      stack.pop();
      --stackLength;
    } else {
      // opening bracket - just push it to stack
      stackLength = stack.push(bracket);
    }
  }

  return stackLength === 0;
};

tap.equal(isValid("()"), true);
tap.equal(isValid("()[]{}"), true);
tap.equal(isValid("(]"), false);
tap.equal(isValid("["), false);
