import * as React from 'react';
import { css, cx } from '@emotion/css';
import type { ReactNode } from 'react';

export interface TreeNodeProps {
  /**
   * The node label
   * */
  label: React.ReactNode;
  className?: string;
  children?: ReactNode;
  isHorizontal?: boolean;
}

const verticalLine = css`
  content: '';
  position: absolute;
  top: 0;
  height: var(--tree-line-height);
  box-sizing: border-box;
`;

const childrenContainerVertical = css`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    ${verticalLine};
    left: calc(50% - var(--tree-line-width) / 2);
    width: 0;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
`;

const nodeVertical = css`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);
`;

const nodeLinesVertical = css`
  ::before,
  ::after {
    ${verticalLine};
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`;

const horizontalLine = css`
  content: '';
  position: absolute;
  left: 0;
  width: var(--tree-line-height);
  box-sizing: border-box;
  height: 100%;
`;

const childrenContainerHorizontal = css`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-left: var(--tree-line-height);
  position: relative;
  flex-direction: column;

  ::before {
    ${horizontalLine};
    top: calc(50% - var(--tree-line-width) / 2);
    height: 0;
    border-top: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
`;

const nodeHorizontal = css`
  flex: auto;
  text-align: center;
  list-style-type: none;
  display: flex;
  position: relative;
  padding: var(--tree-node-padding) 0 var(--tree-node-padding)
    var(--tree-line-height);
`;

const nodeLinesHorizontal = css`
  ::before,
  ::after {
    ${horizontalLine};
    right: 50%;
    border-top: 0;
    top: 0;
  }
  ::after {
    left: 0;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }

  :before {
    height: 50%;
    border-top: var(--tree-line-width) var(--tree-node-line-style);
    top: 50%;
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
      height: 50%;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
      top: 50%;
      height: 50%;
      border-top: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
    }
  }

  :last-of-type {
    ::before {
      border-left: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-radius: 0 0 0 var(--tree-line-border-radius);
      border-bottom: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-top: 0;
      bottom: 50%;
      height: 50%;
      top: 0;
    }
    ::after {
      border: 0 none;
      height: 50%;
    }
  }
`;

function TreeNode({
  children,
  label,
  className,
  isHorizontal = false,
}: TreeNodeProps) {
  return (
    <li
      className={
        isHorizontal
          ? cx(nodeHorizontal, nodeLinesHorizontal, className)
          : cx(nodeVertical, nodeLinesVertical, className)
      }
    >
      <span style={isHorizontal ? { alignSelf: 'center' } : {}}>{label}</span>
      {React.Children.count(children) > 0 && (
        <ul
          className={
            isHorizontal
              ? childrenContainerHorizontal
              : childrenContainerVertical
          }
        >
          {children}
        </ul>
      )}
    </li>
  );
}

export default TreeNode;
