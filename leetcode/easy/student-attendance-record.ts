/**
 * https://leetcode.com/problems/student-attendance-record-i/
 *
 * You are given a string s representing an attendance record for a student
 * where each character signifies whether the student was absent, late, or present
 * on that day. The record only contains the following three characters:
 *
 * 'A': Absent.
 * 'L': Late.
 * 'P': Present.
 *
 * The student is eligible for an attendance award if they meet both of the
 * following criteria:
 *
 * The student was absent ('A') for strictly fewer than 2 days total.
 * The student was never late ('L') for 3 or more consecutive days.
 * Return true if the student is eligible for an attendance award, or false otherwise.
 */

export const checkRecord = (s: string): boolean => {
  let wasAbsent = false;
  let consecutiveLateCount = 0;

  for (const record of s) {
    if (record === "L") {
      if (++consecutiveLateCount === 3) {
        return false;
      }
    } else {
      consecutiveLateCount = 0;

      if (record === "A") {
        if (wasAbsent) {
          return false;
        }

        wasAbsent = true;
      }
    }
  }

  return true;
};
