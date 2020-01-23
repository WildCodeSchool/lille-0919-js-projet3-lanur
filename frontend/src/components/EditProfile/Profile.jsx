import "../style/EditProfileStyles/EditProfile.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "../../conf.js";
import { useSelector } from "react-redux";
import { Image, CloudinaryContext } from "cloudinary-react";

const Profile = () => {
  const user_avatar = useSelector(state => state.user_avatar);
  const [file, setFile] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState("./noob.jpg");

  useEffect(() => {
    if (user_avatar) {
      setImagePreviewUrl(user_avatar);
    } else {
      setImagePreviewUrl("./noob.jpg");
    }
  }, []);

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let selectedFile = e.target.files[0];

    reader.onloadend = () => {
      setFile(selectedFile);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = (e) => {
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
      </form>
    </div>
  );
};
export default Profile;
