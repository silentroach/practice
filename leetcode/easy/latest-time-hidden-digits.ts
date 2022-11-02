/**
 * https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
 *
 * You are given a string time in the form of hh:mm, where some of the
 * digits in the string are hidden (represented by ?).
 *
 * The valid times are those inclusively between 00:00 and 23:59.
 *
 * Return the latest valid time you can get from time by replacing the
 * hidden digits.
 */

export const maximumTime = (time: string): string =>
  time.replace(/^\?{2}/, "23").replace(/\?/g, (value, idx) => {
    switch (idx) {
      case 0:
        return Number(time[1]) < 4 ? "2" : "1";
      case 1:
        return Number(time[0]) > 1 ? "3" : "9";
      case 3:
        return "5";
      case 4:
        return "9";
      default:
        return value;
    }
  });
