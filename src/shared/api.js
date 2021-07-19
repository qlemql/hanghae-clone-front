import axios from "axios";

const accessToken = document.cookie.split("=")[1];

export const api = axios.create({
    baseURL: "http://15.165.18.118/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json,",
        authorization: `${accessToken}`,
    },
});