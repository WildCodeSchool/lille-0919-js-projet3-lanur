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
  const offsetPosts = useSelector(state => state.offsetPosts);
  const reload = useSelector(state => state.reload);
  const dispatch = useDispatch();
  const filterResult = posts.filter(post => filters.includes(post.game_id));
  const [totalPosts, setTotalPosts] = useState(null);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight &&
      totalPosts >= offsetPosts
    ) {
      console.log("scroll");
      dispatch({ type: "PLUS_TEN" });
    }
  };

  useEffect(() => {
    console.log("useeffect");
    console.log("totalPosts:" + totalPosts);
    console.log("offsetposts:" + offsetPosts);
    console.log("charged posts:" + posts.length);
    console.log("reload:" + reload);
    console.log("filter result:" + filterResult.length);
    console.log("filters.length " + filters.length);

    if (!totalPosts) {
      console.log("!totalPosts");
      axios.get(`${backend}/api/totalposts`).then(({ data }) => {
        setTotalPosts(data[0].totalpost);
      });
    }
    if (offsetPosts === 0) {
      console.log("offsetPosts === 0");
      axios.get(`${backend}/api/posts/${offsetPosts}`).then(({ data }) => {
        setPosts(data);
        dispatch({ type: "PLUS_TEN" });
      });
    } else if (
      filterResult.length < 10 &&
      filters.length > 0 &&
      totalPosts >= offsetPosts
    ) {
      console.log(
        "filterResult.length < 10 && \
      filters.length > 0 &&\
      totalPosts >= offsetPosts"
      );

      axios.get(`${backend}/api/posts/${offsetPosts}`).then(({ data }) => {
        setPosts(posts.concat(data));
        dispatch({ type: "PLUS_TEN" });
        console.log("plus 10");
      });
    } else if (totalPosts >= offsetPosts) {
      console.log("totalPosts >= offsetPosts");
      axios.get(`${backend}/api/posts/${offsetPosts}`).then(({ data }) => {
        setPosts(posts.concat(data));
      });
    }
    // if (
    //   filterResult.length < 10 &&
    //   filters.length > 0 &&
    //   totalPosts >= offsetPosts
    // ) {
    //   dispatch({ type: "PLUS_TEN" });
    //   console.log("plus 10");
    // }
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
            />
          ))}

      <LiveContainer />
    </div>
  );
}

export default NewsFeed;
