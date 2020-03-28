import React from 'react';
import styled, { css } from 'styled-components';

const primary = `
  background: #fff;
  color: #707070;
  border: 2px solid #b400ff;
  
  &:hover {
    border: 2px solid #b400ff;
  }
  
  &:active {
    border: 2px solid #b400ff;
  }

`;

const secondary = `
  background: #fff;
  color: #707070;

  border: 2px solid #707070;

  &:hover {
    border: 2px solid #707070
  }
  
  &:active {
    border: 2px solid #707070;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  position: relative;
  user-select: none;
  color: #707070;

  height: 6rem;
  font-size: 2rem;
  padding: 0 40px;
  cursor: pointer;

  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.primary &&
    css`
      ${primary};
    `};

  ${(props) =>
    props.secondary &&
    css`
      ${secondary};
    `};
`;

const StyledButton = ({ className, children, ...props }) => {
  return (
    <Button className={className}>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {children}
      </div>
    </Button>
  );
};

export default Button;
