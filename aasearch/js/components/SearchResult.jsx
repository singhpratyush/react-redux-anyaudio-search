import React from "react";

export default class SearchResult extends React.Component {
    render() {
        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html: this.props.title}}/>
                <img src={this.props.thumbUrl}/>
                <h3>{this.props.views}</h3>
                <h2>{this.props.uploader}</h2>
                <p dangerouslySetInnerHTML={{__html: this.props.description}} />
                <br/><br/>
            </div>
        )
    }
}