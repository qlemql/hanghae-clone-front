import React from "react";
import Input from "../elements";
import style from "../assets/css/style.css";


const Login = (props) => {
    return (
        <React.Fragment>
            <div id="wrapper">
                <div className="container">
                    <div className="phone-app-demo"></div>
                    <div className="form-data">
                        <form action="">
                            <div className="logo">
                                <img src="./assets/images/logo.png" alt="logo"/>
                            </div>
                            <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                            <input type="password" placeholder="비밀번호"/>
                            <button className="form-btn" type="submit">로그인</button>
                            <span className="has-separator">또는</span>
                            <a className="facebook-login">
                                <i className="fab fa-facebook-square"></i> Facebook으로 로그인
                            </a>
                            <a className="password-reset">비밀번호를 잊으셨나요?</a>
                        </form>
                        <div className="sign-up">
                            계정이 없으신가요? <a>가입하기</a>
                        </div>
                        <div className="get-the-app">
                            <span>앱을 다운로드하세요.</span>
                            <div className="badges">
                                <img src={require('./assets/images/app-store.png')}/>
                                <img src="./assets/images/mobile-app.png" alt="google-play badge"/>
                                {/*<Img src={props.user_img}/>*/}
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </React.Fragment>
    );
};

// Login.defaultProps = (
//     // user_img: require("../assets/images/profile.jpg").default,
// )

export default Login;