import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, SELECT_MOVIE } from '../actions/movieActions';

const initialState = {
    movies: [],
    selectedMovie: null,
    loading: false,
    error: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_MOVIES_SUCCESS:
            return { ...state, loading: false, movies: action.payload };
        case FETCH_MOVIES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SELECT_MOVIE:
            return { ...state, selectedMovie: action.payload };
        default:
            return state;
    }
};

export default movieReducer;