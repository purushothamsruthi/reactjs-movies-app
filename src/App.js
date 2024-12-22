import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';

const App = () => (
    <Router>
        <div>
            <SearchBar />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </div>
    </Router>
);

export default App;