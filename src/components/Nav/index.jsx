import React, { useContext, useState } from "react";
import Search from "../Search";
import { SearchContext } from "../../context/ApiContext";

const Nav = ({ title }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useContext(SearchContext);

  return (
    <>
      <div className="sticky top-0">
        <div className="p-3 flex px-5 justify-between items-center bg-nav-bg-img">
          <div className="title-container flex items-center gap-3">
            <img
              src="https://test.create.diagnal.com/images/Back.png"
              alt="back-button"
              className="md:w-6 md:h-6 h-4 w-4"
            />
            <h2 className="title text-lg md:text-2xl">{title}</h2>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="text"
              className="w-80 hidden lg:flex rounded p-1 px-2 outline-gray-700 text-black font-bold"
              placeholder="Search"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <img
              src="https://test.create.diagnal.com/images/search.png"
              alt="search"
              className="md:w-6 md:h-6 h-4 w-4"
              onClick={() => {
                setIsSearch(!isSearch);
              }}
            />
          </div>
        </div>
        <Search isOpen={isSearch} />
      </div>
    </>
  );
};

export default Nav;
