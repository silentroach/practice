import { TreeNode } from "../_predefined/tree-node";
import { getTargetCopy } from "./find-node-in-cloned-tree";

it("will find target node in cloned tree", () => {
  const toFind = new TreeNode(3, new TreeNode(6), new TreeNode(19));

  expect(
    getTargetCopy(
      new TreeNode(
        7,
        new TreeNode(4),
        new TreeNode(3, new TreeNode(6), new TreeNode(19))
      ),
      new TreeNode(7, new TreeNode(4), toFind),
      new TreeNode(3)
    )
  ).toBe(toFind);
});
