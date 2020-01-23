import React, { useEffect, useState } from "react";
import "./style/UserPage.scss";
import { Link } from "react-router-dom";
import { backend } from "../conf.js";
import axios from "axios";
import { useSelector, useStore } from "react-redux";
import Postcard from "./Postcard";

export default function UserPage() {
  const [user, getUser] = useState();
  const [posts, setPosts] = useState([]);
  const offsetPosts = useSelector(state => state.offsetPosts);
  const user_id = useSelector(state => state.user_id);

  useEffect(() => {
    axios
      .get(`${backend}/api/profile/${user_id}`)
      .then(({ data }) => {
        console.log(data);

        getUser(data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [offsetPosts]);

  useEffect(() => {
    if (user) {
      axios
        .get(`${backend}/api/user/posts/${user.id}`)
        .then(({ data }) => {
          setPosts(posts.concat(data));
        })
        .catch(err => {});
    }
  }, [user]);

  return (
    <div className="userProfile">
      <h1>Ton profil</h1>
      {user ? (
        <div className="profile">
          <div className="avatar">
            <img src={user.avatar} alt="Image de profil" />
          </div>
          <div className="info">
            <p>{user.pseudo}</p>
            <p>{user.age + " ans"}</p>
            <p>{user.role}</p>
            <p>
              {user.city}, {user.country}
            </p>
            <p>Ma bio : {user.bio}</p>
            <Link to="/editprofile">
              <button>Editer</button>
            </Link>
          </div>
        </div>
      ) : null}
      <div className="posts">
        {posts.map(post => (
          <Postcard
            message={post.message}
            date={post.date}
            image_url={post.image_url}
            game_id={post.game_id}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}
