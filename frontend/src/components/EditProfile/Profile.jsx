import React from "react";
import "../style/EditProfileStyles/EditProfile.scss";

const Profile = () => {
  return (
    <div className="container">
      <h1 id="Profile">Your Profile</h1>
      <form>
        <div className="avatar">
          <h1>Avatar</h1>
          <img src="https://via.placeholder.com/250" alt="" />
          <input type="file" />
        </div>

        <div className="infos">
          <div className="infoContainer">
            <label for="pseudo">Pseudo</label>
            <input type="text" name="pseudo" placeholder="Pseudo" />
          </div>
          <div className="infoContainer">
            <label for="firstname">Firstname</label>
            <input type="text" name="firstname" placeholder="Firstname" />{" "}
          </div>
          <div className="infoContainer">
            <label for="lastname">Lastname</label>
            <input type="text" name="lastname" placeholder="Lastname" />
          </div>
          <div className="infoContainer">
            <label>Age</label>
            <input type="text" placeholder="Age" />
          </div>
          <div className="infoContainer">
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </div>
          <div className="infoContainer">
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className="infoContainer">
            <label htmlFor="genre-select">Genre</label>
            <select name="genre" id="genre-select">
              <option value="">-- Please choose your genre --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <p>Your genre will not be visible on the website.</p>
        </div>
        <input
          type="submit"
          value="Submit your modifications"
          className="submit"
        />
      </form>
    </div>
  );
};
export default Profile;
