import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Este é o meu Header</h2>

      <div class="menu">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </header>
  );
}

export default Header;
