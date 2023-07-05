import React, { useEffect } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import movieData from "./api/movieData";

function App() {
  useEffect(() => {
    const fetchMovieData = async () => {
      const movie = await movieData.fetchMovie(1);
      console.log("movie.data", movie.data.page);
    };
    fetchMovieData();
  }, []);
  useEffect(() => {
    const fetchMovieData = async () => {
      const movie = await movieData.fetchMovie(1);
      console.log("movie.data", movie.data.page);
    };
    fetchMovieData();
  }, []);
  return (
    <div className="home-container text-main-txt bg-main-theme min-h-screen font-Titillium">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
