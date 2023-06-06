import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const NowPlaying = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const getNowPlayingMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setNowPlayingMovies(data.results);
    };

    useEffect(() => {
        const nowPlayingMoviesUrl = `${moviesURL}now_playing?${apiKey}`

        getNowPlayingMovies(nowPlayingMoviesUrl);
    }, [])
    return (
        <div className="container">
            <h2 className="title">NOW PLAYING</h2>
            <h3>A list of movies that are currently in theatres</h3><br />
            <hr />
            <div className="movies-container">
                {nowPlayingMovies.length === 0 && <p>Loading...</p>}
                {nowPlayingMovies.length > 0 && nowPlayingMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default NowPlaying