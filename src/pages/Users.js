import React from "react";
import {Input, Button, Footer} from "../elements";
import style from "../assets/css/style.css";
import styled from "styled-components";

const Users = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="form-data">
                    <form action="">
                        <div className="logo">
                            <img src="img/logo.png" alt="logo"/>
                        </div>

                        <Ment>친구들의 사진과 동영상을 보려면 가입하세요.</Ment>
                        <Button fontWeight="800" text="Facebook으로 로그인"/>
                        <span className="has-separator">또는</span>
                        <Input
                            type="text"
                            placeholder="휴대폰 번호 또는 이메일 주소"
                            _onChange={() => {
                                console.log("아이디 입력!");
                            }}
                        />
                        <Input
                            type="text"
                            placeholder="성명"
                            _onChange={() => {
                                console.log("성명!");
                            }}
                        />
                        <Input
                            type="text"
                            placeholder="사용자 이름"
                            _onChange={() => {
                                console.log("사용자 이름!");
                            }}
                        />
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            _onChange={() => {
                                console.log("비밀번호 입력!");
                            }}
                        />
                        <Button text="가입"/>
                    </form>

                    <div className="sign-up">
                        계정이 있으신가요? <a>로그인</a>
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
        </React.Fragment>
    );
};

const Ment = styled.h2`
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-size: 17px;
  font-weight: 800;
  margin: 0 10px;
`;

export default Users;