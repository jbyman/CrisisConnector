import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

import Page from 'components/Page';

const LandingPage = ({ className }) => {
  useEffect(() => {
    axios.get(`/api/mock-endpoint`).then((res) => console.log(res));
  }, []);

  return (
    <Page className={className}>
      <div>todo</div>
    </Page>
  );
};

export default LandingPage;
