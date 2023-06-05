import { Link } from "react-router-dom";

import { FaArrowAltCircleUp, FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="movie-card">
            <img width={500}  src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar  color="#F7D354" title="Vote Average"/> {movie.vote_average}
            </p>
            <p>
                <FaArrowAltCircleUp  color="#F7D354" title="Popularity"/> {movie.popularity}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Details</Link> }
        </div>
    )
}

export default MovieCard;