import React, { useState, useEffect } from "react";
import "../style/EditProfileStyles/EditLinks.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { backend } from "../../conf.js";

const Links = () => {
  const [user, getUser] = useState();
  const user_id = useSelector(state => state.user_id);

  return (
    <form>
      <h1>Your links</h1>
      {user ? (
        <div>
          <div className="infoContainer">
            <label>Twitch</label>
            <input
              className="linkInput"
              type="link"
              placeholder="Your Twitch channel"
              value={user.twitch}
              onChange={e => {
                getUser({ ...user, twitch: e.target.value });
              }}
            />
          </div>
          <div className="infoContainer">
            <label>Youtube</label>
            <input
              className="linkInput"
              type="link"
              placeholder="Your Youtube channel"
              value={user.youtube}
              onChange={e => {
                getUser({ ...user, youtube: e.target.value });
              }}
            />
          </div>
          <div className="infoContainer">
            <label>Mixer</label>
            <input
              className="linkInput"
              type="link"
              placeholder="Your Mixer channel"
              value={user.mixer}
              onChange={e => {
                getUser({ ...user, mixer: e.target.value });
              }}
            />
          </div>
          <div className="infoContainer">
            <label>Discord</label>
            <input
              className="linkInput"
              type="link"
              placeholder="Your Discord pseudo"
              value={user.discord_pseudo}
              onChange={e => {
                getUser({ ...user, discord_pseudo: e.target.value });
              }}
            />
          </div>
        </div>
      ) : null}
    </form>
  );
};
export default Links;
