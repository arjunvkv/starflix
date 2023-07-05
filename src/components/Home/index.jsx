import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  return (
    <div className="p-3">
      <InfiniteScroll
        dataLength={5}
        // next={this.fetchMoreData}
        style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
        inverse={true} //
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {/* {this.state.items.map((_, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))} */}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
