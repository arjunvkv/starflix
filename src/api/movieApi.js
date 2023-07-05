import axios from "./axios/Axios";

export const fetchMovie = (page) => {
  return axios.get(`/data/page${page}.json`);
};

export default { fetchMovie };
