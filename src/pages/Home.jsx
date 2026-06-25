import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MoviesContext";
import "./Home.css";

function Home() {
  const { movies } = useMovies();

  return (
    <div className="home">
      <h1>Populaire Films</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;