import React, { useContext, useState } from "react";
import Search from "../Search";
import { SearchContext } from "../../context/ApiContext";

const Nav = ({ title }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useContext(SearchContext);

  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="p-3 flex px-5 justify-between items-center bg-nav-bg-img">
          <div className="title-container flex items-center gap-3">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={`${import.meta.env.VITE_BASE_URL}/images/Back.png`}
                alt="back-button"
                className="md:w-6 md:h-6 h-4 w-4"
              />
            </button>
            <h2 className="title text-lg md:text-2xl">{title}</h2>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="text"
              className="w-80 hidden lg:flex rounded p-1 px-2 outline-gray-700 text-black font-bold"
              placeholder="Search for a movie, tv show...."
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setIsSearch(!isSearch);
              }}
            >
              <img
                src={`${import.meta.env.VITE_BASE_URL}/images/search.png`}
                alt="search"
                className="md:w-6 md:h-6 h-4 w-4"
              />
            </button>
          </div>
        </div>
        <Search isOpen={isSearch} />
      </div>
    </>
  );
};

export default Nav;
