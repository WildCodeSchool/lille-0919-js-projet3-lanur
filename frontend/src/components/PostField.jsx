import React, { useState, useEffect } from "react";
import "./style/PostField.scss";
import axios from "axios";
import { backend } from "../conf.js";
import Postcard from "./Postcard";
import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Tag.scss";

function PostField() {
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.user_id);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [gamelist, setGamelist] = useState([]);
  const [game_id, setGame_id] = useState(null);
  const tags = useSelector(state => state.tags);

  const notify = () => toast("Post envoyé!");

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
          notify();
        });
      });
    } else if (message) {
      let postObject;
      if (game_id !== "noGame") {
        postObject = { message, user_id, game_id, tags };
      } else {
        postObject = { message, user_id, tags };
      }
      axios.post(`${backend}/api/posts`, postObject).then(() => {
        dispatch({ type: "RESET" });
        notify();
      });
    }
  };

  return (
    <div className="postFieldContainer">
      <ToastContainer
        position={toast.POSITION.BOTTOM_LEFT}
        hideProgressBar={true}
      />
      <div className="postField">
        <div className="avatar">
          <img
            className="avatarImg"
            alt="avatar"
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
          <input type="file" onChange={e => handleImageChange(e)} />
          <Tag />
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
      {message || imagePreviewUrl || game_id !== "noGame" ? (
        <div className="preview-container">
          <div className="preview">Aperçu de ton post:</div>
          <Postcard
            image_preview_url={imagePreviewUrl}
            message={message}
            tags={"#" + tags.join(" #")}
            game_id={game_id}
          />
        </div>
      ) : null}
    </div>
  );
}

export default PostField;
