import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem vindo a minha página</h1>
      <span>Sujeito Programador</span>
      <br />
      <br />

      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Home;
