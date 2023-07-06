import React, { useContext } from "react";
import { SearchContext } from "../../context/ApiContext";

const Search = ({ isOpen }) => {
  const [searchText, setSearchText] = useContext(SearchContext);

  return (
    <>
      {isOpen && (
        <div className="bg-nav-bg-img pb-3 px-3 w-full grid place-items-end lg:hidden">
          <input
            type="text"
            className="w-full rounded p-1 px-2 outline-gray-700 text-black font-bold"
            placeholder="Search for a movie, tv show...."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Search;
