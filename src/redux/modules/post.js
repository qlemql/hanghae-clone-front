import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// action type
const GET_POST = "GET_POST";

// action create function
const getPost = createAction(GET_POST, (list) => ({ list }));

// initialState
const initialState = {
  list: [],
};

// thunk
const getPostDB = (name, img) => {
  return function (dispatch, getState, { history }) {
    axios.get("http://15.165.18.118/posts").then((res) => {
      console.log(res.data);
      dispatch(getPost(res.data));
    });
  };
};

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostDB,
};

export { actionCreators };
