import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";

function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [loadedposts, setLoadedPosts] = useState(0);

  useEffect(() => {
    if (posts.length === loadedposts) {
      axios
        .get("http://localhost:5050/api/posts")
        .then(response => {
          setLoadedPosts(loadedposts + 10);
          let newPosts = response.data;
          setPosts(newPosts);
          console.log(newPosts);
        })
        .catch(error => {
          console.log("oups it did not work" + error);
        });
    }
  });

  return (
    <div className="main-NewsFeed">
      {posts.map(post => (
        <div>{post.message}</div>
      ))}
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
