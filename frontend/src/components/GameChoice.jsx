import React from "react";
import "./style/GameChoice.scss";
import GameList from "./components/GameList";

class GameChoice extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <container className="gameContainer">
            <div className="games">
              <GameList />
            </div>
            </container>
        )
    }
}




export default GameChoice;