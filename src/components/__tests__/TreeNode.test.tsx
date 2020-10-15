import React from 'react';
import { render } from '@testing-library/react';
import serializer from 'jest-emotion';
import { TreeNode } from '../../index';

expect.addSnapshotSerializer(serializer);

describe('TreeNode', () => {
  it('is exported', () => {
    expect(TreeNode).toBeTruthy();
  });

  it('Renders', () => {
    const component = render(<TreeNode label={'test'} />);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
