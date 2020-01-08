import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";
import PostField from "./PostField";

function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [offsetPosts, setoffsetPosts] = useState(0);
  // il faut ajouter une limite de recharge pour le nombre de post. Sinon l'appel axios se fait même s'il n'y a plus rien à afficher
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${offsetPosts}`)
      .then(response => {
        let newPosts = response.data;
        setPosts(posts.concat(newPosts));
      })
      .catch(error => {
        console.log(`oups it did not work ${offsetPosts}` + error);
      });
  }, [offsetPosts]);
  window.addEventListener(
    "scroll",
    () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight
      ) {
        setoffsetPosts(offsetPosts + 10);
      }
    },
    [offsetPosts]
  );

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
