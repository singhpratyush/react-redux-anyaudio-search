import axios from "axios";

export default function fetchSearchResults(query) {
    let url = 'http://127.0.0.1:5000/api/v1/search';  /*Host on local server and add CORS to concerned endpoint*/
    let response_obj = axios.get(url, {params: {q: query}});
    return {type: 'FETCH_RESULTS', payload: response_obj};
}