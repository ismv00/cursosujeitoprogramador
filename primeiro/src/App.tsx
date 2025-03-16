import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [aluno, setAluno] = useState("");
  const [idade, setIdade] = useState("");

  function mostrarAluno() {
    setAluno(input);
  }
  return (
    <div>
      <h1>Conhecendo UseState</h1>
      <input
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <input
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <br />

      <button onClick={mostrarAluno}>Mostrar Aluno</button>

      <hr />

      <h3>Bem vindo: {aluno}</h3>
    </div>
  );
}
