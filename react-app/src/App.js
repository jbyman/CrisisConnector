import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import LandingPage from 'pages/LandingPage';

function App({ className }) {
  useEffect(() => {
    document.title = 'CrisisConnector';
  }, []);

  return (
    <div className={className}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const StyledApp = styled(App)`
  display: flex;

  width: 100vw;
  height: 100vh;

  background-color: #fff;
`;

export default StyledApp;
