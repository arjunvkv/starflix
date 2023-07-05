import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.log("error", error);
//   }
// );

export default instance;
