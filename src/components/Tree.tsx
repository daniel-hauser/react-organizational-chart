/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';

import TreeNode, { TreeNodeProps } from './TreeNode';

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
    <ul
      css={css`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: ${lineHeight};
        --line-width: ${lineWidth};
        --line-color: ${lineColor};
        --line-border-radius: ${lineBorderRadius};
        --node-padding: ${nodePadding};

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-padding: var(--node-padding, 5px);
      `}
    >
      <TreeNode label={label}>{children}</TreeNode>
    </ul>
  );
}

export default React.memo(Tree);
