import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Prime Flix
      </Link>

      <Link to="/favoritos" className="favoritos">
        Meus filmes
      </Link>
    </header>
  );
}

export default Header;
