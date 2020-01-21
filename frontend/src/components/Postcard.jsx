import React from "react";
import "./style/postcard.scss";
import Moment from "react-moment";
import { Image, CloudinaryContext } from "cloudinary-react";

function Postcard(props) {
  return (
    <div className="postContainer">
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
              <div className="postComment ">
                {props.id} - {props.message}
              </div>
              <div className="tag">{props.tags}</div>
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
              <div className="reaction-button">
                <button>Like</button>
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
