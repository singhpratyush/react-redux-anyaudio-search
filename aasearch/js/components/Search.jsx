import React from "react";
import { connect } from "react-redux";
import fetchSearchResults from "../actions/search.jsx";
import SearchResult from "../components/SearchResult.jsx";


@connect((store) => {
    return {
        results: store.search.results,
        searching: store.search.searching,
        searched: store.search.searched,
        error: store.search.error
    }
})
export default class Search extends React.Component {
    fetchResults() {
        this.props.dispatch(fetchSearchResults(this.refs.search.value));
    }

    renderResult(item, index) {
        return (
            <SearchResult key={index} videoId={item.id}/>
        )
    }

    renderResults() {
        return this.props.results.map(this.renderResult.bind(this));
    }

    render() {
        let msg;
        let data = '';
        if (this.props.searching) {
            msg = 'Searching';
        }
        else if(this.props.searched) {
            if (this.props.results.length > 0) {
                msg = 'Found ' + this.props.results.length + ' results';
                data = this.renderResults();
            }
            else {
                msg = 'No results found!';
            }
        }
        return (
            <div>
                <input ref="search" type="text" placeholder="Enter Search Query"/>
                <button onClick={this.fetchResults.bind(this)}>
                    Search
                </button>
                <h2>
                    {msg}
                </h2>
                <div>
                    {data}
                </div>
            </div>
        )
    }
};