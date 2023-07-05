import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import movieApi from "../../api/movieApi";
import Nav from "../Nav";
import { MovieContext } from "../../context/ApiContext";
import MovieCards from "../MovieCards";

const Home = () => {
  const [movieData, setMovieData] = useContext(MovieContext);
  const [pageNo, setPageNo] = useState(1);

  const fetchMovieData = async (page) => {
    const movie = await movieApi.fetchMovie(page);
    setMovieData((prev) => {
      const prevContentItem = prev.contentItems.content;
      return {
        ...movie.data.page,
        ["content-items"]: null,
        contentItems: {
          content: [
            ...(prevContentItem ?? ""),
            ...movie.data.page["content-items"]?.["content"],
          ],
        },
      };
    });
  };

  useEffect(() => {
    fetchMovieData(pageNo);
  }, [pageNo]);

  const fetchMoreData = () => {
    console.log("hai");
    if (
      movieData?.contentItems?.content.length >=
      movieData["total-content-items"]
    )
      return;
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    console.log("movieData", movieData);
    console.log(
      movieData?.contentItems?.content.length < movieData["total-content-items"]
    );
  }, [movieData]);
  return (
    <>
      <Nav title={movieData.title} />
      <div className="p-1 md:p-2">
        {movieData?.contentItems?.content && (
          <InfiniteScroll
            dataLength={movieData?.contentItems?.content.length}
            next={fetchMoreData}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
            hasMore={true}
          >
            {movieData?.contentItems?.content.map((item, index) => (
              <MovieCards item={item} key={`${item.name}-${index}`} />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Home;
