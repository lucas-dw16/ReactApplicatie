import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>Welkom bij Movie Explorer</h1>

      <Link to="/movies">
        <button>Bekijk Films</button>
      </Link>
    </div>
  );
}

export default Welcome;