import React, { useState, useEffect } from "react";
import "./style/PostField.scss";
import axios from "axios";
import { backend } from "../conf.js";
import Postcard from "./Postcard";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";

function PostField() {
  const dispatch = useDispatch();
  const user_id = 5;
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [gamelist, setGamelist] = useState([]);
  const [game_id, setGame_id] = useState(null);
  const tags = useSelector(state => state.tags);

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
        let postObject;
        if (game_id) {
          postObject = { image_url, message, user_id, game_id, tags };
        } else {
          postObject = { image_url, message, user_id, tags };
        }
        axios.post(`${backend}/api/posts`, postObject).then(() => {
          dispatch({ type: "RESET" });
        });
      });
    } else if (message) {
      let postObject;
      if (game_id !== "noGame") {
        console.log(tags);
        postObject = { message, user_id, game_id, tags };
      } else {
        console.log("test6");
        postObject = { message, user_id, tags };
      }
      axios.post(`${backend}/api/posts`, postObject).then(() => {
        dispatch({ type: "RESET" });
      });
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
            maxLength="500"
          />
          <Tag />
          <input type="file" onChange={e => handleImageChange(e)} />
          <div className="gameSelection">
            Jeu concerné:
            <select
              name="game"
              onChange={e => {
                setGame_id(e.target.value);
              }}
            >
              <option value="noGame">Choisis ton jeu</option>>
              {gamelist.map(game => (
                <option value={game.id}>{game.name}</option>
              ))}
            </select>
          </div>
          <button type="submit">Poster</button>
        </form>
      </div>
      {message ||
      tags ||
      imagePreviewUrl ||
      (game_id && game_id !== "noGame") ? (
        <div className="preview-container">
          <div className="preview">Aperçu de votre post:</div>
          <Postcard
            image_preview_url={imagePreviewUrl}
            message={message}
            tags={tags.join(" ")}
            game_id={game_id}
          />
        </div>
      ) : null}
    </div>
  );
}

export default PostField;
