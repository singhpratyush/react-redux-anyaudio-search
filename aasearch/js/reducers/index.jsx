import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'
import searchReducer from './searchReducer.jsx';

const reducer = combineReducers({
    search: searchReducer,
    routing: routerReducer
});

export default reducer;