import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Post from "../components/Post";

const PostList = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  const myPostList = useSelector((state) => state.post.list);
  console.log(myPostList);

  return (
    <>
      <Post />
      {myPostList.map((item) => (
        <div key={item.postId}>
          <div>{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default PostList;
