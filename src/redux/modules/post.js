import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

// action type
const GET_POST = "GET_POST";
const GET_POSTDETAIL = "GET_POSTDETAIL";

// action create function
const getPost = createAction(GET_POST, (list) => ({ list }));
const getPostDetail = createAction(GET_POSTDETAIL, (postData, postId) => ({
  postData,
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
      console.log(res.data);
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
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostDB,
  getPostDetailDB,
  toggleLikeDB,
};

export { actionCreators };
