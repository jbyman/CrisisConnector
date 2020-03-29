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

          @media screen and (max-width: 620px) {
            margin-bottom: 1rem;
          }
        `}
      >
        <div>logo</div>
      </div>
      <h1
        css={css`
          margin-top: 3rem;
          font-weight: 300;
          color: #ee442f;
          font-size: 4rem;

          @media screen and (max-width: 620px) {
            font-size: 2.8rem;
          }
        `}
      >
        {'CrisisConnector'}
      </h1>
      <div
        css={css`
          margin-top: 1rem;
          font-size: 1.6rem;
        `}
      >
        <div
          css={css`
            @media screen and (max-width: 620px) {
              margin-bottom: 1rem;
            }
          `}
        >
          {'Not sure where to donate or help?'}
        </div>
        <div>{"We'll show you how to make the most of your contribution"}</div>
      </div>
    </div>
  );
};

export default Hero;
