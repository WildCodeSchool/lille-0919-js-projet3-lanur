import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/NewsFeed.scss";
import Postcard from "./Postcard";
import LiveContainer from "./LiveContainer";
import PostField from "./PostField";
import { backend } from "../conf.js";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./Filter";

function NewsFeed() {
  const filters = useSelector(state => state.filters);
  const [posts, setPosts] = useState([]);
  const [offsetPosts, setOffsetPosts] = useState(0);
  const reload = useSelector(state => state.reload);
  const dispatch = useDispatch();

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight &&
      posts.length >= 10
    ) {
      setOffsetPosts(offsetPosts + 10);
    }
  };

  useEffect(() => {
    if (offsetPosts === 0) {
      axios.get(`${backend}/api/posts/${offsetPosts}`).then(({ data }) => {
        setPosts(data);
      });
    } else {
      axios.get(`${backend}/api/posts/${offsetPosts}`).then(({ data }) => {
        setPosts(posts.concat(data));
      });
    }
  }, [offsetPosts, reload]);

  return (
    <div className="main-NewsFeed">
      <PostField />
      <Filter />
      {filters.length > 0
        ? posts
            .filter(post => filters.includes(post.game_id))
            .map(post => (
              <Postcard
                message={post.message}
                date={post.date}
                image_url={post.image_url}
                game_id={post.game_id}
                user_avatar={post.user_avatar}
                id={post.id}
                user_id={post.user_id}
                nblike={post.nbLike}
                statuslike={post.liked}
                userPseudo={post.pseudo}
              />
            ))
        : posts.map(post => (
            <Postcard
              message={post.message}
              date={post.date}
              image_url={post.image_url}
              game_id={post.game_id}
              user_avatar={post.user_avatar}
              id={post.id}
              user_id={post.user_id}
              nblike={post.nbLike}
              statuslike={post.liked}
              userPseudo={post.pseudo}
            />
          ))}
      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
