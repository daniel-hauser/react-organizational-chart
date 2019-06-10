import React, {Component} from "react";

import {Tree, TreeNode} from "react-organizational-chart";

export default class App extends Component {
  render() {
    return (
      <div>
        <Tree lineHeight={'30px'} lineColor={'green'} label={"root"}>
          <TreeNode label={<div>Child 1</div>}>
            <TreeNode label={<div>Grand Child</div>} />
            <TreeNode label={<div>Grand Child</div>} />
          </TreeNode>
          <TreeNode label={<div>Child 2</div>}>
            <TreeNode label={<div>Grand Child</div>}>
              <TreeNode label={<div>Great Grand Child</div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div>Child 3</div>} />
          <TreeNode label={"2"} />
          <TreeNode label={<div>Child 1</div>}>
            <TreeNode
              label={
                <div
                  style={{
                    border: "2px solid red",
                    borderRadius: "5px",
                    padding: "10px"
                  }}
                >
                  Styled Grand Child
                </div>
              }
            />
            <TreeNode label={<div>Grand Child</div>} />
            <TreeNode label={<div>Grand Child</div>} />
          </TreeNode>
          <TreeNode label={<div>Child 2</div>}>
            <TreeNode label={<div>Grand Child</div>}>
              <TreeNode label={<div>Great Grand Child</div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div>Child 3</div>} />
          <TreeNode label={<div>Child 4</div>} />
        </Tree>
      </div>
    );
  }
}
