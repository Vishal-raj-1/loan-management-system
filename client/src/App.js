import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import LoanCreate from "./components/Loancreate";
import LoanList from "./components/LoanList";
import LoanDisplay from "./components/LoanShow";
import Header from "./components/header";
import history from "./history";

const App = () => {
  return (
    <div className>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/loans/new" exact component={LoanCreate} />
            <Route path="/loans/:id" exact component={LoanDisplay} />
            <Route path="/home" exact component={LoanList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
