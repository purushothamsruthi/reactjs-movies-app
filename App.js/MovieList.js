import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovie } from '../actions/movieActions';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie-list">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="movie-grid">
          {movies.map(movie => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => dispatch(selectMovie(movie.id))}
            >
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;