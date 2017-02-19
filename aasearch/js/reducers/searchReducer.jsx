export default function searchReducer(state={
    results: [],
    searching: false,
    searched: false,
    error: false
}, action) {
    switch (action.type) {
        case "FETCH_RESULTS_FULFILLED": {
            return {
                ...state,
                results: action.payload.results,
                searching: false,
                searched: true
            }
        }
        case "FETCH_RESULTS_PENDING": {
            return {
                ...state,
                searching: true,
                searched: false
            }
        }
        case "FETCH_RESULTS_REJECTED": {
            return {
                ...state,
                searching: false,
                searched: false,
                error: true
            }
        }
    }
    return state;
}