import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

// icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { current } from "immer";
import Input from "../elements/Input";
function ModalContainer(props) {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.post.postData);
  const commentList = useSelector((state) => state.comment.list);
  console.log(commentList);

  const [isLike, setIsLike] = useState(false);
  const [currentComment, setCurrentComment] = useState("");

  const clickHeart = () => {
    if (!isLike) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };

  const submitComment = (e) => {
    e.preventDefault();
    if (currentComment.trim() === "") {
      window.alert("공백을 제외하고 한 글자 이상 입력해주세요.");
      return;
    }
    const commentObj = {
      content: currentComment,
      postId: postData.postId,
    };
    dispatch(commentActions.addCommentDB(commentObj));
    setCurrentComment("");
  };

  return (
    <ModalContainers>
      <ImgContainer>
        <img src={`http://15.165.18.118${postData.image}`} alt="content_img" />
      </ImgContainer>
      <ContentContainer>
        <ModalHeader>
          <UserInfo>
            <img src={props.user_img} alt="user_profile" />
            <div>{postData.nickname}</div>
          </UserInfo>
          <UserSet>...</UserSet>
        </ModalHeader>

        <ModalContents>
          <UserContents>
            <img
              src={`http://15.165.18.118${postData.image}`}
              alt="user_profile"
            />
            <Container>
              <div>{postData.nickname}</div>
              <div>{postData.content}</div>
            </Container>
          </UserContents>
          <div>
            {commentList.map((c) => (
              <UserContents>
                <img src={props.user_img} alt="user_profile" />
                <Container>
                  <div>{c.nickname}</div>
                  <div>{c.content}</div>
                </Container>
              </UserContents>
            ))}
          </div>
        </ModalContents>

        <ModalLikeComment>
          <ModalIcon>
            <div isLike={isLike}>
              {isLike ? (
                <FavoriteIcon style={{ color: "red", fontSize: 30 }} />
              ) : (
                <FavoriteBorderIcon
                  onClick={clickHeart}
                  style={{ fontSize: 30 }}
                />
              )}
            </div>
            <div>
              <FaRegComment />
            </div>
            <div>
              <FiSend />
            </div>
            <div>
              <BookmarkBorderIcon style={{ fontSize: 30 }} />
            </div>
          </ModalIcon>
          <Like>좋아요 {postData.likeCount}개</Like>
          <div>1일전</div>
        </ModalLikeComment>

        <ModalInput>
          <Input
            type="text"
            value={currentComment}
            placeholder="댓글 달기..."
            _onChange={(e) => {
              setCurrentComment(e.target.value);
            }}
          />
          <button onClick={submitComment}>게시</button>
        </ModalInput>
      </ContentContainer>
    </ModalContainers>
  );
}

ModalContainer.defaultProps = {
  user_img: require("../assets/images/profile.jpg").default,
  userName: "Hyun",
  userNickName: "altere",
  contents_img: require("../assets/images/content.jpg").default,
  contents: "안녕하세요",
  comments: "좋아요!",
};

const ModalContainers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 60%;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 40%;
  height: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 70px;
  border-bottom: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  padding: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    font-weight: bold;
    font-size: 14px;
  }
  img {
    width: 11%;
    height: 50%;
    cursor: pointer;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 50%;
  }
`;

const UserSet = styled.div`
  width: auto;
  height: auto;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-right: 20px;
  cursor: pointer;
`;

const UserContents = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  div {
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  div:last-child {
    width: 100%;
    padding-left: 5px;
  }
  img {
    width: 11%;
    height: 50%;
    cursor: pointer;
    margin-right: 10px;
    margin-left: 20px;
    border-radius: 50%;
  }
`;

const Container = styled.div``;

const ModalContents = styled.div`
  border-bottom: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  height: 55%;
  overflow: auto;
`;

const ModalLikeComment = styled.div`
  border-bottom: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
`;

const ModalIcon = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 30px;
  cursor: pointer;

  div {
    padding: 10px 10px 10px 0px;
  }
  div:last-child {
    padding-left: 150px;
  }
`;

const Like = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const ModalInput = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: none;
    width: 80%;
    min-height: 30px;
    outline: none;
  }
  button {
    border: none;
    color: #3badf8;
    background-color: unset;
    font-size: 16px;
    cursor: pointer;
  }
`;

// const ModalCloseBtn = styled.button`
//   position: fixed;
//   top: 10px;
//   right: 0px;
//   z-index: 100000;
// `;

export default ModalContainer;
