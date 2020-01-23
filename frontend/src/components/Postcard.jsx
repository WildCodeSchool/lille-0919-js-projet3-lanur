import React, { useState, useEffect } from "react";
import "./style/postcard.scss";
import Moment from "react-moment";
import { Image, CloudinaryContext } from "cloudinary-react";
import Axios from "axios";
import { backend } from "../conf.js";

function Postcard(props) {
  const [like, setLike] = useState(false);
  const [nbLike, nbLikeUpdate] = useState(0);
  useEffect(() => {
    setLike(props.statuslike ? true : false);
    nbLikeUpdate(props.nblike);
  }, [props.statuslike]);

  const handleLike = (like) => {
    Axios.put(`${backend}/api/posts/${props.id}/like`, {
      userLike: like ? 1 : 0
    });
  };

  return (
    <div className="postContainer">
      <div className="post">
        {/* section with avatar, game logo and Like counter */}
        <div className="imgSection">
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

          <div
            className="nbLike"
            onClick={() => {
              if (like) nbLikeUpdate(nbLike - 1);
              else nbLikeUpdate(nbLike + 1);
              handleLike(!like);
              setLike(!like);
            }}
          >
            +{nbLike}
          </div>
        </div>
        <div className="contentPostContainer">
          <div className="contentPost">
            {/* section with name and information about the post */}
            <div className="headpost">
              <div>{props.userPseudo}</div>
              <div>TeamName</div>
              <div>
                <Moment format="L" date={props.date} />
                <Moment format="h:mm" date={props.date} />
              </div>
            </div>

            {/* section with the content of the post*/}
            <div className="contentpost">
              {/* section with the postcomment*/}
              <div className="postComment ">
                {props.id} - {props.message}
              </div>
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
            <div className="reaction">
              <div
                className={like ? "reaction-button-clicked" : "reaction-button"}
              >
                <button
                  onClick={() => {
                    if (like) nbLikeUpdate(nbLike - 1);
                    else nbLikeUpdate(nbLike + 1);
                    handleLike(!like);
                    setLike(!like);
                  }}
                >
                  +1
                </button>
              </div>
              <div className="reaction-button">
                <button>Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Postcard;
