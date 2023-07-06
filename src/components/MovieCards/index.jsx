import React from "react";

const MoveiCards = ({ item }) => {
  return (
    <div className="p-1 md:p-2 items-start space-y-1 flex flex-col justify-center w-fit">
      <img
        src={`${import.meta.env.VITE_BASE_URL}/images/${
          item?.["poster-image"]
        }`}
        alt={item.name}
        className="rounded w-auto"
        onError={(item) => {
          item.target.src = `${
            import.meta.env.VITE_BASE_URL
          }/images/placeholder_for_missing_posters.png`;
        }}
      />
      <h3
        className="movie-title text-ellipsis whitespace-pre w-full overflow-hidden"
        title={item.name}
      >
        {item.name}
      </h3>
    </div>
  );
};

export default MoveiCards;
