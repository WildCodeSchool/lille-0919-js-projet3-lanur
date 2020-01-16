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
        `https://api.twitch.tv/helix/streams?first=30&language=en&language=fr`,
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

  return (
    <div className="allLive">
      <div className="liveTitle">
        <h2> Live</h2>
      </div>
      <div className="liveContent">
        {lives.length > 1
          ? lives.map(live => (
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
