import { db, auth } from "./firebaseConnection";
import { useState, useEffect } from "react";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "./app.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState();

  const [posts, setPosts] = useState([]);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(listaPost);
      });
    }

    loadPosts();
  }, []);

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

  //Buscar um post específico
  async function buscarPost() {
    // const postRef = doc(db, "posts", "12345");

    // await getDoc(postRef)
    //   .then((snapshot) => {
    //     setAutor(snapshot.data().autor);
    //     setTitulo(snapshot.data().titulo);
    //   })
    //   .catch(() => {
    //     console.log("Erro ao buscar");
    //   });

    //Buscar uma lista de posts
    const postsRef = collection(db, "posts");
    await getDocs(postsRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(lista);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function editarPost() {
    const docRef = doc(db, "posts", idPost);
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("POST ATUALIZADO");
        setIdPost("");
        setTitulo("");
        setAutor("");
      })
      .catch(() => {
        console.log("Erro ao atualizar o Post");
      });
  }

  //Deletando post
  async function excluirPost(id) {
    const docRef = doc(db, "posts", id);

    await deleteDoc(docRef)
      .then(() => {
        alert("Post Deletado com sucesso.");
      })
      .catch(() => {
        console.log("errro ao deletar post.");
      });
  }

  //Cadastrando um usuário
  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        console.log("Cadastrado com sucesso");
        setEmail("");
        setSenha("");
      })
      //Casos de verificações
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Senha muito fraca.");
        } else if (error.code === "auth/email-already-in-use") {
          alert("E-mail já existe.");
        }
      });
  }

  //Logar com usuário
  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        console.log("usuário logado com sucesso");
        console.log(value.user);

        setUserDetail({
          uid: value.user.uid,
          email: value.user.email,
        });
        setUser(true);
        setEmail("");
        setSenha("");
      })
      .catch(() => {
        console.log("ERRO AO FAZER O LOGIN");
      });
  }
  //Deslogar usuário
  async function fazerLogout() {
    await signOut(auth);
    setUser(false);
    setUserDetail({});
  }
  return (
    <div>
      <h1>React + firebase </h1>

      {user && (
        <div>
          <strong>Seja bem vindo(a) (Você está logado)</strong>
          <br />
          <span>
            ID: {userDetail.uid} - Email: {userDetail.email}
          </span>
          <br />
          <button onClick={fazerLogout}>Sair da conta</button>
          <br />
          <br />
        </div>
      )}

      <div class="container">
        <h2>Usuários</h2>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <br />
        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />

        <button onClick={novoUsuario}>Cadastrar</button>
        <button onClick={logarUsuario}>Fazer login</button>
      </div>

      <br />
      <br />
      <hr />
      <div class="container">
        <h2>Posts</h2>
        <label>ID do post:</label>
        <input
          placeholder="Digite o ID do post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />{" "}
        <br />
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
        <br />
        <button onClick={editarPost}>Atualizar Post</button>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br />
                <span>Titulo: {post.titulo}</span> <br />
                <span>Autor:{post.autor}</span> <br />
                <br />
                <button onClick={() => excluirPost(post.id)}>
                  Excluir Post
                </button>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
