import React from 'react';
import { render } from '@testing-library/react';
import serializer from 'jest-emotion';
import { Tree, TreeNode } from '../../index';

expect.addSnapshotSerializer(serializer);

describe('Tree', () => {
  it('is exported', () => {
    expect(Tree).toBeTruthy();
  });

  it('Renders', () => {
    const component = render(
      <Tree label={'Root'}>
        <TreeNode label={'Child'}>
          <TreeNode label={'Grand Child'} />
        </TreeNode>
      </Tree>
    );
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
