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
    if (file) {
      let imageUpload = new FormData();
      imageUpload.append("file", file);
      axios.post(`${backend}/api/postimg`, imageUpload).then(response => {
        let image_url = response.data.public_id;
        const postObject = { image_url, message, user_id };
        axios
          .post(`${backend}/api/posts`, postObject)
          .then(() => document.location.reload());
      });
    } else if (message) {
      const postObject = { message, user_id };
      axios
        .post(`${backend}/api/posts`, postObject)
        .then(() => document.location.reload());
    }
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
            maxlength="500"
          />
          <input type="file" onChange={e => handleImageChange(e)} />
          <button type="submit">post</button>
        </form>
      </div>
      {message || imagePreviewUrl ? (
        <div className="preview-container">
          <div className="preview">Aperçu de votre post:</div>
          <Postcard image_preview_url={imagePreviewUrl} message={message} />
        </div>
      ) : null}
    </div>
  );
}

export default PostField;
