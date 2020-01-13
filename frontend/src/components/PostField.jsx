import React, { useState, Component } from "react";
import "./style/PostField.scss";
import axios from "axios";
import { backend } from "../conf.js";
import Postcard from "./Postcard";

function PostField() {
  const user_id = 4;
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const handleImageChange = e => {
    e.preventDefault();
    console.log(e.target.files);
    console.log("----------------------");

    let reader = new FileReader();
    let selectedFile = e.target.files[0];

    reader.onloadend = () => {
      setFile(selectedFile);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

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
          <input type="file" onChange={e => handleImageChange(e)} />
          <button type="submit">post</button>
        </form>
      </div>
      <Postcard imageUrl={imagePreviewUrl} message={message} />
    </div>
  );
}

export default PostField;
