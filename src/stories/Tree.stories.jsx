import { css } from '@emotion/css';

import React from 'react';
import { Tree, TreeNode } from '../index';

const meta = {
  title: 'Example/Tree',
  component: Tree,
  argTypes: {
    label: { control: 'text' },
    lineColor: { control: 'color' },
  },
  tags: ['autodocs'],
  args: { label: 'Root', children: undefined },
};

export default meta;

export const Basic = {
  render: (args) => <Tree {...args} children={getNodes()} />,
};

export const Styled = {
  render: Basic.render,
  args: {
    lineWidth: '3px',
    lineColor: 'green',
    lineBorderRadius: '10px',
    lineHeight: '30px',
    lineStyle: 'dotted',
  },
};

export const StyledNodes = {
  render: ({ label, ...args }) => (
    <Tree
      label={<StyledNode>{label}</StyledNode>}
      {...args}
      children={getNodes(StyledNode)}
    />
  ),
};

export const Siblings = {
  render: (args) => (
    <Tree {...args}>
      <TreeNode label={<StyledNode>First</StyledNode>} />
      <TreeNode label={<StyledNode>Second</StyledNode>} />
      <TreeNode label={<StyledNode>Third</StyledNode>} />
    </Tree>
  ),
};

export const UnevenLabels = {
  render: (args) => (
    <Tree {...args}>
      <TreeNode label={<StyledNode>Short</StyledNode>} />
      <TreeNode
        label={
          <StyledNode>
            A much wider label
            <br />
            with a second line
          </StyledNode>
        }
      >
        <TreeNode label={<StyledNode>Nested left</StyledNode>} />
        <TreeNode label={<StyledNode>Nested right</StyledNode>} />
      </TreeNode>
      <TreeNode label={<StyledNode>Last</StyledNode>} />
    </Tree>
  ),
};

function StyledNode({ children }) {
  return (
    <div
      className={css`
        padding: 5px;
        border-radius: 8px;
        display: inline-block;
        border: 1px solid #ff0000;
      `}
    >
      {children}
    </div>
  );
}

function getNodes(Label = 'div') {
  return [
    <TreeNode key="child-1" label={<Label>Child 1</Label>}>
      <TreeNode label={<Label>Grand Child</Label>} />
    </TreeNode>,
    <TreeNode key="child-2" label={<Label>Child 2</Label>}>
      <TreeNode label={<Label>Grand Child</Label>}>
        <TreeNode label={<Label>Great Grand Child 1</Label>} />
        <TreeNode label={<Label>Great Grand Child 2</Label>} />
      </TreeNode>
    </TreeNode>,
    <TreeNode key="child-3" label={<Label>Child 3</Label>}>
      <TreeNode label={<Label>Grand Child 1</Label>} />
      <TreeNode label={<Label>Grand Child 2</Label>} />
    </TreeNode>,
  ];
}
