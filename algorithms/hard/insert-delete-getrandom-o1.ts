import tap from "tap";

/**
 * https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/
 *
 * RandomizedCollection is a data structure that contains a collection of numbers, possibly
 * duplicates (i.e., a multiset). It should support inserting and removing specific
 * elements and also removing a random element.
 *
 * Implement the RandomizedCollection class:
 *
 * RandomizedCollection() Initializes the empty RandomizedCollection object.
 * - bool insert(int val) Inserts an item val into the multiset, even if the item is
 *   already present. Returns true if the item is not present, false otherwise.
 * - bool remove(int val) Removes an item val from the multiset if present. Returns
 *   true if the item is present, false otherwise. Note that if val has multiple occurrences
 *   in the multiset, we only remove one of them.
 * - int getRandom() Returns a random element from the current multiset of elements.
 *   The probability of each element being returned is linearly related to the number
 *   of same values the multiset contains.
 *
 * You must implement the functions of the class such that each function works on
 * average O(1) time complexity.
 *
 * Note: The test cases are generated such that getRandom will only be called if
 * there is at least one item in the RandomizedCollection.
 */

class RandomizedCollection {
  // raw list
  #values: number[] = [];
  // index set by number
  #idx: Map<number, Set<number>> = new Map();

  [Symbol.for("nodejs.util.inspect.custom")]() {
    return {
      values: this.#values,
      indexes: this.#idx,
    };
  }

  insert(val: number): boolean {
    let indexes = this.#idx.get(val);
    const present = indexes !== undefined;

    if (indexes === undefined) {
      indexes = new Set();
      this.#idx.set(val, indexes);
    }

    indexes.add(this.#values.push(val) - 1);

    return !present;
  }

  remove(val: number): boolean {
    const indexes = this.#idx.get(val);
    if (indexes === undefined) {
      // value is not in the list
      return false;
    }

    const idxToRemove = [...indexes.values()].pop()!;
    indexes.delete(idxToRemove);

    // move last value into removed value
    const lastIndex = this.#values.length - 1;
    const lastValue = this.#values.at(lastIndex)!;

    this.#values[idxToRemove] = lastValue;
    this.#values.pop();

    const lastIndexes = this.#idx.get(lastValue)!;
    lastIndexes.add(idxToRemove).delete(lastIndex);

    if (indexes.size === 0) {
      this.#idx.delete(val);
    }

    return true;
  }

  getRandom(): number {
    return this.#values.at((Math.random() * this.#values.length) | 0)!;
  }
}

// region tests
const collection = new RandomizedCollection();
tap.equal(collection.insert(1), true); // does not contain 1
tap.equal(collection.insert(1), false); // contains 1
tap.equal(collection.insert(2), true); // does not contain 2

tap.equal(collection.remove(1), true); // contains 1

const probes = new Set([
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
  collection.getRandom(),
]);

tap.same(
  [...probes].sort((a, b) => a - b),
  [1, 2]
);

tap.equal(collection.remove(1), true); // contains 1

tap.equal(collection.getRandom(), 2);
tap.equal(collection.getRandom(), 2);
tap.equal(collection.getRandom(), 2);
// endregion
