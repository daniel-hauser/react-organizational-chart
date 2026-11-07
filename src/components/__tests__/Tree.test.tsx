import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tree, TreeNode } from '../../index';

describe('Tree', () => {
  it('preserves the nested list hierarchy and default connector variables', () => {
    const { container } = render(
      <Tree label={'Root'}>
        <TreeNode label={'Child'}>
          <TreeNode label={'Grand Child'} />
        </TreeNode>
      </Tree>,
    );
    const root = container.querySelector('ul')!;
    expect(root.textContent).toBe('RootChildGrand Child');
    expect(root.querySelectorAll('li')).toHaveLength(3);
    expect(root.querySelectorAll('ul')).toHaveLength(2);
    const style = getComputedStyle(root);
    expect(style.display).toBe('flex');
    expect(style.getPropertyValue('--line-height')).toBe('20px');
    expect(style.getPropertyValue('--line-width')).toBe('1px');
    expect(style.getPropertyValue('--line-color')).toBe('black');
    expect(style.getPropertyValue('--line-style')).toBe('solid');
    expect(style.getPropertyValue('--line-border-radius')).toBe('5px');
    expect(style.getPropertyValue('--node-padding')).toBe('5px');
    expect(root).toMatchSnapshot();
  });

  it('passes custom connector settings to siblings without changing their labels', () => {
    const { container } = render(
      <Tree
        label="Root"
        lineHeight="30px"
        lineWidth="3px"
        lineColor="green"
        lineStyle="dotted"
        lineBorderRadius="10px"
        nodePadding="8px"
      >
        <TreeNode label="First" />
        <TreeNode label="Second" />
      </Tree>,
    );
    const root = container.querySelector('ul')!;
    const siblings = root.querySelectorAll('ul > li');
    expect(
      Array.from(siblings, (node) => node.firstChild?.textContent),
    ).toEqual(['Root', 'First', 'Second']);
    const style = getComputedStyle(root);
    for (const [property, value] of Object.entries({
      '--line-height': '30px',
      '--line-width': '3px',
      '--line-color': 'green',
      '--line-style': 'dotted',
      '--line-border-radius': '10px',
      '--node-padding': '8px',
    })) {
      expect(style.getPropertyValue(property)).toBe(value);
    }
  });
});
