/**
 * https://leetcode.com/problems/cache-with-time-limit
 *
 * Write a class that allows getting and setting key-value pairs,
 * however a time until expiration is associated with each key.
 */

interface ITimeLimitedCache {
  /**
   * accepts an integer key, an integer value, and a duration
   * in milliseconds. Once the duration has elapsed, the key
   * should be inaccessible. The method should return true if
   * the same un-expired key already exists and false otherwise.
   * Both the value and duration should be overwritten if the
   * key already exists.
   */
  set(key: number, value: number, duration: number): boolean;

  /**
   * if an un-expired key exists, it should return the associated value.
   * Otherwise it should return -1.
   */
  get(key: number): number;

  /**
   * returns the count of un-expired keys.
   */
  count(): number;
}

interface Element {
  value: number;
  expires: number;
}

export class TimeLimitedCache implements ITimeLimitedCache {
  #elements = new Map<number, Element>();

  public set(key: number, value: number, duration: number): boolean {
    const existing = this.get(key);

    this.#elements.set(key, {
      value,
      expires: Date.now() + duration,
    });

    return existing !== -1;
  }

  public count() {
    const now = Date.now();
    let result = 0;

    for (const [key, value] of this.#elements.entries()) {
      if (value.expires < now) {
        this.#elements.delete(key);
      } else {
        ++result;
      }
    }

    return result;
  }

  public get(key: number): number {
    const element = this.#elements.get(key);
    if (element === undefined) {
      return -1;
    }

    if (element.expires < Date.now()) {
      this.#elements.delete(key);
      return -1;
    }

    return element.value;
  }
}
