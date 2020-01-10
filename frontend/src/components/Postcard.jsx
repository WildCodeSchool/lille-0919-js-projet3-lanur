import React from "react";
import "./style/postcard.scss";
import Moment from "react-moment";

function Postcard(props) {
  return (
    <div className="postContainer">
      <div className="post">
        {/* section with avatar and game logo */}
        <div className=" imgSection">
          <div>
            <img
              src="https://pickaface.net/gallery/avatar/unr_fake_180910_2220_9vd5qy.png"
              className="avatar"
            />
          </div>
          <div>
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/"
              className="avatar"
            />
          </div>
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
              <div className="mediaContainer">
                {/* section with the media*/}
                <img
                  className="postmedia"
                  src="https://via.placeholder.com/500x300"
                />
              </div>
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
