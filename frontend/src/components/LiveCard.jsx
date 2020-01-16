import React, { useState, useEffect } from "react";
import Modal from "./Modal.jsx";
import axios from "axios";
import { backend } from "../conf.js";
import useModal from "./useModal.js";
import "./style/LiveCard.scss";

function LiveCard(props) {
  const { isShowing, toggle } = useModal();
  const streamTitle = props.stream_title;
  const [gameId, setGameId] = useState([]);

  useEffect(() => {
    axios.get(`${backend}/api/gamelist/${props.game_id}`).then(({ data }) => {
      let tmpGames = gameId;
      const results = data;
      tmpGames.push(...results);
      setGameId(results);
    });
  }, []);

  return (
    <div className="streamingStatus" onClick={toggle}>
      <Modal isShowing={isShowing} hide={toggle} user_name={props.user_name} />
      {gameId.length > 0 ? (
        <img
          className="blank_game_logo"
          src={`/games_icons/${gameId[0].id}.jpg`}
        />
      ) : (
        <div className="blank_game_logo"></div>
      )}
      <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
      <div className="streamCountainer">
        <div>
          <span className="streamerName">{props.streamer_name}</span> -{" "}
          {streamTitle.length > 15 ? (
            <span title={streamTitle}>{streamTitle.slice(0, 12) + "..."} </span>
          ) : (
            streamTitle
          )}
        </div>
        <div className="viewersCount">Viewers : {props.viewer_count}</div>
      </div>
    </div>
  );
}

export default LiveCard;
