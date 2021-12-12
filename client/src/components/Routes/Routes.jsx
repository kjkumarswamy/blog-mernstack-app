import React from "react";
import Home from "../../pages/Home/Home";
import Settings from "../../pages/Settings/Settings";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";
import Contact from "../../pages/Contact/Contact";
import Write from "../../pages/Write/Write";
import About from "../../pages/About/About";
import { Route, Switch } from "react-router-dom";
import Single from "../../pages/Single/Single";
import PrivateRoute from "../../components/hoc/PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/write" component={Write} />
      <Route path="/single/:id" component={Single} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Signin} />
      <Route path="/register" component={Signup} />
      <Route path="*" component={Home} />
    </Switch>
  );
};

export default Routes;
