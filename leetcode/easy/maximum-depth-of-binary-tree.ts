import type { TreeNode } from "../_predefined/tree-node";

export const maxDepth = (root: TreeNode | null): number => {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

export const maxDepthIterative = (root: TreeNode | null): number => {
  let result = 0;
  if (root === null) {
    return result;
  }

  let children = [root];

  while (children.length > 0) {
    children = children.reduce((row, node) => {
      if (node.left) {
        row.push(node.left);
      }
      if (node.right) {
        row.push(node.right);
      }
      return row;
    }, [] as TreeNode[]);

    ++result;
  }

  return result;
};
