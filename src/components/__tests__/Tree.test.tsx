import Tree from '../Tree';
import TreeNode from '../TreeNode';
import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

expect.addSnapshotSerializer(serializer);

describe('Tree', () => {
  it('is exported', () => {
    expect(Tree).toBeTruthy();
  });

  it('Renders', () => {
    const component = renderer.create(
      <Tree label={'Root'}>
        <TreeNode label={'Child'}>
          <TreeNode label={'Grand Child'} />
        </TreeNode>
      </Tree>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
