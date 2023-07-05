import React, { createContext, useState } from "react";

export const MovieContext = createContext();
export const SearchContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({
    contentItems: {
      content: [],
    },
  });
  const [searchText, setSearchText] = useState("");
  return (
    <MovieContext.Provider value={[movieData, setMovieData]}>
      <SearchContext.Provider value={[searchText, setSearchText]}>
        {children}
      </SearchContext.Provider>
    </MovieContext.Provider>
  );
};
