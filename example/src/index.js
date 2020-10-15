/** @jsx jsx */
import ReactDOM from 'react-dom';
import { css, jsx } from '@emotion/core';

import StyledTreeExample from './StyledTreeExample';
import BasicTreeExample from './BasicTreeExample';

const title = css`
  margin-top: 5rem;
  :first-of-type {
    margin-top: 0;
  }
`;

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 css={title}>Basic tree</h2>
      <BasicTreeExample />
      <h2 css={title}>Styled tree</h2>
      <StyledTreeExample />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
