import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
      );

      const data = await res.json();

      setMovies(data.results); // ✅ geen duplicates meer
    };

    fetchMovies();
  }, [page]);

  return (
    <MoviesContext.Provider value={{ movies, page, setPage }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  return useContext(MoviesContext);
}