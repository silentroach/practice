import { type IsBadVersion, solution } from "./first-bad-version";

const mockedBadVersion =
  (bad: number): IsBadVersion =>
  (version: number) =>
    version >= bad;

it.each([
  [40, 12],
  [5, 4],
  [40, 1],
  [1, 1],
])(
  "works with %d versions and first %d bad",
  (versionCount, firstBadVersion) => {
    expect(solution(mockedBadVersion(firstBadVersion))(versionCount)).toBe(
      firstBadVersion,
    );
  },
);
