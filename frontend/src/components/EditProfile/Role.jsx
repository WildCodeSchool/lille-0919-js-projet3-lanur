import React from "react";
import "../style/EditProfileStyles/EditRole.scss";

const Role = () => {
  return (
    <form className="container">
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
          <textarea type="text" placeholder="Describe you career" />
        </div>
      </div>
      <input
        type="submit"
        value="Submit your modifications"
        className="submit"
      />
    </form>
  );
};

export default Role;
