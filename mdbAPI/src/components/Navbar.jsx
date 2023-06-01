import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">MoviesDB</Link>
            </h2>
            <form>
                <input type="text" placeholder="Buscar filme"/>
            </form>
        </nav>
    )
}
export default Navbar;