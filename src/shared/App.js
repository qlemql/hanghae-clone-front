import {ConnectedRouter} from "connected-react-router";
import React from "react";
import {Route} from "react-router-dom";
import {history} from "../redux/configStore";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import Users from "../pages/Users";
import Login from "../pages/Login";

const App = () => {
    return (
        <>
            <ConnectedRouter history={history}>
                <Header/>
                <Route path="/" exact component={PostList}/>
                <Route path="/login/" component={Login}></Route>
                <Route path="/users/" component={Users}></Route>
            </ConnectedRouter>
        </>
    );
};

export default App;
