import React from 'react';
import { css } from 'styled-components/macro';

const Page = ({ className, children }) => {
  return (
    <div
      className={className}
      css={css`
        width: 100%;

        margin: 0 auto;

        height: 100%;
      `}
    >
      {/* <Header /> */}
      <div
        css={css`
          padding: 2em;

          max-width: 960px;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
