import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({
    contentItems: {
      content: [],
    },
  });
  return (
    <MovieContext.Provider value={[movieData, setMovieData]}>
      {children}
    </MovieContext.Provider>
  );
};
