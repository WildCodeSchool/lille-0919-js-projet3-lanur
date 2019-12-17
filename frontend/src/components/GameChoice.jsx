import React from "react";
import "./style/GameChoice.scss";

class GameChoice extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <container className="gameContainer">
            <div className="games">
                <img  className="img" src="/pictures/league_of_legends.png" />
                <img  className="img" src="/pictures/dota_2.png" />
                <img  className="img" src="/pictures/heroes_of_the_storm.png" />
                <img  className="img" src="/pictures/smite.png" />
                <img  className="img" src="/pictures/fortnite.png" />
                <img  className="img" src="/pictures/pubg.png" />
                <img  className="img" src="/pictures/csgo.png" />
                <img  className="img" src="/pictures/apex.png" />
                <img  className="img" src="/pictures/overwatch.png" />
                <img  className="img" src="/pictures/rainbow_six_siege.png" />
                <img  className="img" src="/pictures/paladins.png" />
                <img  className="img" src="/pictures/teamfight_tactics.png" />
                <img  className="img" src="/pictures/starcraft.png" />
                <img  className="img" src="/pictures/hearthstone.png" />
                <img  className="img" src="/pictures/krosmaga.png" />
                <img  className="img" src="/pictures/super_smash_bros_ultimate.png" />
                <img  className="img" src="/pictures/tekken7.png" />
                <img  className="img" src="/pictures/street_fighter_v.png" />
                <img  className="img" src="/pictures/rocket_league.png" />
            </div>
            </container>
        )
    }
}




export default GameChoice;