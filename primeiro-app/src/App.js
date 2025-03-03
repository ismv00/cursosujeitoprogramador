import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar conta de luz",
    "Estudar React JS",
  ]);

  function handleData(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={handleData}>
        <label>Nome da Tarefa </label>
        <br />
        <input
          placeholder="Digite seu nome"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>

      <br />
      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
