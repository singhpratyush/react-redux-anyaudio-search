import { combineReducers } from "redux";
import searchReducer from './searchReducer.jsx';

const reducer = combineReducers({
    search: searchReducer
});

export default reducer;