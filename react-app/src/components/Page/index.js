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

  margin: 0 auto;
  background: linear-gradient(#ff0000 0%, #fff 75%);

  height: 100%;
`;

const PageContents = styled.div`
  padding: 2em;
`;

export default StyledPage;
