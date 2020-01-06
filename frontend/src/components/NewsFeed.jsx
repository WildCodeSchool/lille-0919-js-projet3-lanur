import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";

function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [offsetPosts, setoffsetPosts] = useState(0);

  // il faut ajouter une limite de recharge pour le nombre de post. Sinon l'appel axios se fait même s'il n'y a plus rien à afficher

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/posts/${offsetPosts}`)
      .then(response => {
        let newPosts = response.data;
        setPosts(posts.concat(newPosts));
        console.log("----axios------");
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
      {/* faire le .map sur les post card pour l'affichage des posts */}

      {posts.map(post => (
        <div className="wip">
          {post.id} - {post.message}
        </div>
      ))}

      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
