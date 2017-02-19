import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Search from "./js/components/Search.jsx";
import SearchResults from "./js/components/SearchResults.jsx";
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

import store from "./js/store.jsx";

const history = syncHistoryWithStore(browserHistory, store);

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Search}>
                <Route path="/:query" name="searchQuery" component={SearchResults}/>
            </Route>
        </Router>
    </Provider>,
    app
);