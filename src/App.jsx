import React, { useEffect } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { MovieContextProvider } from "./context/ApiContext";

function App() {
  return (
    <MovieContextProvider>
      <div className="home-container text-main-txt bg-main-theme min-h-screen font-Titillium">
        <Nav />
        <Home />
      </div>
    </MovieContextProvider>
  );
}

export default App;
