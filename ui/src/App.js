import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import LandingPage from 'pages/LandingPage';
import SignUpPage from 'pages/SignUpPage';

function App({ className }) {
  return (
    <div className={className}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
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

  background-color: #ccc;

  font-family: sans-serif;
`;

export default StyledApp;
