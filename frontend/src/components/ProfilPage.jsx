import React, { useState } from "react";
import "./style/ProfilPage.scss";

const ProfilPage = () => {
  const [displayLinks, setToggleMenuLinks] = useState(false);
  const [displayRoles, setToggleMenuRole] = useState(false);
  const [displayGames, setToggleMenuGames] = useState(false);

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

        <h1 onClick={() => setToggleMenuRole(!displayRoles)}>Your role</h1>
        {displayRoles && (
          <div className="role">
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
        )}

        <h1 onClick={() => setToggleMenuLinks(!displayLinks)}>Your links</h1>

        {displayLinks && (
          <div className="links">
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
            <div className="infoContainer">
              <label>Discord</label>
              <input type="link" placeholder="Your Discord pseudo" />
            </div>
          </div>
        )}

        <h1 onClick={() => setToggleMenuGames(!displayGames)}>Your Games</h1>

        {displayGames && (
          <div className="games">
            <ul>
              <li>
                <img src="/pictures/apex.png" alt="Apex Legends" />
              </li>
              <li>
                <img
                  src="/pictures/csgo.png"
                  alt="Counter Strike Global Offensive"
                />
              </li>
              <li>
                <img src="/pictures/dota_2.png" alt="Dota 2" />
              </li>
              <li>
                <img src="/pictures/fortnite.png" alt="Fortnite" />
              </li>
              <li>
                <img
                  src="/pictures/heroes_of_the_storm.png"
                  alt="Heroes of the Storm"
                />
              </li>
              <li>
                <img src="/pictures/hearthstone.png" alt="Hearthstone" />
              </li>
              <li>
                <img src="/pictures/krosmaga.png" alt="Krosmaga" />
              </li>
              <li>
                <img
                  src="/pictures/league_of_legends.png"
                  alt="League of Legends"
                />
              </li>
              <li>
                <img src="/pictures/overwatch.png" alt="Overwatch" />
              </li>
              <li>
                <img src="/pictures/paladins.png" alt="Paladins" />
              </li>
              <li>
                <img src="/pictures/pubg.png" alt="PUBG" />
              </li>
              <li>
                <img
                  src="/pictures/rainbow_six_siege.png"
                  alt="Rainbow Six Siege"
                />
              </li>
              <li>
                <img src="/pictures/rocket_league.png" alt="Rocket League" />
              </li>
              <li>
                <img src="/pictures/smite.png" alt="Smite" />
              </li>
              <li>
                <img src="/pictures/starcraft.png" alt="Starcraft 2" />
              </li>
              <li>
                <img
                  src="/pictures/street_fighter_v.png"
                  alt="Street Fighter 5"
                />
              </li>
              <li>
                <img
                  src="/pictures/super_smash_bros_ultimate.png"
                  alt="Super Smash Bros Ultimate"
                />
              </li>
              <li>
                <img
                  src="/pictures/teamfight_tactics.png"
                  alt="Teamfight Tactics"
                />
              </li>
              <li>
                <img src="/pictures/tekken7.png" alt="tekken 7" />
              </li>
            </ul>
          </div>
        )}

        <input
          type="submit"
          value="Submit your modifications"
          className="submit"
        />
      </form>
    </div>
  );
};
export default ProfilPage;
