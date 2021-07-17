import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import { useState } from "react";
import ModalTwo from "./ModalTwo";

function Post(props) {
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => {
    setIsShowing(true);
  };

  const closeModal = () => {
    setIsShowing(false);
  };
  return (
    <>
      {/* 유저 정보 */}
      <PostHeader />
      {/* 서브 메뉴 */}
      <div>
        <a href="/">
          <span>
            <div>icon</div>
            <span>게시물</span>
          </span>
                </a>
                <a href="/">
          <span>
            <div>icon</div>
            <span>동영상</span>
          </span>
                </a>
                <a href="/">
          <span>
            <div>icon</div>
            <span>저장됨</span>
          </span>
                </a>
                <a href="/">
          <span>
            <div>icon</div>
            <span>태그됨</span>
          </span>
        </a>
      </div>
      {/* 게시글 */}
      <Card onClick={openModal}>
        <div>
          <img src={props.image_url} alt="" />
        </div>
        <div>
          <li>
            <span>15</span>
          </li>
          <li>
            <span>0</span>
          </li>
        </div>
      </Card>
      <div>{isShowing && <ModalTwo open={openModal} close={closeModal} />}</div>
    </>
  );
}

Post.defaultProps = {
  image_url: require("../assets/images/content.jpg").default,
  contents: "안녕하세요",
  comments: "좋아요!",
};

const Card = styled.div`
  width: 300px;
  height: 300px;
  img {
    width: 300px;
    height: 300px;
  }
`;

export default Post;
