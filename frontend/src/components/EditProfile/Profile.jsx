import "../style/EditProfileStyles/EditProfile.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "../../conf.js";
import { useSelector } from "react-redux";

const Profile = () => {
  const [file, setFile] = useState("https://via.placeholder.com/250");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    "https://via.placeholder.com/250"
  );
  const [user, getUser] = useState();
  const user_id = useSelector(state => state.user_id);

  const handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let selectedFile = e.target.files[0];
    reader.onloadend = () => {
      setFile(selectedFile);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // post of profile picture
    let data = new FormData();
    data.append("monfichier", file);
    axios.post(`${backend}/imgupload`, data).then();
  };

  return (
    <div className="profile">
      <h1>Your Profile</h1>
      {user ? (
        <form>
          <div className="avatar">
            <h1>Avatar</h1>
            <img src={imagePreviewUrl} alt="" />
            <input type="file" onChange={e => handleImageChange(e)} />
          </div>
          <div className="infos">
            <div className="infoContainer">
              <label for="pseudo">Pseudo</label>
              <input type="text" name="pseudo" value={user.pseudo} />
            </div>
            <div className="infoContainer">
              <label for="firstname">Firstname</label>
              <input
                type="text"
                name="firstname"
                placeholder="Firstname"
                value={user.firstname}
                onChange={e => {
                  getUser({ ...user, firstname: e.target.value });
                }}
              />
            </div>
            <div className="infoContainer">
              <label for="lastname">Lastname</label>
              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                value={user.lastname}
                onChange={e => {
                  getUser({ ...user, lastname: e.target.value });
                }}
              />
            </div>
            <div className="infoContainer">
              <label>Age</label>
              <input
                type="text"
                placeholder="Age"
                value={user.age}
                onChange={e => {
                  getUser({ ...user, age: e.target.value });
                }}
              />
            </div>
            <div className="infoContainer">
              <label>Country</label>
              <input
                type="text"
                placeholder="Country"
                value={user.country}
                onChange={e => getUser({ ...user, country: e.target.value })}
              />
            </div>
            <div className="infoContainer">
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                value={user.city}
                onChange={e => {
                  getUser({ ...user, city: e.target.value });
                }}
              />
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
        </form>
      ) : null}
    </div>
  );
};
export default Profile;
