import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export const fetchMovies = () => async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    try {
        const response = await axios.get('http://localhost:3001/movies');
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
};

export const selectMovie = (movie) => ({
    type: SELECT_MOVIE,
    payload: movie,
});