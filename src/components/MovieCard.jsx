import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <p><strong>⭐ Rating:</strong> {movie.vote_average}</p>

      <p><strong>📅 Release:</strong> {movie.release_date}</p>

      <br />

      <p className="overview">
        {movie.overview}
      </p>
    </div>
  );
}

export default MovieCard;