import { Link } from "react-router-dom";
import "./Welcome.css";


function Welcome() {
  return (
    <div className="welcome">

      <h1>🎬 Movie Explorer</h1>

      <p className="intro">
        Welkom bij Movie Explorer! Ontdek populaire films, bekijk informatie,
        zoek naar jouw favoriete films en filter op jaar of beoordeling.
      </p>

      <div className="info-cards">
        <div className="info-card">
          <h2>🔥 Populaire films</h2>
          <p>Bekijk de populairste films van dit moment.</p>
        </div>

        <div className="info-card">
          <h2>⭐ Beoordelingen</h2>
          <p>Zie direct welke films de hoogste ratings hebben.</p>
        </div>

        <div className="info-card">
          <h2>🔍 Zoeken & Filteren</h2>
          <p>Zoek films of filter op jaar en beoordeling.</p>
        </div>
      </div>

<div className="button-group">
  <Link to="/movies" className="start-button">
    Bekijk Films
  </Link>

  <Link to="/about" className="start-button">
    Over Movie Explorer
  </Link>
</div>

</div>
);
}

export default Welcome;