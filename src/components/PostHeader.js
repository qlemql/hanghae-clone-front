import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

function PostHeader(props) {
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => {
    setIsShowing(true);
  };

  const closeModal = () => {
    setIsShowing(false);
  };

  return (
    <>
      <Header>
        <Btn onClick={openModal}>
          <Img src={props.user_info.user_img} />
        </Btn>
        {/* modal 수정해야함 */}
        <div>
          {isShowing && (
            <Modal
              open={openModal}
              close={closeModal}
              header="프로필 사진 바꾸기"
            />
          )}
        </div>
        <Section>
          <div>
            <h2>{props.user_info.user_nickname}</h2>
          </div>
          <UserInfo>
            <li>
              <span>게시물 {props.user_info.user_contents}</span>
            </li>
            <li>
              <a href="/">팔로워 {props.user_info.user_follower}</a>
            </li>
            <li>
              <a href="/">팔로우 {props.user_info.user_follow}</a>
            </li>
          </UserInfo>
          <div>
            <h1>{props.user_info.user_name}</h1>
            <span>post name</span>
          </div>
        </Section>
      </Header>
    </>
  );
}

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
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
`;

const Btn = styled.button`
  border: none;
  background-color: #fff;
  margin-right: 100px;
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
  width: 100%;
  li {
    margin-right: 20px;
    list-style: none;
  }
`;

const UserInfo = styled.ul`
  width: 100%;
  padding: 0px;
  display: flex;
  justify-content: flex-start;
`;

export default PostHeader;
