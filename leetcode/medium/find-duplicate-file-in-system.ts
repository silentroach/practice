import tap from "tap";

/**
 * https://leetcode.com/problems/find-duplicate-file-in-system/
 *
 * Given a list paths of directory info, including the directory path,
 * and all the files with contents in this directory, return all the duplicate
 * files in the file system in terms of their paths. You may return the answer in any order.
 *
 * A group of duplicate files consists of at least two files that have the same content.
 */

const findDuplicate = (paths: string[]): string[][] => {
  const map = new Map<string, string[]>();
  const result: string[][] = [];

  for (const path of paths) {
    for (const [name, content] of list(path)) {
      let list = map.get(content);
      if (list === undefined) {
        list = [];
        map.set(content, list);
      }

      if (list.push(name) === 2) {
        result.push(list);
      }
    }
  }

  return result;
};

const NameRegex = /^(?<name>.*?)\((?<content>.*)\)$/;

function* list(path: string): Generator<[path: string, content: string]> {
  const [dir, ...files] = path.split(" ");

  for (const file of files) {
    const matches = file.match(NameRegex);
    if (matches === null) {
      throw new SyntaxError("Invalid file data format");
    }

    const { name, content } = matches.groups as {
      name: string;
      content: string;
    };

    yield [[dir, name].join("/"), content];
  }
}

// region tests
tap.same(
  [...list("root/a 1.txt(abcd) 2.txt(efgh)")],
  [
    ["root/a/1.txt", "abcd"],
    ["root/a/2.txt", "efgh"],
  ],
);

tap.same(
  findDuplicate([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)",
  ]),
  [
    ["root/a/1.txt", "root/c/3.txt"],
    ["root/a/2.txt", "root/c/d/4.txt", "root/4.txt"],
  ],
);

tap.same(
  findDuplicate([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
  ]),
  [
    ["root/a/1.txt", "root/c/3.txt"],
    ["root/a/2.txt", "root/c/d/4.txt"],
  ],
);
// endregion
