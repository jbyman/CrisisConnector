import React from 'react';
import { css } from 'styled-components/macro';

const primary = css`
  background-color: #63abce;
  color: #fff;

  border: 2px solid #63abce;

  &:hover {
    border: 2px solid #51a0c8;
    background-color: #51a0c8;
  }

  &:active {
    border: 2px solid #3d96c2;
    background-color: #3d96c2;
  }
`;

const secondary = css`
  background: #fff;
  color: #707070;

  border: 2px solid #63abce;

  &:hover {
    background-color: #f2f2f2;
    border: 2px solid #51a0c8;
  }

  &:active {
    background-color: #e6e6e6;
    border: 2px solid #3d96c2;
  }
`;

const Button = ({
  className,
  children,
  secondary: isSecondary,
  primary: isPrimary,
  ...props
}) => {
  return (
    <button
      className={className}
      css={css`
        outline: none;
        border: none;
        position: relative;
        user-select: none;
        color: #707070;

        font-size: 2rem;
        padding: 1rem 1.1rem;
        cursor: pointer;

        font-family: Raleway, sans-serif;

        box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.1);

        ${isPrimary ? primary : ''};
        ${isSecondary ? secondary : ''};
      `}
      {...props}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
