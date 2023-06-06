import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { FaBars } from "react-icons/fa";
import './Navbar.css'


const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id="navbar">
            <Link to="/" className="brand" title="Home">
                <BiCameraMovie />
                MoviesDB
            </Link>
            <button className="hamburger" title="Toggle Navbar" role="button"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                <FaBars />
            </button>
            <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                <ul>
                    <li>
                        <Link to="top_movies" title="Get a list of movies ordered by rating.">Top Rated</Link>
                    </li>
                    <li>
                        <Link to="upcoming" title="Get a list of movies that are being released soon.">Upcoming</Link>
                    </li>
                    <li>
                        <Link to="popular" title="Get a list of movies ordered by popularity.">Popular</Link>
                    </li>
                    <li>
                        <Link to="now_playing" title="Get a list of movies that are currently in theatres.">Now Playing</Link>
                    </li>
                    <li>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Search Movie" onChange={(e) => setSearch(e.target.value)} value={search} />
                            <button type="submit" role="search" title="Search" id="search"> <BiSearchAlt2 /> </button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;