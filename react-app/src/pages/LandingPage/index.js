import React, { useEffect } from 'react';
import axios from 'axios';
import { css } from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import Page from 'components/Page';
import Button from 'components/Button';
import Hero from 'components/Hero';

const LandingPage = ({ className }) => {
  const history = useHistory();

  return (
    <Page className={className}>
      <div
        css={css`
          display: grid;
          grid-row-gap: 2rem;
        `}
      >
        <Hero />
        <div
          css={css`
            display: flex;
            align-items: center;

            @media screen and (max-width: 620px) {
              justify-content: center;
            }
          `}
        >
          <Button
            onClick={() => history.push('/donate')}
            primary
            css={css`
              font-size: 1.8rem;

              @media screen and (max-width: 620px) {
                width: 100%;
              }
            `}
            className={className}
          >
            {'I want to help!'}
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default LandingPage;
