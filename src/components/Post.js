import React, { useState } from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import ModalContainer from "./ModalContainer";
import SubMenu from "./SubMenu";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import Modal from "react-modal";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { FaComment } from "react-icons/fa";

function Post(props) {
  // 모달 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  // 페이지 리랜더링할때마다 post정보 가져오기
  React.useEffect(() => {
    dispatch(postActions.getPostDB(userInfo.nickname));
    // nickname
  }, []);

  // post정보와 가져와서 화면에 보여주기
  const myPostList = useSelector((state) => state.post.list);
  console.log(myPostList.length);

  // 게시글 클릭시 해당 게시글 detail정보 가져오는 함수
  const getDetail = (postId) => {
    dispatch(postActions.getPostDetailDB(postId));
    dispatch(commentActions.getCommentDB(postId));
  };

  return (
    <>
      <Container>
        {/* 유저 정보 */}
        <PostHeader />
        {/* 서브 메뉴 */}
        <SubMenu />
        {/* 게시글 */}
        <CardContainer>
          {myPostList.map((item) => (
            <Card
              key={item.postId}
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              <ThunmNail>
                <img src={`http://15.165.18.118${item.image}`} alt="" />
              </ThunmNail>
              <DisplayOver
                onClick={() => {
                  getDetail(item.postId);
                }}
              >
                <Hover>
                  <li>
                    <FavoriteIcon />
                    <span style={{ paddingLeft: "10px" }}>
                      {item.likeCount}
                    </span>
                  </li>
                  <li>
                    <FaComment />
                    <span style={{ paddingLeft: "10px" }}>{item.Comments}</span>
                  </li>
                </Hover>
              </DisplayOver>
            </Card>
          ))}
          <Modal
            onRequestClose={() => setModalIsOpen(false)}
            isOpen={modalIsOpen}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.2)",
                zIndex: "1000",
              },
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "930px",
                height: "600px",
                padding: "0px",
                borderRadius: "0px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              },
            }}
          >
            <ModalContainer myPostList={myPostList} />
            {/* <ModalCloseBtn onClick={() => setModalIsOpen(false)}>
                X
              </ModalCloseBtn> */}
          </Modal>
        </CardContainer>
      </Container>
    </>
  );
}

Post.defaultProps = {
  image_url: require("../assets/images/content.jpg").default,
  contents: "안녕하세요",
  comments: "좋아요!",
};

const Container = styled.div`
  width: 100%;
  padding: 30px 20px 0;
  box-sizing: content-box;
  max-width: 935px;
  margin: 0 auto 30px;
  margin-top: 50px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

// const Card = styled.div`
//   width: 300px;
//   height: 300px;
//   position: relative;
//   color: "#fff";
//   img {
//     width: 300px;
//     height: 300px;
//   }
// `;

const ThunmNail = styled.image`
  width: 100%;
  height: 100%;
`;

const DisplayOver = styled.div({
  height: "87%",
  left: "20px",
  position: "absolute",
  top: "20px",
  width: "87%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  listStyle: "none",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  fontSize: "15px",
});

const Card = styled.div({
  width: "270px",
  height: "270px",
  position: "relative",
  color: "#fff",
  padding: "20px",

  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

export default Post;
