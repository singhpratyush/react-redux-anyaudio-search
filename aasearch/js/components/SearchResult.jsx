import React from "react";

export default class SearchResult extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.videoId}
                </div>
            </div>
        )
    }
}