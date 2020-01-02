import React, { useState } from "react";
import "./style/ProfilPage.scss";

export default class ProfilePage extends React.Component {
  constructor() {
    super();

    this.state = {
      toggleMenuLinks: false,
      toggleMenuGames: false,
      toggleMenuRole: false
    };
  }

  toggleMenuLinks = () => {
    this.setState({ toggleMenuLinks: !this.state.toggleMenuLinks });
  };
  toggleMenuGames = () => {
    this.setState({ toggleMenuGames: !this.state.toggleMenuGames });
  };

  toggleMenuRole = () => {
    this.setState({ toggleMenuRole: !this.state.toggleMenuRole });
  };

  render() {
    return (
      <div className="container">
        <h1>Your Profile</h1>
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
              <input
                type="text"
                name="firstname"
                placeholder="Firstname"
              />{" "}
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
              <p>Your genre will not be visible on the website.</p>
            </div>
          </div>

          <div className="role" onClick={this.toggleMenuRole}>
            <h1>Your role</h1>
            {this.state.toggleMenuRole ? (
              <div
                ref={element => {
                  this.dropdownMenu = element;
                }}
              >
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
                  <textarea type="text" placeholder="Describe you career " />
                </div>
              </div>
            ) : null}
          </div>

          <div className="links" onClick={this.toggleMenuLinks}>
            <h1>Your links</h1>
            {this.state.toggleMenuLinks ? (
              <div
                ref={element => {
                  this.dropdownMenu = element;
                }}
              >
                <div className="infoContainer">
                  <label>Twitch</label>
                  <input type="link" placeholder="Your Twitch channel" />
                </div>
                <div className="infoContainer">
                  <label>Youtube</label>
                  <input type="link" placeholder="Your Youtube channel" />
                </div>
                <div className="infoContainer">
                  <label>Mixer</label>
                  <input type="link" placeholder="Your Mixer channel" />
                </div>
              </div>
            ) : null}
          </div>

          <div className="games" onClick={this.toggleMenuGames}>
            <h1>Your Games</h1>
            {this.state.toggleMenuGames ? (
              <div
                ref={element => {
                  this.dropdownMenu = element;
                }}
              >
                <ul>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                  <li>
                    <img src="https://via.placeholder.com/200" alt="" />
                  </li>
                </ul>{" "}
              </div>
            ) : null}
          </div>

          <input
            type="submit"
            value="Submit your modifications"
            className="submit"
          />
        </form>
      </div>
    );
  }
}
