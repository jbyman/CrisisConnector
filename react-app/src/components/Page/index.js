import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';

const Page = ({ className, children }) => {
  return (
    <div className={className}>
      <Header />

      <PageContents>{children}</PageContents>
    </div>
  );
};

const StyledPage = styled(Page)`
  width: 100%;
  max-width: 960px;

  margin: 0 auto;

  background-color: #fff;

  height: 100%;
`;

const PageContents = styled.div`
  padding: 1em;
`;

export default StyledPage;
