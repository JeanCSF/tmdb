import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const getUpcomingMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setUpcomingMovies(data.results);
    };

    useEffect(() => {
        const upcomingMoviesUrl = `${moviesURL}upcoming?${apiKey}`

        getUpcomingMovies(upcomingMoviesUrl);
    }, [])
    return (
        <div className="container">
            <h2 className="title">UPCOMING</h2>
            <h3>A list of movies that are being released soon</h3><br />
            <hr />
            <div className="movies-container">
                {upcomingMovies.length === 0 && <p>Loading...</p>}
                {upcomingMovies.length > 0 && upcomingMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Upcoming