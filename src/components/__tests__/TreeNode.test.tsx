import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TreeNode } from '../../index';

describe('TreeNode', () => {
  it('renders a leaf with its connector styles', () => {
    const { container } = render(<TreeNode label="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a leaf label without a children container and merges custom classes', () => {
    const { container } = render(
      <TreeNode label={<span>test</span>} className="custom-node" />,
    );
    const node = container.querySelector('li')!;
    expect(node.textContent).toBe('test');
    expect(node.querySelector('ul')).toBeNull();
    expect(node.classList.contains('custom-node')).toBe(true);
    expect(getComputedStyle(node).listStyleType).toBe('none');
    expect(getComputedStyle(node).textAlign).toBe('center');
  });
});
