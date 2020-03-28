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
          border: 1px solid #a7a7a7;
        `}
      >
        <div>logo</div>
      </div>
      <div
        css={css`
          margin-top: 3rem;
          font-weight: 300;
          color: #ee442f;
          font-size: 4rem;
        `}
      >
        {'CrisisConnector'}
      </div>
      <div
        css={css`
          margin-top: 1rem;
          font-size: 1.5rem;
        `}
      >
        <div>{'Not sure where to donate or help?'}</div>
        <div>{"We'll show you how to make the most of your contribution"}</div>
      </div>
    </div>
  );
};

export default Hero;
