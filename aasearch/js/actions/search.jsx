import axios from "axios";

export default function fetchSearchResults(query) {
    return (dispatch) => {
        let url = 'http://127.0.0.1:5000/api/v1/search';  /*Host on local server and add CORS to concerned endpoint*/
        dispatch({
            'type': 'FETCH_RESULTS_PENDING',
            'payload': ''
        });
        axios.get(url, {params: {q: query}})
            .then((response) => {
                dispatch({
                    'type': 'FETCH_RESULTS_FULFILLED',
                    'payload': response.data
                })
            })
            .catch((error) => {
                dispatch({
                    'type': 'FETCH_RESULTS_REJECTED',
                    'payload': error
                })
            })
    };
}