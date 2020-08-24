import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Editor from "./Editor";
import Nav from "./Nav";
import { DataContextProvider } from "./Context/DataContext";

const Index = () => {
  return (
    <DataContextProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/editor" exact component={Editor} />
          <Route path="/editor/:id" component={Editor} />
        </Switch>
      </Router>
    </DataContextProvider>
  );
};

export default Index;
