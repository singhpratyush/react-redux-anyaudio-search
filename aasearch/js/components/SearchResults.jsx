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

    componentWillMount() {
        this.props.dispatch(fetchSearchResults(this.props.params.query));
    }

    renderResult(item, index) {
        return (
            <SearchResult key={index} videoId={item.id} description={item.description}
                          getUrl={item.get_url} length={item.length} streamUrl={item.stream_ur}
                          suggestUrl={item.suggest} thumbUrl={item.thumb} time={item.time} title={item.title}
                          uploader={item.uploader} views={item.views}/>
        )
    }

    renderResults() {
        return this.props.results.map(this.renderResult.bind(this));
    }

    render() {
        let data = this.renderResults();
        return (
            <div>
                <div>
                    {data}
                </div>
            </div>
        )
    }
};