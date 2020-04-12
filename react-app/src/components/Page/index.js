import React, { useEffect } from 'react';
import { css } from 'styled-components/macro';

import { useLocation } from 'react-router-dom';

const Page = ({ className, children }) => {
  const location = useLocation();
  const ga = window?.ga;

  useEffect(() => {
    // TODO: Make tag an environment variable (?)
    ga?.('gtag_UA_162388545_1.send', 'pageview', location.pathname); // eslint-disable-line no-unused-expressions
  }, [location, ga]);

  return (
    <div
      className={className}
      css={css`
        width: 100%;

        height: 100%;
        padding-bottom: 4rem;
      `}
    >
      {/* <Header /> */}
      <div
        css={css`
          padding: 2em;

          max-width: 920px;
          margin: 0 auto;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
