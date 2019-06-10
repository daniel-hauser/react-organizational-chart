# react-organizational-chart

> Simple react hierarchy tree - any React children accepted for nodes

[![NPM](https://img.shields.io/npm/v/react-organizational-chart.svg)](https://www.npmjs.com/package/react-organizational-chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-organizational-chart
```

## Usage

```tsx
import * as React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart'

class Example extends React.Component {
  render () {
    return (
       <Tree label={"root"}>
          <TreeNode label={<div>Child 1</div>}>
            <TreeNode label={<div>Grand Child</div>} />
          </TreeNode>
        </Tree>
    )
  }
}
```

## Motivation

`react-organizational-chart` is a simple, reactive tree that accept any react node as a node.

## License

MIT © [daniel-hauser](https://github.com/daniel-hauser)
