import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const setComment = createAction(SET_COMMENT, (comments) => ({
  comments,
}));
const addComment = createAction(ADD_COMMENT, (comments) => ({
  comments,
}));
const deleteComment = createAction(DELETE_COMMENT, (menuId, commentId) => ({
  menuId,
  commentId,
}));

const initialState = {
  list: [],
};

const addCommentDB =
  (content, postId) =>
  (dispatch, getState, { history }) => {
    const { nickname } = getState().user.user;
    const body = { ...content, nickname };
    api.post(`/posts/${postId}/comments`, body).then((res) => {
      dispatch(addComment(res.data));
    });
  };

const getCommentDB = (postId) => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/posts/${postId}/comments`)
      .then((res) => {
        dispatch(setComment(res.data));
      })
      .catch((err) => console.log(err));
  };
};

const deleteCommentDB =
  (postId, commentId) =>
  (dispatch, getState, { history }) => {
    console.log(postId, commentId);
    api
      .delete(`/posts/${postId}/comments/${commentId}`)
      .then((res) => dispatch(postId, commentId))
      .catch((err) => console.log(err));
  };

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const newList = action.payload.comments;
        draft.list = newList;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.comments);
      }),
    [DELETE_COMMENT]: (state, action) =>
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
  getCommentDB,
  setComment,
  addComment,
  addCommentDB,
  deleteCommentDB,
};

export { actionCreators };
