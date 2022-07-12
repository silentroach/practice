import tap from "tap";

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Given the root of a binary tree, return the level order traversal of its nodes'
 * values. (i.e., from left to right, level by level).
 */

// region predefined
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// endregion

const levelOrder = (root: TreeNode | null): number[][] => {
  if (root === null) {
    return [];
  }

  const results: number[][] = [];

  let level = [root];
  while (level.length > 0) {
    const row: number[] = [];

    level = level.reduce((level, node) => {
      level.push(
        ...[node.left, node.right].filter(
          (node): node is TreeNode => node !== null
        )
      );

      row.push(node.val);

      return level;
    }, [] as TreeNode[]);

    results.push(row);
  }

  return results;
};

// region tests
tap.same(
  levelOrder(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  ),
  [[3], [9, 20], [15, 7]]
);

tap.same(levelOrder(new TreeNode(1)), [[1]]);

tap.same(levelOrder(null), []);
// endregion
