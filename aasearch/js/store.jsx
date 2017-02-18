import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers/index.jsx";
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);