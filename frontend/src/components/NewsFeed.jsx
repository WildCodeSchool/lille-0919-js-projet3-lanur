import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";
import PostField from "./PostField";

function NewsFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts").then(({ data }) => {
      setPosts(data);
    });
  });

  return (
    <div className="main-NewsFeed">
      <PostField />
      {posts.map(post => (
        <Postcard message={post.message} date={post.date} />
      ))}
      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
