import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />

        <h3>{movie.title}</h3>

        <p>⭐ {movie.vote_average}</p>

        <p>{movie.release_date}</p>
      </div>
    </Link>
  );
}

export default MovieCard;