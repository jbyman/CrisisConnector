import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  return (
    <div className={className}>
      <HeaderLink to="/why">{'Why'}</HeaderLink>
      <HeaderLink to="/about">{'About'}</HeaderLink>
      <HeaderLink to="/contact">{'Contact'}</HeaderLink>
    </div>
  );
};

const StyledHeader = styled(Header)`
  font-size: 2rem;

  display: flex;
  /* grid-template-columns: repeat(3, 10rem); */
  justify-content: flex-end;

  padding: 1em;
`;

const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  :hover {
    color: #aaa;
  }

  &:not(:first-child) {
    margin-left: 3em;
  }
`;

export default StyledHeader;
