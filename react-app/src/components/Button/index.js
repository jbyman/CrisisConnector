import styled, { css } from 'styled-components/macro';

const primary = `
  background: #63abce;
  color: #fff;
  border: 2px solid #63abce;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3);
  
  &:hover {
    border: 2px solid #63abce;
  }
  
  &:active {
    border: 2px solid #63abce;
  }

`;

const secondary = `
  background: #fff;
  color: #000;
  border: 2px solid #63abce;
  box-shadow: inset 0px 2px 4px 0px rgba(0,0,0,0.3),
              0px 2px 4px 0px rgba(0,0,0,0.3);

  &:hover {
    border: 2px solid #63abce;
  }
  
  &:active {
    border: 2px solid #63abce;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  position: relative;
  user-select: none;

  height: 6rem;
  font-size: 2rem;
  padding: 0 40px;
  cursor: pointer;

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

export default Button;
