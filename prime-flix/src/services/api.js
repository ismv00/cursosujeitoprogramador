import axios from "axios";

//https://api.themoviedb.org/3/movie/550?api_key=7234e0386ed6011f330886f29e665f2a

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
