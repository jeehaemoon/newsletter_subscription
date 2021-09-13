import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Newsletter from "./Newsletter";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Newsletter />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
