/**
 * https://leetcode.com/problems/time-based-key-value-store/
 *
 * Design a time-based key-value data structure that can store multiple values for
 * the same key at different time stamps and retrieve the key's value at a certain timestamp.
 *
 * Timestamps in `set` are *always* incrementing
 */

type TimedValue = [number, string];

export class TimeMap {
  // timestamps are ordered, so we can use array
  // key => [ [timestamp1, value], [timestamp2, value], ... ]
  private readonly values = new Map<string, TimedValue[]>();

  set(key: string, value: string, timestamp: number): void {
    const byKey = this.values.get(key) ?? [];
    const lastValue = byKey.at(-1);

    if (lastValue?.[0] === timestamp) {
      // rewrite if last value was on the same timestamp
      lastValue[1] = value;
    } else if (byKey.push([timestamp, value]) === 1) {
      // put it to the map if array was empty
      this.values.set(key, byKey);
    }
  }

  get(key: string, timestamp: number): string {
    const byKey = this.values.get(key);
    if (byKey === undefined) {
      return "";
    }

    let lower = 0;
    let upper = byKey.length;

    // timestamp before the first
    if (timestamp < byKey[lower]?.[0]) {
      return "";
    }

    while (lower < upper) {
      const middle = Math.trunc((lower + upper) / 2);
      const ts = byKey[middle]?.[0];

      if (ts === timestamp) {
        return byKey[middle]?.[1];
      } else if (ts < timestamp) {
        lower = middle + 1;
      } else {
        upper = middle;
      }
    }

    return byKey[upper - 1]?.[1];
  }
}
