/**
 * https://leetcode.com/problems/binary-tree-right-side-view
 *
 * Given the root of a binary tree, imagine yourself standing on the right side
 * of it, return the values of the nodes you can see ordered from top to bottom.
 */

import { TreeNode } from "../_predefined/tree-node";

const getNodesRow = (nodes: TreeNode[]): TreeNode[] => {
  const result: TreeNode[] = [];

  for (const node of nodes) {
    if (node.left) {
      result.push(node.left);
    }

    if (node.right) {
      result.push(node.right);
    }
  }

  return result;
};

export const rightSideView = (root: TreeNode | null): number[] => {
  const result: number[] = [];
  if (root === null) {
    return result;
  }

  result.push(root.val);

  let row: TreeNode[] = [root];
  while (true) {
    row = getNodesRow(row);
    if (row.length === 0) {
      break;
    }

    result.push(row.at(-1)!.val);
  }

  return result;
};
