import { db } from "./firebaseConnection";
import { useState } from "react";
import { doc, setDoc, collection, addDoc, getDoc } from "firebase/firestore";
import "./app.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    //   .then(() => {
    //     console.log("Dados registrados com sucesso");
    //   })
    //   .catch((error) => {
    //     console.log("Gerou erro" + error);
    //   });

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("Dados Cadastrados com sucesso.");
        setAutor("");
        setTitulo("");
      })
      .catch((error) => {
        console.log("Gerou erro" + error);
      });
  }

  async function buscarPost() {
    const postRef = doc(db, "posts", "12345");

    await getDoc(postRef)
      .then((snapshot) => {
        setAutor(snapshot.data().autor);
        setTitulo(snapshot.data().titulo);
      })
      .catch(() => {
        console.log("Erro ao buscar");
      });
  }
  return (
    <div>
      <h1>React + firebase </h1>

      <div class="container">
        <label>titulo:</label>
        <textarea
          placeholder="Digite um t[itulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <textarea
          placeholder="autor do Post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscas Posts</button>
      </div>
    </div>
  );
}

export default App;
