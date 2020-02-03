import Tree from "../Tree";
import TreeNode from "../TreeNode";
import React from "react";
import renderer from "react-test-renderer";

describe("Tree", () => {
  it("is exported", () => {
    expect(Tree).toBeTruthy();
  });

  it("Renders", () => {
    const component = renderer.create(
      <Tree label={<div>Root</div>}>
        <TreeNode label={<div>Child</div>}>
          <TreeNode label={<div>Grand Child</div>} />
        </TreeNode>
      </Tree>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
