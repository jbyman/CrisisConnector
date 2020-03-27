import React, { useEffect } from 'react';
import axios from 'axios';

import Page from 'components/Page';

const LandingPage = ({ className }) => {
  useEffect(() => {
    axios.get(`/api/mock-endpoint`).then((res) => console.log(res));
  }, []);

  return <Page className={className}>{'Hello, from the landing page!'}</Page>;
};

export default LandingPage;
