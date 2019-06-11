# react-organizational-chart

> Simple react hierarchy tree - any React children accepted for nodes

[![NPM](https://img.shields.io/npm/v/react-organizational-chart.svg)](https://www.npmjs.com/package/react-organizational-chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-organizational-chart
```

## Usage

```jsx
import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart'

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
![styled tree example](example/public/images/styled_tree.png)
```jsx
const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const StyledTreeExample = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"green"}
    lineBorderRadius={"10px"}
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

Working examples can be found [here](https://gkh4y.codesandbox.io/)

## Components

### `Tree` - The root of the tree

Accepts the following props:
* **label: _(required)_** Any react `Node`
* **children: _(required)_** Any number of `<TreeNode>`
* **lineHeight:** _(default 20px)_ The height of the Path as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
* **lineWidth:** _(default black)_ The width of the Path as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
* **lineColor:** _(default 20px)_ The color of the Path as a [css color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
* **lineBorderRadius:** _(default 5px)_ The color of the Path as a [css border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
* **nodePadding:** _(default 5px)_ The left and right padding of every `<TreeNode>` as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

### `TreeNode` - A node in the tree
* **label: _(required)_** Any react `Node`
* **children: _(required)_** Any number of `<TreeNode>` 

## Motivation

`react-organizational-chart` is a simple, reactive tree that accept any react node as a node.

## License

MIT © [daniel-hauser](https://github.com/daniel-hauser)
