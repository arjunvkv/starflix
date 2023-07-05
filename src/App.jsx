import React, { useContext } from "react";
import Home from "./components/Home";
import { MovieContextProvider } from "./context/ApiContext";

function App() {
  return (
    <MovieContextProvider>
      <div className="home-container text-main-txt bg-main-theme min-h-screen font-Titillium">
        <Home />
      </div>
    </MovieContextProvider>
  );
}

export default App;
