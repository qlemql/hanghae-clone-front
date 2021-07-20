import React from "react";
import styled from "styled-components";

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
          <div></div>
        </ModalContents>

        <ModalLikeComment></ModalLikeComment>

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

const ModalContents = styled.div``;

const ModalLikeComment = styled.div``;

const ModalInput = styled.div``;

// const ModalCloseBtn = styled.button`
//   position: fixed;
//   top: 10px;
//   right: 0px;
//   z-index: 100000;
// `;

export default ModalContainer;
