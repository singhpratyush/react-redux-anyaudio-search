import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Search from "./js/components/Search.jsx";
import store from "./js/store.jsx";

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Search/>
    </Provider>,
    app
);