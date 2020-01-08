import React, { useState } from "react";
import "./style/PostField.scss";
import axios from "axios";

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
      .post("http://localhost:3000/api/posts", postObject)
      .then(() => console.log("post created"))
      .catch(err => {
        console.error(err);
      });
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
