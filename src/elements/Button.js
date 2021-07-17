import React from "react";
import styled from "styled-components";

const Button = (props)  => {
    const {text, backgroundColor, _onClick} = props;

    return (
        <React.Fragment>
            <ElButton backgroundColor={backgroundColor} onClick={_onClick}>{text}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: "text",
    backgroundColor: "#212121",
    _onClick: () => {},
}

const ElButton = styled.button `
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`;

export default Button;