import React, { useState } from "react";
import "./style/ProfilPage.scss";

const ProfilPage = () => {
  const [displayLinks, setToggleMenuLinks] = useState(false);
  const [displayRoles, setToggleMenuRole] = useState(false);
  const [displayGames, setToggleMenuGames] = useState(false);
  const [selectedGames, setSelectedGames] = useState([]);

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

        <h1 onClick={() => setToggleMenuRole(!displayRoles)} id="Role">
          Your role
        </h1>
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

        <h1 id="Links" onClick={() => setToggleMenuLinks(!displayLinks)}>
          Your links
        </h1>

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

        <h1 onClick={() => setToggleMenuGames(!displayGames)} id="Games">
          Your Games
        </h1>

        {displayGames && (
          <div className="games">
            <ul>
              <li
                className={selectedGames === "Apex Legends" ? "selected" : ""}
                onClick={() => setSelectedGames("Apex Legends")}
              >
                <img src="/pictures/apex.png" alt="Apex Legends" />
              </li>
              <li
                className={selectedGames === "CSGO" ? "selected" : ""}
                onClick={() => setSelectedGames("CSGO")}
              >
                <img
                  src="/pictures/csgo.png"
                  alt="Counter Strike Global Offensive"
                />
              </li>
              <li
                className={selectedGames === "Dota 2" ? "selected" : ""}
                onClick={() => setSelectedGames("Dota 2")}
              >
                <img src="/pictures/dota_2.png" alt="Dota 2" />
              </li>
              <li
                className={selectedGames === "Fortnite" ? "selected" : ""}
                onClick={() => setSelectedGames("Fortnite")}
              >
                <img src="/pictures/fortnite.png" alt="Fortnite" />
              </li>
              <li
                className={
                  selectedGames === "Heroes of the Storm" ? "selected" : ""
                }
                onClick={() => setSelectedGames("Heroes of the Storm")}
              >
                <img
                  src="/pictures/heroes_of_the_storm.png"
                  alt="Heroes of the Storm"
                />
              </li>
              <li
                className={selectedGames === "Hearthstone" ? "selected" : ""}
                onClick={() => setSelectedGames("Hearthstone")}
              >
                <img src="/pictures/hearthstone.png" alt="Hearthstone" />
              </li>
              <li
                className={selectedGames === "Krosmaga" ? "selected" : ""}
                onClick={() => setSelectedGames("Krosmaga")}
              >
                <img src="/pictures/krosmaga.png" alt="Krosmaga" />
              </li>
              <li
                className={
                  selectedGames === "League of Legends" ? "selected" : ""
                }
                onClick={() => setSelectedGames("League of Legends")}
              >
                <img
                  src="/pictures/league_of_legends.png"
                  alt="League of Legends"
                />
              </li>
              <li
                className={selectedGames === "Overwatch" ? "selected" : ""}
                onClick={() => setSelectedGames("Overwatch")}
              >
                <img src="/pictures/overwatch.png" alt="Overwatch" />
              </li>
              <li
                className={selectedGames === "Paladins" ? "selected" : ""}
                onClick={() => setSelectedGames("Paladins")}
              >
                <img src="/pictures/paladins.png" alt="Paladins" />
              </li>
              <li
                className={selectedGames === "PUBG" ? "selected" : ""}
                onClick={() => setSelectedGames("PUBG")}
              >
                <img src="/pictures/pubg.png" alt="PUBG" />
              </li>
              <li
                className={
                  selectedGames === "Rainbow Six Siege" ? "selected" : ""
                }
                onClick={() => setSelectedGames("Rainbow Six Siege")}
              >
                <img
                  src="/pictures/rainbow_six_siege.png"
                  alt="Rainbow Six Siege"
                />
              </li>
              <li
                className={selectedGames === "Rocket League" ? "selected" : ""}
                onClick={() => setSelectedGames("Rocket League")}
              >
                <img src="/pictures/rocket_league.png" alt="Rocket League" />
              </li>
              <li
                className={selectedGames === "Smite" ? "selected" : ""}
                onClick={() => setSelectedGames("Smite")}
              >
                <img src="/pictures/smite.png" alt="Smite" />
              </li>
              <li
                className={selectedGames === "Starcraft 2" ? "selected" : ""}
                onClick={() => setSelectedGames("Starcraft 2")}
              >
                <img src="/pictures/starcraft.png" alt="Starcraft 2" />
              </li>
              <li
                className={
                  selectedGames === "Street Fighter 5" ? "selected" : ""
                }
                onClick={() => setSelectedGames("Street Fighter 5")}
              >
                <img
                  src="/pictures/street_fighter_v.png"
                  alt="Street Fighter 5"
                />
              </li>
              <li
                className={
                  selectedGames === "Super Smash Bros Ultimate"
                    ? "selected"
                    : ""
                }
                onClick={() => setSelectedGames("Super Smash Bros Ultimate")}
              >
                <img
                  src="/pictures/super_smash_bros_ultimate.png"
                  alt="Super Smash Bros Ultimate"
                />
              </li>
              <li
                className={
                  selectedGames === "Teamfight Tactics" ? "selected" : ""
                }
                onClick={() => setSelectedGames("Teamfight Tactics")}
              >
                <img
                  src="/pictures/teamfight_tactics.png"
                  alt="Teamfight Tactics"
                />
              </li>
              <li
                className={selectedGames === "tekken 7" ? "selected" : ""}
                onClick={() => setSelectedGames("tekken 7")}
              >
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
