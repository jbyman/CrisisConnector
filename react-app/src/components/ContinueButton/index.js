import React from 'react';
import { css } from 'styled-components/macro';

const ContinueButton = ({ handleClick }) => {
  return (
    <div
      css={css`
        margin-top: 2rem;
        font-size: 1.6rem;
        color: #63abce;
        cursor: pointer;
        font-style: italic;
      `}
      onClick={handleClick}
    >
      {'> continue'}
    </div>
  );
};

export default ContinueButton;
