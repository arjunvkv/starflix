import React from "react";

const MoveiCards = ({ item }) => {
  return (
    <div className="p-2 md:p-2 items-start space-y-1 flex flex-col justify-center max-h-96 sm:w-[250px] w-[115px] max-w-[170px]">
      <img
        src={`${import.meta.env.VITE_BASE_URL}/images/${
          item?.["poster-image"]
        }`}
        alt={item.name}
        className="rounded object-cover"
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
