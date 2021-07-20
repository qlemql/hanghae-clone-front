import React from "react";
import styled from "styled-components";
// icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import TelegramIcon from "@material-ui/icons/Telegram";

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function ModalContainer(props) {
  return (
    <ModalContainers>
      <ImgContainer>
        <img src={props.contents_img} alt="content_img" />
      </ImgContainer>
      <ContentContainer>
        <ModalHeader>
          <UserInfo>
            <img src={props.user_img} alt="user_profile" />
            <div>{props.userNickName}</div>
          </UserInfo>
          <UserSet>...</UserSet>
        </ModalHeader>

        <ModalContents>
          <UserContents>
            <img src={props.user_img} alt="user_profile" />
            <Container>
              <div>{props.userNickName}</div>
              <div>코멘트</div>
            </Container>
          </UserContents>
        </ModalContents>

        <ModalLikeComment>
          <ModalIcon>
            <div>
              <FavoriteBorderIcon style={{ fontSize: 30 }} />
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
          <Like>좋아요 1개</Like>
          <div>1일전</div>
        </ModalLikeComment>

        <ModalInput>
          <input type="text" />
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

const ModalInput = styled.div``;

// const ModalCloseBtn = styled.button`
//   position: fixed;
//   top: 10px;
//   right: 0px;
//   z-index: 100000;
// `;

export default ModalContainer;
