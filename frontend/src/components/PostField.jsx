import React, { useState, useEffect } from "react";
import "./style/PostField.scss";
import axios from "axios";
import { backend } from "../conf.js";
import Postcard from "./Postcard";

function PostField() {
  const user_id = 4;
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [gamelist, setGamelist] = useState([]);
  const [game_id, setGame_id] = useState(null);

  useEffect(() => {
    axios.get(`${backend}/api/gamelist/`).then(({ data }) => {
      setGamelist(data);
    });
  }, []);

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
        const postObject = { image_url, message, user_id, game_id };
        axios
          .post(`${backend}/api/posts`, postObject)
          .then(() => document.location.reload());
      });
    } else if (message) {
      const postObject = { message, user_id, game_id };
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
          <p>Quoi de neuf aujourd'hui?</p>
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
          <div className="gameSelection">
            Jeu concerné:
            <select
              name="game"
              onChange={e => {
                setGame_id(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value="null">Choisis ton jeu</option>>
              {gamelist.map(game => (
                <option value={game.id}>{game.name}</option>
              ))}
            </select>
          </div>
          <button type="submit">Poster</button>
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
