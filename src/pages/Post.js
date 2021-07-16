import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";

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
      <header>
        <div>
          <button onClick={openModal}>
            <img src="" alt="" />
          </button>
          <div>
            {isShowing && (
              <Modal
                open={openModal}
                close={closeModal}
                header="Moadl heading"
              />
            )}
          </div>
        </div>
        <section>
          <div>
            <h2>user name</h2>
          </div>
          <ul>
            <li>
              <span>게시물 240</span>
            </li>
            <li>
              <a href="/">팔로워 125</a>
            </li>
            <li>
              <a href="/">팔로우 144</a>
            </li>
          </ul>
          <div>
            <h1>TaeHyun</h1>
            <span>post name</span>
          </div>
        </section>
      </header>
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
      <div onClick={openModal}>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <li>
            <span>15</span>
          </li>
          <li>
            <span>0</span>
          </li>
        </div>
      </div>
    </>
  );
}

Post.defaultProps = {
  user_info: {
    user_name: "TaeHyun",
    user_profile: "",
    user_nickname: "altere_",
  },
  image_url: "",
  contents: "안녕하세요",
  comments: "좋아요!",
};

export default Post;
