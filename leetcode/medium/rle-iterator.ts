/**
 * https://leetcode.com/problems/rle-iterator/
 *
 * We can use run-length encoding (i.e., RLE) to encode a sequence of integers.
 * In a run-length encoded array of even length encoding (0-indexed), for all
 * even i, encoding[i] tells us the number of times that the non-negative integer
 * value encoding[i + 1] is repeated in the sequence.
 */

export class RLEIterator {
  private readonly max: number;
  private position = 0;
  private remains: number;
  private eof = false;

  constructor(private readonly encoding: readonly number[]) {
    if (encoding.length % 2 !== 0) {
      throw new TypeError("Uneven encoding length");
    }

    this.remains = encoding[0] ?? 0;
    this.max = encoding.length - 2;
  }

  public next(n: number): number {
    if (this.eof) {
      return -1;
    }

    while (n > 0) {
      // move the cursor to the next pair if nothing remains
      if (this.remains === 0) {
        this.position += 2;
        this.remains = this.encoding[this.position];

        // out of bounds
        if (this.position > this.max) {
          this.eof = true;
          return -1;
        }
      }

      if (n <= this.remains) {
        this.remains -= n;
        n = 0;
      } else {
        n -= this.remains;
        this.remains = 0;
      }
    }

    return this.encoding[this.position + 1];
  }
}
