import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from 'constants/routes';
import Home from 'pages/home';
import Favorites from 'pages/favorites';
import Issues from 'pages/issues';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route exact path={Routes.FAVORITES} component={Favorites} />
        <Route exact path={Routes.ISSUES} component={Issues} />
      </Switch>
    </Router>
  );
}

export default App;
