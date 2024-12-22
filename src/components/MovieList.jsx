import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, selectMovie } from '../redux/actions/movieActions';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movieState);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <Link to={`/movie/${movie.id}`} onClick={() => dispatch(selectMovie(movie))}>
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.releaseDate}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;