import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from "axios";
import {api} from "../../shared/api";
import {setCookie, getCookie, deleteCookie} from "../../shared/Cookie";


const SET_USER = "user/SET_USER";

const setUSER = createAction(SET_USER, (user) => ({user}));

const initialState = {
    user: {},
};


// Middleware
const loginDB =
    (setEmail, setPassword) =>
        async (dispatch, getState, {history}) => {
            console.log(setEmail, setPassword);
            await api
                .post(`/login`, {
                    email: setEmail,
                    password: setPassword,
                })
                .then((res) => {
                    console.log(res);
                    dispatch(setUSER({
                        createdAt: res.data.user.createdAt,
                        email: res.data.user.email,
                        nickname: res.data.user.nickname,
                        password: res.data.user.password,
                        realName: res.data.user.realName,
                    }))
                    const accessToken = "Bearer " + res.data.token;
                    setCookie("is_login", `${accessToken}`);
                })
        };

const loginCheckDB = () =>
    async (dispatch, getState, {history}) => {
        const token = getCookie("is_login");
        await api.get('/users').then((res) => {
            dispatch(setUSER({
                token: token,
                createdAt: res.data.user.createdAt,
                nickname: res.data.user.nickname,
                realName: res.data.user.realName,
            }))
        });
    };

const signupDB =
    (setEmail, setNickname, setRealname, setPassword) =>
        async (dispatch, getState, {history}) => {
            console.log(setEmail, setNickname, setRealname, setPassword);
            await api
                .post(`/users`, {
                    email: setEmail,
                    nickname: setNickname,
                    realName: setRealname,
                    password: setPassword,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        };


// Reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user
            }),
    },
    initialState
);

const actionCreators = {
    loginDB,
    loginCheckDB,
    signupDB,
};

export {actionCreators};

