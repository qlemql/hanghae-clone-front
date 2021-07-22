import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

//
import {firestore, storage} from "../../shared/firebase";
import moment from "moment";
import user from "./user";
import {actionCreators as imageActions} from "./image"
import axios from "axios";

// action type
const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";


// action create function
const getPost = createAction(GET_POST, (list) => ({list}));
const addPost = createAction(ADD_POST, (post) => ({post}));


// initialState
const initialState = {
    list: [],
};

const initialPost = {
    // id: 0,
    // user_info: {
    //     user_name: "jihun",
    //     user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    // },
    image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    contents: "",
    // comment_cnt: 0,
    insert_dt: moment().format("YYYY-MM_DD hh:mm:ss"),
};

// thunk
const getPostDB = (name, img) => {
    return function (dispatch, getState, {history}) {
        axios.get("http://15.165.18.118/posts").then((res) => {
            console.log(res.data);
            dispatch(getPost(res.data));
        });
    };
};

const addPostFB = (contents = "") => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");
        const _user = getState().user.user;
        const user_info = {
            user_name: _user.user_name,
            user_id: _user.uid,
            user_profile: _user.user_profile,
        };
        const _post = {
            ...initialPost,
            contents: contents,
            insert_dt: moment().format("YYYY-MM_DD hh:mm:ss"),
        };

        const _image = getState().image.preview;

        const _upload = storage
            .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
            .putString(_image, "data_url");

        _upload.then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
                console.log(url);
                return url;
            }).then(url => {
                postDB
                    .add({...user_info, ..._post, _image_url: url})
                    .then((doc) => {

                        let post = {user_info, ..._post, id: doc.id, image_url: url};
                        dispatch(addPost(post));
                        history.replace('/')

                        dispatch(imageActions.setPreview(null));

                    })
                    .catch((err) => {
                        console.log("post 실패", err);
                    });
            }).catch((err) => {
                window.alert("업로드 실패")
                console.log(err);
            })
        });

    }
}

// reducer
export default handleActions(
    {
        [GET_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list = action.payload.list;
            }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
        })
    },
    initialState
);

const actionCreators = {
    getPost,
    getPostDB,
    addPostFB,
}

export {actionCreators};
