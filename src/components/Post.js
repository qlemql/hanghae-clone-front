import React, { useState } from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Modal from "react-modal";
import AppsIcon from "@material-ui/icons/Apps";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FaComment } from "react-icons/fa";

function Post(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  const myPostList = useSelector((state) => state.post.list);
  console.log(myPostList);
  return (
    <>
      <Container>
        {/* 유저 정보 */}
        <PostHeader />
        {/* 서브 메뉴 */}
        <SubMenu>
          <SpanContainer>
            <span>
              <AppsIcon />
              <span>게시물</span>
            </span>
          </SpanContainer>
          <SpanContainer>
            <span>
              <PlayCircleOutlineIcon />
              <span>동영상</span>
            </span>
          </SpanContainer>
          <SpanContainer>
            <span>
              <BookmarkBorderIcon />
              <span>저장됨</span>
            </span>
          </SpanContainer>
          <SpanContainers>
            <span>
              <AssignmentIndOutlinedIcon />
              <span>태그됨</span>
            </span>
          </SpanContainers>
        </SubMenu>
        {/* 게시글 */}
        <CardContainer>
          {/* <div>
              <img src={props.image_url} alt="" />
            </div>
            <div>
              <li>
                <span>15</span>
              </li>
              <li>
                <span>0</span>
              </li>
            </div> */}
          {myPostList.map((item) => (
            <div>
              <Card
                key={item.postId}
                onClick={() => {
                  setModalIsOpen(true);
                }}
              >
                <DisplayOver>
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
                    width: "400px",
                    height: "220px",
                    padding: "0px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  },
                }}
              >
                <div>{item.content}</div>
                <div>{item.postId}</div>
                <button onClick={() => setModalIsOpen(false)}>asd</button>
              </Modal>
            </div>
          ))}
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

const SubMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
`;

const SpanContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 60px;
  color: #262626;
  height: 52px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
  }
`;

const SpanContainers = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #262626;
  height: 52px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
  }
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

// const LikeComment = styled.div({
//   fontFamily: "Helvetica",
//   transform: "translate3d(0,50px,0)",
//   transition: "transform 350ms ease",
//   listStyle: "none",
//   display: "flex",
//   justifyContent: "space-around",
//   alignItems: "center",
// });

export default Post;
