import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies, selectedMovie } = useSelector(state => state);

  useEffect(() => {
    if (id && !selectedMovie) {
      const movie = movies.find(movie => movie.id === parseInt(id));
      dispatch({ type: 'SELECT_MOVIE', payload: movie });
    }
  }, [id, movies, dispatch, selectedMovie]);

  return (
    <div className="movie-details">
      {selectedMovie ? (
        <div>
          <h1>{selectedMovie.title}</h1>
          <img src={selectedMovie.poster} alt={selectedMovie.title} />
          <p>{selectedMovie.description}</p>
          <p>Director: {selectedMovie.director}</p>
          <p>Cast: {selectedMovie.cast.join(', ')}</p>
          <p>Release Date: {selectedMovie.releaseDate}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
