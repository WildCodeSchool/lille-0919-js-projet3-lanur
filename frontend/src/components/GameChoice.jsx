import React, { useState } from "react";
import "./style/GameChoice.scss";

function GameChoice(props) {
  const [click, setClick] = useState(false);
  return (
    <div className="gameChoice" onClick={() => setClick(!click)}>
      <button className={click ? "status-on" : "status-off"}>
        <img className="picture" src={props.picture} />
        {click && <img className="checkbox" src="/pictures/checkbox.png" />}
      </button>
    </div>
  );
}

export default GameChoice;
