import tap from "tap";

/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 *
 * You are given the root of a binary search tree (BST) and an integer val.
 *
 * Find the node in the BST that the node's value equals val and return the
 * subtree rooted with that node. If such a node does not exist, return null.
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

const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  if (root === null || root.val === val) {
    return root;
  }

  const left = searchBST(root.left, val);
  if (left) {
    return left;
  }

  return searchBST(root.right, val);
};

// region tests
tap.equal(
  searchBST(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7)
    ),
    2
  )?.val,
  2
);
// endregion
