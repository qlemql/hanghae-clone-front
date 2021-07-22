
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

//
import {firestore, storage} from "../../shared/firebase";
import moment from "moment";
import user from "./user";
import {actionCreators as imageActions} from "./image"

// action type
const GET_POST = "GET_POST";
const GET_POSTDETAIL = "GET_POSTDETAIL";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

// action create function
const getPost = createAction(GET_POST, (list) => ({ list }));
const getPostDetail = createAction(GET_POSTDETAIL, (postData, postId) => ({
  postData,
  postId,
}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const deletePost = createAction(DELETE_POST, (postId) => ({
  postId,
}));

// initialState
const initialState = {
  list: [],
  postData: {},
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
const getPostDB = (nickname) => {
  return function (dispatch, getState, { history }) {
    api.get(`/posts?nickname=${nickname}`).then((res) => {
      dispatch(getPost(res.data));
    });
  };
};

const getPostDetailDB = (postId) => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/posts/${postId}`)
      .then((res) => {
        dispatch(getPostDetail(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// const addPostFB = (contents = "") => {
//     return function (dispatch, getState, {history}) {
//         const postDB = firestore.collection("post");
//         const _user = getState().user.user;
//         const user_info = {
//             user_name: _user.user_name,
//             user_id: _user.uid,
//             user_profile: _user.user_profile,
//         };
//         const _post = {
//             ...initialPost,
//             contents: contents,
//             insert_dt: moment().format("YYYY-MM_DD hh:mm:ss"),
//         };

//         const _image = getState().image.preview;

//         const _upload = storage
//             .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
//             .putString(_image, "data_url");

//         _upload.then(snapshot => {
//             snapshot.ref.getDownloadURL().then(url => {
//                 console.log(url);
//                 return url;
//             }).then(url => {
//                 postDB
//                     .add({...user_info, ..._post, _image_url: url})
//                     .then((doc) => {

//                         let post = {user_info, ..._post, id: doc.id, image_url: url};
//                         dispatch(addPost(post));
//                         history.replace('/')

//                         dispatch(imageActions.setPreview(null));

//                     })
//                     .catch((err) => {
//                         console.log("post 실패", err);
//                     });
//             }).catch((err) => {
//                 window.alert("업로드 실패")
//                 console.log(err);
//             })
//         });

//     }
// }

const ImgDB = () => async() => {
  await api.post()
}

const toggleLikeDB = (postId) => {
  return function (dispatch, getState, { history }) {
    api
      .patch(`/posts/${postId}`, { id: postId })
      .catch((err) => console.log(err));
  };
};

const deletePostDB =
  (postId) =>
  (dispatch, getState, { history }) => {
    api
      .delete(`/posts/${postId}`)
      .then((res) => history.replace("/"), dispatch(deletePost(postId)))
      .catch((err) => console.log(err));
  };

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [GET_POSTDETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.postData = action.payload.postData;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
        }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((c) => c.id === action.payload.id);
        if (idx !== -1) {
          draft.list.splice(idx, 1);
        }
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostDB,
  getPostDetailDB,
  toggleLikeDB,
  deletePostDB,
};

export {actionCreators};
