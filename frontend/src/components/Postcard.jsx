import React from "react";
import "./style/postcard.scss";

function Postcard() {
  return (
    <div>
      test post card
      <div className="post">
        <div className="headpost">
          <div className="wpi">
            <img
              src="https://pickaface.net/gallery/avatar/unr_fake_180910_2220_9vd5qy.png"
              className="avatar"
            />
          </div>
          <div className="wpi">Pseudo</div>
          <div className="wpi">TeamName</div>
          <div className="wpi">postTime</div>
          <div className="wpi">Game</div>
        </div>
        <div className="contentpost">
          <div className="wpi">
            <img
              className="postmedia"
              src="https://via.placeholder.com/500x300"
            />
          </div>
          <div className="wpi">
            comment - content - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat cupiditate nesciunt dignissimos ratione
            voluptate tempora tempore porro ipsam perferendis et eaque id autem
            facere, architecto, at sunt quisquam dolorum ullam.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard;
