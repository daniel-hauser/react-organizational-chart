# react-organizational-chart

> Simple react hierarchy tree - any React children accepted for nodes

![CI](https://github.com/daniel-hauser/react-organizational-chart/workflows/CI/badge.svg)
[![NPM](https://img.shields.io/npm/v/react-organizational-chart.svg)](https://www.npmjs.com/package/react-organizational-chart)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Install

```bash
npm install --save react-organizational-chart
```

## Usage

```jsx
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

const ExampleTree = () => (
  <Tree label={<div>Root</div>}>
    <TreeNode label={<div>Child 1</div>}>
      <TreeNode label={<div>Grand Child</div>} />
    </TreeNode>
  </Tree>
);
```

## Examples

### Styled tree

![styled tree example](images/styled_tree.png)

```jsx
const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const StyledTreeExample = () => (
  <Tree
    lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<StyledNode>Root</StyledNode>}
  >
    <TreeNode label={<StyledNode>Child 1</StyledNode>}>
      <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
    </TreeNode>
    <TreeNode label={<StyledNode>Child 2</StyledNode>}>
      <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
        <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
        <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
      </TreeNode>
    </TreeNode>
    <TreeNode label={<StyledNode>Child 3</StyledNode>}>
      <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
      <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
    </TreeNode>
  </Tree>
);
```

Interactive examples can be found [here](https://daniel-hauser.github.io/react-organizational-chart/)

## Components

### `Tree` - The root of the tree

Accepts the following props:

- **label:** _**\(required\)**_ Any react `Node`
- **children:** _**\(required\)**_ Any number of `<TreeNode>`
- **lineHeight:** _\(default 20px\)_ The height of the Path as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- **lineWidth:** _\(default 1px\)_ The width of the Path as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- **lineColor:** _\(default black\)_ The color of the Path as a [css color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- **lineStyle:** _\(default solid\)_ The line style as a [css line-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#values)
- **lineBorderRadius:** _\(default 5px\)_ The border radius of the Path as a [css border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- **nodePadding:** _\(default 5px\)_ The left and right padding of every `<TreeNode>` as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

### `TreeNode` - A node in the tree

- **label:** _**\(required\)**_ Any react `Node`
- **children:** _**\(required\)**_ Any number of `<TreeNode>`

## Motivation

I created `react-organizational-chart` because i could not find any other react organizational chart that supports react components as nodes.

## Alternatives

- [org-chart](https://www.npmjs.com/package/orgchart) is highly customizable but can't render React components as nodes.

## License

MIT © [daniel-hauser](https://github.com/daniel-hauser)
