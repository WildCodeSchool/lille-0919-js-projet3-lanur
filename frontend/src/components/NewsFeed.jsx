import React, { Component } from "react";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";

function NewsFeed() {
  return (
    <div className="main-NewsFeed">
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
