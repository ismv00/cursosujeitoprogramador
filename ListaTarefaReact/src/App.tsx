import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [editTask, setEditTasks] = useState({
    enabled: false,
    task: "",
  });

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact");
    if (tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas));
    }
  }, []);

  function handleRegister() {
    if (!input) {
      alert("Preecha o nome da sua tarefa");
      return;
    }
    if (editTask.enabled) {
      handleSaveEdit();
      return;
    }

    setTasks((tarefas) => [...tarefas, input]);
    setInput("");

    localStorage.setItem("@cursoreact", JSON.stringify([...tasks, input]));
  }

  function handleSaveEdit() {
    const findIndexTask = tasks.findIndex((task) => task === editTask.task);
    const allTasks = [...tasks];
    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEditTasks({
      enabled: false,
      task: "",
    });

    setInput("");

    localStorage.setItem("@cursoreact", JSON.stringify([allTasks]));
  }

  function deleteRegister(item: string) {
    const removeTask = tasks.filter((task) => task !== item);
    setTasks(removeTask);

    localStorage.setItem("@cursoreact", JSON.stringify(removeTask));
  }

  function handleEdit(item: string) {
    setInput(item);
    setEditTasks({
      enabled: true,
      task: item,
    });
  }
  return (
    <div>
      <h1>Lista de Tarefas;</h1>

      <input
        placeholder="Digite o nome da tarefa..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button onClick={handleRegister}>
        {editTask.enabled ? "Atualizar Tarefa" : "Cadastrar Tarefa"}
      </button>
      <hr />
      {tasks.map((item) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => deleteRegister(item)}>Excluir</button>
        </section>
      ))}
    </div>
  );
}
