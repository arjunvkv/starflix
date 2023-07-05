import React, { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import movieApi from "../../api/movieApi";
import { MovieContext } from "../../context/ApiContext";

const Home = () => {
  const [movieData, setMovieData] = useContext(MovieContext);

  useEffect(() => {
    console.log("movieData", movieData);
    const fetchMovieData = async () => {
      const movie = await movieApi.fetchMovie(1);
      setMovieData((prev) => {
        const prevContentItem = prev["content-item"]?.["content"];
        console.log("prevContentItem", prevContentItem);
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
      console.log("movie.data", movie.data.page);
    };
    fetchMovieData();
  }, []);
  const fetchMoreData = (data) => {
    console.log("data", data);
    console.log("hai");
  };
  useEffect(() => {
    console.log("movieData content items", movieData?.contentItems?.content);
    // console.log("fsdf", movieData["content-items"]?.["content"]?.length);
  }, [movieData]);
  return (
    <div className="p-3 h-[300px] overflow-y-scroll" id="scrollableDiv">
      <InfiniteScroll
        dataLength={21}
        next={fetchMoreData}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
        inverse={true} //
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {movieData?.contentItems?.content.map((item, index) => (
          <div className="p-5" key={index}>
            item
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
