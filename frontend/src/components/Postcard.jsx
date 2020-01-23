import React, { useState } from "react";
import "./style/postcard.scss";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import { Image, CloudinaryContext } from "cloudinary-react";
import { backend } from "../conf.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Postcard(props) {
  const [comment, setComment] = useState("");
  const [displayComments, setDisplayComments] = useState(false);
  const [comments, setComments] = useState([]);
  const user_id = useSelector(state => state.user_id);
  const notifyComment = () => toast("Commentaire envoyé!");
  const wrongComment = () =>
    toast("Oups, impossible d'envoyer un commentaire vide");
  const commentClick = id => {
    setDisplayComments(!displayComments);
    getComments();
  };

  const getComments = () => {
    axios.get(`${backend}/api/comments/post/${props.id}`).then(({ data }) => {
      setComments(data);
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    let commentContent = {
      content: comment,
      post_id: props.id,
      user_id: user_id
    };
    if (comment) {
      axios.post(`${backend}/api/comments`, commentContent).then(response => {
        setComment("");
        notifyComment();
        getComments();
      });
    } else {
      wrongComment();
    }
  };

  return (
    <div className="postContainer">
      <ToastContainer
        position={toast.POSITION.BOTTOM_LEFT}
        hideProgressBar={true}
      />
      <div className="post">
        {/* section with avatar and game logo */}
        <div className=" imgSection">
          <div>
            {props.user_avatar ? (
              <CloudinaryContext cloudName="lanur">
                <Image publicId={props.user_avatar} className="avatar" />
              </CloudinaryContext>
            ) : (
              <img src="noob.jpg" className="avatar" />
            )}
          </div>
          {props.game_id > 0 ? (
            <div>
              <img
                src={`/games_icons/${props.game_id}.jpg`}
                className="avatar"
              />
            </div>
          ) : null}
          <div>
            <img
              src="https://i.pinimg.com/236x/f6/92/99/f6929980e929991bc8ff186a9aeca8b0.jpg"
              className="avatar"
            />
          </div>
        </div>
        <div className="contentPostContainer">
          <div className="contentPost">
            {/* section with name and information about the post */}
            <div className="headpost">
              <div>Pseudo</div>
              <div>TeamName</div>
              <div>
                <Moment format="L" date={props.date} />
                <Moment format="h:mm" date={props.date} />
              </div>
            </div>

            {/* section with the content of the post*/}
            <div className="contentpost">
              {/* section with the postcomment*/}
              <div className="postComment ">{props.message}</div>
              {props.image_url ? (
                <div className="mediaContainer">
                  {/* section with the media*/}
                  <CloudinaryContext cloudName="lanur">
                    <Image publicId={props.image_url} className="postmedia" />
                  </CloudinaryContext>
                </div>
              ) : null}
              {props.image_preview_url ? (
                <div className="mediaContainer">
                  <img className="postmedia" src={props.image_preview_url} />
                </div>
              ) : null}
            </div>
            {props.id && user_id ? (
              <div className="reaction">
                <div className="reaction-button">
                  <button>+1</button>
                </div>
                <div className="reaction-button">
                  <button onClick={() => commentClick()}>Comment</button>
                </div>
              </div>
            ) : null}
            {displayComments && props.id ? (
              <div className="commentContainer">
                Commentaire
                <textarea
                  type="text"
                  name="message"
                  placeholder="Exprimez-vous !"
                  onChange={e => {
                    setComment(e.target.value);
                  }}
                  className="commenttext"
                  maxLength="500"
                  value={comment}
                ></textarea>
                <button onClick={e => onSubmit(e)}>Envoyer</button>
                <div className="comments">
                  {comments.length > 0 ? (
                    comments.map(comment => (
                      <div className="comment">
                        <div>
                          {comment.avatar ? (
                            <CloudinaryContext cloudName="lanur">
                              <Image
                                publicId={comment.avatar}
                                className="avatar"
                              />
                            </CloudinaryContext>
                          ) : (
                            <img src="noob.jpg" className="avatar" />
                          )}
                        </div>
                        <p>
                          <span className="pseudo">{comment.pseudo}</span> -{" "}
                          {comment.content}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>Pas encore de commentaires. Soit le premier!</p>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Postcard;
