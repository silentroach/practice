import tap from "tap";

/**
 * https://leetcode.com/problems/flood-fill/
 *
 * An image is represented by an m x n integer grid image where image[i][j]
 * represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and color. You should perform a
 * flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color as the
 * starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color), and so on. Replace the color of all the
 * aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 */

const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] => {
  const original = image[sr][sc]!;
  if (original === color) {
    return image;
  }

  image[sr][sc] = color;

  if (sr > 0 && image[sr - 1][sc] === original) {
    floodFill(image, sr - 1, sc, color);
  }

  if (sr < image.length - 1 && image[sr + 1][sc] === original) {
    floodFill(image, sr + 1, sc, color);
  }

  if (sc > 0 && image[sr][sc - 1] === original) {
    floodFill(image, sr, sc - 1, color);
  }

  if (sc < image[0].length - 1 && image[sr][sc + 1] === original) {
    floodFill(image, sr, sc + 1, color);
  }

  return image;
};

tap.same(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ],
);

tap.same(
  floodFill(
    [
      [0, 0],
      [0, 0],
    ],
    0,
    0,
    0,
  ),
  [
    [0, 0],
    [0, 0],
  ],
);
