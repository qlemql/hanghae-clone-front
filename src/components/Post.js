import React, { useState } from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import ModalContainer from "./ModalContainer";
import SubMenu from "./SubMenu";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Modal from "react-modal";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { FaComment } from "react-icons/fa";

function Post(props) {
  // 모달 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  // 페이지 리랜더링할때마다 post정보 가져오기
  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  // post정보와 가져와서 화면에 보여주기
  const myPostList = useSelector((state) => state.post.list);

  // 게시글 클릭시 해당 게시글 detail정보 가져오는 함수
  const getDetail = (postId) => {
    dispatch(postActions.getPostDetailDB(postId));
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
              <DisplayOver
                onClick={() => {
                  getDetail(item.postId);
                }}
              >
                <div>
                  <img src={item.image} alt="" />
                </div>
                <Hover>
                  <li>
                    <FavoriteIcon />
                    <span>{item.like}</span>
                  </li>
                  <li>
                    <FaComment />
                    <span>{item.like}</span>
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
            <ModalContainer />
            {/* <ModalCloseBtn onClick={() => setModalIsOpen(false)}>
                X
              </ModalCloseBtn> */}
          </Modal>
        </CardContainer>
      </Container>
    </>
  );
}

// Post.defaultProps = {
//   image_url: require("../assets/images/content.jpg").default,
//   contents: "안녕하세요",
//   comments: "좋아요!",
// };

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

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
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
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
});

const Card = styled.div({
  width: "300px",
  height: "300px",
  position: "relative",
  color: "#fff",

  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

export default Post;
