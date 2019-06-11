import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

export default class BasicTreeExample extends React.Component {
  render() {
    return (
      <Tree label={<div>Root</div>}>
        <TreeNode label={<div>Child</div>}>
          <TreeNode label={<div>Grand Child</div>} />
        </TreeNode>
        <TreeNode label={<div>Child 1</div>}>
          <TreeNode label={<div>Grand Child</div>} />
        </TreeNode>
      </Tree>
    );
  }
}
