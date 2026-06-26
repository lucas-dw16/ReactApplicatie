import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>Over Movie Explorer</h1>

      <p>
        Movie Explorer is een React-applicatie waarmee gebruikers populaire
        films kunnen bekijken via de TMDB API.
      </p>

      <br />

      <h2>Gebruikte technieken</h2>

      <p>⚛️ React</p>
      <p>🛣️ React Router</p>
      <p>🌐 TMDB API</p>
      <p>📦 Context API</p>
      <p>🎨 CSS</p>

      <br />

      <h2>Doel van de applicatie</h2>

      <p>
        Deze applicatie is gemaakt als schoolproject voor Front-end
        Development. Gebruikers kunnen populaire films bekijken, zoeken,
        filteren en detailinformatie openen.
      </p>

      <br />

      <Link to="/" className="start-button">
        ⬅ 
      </Link>
    </div>
  );
}

export default About;