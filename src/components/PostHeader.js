import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function PostHeader(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Header>
        <Btn
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          <Img src={props.user_info.user_img} />
        </Btn>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: "1000",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "400px",
              height: "220px",
              padding: "0px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            },
          }}
        >
          <ModalTitle>프로필 사진 바꾸기</ModalTitle>
          <ModalBtn
            onClick={() => {
              console.log("object");
            }}
            style={{ color: "#0095f6" }}
          >
            사진업로드
          </ModalBtn>
          <ModalBtn style={{ color: "#ed4956" }}>현재사진삭제</ModalBtn>
          <ModalBtn onClick={() => setModalIsOpen(false)}>취소</ModalBtn>
        </Modal>
        <Section>
          <UserNickName>
            <h2>{props.user_info.user_nickname}</h2>
          </UserNickName>
          <UserInfo>
            <li>
              게시물 <span>{props.user_info.user_contents}</span>
            </li>
            <li>
              <a href="/">
                팔로워 <span>{props.user_info.user_follower}</span>
              </a>
            </li>
            <li>
              <a href="/">
                팔로우 <span>{props.user_info.user_follow}</span>
              </a>
            </li>
          </UserInfo>
          <User>
            <h1>{props.user_info.user_name}</h1>
            <span>post name</span>
          </User>
        </Section>
      </Header>
    </>
  );
}
// test
PostHeader.defaultProps = {
  user_info: {
    user_name: "TaeHyun",
    user_nickname: "altere_",
    user_img: require("../assets/images/profile.jpg").default,
    user_contents: 240,
    user_follow: 125,
    user_follower: 144,
  },
};

const Header = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 5%;
  margin-bottom: 44px;
`;

const Btn = styled.button`
  flex-grow: 1;
  flex-basis: 0;
  border: none;
  background-color: unset;
  margin-right: 30px;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  margin: 16px 32px;
  line-height: 24px;
`;

const ModalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  margin-top: 16px;
  border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  cursor: pointer;
  line-height: 1.5;
  padding: 4px 8px;
  margin: 0px;
  min-height: 48px;
`;

const Img = styled.img`
  border-radius: 50%;
  border: none;
  width: 150px;
  height: 150px;
  background-image: url("${(props) => props.user_img}");
  background-size: cover;
  background-position: center;
`;

const Section = styled.section`
  flex-grow: 2;
  flex-basis: 30px;
  li {
    margin-right: 20px;
    margin-bottom: 20px;
    list-style: none;
  }
`;

const UserNickName = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 300;
  line-height: 32px;
`;

const UserInfo = styled.ul`
  width: 100%;
  padding: 0px;
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  span {
    font-weight: 600;
  }
`;

const User = styled.div`
  font-weight: 600;
  span {
    font-size: 16px;
    font-weight: 300;
  }
`;

export default PostHeader;
