import React from "react";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";
import PostField from "./PostField";

function NewsFeed() {
  return (
    <div className="main-NewsFeed">
      <PostField />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
