import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  return useContext(MoviesContext);
}