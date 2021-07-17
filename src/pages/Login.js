import React from "react";
import {Input, Button, Footer} from "../elements";
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
                                <img src="img/logo.png" alt="logo"/>
                            </div>

                            {/* INPUT ELEMENT */}
                            <Input
                                type="text"
                                placeholder="전화번호, 사용자 이름 또는 이메일"
                                _onChange={() => {
                                    console.log("아이디 입력!");
                                }}
                            />

                            <Input
                                type="password"
                                placeholder="비밀번호"
                                _onChange={() => {
                                    console.log("아이디 입력!");
                                }}
                            />

                            <Button text="로그인"/>

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
                                <img src="img/app-store.png"/>
                                <img src="img/google-play.png" alt="google-play badge"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        </React.Fragment>
    );
};

export default Login;