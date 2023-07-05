import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({
    contentItems: {
      content: [
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
        { name: "The Birds", posterimage: "poster1.jpg" },
      ],
    },
  });
  return (
    <MovieContext.Provider value={[movieData, setMovieData]}>
      {children}
    </MovieContext.Provider>
  );
};
