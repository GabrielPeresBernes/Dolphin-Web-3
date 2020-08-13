import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import paths from "./config/paths";
import Menu from "./components/Menu";
import ScrollToTop from "./components/ScrollToTop";

const Routes = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Menu/>
    <Switch>
      {paths.map(value => {
        const {exact, path, component} = value;
        return (
          <Route key={path} exact={exact} path={path} component={component} />
        )
      })}
    </Switch>
  </BrowserRouter>
);

export default Routes;