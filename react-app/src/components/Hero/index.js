import React from 'react';
import { css } from 'styled-components/macro';

import logo from './cc-logo.svg';

const Hero = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <img src={logo} height="60rem" />
        <h1
          css={css`
            margin-top: 3rem;
            font-weight: 300;
            color: #ee442f;
            font-size: 4rem;
          `}
        >
          {'CrisisConnector'}
        </h1>
      </div>
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
