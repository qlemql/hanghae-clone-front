import React from "react";
import "../assets//css/modalTwo.css";

function ModalTwo(props) {
  const { open, close } = props;
  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <>
            <button className="close" onClick={close}>
              X
            </button>
            <section>
              <img src={props.image_url} alt="" />
              <div>
                <div>
                  <div>
                    <img src={props.user_info.user_img} alt="user_profile" />
                    <div>
                      <div>{props.user_info.user_nickname}</div>
                      <div>삼청동</div>
                    </div>
                  </div>
                  <div>...</div>
                </div>
                <div>
                  <div>
                    <img src={props.user_info.user_img} alt="user_profile" />
                    <div>
                      <div>{props.user_info.user_nickname}</div>
                    </div>
                  </div>
                </div>
                <div>asd</div>
                <div>asd</div>
                <input />
              </div>
            </section>
          </>
        ) : null}
      </div>
    </>
  );
}
ModalTwo.defaultProps = {
  user_info: {
    user_name: "TaeHyun",
    user_nickname: "altere_",
    user_img: require("../assets/images/profile.jpg").default,
    user_contents: 240,
    user_follow: 125,
    user_follower: 144,
  },
  image_url: require("../assets/images/content.jpg").default,
  contents: "안녕하세요",
  comments: "좋아요!",
};

export default ModalTwo;
