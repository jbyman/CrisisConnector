import React from 'react';
import { css } from 'styled-components/macro';

const Page = ({ className, children }) => {
  return (
    <div
      className={className}
      css={css`
        width: 100%;

        height: 100%;
        padding-bottom: 4rem;
      `}
    >
      {/* <Header /> */}
      <div
        css={css`
          padding: 2em;

          max-width: 920px;
          margin: 0 auto;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
