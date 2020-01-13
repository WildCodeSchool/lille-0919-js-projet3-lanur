import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";
import PostField from "./PostField";
import { backend } from "../conf.js";

function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [offsetPosts, setoffsetPosts] = useState(0);

  useEffect(() => {
    axios.get(`${backend}/api/posts/${offsetPosts}`).then(({ data }) => {
      setPosts(posts.concat(data));
    });
  }, [offsetPosts]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight
      ) {
        setoffsetPosts(offsetPosts + 10);
      }
    });
  }, [document.documentElement.scrollTop]);

  return (
    <div className="main-NewsFeed">
      <PostField />
      {posts.map(post => (
        <Postcard
          message={post.message}
          date={post.date}
          image_url={post.image_url}
        />
      ))}
      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
