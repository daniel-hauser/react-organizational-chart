import React, { Component } from "react";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";

const Node = styled.div`
  padding: 5px;
  border-radius: 8px;
  border: 2px solid red;
  display: inline-block;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        {this.renderTreeWithChildren()}
        <Tree lineHeight={"30px"} lineColor={"green"} label={"root"}>
          {Array.from({ length: 16 }).map((_, i) => (
            <TreeNode label={<Node>Child {i + 1}</Node>} />
          ))}
        </Tree>
      </div>
    );
  }

  renderTreeWithChildren() {
    return (
      <Tree lineHeight={"30px"} lineColor={"green"} label={"root"}>
        <TreeNode label={<Node>Child 1</Node>}>
          <TreeNode label={<Node>Grand Child</Node>} />
          <TreeNode label={<Node>Grand Child</Node>} />
        </TreeNode>
        <TreeNode label={<Node>Child 2</Node>}>
          <TreeNode label={<Node>Grand Child</Node>}>
            <TreeNode label={<Node>Great Grand Child</Node>} />
          </TreeNode>
        </TreeNode>
        <TreeNode label={<Node>Child 3</Node>} />
        <TreeNode label={<Node>Child 2</Node>} />
        <TreeNode label={<Node>Child 1</Node>}>
          <TreeNode
            label={
              <div
                style={{
                  border: "2px solid blue",
                  borderRadius: "5px",
                  padding: "10px"
                }}
              >
                Styled Grand Child
              </div>
            }
          />
          <TreeNode label={<Node>Grand Child</Node>} />
          <TreeNode label={<Node>Grand Child</Node>} />
        </TreeNode>
        <TreeNode label={<Node>Child 2</Node>}>
          <TreeNode label={<Node>Grand Child</Node>}>
            <TreeNode label={<Node>Great Grand Child</Node>} />
          </TreeNode>
        </TreeNode>
        <TreeNode label={<Node>Child 3</Node>} />
        <TreeNode label={<Node>Child 4</Node>} />
      </Tree>
    );
  }
}
