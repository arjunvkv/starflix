import { createContext, useState } from "react";

export const MovieContext = createContext();
const [movieData, setMovieData] = useState([]);

export const movieContextProvider = ({ children }) => {
  return (
    <MovieContext.Provider value={[movieData, setMovieData]}>
      {children}
    </MovieContext.Provider>
  );
};
