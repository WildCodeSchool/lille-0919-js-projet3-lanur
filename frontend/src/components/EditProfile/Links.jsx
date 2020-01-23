import React, { useState, useEffect } from "react";
import "../style/EditProfileStyles/EditLinks.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { backend } from "../../conf.js";

const Links = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const user_id = useSelector(state => state.user_id);

  return (
    <form>
      <h1>Your links</h1>
      <div>
        <div className="infoContainer">
          <label>Twitch</label>
          <input
            className="linkInput"
            type="link"
            placeholder="Your Twitch channel"
            value={user.twitch}
            onChange={e => {
              dispatch({
                type: "SAVE_PROFILE_DATA",
                value: { twitch: e.target.value }
              });
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
              dispatch({
                type: "SAVE_PROFILE_DATA",
                value: { youtube: e.target.value }
              });
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
              dispatch({
                type: "SAVE_PROFILE_DATA",
                value: { mixer: e.target.value }
              });
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
              dispatch({
                type: "SAVE_PROFILE_DATA",
                value: { discord_pseudo: e.target.value }
              });
            }}
          />
        </div>
      </div>
    </form>
  );
};
export default Links;
