import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../pages/PostList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
    </>
  );
};

export default App;
