import axios from 'axios';

export const fetchMovies = () => async dispatch => {
  dispatch({ type: 'MOVIES_LOADING' });
  try {
    const response = await axios.get('http://localhost:5000/movies');
    dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_MOVIES_ERROR', payload: error.message });
  }
};

export const selectMovie = (id) => {
  return {
    type: 'SELECT_MOVIE',
    payload: id
  };
};