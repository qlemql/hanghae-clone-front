import React from "react";
import ReactDOM from "react-dom";
import App from "./shared/App.js";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import store from "./redux/configStore";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
