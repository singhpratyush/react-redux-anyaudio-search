import React from "react";
import { connect } from "react-redux";


@connect((store) => {
    return {
        searching: store.search.searching,
        searched: store.search.searched,
        error: store.search.error
    }
})
export default class Search extends React.Component {

    navigate_search() {
        this.props.router.push('/' + this.refs.search.value);
    }

    render() {
        let msg;
        if (this.props.searching) {
            msg = 'Searching...';
        }
        else if(this.props.searched) {
            if (this.props.results.length > 0) {
                msg = 'Found ' + this.props.results.length + ' results';
            }
            else {
                msg = 'No results found!';
            }
        }
        if(this.props.error === true) {
            msg = 'Some error occurred!!';
        }
        return (
            <div>
                <input ref="search" type="text" placeholder="Enter Search Query"/>
                <button onClick={this.navigate_search.bind(this)}>
                    Search
                </button>
                <h2>
                    {msg}
                </h2>
                {this.props.children}
            </div>
        )
    }
};