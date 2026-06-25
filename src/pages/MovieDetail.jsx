import "./MovieDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Laden...</p>;

 return (
  <div className="movie-detail">
      <h1>{movie.title}</h1>
      <br />
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        />
      <p>⭐ {movie.vote_average}</p>

      <p>{movie.release_date}</p>
      <br />
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;