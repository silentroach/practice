import { maxDepth, maxDepthIterative } from "./maximum-depth-of-binary-tree";
import { TreeNode } from "../_predefined/tree-node";

describe.each([maxDepth, maxDepthIterative])("%p", (getDepth) => {
  it("returns 0 on empty input", () => {
    expect(getDepth(null)).toBe(0);
  });

  it("returns 1 for one level tree", () => {
    expect(getDepth(new TreeNode(0))).toBe(1);
  });

  it("returns 2 for two level tree", () => {
    expect(getDepth(new TreeNode(0, null, new TreeNode(10)))).toBe(2);
  });

  it("returns 3 for three level tree", () => {
    expect(
      getDepth(new TreeNode(0, null, new TreeNode(10, new TreeNode(5)))),
    ).toBe(3);
  });
});
