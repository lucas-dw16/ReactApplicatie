import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MoviesContext";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const { movies, page, setPage } = useMovies();

  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // jaar stats
  const yearStats = movies.reduce((acc, movie) => {
    const year = movie.release_date?.slice(0, 4);
    if (!year) return acc;

    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  // FILTERS (ALLE DATA)
  const filteredMovies = movies.filter((movie) => {
    const year = movie.release_date?.slice(0, 4);

    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchYear = selectedYear ? year === selectedYear : true;

    const matchRating = selectedRating
      ? movie.vote_average >= selectedRating
      : true;

    return matchSearch && matchYear && matchRating;
  });

  return (
    <div className="home">
      <h1>Films</h1>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Zoek film..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTERS */}
      <div className="filters">
        <div>
          <h3>Jaar</h3>

          {Object.entries(yearStats).map(([year, count]) => (
            <label key={year} className="filter-item">
              <input
                type="checkbox"
                checked={selectedYear === year}
                onChange={() =>
                  setSelectedYear(selectedYear === year ? null : year)
                }
              />
              {year} ({count})
            </label>
          ))}
        </div>

        <div>
          <h3>Rating</h3>

          {[5, 6, 7, 8, 9].map((r) => (
            <button
              key={r}
              onClick={() =>
                setSelectedRating(selectedRating === r ? null : r)
              }
              className={selectedRating === r ? "active" : ""}
            >
              ⭐ {r}+
            </button>
          ))}
        </div>
      </div>

      {/* MOVIES */}
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ‹
        </button>

        <span>Pagina {page}</span>

        <button onClick={() => setPage(page + 1)}>
          ›
        </button>
      </div>
    </div>
  );
}

export default Home;