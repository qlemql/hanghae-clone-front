import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import Header from "../components/Header";
import PostList from "../pages/PostList";

const App = () => {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={PostList} />
      </ConnectedRouter>
    </>
  );
};

export default App;
