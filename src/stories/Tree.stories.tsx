import { css } from '@emotion/css';

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tree, TreeNode, TreeProps } from '../index';

export default {
  title: 'Example/Tree',
  component: Tree,
  argTypes: {
    label: { control: 'string' },
    lineColor: { control: 'color' },
  },
} as Meta;

export const Basic: Story<TreeProps> = (args) => (
  <Tree {...args} children={getNodes()} />
);
Basic.args = {
  label: 'Root',
};

export const Styled: Story<TreeProps> = (args) => (
  <Tree {...args} children={getNodes()} />
);

Styled.args = {
  label: 'Root',
  lineWidth: '3px',
  lineColor: 'green',
  lineBorderRadius: '10px',
  lineHeight: '30px',
};

export const StyledNodes: Story<TreeProps> = ({ label, ...args }) => (
  <Tree
    label={<StyledNode>{label}</StyledNode>}
    {...args}
    children={getNodes(StyledNode)}
  />
);

StyledNodes.args = {
  label: 'Root',
};

function StyledNode({ children }: React.PropsWithChildren<{}>) {
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

function getNodes(Label: React.ElementType = 'div') {
  return [
    <TreeNode label={<Label>Child 1</Label>}>
      <TreeNode label={<Label>Grand Child</Label>} />
    </TreeNode>,
    <TreeNode label={<Label>Child 2</Label>}>
      <TreeNode label={<Label>Grand Child</Label>}>
        <TreeNode label={<Label>Great Grand Child 1</Label>} />
        <TreeNode label={<Label>Great Grand Child 2</Label>} />
      </TreeNode>
    </TreeNode>,
    <TreeNode label={<Label>Child 3</Label>}>
      <TreeNode label={<Label>Grand Child 1</Label>} />
      <TreeNode label={<Label>Grand Child 2</Label>} />
    </TreeNode>,
  ];
}
