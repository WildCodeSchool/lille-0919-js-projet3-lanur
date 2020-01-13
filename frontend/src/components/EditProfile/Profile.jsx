import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [file, setFile] = useState("https://via.placeholder.com/250");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    "https://via.placeholder.com/250"
  );

  const handleImageChange = e => {
    e.preventDefault();
    console.log(e.target.files);
    console.log("----------------------");

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
    axios.post("http://localhost:5050/imgupload", data).then(response => {
      alert("image added with success");
    });
  };

  return (
    <div className="container">
      <h1 id="Profile">Your Profile</h1>
      <form>
        <div className="avatar">
          <h1>Avatar</h1>

          <img src={imagePreviewUrl} alt="" />
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
