import type { TreeNode } from "../_predefined/tree-node";

/**
 * https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 *
 * Given two binary trees original and cloned and given a reference to
 * a node target in the original tree.
 */

export const getTargetCopy = (
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null => {
  if (original === null || cloned === null || target === null) {
    return null;
  }

  if (original.val === target.val) {
    return cloned;
  }

  return (
    getTargetCopy(original.left, cloned.left, target) ??
    getTargetCopy(original.right, cloned.right, target)
  );
};
