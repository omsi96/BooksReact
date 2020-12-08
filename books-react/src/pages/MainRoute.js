import React from "react";
import { Route, Switch } from "react-router";
import BooksDetailsPage from "./BooksDetailsPage";
import HomePage from "./HomePage";

const MainRoute = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/:bookId">
        <BooksDetailsPage />
      </Route>
    </Switch>
  );
};

export default MainRoute;
