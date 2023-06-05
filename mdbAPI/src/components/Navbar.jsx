import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'


const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/" title="Home">
                    <BiCameraMovie />
                    MoviesDB
                </Link>
            </h2>
            <h3>
                <Link to="top_movies" title="Get a list of movies ordered by rating.">
                    Top Rated
                </Link>
            </h3>
            <h3>
                <Link to="upcoming" title="Get a list of movies that are being released soon.">
                    Upcoming
                </Link>
            </h3>
            <h3>
                <Link to="popular" title="Get a list of movies ordered by popularity.">
                    Popular
                </Link>
            </h3>
            <h3>
                <Link to="now_playing" title="Get a list of movies that are currently in theatres.">
                    Now Playing
                </Link>
            </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Movie" onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button type="submit" role="search" title="Search"> <BiSearchAlt2 /> </button>
            </form>
        </nav>
    )
}
export default Navbar;