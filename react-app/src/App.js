import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { css } from 'styled-components/macro';
import Helmet from 'react-helmet';

import LandingPage from 'pages/LandingPage';
import DonatePage from 'pages/DonatePage';

function App({ className }) {
  return (
    <div
      className={className}
      css={css`
        display: flex;

        font-family: Raleway, sans-serif;

        background-color: #fff;

        padding: 2rem;
        font-size: 1.5rem;

        h1,
        h2,
        h3,
        h4,
        h5,
        p {
          padding: 0;
          margin: 0;
        }

        h2 {
          font-weight: normal;
          font-size: 2rem;
        }
      `}
    >
      <Helmet>
        <title>{'CrisisConnector'}</title>
        <style type="text/css">
          {`@import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');

          html {
            box-sizing: border-box;
            font-size: 62.5%; // 1rem = 10px
        
            font-family: 'Raleway', sans-serif;
            
          }`}
        </style>
      </Helmet>
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
