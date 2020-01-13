import React, { useState } from "react";
import "../style/Games.scss";

const Games = () => {
  const [selectedGames, setSelectedGames] = useState([]);

  return (
    <div className="container">
      <div className="games">
        <h1>Your Games</h1>
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
            className={selectedGames === "League of Legends" ? "selected" : ""}
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
            className={selectedGames === "Rainbow Six Siege" ? "selected" : ""}
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
            className={selectedGames === "Street Fighter 5" ? "selected" : ""}
            onClick={() => setSelectedGames("Street Fighter 5")}
          >
            <img src="/pictures/street_fighter_v.png" alt="Street Fighter 5" />
          </li>
          <li
            className={
              selectedGames === "Super Smash Bros Ultimate" ? "selected" : ""
            }
            onClick={() => setSelectedGames("Super Smash Bros Ultimate")}
          >
            <img
              src="/pictures/super_smash_bros_ultimate.png"
              alt="Super Smash Bros Ultimate"
            />
          </li>
          <li
            className={selectedGames === "Teamfight Tactics" ? "selected" : ""}
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
      <input
        type="submit"
        value="Submit your modifications"
        className="submit"
      />
    </div>
  );
};

export default Games;
