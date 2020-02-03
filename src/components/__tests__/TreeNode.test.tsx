import React from 'react';
import TreeNode from '../TreeNode';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

expect.addSnapshotSerializer(serializer);

describe('TreeNode', () => {
  it('is exported', () => {
    expect(TreeNode).toBeTruthy();
  });

  it('Renders', () => {
    const component = renderer.create(<TreeNode label={'test'} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
