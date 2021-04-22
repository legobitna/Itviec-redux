import React from "react";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import Detail from "../pages/JobDetail";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

import ProtectedRoute from "./ProtectedRoute";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/jobs/" exact component={Jobs} />
        <Route path="/" exact component={Jobs} />

        <ProtectedRoute
          path="/job/:id"
          render={(props) => <Detail {...props} />}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Routes;
