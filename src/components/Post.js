import React from "react";
import PostHeader from "./PostHeader";

function Post(props) {
    return (
        <>
            {/* 유저 정보 */}
            <PostHeader/>
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
            <div>
                <div>
                    <img src="" alt=""/>
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
    image_url: "",
    contents: "안녕하세요",
    comments: "좋아요!",
};

export default Post;
