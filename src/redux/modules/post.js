import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

// action type
const GET_POST = "GET_POST";
const GET_POSTDETAIL = "GET_POSTDETAIL";
const DELETE_POST = "DELETE_POST";

// action create function
const getPost = createAction(GET_POST, (list) => ({ list }));
const getPostDetail = createAction(GET_POSTDETAIL, (postData, postId) => ({
  postData,
  postId,
}));
const deletePost = createAction(DELETE_POST, (postId) => ({
  postId,
}));

// initialState
const initialState = {
  list: [],
  postData: {},
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
      .then((res) => history.push("/"), dispatch(deletePost(postId)))
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

export { actionCreators };
