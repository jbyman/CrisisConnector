import React, { useEffect } from 'react';
import axios from 'axios';
import { css } from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import Page from 'components/Page';
import Button from 'components/Button';
import Stepper from 'components/Stepper';

const LandingPage = ({ className }) => {
  useEffect(() => {
    axios.get(`/api/mock-endpoint`).then((res) => console.log(res));
  }, []);

  const history = useHistory();

  return (
    <Page className={className}>
      <div
        css={css`
          display: grid;

          padding: 2rem;
          height: 100%;
          font-size: 3rem;
        `}
      >
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
        <div
          css={css`
            margin-top: 3rem;
            color: #ff0000;
          `}
        >
          {'CrisisConnector'}
        </div>
        <div
          css={css`
            margin-top: 1rem;
            font-size: 1.8rem;
            color: #707070;
          `}
        >
          <div>{'Not sure where to donate or help?'}</div>
          <div>
            {"We'll show you how to make the most of your contribution"}
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-top: 5rem;
          `}
        >
          <Button
            onClick={() => history.push('/donate')}
            primary
            css={css`
              font-size: 1.8rem;
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
