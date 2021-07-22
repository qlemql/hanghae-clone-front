import React from "react";
import {Button, Image, Input, Grid, Text} from "../elements";
import {actionCreators as postActions} from "../redux/modules/post";
import {useSelector, useDispatch} from "react-redux";
import Upload from "../shared/Upload";


const PostWrite = (props) => {
    const dispatch = useDispatch();
    const {history} = props
    const [contents, setContents] = React.useState('');

    const is_login = useSelector((state) => state.user.is_login);

    const preview = useSelector((state) => state.image.preview);

    const changeContents = (e) => {
        setContents(e.target.value);
    }

    const addPost = () => {
        dispatch(postActions.addPostFB(contents));
    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text margin="0px" size="36px" bold>
                    게시글 작성
                </Text>
                <Upload/>
            </Grid>

            <div>
                <Grid padding="16px">
                    <Text margin="0px" size="24px" bold>
                        미리보기
                    </Text>
                </Grid>

                <Image
                    shape="rectangle"
                    src={preview ? preview : "http://via.placeholder.com/400x300"}
                />

            </div>

            {/*<div padding="16px">*/}
            {/*    <Input _onChange={changeContents} label="게시글 내용" placeholder="게시글 작성" multiLine/>*/}
            {/*</div>*/}

            <Grid padding="16px">
                <Button _onClick={addPost} text="게시글 작성"></Button>
            </Grid>
        </React.Fragment>

    );
}

export default PostWrite;