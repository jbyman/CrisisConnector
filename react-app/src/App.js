import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { css } from 'styled-components/macro';

import LandingPage from 'pages/LandingPage';
import DonatePage from 'pages/DonatePage';

function App({ className }) {
  useEffect(() => {
    document.title = 'CrisisConnector';
  }, []);

  return (
    <div
      className={className}
      css={css`
        display: flex;

        width: 100vw;
        height: 100vh;

        background-color: #fff;

        padding: 2rem;
        font-size: 3rem;
      `}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/donate">
            <DonatePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
