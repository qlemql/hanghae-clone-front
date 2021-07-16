import React from "react";

function Header() {
  return (
    <>
      <div>
        <div>
          Instargram
          <img src="/" alt="" />
        </div>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <div>
          <div>home icon</div>
          <div> dm icon</div>
          <div> explore icon </div>
          <div> like icon</div>
          <div>
            <div>
              <div>
                <button>프로필</button>
                <button>저장됨</button>
                <button>설정</button>
                <button>계정전환</button>
                <hr />
                <button>로그아웃</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
