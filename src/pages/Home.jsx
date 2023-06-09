import { useState, useEffect } from "react";
import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}popular?${apiKey}`

        getTopRatedMovies(topRatedUrl);
    }, [])
    return (
        <div className="container">
            <h2 className="title">MOVIESDB</h2>
            <hr />
            <p>
                This is a experimental project where i use React hooks to consume TMDB's API  and
                feed the app pages. The main objetive is to pratice the usage of useState and useEffect
                hook, creating a fully functional application.
            </p>
            <p>
                The main part of the app was made following this <a href="https://youtu.be/XqxUHVVO7-U" target="_blank" rel="external" title="Tutorial link">tutorial</a> 
                from Matheus Battisti of "Hora de Codar" channel on Youtube, you can find 
                the original <a href="https://github.com/matheusbattisti/movies_lib" target="_blank" rel="external" title="Link to original repository">repository here</a>.
                And here you can find the repository for my project <a href="https://github.com/JeanCSF/tmdb-react" target="_blank" rel="external" title="Link to this app repository">Repository</a>.
            </p>
        </div>
    )
}

export default Home;