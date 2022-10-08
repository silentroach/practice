import tap from "tap";
import { TreeNode } from "../_predefined/tree-node";

/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

const isValidBST = (
  root: TreeNode | null,
  min = -Infinity,
  max = Infinity
): boolean => {
  if (!root) {
    return true;
  }

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

// region test
tap.equal(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))), true);

tap.equal(
  isValidBST(
    new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(3), new TreeNode(6))
    )
  ),
  false
);

tap.equal(
  isValidBST(
    new TreeNode(
      5,
      new TreeNode(4),
      new TreeNode(6, new TreeNode(3), new TreeNode(7))
    )
  ),
  false
);
// endregion
