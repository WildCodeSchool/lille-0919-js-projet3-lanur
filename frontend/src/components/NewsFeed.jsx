import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";

function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [loadedposts, setLoadedPosts] = useState(10);

  useEffect(() => {
    if (posts.length != loadedposts) {
      axios
        .get(`http://localhost:5050/api/posts/${loadedposts}`)
        .then(response => {
          // setLoadedPosts(loadedposts + 10);
          let newPosts = response.data;
          setPosts(newPosts);
          console.log(
            "api ok --------------------------------------------------------------"
          );
        })
        .catch(error => {
          console.log("oups it did not work" + error);
        });
    }
  }, loadedposts);

  return (
    <div className="main-NewsFeed">
      {posts.map(post => (
        <div className="wip">
          {post.id} - {post.message}
        </div>
      ))}

      {console.log(window.scroll)}

      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
