import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Image, CloudinaryContext } from "cloudinary-react";
import { backend } from "../../conf.js";
import "../style/EditProfileStyles/EditProfile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("https://via.placeholder.com/250");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("./noob.jpg");
  const user = useSelector(state => state.user);
  const user_avatar = useSelector(state => state.user_avatar);

  useEffect(() => {
    if (user_avatar) {
      setImagePreviewUrl(user_avatar);
    } else {
      setImagePreviewUrl("./noob.jpg");
    }
  }, []);

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

      <form>
        <div className="avatar">
          <h1>Avatar</h1>
          {imagePreviewUrl === "./noob.jpg" ? (
            <img src={imagePreviewUrl} alt="" />
          ) : (
            <CloudinaryContext cloudName="lanur">
              <Image publicId={user_avatar} />
            </CloudinaryContext>
          )}
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
                dispatch({
                  type: "SAVE_PROFILE_DATA",
                  value: { firstname: e.target.value }
                });
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
                dispatch({
                  type: "SAVE_PROFILE_DATA",
                  value: { lastname: e.target.value }
                });
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
                dispatch({
                  type: "SAVE_PROFILE_DATA",
                  value: { age: e.target.value }
                });
              }}
            />
          </div>
          <div className="infoContainer">
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={user.country}
              onChange={e => {
                dispatch({
                  type: "SAVE_PROFILE_DATA",
                  value: { country: e.target.value }
                });
              }}
            />
          </div>
          <div className="infoContainer">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={user.city}
              onChange={e => {
                dispatch({
                  type: "SAVE_PROFILE_DATA",
                  value: { city: e.target.value }
                });
              }}
            />
          </div>
          <div className="infoContainer">
            <label htmlFor="genre-select">Genre</label>
            <select
              name="genre"
              id="genre-select"
              value={user.gender}
              onChange={e => {
                dispatch({
                  type: "SAVE_PROFILE_DATA",
                  value: { gender: e.target.value }
                });
              }}
            >
              <option value="default">-- Please choose your genre --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <p>Your genre will not be visible on the website.</p>
        </div>
      </form>
    </div>
  );
};
export default Profile;
