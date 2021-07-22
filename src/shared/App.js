import {ConnectedRouter} from "connected-react-router";
import React from "react";
import {Route} from "react-router-dom";
import {history} from "../redux/configStore";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import Users from "../pages/Users";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Favicon from 'react-favicon'


import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";


const App = () => {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(userActions.loginCheckDB())
    },[])

    return (
        <>
            <ConnectedRouter history={history}>
                <Favicon url='img/2000px-instagram_logo_2016svg-2000x2000.png' />
                {/*<Header/>*/}
                <Route path="/" exact component={PostList}/>
                <Route path="/login/" component={Login}></Route>
                <Route path="/users/" component={Users}></Route>
                <Route path="/posts/" component={Posts}></Route>
            </ConnectedRouter>
        </>
    );
};

export default App;
