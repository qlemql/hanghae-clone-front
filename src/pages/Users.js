import React from "react";
import {Input} from "../elements";
import style from "../assets/css/style.css";
import styled from "styled-components";


const Users = () => {
    return (
        <React.Fragment>
            <Container>
                <Container className="form-data">
                    <form action="">
                        <div className="logo">
                            <img src="img/logo.png" alt="logo"/>
                        </div>
                        <button className="form-btn" type="submit">Facebooke으로 로그인</button>

                        <span className="has-separator">또는</span>

                        {/* INPUT ELEMENT */}
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

                        <button className="form-btn" type="submit">가입</button>

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
                </Container>
            </Container>
        </React.Fragment>
    );
};

const Container = styled.div`
    margin: auto;
`;


export default Users;