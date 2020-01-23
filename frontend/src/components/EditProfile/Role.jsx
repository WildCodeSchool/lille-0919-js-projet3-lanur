import React, { useState, useEffect } from "react";
import "../style/EditProfileStyles/EditRole.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { backend } from "../../conf.js";

const Role = () => {
  const [user, getUser] = useState();
  const user_id = useSelector(state => state.user_id);

  return (
    <form className="role">
      <h1>Your role</h1>
      <div>
        <div className="infoContainer">
          <label htmlFor="role-select">Your role</label>
          <select name="role" id="role-select">
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
              getUser({ ...user, bio: e.target.value });
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Role;
