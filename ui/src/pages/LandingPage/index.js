import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Page from 'components/Page';

const LandingPage = ({ className }) => {
  useEffect(() => {
    axios.get('/api').then((res) => console.log(res));
  }, []);

  return (
    <Page className={className}>
      <div>{'Hello world, from the landing page!'}</div>
    </Page>
  );
};

export default LandingPage;
