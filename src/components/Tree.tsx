import * as React from 'react';
import styled from '@emotion/styled';
import TreeNode, { TreeNodeProps } from './TreeNode';

const TreeContainer: React.ComponentType<TreeProps> = styled.ul`
  padding-inline-start: 0;
  margin: 0;

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
  lineHeight?: string;
  lineWidth?: string;
  lineColor?: string;
  lineBorderRadius?: string;
  nodePadding?: string;
};

function Tree({
  children,
  label,
  lineHeight = '20px',
  lineWidth = '1px',
  lineColor = 'black',
  nodePadding = '5px',
  lineBorderRadius = '5px',
}: TreeProps & TreeNodeProps) {
  return (
    <div
      lineHeight={lineHeight}
      lineWidth={lineWidth}
      lineColor={lineColor}
      nodePadding={nodePadding}
      lineBorderRadius={lineBorderRadius}
    >
      <TreeNode label={label}>{children}</TreeNode>
    </div>
  );
}

export default React.memo(Tree);
