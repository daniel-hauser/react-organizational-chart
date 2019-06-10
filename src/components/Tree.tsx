import * as React from "react";
import styled from "@emotion/styled";
import TreeNode, { TreeNodeProps } from "./TreeNode";

const RootContainer = styled("ul")`
  display: flex;
  padding-inline-start: 0;
`;

const StyledRootContainer: React.ComponentType<TreeProps> = styled(
  RootContainer
)`
  --line-height: ${({ lineHeight }) => lineHeight};
  --line-width: ${({ lineWidth }) => lineWidth};
  --line-color: ${({ lineColor }) => lineColor};
  --line-border-radius: ${({ lineBorderRadius }) => lineBorderRadius};
  --node-padding: ${({ nodePadding }) => nodePadding};

  --tree-line-height: var(--line-height, 20px);
  --tree-line-width: var(--line-width, 1px);
  --tree-line-color: var(--line-color, black);
  --tree-line-border-radius: var(--line-border-radius, 5px);
  --tree-node-padding: var(--node-padding, 5px);
`;

type TreeProps = {
  lineHeight: string;
  lineWidth: string;
  lineColor: string;
  lineBorderRadius: string;
  nodePadding: string;
};

function Tree({ children, label, ...props }: TreeProps & TreeNodeProps) {
  return (
    <StyledRootContainer {...props}>
      <TreeNode label={label}>{children}</TreeNode>
    </StyledRootContainer>
  );
}

export default React.memo(Tree);
