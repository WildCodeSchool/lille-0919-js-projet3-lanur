import React, { useState, useEffect } from "react";
import "../style/EditProfileStyles/EditRole.scss";
import axios from "axios";
import { backend } from "../../conf.js";
import { useSelector, useDispatch } from "react-redux";

const Role = () => {
  const user = useSelector(state => state.user);
  const user_id = useSelector(state => state.user_id);
  const dispatch = useDispatch();

  return (
    <form className="role">
      <h1>Your role</h1>
      <div>
        <div className="infoContainer">
          <label htmlFor="role-select">Your role</label>
          <select
            name="role"
            id="role-select"
            value={user.role}
            onChange={e => {
              dispatch({
                type: "SAVE_PROFILE_DATA",
                value: { role: e.target.value }
              });
            }}
          >
            <option value="">-- Please choose your role --</option>
            <option value="Player">Player</option>
            <option value="Pro-player">Pro-player</option>
            <option value="Coach">Coach</option>
            <option value="Team manager">Team Manager</option>
          </select>
        </div>
        <div className="infoContainer">
          <label>Your biography</label>
          <textarea
            type="text"
            placeholder="Describe you career"
            value={user.bio}
            onChange={e => {
              dispatch({
                type: "SAVE_PROFILE_DATA",
                value: { bio: e.target.value }
              });
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Role;
