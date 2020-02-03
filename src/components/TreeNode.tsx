import * as React from 'react';
import styled from '@emotion/styled';

const NodeContainer = styled.li`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) solid var(--tree-line-color);
    height: var(--tree-line-height);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) solid var(--tree-line-color);
  }

  :only-child {
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
      border-right: var(--tree-line-width) solid var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`;

const ChildrenContainer = styled.ul`
  display: flex;
  padding-inline-start: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    border-left: var(--tree-line-width) solid var(--tree-line-color);
    height: var(--tree-line-height);
  }
`;

export type TreeNodeProps = React.PropsWithChildren<{
  label: React.ReactNode;
  className?: string;
}>;

function TreeNode({ children, label, className }: TreeNodeProps) {
  return (
    <NodeContainer className={className}>
      {label}
      {React.Children.count(children) > 0 && (
        <ChildrenContainer>{children}</ChildrenContainer>
      )}
    </NodeContainer>
  );
}

export default TreeNode;
