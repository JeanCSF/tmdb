import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Popular = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    const getPopularMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setPopularMovies(data.results);
    };

    useEffect(() => {
        const popularMoviesUrl = `${moviesURL}popular?${apiKey}`

        getPopularMovies(popularMoviesUrl);
    }, [])
    return (
        <div className="container">
            <h2 className="title">POPULAR</h2>
            <h3>A list of movies ordered by popularity</h3><br />
            <hr />
            <div className="movies-container">
                {popularMovies.length === 0 && <p>Loading...</p>}
                {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Popular