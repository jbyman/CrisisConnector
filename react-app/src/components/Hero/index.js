import React from 'react';
import { css } from 'styled-components/macro';

const Hero = ({ className }) => {
  return (
    <div className={className}>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 15rem;
          width: 15rem;
          border-radius: 50%;
          border: 1px solid #707070;
        `}
      >
        <div>logo</div>
      </div>
      <h1
        css={css`
          color: #ff0000;

          margin: 3rem 0 0;
          font-weight: normal;
        `}
      >
        {'CrisisConnector'}
      </h1>
      <div
        css={css`
          margin-top: 1rem;
          font-size: 1.8rem;
          color: #707070;
        `}
      >
        <div>{'Not sure where to donate or help?'}</div>
        <div>{"We'll show you how to make the most of your contribution"}</div>
      </div>
    </div>
  );
};

export default Hero;
