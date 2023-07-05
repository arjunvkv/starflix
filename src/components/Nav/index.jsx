import React from "react";

const Nav = ({ title }) => {
  return (
    <div className="p-3 flex px-5 justify-between items-center bg-nav-bg-img">
      <div className="title-container flex items-center gap-3">
        <img
          src="https://test.create.diagnal.com/images/Back.png"
          alt="back-button"
          className="md:w-6 md:h-6 h-4 w-4"
        />
        <h2 className="title text-lg md:text-2xl">{title}</h2>
      </div>
      <img
        src="https://test.create.diagnal.com/images/search.png"
        alt="search"
        className="md:w-6 md:h-6 h-4 w-4"
      />
    </div>
  );
};

export default Nav;
