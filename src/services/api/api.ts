import axios from "axios";

const api = axios.create({
  baseURL: "https://api-sistema-de-pontos.herokuapp.com/",
});

export default api;
