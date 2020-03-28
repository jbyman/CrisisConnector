import React, { useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components/macro';

import Page from 'components/Page';
import Button from 'components/Button';

const LandingPage = ({ className }) => {
  useEffect(() => {
    axios.get(`/api/mock-endpoint`).then((res) => console.log(res));
  }, []);

  return (
    <Page className={className}>
      <div
        css={css`
          display: grid;
          align-items: center;
          justify-content: center;
          height: 100%;
          font-size: 3rem;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30rem;
            width: 30rem;
            border-radius: 50%;
            border: 1px solid #8b8b8b;
          `}
        >
          <div>logo placeholder</div>
        </div>
        <div
          css={css`
            margin-top: 3rem;
          `}
        >
          {'You can help the world.'}
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-top: 2rem;
          `}
        >
          <Button
            onClick={() => console.log('todo')}
            primary
            css={css`
              font-size: 2rem;
            `}
            className={className}
          >
            How?
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default LandingPage;
