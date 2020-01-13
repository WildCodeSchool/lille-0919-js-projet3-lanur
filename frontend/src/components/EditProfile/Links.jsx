import React from "react";
import "../style/EditProfileStyles/EditLinks.scss";

const Links = () => {
  return (
    <form className="container">
      <h1>Your links</h1>
      <div className="links">
        <div className="infoContainer">
          <label>Twitch</label>
          <input
            className="linkInput"
            type="link"
            placeholder="Your Twitch channel"
          />
        </div>
        <div className="infoContainer">
          <label>Youtube</label>
          <input
            className="linkInput"
            type="link"
            placeholder="Your Youtube channel"
          />
        </div>
        <div className="infoContainer">
          <label>Mixer</label>
          <input
            className="linkInput"
            type="link"
            placeholder="Your Mixer channel"
          />
        </div>
        <div className="infoContainer">
          <label>Discord</label>
          <input
            className="linkInput"
            type="link"
            placeholder="Your Discord pseudo"
          />
        </div>
      </div>
    </form>
  );
};
export default Links;
