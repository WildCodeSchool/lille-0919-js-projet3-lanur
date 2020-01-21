import React, { useEffect, useState } from "react";
import "./style/UserPage.scss";
import { Link } from "react-router-dom";
import { backend } from "../conf.js";
import axios from "axios";
import { useSelector, useStore } from "react-redux";
import Postcard from "./Postcard";

export default function UserPage() {
  const token = useSelector(state => state.jwt);
  const config = {
    headers: {
      Authorization: "Bearer " + token.token
    }
  };
  const [user, getUser] = useState();
  const [posts, setPosts] = useState([]);
  const offsetPosts = useSelector(state => state.offsetPosts);

  useEffect(() => {
    let params = { config };
    axios
      .get(`${backend}/api/profile`, config)
      .then(({ data }) => {
        getUser(data[0]);
      })
      .catch(err => {});
  }, [offsetPosts]);

  useEffect(() => {
    console.log("avant if");
    if (user) {
      console.log("après if");

      axios
        .get(`${backend}/api/user/posts/${user.id}`)
        .then(({ data }) => {
          setPosts(posts.concat(data));
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
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
            <Link to="">
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
