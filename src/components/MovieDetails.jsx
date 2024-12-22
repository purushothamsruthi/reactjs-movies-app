import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
    const selectedMovie = useSelector((state) => state.movieState.selectedMovie);

    if (!selectedMovie) return <div>No movie selected</div>;

    return (
        <div className="movie-details">
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.poster} alt={selectedMovie.title} />
            <p>{selectedMovie.description}</p>
            <p>Director: {selectedMovie.director}</p>
            <p>Cast: {selectedMovie.cast.join(', ')}</p>
        </div>
    );
};

export default MovieDetails;