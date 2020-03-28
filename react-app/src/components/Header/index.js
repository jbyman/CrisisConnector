import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  return (
    <div className={className}>
      <HeaderLink to="/">{'CrisisConnector'}</HeaderLink>
    </div>
  );
};

const StyledHeader = styled(Header)`
  font-size: 3rem;

  display: flex;

  padding: 1em;
`;

const HeaderLink = styled(Link)`
  color: #8b8b8b;
  text-decoration: none;

  :hover {
    color: #aaa;
  }

  &:not(:first-child) {
    margin-left: 3em;
  }
`;

export default StyledHeader;
