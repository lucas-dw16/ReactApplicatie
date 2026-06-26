import "./MovieDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Laden...</h2>;

  return (
    <div
      className="movie-background"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
          url(https://image.tmdb.org/t/p/original${movie.backdrop_path})
        `,
      }}
    >
      <div className="movie-detail">
        <h1>{movie.title}</h1>

        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />

        <p><strong>⭐ Rating:</strong> {movie.vote_average.toFixed(1)}</p>

        <p><strong>📅 Released:</strong> {movie.release_date}</p>

        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;