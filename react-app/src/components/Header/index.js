import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  return (
    <div className={className}>
      <HeaderLink to="/">{'Home'}</HeaderLink>
      <HeaderLink to="/sign-up">{'Sign Up'}</HeaderLink>
    </div>
  );
};

const StyledHeader = styled(Header)`
  display: flex;

  border-bottom: 1px solid lightgray;

  padding: 1em;
`;

const HeaderLink = styled(Link)`
  color: #000;
  text-decoration: none;

  :hover {
    color: #aaa;
  }

  &:not(:first-child) {
    margin-left: 0.5em;
  }
`;

export default StyledHeader;
