import { useEffect } from "react";

function App() {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    console.log("API Key:", apiKey);

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return <h1></h1>;
}

export default App;