import React from "react";

function Post(props) {
  return (
    <>
      <header>
        <div>
          <button>
            <img src="" alt="" />
          </button>
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
      <div>
        <a href="/">
          <div>
            <img src="" alt="" />
          </div>
        </a>
      </div>
    </>
  );
}

export default Post;
