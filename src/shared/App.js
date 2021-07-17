import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import Users from "../pages/Users";
import Login from "../pages/Login";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route path="/" exact component={Header}/>
                <Route path="/" exact component={PostList}/>
                <Route path="/users/" componenet={Users}/>
                <Route path="/login/" compoenet={Login}/>
            </BrowserRouter>
        </>
    );
};

export default App;
