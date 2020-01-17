import React, { useState, useEffect } from "react";
import "./style/LiveContainer.scss";
import axios from "axios";
import LiveCard from "./LiveCard";
import { twitch_Client_ID } from "../conf.js";

function LiveContainer() {
  const [lives, setLives] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.twitch.tv/helix/streams?first=100&language=en&language=fr`,
        {
          headers: {
            "Client-ID": twitch_Client_ID
          }
        }
      )
      .then(({ data }) => {
        setLives(data.data);
      });
  }, []);
  console.log(lives);
  return (
    <div className="allLive">
      <div className="liveTitle">
        <h2> Live</h2>
      </div>
      <div className="liveContent">
        {lives.length > 1
          ? lives
              .filter(
                ({ game_id }) =>
                  game_id === "21779" ||
                  game_id === "29595" ||
                  game_id === "32959" ||
                  game_id === "32507" ||
                  game_id === "33214" ||
                  game_id === "493057" ||
                  game_id === "511224" ||
                  game_id === "488552" ||
                  game_id === "460630" ||
                  game_id === "491115" ||
                  game_id === "513143" ||
                  game_id === "490422" ||
                  game_id === "138585" ||
                  game_id === "504461" ||
                  game_id === "461067" ||
                  game_id === "488615" ||
                  game_id === "32399"
              )
              .map(live => (
                <LiveCard
                  streamer_name={live.user_name}
                  stream_title={live.title}
                  viewer_count={live.viewer_count}
                  user_name={live.user_name}
                  game_id={live.game_id}
                />
              ))
          : null}
      </div>
    </div>
  );
}

export default LiveContainer;
