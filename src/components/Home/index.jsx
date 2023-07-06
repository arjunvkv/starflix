import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import movieApi from "../../api/movieApi";
import Nav from "../Nav";
import { MovieContext, SearchContext } from "../../context/ApiContext";
import MovieCards from "../MovieCards";

const Home = () => {
  const [movieData, setMovieData] = useContext(MovieContext);
  const [searchText] = useContext(SearchContext);
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
    if (
      movieData?.contentItems?.content.length >=
      movieData["total-content-items"]
    )
      return;
    setPageNo(pageNo + 1);
  };
  const isSearchEmpty = () => {
    if (
      searchText.length &&
      !movieData?.contentItems?.content.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      ).length
    ) {
      return <h2 className="text-center p-5">No search results found.</h2>;
    }
  };

  return (
    <>
      <Nav title={movieData.title} />
      <div className="p-1 md:p-2">
        {isSearchEmpty()}
        {movieData?.contentItems?.content && (
          <InfiniteScroll
            dataLength={movieData?.contentItems?.content.length}
            next={fetchMoreData}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 place-items-center"
            hasMore={true}
          >
            {movieData?.contentItems?.content
              .filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((item, index) => (
                <MovieCards item={item} key={`${item.name}-${index}`} />
              ))}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Home;
