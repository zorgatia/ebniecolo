import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./components/routing/Routes";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

import Login from "./components/layout/Login";
import { loadUser } from "./actions/auth";

import 'bootstrap/dist/css/bootstrap.min.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}




function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Routes />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
  );
}

export default App;
