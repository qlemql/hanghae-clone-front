import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from "axios";

// action type
const SET_USER = "user/SET_USER";

// action create function
const setUSER = createAction(SET_USER, (user) => ({user}));

const initialState = {
    user: {},
};


// email: "password1234"
// nickname: "ha@naver.com"
// password: "nickname"
// realName: "name"

// thunk
const signupDB = (setNickname, setEmail, setRealname, setPassword) => {
    return function (dispatch, getState, {history}) {
        console.log(setNickname)
        console.log(setEmail)
        console.log(setRealname)
        console.log(setPassword)
        axios.post("http://15.165.18.118/users", {
            "nickname": setNickname,
            "email": setEmail,
            "realName": setRealname,
            "password": setPassword,
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
}


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
    setUSER,
    signupDB,
};

export {actionCreators};

