import React from "react";
import Modal from "./Modal.jsx";
import useModal from "./useModal.js";
import "./style/LiveCard.scss";

function LiveCard(props) {
  const { isShowing, toggle } = useModal();
  const streamTitle = props.stream_title;

  return (
    <div className="streamingStatus" onClick={toggle}>
      <Modal isShowing={isShowing} hide={toggle} user_name={props.user_name} />

      <img src={`/pictures/${props.game_id}.png`} />
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
