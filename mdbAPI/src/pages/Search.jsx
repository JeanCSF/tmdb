import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;


const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?query=${query}&${apiKey}`;

        getSearchedMovies(searchWithQueryUrl);
    }, [query]);

    return (
        <div className="container">
            <h2 className="title">RESULTS FOR: <span className="query-text">{query}</span></h2>
            <hr />
            <div className="movies-container">
                {movies.length === 0 && <p>Loading...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard movie={movie}  key={movie.id}/>)}
            </div>
        </div>
    );
};

export default Search;