import { TreeNode } from "../_predefined/tree-node";
import { rightSideView } from "./binary-tree-right-side-view";

it("returns empty array on null root node", () => {
  expect(rightSideView(null)).toEqual([]);
});

it("returns root node value if single node tree", () => {
  expect(rightSideView(new TreeNode(5))).toEqual([5]);
});

it("returns right side of tree, simple case", () => {
  expect(
    rightSideView(
      new TreeNode(
        5,
        new TreeNode(7),
        new TreeNode(10, null, new TreeNode(15)),
      ),
    ),
  ).toEqual([5, 10, 15]);
});

it("returns right side of tree, harder case", () => {
  expect(
    rightSideView(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(5, new TreeNode(4))),
        new TreeNode(3, new TreeNode(6)),
      ),
    ),
  ).toEqual([1, 3, 6, 4]);
});
