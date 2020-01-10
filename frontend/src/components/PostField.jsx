import React, { useState, Component } from "react";
import "./style/PostField.scss";
import axios from "axios";
import { backend } from "../conf.js";

function PostField() {
  const user_id = 4;
  const [message, setMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const postObject = {
      user_id,
      message
    };

    axios
      .post(`${backend}/api/posts`, postObject)
      .then(document.location.reload());
  };

  return (
    <div className="postFieldContainer">
      <div className="postField">
        <div className="avatar">
          <img
            className="avatarImg"
            src="https://pickaface.net/gallery/avatar/unr_fake_180910_2220_9vd5qy.png"
          ></img>
        </div>
        <form onSubmit={e => onSubmit(e)}>
          <textarea
            type="text"
            name="message"
            placeholder="Exprimez-vous !"
            onChange={e => {
              setMessage(e.target.value);
            }}
            className="headPost"
          />
          <button type="submit">post</button>
        </form>
      </div>
    </div>
  );
}

export default PostField;
