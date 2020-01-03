import React from 'react';
import Form from "./components/Form";
import GameChoice from "./components/GameChoice";
import GameList from "./GameList";



function App() {
  return (
    <div className="App">
      <div className="bigGamePage">
      <div className="gamePage">
      {GameList.map ((game) => {
      return (<GameChoice name={game.name} picture={game.picture} click={game.click} />)})}
      </div>
      </div>
    </div>)
};


export default App;
